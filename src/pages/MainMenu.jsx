import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Success from '../components/Success';
import Error from '../components/Error';

function MainMenu({ atm, setAtm }) {
    const [saldos, setSaldos] = useState({});
    const navigateTo = useNavigate();

    const salir = () => {
        atm.realizarTransacciones(4, 0);
        setSaldos({});
        setAtm(atm);
        navigateTo('/');
    }

    const handleVerSaldos = (event) => {
        event.preventDefault();
        const { type, msg } = atm.realizarTransacciones(1, 0);
        setSaldos({ type, msg });
        setTimeout(() => {
            salir();
        }, 5000);
    }

    const handleSalir = (event) => {
        event.preventDefault();
        const { type, msg } = atm.realizarTransacciones(4, 0);
        setSaldos({ type, msg });
        setTimeout(() => {
            salir();
        }, 5000);
    }

    return (<>
        {Object.keys(saldos).length === 0 &&
            <div className="relative py-16 bg-gradient-to-br bg-blue-950 to-gray-200 min-h-screen">
                <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
                    <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
                        <div className="rounded-xl bg-white shadow-xl">
                            <div className="p-6 sm:p-16">
                                <div className="space-y-4 text-center">
                                    <h2 className="mb-8 text-2xl text-cyan-900 font-bold">Menu de Opciones</h2>
                                </div>
                                <div className="mt-16 grid space-y-4">
                                    <button
                                        className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                            hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                                        onClick={(event) => handleVerSaldos(event)}
                                    >
                                        <div className="relative flex items-center space-x-4 justify-center">
                                            <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Ver mi saldo</span>
                                        </div>
                                    </button>

                                    <button
                                        className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                            hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                                        onClick={() => {
                                            navigateTo('/retiro');
                                        }}                                    >
                                        <div className="relative flex items-center space-x-4 justify-center">
                                            <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Retirar Efectivo</span>
                                        </div>
                                    </button>

                                    <button
                                        className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                            hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                                        onClick={() => {
                                            navigateTo('/deposito');
                                        }}
                                    >
                                        <div className="relative flex items-center space-x-4 justify-center">
                                            <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Depositar Fondos</span>
                                        </div>
                                    </button>

                                    <button
                                        className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                            hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                                        onClick={(event) => handleSalir(event)}
                                    >
                                        <div className="relative flex items-center space-x-4 justify-center">
                                            <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Salir</span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
        {(Object.keys(saldos).length !== 0 && saldos.type === 'success') &&
            <Success
                title='Transaccion exitosa'
                msg={`${saldos.msg}`}
            />
        }
        {
            (Object.keys(saldos).length !== 0 && saldos.type === 'failure') &&
            <Error
                msg={`${saldos.msg}`}
            />
        }

    </>);
}

MainMenu.propTypes = {
    atm: PropTypes.object.isRequired,
    setAtm: PropTypes.func.isRequired
};

export default MainMenu;