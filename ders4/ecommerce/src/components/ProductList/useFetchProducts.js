import { useEffect } from "react";
import api from "../../apiClient";
import { useState } from "react";

const useFetchProducts = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    api.get("products").then((res) => setProducts(res.data));
  }, []);

  return products;
};

export default useFetchProducts;
