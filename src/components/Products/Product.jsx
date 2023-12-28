"use client";

import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

const Product = () => {
  const [post, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((res) =>
      res.json().then((data) => setPosts(data))
    );
  }, []);
  return (
    <div>
      <h1 className="text-center text-3xl text-fuchsia-600 font-semibold my-8">
        --Trending Products--
      </h1>
      <div className="md:grid grid-cols-3 gap-4 max-w-full m-8">
        {post.map((item) => (
          <SingleProduct key={item.id} item={item}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default Product;
