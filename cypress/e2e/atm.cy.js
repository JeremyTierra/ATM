describe('Pruebas de integracion de ATM (Componentes React y clases del Modelo)', function () {

    describe('Pruebas de Login', function () {
        beforeEach(function () {
            cy.visit('');
        });

        it('Login exitoso con datos validos', function () {
            cy.get('#accountNumber').type('10001');
            cy.get('#nip').type('12345');
            cy.contains('Login').click();
            cy.contains('Menu de Opciones');
        });

        it('Login fallido con datos invalidos', function () {
            cy.get('#accountNumber').type('10004');
            cy.get('#nip').type('00000');
            cy.contains('Login').click();
            cy.get('#errorTitle').contains('Error!');
            cy.get('#errorMsg').contains('Numero de cuenta o NIP invalido');
        });
    });

    describe('Pruebas de Transacciones', function () {
        beforeEach(function () {
            cy.visit('');
        });

        it('Transaccion Ver mi saldo exitosa', function () {
            cy.get('#accountNumber').type('10001');
            cy.get('#nip').type('12345');
            cy.contains('Login').click();
            cy.contains('Ver mi saldo').click();
            cy.contains('Saldo disponible: $1000 - Saldo total: $1200');
        });

        it('Transaccion Retirar Efectivo exitosa', function () {
            cy.get('#accountNumber').type('10001');
            cy.get('#nip').type('12345');
            cy.contains('Login').click();
            cy.contains('Retirar Efectivo').click();
            cy.contains('$200').click();
            cy.get('#successTitle').contains('Transaccion exitosa');
            cy.get('#successMsg').contains('Se dispenso su efectivo, tómelo ahora.');
        });

        it('Transaccion Retirar Efectivo fallida: No hay suficiente fondos en su cuenta', function () {
            cy.get('#accountNumber').type('10004');
            cy.get('#nip').type('22222');
            cy.contains('Login').click();
            cy.contains('Retirar Efectivo').click();
            cy.contains('$200').click();
            cy.get('#errorTitle').contains('Error!');
            cy.get('#errorMsg').contains('No hay suficiente fondos en su cuenta. Seleccione un monto menor.');
        });

        it('Transaccion Retirar Efectivo cancelada', function () {
            cy.get('#accountNumber').type('10004');
            cy.get('#nip').type('22222');
            cy.contains('Login').click();
            cy.contains('Retirar Efectivo').click();
            cy.contains('Cancelar transaccion').click();
            cy.get('#successTitle').contains('Transaccion exitosa');
            cy.get('#successMsg').contains('Cerrando sesion');
        });

        it('Transaccion Depositar Fondos exitosa', function () {
            cy.get('#accountNumber').type('10001');
            cy.get('#nip').type('12345');
            cy.contains('Login').click();
            cy.contains('Depositar Fondos').click();
            cy.contains('$200').click();
            cy.get('#successTitle').contains('Transaccion exitosa');
            cy.get('#successMsg').contains('Se recibió su sobre de deposito. NOTA: El dinero que se acaba de depositar no estará disponible sino hasta que verifiquemos el monto del efectivo.');
        });

        it('Transaccion Depositar Fondos exitosa con otro valor', function () {
            cy.get('#accountNumber').type('10001');
            cy.get('#nip').type('12345');
            cy.contains('Login').click();
            cy.contains('Depositar Fondos').click();
            cy.get('#otherValue').type('1500');
            cy.get('#otherValueBtn').click();
            cy.get('#successTitle').contains('Transaccion exitosa');
            cy.get('#successMsg').contains('Se recibió su sobre de deposito. NOTA: El dinero que se acaba de depositar no estará disponible sino hasta que verifiquemos el monto del efectivo.');
        });

        it('Transaccion Depositar Fondos cancelada', function () {
            cy.get('#accountNumber').type('10001');
            cy.get('#nip').type('12345');
            cy.contains('Login').click();
            cy.contains('Depositar Fondos').click();
            cy.contains('Cancelar transaccion').click();
            cy.get('#successTitle').contains('Transaccion exitosa');
            cy.get('#successMsg').contains('Cerrando sesion');
        });

        it('Transaccion Salir exitosa', function () {
            cy.get('#accountNumber').type('10001');
            cy.get('#nip').type('12345');
            cy.contains('Login').click();
            cy.contains('Salir').click();
            cy.get('#successTitle').contains('Transaccion exitosa');
            cy.get('#successMsg').contains('Cerrando sesion');
        });

    });
});