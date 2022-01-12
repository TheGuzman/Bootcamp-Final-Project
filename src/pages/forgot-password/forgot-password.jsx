import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next"
import { Button, Box, TextField } from "@mui/material"
import { Stack } from "@mui/material";
import CircularColor from "../../components/circular-progress/circular-progress";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function ForgotPasswordPage() {

    const url = process.env.REACT_APP_URL

    const query = useQuery();
    const [t] = useTranslation("global")

    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const [passwordMatch, setMatchPassword] = useState(false) //if true it means that they do not match
    const [isSumbitted, setSubmited] = useState(false)


    function handlePasswordChange(e) {

        const passToken = query.get("token");
        e.preventDefault()
        let userPassword = e.target.userPassword.value;
        let userPasswordConfirmation = e.target.userPasswordConfirmation.value;

        if (userPassword !== userPasswordConfirmation) { setMatchPassword(true) }
        else {
            const options = {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    userPassword: userPassword,
                    token: passToken,
                }),
            };
            fetch(`${url}/auth/validate-new-password`, options)
                .then(r => {
                    r.json(); console.log(r)
                    if (r.status === 404) {
                        setLoading(false)
                        setError(true)

                    }
                    else {
                        setLoading(false)
                        setError(false)

                    }
                })
                .then(d => console.log(d));
            setSubmited(true)
        }
    }



    return (
        <React.Fragment>
            <form onSubmit={handlePasswordChange} >
                <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: '1em', padding: '10px', borderRadius: '10px' }} >
                    <Typography sx={{ margin: '1.5em 1em 1em 1em' }} variant='h6'> {t("forgotPasswordPage.changePassword")}</Typography>
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

                    <Button variant='contained' color='secondary' type='submit'>{t("forgotPasswordPage.updatePasswordButton")}</Button>

                </Box>
            </form >
            {isSumbitted !== false ?
                loading !== true ?
                    error !== false ?
                        <Typography sx={{ margin: '1.5em 1em 1em 1em' }} textAlign={'center'} color='error.main' variant='h6'> {t("forgotPasswordPage.fail.updateErrorMsg")}</Typography>
                        : <Typography sx={{ margin: '1.5em 1em 1em 1em' }} textAlign={'center'} color='success.main' variant='h6'>{t("forgotPasswordPage.success.updateMsg")}</Typography>
                    : <Stack justifyContent={'center'} alignItems={'center'}>
                        <CircularColor></CircularColor>
                    </Stack>
                : ''

            }
        </React.Fragment >
    );
}

export default ForgotPasswordPage;