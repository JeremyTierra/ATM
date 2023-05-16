import ATM from '../model/atm';
import Cuenta from '../model/cuenta';

let atm;

describe('Pruebas para modulo SolicitudSaldo', () => {
    beforeEach(async () => {
        atm = new ATM();
    });

    test('Transaccion Ver mi saldo exitosa', async () => {
        const cuenta = new Cuenta(10001, 12345, 1000, 1200);
        atm.autenticarUsuario(cuenta.numeroCuenta, cuenta.nip);
        const res = atm.realizarTransacciones(1, 0);
        expect(res).toEqual({ type: 'success', msg: `Saldo disponible: $${1000} - Saldo total: $${1200}` });
    });
});