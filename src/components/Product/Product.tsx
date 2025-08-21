import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// import { Product as ProductType } from "../types";
import { Product as ProductType } from "../../..";

interface ProductProps {
  product: ProductType;
  handleAddToCart: (product: ProductType) => void;
}

const Product: React.FC<ProductProps> = ({ product, handleAddToCart }) => {
  const { img, name, seller, ratings, price } = product;

  return (
    <div className="w-72 h-[510px] border border-gray-300 rounded-lg relative">
      <img src={img} alt={name} className="w-72 h-72 mx-1 my-2 rounded-lg" />
      <div className="ml-3">
        <h6 className="text-xl font-normal mt-0 mb-0">{name}</h6>
        <p className="mt-1">Price: ${price}</p>
        <p className="mt-1">Manufacturer: {seller}</p>
        <p className="mt-1">Rating: {ratings} Stars</p>
      </div>
      <button
        onClick={() => handleAddToCart(product)}
        className="w-full bg-amber-100 border border-gray-300 rounded-b-lg absolute bottom-0 hover:bg-amber-300"
      >
        Add to Cart
        <FontAwesomeIcon icon={faShoppingCart} className="ml-2" />
      </button>
    </div>
  );
};

export default Product;
