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
import NotFound from './pages/NotFound';
import ProtectedRouter from './router/ProtectedRouter';

function App({ ATM }) {

  const [atm, setAtm] = useState(ATM);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login atm={atm} setAtm={setAtm} />} />
          <Route element={<ProtectedRouter atm={atm}></ProtectedRouter>}>
            <Route path="/menu" element={<MainMenu atm={atm} setAtm={setAtm} />} />
            <Route path="/deposito" element={<DepositIncome atm={atm} setAtm={setAtm} />} />
            <Route path="/retiro" element={<WithdrawalMenu atm={atm} setAtm={setAtm} />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}
App.propTypes = {
  ATM: PropTypes.object.isRequired
};


export default App
