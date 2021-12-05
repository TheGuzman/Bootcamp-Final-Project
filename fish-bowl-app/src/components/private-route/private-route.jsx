import {useAuth} from '../custom-hooks/useAuth.js'
import { Route } from 'react-router';
import { Redirect } from 'react-router';

export default function PrivateRoute({ children, ...rest }) {
    const auth = useAuth(); //llamamos a nuestro hook que nos dice si estamos logeados o no;
    return ( //devolvemos el componente Route del react-router-dom
        <Route
        {...rest}//le pasamos todas las props que le habían pasado a nuestro componente
        render={({ location }) => //la prop render nos permite hacer renderizado condicicional. Acepta una función que tiene las propiedades de la ruta como parámetro de entrada. En este caso cogemos el location (deconstrucción)
            auth ? (//si estamos logeados pintamos el DOM que tengamos como hijo en el componente <PrivateRoute> dentro del Switch
            children
            ) : ( //si no estamos logeados, redirigimos a la página del login, pasándole la localización de la que veníamos. Esto puede ser útil para redirigir al usuario a la página a la que iba después de hacer login.
            <Redirect //Este componente se importa de react-router-dom
                to={{
                pathname: "/login", // a la ruta a la que queremos redirigir 
                state: { from: location }
                }}
            />
            )
        }
        />
    );
    }
