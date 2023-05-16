import ATM from '../model/atm';

let atm;

describe('Pruebas para modulo DispensadorEfectivo', () => {
    beforeEach(async () => {
        atm = new ATM();
    });

    test('Dispensar efectivo reduce numero de billetes en el dispensador', async () => {
        const dispensador = atm.dispensadorEfectivo;
        dispensador.dispensarEfectivo(200);
        const res = dispensador.cuenta;
        expect(res).toEqual(490);
    });

    test('Hay dinero suficiente para dispensar (cantidad inicial 500 billetes de 20 - 10000 dolares)', async () => {
        const dispensador = atm.dispensadorEfectivo;
        const res = dispensador.haySuficienteEfectivoDisponible(9999);
        expect(res).toEqual(true);
    });

    test('No hay dinero suficiente para dispensar (cantidad inicial 500 billetes de 20 - 10000 dolares)', async () => {
        const dispensador = atm.dispensadorEfectivo;
        const res = dispensador.haySuficienteEfectivoDisponible(10001);
        expect(res).toEqual(false);
    });
});