/*
esta funcion sirve para obtener la ruta actual o la pagina actual en la cual nos encontramos
su objetivo es mantenernos en la pagina actual cuando actualicemos algun producto de determina pagina
asi cuando se refresque nuevamente no pasara a cargarse desde el principio si se refrescara en la pagina
que nos encontramos 
*/

export function setPageStatic(first_page_url, current_page) {
    const URl = first_page_url;
    const formatUrl = URl.slice(0, -1);
    const completUrl = formatUrl + current_page;
    return completUrl;
}