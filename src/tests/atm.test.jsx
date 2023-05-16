import ATM from '../model/atm';
import Cuenta from '../model/cuenta';

let atm;

describe('Pruebas para modulo ATM', () => {
    beforeEach(async () => {
        atm = new ATM();
    });

    test('Verifica ingreso con cuenta valida', async () => {
        const cuenta = new Cuenta(10001, 12345, 1000, 1200);
        const res = atm.autenticarUsuario(cuenta.numeroCuenta, cuenta.nip);
        expect(res).not.toEqual({ type: 'failure', msg: 'Numero de cuenta o NIP invalido. Intente de nuevo.' });
        expect(atm.usuarioAutenticado).toEqual(true);
        expect(atm.numeroCuentaActual).toEqual(10001);
    });

    test('Muestra error con cuenta invalida', async () => {
        const cuenta = new Cuenta(10000, 11111, 1000, 1200);
        const res = atm.autenticarUsuario(cuenta.numeroCuenta, cuenta.nip);
        expect(res).toEqual({ type: 'failure', msg: 'Numero de cuenta o NIP invalido. Intente de nuevo.' });
        expect(atm.usuarioAutenticado).toEqual(false);
        expect(atm.numeroCuentaActual).toEqual(0);
    });

    test('Transaccion Salir exitosa', async () => {
        const cuenta = new Cuenta(10001, 12345, 1000, 1200);
        atm.autenticarUsuario(cuenta.numeroCuenta, cuenta.nip);
        const res = atm.realizarTransacciones(4, 0);
        expect(res).toEqual({ type: 'success', msg: 'Cerrando sesion.' });
        expect(atm.usuarioAutenticado).toEqual(false);
        expect(atm.numeroCuentaActual).toEqual(0);
    });
});