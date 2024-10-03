import { Usuario, Gasto, InterfaceDom } from './src/model/index.js'
import { REGION, DIVISA } from './src/util/constantes.js'

const userForm = document.querySelector('#user-form')
const gastoForm = document.querySelector('#gasto-form')

const selectUsers = document.querySelector('#select-usuario')

const contenedorPresupuesto = document.querySelector('#presupuesto-total');


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
        InterfaceDom.actualizarUsuarioDom(selectUsers, usuarios)
        InterfaceDom.actualizarPresupuesto(usuario, contenedorPresupuesto, REGION, DIVISA)
    } catch(error) {
        console.error(error)
        alert(`${error}`)
    }
})