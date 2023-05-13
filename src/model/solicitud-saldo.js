import Transaccion from "./transaccion";

class SolicitudSaldo extends Transaccion {
    constructor(numeroCuentaUsuario, baseDeDatos) {
        super(numeroCuentaUsuario, baseDeDatos);
    }

    ejecutar() {
        const saldoDisponible = this.baseDeDatos.obtenerSaldoDisponible(this.obtenerNumeroCuenta());
        const saldoTotal = this.baseDeDatos.obtenerSaldoTotal(this.obtenerNumeroCuenta());

        return { saldoDisponible, saldoTotal };
    }
}

export default SolicitudSaldo;