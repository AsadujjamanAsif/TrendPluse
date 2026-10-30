import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext'; // Cart ইমপোর্ট করা হলো
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext); // ফাংশনটি নেওয়া হলো

  return (
    <div className="product-card">
      <Link to={`/product/${product._id}`}>
        <div className="card-image">
          <img src={product.image} alt={product.name} />
        </div>
      </Link>
      
      <div className="card-info">
        <Link to={`/product/${product._id}`} style={{ textDecoration: 'none' }}>
          <h3>{product.name}</h3>
        </Link>
        <p className="price">৳ {product.price}</p>
        
        {/* বাটনটি সচল করা হলো */}
        <button 
          onClick={() => {
            addToCart(product, 1);
            alert('Product added to cart!');
          }} 
          className="add-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;