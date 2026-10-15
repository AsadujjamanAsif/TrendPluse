import { Link } from 'react-router-dom';
import './Navbar.css'; // স্টাইলের জন্য সিএসএস লিংক করা হলো

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* লোগো সেকশন */}
      <div className="navbar-logo">
        <Link to="/">TrendPulse.</Link>
      </div>

      {/* মেনু লিংক */}
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/watches">Watches</Link></li>
        <li><Link to="/panjabi">Panjabi</Link></li>
      </ul>

      {/* কার্ট ও লগিন আইকন */}
      <div className="navbar-icons">
        <Link to="/cart">🛒 Cart</Link>
        <Link to="/login">👤 Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;