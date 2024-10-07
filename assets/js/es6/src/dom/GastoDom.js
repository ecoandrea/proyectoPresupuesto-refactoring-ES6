import { InterfaceDom } from "./InterfaceDom.js";
import { REGION, DIVISA } from "../util/constantes.js";
import { UsuarioDom } from "./UsuarioDom.js";

export class GastoDom extends InterfaceDom {
  static actualizarGastos(usuario, contenedor, region, divisa) {
    contenedor.innerHTML = "";

    if (!usuario) return;
    if (usuario.calcularSaldoTotal() < 0) return;

    usuario.gastos.forEach((gasto, index) => {
      const filaTabla = document.createElement("tr");

      filaTabla.innerHTML = `
          <td>${index + 1}</td>
          <td>${gasto.nombre}</td>
          <td>${this.formatearDivisaDom(gasto.monto, region, divisa)}</td>
          <td>
            <button data-index="${index}" class="btn-editar">Editar</button>
            <button data-index="${index}" class="btn-eliminar">Eliminar</button>
          </td>
        `;

      contenedor.appendChild(filaTabla);
    });

    document.querySelectorAll(".btn-editar").forEach((button) => {
      button.addEventListener("click", (event) => {

        const index = event.target.dataset.index;
        this.abrirModalEditarGasto(usuario, index);
      });
    });

    document.querySelectorAll(".btn-eliminar").forEach((button) => {
      button.addEventListener("click", (event) => {

        const index = event.target.dataset.index;
        this.eliminarGasto(usuario, index);
      });
    });
  }

  static actualizarTotalGastos(usuario, contenedor, region, divisa) {
    if(usuario.calcularSaldoTotal() < 0) return
    const totalGastos = this.formatearDivisaDom(usuario.calcularGastoTotal(), region, divisa)
    this.actualizarContenidoHTML(contenedor, totalGastos)
    
  }

  static abrirModalEditarGasto(usuario, index) {
    const gasto = usuario.gastos[index]

    const modal = document.querySelector("#modal-editar-gasto");
    const nombreInput = document.querySelector("#editar-nombre-gasto");
    const montoInput = document.querySelector('#editar-monto-gasto');

    nombreInput.value = gasto.nombre
    montoInput.value = gasto.monto

    modal.style.display = 'block'

    const formularioEditar = document.querySelector("#editar-gasto-form");
    const buttonCancelar = document.querySelector("#cancelar-edicion");

    formularioEditar.onsubmit = (event) => {
      event.preventDefault();

      const nuevoNombreGasto = nombreInput.value
      const nuevoMontoGasto = Number(montoInput.value)
      this.guardarCambiosGastos(usuario, index, nuevoNombreGasto, nuevoMontoGasto)
    }

    buttonCancelar.onclick = () => {
      this.cerrarModalGasto()
    }
  }

  static cerrarModalGasto() {
    const modal = document.querySelector('#modal-editar-gasto')
    modal.style.display = 'none'
  }

  static guardarCambiosGastos(usuario, index, nuevoNombre, nuevoMonto) {
    try {
      const gasto = usuario.gastos[index]

      gasto.setNombre(nuevoNombre)
      gasto.setMonto(nuevoMonto)

      const tablaGastos = document.querySelector("#tabla-gastos");

      const contenedorGastoTotal = document.querySelector("#gasto-total");
      const contenedorSaldoTotal = document.querySelector("#saldo-total");
      this.actualizarGastos(usuario, tablaGastos, REGION, DIVISA)

      this.actualizarTotalGastos(usuario, contenedorGastoTotal, REGION, DIVISA)
      UsuarioDom.actualizarSaldoTotal(usuario, contenedorSaldoTotal, REGION, DIVISA)
      this.cerrarModalGasto()
    } catch(error) {
      console.error('No pudimos modificar los datos', error)
    }
  }

  static eliminarGasto(usuario, index) {
    try {
      usuario.gastos.splice(index, 1);

      const tablaGastos = document.querySelector("#tabla-gastos");
      const contenedorGastoTotal = document.querySelector("#gasto-total");
      const contenedorSaldoTotal = document.querySelector("#saldo-total");

      this.actualizarGastos(usuario, tablaGastos, REGION, DIVISA)
      this.actualizarTotalGastos(usuario, contenedorGastoTotal, REGION, DIVISA)
      UsuarioDom.actualizarSaldoTotal(usuario, contenedorSaldoTotal, REGION, DIVISA)

    } catch(error) {
      console.error('No pudimos Eliminar el Gasto', error)
    }
  }
}