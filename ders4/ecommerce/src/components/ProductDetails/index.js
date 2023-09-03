import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../Layout";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);

  console.log({ product });

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <Layout>
      <h2>{product.title}</h2>
    </Layout>
  );
};

export default ProductDetails;
