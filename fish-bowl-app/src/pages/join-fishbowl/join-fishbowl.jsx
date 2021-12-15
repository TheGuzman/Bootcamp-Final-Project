import React from "react";
import io from "socket.io-client"
import { useParams } from 'react-router';

import { Stack } from '@mui/material';

import { Page, MainContainer, ChatContainer, MyRow, MyMessage, PartnerMessage, PartnerRow, SenderName, TextArea, SendButton, Form } from '../../components/styled-chat/styled-chat.jsx'
import { useState, useRef, useEffect } from "react";

export default function JoinFishbowlPage() {

    const { roomId } = useParams()
    const socketRef = useRef();


    let [fishbowl, setFishbowl] = useState('')
    let [user, setUser] = useState(null)
    let [allUsers, setAllUsers] = useState([])
    const [yourID, setYourID] = useState();
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");

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
                    .then(d => { setUser(d); console.log(d) })
            })
    }, [])


    let allUsersArray = [];
    useEffect(() => {
        const connectRoom = () => {
            socketRef.current = io.connect('http://localhost:3001');
            socketRef.current.emit('join-room', roomId)
            socketRef.current.on("new user", users => {
                users.forEach(u => allUsersArray.push(u))
                console.log(users)
                setAllUsers([...allUsersArray])
                console.log('printing all users')
                console.log(allUsers)
            })
            socketRef.current.on("userId", id => {
                setYourID(id);
            })
            socketRef.current.on("message", (message) => {
                receivedMessage(message);
            })
        }
        connectRoom();
    }, []);


    function receivedMessage(message) {
        setMessages(oldMsgs => [...oldMsgs, message]);
    }

    function sendMessage(e) {
        e.preventDefault();
        const messageObject = {
            body: message,
            id: yourID,
            name: user?.name,
        };
        setMessage("");
        socketRef.current.emit("send message", messageObject, roomId);
    }

    function handleChange(e) {
        setMessage(e.target.value);
    }
    const handleKeypress = e => {
        if (e.keyCode === 13) {
            sendMessage();
        }
    };

    return (
        <Stack>
            <Stack>
                {/* <div id="video-grid">
    // //                 {streams.map((s, i) => <Video key={i} stream={s} />)}
    // //             </div> */}
            </Stack>
            <Page>

                <div>{fishbowl?.name}
                    <div>{fishbowl?.description}
                    </div>
                    <div>{fishbowl?.creator}
                    </div>
                </div>
                <div>active users
                    <div>
                        
                    </div>
                </div>
                <MainContainer>
                    <ChatContainer>
                        {messages.map((message, index) => {
                            if (message.id === yourID) {
                                return (
                                    <MyRow key={index}>
                                        <MyMessage>
                                            {message.body}
                                        </MyMessage>
                                    </MyRow>
                                )
                            }
                            return (
                                <PartnerRow key={index}>
                                    <PartnerMessage>
                                        {message.body}
                                    </PartnerMessage>
                                    <SenderName>
                                        {message.name}
                                    </SenderName>
                                </PartnerRow>
                            )
                        })}
                    </ChatContainer>
                </MainContainer>
                <Form onSubmit={sendMessage}>
                    <TextArea value={message} onChange={handleChange} placeholder="Say something..." />
                    <SendButton onKeyPress={handleKeypress} type='submit'>Send</SendButton>
                </Form>
            </Page>
        </Stack>
    )
};

