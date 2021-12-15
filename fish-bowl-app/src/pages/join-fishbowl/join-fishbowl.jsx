import React, { useEffect } from "react";
import { useParams } from 'react-router';
import { Stack } from '@mui/material';
import { Page, MainContainer, ChatContainer, MyRow, MyMessage, PartnerMessage, PartnerRow, SenderName, TextArea, SendButton, Form } from '../../components/styled-chat/styled-chat.jsx'
import { useState } from "react";
import useStreamConnection from '../../components/custom-hooks/useStreamConnection.js'






export default function JoinFishbowlPage() {

    const { roomId } = useParams()

    let [fishbowl, setFishbowl] = useState()

    let [allUsers, setAllUsers] = useState([])

    const [receivedMessages, setReceivedMessages] = useState([]);
    const [message, setMessage] = useState("");


    const { messages, fishbowlInfo, fishbowlers, yourID, users, broadcastMessage } = useStreamConnection(roomId)

    console.log(receivedMessages)
    console.log(users)

    useEffect(()=>{
        setReceivedMessages(messages)
        setAllUsers(users)
        setFishbowl(fishbowlInfo)
    },[messages,users,fishbowlInfo])

    


    function sendMessage(e) {
        e.preventDefault();
        const messageToSend = message
        broadcastMessage(messageToSend)
        setMessage("")

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
                        {allUsers?.map((e, i) => <p key={i}>{e.id}</p>)}
                    </div>
                </div>
                <MainContainer>
                    <ChatContainer>
                        {receivedMessages?.map((message, index) => {
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
                                        {message.sender}
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

