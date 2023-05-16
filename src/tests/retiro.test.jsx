import ATM from '../model/atm';
import Cuenta from '../model/cuenta';

let atm;

describe('Pruebas para modulo Retiro', () => {
    beforeEach(async () => {
        atm = new ATM();
    });

    test('Transaccion Retirar Efectivo exitosa', async () => {
        const cuenta = new Cuenta(10001, 12345, 1000, 1200);
        atm.autenticarUsuario(cuenta.numeroCuenta, cuenta.nip);
        const res = atm.realizarTransacciones(2, 200);
        expect(res).toEqual({ type: 'success', msg: 'Se dispenso su efectivo, tómelo ahora.' });
        expect(atm.baseDeDatos.obtenerCuenta(cuenta.numeroCuenta).obtenerSaldoDisponible()).toEqual(800);
        expect(atm.baseDeDatos.obtenerCuenta(cuenta.numeroCuenta).obtenerSaldoTotal()).toEqual(1000);
        expect(atm.dispensadorEfectivo.cuenta).toEqual(490);
    });

    test('Transaccion Retirar Efectivo fallida: No hay suficiente efectivo en el ATM', async () => {
        const cuenta = new Cuenta(10003, 11111, 1000000, 10000000);
        atm.autenticarUsuario(cuenta.numeroCuenta, cuenta.nip);
        const res = atm.realizarTransacciones(2, 10001);
        expect(res).toEqual({ type: 'failure', msg: 'No hay suficiente efectivo en el ATM. Seleccione un monto menor.' });
        expect(atm.baseDeDatos.obtenerCuenta(cuenta.numeroCuenta).obtenerSaldoDisponible()).toEqual(1000000);
        expect(atm.baseDeDatos.obtenerCuenta(cuenta.numeroCuenta).obtenerSaldoTotal()).toEqual(10000000);
        expect(atm.dispensadorEfectivo.cuenta).toEqual(500);
    });

    test('Transaccion Retirar Efectivo fallida: No hay suficiente fondos en su cuenta', async () => {
        const cuenta = new Cuenta(10003, 11111, 1000000, 10000000);
        atm.autenticarUsuario(cuenta.numeroCuenta, cuenta.nip);
        const res = atm.realizarTransacciones(2, 10000001);
        expect(res).toEqual({ type: 'failure', msg: 'No hay suficiente fondos en su cuenta. Seleccione un monto menor.' });
        expect(atm.baseDeDatos.obtenerCuenta(cuenta.numeroCuenta).obtenerSaldoDisponible()).toEqual(1000000);
        expect(atm.baseDeDatos.obtenerCuenta(cuenta.numeroCuenta).obtenerSaldoTotal()).toEqual(10000000);
        expect(atm.dispensadorEfectivo.cuenta).toEqual(500);
    });
});