import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ATM from './model/atm.js'

const atm = new ATM();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App ATM={atm} />
  </React.StrictMode>,
)
