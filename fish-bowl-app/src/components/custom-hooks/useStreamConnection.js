import { useState, useEffect, useRef } from "react";
import io from 'socket.io-client'



export default function useStreamConnection(roomId) {


    // Returned variables 
    const [messages, setMessages] = useState([])
    const [fishbowlers, setFishbowlers] = useState([])
    const [users, setUsers] = useState([])
    const [fishbowlInfo, setFishbowl] = useState({})
    const [yourID, setYourID] = useState();


    console.log(messages)
    console.log(fishbowlInfo)

    //not returned variables

    let [sender, setSender] = useState({})

    const socketRef = useRef();


    const options = {
        method: 'GET',
        headers: {
            "Authorization": sessionStorage.getItem('sesion')
        }
    }

    useEffect(() => {
            fetch(`http://localhost:3001/user/becomeafish/joinfishbowl/getfishbowl/${roomId}`, options)
                .then(f => f.json())
                .then(fd => {
                    setFishbowl(fd); console.log(fd)
                    fetch("http://localhost:3001/user", options)
                        .then(r => r.json())
                        .then(d => { setSender(d); console.log(d) })
                })
    },[])

    useEffect(() => {
        const connectRoom = async() => {
            socketRef.current = io.connect('http://localhost:3001');
            socketRef.current.emit('join-room', roomId)
            socketRef.current.on("new user", allUsers => {
                setUsers([...allUsers])
            })
            socketRef.current.on("userId", id => {
                setYourID(id);
            })
            socketRef.current.on("message", (message) => {
                receivedMessage(message)
            })
        }
        connectRoom();
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


    return { messages, fishbowlInfo, fishbowlers, yourID, users, broadcastMessage }
}

