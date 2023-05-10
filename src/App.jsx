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

function App() {


  return (
    <>
    
    <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/menu" element={<MainMenu />} />
                <Route path="/deposito" element={<DepositIncome />} />
                <Route path="*" element={<h1>No found</h1>} />
                <Route path="/retiro" element={<WithdrawalMenu/>} />
            </Routes>
        </Router>
   

    </>
  )
}

export default App
