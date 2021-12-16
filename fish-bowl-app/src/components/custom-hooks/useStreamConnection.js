import { useState, useEffect, useRef } from "react";
import io from 'socket.io-client'



export default function useStreamConnection(roomId) {


    // Returned variables 
    const [messages, setMessages] = useState([])
    const [fishbowlers, setFishbowlers] = useState([])
    const [users, setUsers] = useState([])
    const [fishbowlInfo, setFishbowl] = useState({})
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
    

    
    useEffect(() => {
        let userID = '';
        let activeUsersArr =[]
        const connectRoom = async () => {
            const userdata = await getInfo();
            socketRef.current = io.connect('http://localhost:3001');
            socketRef.current.emit('join-room', roomId, userdata.name)
            socketRef.current.on("new user", allUsers => {
                console.log(allUsers)
                activeUsersArr=[]
                allUsers.forEach(u=>u.users.forEach(n=>activeUsersArr.push(n.name)))
                setUsers(activeUsersArr)
            })
            socketRef.current.on("user left", allUsers => {
                activeUsersArr=[]
                allUsers.forEach(u=>u.users.forEach(n=>activeUsersArr.push(n.name)))
                setUsers(activeUsersArr)
            })
            socketRef.current.on("userId", id => {
                userID = id;
                console.log(id)
                setYourID(id);
            })
            socketRef.current.on("message", (message) => {
                receivedMessage(message)
            })
        }
        connectRoom();
        return () => {
            console.log('from console.log' + yourID)
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


    return { messages, fishbowlInfo, fishbowlers, yourID, users, broadcastMessage }
}

