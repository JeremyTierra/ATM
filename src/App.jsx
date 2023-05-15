import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { useState } from 'react';
import PropTypes from 'prop-types';

import Login from './pages/Login';
import MainMenu from './pages/MainMenu';
import DepositIncome from './pages/DepositIncome';
import WithdrawalMenu from './pages/WithdrawalMenu';
import Error from './components/Error';
import Success from './components/success';
import NotFound from './pages/NotFound';

function App({ ATM }) {

  const [atm, setAtm] = useState(ATM);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login atm={atm} setAtm={setAtm} />} />
          <Route path="/menu" element={<MainMenu atm={atm} setAtm={setAtm} />} />
          <Route path="/deposito" element={<DepositIncome atm={atm} setAtm={setAtm} />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/retiro" element={<WithdrawalMenu atm={atm} setAtm={setAtm} />} />
          <Route path="/error" element={<Error />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>
    </>
  )
}
App.propTypes = {
  ATM: PropTypes.object.isRequired
};


export default App
