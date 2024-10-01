

export class Gasto {
    #nombre
    #monto

constructor(nombre, monto) {
    this.#nombre = nombre;
    this.#monto = monto;
}
get nombre() {
return this.#nombre;
}

get monto() {
return this.#monto;
}

set monto(nuevoMonto) {
this.#monto = nuevoMonto;
}

getAllProperties(){
    return {
        nombre: this.#nombre,
        monto: this.#monto
    }
}

}