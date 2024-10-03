import { Validar } from './Validacion.js'
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

    set nombre(nuevoNombre) {
        try {
            this.#nombre = Validar.nombre(nuevoNombre)
        } catch(error) {
            console.error('No pudimos modificar el nombre del gasto', error)
        }
    }

    set monto(nuevoMonto) {
        try {
            this.#monto = Validar.monto(nuevoMonto)  
        } catch (error) {   
            console.error('No pudimos modificar el monto',  error)
        }
    }


    getAllProperties() {
        return {
            nombre: this.#nombre,
            monto: this.#monto
        }
    }
}