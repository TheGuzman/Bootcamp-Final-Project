

export const options ={
    method: 'GET',
    headers: {
        "Authorization": sessionStorage.getItem('sesion')
    }
}

export const getUser = async () => {
    const r = await fetch("http://localhost:3001/user", options)
    const d = await r.json()
    console.log(d)
    return d
}


export const getFishbowlInfo = async () => {
    const r = await fetch(window.location.href, options)
    const f = await r.json()
    console.log(f)
    return f
}