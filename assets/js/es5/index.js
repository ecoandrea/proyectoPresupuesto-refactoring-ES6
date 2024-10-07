
const REGEX_NOMBRES = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/
const REGEX_TELEFONO = /^\+56\d{9}$/
const REGEX_RUT = /^\d{7,8}$/



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

        _nombre = validarNombres(nuevoNombre, REGEX_NOMBRES)
    }

    this.setApellidoP = function (nuevoApellidoP) {
      _apellidoP = validarNombres(nuevoApellidoP, REGEX_NOMBRES);
    };
    
    this.setApellidoM = function (nuevoApellidoM) {
      _apellidoM = validarNombres(nuevoApellidoM, REGEX_NOMBRES);
    }
    
    ;this.setEmail = function (nuevoEmail) {
      _email = nuevoEmail;
    };
    
    this.setTelefono = function (nuevoTelefono) {
      _telefono = validarTelefono(nuevoTelefono, REGEX_TELEFONO);
    };
    
    this.setPresupuesto = function (nuevoPresupuesto) {
      _presupuesto = validarMonto(nuevoPresupuesto);
    };
    
    //Método público y por ende heredado a los hijos
    this.agregarGasto = function (gasto) {
      _gastos.push(validarGasto(gasto))
    }
    
    this.calcularGastoTotal = function () {
      const gastoTotal = _gastos.reduce((acumulador, gasto) => {
        return acumulador + gasto.getMonto()
      }, 0)

      return gastoTotal
    }

    this.calcularSaldoTotal = function() {
      const saldoTotal = _presupuesto - this.calcularGastoTotal()
      return validarSaldo(saldoTotal)
    }

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
    let _nombre = validarNombres(nombre, REGEX_NOMBRES);
    let _monto = validarMonto(monto)

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
        _nombre = validarNombres(nuevoNombre, REGEX_NOMBRES);
    }

    this.setMonto = function(nuevoMonto) {
        _monto = validarMonto(nuevoMonto)
    }
}

/* ------------------------------------- Funciones de Validacion ----------------------------------------------*/

const validarNombres = (nombre, regex) => {
  if (nombre === null || nombre === undefined) return 'No otorgado'
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
  const montoNormalizado = Number(monto)
  if(isNaN(montoNormalizado) || montoNormalizado < 0) throw new Error('El monto debe ser un núermo mayor que 0')
  return montoNormalizado
}

const validarGasto = (gasto) => {
  if(!(gasto instanceof Gasto)) throw new Error('El gasto debe ser una instancia de la clase Gasto')
  return gasto
}


const validarSaldo = (saldo) => {
  if(saldo < 0) {
    alert('No puedes quedar con saldo Negativo')
    throw new Error('El saldo no puede ser negativo')
  }
  return saldo
}
/* ------------------------------------- Manejo del DOM ----------------------------------------------*/


const REGION = "es-CL";
const DIVISA = 'CLP'

const userForm = document.getElementById('user-form');
const gastoForm = document.getElementById("gastos-form");

const selectUsers = document.getElementById("select-usuario");
const tablaGastos = document.getElementById("tabla-gastos");

const presupuesto = document.getElementById("presupuesto-total");
const gastoTotal = document.getElementById("gasto-total");
const saldoTotal = document.getElementById("saldo-total");

const usuarios = []

const actualizarUsuarios = () => {
  selectUsers.innerHTML = ""

  usuarios.forEach((usuario, index) => {
    const optionsSelect = document.createElement('option')
    optionsSelect.value = index
    optionsSelect.textContent = usuario.getNombreCompleto();
    
    selectUsers.appendChild(optionsSelect)
  })
}

