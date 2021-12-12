import { useParams } from 'react-router'; import React, { useState, useEffect, useRef } from "react";
import { styled } from '@mui/material/styles';
import io from "socket.io-client"
import { Box, palette } from '@mui/system';
import { Button } from '@mui/material';

const Page = styled('div')({
    display: 'flex',
    height: '100vh',
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'paper.main',
    flexDirection: 'column',
})

const Container = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    height: '500px',
    maxHeight: '500px',
    overflow: 'auto',
    width: '80%',
    border: '2px solid',
    borderColor: theme.palette.primary.main,
    borderRadius: '10px',
    paddingBottom: '10px',
    marginTop: '25px',
}))
const Form = styled('form')({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    width: '80%',
})

const TextArea = styled('textarea')(({ theme }) => ({
    width: '80%',
    height: '2em',
    borderRadius: '4em',
    marginTop:'0.5em',
    paddingLeft: '10px',
    paddingTop: '10px',
    fontSize: '1.3rem',
    backgroundColor: 'transparent',
    border: '2px solid',
    borderColor: theme.palette.primary.main,
    outline: 'none',
    color: theme.palette.text,
    letterSpacing: '1px',
    lineHeight: '20px',
}))

const SendButton = styled(Button)(({ theme }) => ({
    variant: 'contained',
    width: '10%',
    height: '2em',
    marginTop:'0.5em',
    borderRadius: '4em',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    fontSize: '1rem',
}))


const MyRow = styled('div')({
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '10px',
})

const MyMessage = styled('div')(({ theme }) => ({
    width: 'fit-content',
    backgroundColor: theme.palette.primary.light,
    padding: '10px',
    marginRight: '5px',
    textAlign: 'center',
    borderRadius: '10px',
}))

const SenderName = styled('p')(({ theme }) => ({
    color: theme.palette.text,
    margin: '0 0.2em',
    textAlign: 'center',
    fontSize: '0.7em',
}))

const PartnerRow = styled(MyRow)({
    justifyContent: 'flex-start',
    alignItems: 'flex-end'
})

const PartnerMessage = styled('div')(({ theme }) => ({
    width: 'fit-content',
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.text,
    border: '1px solid lightgray',
    padding: '10px',
    marginLeft: '5px',
    textAlign: 'center',
    borderRadius: '10px',
}))

export default function JoinFishbowlPage() {

    const { roomId } = useParams()
    // const [name, setYourName] = useState(null)
    let [user, setUser] = useState(null)
    const [yourID, setYourID] = useState();
    const [room, setRoomID] = useState();
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
            name: user.name,
            roomId: roomId,
        };
        setMessage("");
        socketRef.current.emit("send message", messageObject);
        console.log(messageObject)
    }

    function handleChange(e) {
        setMessage(e.target.value);
    }

    return (
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
                    <SendButton type='submit'>Send</SendButton>
                </Form>
        </Page>
    );
};