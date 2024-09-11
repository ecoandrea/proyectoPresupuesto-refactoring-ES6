
const REGEX_NOMBRES = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/
const REGEX_TELEFONO = /^\+56\d{9}$/
const REGEX_RUT = /^\d{7,8}+$/



function Usuario(nombre, apellidoP, apellidoM, rutNumero, rutDV, telefono, email, presupuesto) {
    //Propiedades Privadas # _ $ => Corresponde a Encapsulamiento

    let _nombre = validarNombres(nombre, REGEX_NOMBRES);
    let _apellidoP = validarNombres(apellidoP, REGEX_NOMBRES);
    let _apellidoM = validarNombres(apellidoM, REGEX_NOMBRES);
    let _rutNumero = validarRUT(rutNumero, REGEX_RUT);
    let _rutDv = validarDigitoVerificador(rutNumero, rutDV);
    let _telefono = validarTelefono(telefono, REGEX_TELEFONO);
    let _email = email;
    let _presupuesto = validarMonto(presupuesto)
    let _gastos = []

    //Métodos públicos de accesibilidad y modiciación (getters y setters)


    //getters
    this.getAllProperties = function () {
        return {
            nombre: _nombre,
            apellidoP: _apellidoP,
            apellidoM: _apellidoM,
            rutNumero: _rutNumero,
            rutDV: _rutDv,
            telefono: _telefono,
            email: _email,
            presupuesto: _presupuesto,
            gastos: _gastos
        }
    }

    this.getNombreCompleto = function () {
        return `${_nombre} ${_apellidoP} ${_apellidoM}`;
    }

    this.getNombre = function() {
        return _nombre
    }

    
    this.getApellidoPaterno = function () {
      return _ApellidoP;
    };

    this.getApellidoMaterno = function () {
      return _ApellidoM;
    };

    this.getEmail = function() {
        return _email
    }

    this.getTelefono = function() {
        return _telefono
    }

    this.getPresupuesto = function() {
        return _presupuesto
    }

    this.getGastos = function() {
        return _gastos
    }

    this.getRut = function() {
        return `${_rutNumero}-${_rutDv}`
    }

    //Setters
    this.setNombre = function(nuevoNombre) {
        //validacion pendiente
        _nombre = validarNombres(nuevoNombre, REGEX_NOMBRES)
    }

    this.setApellidoP = function (nuevoApellidoP) {
      //validacion pendiente
      _apellidoP = validarNombres(nuevoApellidoP, REGEX_NOMBRES);
    };
    
    this.setApellidoM = function (nuevoApellidoM) {
      //validacion pendiente
      _apellidoM = validarNombres(nuevoApellidoM, REGEX_NOMBRES);
    }
    
    ;this.setEmail = function (nuevoEmail) {
      //validacion pendiente
      _email = nuevoEmail;
    };
    
    this.setTelefono = function (nuevoTelefono) {
      //validacion pendiente
      _telefono = validarTelefono(nuevoTelefono, REGEX_TELEFONO);
    };
    
    this.setPresupuesto = function (nuevoPresupuesto) {
      //validacion pendiente
      _presupuesto = validarMonto(nuevoPresupuesto);
    };
    
    this.setGastos = function (nuevoGastos) {
      //validacion pendiente
      _gastos = nuevoGastos;
    };
    
    // Métodos Privados -> Ejemplo de como hacerla en prototipos privados (más abajo esta la fn que estamos usando)
    /* function validarNombres(nombre, regex) {
      if(!regex.test(nombre)) throw new Error('El nombre o los apellidos solo deben contener letras y espacios')
      return nombre 
    } */
    
}

/* const usuario1 = new Usuario('Jordan veintitres', 'García', 'Muñoz') 

usuario = usuario1.getAllProperties()
usuario.nombre = 'Francisca'
console.log(usuario1.getAllProperties())
 */


function Gasto(nombre, monto) {
    //Genero propiedades Privadas (falta validar)
    let _nombre = nombre;
    let _monto = monto

    //Métodos públicos de accesibilidad (getters y setters)
    //getters
    this.getAllProperties = function () {
        return {
            nombre: _nombre,
            monto: _monto
        }
    }

    this.getNombre = function() {
        return _nombre
    }

    this.getMonto = function() {
        return _monto
    }

    //Setters

    this.setNombre = function(nuevoNombre) {
        //validacion pendiente
        _nombre = nuevoNombre;
    }

    this.setMonto = function(nuevoMonto) {
        //validacion pendiente
        _monto = nuevoMonto
    }
}


const validarNombres = (nombre, regex) => {
  if (!regex.test(nombre)) throw new Error("El nombre o los apellidos solo deben contener letras y espacios");
  return nombre;
}

const validarTelefono = (telefono, regex) => {
  if(!regex.test(telefono)) throw new Error('El número de telefono debe tener el formato Chileno')
  return telefono
}

const validarRUT = (rut, regex) => {
  if(!regex.test(rut)) throw new Error('El número de RUT no es válido')
  return rut.trim()
}

const calcularDigitoVerificador = (rut) => {
  let acumulador = 0;
  let multiplicador = 2;

  for(let i = rut.length - 1; i >= 0; i--) {
    acumulador += multiplicador * parseInt(rut.charAt(i));
    multiplicador = multiplicador === 7 ? 2 : multiplicador + 1 // if ternario
  }

  const digitoParaEvaluar = 11 - (acumulador % 11)

  if(digitoParaEvaluar === 11) return '0';
  if(digitoParaEvaluar === 10) return 'k';
  return digitoParaEvaluar.toString();

}


const validarDigitoVerificador = (numeroRut, DV_Rut) => {
  const dvCalculado = calcularDigitoVerificador(numeroRut);
  if(dvCalculado.toLocaleLowerCase() !== DV_Rut.toLocaleLowerCase()) {
    throw new Error('Digito verificador no válido')
  }

  return DV_Rut
}

const validarMonto = (monto) => {
  if(isNaN(monto) || monto < 0) throw new Error('El monto debe ser un núermo mayor que 0')
  return monto
}