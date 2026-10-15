import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true); // নতুন: লোডিং স্টেট যোগ করা হলো

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${id}`);
        setProduct(response.data);
        setLoading(false); // নতুন: ডাটা চলে আসার পর লোডিং বন্ধ হয়ে যাবে
      } catch (error) {
        console.error("প্রোডাক্ট আনতে সমস্যা হয়েছে:", error);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  // নতুন: ডাটা আসার আগে স্ক্রিনে শুধু "Loading Data..." দেখাবে
  if (loading) {
    return <h2 style={{ textAlign: 'center', marginTop: '100px' }}>Loading Data...</h2>;
  }

  return (
    <div className="product-details-container">
      <Link to="/" className="back-btn">← Go Back</Link>
      
      <div className="details-grid">
        <div className="details-image">
          {product.image && <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '10px' }} />}
        </div>
        
        <div className="details-info">
          <h2>{product.name}</h2>
          <p className="details-price">৳ {product.price}</p>
          <p className="details-description">{product.description}</p>
          
          <div className="stock-status">
            Status: <strong>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</strong>
          </div>

          {product.countInStock > 0 && (
            <button className="add-cart-btn-large" style={{ marginTop: '20px', padding: '15px 30px', background: '#1a1a1a', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;