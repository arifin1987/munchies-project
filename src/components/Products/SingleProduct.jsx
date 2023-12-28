import Link from "next/link";
import React from "react";

const SingleProduct = ({ item }) => {
  const { id, image, title, price } = item;

  return (
    <div>
      <img className="max-h-48 max-w-70" src={image} alt="" />
      <h1 className="font-bold text-xl">{title}</h1>

      <p>
        price: <span className="font-bold">${price}</span>{" "}
      </p>

      <button className="btn btn-outline border-0 border-b-4">
        <Link href={`/trending/${id}`}>View Details</Link>
      </button>
    </div>
  );
};

export default SingleProduct;
