import React from "react";
import { useState } from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link } from "react-router-dom";
import { styled } from "@mui/system"
import { useHistory } from 'react-router'
import { useTranslation } from "react-i18next"




export default function DeleteUserInfoPage() {

    const url = process.env.REACT_APP_URL


    const [message, setMessage] = useState()
    const [response, setResponse] = useState(false)
    const history = useHistory()
    const [t] = useTranslation("global")


    function handleDeleteAccount() {
        

        fetch(`${url}/user/becomeafish/myaccount/deleteuseraccount`, {
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
                    setMessage(<Typography textAlign={'center'} variant='h5' color='success.main'>{t("deleteUserInfoPage.success.accountDeletedSuccessMsg")}</Typography>)
                    setTimeout(() => {
                        history.push('/login') 
                    }, 2500);
                }

                else {
                    setResponse(true)
                    setMessage(<Typography textAlign={'center'} variant='h5' color='error'>{t("deleteUserInfoPage.fail.accountDeletedErrorMsg")} </Typography>)
                }
            })



    }


    const DeleteButton = styled(Button)(({ theme }) => ({
        justifyContent: 'center', 
        [theme.breakpoints.up('sm')]:{width:'40%'},
        [theme.breakpoints.up('md')]:{width:'20%'},

    }))




    return (
        <Box>
            <Stack sx={{alignItems:'center', margin:'1em 1em'}}>
                <Typography  variant='h6' sx={{fontWeight:'bold', textAlign:'center'}}>{t("deleteUserInfoPage.areYouSuredeleteYourAccount")}</Typography>
            </Stack>
            <Stack alignItems='center' sx={{ margin: '2em 0em' }}>
                <DeleteButton variant='contained' color='error' onClick={handleDeleteAccount}>{t("buttons.deleteAccount")}</DeleteButton>
                <Stack direction='row' sx={{ marginTop: '5em', cursor: 'pointer', }} >
                    <ArrowBackIosNewIcon ></ArrowBackIosNewIcon>
                    <Typography sx={{ textDecoration: 'none', color: 'text.primary' }} component={Link} to='/becomeafish/myaccount' >{t("deleteUserInfoPage.goBackLink")}</Typography>
                </Stack>
            </Stack>
            {response !== false ? message : ''}
        </Box>
    )
}