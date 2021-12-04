import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import { Typography } from "@mui/material";


export default function LoginPage() {

    let userPassword = '';
    let userEmail = '';

    const [isuserEmailValid, setValidUserEmail] = useState(false)

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
                .then((d) => console.log(d));
            console.log('valid')
        }
        else{
            setValidUserEmail(true)
        }

    }


    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }} >
            <Typography sx={{ marginTop: '1em' }} variant='h4'>Log in</Typography>
            <form onSubmit={handleSubmit} >
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2em' }}>
                <TextField
                        required
                        error={isuserEmailValid}
                        name="email"
                        id="userEmail"
                        label="Email"
                        placeholder="Email"
                        helperText={isuserEmailValid !== false ? "Please provide a valid email" : ''}
                    />
                    <TextField
                        required
                        id="userPassword"
                        label="Password"
                        name="userPassword"
                        type="password"
                        placeholder="Password"
                    />            
                    <Button type='submit'>submit</Button>
                </Box>
            </form >
        </Box>
    )
}