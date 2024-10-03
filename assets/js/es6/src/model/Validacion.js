import { REGEX_EMAIL } from "../util/constantes.js";

export class Validar {
    static nombre(nombre, regex) {
        if (nombre === null || nombre === undefined) return "No otorgado";
        if (!regex.test(nombre))
          throw new Error(
            "El nombre o los apellidos deben contener solo letras y espacios"
          );
        return nombre;
    }

    static telefono(telefono, regex) {
        if(!regex.test(telefono)) throw new Error('El número de telefono no es válido')
        return telefono
    } 

    static rut(rut, regex) {
        const rutNormalizado = rut.trim()
        if(!regex.test(rutNormalizado)) throw new Error('El número del rut es invalido. Ingresar número sin puntos')
        return rutNormalizado
    }

    static email(email) {
      if(!REGEX_EMAIL.test(email)) throw new Error('El email no es valido')
      return email
    }


    static monto(monto) {
      const montoNormalizado = Number(monto)
      if(isNaN(montoNormalizado) || montoNormalizado < 0) {
        throw new Error('El monto debe ser un número mayor que 0')
      }

      return montoNormalizado
    }

    static gastos(gasto) {
      if(!(gasto instanceof Gasto)) throw new Error('El gasto debe ser una instancia de Gasto')
      return gasto
    }
    
    static calcularDigitoVerificador(numeroRut) {
      let acumulador = 0;
      let multiplicador = 2

      for( let i = numeroRut.length - 1; i >= 0; i-- ) {
        acumulador += multiplicador * parseInt(numeroRut.charAt(i))
        multiplicador = multiplicador === 7 ? 2 : multiplicador + 1

        /* if(multiplicador === 7 ) {
          multiplicador = 2
        } else {
          multiplicador + 1 
        } */
      }

      const digitoEvaluador = 11 - (acumulador % 11)

      if(digitoEvaluador === 11) return '0'
      if(digitoEvaluador === 10) return 'k'
      return digitoEvaluador.toString()
    }

    static digitoVerificador(numeroRut, rutDV) {
      const dvCalculado = this.calcularDigitoVerificador(numeroRut);
      if(dvCalculado.toLocaleLowerCase() !== rutDV.toLocaleLowerCase()) {
        throw new Error('Digito Verificador no válido')
      }

      return rutDV
    }
}

//si se hicieran varias validaciones en una
/*static validarString(string, regex) {
if(!regex.test(string)) throw new Error("La cadena no es valida")
    return string
} */