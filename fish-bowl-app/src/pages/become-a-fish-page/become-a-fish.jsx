

export default function BecomeaFishPage() {

    function handleLogOut(){
        sessionStorage.removeItem('sesion');
        document.location.reload()
    }


    return (<div>
        <h3>become a fish</h3>
        <button onClick={handleLogOut}>log out</button>
    </div>
    )
}

