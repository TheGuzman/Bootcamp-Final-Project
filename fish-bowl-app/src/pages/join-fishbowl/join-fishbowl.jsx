import React, { useEffect } from "react";
import { useParams } from 'react-router';
import { Stack } from '@mui/material';
import { Page, MainContainer, ChatContainer, MyRow, MyMessage, PartnerMessage, PartnerRow, SenderName, TextArea, SendButton, Form } from '../../components/styled-chat/styled-chat.jsx'
import { useState } from "react";
import useStreamConnection from '../../components/custom-hooks/useStreamConnection.js'






export default function JoinFishbowlPage() {

    const { roomId } = useParams()
    const { messages, fishbowlInfo, fishbowlers, yourID, users, broadcastMessage } = useStreamConnection(roomId)

    const handleSubmit = e => {
        e.preventDefault();
        broadcastMessage(e.target.msg.value);
        e.target.msg.value = '';
    }
    const handleKeypress = e => {
        if (e.keyCode === 13) {
            broadcastMessage(e.target.value);
            e.target.value = '';
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

                <div>{fishbowlInfo?.name}
                    <div>{fishbowlInfo?.description}
                    </div>
                    <div>{fishbowlInfo?.creator}
                    </div>
                </div>
                <div>active users
                    <div>
                        {users.map((e, i) => <p key={i}>{e}</p>)}
                    </div>
                </div>
                <MainContainer>
                    <ChatContainer>
                        {messages?.map((message, index) => {
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
                <Form onSubmit={handleSubmit}>
                    <TextArea name="msg" placeholder="Say something..." />
                    <SendButton onKeyPress={handleKeypress} type='submit'>Send</SendButton>
                </Form>
            </Page>
        </Stack>
    )
};