//Primera opción de actualizarGastos()
/* const actualizarGastos = () => {
  const usuarioSeleccionado = usuarios[selectUsers.selectedIndex];
  tablaGastos.innerHTML = ''

  if(!usuarioSeleccionado) return

  usuarioSeleccionado.getGastos().forEach((gasto, index) => {
    const fila = document.createElement('tr');
    const tdNombre = document.createElement('td');

    tdNombre.textContent = gasto.getNombre();

    const tdMonto = document.createElement('td')
    tdMonto.textContent = gasto.getMonto();

    const tdAcciones = document.createElement('td');
    const btnEliminar = document.createElement('button')
    btnEliminar.textContent = 'Eliminar'

    fila.appendChild(tdNombre)
    fila.appendChild(tdMonto)
    fila.appendChild(tdAcciones)
    tdAcciones.appendChild(btnEliminar)
    tablaGastos.appendChild(fila)

  })

}
 */


/* const formatearDivisa = (number, region, divisa) => number.toLocaleString(region, { style: 'currency', currency: divisa }) */

const formatearDivisa = (number, region, divisa) => {
  const formatoDivisa = new Intl.NumberFormat(region, {
    style: 'currency',
    currency: divisa,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,

  })

  return formatoDivisa.format(number)
}



//Segunda opción de actualizar gastos
const actualizarGastos = () => {
  const usuarioSeleccionado = usuarios[selectUsers.selectedIndex];
  tablaGastos.innerHTML = "";

  if (!usuarioSeleccionado) return;
  if (usuarioSeleccionado.calcularSaldoTotal() < 0) return;

  let htmlTemplate = ''

  usuarioSeleccionado.getGastos().forEach((gasto, index) => {
    
    htmlTemplate += `
      <tr>
        <td>${index + 1}</td>
        <td>${gasto.getNombre()}</td>
        <td>${formatearDivisa(gasto.getMonto(), REGION, DIVISA)}</td>
        <td>
          <button data-index="${index}" class="btn-eliminar">Eliminar</button>
          <button data-index="${index}" class="btn-editar">Editar</button>
        </td>
      </tr>
        `;
        //Mala práctica ocupar la función a traves del onclick en Javascript Vanilla (En React, Vue y similares no es problema :D)
  });
      
  tablaGastos.innerHTML = htmlTemplate

  
  
  document.querySelectorAll(".btn-eliminar").forEach((button) => {
    button.addEventListener("click", (event) => {
      const usuarioSeleccionado = usuarios[selectUsers.selectedIndex];
      const index = event.target.getAttribute("data-index");
      eliminarGasto(usuarioSeleccionado, index);
      });
  });

  document.querySelectorAll('.btn-editar').forEach(button => {
    button.addEventListener('click', (event) => {
      const usuarioSeleccionado = usuarios[selectUsers.selectedIndex];
      const index = event.target.getAttribute("data-index");
      edit(usuarioSeleccionado, index);
    })
  })
};

    var usuarioActual, iGastoActual, filaActual
  
    function edit(u, i) {
      usuarioActual = u
      iGastoActual = i

      var fila = document.querySelectorAll("#tabla-gastos tr") //=> NodeList !== Array pero se le parece
      filaActual = fila[i]
      
      console.log(filaActual.children)
      if(!filaActual) {
        console.error('no pudismos encontrar la fila')
        return
      }
      var casillaN = filaActual.children[1]
      var casillaM = filaActual.children[2]
  
      casillaN.innerHTML = '<input type="text" id="editar-name" value="' + casillaN.textContent + '">'
      casillaM.innerHTML = '<input type="number" id="editar-mount" value="' + casillaM.textContent + '">'
  
      var casillaA = filaActual.children[3];
      casillaA.innerHTML = '<button onclick="saveChanges()">Guardar</button><button onclick="cancelChanges()">Cancelar</button>'
  
    }
  
    function saveChanges() {
      var nuevoG = document.getElementById('editar-name').value
      var nuevoM = document.getElementById('editar-mount').value
      
      usuarioActual.getGastos()[iGastoActual].setNombre(nuevoG)
      usuarioActual.getGastos()[iGastoActual].setMonto(nuevoM)
  
      filaActual.children[1].textContent = nuevoG;
      filaActual.children[2].textContent = formatearDivisa(nuevoM, REGION, DIVISA)
  
      filaActual.children[3].innerHTML = 
        '<button onclick="edit(usuarioActual, ' + iGastoActual + 
        ')">Editar</button><button onclick="eliminarGasto(usuarioActual, ' + iGastoActual +
        ')">Eliminar</button>'
    }
  
    function cancelChanges() {
      var originalG = usuarioActual.getGastos()[iGastoActual].getNombre()
      var originalM = usuarioActual.getGastos()[iGastoActual].getMonto()
  
      filaActual.children[1].textContent = originalG;
      filaActual.children[2].textContent = formatearDivisa(originalM,REGION,DIVISA);
  
      filaActual.children[3].innerHTML =
        '<button onclick="edit(usuarioActual, ' +
        iGastoActual +
        ')">Editar</button><button onclick="eliminarGasto(usuarioActual, ' +
        iGastoActual +
        ')">Eliminar</button>';
    }

