export function useAuth(){
    return sessionStorage.getItem('sesion') !== null;
}