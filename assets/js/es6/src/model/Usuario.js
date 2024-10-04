import { Validar } from '../util/Validacion.js'
import {
    REGEX_NOMBRES,
    REGEX_RUT,
    REGEX_TELEFONO
} from '../util/constantes.js'

export class Usuario {
  #nombre;
  #apellidoP;
  #apellidoM;
  #rutNumero;
  #rutDV;
  #telefono;
  #email;
  #presupuesto;
  #gastos

  constructor(
    nombre,
    apellidoP,
    apellidoM,
    rutNumero,
    rutDv,
    telefono,
    email,
    presupuesto,
  ) {
    this.#nombre = Validar.nombre(nombre, REGEX_NOMBRES);
    this.#apellidoP = Validar.nombre(apellidoP, REGEX_NOMBRES);
    this.#apellidoM = Validar.nombre(apellidoM, REGEX_NOMBRES);
    this.#rutNumero = Validar.rut(rutNumero, REGEX_RUT);
    this.#rutDV = Validar.digitoVerificador(rutNumero, rutDv);
    this.#telefono = Validar.telefono(telefono, REGEX_TELEFONO);
    this.#email = Validar.email(email);
    this.#presupuesto = Validar.monto(presupuesto);
    this.#gastos = [];
  }

  get nombreCompleto() {
    return `${this.#nombre} ${this.#apellidoP} ${this.#apellidoM}`;
  }

  get nombre() {
    return this.#nombre;
  }

  get apellidoP() {
    return this.#apellidoP;
  }

  get apellidoM() {
    return this.#apellidoM;
  }

  get rut() {
    return `${this.#rutNumero}-${this.#rutDV}`;
  }

  get rutNumero() {
    return this.#rutNumero;
  }

  get rutDV() {
    return this.#rutDV;
  }

  get telefono() {
    return this.#telefono;
  }

  get email() {
    return this.#email;
  }

  get presupuesto() {
    return this.#presupuesto;
  }

  get gastos() {
    return this.#gastos;
  }

  setNombre(nuevoNombre) {
    try {
      this.#nombre = Validar.nombre(nuevoNombre, REGEX_NOMBRES);
      return {
        message: 'Nombre modificado con éxito',
        success: true
      }
    } catch (error) {
      console.error("No pudimos modificar este nombre", error);
      return {
        success: false,
        message: 'No pudimos modificar el nombre',
        error
      }
    }
  }

  setApellidoP(nuevoApellidoP) {
    try {
      this.#apellidoP = Validar.nombre(nuevoApellidoP, REGEX_NOMBRES);
      return {
        message: 'Apellido Paterno modificado con éxito',
        success: true
      }
    } catch (error) {
      console.error("No pudimos modiciar el apellido paterno", error);
      return {
        message: "No pudimos modificar el apellido paterno",
        success: false,
        error
      }
    }
  }

  setApellidoM(nuevoApellidoM) {
    try {
      this.#apellidoM = Validar.nombre(nuevoApellidoM, REGEX_NOMBRES);
      return {
        message: "Apellido Paterno modificado con éxito",
        success: true,
      };
    } catch (error) {
      console.error("No pudismo modiciar el apellido materno", error);
      return {
        message: "No pudimos modificar el apellido materno",
        success: false,
        error,
      };
    }
  }

  setTelefono(nuevoTelefono) {
    try {
        this.#telefono = Validar.telefono(nuevoTelefono)
        return {
          message: 'Teléfono modificado con éxito',
          success: true
        }
    } catch (error) {
        console.error('Error al modificar el telefono', error)
        return {
          message: "No pudimos modificar el teléfono",
          success: false,
          error
        }
    }
    
  }

  setEmail(nuevoEmail) {
    try {
        this.#email = Validar.email(nuevoEmail)
        return {
          message: 'Email modificado con éxito',
          success: true
        }
    } catch (error) {
        console.error('Error al modificar el email', error)
        return {
          message: "No pudimos modificar el correo",
          success: false,
          error,
        };
    }
  }

  setPresupuesto(nuevoPresupuesto) {
    try {
        this.#presupuesto = Validar.monto(nuevoPresupuesto)
        return {
          message: "Presupuesto modificado con éxito",
          success: true,
        };
    }catch(error) {
        console.error('Error al modificar el presupuesto', error)
        return {
          message: "No pudimos modificar el correo",
          success: false,
          error,
        };
    }
  } 

  getAllProperties() {
    return {
        nombre: this.#nombre,
        apellidoPaterno: this.#apellidoP,
        apellidoMaterno: this.#apellidoM,
        rut: `${this.#rutNumero}-${this.#rutDV}`,
        telefono: this.#telefono,
        email: this.#email,
        presupuesto: this.#presupuesto,
        gastos: this.#gastos
    }
  }

  agregarGasto(gasto) {
    try {
        this.#gastos.push(Validar.gastos(gasto))
    } catch (error) {
        console.error('No pudimos agregar el gasto', error)
    }
  }

  calcularGastoTotal() {
    const gastoTotal = this.#gastos.reduce((acumulador, gasto) => {
       return acumulador + gasto.monto
    }, 0)

    return gastoTotal
  }

  calcularSaldoTotal() {
    const saldoTotal = this.#presupuesto - this.calcularGastoTotal()
    return saldoTotal
  }
}