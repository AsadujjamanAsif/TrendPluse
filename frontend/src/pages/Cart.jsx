import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  
  // navigate ফাংশনটি ইনিশিয়ালাইজ করা হলো
  const navigate = useNavigate(); 

  const totalPrice = cartItems?.reduce((acc, item) => acc + item.price * item.qty, 0) || 0;
  const totalItems = cartItems?.reduce((acc, item) => acc + item.qty, 0) || 0;

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is currently empty.</p>
          <Link to="/" className="shop-now-btn">Go Shopping</Link>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <div className="cart-item-card" key={item._id}>
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <Link to={`/product/${item._id}`}>{item.name}</Link>
                  <p className="item-price">৳ {item.price}</p>
                </div>
                
                {/* পরিমাণ কমানো ও বাড়ানোর বাটন */}
                <div className="item-qty-actions">
                  <button onClick={() => updateQuantity(item._id, item.qty - 1)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => updateQuantity(item._id, item.qty + 1)}>+</button>
                </div>
                
                {/* ডিলিট বাটন */}
                <button className="remove-btn" onClick={() => removeFromCart(item._id)}>
                  🗑️
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Order Summary</h3>
            <div className="summary-row">
              <p>Total Items:</p>
              <p>{totalItems}</p>
            </div>
            <div className="summary-row total">
              <h2>Subtotal:</h2>
              <h2>৳ {totalPrice}</h2>
            </div>
            
            {/* onClick ইভেন্ট যুক্ত করা হলো */}
            <button className="checkout-btn" onClick={() => navigate('/shipping')}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;