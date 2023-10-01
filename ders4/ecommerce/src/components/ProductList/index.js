import { useEffect, useState } from "react";
import useFetchProducts from "./useFetchProducts";

import ProductCard from "../ProductCard";

const ProductList = ({ searchTerm }) => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const products = useFetchProducts();

  useEffect(() => {
    console.log("counter değişti");
  }, [counter]);

  useEffect(() => {
    console.log("counter2 değişti");
  }, [counter2]);

  useEffect(() => {
    console.log("products değişti");
  }, [products]);

  if (!products) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="productListWrapper">
      <h2>counter1: {counter}</h2>
      <h2>counter2: {counter2}</h2>
      <button onClick={() => setCounter(counter + 1)}>Arttır 1</button>
      <button onClick={() => setCounter2(counter2 + 1)}>Arttır 2</button>
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
