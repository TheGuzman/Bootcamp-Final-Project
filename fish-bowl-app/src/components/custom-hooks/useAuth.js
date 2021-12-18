
export default async function getAuth() {
    const r = await fetch('http://localhost:3001/user/', {
        headers: {
            "Authorization": sessionStorage.getItem('sesion')
        }
    })
    return r.status
}