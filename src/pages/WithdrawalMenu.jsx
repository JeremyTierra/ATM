import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Success from '../components/Success';
import Error from '../components/Error';

function WithdrawalMenu({ atm, setAtm }) {
    const [retirado, setRetirado] = useState({});
    const navigateTo = useNavigate();

    const salir = () => {
        atm.realizarTransacciones(4, 0);
        setRetirado({});
        setAtm(atm);
        navigateTo('/');
    }

    const handleRetiro = (event, monto) => {
        event.preventDefault();
        const { type, msg } = atm.realizarTransacciones(2, monto);
        console.log(atm.dispensadorEfectivo.cuenta);
        setRetirado({ type, msg });
        setTimeout(() => {
            salir();
        }, 5000);

    }

    const handleCancelar = (event) => {
        event.preventDefault();
        const { type, msg } = atm.realizarTransacciones(4, 0);
        setRetirado({ type, msg });
        setTimeout(() => {
            salir();
        }, 5000);
    }

    return (<>
        {Object.keys(retirado).length === 0 &&
            <div className="relative py-16 bg-gradient-to-br bg-blue-950 to-gray-200 min-h-screen" >
                <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
                    <div className="m-auto md:w-10/12 lg:w-10/12 ">
                        <div className="rounded-xl bg-white shadow-xl">
                            <div className="p-6 sm:p-16">
                                <div className="space-y-4 text-center">
                                    <h2 className="mb-8 text-2xl text-cyan-900 font-bold">Menu de Retiro</h2>
                                </div>
                                <form className="p-12 md:p-6">
                                    <div className="flex justify-between flex-wrap flex-col sm:flex-nowrap sm:flex-row">
                                        <div className=" grid space-y-4 mt-2">
                                            <button
                                                className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                                hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                                                onClick={(event) => handleRetiro(event, 20)}
                                            >
                                                <div className="relative flex items-center space-x-4 justify-center">
                                                    <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">$20</span>
                                                </div>
                                            </button>
                                            <button
                                                className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                                hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                                                onClick={(event) => handleRetiro(event, 40)}
                                            >
                                                <div className="relative flex items-center space-x-4 justify-center">
                                                    <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">$40</span>
                                                </div>
                                            </button>
                                            <button
                                                className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                                hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                                                onClick={(event) => handleRetiro(event, 60)}
                                            >
                                                <div className="relative flex items-center space-x-4 justify-center">
                                                    <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">$60</span>
                                                </div>
                                            </button>
                                        </div>
                                        <div className=" grid space-y-4 mt-2">
                                            <button
                                                className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                                hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                                                onClick={(event) => handleRetiro(event, 100)}
                                            >
                                                <div className="relative flex items-center space-x-4 justify-center">
                                                    <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">$100</span>
                                                </div>
                                            </button>
                                            <button
                                                className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                                hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                                                onClick={(event) => handleRetiro(event, 200)}
                                            >
                                                <div className="relative flex items-center space-x-4 justify-center">
                                                    <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">$200</span>
                                                </div>
                                            </button>
                                            <button
                                                className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                                hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                                                onClick={(event) => handleCancelar(event)}
                                            >
                                                <div className="relative flex items-center space-x-4 justify-center">
                                                    <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Cancelar transaccion</span>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </form>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
        {
            (Object.keys(retirado).length !== 0 && retirado.type === 'success') &&
            <Success
                title='Transaccion exitosa'
                msg={`${retirado.msg}`}
            />
        }
        {
            (Object.keys(retirado).length !== 0 && retirado.type === 'failure') &&
            <Error
                msg={`${retirado.msg}`}
            />
        }
    </>);
}

WithdrawalMenu.propTypes = {
    atm: PropTypes.object.isRequired,
    setAtm: PropTypes.func.isRequired
};

export default WithdrawalMenu;