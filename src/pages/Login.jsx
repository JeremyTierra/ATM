import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import imgCajero from "../assets/cajero.png"
import Error from "../components/Error";

function Login({ atm }) {

  const [numeroCuenta, setNumeroCuenta] = useState();
  const [nip, setNip] = useState();
  const navigateTo = useNavigate();
  const [error1, setError1] = useState(false);

  const handleNumeroCuenta = (e) => {
    setNumeroCuenta(e.target.value);
  }

  const handleNip = (e) => {
    setNip(e.target.value);
  }
  return (<>
    {!error1 &&
      <div className="bg-blue-950 h-screen overflow-hidden flex items-center justify-center">
        <div className="bg-white lg:w-5/12 md:6/12 w-10/12 shadow-3xl">
          <div className="bg-white absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-8">
            <img src={imgCajero} alt="img cajero" />
          </div>
          <form className="p-12 md:p-24">
            <div className="flex items-center text-lg mb-6 md:mb-8">
              <svg className="absolute ml-3" width="24" viewBox="0 0 24 24">
                <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
              </svg>
              <input type="text" id="username" className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Username" onChange={(e) => handleNumeroCuenta(e)} />
            </div>
            <div className="flex items-center text-lg mb-6 md:mb-8">
              <svg className="absolute ml-3" viewBox="0 0 24 24" width="24">
                <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z" />
              </svg>
              <input type="password" id="password" className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Password" onChange={(e) => handleNip(e)} />
            </div>

            <button className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full"
              onClick={(event) => {
                event.preventDefault();
                atm.run(numeroCuenta, nip);
                console.log(atm);
                if (atm.usuarioAutenticado) {
                  navigateTo('/menu');
                } else {
                  setError1(true);
                  setTimeout(() => { setError1(false) }, 5000);
                }
              }}>Login</button>
          </form>
        </div>
      </div>
    }
    {error1 && <Error msg='Numero de cuenta o nip invalido' />}
  </>);
}
Login.propTypes = {
  atm: PropTypes.object.isRequired,
  setAtm: PropTypes.func.isRequired
};

export default Login;