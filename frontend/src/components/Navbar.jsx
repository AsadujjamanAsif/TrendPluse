import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  
  // একটি সেফটি (?) দেওয়া হলো, যেন ডাটা না থাকলেও পেজ ক্র্যাশ না করে
  const totalItems = cartItems?.reduce((acc, item) => acc + item.qty, 0) || 0;

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"><h2>TrendPulse.</h2></Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/watches">Watches</Link></li>
        <li><Link to="/panjabi">Panjabi</Link></li>
      </ul>
      <div className="navbar-icons">
        <Link to="/cart" className="cart-icon">
          🛒 Cart 
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </Link>
        <Link to="/login">👤 Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;