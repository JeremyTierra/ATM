import ATM from '../model/atm';

let atm;

describe('Pruebas para modulo RanuraDeposito', () => {
    beforeEach(async () => {
        atm = new ATM();
    });

    test('Siempre acepta sobre de deposito', async () => {
        const res = atm.ranuraDeposito.seRecibioSobre();
        expect(res).toEqual(true);
    });
});