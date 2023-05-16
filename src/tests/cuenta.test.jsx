import Cuenta from '../model/cuenta';

let cuenta;

describe('Pruebas para modulo Cuenta', () => {
    beforeEach(async () => {
        cuenta = new Cuenta(10001, 12345, 1000, 1200);
    });

    test('Verifica creacion valida de una cuenta', async () => {
        expect(cuenta.obtenerNumeroCuenta()).toEqual(10001);
        expect(cuenta.validarNIP(12345)).toEqual(true);
        expect(cuenta.obtenerSaldoDisponible()).toEqual(1000);
        expect(cuenta.obtenerSaldoTotal()).toEqual(1200);
    });

    test('Operacion cargar de cuenta exitosa', async () => {
        cuenta.cargar(200);
        expect(cuenta.obtenerSaldoDisponible()).toEqual(800);
        expect(cuenta.obtenerSaldoTotal()).toEqual(1000);
    });

    test('Operacion abonar a cuenta exitosa', async () => {
        cuenta.abonar(200);
        expect(cuenta.obtenerSaldoTotal()).toEqual(1400);
    });
});