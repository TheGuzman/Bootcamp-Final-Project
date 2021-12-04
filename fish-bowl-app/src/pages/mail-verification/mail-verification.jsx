import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // importo el hook de location para obtener los query params
import LoginPage from '../login-page/login-page.jsx'

// A custom hook that builds on useLocation to parse
// the query string for you.
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
        <h1>Cargando...</h1>
      ) : isEmailValid ? (
        <React.Fragment>
          <h1>Email validado con éxito</h1>
          <LoginPage></LoginPage>
        </React.Fragment>
      ) : (
        <h1>Email no es válido</h1>
      )}
    </React.Fragment>
  );
}

export default MailVerificationPage;