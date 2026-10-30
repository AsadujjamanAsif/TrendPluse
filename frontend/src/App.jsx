import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'; 
import './App.css';
import Shipping from './pages/Shipping';


function App() {
  return (
    <div>
      <Navbar /> 
      
      <main style={{ padding: '0 50px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<h2>This is the Login Page</h2>} />
          <Route path="/shipping" element={<Shipping />} />
          
          {/* এই লাইনটি ঠিক করা হয়েছে */}
          <Route path="/cart" element={<Cart />} />
          
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;