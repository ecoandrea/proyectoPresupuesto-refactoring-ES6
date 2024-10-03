//Aqui irian las funciones de validacion en una formulacion de hibrido entre POO y funcional

export const validaciones = (nombre, regex) =>{
    if(nombre == null || nombre === undefined)return "no otorgado"
    if (!regex.test(nombre)) throw new Error("El nombre o los apellidos deben contener solo letras y espacios")
        return nombre
}