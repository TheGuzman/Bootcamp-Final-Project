import React, { useEffect, useRef } from "react";
import { useParams } from 'react-router';
import { Stack, Typography } from '@mui/material';
import { Page, MainContainer, ChatContainer, MyRow, MyMessage, PartnerMessage, PartnerRow, SenderName, TextArea, SendButton, Form } from '../../components/styled-chat/styled-chat.jsx'
import useStreamConnection from '../../components/custom-hooks/useStreamConnection.js'
import { Box } from "@mui/system";
import Chip from '@mui/material/Chip';
import { Icon } from '@iconify/react';
import { useTranslation } from "react-i18next"





export default function JoinFishbowlPage() {

    const [t] = useTranslation("global")

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
                <Stack sx={{width:'100%', margin:'2em'}} direction='row' flexWrap={'wrap'} justifyContent={'space-around'} rowGap={4}>
                    <Stack sx={{width:'30%'}}>
                        <Typography variant='h5' textAlign={'center'} sx={{ fontFamily: 'BrainFish' }}>{t("joinFishbowlPage.fishbowllName")}</Typography>
                        <Typography variant='h6' textAlign={'center'}>{fishbowlInfo?.name}</Typography>
                    </Stack>
                    <Stack sx={{width:'30%'}} >
                        <Typography variant='h5' textAlign={'center'} sx={{ fontFamily: 'BrainFish' }}>{t("joinFishbowlPage.fishbowlDescription")}</Typography>
                        <Typography variant='h6' textAlign={'center'}>{fishbowlInfo?.description}</Typography>
                    </Stack>
                    <Stack sx={{width:'30%'}}>
                        <Typography variant='h5' textAlign={'center'} sx={{ fontFamily: 'BrainFish' }}>{t("joinFishbowlPage.fishbowlCreator")}</Typography>
                        <Typography variant='h6' textAlign={'center'}>{fishbowlInfo?.creator}</Typography>
                    </Stack>
                </Stack>
                <Stack>
                    <Typography variant='h3' textAlign={'center'} sx={{ fontFamily: 'BrainFish' }}>{t("joinFishbowlPage.activeFishes")}</Typography>
                    <Stack direction='row' justifyContent={'center'} flexWrap={'wrap'} columnGap={4}>
                        {users.map((e, i) => <Chip key={i} color='info' label={e} icon={<Icon icon="ion:fish-sharp" width="20" height="20" />} />)}
                    </Stack>
                </Stack>
                <Stack>
                    <Stack id="video-grid" direction='row' alignItems={'center'} columnGap={4} justifyContent={'center'} flexWrap={'wrap'}>
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
                    <TextArea name="msg" placeholder={t("joinFishbowlPage.chatPlaceholder")} />
                    <SendButton onKeyPress={handleKeypress} type='submit'>{t("buttons.submit")}</SendButton>
                </Form>
            </Page>
        </Stack >
    )
};

const Video = ({ stream }) => {
    const localVideo = useRef();
    useEffect(() => {
        if (localVideo.current) localVideo.current.srcObject = stream;
    }, [stream, localVideo]);

    return <video style={{ height: 200, width: 200, borderRadius: '10em' }} ref={localVideo} autoPlay />
};