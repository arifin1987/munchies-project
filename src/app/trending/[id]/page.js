"use client";

import React, { useEffect, useState } from "react";

const ProductDetail = ({ params }) => {
  const [items, setItems] = useState({});
  const { title, price, description, image, category, rating } = items;
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [params.id]);
  console.log(params.id);
  return (
    <div className="m-8">
      <div className=" md:flex justify-between gap-4 ">
        <div>
          <img className="max-h-60 max-w-80" src={image} alt="" />
        </div>
        <div>
          <h1 className="text-xl font-bold">{title}</h1>
          <p className="font-bold">Price: ${price}</p>
          <p>{description}</p>
          <p>Category: {category}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
