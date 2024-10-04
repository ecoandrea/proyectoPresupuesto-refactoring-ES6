import { InterfaceDom } from "./InterfaceDom.js";

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
  }

  static actualizarTotalGastos(usuario, contenedor, region, divisa) {
    if(usuario.calcularSaldoTotal() < 0) return
    const totalGastos = this.formatearDivisaDom(usuario.calcularGastoTotal(), region, divisa)
    this.actualizarContenidoHTML(contenedor, totalGastos)
    
  }
}