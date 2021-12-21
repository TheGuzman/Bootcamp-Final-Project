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
        return userdata
    }




    useEffect(() => {
        let userID = '';
        let activeUsersArr = []
        const peers = {}

        const connectRoom = async () => {
            const userdata = await getInfo();
            const stream = await navigator.mediaDevices.getUserMedia({
                video: true,
                audio: true,
            });
            let myPeer;

            socketRef.current = io.connect('http://localhost:3001');

            socketRef.current.emit('join-room', roomId, userdata.name)

            socketRef.current.on("userId", id => {

                userID = id;
                setYourID(id);
                myPeer = new Peer(id);
                myPeer.on('open', id => {
                    socketRef.current.emit('join-streaming-room', id)
                    console.log('my peer open ' + myPeer.id)
                })

                myPeer.on('call', call => {
                    // console.log('llamando a...')
                    // console.log(id)
                    console.log(call)
                    call.answer(stream)
                    call.on('stream', userVideoStream => {
                        if (!streamsArr.includes(userVideoStream.id)) {
                            addVideoStream(userVideoStream)
                        }
                    })
                })
            })

            socketRef.current.on("new-chat-user", allUsers => {
                activeUsersArr = []
                allUsers.forEach(u => u.users.forEach(n => activeUsersArr.push(n.name)))
                setUsers(activeUsersArr)
            })

            socketRef.current.on("chat-user-left", allUsers => {
                activeUsersArr = []
                allUsers.forEach(u => u.users.forEach(n => activeUsersArr.push(n.name)))
                setUsers(activeUsersArr)
            })

            socketRef.current.on("message", (message) => {
                receivedMessage(message)
            })



            //Streaming
            // socketRef.current.on('room-not-full', () => {
            //     console.log('room not full')

            addVideoStream(stream)
            socketRef.current.on('user-streaming', userID => {
                connectToNewUser(userID, stream);
            })
            // })

            let streamArrinfo = []

            function connectToNewUser(userID, stream) {
                const call = myPeer.call(userID, stream);
                // console.log('calling' + userID)
                let newUserStream;

                streamArrinfo.push({ userID, stream })

                call.on('stream', userVideoStream => {
                    newUserStream = userVideoStream;
                    // console.log('newUserStream')
                    // console.log(newUserStream)
                    if (!streamsArr.includes(newUserStream.id)) {
                        addVideoStream(newUserStream)
                    }
                })
                socketRef.current.on('close', userID => {
                    console.log('Firing on close!')
                    console.log(userID)
                    console.log(streamArrinfo)
    
    
                    const findStreamToDelete = streamArrinfo.find(u => u.userID === userID)
                    console.log('findStreamToDelete')
                    console.log(findStreamToDelete)
    
                    // const indexOfStreamDummyArray = streamArrinfo.findIndex(s=>s.userID === userID)
                    // streamArrinfo = streamArrinfo.splice(indexOfStreamDummyArray,1)
                    // console.log('indexOfStreamDummyArray')
                    // console.log(indexOfStreamDummyArray)
    
    
                    // console.log('printing streams')
                    // console.log(streams)
    
                    
                    const i = streams.findIndex(s => s.id === findStreamToDelete.stream.id);
                    // streams.splice(i,1)
    
                    // console.log(i);
                    if (i !== -1) {
                        streams.splice(i, 1);
                    }
                    else {
                        return
                    }
    
                    // }
    
                    // console.log('call on close')
    
                    updateStream([...streams]);
    
                    // })
                })
                

                peers[userID] = call
            }

        }
        connectRoom();
        return () => {
            socketRef.current.emit('user-disconnect', ({ roomId, userID }));
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

    let streamsArr = []

    function addVideoStream(stream) {
        console.log('adding stream')
        console.log(stream)

        streamsArr.push(stream.id);
        streams.push(stream);
        updateStream([...streams])
        console.log('printing streams')
        console.log(streams)
    }



    return { messages, fishbowlInfo, fishbowlers, yourID, users, streams, broadcastMessage }
}

