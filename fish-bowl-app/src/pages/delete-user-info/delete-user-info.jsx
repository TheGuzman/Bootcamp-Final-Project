import React from "react";
import { useState } from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link } from "react-router-dom";
import { styled } from "@mui/system"


export default function DeleteUserInfoPage() {

    const [message, setMessage] = useState()
    const [response, setResponse] = useState(false)

    function handleDeleteAccount() {
        

        fetch(`http://localhost:3001/user/becomeafish/myaccount/deleteuseraccount`, {
            method: 'DELETE',
            headers: {
                "Authorization": sessionStorage.getItem('sesion')
            }
        })
            .then(r => r.json())
            .then(d => {

                if (d.status === 200) {

                    sessionStorage.removeItem('sesion');
                    setResponse(true)
                    setMessage(<Typography variant='subtitle' color='success.main'>Account successfully deleted </Typography>)
                    setTimeout(() => {
                        document.location.href = '/becomeafish';
                    }, 2500);
                }

                else {
                    setResponse(true)
                    setMessage(<Typography variant='subtitle' color='error'>There was an error </Typography>)
                }
            })



    }


    const DeleteButton = styled(Button)(({ theme }) => ({
        justifyContent: 'center', 
        width: '60%',
        [theme.breakpoints.up('sm')]:{width:'30%'}

    }))




    return (
        <Box>
            <Stack sx={{alignItems:'center', margin:'1em 0em'}}>
                <Typography  variant='h6' sx={{fontWeight:'bold'}}>Are you sure you want do delete your account?</Typography>
            </Stack>
            <Stack alignItems='center' sx={{ margin: '2em 0em' }}>
                <DeleteButton variant='contained' color='error' onClick={handleDeleteAccount}>delete my account</DeleteButton>
                <Stack direction='row' sx={{ marginTop: '5em', cursor: 'pointer', }} >
                    <ArrowBackIosNewIcon ></ArrowBackIosNewIcon>
                    <Typography sx={{ textDecoration: 'none', color: 'text.primary' }} component={Link} to='/becomeafish/myaccount' >Back to My Account</Typography>
                </Stack>
            </Stack>
            {response !== false ? message : ''}
        </Box>
    )
}