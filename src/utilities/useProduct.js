import { useEffect } from "react";
import { useState } from "react";

function useProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const request = await fetch("/products.json");
      const response = await request.json();
      setProducts(response);
    };
    getProducts();
  }, []);

  return products;
}

export default useProduct;
