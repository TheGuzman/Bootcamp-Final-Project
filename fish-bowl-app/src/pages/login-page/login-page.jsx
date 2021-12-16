import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next"
import { useHistory } from 'react-router'
import { useEffect } from 'react';


export default function LoginPage() {

    let userPassword = '';
    let userEmail = '';
    let invalidLoginMessage = 'invalid username or password';
    const [isuserEmailValid, setValidUserEmail] = useState(false)
    const [invalidLogin, setInvalidLogin]= useState(false)
    const [t] = useTranslation("global")
    const history = useHistory()

    function isEmail(email) {
        let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    useEffect(()=>{

        if(sessionStorage.getItem('sesion')!==null){
            history.push('/becomeafish')
        }

    },[])

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
            fetch("http://localhost:3001/auth/login", options)
                .then(r =>r.json())                
                .then(d => {
                    console.log(d)
                    if(d.status===404){
                        setInvalidLogin(true)
                        console.log('invalid login')
                    }
                    else{
                        sessionStorage.setItem('sesion', 'Bearer ' + d.access_token);
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



    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }} >
            <Typography sx={{ margin: '1em' }} variant='h5'>Log in</Typography>
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
            {invalidLogin===true?<Typography variant='h6' color='error'>{invalidLoginMessage}</Typography>:''}
        </Box>
    )
}