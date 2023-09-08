import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";

const ProductList = ({ searchTerm }) => {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  if (!products) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="productListWrapper">
      {products
        .filter((product) =>
          searchTerm
            ? product.title
                .toLocaleLowerCase()
                .includes(searchTerm.toLocaleLowerCase())
            : true
        )
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};
export default ProductList;
