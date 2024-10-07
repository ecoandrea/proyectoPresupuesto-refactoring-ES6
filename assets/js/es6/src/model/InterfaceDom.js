export class InterfaceDom {
    static actualizarUsuarioDom(usuarioSelecionado, usuarios) {
        usuarioSelecionado.innerHTML = ""

        usuarios.forEach((usuario, index) => {
            const optionSelect = document.createElement('option')
            optionSelect.value = index
            optionSelect.textContent = usuario.nombreCompleto

            usuarioSelecionado.appendChild(optionSelect)
        })
    }

    static formatearDivisaDom(numero, region, divisa) {
        const formatoDivisa = new Intl.NumberFormat(region, {
            style: 'currency',
            currency: divisa,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        })

        return formatoDivisa.format(numero)
    }

    static actualizarContenidoHTML(contenedor, contenido) {
        contenedor.innerHTML = contenido
    }

    static actualizarPresupuesto(usuario, contenedor, region, divisa) {
        const montoPresupuesto = this.formatearDivisaDom(usuario.presupuesto, region, divisa)
        this.actualizarContenidoHTML(contenedor, montoPresupuesto)
    }
}