import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Shipping.css';

const Shipping = () => {
  const navigate = useNavigate();
  
  // ফর্মের ডাটা ধরে রাখার জন্য State
  const [address, setAddress] = useState({
    fullName: '',
    phone: '',
    street: '',
    city: '',
    area: 'Inside Dhaka', // ডিফল্টভাবে ঢাকা সিলেক্ট করা থাকবে
  });

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // ডাটা LocalStorage-এ সেভ করে রাখছি যেন অর্ডার পেজে ব্যবহার করতে পারি
    localStorage.setItem('shippingAddress', JSON.stringify(address));
    
    // ডেলিভারি ঠিকানা নেওয়া শেষ, এবার ফাইনাল অর্ডার পেজে নিয়ে যাব
    navigate('/placeorder'); 
  };

  return (
    <div className="shipping-container">
      <h2>Delivery Information</h2>
      <form onSubmit={submitHandler} className="shipping-form">
        
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" name="fullName" required placeholder="Enter your name" onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input type="text" name="phone" required placeholder="01XXXXXXXXX" onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Full Address</label>
          <input type="text" name="street" required placeholder="House, Road, Area" onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>City</label>
          <input type="text" name="city" required placeholder="e.g. Dhaka, Rajshahi" onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Delivery Area (For Charge)</label>
          <select name="area" onChange={handleChange}>
            <option value="Inside Dhaka">Inside Dhaka (৳ 60)</option>
            <option value="Outside Dhaka">Outside Dhaka (৳ 120)</option>
          </select>
        </div>

        <button type="submit" className="continue-btn">Continue to Payment</button>
      </form>
    </div>
  );
};

export default Shipping;