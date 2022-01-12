import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import { Checkbox, Typography } from "@mui/material";
import { useTranslation } from "react-i18next"
import { useHistory } from 'react-router'
import { useEffect } from 'react';



export default function LoginPage() {

    const url = process.env.REACT_APP_URL


    let userPassword = '';
    let userEmail = '';
    const [isuserEmailValid, setValidUserEmail] = useState(false)
    const [invalidLogin, setInvalidLogin] = useState(false)
    const [forgotPassword, setForgotPassword] = useState(false)
    const [isRememberMeSelected, setRememberMe] = useState(false)

    const [t] = useTranslation("global")
    const history = useHistory()

    function isEmail(email) {
        let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    useEffect(() => {

        if (sessionStorage.getItem('sesion') !== null) {
            history.push('/becomeafish')
        }

    }, [history])



    function handleSubmit(e) {
        e.preventDefault()
        userPassword = e.target.userPassword.value;
        userEmail = e.target.email.value.toLowerCase();
        
        

        if (isEmail(userEmail)) {
            const options = {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    userPassword: userPassword,
                    userEmail: userEmail,
                }),
            };
            fetch(`${url}/auth/login`, options)
                .then(r => r.json())
                .then(d => {
                    console.log(d)
                    if (d.status === 404) {
                        setInvalidLogin(true)
                        console.log('invalid login')
                    }
                    else {
                        if(isRememberMeSelected===true){
                            localStorage.setItem('sesion', 'Bearer ' + d.access_token)
                            sessionStorage.setItem('sesion', 'Bearer ' + d.access_token);
                        }
                        else{
                            sessionStorage.setItem('sesion', 'Bearer ' + d.access_token);
                        }
                        
                        setTimeout(() => {
                            history.push('/becomeafish')
                        }, 1000);
                    }
                    console.log(d);

                });
            console.log('valid')
        }



        else {
            setValidUserEmail(true)
        }
    }

    function showForgotPassword() {
        setForgotPassword(true)
    }


    function handleSubmitNewPassword(e) {
        e.preventDefault()
        const userEmail = e.target.email.value;
        const options = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                userEmail: userEmail,
            }),
        };

        fetch(`${url}/auth/forgot-password`, options)
            .then(r => r.json())
            .then(d => {
                console.log(d)
                if (d.status === 404) {
                    console.log('invalid login')
                }
                else {

                }
                console.log(d);
            })
    }

    function handleRememberMe(){
        setRememberMe(!isRememberMeSelected)
    }



    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }} >
            <Typography sx={{ margin: '1em' }} variant='h5'>{t("loginPage.login")}</Typography>
            <form onSubmit={handleSubmit} >
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2em', alignItems: 'center' }}>
                    <TextField sx={{ '@media (min-width:760px)': { width: '30em', gap: '1em', }, }}
                        required
                        error={isuserEmailValid}
                        name="email"
                        id="userEmail"
                        label="Email"
                        placeholder="Email"
                        helperText={isuserEmailValid !== false ? "Please provide a valid email" : ''}
                    />
                    <TextField sx={{ width: '100%' }}
                        required
                        id="userPassword"
                        label="Password"
                        name="userPassword"
                        type="password"
                        placeholder="Password"
                    />
                    <Button variant='contained' color='secondary' type='submit'>{t("buttons.login")}</Button>
                </Box>
            </form >
            {invalidLogin === true ? <Typography variant='h6' color='error'>{t("loginPage.invalidLogin")}</Typography> : ''}

            <Button onClick={showForgotPassword} variant='text' color='primary' sx={{ margin: '3em 0em', fontWeight: 'bold' }}>{t("loginPage.forgotPassword?")}</Button>
            {forgotPassword !== false
                ?
                <form onSubmit={handleSubmitNewPassword} >
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2em', alignItems: 'center' }}>
                        <TextField sx={{ '@media (min-width:760px)': { width: '30em', gap: '1em', }, }}
                            required
                            name="email"
                            id="userEmail"
                            label="Email"
                            placeholder="Email"
                        />
                        <Button variant='contained' color='secondary' type='submit'>{t("buttons.submit")}</Button>
                    </Box>
                </form > : ''}
            <label for="rememberMe">
                <input id="rememberMe" type='checkbox' onChange={handleRememberMe}/> Remember Me on this device</label>

        </Box>
    )
}