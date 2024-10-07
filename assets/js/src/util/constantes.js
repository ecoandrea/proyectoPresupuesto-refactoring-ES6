
//ESTAS SO INMUTABLE

export const REGEX_NOMBRES = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
export const REGEX_TELEFONO = /^\+56\d{9}$/;
export const REGEX_RUT = /^\d{7,8}$/;
export const REGEX_EMAIL = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
export const REGION = "es-CL";
export const DIVISA = "CLP";


/*
export default {
    REGEX_NOMBRES,
    REGEX_TELEFONO,
    REGEX_RUT,
    REGION,
    DIVISA,
    
 
}
*/
//SE PUEDEN RECORRER , PERO SON MANIPULABLES
//se podria hacer con constructor y queda protegido, pero con los beneficios 
/*
const REGEX = {
    nombres: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
    telefono:/^\+56\d{9}$/,
    rut: /^\d{7,8}$/
    
}

const DIVISA = {
    divisa: "CLP",
    region: "es-CL"
}

*/

//CON VARIAS DIVISAS
/*
const DIVISA =  [
    {region:"es-CL", dicvisa: "CLP"},
    {region:"en-US", dicvisa: "$"},
    {region:"es-VE", dicvisa: "VEF"},

]
    */

