import { Usuario, Gasto } from './src/model/index.js'
import { InterfaceDom, UsuarioDom, GastoDom } from './src/dom/index.js';
import { REGION, DIVISA } from './src/util/constantes.js'

const userForm = document.querySelector('#user-form')
const gastoForm = document.querySelector("#gastos-form");

const selectUsers = document.querySelector('#select-usuario')

const tablaGastos = document.querySelector("#tabla-gastos");

const contenedorPresupuesto = document.querySelector('#presupuesto-total');
const contenedorGastoTotal = document.querySelector("#gasto-total");
const contenedorSaldoTotal = document.querySelector("#saldo-total");

const usuarios = []

userForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nombre = document.querySelector('#nombre').value;
    const apellidoP = document.querySelector("#apellido-p").value;
    const apellidoM = document.querySelector("#apellido-m").value;
    const numeroRut = document.querySelector("#rut").value;
    const dvRut = document.querySelector("#dv-rut").value;
    const telefono = document.querySelector("#telefono").value;
    const email = document.querySelector("#email").value;
    const presupuesto = document.querySelector("#presupuesto").value;

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
        )
        usuarios.push(usuario)
        UsuarioDom.actualizarUsuario(selectUsers, usuarios)
        UsuarioDom.actualizarPresupuesto(usuario, contenedorPresupuesto, REGION, DIVISA)
        InterfaceDom.actualizarSaldoTotal(usuario, contenedorSaldoTotal, REGION, DIVISA)
        GastoDom.actualizarTotalGastos(usuario,contenedorGastoTotal,REGION, DIVISA);
        GastoDom.actualizarGastos(usuario,tablaGastos,REGION,DIVISA);
        userForm.reset()
    } catch(error) {
        console.error(error)
        alert(`${error}`)
    }
})

gastoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const usuarioSeleccionado = usuarios[selectUsers.selectedIndex]

    const nombreGasto = document.querySelector("#nombre-gasto").value;
    const montoGasto = document.querySelector('#monto-gasto').value

    try {
        const gasto = new Gasto(nombreGasto, montoGasto)
        usuarioSeleccionado.agregarGasto(gasto)
        gastoForm.reset()
        GastoDom.actualizarGastos(usuarioSeleccionado, tablaGastos, REGION, DIVISA)
        GastoDom.actualizarTotalGastos(usuarioSeleccionado, contenedorGastoTotal, REGION, DIVISA)
        InterfaceDom.actualizarSaldoTotal(usuarioSeleccionado, contenedorSaldoTotal, REGION, DIVISA)
    } catch (error) {
        console.error(error)
    }
})