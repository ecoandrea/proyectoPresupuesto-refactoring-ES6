import { InterfaceDom } from "./InterfaceDom.js";

export class UsuarioDom extends InterfaceDom {
  static actualizarUsuario(usuarioSelecionado, usuarios) {
    usuarioSelecionado.innerHTML = "";

    usuarios.forEach((usuario, index) => {
      const optionSelect = document.createElement("option");
      optionSelect.value = index;
      optionSelect.textContent = usuario.nombreCompleto;

      usuarioSelecionado.appendChild(optionSelect);
    });
  }

  static actualizarPresupuesto(usuario, contenedor, region, divisa) {
    const montoPresupuesto = this.formatearDivisaDom(
      usuario.presupuesto,
      region,
      divisa
    );
    this.actualizarContenidoHTML(contenedor, montoPresupuesto);
  }
}