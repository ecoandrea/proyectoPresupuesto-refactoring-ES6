export class InterfaceDom {
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

    static actualizarSaldoTotal(usuario, contenedor, region, divisa) {
        const saldoTotal = this.formatearDivisaDom(usuario.calcularSaldoTotal(), region, divisa)
        this.actualizarContenidoHTML(contenedor, saldoTotal)
    }
}

