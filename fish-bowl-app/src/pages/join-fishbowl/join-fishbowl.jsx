import React, { useEffect, useRef } from "react";
import { useParams } from 'react-router';
import { Stack, Typography } from '@mui/material';
import { Page, MainContainer, ChatContainer, MyRow, MyMessage, PartnerMessage, PartnerRow, SenderName, TextArea, SendButton, Form } from '../../components/styled-chat/styled-chat.jsx'
import useStreamConnection from '../../components/custom-hooks/useStreamConnection.js'
import { Box } from "@mui/system";
import Chip from '@mui/material/Chip';
import { Icon } from '@iconify/react';





export default function JoinFishbowlPage() {

    const { roomId } = useParams()
    const { messages, fishbowlInfo, fishbowlers, yourID, users, streams, broadcastMessage } = useStreamConnection(roomId)

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
            <Page>
                <Box>
                    <Stack>
                        {fishbowlInfo?.name}
                        <div>{fishbowlInfo?.description}
                        </div>
                        <div>{fishbowlInfo?.creator}
                        </div>
                    </Stack>
                </Box>
                <Stack>
                    <Typography variant='h3' sx={{ fontFamily: 'BrainFish' }}>active fishes</Typography>
                    <Stack>
                        {users.map((e, i) => <Chip key={i} color='info' label={e} icon={<Icon icon="ion:fish-sharp" width="20" height="20" />} />)}
                    </Stack>
                </Stack>
                <Stack>
                    <Stack id="video-grid">
                        {streams.map((s, i) => <Video key={i} stream={s} />)}
                    </Stack>
                </Stack>
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

const Video = ({ stream }) => {
    const localVideo = useRef();
    useEffect(() => {
        if (localVideo.current) localVideo.current.srcObject = stream;
    }, [stream, localVideo]);

    return <video style={{ height: 200, width: 200, borderRadius: '10em' }} ref={localVideo} autoPlay />
};