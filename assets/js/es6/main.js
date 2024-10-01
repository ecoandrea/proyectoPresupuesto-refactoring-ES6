import {Usuario} from './src/model/Usuario.js'
import{Gasto} from './src/model/Gastos.js'

const usuario = new Usuario(
    'Dino',
    'Alvarez',
    'Lopez', 
    '1234567',
    '5', 
    '+56987654321', 
    'mail@gmail.com',
     150000, 
     []
    )

const gasto = new Gasto("sopaipa", 500)

console.log(gasto.getAllProperties())
console.log(usuario.nombreCompleto)