import Cookies from "universal-cookie";

const cookie = new Cookies();
//CONSULTA POST
export function GetCookie(key) {
    const encodedValue = cookie.get(key);
    if (encodedValue) {
        // Decodifica el valor Base64 antes de devolverlo
        return atob(encodedValue);
    }
    // return null;
}
export function SetCookie(key, value, expirationTimeInMinutes = null) {
    const options = { path: "/" };

    // Si se proporciona un tiempo de expiración, calcula la fecha de expiración
    if (expirationTimeInMinutes) {
        const expirationDate = new Date();
        expirationDate.setTime(
            expirationDate.getTime() + expirationTimeInMinutes * 60 * 1000
        );
        options.expires = expirationDate;
    }

    // Configura la cookie (si no hay fecha de expiración, será de sesión)
    return cookie.set(key, btoa(value), options);
}