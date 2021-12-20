import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; 
import LoginPage from '../login-page/login-page.jsx'
import { Typography } from "@mui/material";
import CircularColor from '../../components/circular-progress/circular-progress.jsx'
import { Stack } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { useTranslation } from "react-i18next"


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ForgotPasswordPage() {
  const query = useQuery(); 
  const [t] = useTranslation("global")



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
        fetch("http://localhost:3001/auth/new-password", options)
            .then(r => {
                r.json(); console.log(r)
                if (r.status === 404) {
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
    <React.Fragment>
          <form onSubmit={handlePasswordChange} >
                            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: '1em', backgroundColor: 'primary.light', padding: '10px', borderRadius: '10px' }} >
                                <Typography sx={{ margin: '1.5em 1em 1em 1em' }} variant='h6'> {t("updateUserInfoPage.changePassword")}</Typography>
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

                                <Button variant='contained' color='secondary' type='submit'>{t("updateUserInfoPage.updatePasswordButton")}</Button>

                            </Box>
                        </form >
    </React.Fragment >
  );
}

export default ForgotPasswordPage;