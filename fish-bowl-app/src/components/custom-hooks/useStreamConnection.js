import { useState, useEffect, useRef } from "react";
import io from 'socket.io-client'
import Peer from 'peerjs';



export default function useStreamConnection(roomId) {


    // Returned variables 
    const [messages, setMessages] = useState([])
    const [fishbowlers, setFishbowlers] = useState([])
    const [users, setUsers] = useState([])
    const [fishbowlInfo, setFishbowl] = useState({})
    const [streams, updateStream] = useState([]);
    const [yourID, setYourID] = useState('');

    //not returned variables

    const [sender, setSender] = useState({})

    const socketRef = useRef();


    const options = {
        method: 'GET',
        headers: {
            "Authorization": sessionStorage.getItem('sesion')
        }
    }

    async function getInfo() {
        const fishbowls = await fetch(`http://localhost:3001/user/becomeafish/joinfishbowl/getfishbowl/${roomId}`, options)
        const fishbowldata = await fishbowls.json();
        setFishbowl(fishbowldata);
        console.log(fishbowldata)

        const user = await fetch("http://localhost:3001/user", options);
        const userdata = await user.json();
        setSender(userdata)
        console.log(userdata)
        return fishbowldata, userdata
    }



    const peers = {}
    useEffect(() => {
        let userID = '';
        let activeUsersArr = []

        const connectRoom = async () => {
            const userdata = await getInfo();
            socketRef.current = io.connect('http://localhost:3001');

            socketRef.current.emit('join-room', roomId, userdata.name)

            socketRef.current.on("userId", id => {
                userID = id;
                setYourID(id);
            })

            const myPeer = new Peer(`${userID}`, { key: 'myapikey' });

            socketRef.current.on("new-chat-user", allUsers => {
                activeUsersArr = []
                allUsers.forEach(u => u.users.forEach(n => activeUsersArr.push(n.name)))
                setUsers(activeUsersArr)
            })

            socketRef.current.on("chat-user left", allUsers => {
                activeUsersArr = []
                allUsers.forEach(u => u.users.forEach(n => activeUsersArr.push(n.name)))
                setUsers(activeUsersArr)
            })

            socketRef.current.on("message", (message) => {
                receivedMessage(message)
            })

            //Streaming
            navigator.mediaDevices.getUserMedia({
                video: true,
                audio: true
            }).then(stream => {
                addVideoStream(stream)
                myPeer.on('call', call => {
                    call.answer(stream)
                    call.on('stream', userVideoStream => {
                        addVideoStream(userVideoStream)
                    })
                    socketRef.current.on('user-streaming', userId => {
                        connectToNewUser(userId, stream);
                    })
                })
                function connectToNewUser(userId, stream) {
                    const call = myPeer.call(userId, stream);
                    console.log('calling' + userId)
                    let newUserStream;
                    call.on('stream', userVideoStream => {
                        newUserStream = userVideoStream;
                        addVideoStream(newUserStream)
                    })
                    call.on('close', () => {
                        // video.remove()
                        const i = streams.findIndex(s => s === newUserStream);
                        streams.splice(i, 1);
                        updateStream([...streams]);
                    })

                    peers[userId] = call
                }
                
                myPeer.on('open', id => {
                    socketRef.current.emit('join-room', roomId, id)
                })
             
            })
        }
        connectRoom();
        return () => {
            socketRef.current.emit('user-disconnect', roomId, userID);
        }

    }, []);

    function receivedMessage(message) {
        setMessages(oldMsgs => [...oldMsgs, message])
    }

    function broadcastMessage(str) {
        const message = {
            body: str,
            id: yourID,
            sender: sender.name
        }
        socketRef.current.emit("send message", message, roomId);
    }

    function addVideoStream(stream) {
        // video.srcObject = stream
        // video.addEventListener('loadedmetadata', () => {
        //     video.play()
        // })
        // const videoGrid = document.getElementById('video-grid')
        // videoGrid.append(video)
        streams.push(stream);
        updateStream([...streams])
        console.log('printing streams')
        console.log(streams)
    }


    return { messages, fishbowlInfo, fishbowlers, yourID, users, streams, broadcastMessage }
}

