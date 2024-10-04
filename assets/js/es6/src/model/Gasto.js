import { Validar } from '../util/Validacion.js'
import { REGEX_NOMBRES } from '../util/constantes.js'

export class Gasto {
    #nombre
    #monto

    constructor(nombre, monto) {
        this.#nombre = Validar.nombre(nombre, REGEX_NOMBRES)
        this.#monto = Validar.monto(monto)
    }

    get nombre() {
        return this.#nombre
    }

    get monto() {
        return this.#monto
    }

    setNombre(nuevoNombre) {
        try {
            this.#nombre = Validar.nombre(nuevoNombre)
            return {
              message: "Nombre modificado con éxito",
              success: true,
            };
        } catch(error) {
            console.error('No pudimos modificar el nombre del gasto', error)
            return {
              success: false,
              message: "No pudimos modificar el nombre",
              error,
            };
        }
    }

    setMonto(nuevoMonto) {
        try {
            this.#monto = Validar.monto(nuevoMonto)
            return {
              message: "Nombre modificado con éxito",
              success: true,
            };  
        } catch (error) {   
            console.error('No pudimos modificar el monto',  error)
            return {
              success: false,
              message: "No pudimos modificar el nombre",
              error,
            };
        }
    }


    getAllProperties() {
        return {
            nombre: this.#nombre,
            monto: this.#monto
        }
    }
}