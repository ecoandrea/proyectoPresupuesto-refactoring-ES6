
const REGEX_NOMBRES = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/



function Usuario(nombre, apellidoP, apellidoM, rutNumero, rutDV, telefono, email, presupuesto) {
    //Propiedades Privadas # _ $ => Corresponde a Encapsulamiento

    let _nombre = validarNombres(nombre, REGEX_NOMBRES);
    let _apellidoP = validarNombres(apellidoP, REGEX_NOMBRES);
    let _apellidoM = validarNombres(apellidoM, REGEX_NOMBRES);
    let _rutNumero = rutNumero;
    let _rutDv = rutDV;
    let _telefono = telefono;
    let _email = email;
    let _presupuesto = presupuesto
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
        _nombre = nuevoNombre
    }

    this.setApellidoP = function (nuevoApellidoP) {
      //validacion pendiente
      _apellidoP = nuevoApellidoP;
    };
    
    this.setApellidoM = function (nuevoApellidoM) {
      //validacion pendiente
      _apellidoM = nuevoApellidoM;
    }
    
    ;this.setEmail = function (nuevoEmail) {
      //validacion pendiente
      _email = nuevoEmail;
    };
    
    this.setTelefono = function (nuevoTelefono) {
      //validacion pendiente
      _telefono = nuevoTelefono;
    };
    
    this.setPresupuesto = function (nuevoPresupuesto) {
      //validacion pendiente
      _presupuesto = nuevoPresupuesto;
    };
    
    this.setGastos = function (nuevoGastos) {
      //validacion pendiente
      _gastos = nuevoGastos;
    };
    
    this.setRut = function (nuevoRut) {
      //validacion pendiente
      _rut = nuevoRut;
    };


    // Métodos Privados
    function validarNombres(nombre, regex) {
      if(!regex.test(nombre)) throw new Error('El nombre o los apellidos solo deben contener letras y espacios')
      return nombre 
    }
    
}

/* const usuario1 = new Usuario('Alan', 'García', 'Muñoz') 

usuario = usuario1.getAllProperties()
usuario.nombre = 'Francisca'
console.log(usuario1.getAllProperties()) */



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
