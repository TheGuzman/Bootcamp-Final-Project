import dotenv from 'dotenv';
dotenv.config();

const url = proces.env.URL


export default async function getAuth() {
    // let token;
    // const tokenInLocalStorage = localStorage.getItem('sesion')

    // if(tokenInLocalStorage!==null){
    //     token = tokenInLocalStorage
    // }
    // else{
    //     token = sessionStorage.getItem('sesion')
    // }

    const r = await fetch(`${url}"/user/`, {
        headers: {
            "Authorization": sessionStorage.getItem('sesion')
        }
    })
    return r.status
}