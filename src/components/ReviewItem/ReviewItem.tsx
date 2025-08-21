import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Product } from "../../..";

interface ReviewItemProps {
  product: Product;
  handleRemoveFromCart: (id: string) => void;
}

const ReviewItem: React.FC<ReviewItemProps> = ({
  product,
  handleRemoveFromCart,
}) => {
  const { id, img, price, name, quantity } = product;

  return (
    <div className="w-[571px] border border-gray-300 rounded-lg mb-6 p-2 flex items-center">
      <img src={img} alt={name} className="w-24 h-24 rounded mr-4" />
      <div className="flex-grow ml-4">
        <p className="text-xl font-normal mb-2">{name}</p>
        <p>
          Price: <span className="text-amber-500">${price}</span>
        </p>
        <p>
          Order Quantity: <span className="text-amber-500">{quantity}</span>
        </p>
      </div>
      <button
        onClick={() => handleRemoveFromCart(id)}
        className="w-14 h-14 rounded-full bg-red-100 flex justify-center items-center"
      >
        <FontAwesomeIcon icon={faTrashAlt} className="text-red-500 text-2xl" />
      </button>
    </div>
  );
};

export default ReviewItem;
