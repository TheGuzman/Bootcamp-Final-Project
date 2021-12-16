import Peer from 'peerjs';
import io from "socket.io-client"
import { useParams } from 'react-router'; 
import { useState, useEffect, useRef } from "react";



export default function useStream(){

const { roomID } = useParams()
let [user, setUser] = useState(null)
const [yourID, setYourID] = useState();
// const [allIDs, setAllIDs] = useState({});
// const [room, setRoomID] = useState();
const [messages, setMessages] = useState([]);
const [message, setMessage] = useState("");

const [allUsers, setAllUsers]= useState([])


useEffect(() => {
    fetch("http://localhost:3001/user", {
        method: 'GET',
        headers: {
            "Authorization": sessionStorage.getItem('sesion')
        }
    })
        .then(r => r.json())
        .then(d => { setUser(d); console.log(d) })
}, [])


const socketRef = useRef();


useEffect(() => {
    const connectRoom = async () => {
        socketRef.current = io.connect('http://localhost:3001');

        socketRef.current.emit('join-room', roomID);

        socketRef.current.on("userId", id => {
            setYourID(id);
            allUsers.push(id)
            setAllUsers([...id])
        })

        socketRef.current.on("message", (message) => {
            console.log('Llega un mensajitooooo', message)
            receivedMessage(message);
        })
        function receivedMessage(message) {
            setMessages(oldMsgs => [...oldMsgs, message]);
        }
        
        function sendMessage(e) {
            e.preventDefault();
            const messageObject = {
                body: message,
                id: yourID,
                name: user.name,
                // roomId: roomId,
            };
            setMessage("");
            socketRef.current.emit("send message", messageObject);
        }
        function handleChange(e) {
            setMessage(e.target.value);
        }
        const handleKeypress = e => {
            if (e.keyCode === 13) {
                sendMessage();
            }
        };
        return messages, allUsers, handleChange, handleKeypress
    }
    connectRoom();
}, []);




}