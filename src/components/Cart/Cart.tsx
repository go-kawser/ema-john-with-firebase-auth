import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Product } from "../../..";

interface CartProps {
  cart: Product[];
  handleClearCart: () => void;
  children?: React.ReactNode;
}

const Cart: React.FC<CartProps> = ({ cart, handleClearCart, children }) => {
  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;

  for (const product of cart) {
    totalPrice += product.price * product.quantity;
    totalShipping += product.shipping;
    quantity += product.quantity;
  }

  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShipping + tax;

  return (
    <div className="bg-primary-light bg-opacity-30 p-6 sticky top-0">
      <h4 className="text-xl font-bold mb-4">Order Summary</h4>
      <p className="mb-2">Selected Items: {quantity}</p>
      <p className="mb-2">Total Price: ${totalPrice}</p>
      <p className="mb-2">Shipping: ${totalShipping}</p>
      <p className="mb-2">Tax: ${tax.toFixed(2)}</p>
      <h6 className="text-lg font-semibold mb-4">
        Grand Total: ${grandTotal.toFixed(2)}
      </h6>
      <button
        onClick={handleClearCart}
        className="btn-error w-[90%] h-14 text-xl mx-auto my-2"
      >
        <span>Clear Cart</span>
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
      {children}
    </div>
  );
};

export default Cart;
