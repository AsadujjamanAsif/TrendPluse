import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      {/* ছবিতে ক্লিক করলে ডিটেইলস পেজে যাবে */}
      <Link to={`/product/${product._id}`}>
        <div className="card-image">
          <img src={product.image} alt={product.name} />
        </div>
      </Link>
      
      <div className="card-info">
        {/* নামে ক্লিক করলেও ডিটেইলস পেজে যাবে */}
        <Link to={`/product/${product._id}`} style={{ textDecoration: 'none' }}>
          <h3>{product.name}</h3>
        </Link>
        <p className="price">৳ {product.price}</p>
        <button className="add-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;