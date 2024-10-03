import { Usuario } from './src/model/Usuario.js'
import { Gasto } from './src/model/Gastos.js'

const usuario = new Usuario(
    'Dino', 
    'Alvarez', 
    'Lopez', 
    '18569777', 
    '0', 
    '+56998906683', 
    'mail@erxample.com', 
    150000, 
    []
)

const gasto = new Gasto('sopaipa', 500)

console.log(gasto.getAllProperties())

const cambiarNombre = () => {   
    const resultTask = (usuario.nombre = "david");
    console.log(resultTask)
    return resultTask
}

cambiarNombre()

console.log(usuario.nombreCompleto)