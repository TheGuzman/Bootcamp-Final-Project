import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next"


export default function LoginPage() {

    let userPassword = '';
    let userEmail = '';
    let invalidLogin = '';
    const [isuserEmailValid, setValidUserEmail] = useState(false)
    // const [invalidLogin, setInvalidLogin]= useState(false)
    const [t] = useTranslation("global")

    function isEmail(email) {
        let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }


    function handleSubmit(e) {
        e.preventDefault()
        userPassword = e.target.userPassword.value;
        userEmail = e.target.email.value.toLowerCase();

        if (isEmail(userEmail)) {
            const options = {
                method: "POST",
                headers: {
                    "Content-type": "application/json", // aviso a mi servidor que le envio los datos en formato JSON
                },
                body: JSON.stringify({
                    userPassword: userPassword,
                    userEmail: userEmail,
                }),
            };
            fetch("http://localhost:3001/auth/login", options)
                .then((r) => r.json()) 
                .then((d) => {
                    console.log(d);
                    sessionStorage.setItem('sesion', JSON.stringify(d.access_token));
                    setTimeout(() => {
                        document.location.href = '/becomeafish';
                    }, 1000);
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
            <p>{invalidLogin}</p>
        </Box>
    )
}