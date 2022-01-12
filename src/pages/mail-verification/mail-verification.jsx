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

function MailVerificationPage() {

  const url = process.env.REACT_APP_URL
  const query = useQuery();
  const [isLoading, setLoading] = useState(true);
  const [isEmailValid, setEmailValidity] = useState(false);
  const [t] = useTranslation("global")


  useEffect(() => {
    const token = query.get("token");
    if (token) {
      fetch(`${url}/auth/validate?token=${token}`)
        .then((r) => {
          setLoading(false);
          if (!r.ok) throw new Error("Email was not validated");
          setEmailValidity(true);
        })
        .catch((err) => setEmailValidity(false));
    } else {
      setLoading(false);
      setEmailValidity(false);
    }
  }, []);

  return (
    <React.Fragment>
      {isLoading ? (
        <Stack alignItems={'center'}>
          <Typography variant='h4'>{t("emailVerificationPage.validatingMsg")}</Typography>
          <CircularColor />
        </Stack>
      ) : isEmailValid ? (
        <Stack alignItems={'center'}>
          <Typography variant='h4'>{t("emailVerificationPage.success.emailValidatedMsg")}</Typography>
          <CheckCircleIcon sx={{ width: '3em', height: '3em', color: 'green' }}></CheckCircleIcon>
          <LoginPage></LoginPage>
        </Stack>
      ) : (
        <Stack alignItems={'center'}>
          <Typography variant='h4'>{t("emailVerificationPage.fail.emailNotValidatedMsg")}</Typography>
          <CancelIcon sx={{ width: '3em', height: '3em', color: 'red' }}></CancelIcon>
          <LoginPage></LoginPage>
        </Stack>
      )
      }
    </React.Fragment >
  );
}

export default MailVerificationPage;