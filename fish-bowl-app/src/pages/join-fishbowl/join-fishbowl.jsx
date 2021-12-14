import React from "react";
import io from "socket.io-client"
import { useParams } from 'react-router';

import { Stack } from '@mui/material';

import { Page, Container, MyRow, MyMessage, PartnerMessage, PartnerRow, SenderName, TextArea, SendButton, Form } from '../../components/styled-chat/styled-chat.jsx'
import { useState, useRef, useEffect } from "react";


export default function JoinFishbowlPage() {

    const { roomId } = useParams()
    const socketRef = useRef();


    let [user, setUser] = useState(null)
    const [yourID, setYourID] = useState();
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");

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


    useEffect(() => {
        const connectRoom = async () => {
            socketRef.current = io.connect('http://localhost:3001');
            socketRef.current.emit('join-room', roomId);
            socketRef.current.on("userId", id => {
                setYourID(id);
                console.log(id)
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
            name: user.name,
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

    return (
        <Stack>
            <Stack>
                {/* <div id="video-grid">
    // //                 {streams.map((s, i) => <Video key={i} stream={s} />)}
    // //             </div> */}
            </Stack>
            <Page>
                <Container>
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
                </Container>
                <Form onSubmit={sendMessage}>
                    <TextArea value={message} onChange={handleChange} placeholder="Say something..." />
                    <SendButton onKeyPress={handleKeypress} type='submit'>Send</SendButton>
                </Form>
            </Page>
        </Stack>
    )
};

