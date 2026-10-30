import { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './PlaceOrder.css';

const PlaceOrder = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  // LocalStorage থেকে শিপিংয়ের ঠিকানা নিয়ে আসা হচ্ছে
  const shippingAddress = JSON.parse(localStorage.getItem('shippingAddress')) || {};

  // হিসাব-নিকাশ (Calculations)
  const itemsPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  
  // ঢাকার ভেতরে হলে ৬০ টাকা, বাইরে হলে ১২০ টাকা
  const shippingPrice = shippingAddress.area === 'Inside Dhaka' ? 60 : 120;
  
  const totalPrice = itemsPrice + shippingPrice;

  const placeOrderHandler = () => {
    // আপাতত একটি সাকসেস মেসেজ দেখাচ্ছি। পরবর্তীতে এখানে ব্যাকএন্ডে অর্ডার সেভ করার কোড বসবে।
    alert('🎉 Congratulations! Your order has been placed successfully.');
    navigate('/');
  };

  return (
    <div className="placeorder-container">
      <div className="order-details-section">
        <h2>Order Preview</h2>
        
        {/* শিপিং ইনফরমেশন */}
        <div className="info-box">
          <h3>Shipping Information</h3>
          <p><strong>Name:</strong> {shippingAddress.fullName}</p>
          <p><strong>Phone:</strong> {shippingAddress.phone}</p>
          <p><strong>Address:</strong> {shippingAddress.street}, {shippingAddress.city}</p>
        </div>

        {/* প্রোডাক্ট লিস্ট */}
        <div className="info-box">
          <h3>Order Items</h3>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div className="order-items-list">
              {cartItems.map((item) => (
                <div className="order-item" key={item._id}>
                  <img src={item.image} alt={item.name} />
                  <Link to={`/product/${item._id}`}>{item.name}</Link>
                  <p>{item.qty} x ৳ {item.price} = <strong>৳ {item.qty * item.price}</strong></p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ফাইনাল বিলিং সামারি */}
      <div className="order-summary-section">
        <h3>Order Summary</h3>
        <div className="summary-row">
          <p>Items Subtotal:</p>
          <p>৳ {itemsPrice}</p>
        </div>
        <div className="summary-row">
          <p>Delivery Charge:</p>
          <p>৳ {shippingPrice}</p>
        </div>
        <div className="summary-row total">
          <h2>Total Bill:</h2>
          <h2>৳ {totalPrice}</h2>
        </div>
        
        <button 
          className="place-order-btn" 
          disabled={cartItems.length === 0} 
          onClick={placeOrderHandler}
        >
          Confirm & Place Order
        </button>
      </div>
    </div>
  );
};

export default PlaceOrder;