const actualizarMontoHTML = (contenedor, monto) => contenedor.textContent = formatearDivisa(monto, REGION, DIVISA)

const actualizarPresupuesto = (usuario) => {
  const montoPresupuesto = usuario.getPresupuesto()
  actualizarMontoHTML(presupuesto, montoPresupuesto)
}

const actualizarTotalGastos = (usuario) => {
  if(usuario.calcularSaldoTotal() < 0) return
  const totalGastos = usuario.calcularGastoTotal()
  actualizarMontoHTML(gastoTotal, totalGastos);
}

const actualizarSaldoTotal = (usuario) => {
  const totalSaldo = usuario.calcularSaldoTotal()
  actualizarMontoHTML(saldoTotal, totalSaldo)
}

const eliminarGasto = (usuario, index) => {
  usuario.getGastos().splice(index, 1);
  actualizarGastos()
  actualizarTotalGastos(usuario)
  actualizarSaldoTotal(usuario)
}


userForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const apellidoP = document.getElementById('apellido-p').value;
  const apellidoM = document.getElementById('apellido-m').value;
  const numeroRut = document.getElementById('rut').value;
  const dvRut = document.getElementById("dv-rut").value;
  const telefono = document.getElementById('telefono').value;
  const email = document.getElementById('email').value;
  const presupuesto = document.getElementById('presupuesto').value

  try {
    const usuario = new Usuario(
      nombre, 
      apellidoP, 
      apellidoM, 
      numeroRut, 
      dvRut, 
      telefono, 
      email, 
      presupuesto
    );
    usuarios.push(usuario)
    actualizarUsuarios()
    actualizarPresupuesto(usuario)
    actualizarSaldoTotal(usuario)
    userForm.reset();
  } catch (error) {
      console.error('Error al crear el usuario', error)
      alert('Error al crear el usuario', error.message)
  }
})

gastoForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const usuarioSeleccionado = usuarios[selectUsers.selectedIndex]

  const nombreGasto = document.getElementById("nombre-gasto").value;
  const montoGasto = document.getElementById("monto-gasto").value;

  try{
    const gasto = new Gasto(nombreGasto, montoGasto);
    usuarioSeleccionado.agregarGasto(gasto)
    gastoForm.reset()
    actualizarGastos()
    actualizarTotalGastos(usuarioSeleccionado)
    actualizarSaldoTotal(usuarioSeleccionado)
  } catch (error) {
    console.error('No pudimos agregar el gasto', error)
    alert('No pudimos agregar el gasto', error)
  }

})


selectUsers.addEventListener('change', () => {
  const usuarioSeleccionado = usuarios[selectUsers.selectedIndex]

  actualizarGastos()
  actualizarPresupuesto(usuarioSeleccionado)
  actualizarTotalGastos(usuarioSeleccionado)
  actualizarSaldoTotal(usuarioSeleccionado)
})
