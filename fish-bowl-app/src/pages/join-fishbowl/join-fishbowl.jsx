import { useParams } from 'react-router'; import React, { useState, useEffect, useRef } from "react";
import { styled } from '@mui/material/styles';
import io from "socket.io-client"

const Page = styled('div')({
    display: 'flex',
    height: '100vh',
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#46516e',
    flexDirection: 'column',
})

const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    height: '500px',
    maxHeight: '500px',
    overflow: 'auto',
    width: '400px',
    border: '1px solid lightgray',
    borderRadius: '10px',
    paddingBottom: '10px',
    marginTop: '25px',
})
const TextArea = styled('textarea')({
    width: '98%',
    height: '100px',
    borderRadius: '10px',
    marginTop: '10px',
    paddingLeft: '10px',
    paddingTop: '10px',
    fontSize: '17px',
    backgroundColor: 'transparent',
    border: '1px solid lightgray',
    outline: 'none',
    color: 'lightgray',
    letterSpacing: '1px',
    lineHeight: '20px',
})


// const Button = styled.button`
//   background-color: pink;
//   width: 100%;
//   border: none;
//   height: 50px;
//   border-radius: 10px;
//   color: #46516e;
//   font-size: 17px;
// `;

// const Form = styled.form`
//   width: 400px;
// `;

// const MyRow = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: flex-end;
//   margin-top: 10px;
// `;

// const MyMessage = styled.div`
//   width: 45%;
//   background-color: pink;
//   color: #46516e;
//   padding: 10px;
//   margin-right: 5px;
//   text-align: center;
//   border-top-right-radius: 10%;
//   border-bottom-right-radius: 10%;
// `;

// const PartnerRow = styled(MyRow)`
//   justify-content: flex-start;
// `;

// const PartnerMessage = styled.div`
//   width: 45%;
//   background-color: transparent;
//   color: lightgray;
//   border: 1px solid lightgray;
//   padding: 10px;
//   margin-left: 5px;
//   text-align: center;
//   border-top-left-radius: 10%;
//   border-bottom-left-radius: 10%;
// `;

export default function JoinFishbowlPage() {

    const { roomId } = useParams()
    const [name, setYourName] = useState(null)
    const [yourID, setYourID] = useState();
    const [room, setRoomID] = useState();
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");

    const socketRef = useRef();
   
    useEffect(() => {
        socketRef.current = io.connect('/');

        socketRef.current.emit('join-room', roomId);
    
        console.log(socketRef.current)

        socketRef.current.on("your id", id => {
            setYourID(id);
        })
        socketRef.current.on("join-room", roomId => {
            setRoomID(roomId);
        })

        socketRef.current.on("message", (message) => {
            receivedMessage(message);
            console.log(message)
        })
    }, []);

    function receivedMessage(message) {
        setMessages(oldMsgs => [...oldMsgs, message]);
    }

    function sendMessage(e) {
        e.preventDefault();
        const messageObject = {
            body: message,
            id: yourID,
            name: name,
            roomId:roomId,
        };
        setMessage("");
        socketRef.current.emit("send message", messageObject);
        console.log(messageObject)
    }

    function handleChange(e) {
        setMessage(e.target.value);
    }

    function handleUserName(e) {
        e.preventDefault()
        setYourName(e.target.name.value)
    }

    return (
        <Page>
            <form onSubmit={handleUserName}>
                <input placeholder='your name' name='name'></input>
                <button type='submit'>set name</button>
            </form>
            {name === null ? '' : <p>{name}</p>}
            <Container>
                {messages.map((message, index) => {
                    if (message.id === yourID) {
                        return (
                            <div key={index}>
                                <div>
                                    {message.body}
                                </div>
                            </div>
                        )
                    }
                    return (
                        <div key={index}>
                            <div>
                                {message.body}
                            </div>
                            <div>
                                {message.name}
                            </div>
                        </div>
                    )
                })}
            </Container>
            <form onSubmit={sendMessage}>
                <TextArea value={message} onChange={handleChange} placeholder="Say something..." />
                <button>Send</button>
            </form>
        </Page>
    );
};