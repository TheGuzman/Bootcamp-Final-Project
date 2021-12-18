import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; 
import LoginPage from '../login-page/login-page.jsx'
import { Typography } from "@mui/material";
import CircularColor from '../../components/circular-progress/circular-progress.jsx'
import { Stack } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function MailVerificationPage() {
  const query = useQuery(); // obtengo los query params
  const [isLoading, setLoading] = useState(true); // state variable para controlar si estoy llamando al API o no
  const [isEmailValid, setEmailValidity] = useState(false); // use state para controlar si el email es válido o no

  useEffect(() => {
    // solo la primera vez llamo a la validación del token, recogiendo el valor por parámetro
    const token = query.get("token"); // obtengo el query param del token
    if (token) {
      // llamamos a nuestro API para hacer check del validity
      fetch(`http://localhost:3001/auth/validate?token=${token}`) // validamos tipo GET pasando el token por query param
        .then((r) => {
          setLoading(false); // dejamos de cargar
          if (!r.ok) throw new Error("No se ha validado correctamente"); // si no okey lanzamos error que captura el catch
          setEmailValidity(true); // si estamos aqui es que el API nos ha dicho que OK al token
        })
        .catch((err) => setEmailValidity(false)); // si capturamos el error ponemos a false el validity
    } else {
      setLoading(false); // dejamos de cargar
      setEmailValidity(false); // mostramos error
    }
  }, []);

  return (
    <React.Fragment>
      {isLoading ? (
        <Stack alignItems={'center'}>
          <Typography variant='h4'>validating your Email</Typography>
          <CircularColor />
        </Stack>
      ) : isEmailValid ? (
        <Stack alignItems={'center'}>
          <Typography variant='h4'>Email successfully validated</Typography>
          <CheckCircleIcon sx={{ width: '3em', height: '3em', color: 'green' }}></CheckCircleIcon>
          <LoginPage></LoginPage>
        </Stack>
      ) : (
        <Stack alignItems={'center'}>
          <Typography variant='h4'>Email coult not be validated</Typography>
          <CancelIcon sx={{ width: '3em', height: '3em', color: 'red' }}></CancelIcon>
          <LoginPage></LoginPage>
        </Stack>
      )
      }
    </React.Fragment >
  );
}

export default MailVerificationPage;