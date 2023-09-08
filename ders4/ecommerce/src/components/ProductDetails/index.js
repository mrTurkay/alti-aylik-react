import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../Layout";
import { CartIcon } from "../../assets";
import { useBag } from "../../contexts/BagContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const { addProductToBag } = useBag();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, [id]);

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <Layout>
      <h2>{product.title}</h2>
      <div>
        <button
          className="addCartButton"
          onClick={() => addProductToBag(product)}
        >
          <CartIcon />
        </button>
      </div>
    </Layout>
  );
};

export default ProductDetails;
