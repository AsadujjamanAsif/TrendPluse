import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import './Home.css';

const Home = () => {
  // ডাটাবেস থেকে আসা প্রোডাক্টগুলো রাখার জন্য state
  const [products, setProducts] = useState([]);

  // পেজ লোড হওয়ার সাথে সাথেই এই ফাংশনটি কাজ করবে
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // ব্যাকএন্ডের API থেকে ডাটা নিয়ে আসা হচ্ছে
        const response = await axios.get('/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error("ডাটা আনতে সমস্যা হয়েছে:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Elevate Your Style with TrendPulse</h1>
        <p>Discover our exclusive collection of Premium Watches and Traditional Panjabis.</p>
        <button className="shop-now-btn">Explore Collection</button>
      </div>

      <div className="latest-products">
        <h2>Latest Arrivals</h2>
        <div className="product-grid">
          {/* এখন আর ডামি ডাটা নয়, ডাটাবেসের আসল প্রোডাক্টগুলো দেখাচ্ছে */}
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;