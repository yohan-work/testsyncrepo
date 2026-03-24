"use client";

import { useState, useEffect } from "react";
import { Button, Input, Label } from "@/components/ui";

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyimage.com/1200x630/000/fff");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h2>{product.name}</h2>
              <img src={product.image} alt={`${product.name} image`} width="150" height="150" />
              <p>${product.price.toLocaleString("ko-KR")}</p>
              <p>{product.description.substring(0, 40)}...</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

export default ProductListPage;