import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import { Typography } from "@mui/material";


export default function RegisterPage() {

    let userName = '';
    let userPassword = '';
    let userPasswordConfirmation = '';
    let userEmail = '';


    const [newUser, setNewUser] = useState({})
    const [userValid, setValidUser] = useState(false)
    const [passwordMatch, setMatchPassword] = useState(false)
    const [isuserEmailValid, setValidUserEmail] = useState(false)

    function isEmail(email) {
        let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }


    function handleSubmit(e) {
        e.preventDefault()
        userName = e.target.userName.value
        if (userName.length >= 4) {
            setValidUser(false)
        }
        else {
            setValidUser(true)
        }

        userPassword = e.target.userPassword.value;
        userPasswordConfirmation = e.target.userPasswordConfirmation.value;

        console.log(userPassword, userPasswordConfirmation)

        if (userPasswordConfirmation === userPassword) {

            setMatchPassword(false)
        }
        else {

            setMatchPassword(true)
        }

        userEmail = e.target.email.value.toLowerCase();
        if (isEmail(userEmail) !== true) {
            setValidUserEmail(true)
        }
        else {
            setValidUserEmail(false)
        }

        if (userValid === true && passwordMatch === true && isuserEmailValid === true) {
            console.log('valid')
        }
        else {
            console.log('invalid')
        }
    }


    return (
        <Box sx={{ display: 'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}} >
            <Typography sx={{marginTop:'1em'}} variant='h4'>Please register yourself</Typography>
            <form onSubmit={handleSubmit} >
                <Box sx={{ display: 'flex', flexDirection: 'column', margin: '2em', gap: '2em', width:'20em'}}>
                    <TextField
                        required
                        error={userValid}
                        helperText={userValid !== false ? "Username must be greater than 4 characters" : ''}
                        id="userName"
                        name='userName'
                        label="Username"
                        placeholder="Username"

                    />
                    <TextField
                        required
                        id="userPassword"
                        error={passwordMatch}
                        label="Password"
                        name="userPassword"
                        type="password"
                        placeholder="Password"
                    />
                    <TextField
                        required
                        error={passwordMatch}
                        helperText={passwordMatch !== false ? "Passwords do not match" : ''}
                        name="userPasswordConfirmation"
                        id="userPasswordConfirmation"
                        label="Confirm Password"
                        type="password"
                        placeholder="Confirm Password"
                    />
                    <TextField
                        required
                        error={isuserEmailValid}
                        name="email"
                        id="userEmail"
                        label="Email"
                        placeholder="Email"
                        helperText={isuserEmailValid !== false ? "Please provide a valid email" : ''}
                    />
                    <Button type='submit'>submit</Button>
                </Box>
            </form >
        </Box>
    )
}

