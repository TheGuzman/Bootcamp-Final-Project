import { Route } from 'react-router';
import { Redirect } from 'react-router';
import { useEffect } from 'react';
import { useState } from 'react'



export default function PrivateRoute({ children, ...rest }) {

    async function getAuth() {
        const r = await fetch('http://localhost:3001/user/', {
            headers: {
                "Authorization": sessionStorage.getItem('sesion')
            }
        })
        return r.status
    }
    

    const [auth, setAuth] = useState(null)

    useEffect(async() => {
        setAuth(await getAuth())
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


