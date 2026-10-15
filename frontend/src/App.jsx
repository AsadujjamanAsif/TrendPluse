import ProductDetails from './pages/ProductDetails';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'; 
import './App.css';

function App() {
  return (
    <div>
      <Navbar /> 
      
      <main style={{ padding: '0 50px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<h2>This is the Login Page</h2>} />
          {/* এই লাইনটি ঠিক করা হয়েছে */}
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;