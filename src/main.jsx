// import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header/Header.jsx'
import Footer from './Footer/Footer.jsx'
import './index.css'

const calculatorButtons = [
  { text: "1", id: 1 },
  { text: "2", id: 2 },
  { text: "3", id: 3 },
  { text: "+", id: 4 },
  { text: "4", id: 5 },
  { text: "5", id: 6 },
  { text: "6", id: 7 },
  { text: "-", id: 8 },
  { text: "7", id: 9 },
  { text: "8", id: 10 },
  { text: "9", id: 11 },
  { text: "*", id: 12 },
  { text: ".", id: 13 },
  { text: "0", id: 14 },
  { text: "/", id: 15 },
  { text: "=", id: 16 },
];

const jsxElement = (
  <div className='app'>
    <Header result={'0'} />
    <Footer calculatorButtons={calculatorButtons} />
  </div>
)
ReactDOM.createRoot(document.getElementById('root')).render(jsxElement)
