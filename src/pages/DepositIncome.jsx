function DepositIncome() {
    return (<>
        <div className="relative py-16 bg-gradient-to-br bg-blue-950 to-gray-200 min-h-screen">
            <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
                <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
                    <div className="rounded-xl bg-white shadow-xl">
                        <div className="p-6 sm:p-16">
                            <div className="space-y-4 text-center">
                                <h2 className="mb-8 text-2xl text-cyan-900 font-bold">Depositar Fondos</h2>
                            </div>
                            <form className="p-12 md:p-6">
                                <div className="flex items-center text-lg mb-6 md:mb-8">
                                    <svg className="absolute ml-3" viewBox="0 0 24 24" width="24">
                                        <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z" />
                                    </svg>
                                    <input type="text" id="accountNumber" className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Numero de cuenta" />
                                </div>
                                <div className="flex justify-between flex-wrap flex-col sm:flex-nowrap sm:flex-row">
                                    <div className=" grid space-y-4 mt-2">
                                        <button
                                            className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                                hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                                            <div className="relative flex items-center space-x-4 justify-center">
                                                <a href="">
                                                    <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">$5</span>
                                                </a>
                                            </div>
                                        </button>
                                        <button
                                            className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                                hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                                            <div className="relative flex items-center space-x-4 justify-center">
                                                <a href="">
                                                    <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">$10</span>
                                                </a></div>
                                        </button>
                                        <button
                                            className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                                hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                                            <div className="relative flex items-center space-x-4 justify-center">
                                                <a href="">
                                                    <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">$20</span>
                                                </a></div>
                                        </button>
                                    </div>
                                    <div className=" grid space-y-4 mt-2">
                                        <button
                                            className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                                hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                                            <div className="relative flex items-center space-x-4 justify-center">
                                                <a href="">
                                                    <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">$50</span>
                                                </a>
                                            </div>
                                        </button>
                                        <button
                                            className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                                hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                                            <div className="relative flex items-center space-x-4 justify-center">
                                                <a href="">
                                                    <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">$100</span>
                                                </a></div>
                                        </button>
                                        <button
                                            className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                                hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                                            <div className="relative flex items-center space-x-4 justify-center">
                                                <a href="">
                                                    <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">$200</span>
                                                </a></div>
                                        </button>
                                    </div>
                                </div>
                                <div className="space-y-4 text-center">
                                    <h2 className="mb-8 text-2xl text-cyan-900 font-bold">Otro valor</h2>
                                </div>
                                <div className="flex items-center text-lg mb-6 md:mb-8">
                                    <svg className="absolute ml-3" viewBox="0 0 24 24" width="24">
                                        <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z" />
                                    </svg>
                                    <input type="text" id="totalDeposit" className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Valor a depositar" />
                                </div>
                                <button
                                    className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full">Depositar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}
export default DepositIncome;