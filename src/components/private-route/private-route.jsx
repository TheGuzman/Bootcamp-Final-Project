import { Route } from 'react-router';
import { Redirect } from 'react-router';
import { useEffect } from 'react';
import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import getAuth from '../custom-hooks/useAuth.js'


export default function PrivateRoute({ children, ...rest }) {



    const [auth, setAuth] = useState(null)
    const history = useHistory()

    useEffect(() => {

        const checkAuth = async () => {

            if (sessionStorage.getItem('sesion') !== null) {
                setAuth(await getAuth())
            }

            else if (localStorage.getItem('sesion') !== null) {
                const token = localStorage.getItem('sesion')
                sessionStorage.setItem('sesion', token)
                setAuth(await getAuth())
            }
            else {
                history.push('/login')
            }
        }
        checkAuth()
    }, [])


    return (
        auth && (
            <Route
                {...rest}
                render={() => (auth !== 200 ? <Redirect to="/login" /> : children)}
            />
        )
    );
}


