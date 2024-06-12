import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './index.css'

const colors = {
  brand: {
    900: '#F8F7F4',
    800: '#0D0C22',
    700: '#FFDA79',
  },
}



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <App />

  </React.StrictMode>,
)
