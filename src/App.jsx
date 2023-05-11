import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Login from './pages/Login';
import MainMenu from './pages/MainMenu';
import DepositIncome from './pages/DepositIncome';
import WithdrawalMenu from './pages/WithdrawalMenu';
import Error from './components/Error';
import Success from './components/success';
import NotFound from './pages/NotFount';

function App() {


  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/menu" element={<MainMenu />} />
          <Route path="/deposito" element={<DepositIncome />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/retiro" element={<WithdrawalMenu />} />
          <Route path="/error" element={<Error />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>


    </>
  )
}

export default App
