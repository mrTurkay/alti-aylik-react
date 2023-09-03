import { Link } from "react-router-dom";
import { CartIcon } from "../../assets";

const ProductCard = ({ product }) => {
  return (
    <div className="productCardWrapper">
      <img
        src={product.image}
        alt={product.title}
        className="productCardImage"
      />
      <div className="productCardInfo">
        <Link to={`/product/${product.id}`}>
          <div className="productTitleCategory">
            <span className="productTitle">{product.title}</span>
            <span className="productCategory">{product.category}</span>
          </div>
        </Link>
        <div className="priceWrapper">
          <span className="productPrice">${product.price}</span>
          <button className="addCartButton">
            <CartIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
