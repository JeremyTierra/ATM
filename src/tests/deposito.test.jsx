import ATM from '../model/atm';
import Cuenta from '../model/cuenta';

let atm;

describe('Pruebas para modulo Deposito', () => {
    beforeEach(async () => {
        atm = new ATM();
    });

    test('Transaccion Depositar Fondos exitosa', async () => {
        const cuenta = new Cuenta(10001, 12345, 1000, 1200);
        atm.autenticarUsuario(cuenta.numeroCuenta, cuenta.nip);
        const res = atm.realizarTransacciones(3, 200);
        expect(res).toEqual({
            type: 'success',
            msg: 'Se recibió su sobre de deposito. NOTA: El dinero que se acaba de depositar no estará disponible sino hasta que verifiquemos el monto del efectivo.'
        });
        expect(atm.baseDeDatos.obtenerCuenta(cuenta.numeroCuenta).obtenerSaldoTotal()).toEqual(1400);
    });
});