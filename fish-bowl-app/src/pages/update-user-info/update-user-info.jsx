import React, { useEffect } from "react"
import { Button, Box, Typography, TextField, Stack } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import FishbowlNavAccountUpdateInfo from "../../components/breadCrumb-nav/bread-crumb-myaccount-updateInfo"
import { useHistory } from "react-router-dom"

export default function UpdateUserInfoPage() {

    const [userinValid, setinValidUser] = useState(false)
    const [passwordMatch, setMatchPassword] = useState(false)
    const [isSumbitted, setSubmited] = useState(false)
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    let [user, setUser] = useState('')

    const [t] = useTranslation("global")
    const history = useHistory()


    useEffect(() => {
        fetch("http://localhost:3001/user", {
            method: 'GET',
            headers: {
                "Authorization": sessionStorage.getItem('sesion')
            }
        })
            .then(r => r.json())
            .then(d => { setUser(d); console.log(d) })
    }, [])


    function handleUsernameChange(e) {
        e.preventDefault()
        let userName = e.target.userName.value

        if (userName.length <= 4) { setinValidUser(true) }
        else {
            const options = {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": sessionStorage.getItem('sesion')
                },
                body: JSON.stringify({
                    userName: userName,
                }),
            };
            fetch("http://localhost:3001/user//becomeafish/myaccount/updateusername", options)
                .then(r => {
                    r.json(); console.log(r)
                    if (r.status === 409) {
                        setError(true)
                        setLoading(false)
                    }
                    else {
                        setError(false)
                        setLoading(false)
                    }
                })
                .then(d => console.log(d));
            setSubmited(true)
        }

    }

    function handlePasswordChange(e) {
        e.preventDefault()
        let userPassword = e.target.userPassword.value;
        let userPasswordConfirmation = e.target.userPasswordConfirmation.value;

        if (userPassword !== userPasswordConfirmation) { setMatchPassword(true) }
        else {
            const options = {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": sessionStorage.getItem('sesion')
                },
                body: JSON.stringify({
                    userPassword: userPassword,
                }),
            };
            fetch("http://localhost:3001/user//becomeafish/myaccount/updateuserpassword", options)
                .then(r => {
                    r.json(); console.log(r)
                    if (r.status === 409) {
                        setError(true)
                        setLoading(false)
                    }
                    else {
                        setError(false)
                        setLoading(false)
                    }
                })
                .then(d => console.log(d));
            setSubmited(true)
        }
    }

    return (
        <Box>
            {isSumbitted === false ?
                <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', }} >
                    <Typography sx={{ margin: '1em' }} variant='h5'>Update your info</Typography>
                    <Stack margin={'1em 0em'}>
                        <FishbowlNavAccountUpdateInfo ></FishbowlNavAccountUpdateInfo>
                    </Stack>
                    <Stack direction='column' gap={8} alignItems={'flex-end'} sx={{ '@media (min-width:1024px)': { flexDirection: 'row', gap: 16 }, }} >
                        <form onSubmit={handleUsernameChange} >
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1em', alignItems: 'center', backgroundColor: 'primary.light', padding: '10px', borderRadius: '10px' }}>
                                <Typography variant='h6' sx={{ margin: '1.5em 1em 1em 1em' }} > Change your username</Typography>
                                <Stack direction='row'>
                                    <Typography variant='subtitle' > Current username:</Typography>
                                    <Typography variant='subtitle' sx={{ marginLeft: '0.3em', fontWeight: 'bold' }}>{user.name}</Typography>
                                </Stack>
                                <TextField sx={{ '@media (min-width:760px)': { width: '20em', gap: '1em', }, }}
                                    required
                                    error={userinValid}
                                    helperText={userinValid !== false ? "Username must be greater than 4 characters" : ''}
                                    id="userName"
                                    name='userName'
                                    label="New username"
                                    placeholder="Username"
                                />
                                <Button variant='contained' color='secondary' type='submit' sx={{ '@media (min-width:1024px)': { marginTop: '2.2em' }, }}>update username</Button>
                            </Box>
                        </form>

                        <form onSubmit={handlePasswordChange} >
                            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: '1em', backgroundColor: 'primary.light', padding: '10px', borderRadius: '10px' }} >
                                <Typography sx={{ margin: '1.5em 1em 1em 1em' }} variant='h6'> Change your password</Typography>
                                <TextField sx={{ '@media (min-width:760px)': { width: '20em', gap: '1em', }, }}
                                    required
                                    id="userPassword"
                                    error={passwordMatch}
                                    label="Password"
                                    name="userPassword"
                                    type="password"
                                    placeholder="Password"
                                />

                                <TextField sx={{ '@media (min-width:760px)': { width: '20em', gap: '1em', }, }}
                                    required
                                    error={passwordMatch}
                                    helperText={passwordMatch !== false ? "Passwords do not match" : ''}
                                    name="userPasswordConfirmation"
                                    id="userPasswordConfirmation"
                                    label="Confirm Password"
                                    type="password"
                                    placeholder="Confirm Password"
                                />

                                <Button variant='contained' color='secondary' type='submit'>update password</Button>

                            </Box>
                        </form >
                    </Stack>
                </Box > :
                error !== true ?
                    isLoading === true ?
                        <Typography variant='h4'>{t("userAccountUpdatePage.updatePending")}</Typography>
                        :
                        //UPDATE SUCCEEDED
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Stack direction='column' sx={{ margin: '1em', alignItems: 'center' }}>
                                <Typography color='success.main' variant='h5'>{t("userAccountUpdatePage.success.updateComplete")}</Typography>
                            </Stack>
                            <Typography component={Link} to='/becomeafish/myaccount'>{t("userAccountUpdatePage.goBackLink")}</Typography>
                        </Box>
                    :
                    //UPDATE FAILED
                    <React.Fragment>
                        <Stack direction='column' sx={{ margin: '1em', alignItems: 'center' }}>
                            <Typography color='error.main' variant='h5'>{t("userAccountUpdatePage.fail.updateError")}</Typography>
                            <Typography color='error.main' variant='h5'>{t("userAccountUpdatePage.fail.tryAgain")}</Typography>
                            <Typography component={Link} to='/becomeafish/myaccount'>{t("userAccountUpdatePage.goBackLink")}</Typography>
                           
                        </Stack>
                    </React.Fragment>}
        </Box>
    )
}