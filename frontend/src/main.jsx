import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { CartProvider } from './context/CartContext.jsx' // নতুন যুক্ত করা হলো
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* CartProvider দিয়ে পুরো App কে মুড়িয়ে দেওয়া হলো */}
      <CartProvider> 
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
)