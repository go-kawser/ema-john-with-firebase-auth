import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import { Product } from "../../..";

const Orders: React.FC = () => {
  const savedCart = useLoaderData() as Product[];
  const [cart, setCart] = useState<Product[]>(savedCart);

  const handleRemoveFromCart = (id: string) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-3 mx-auto my-12">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        ))}
      </div>
      <div className="col-span-1">
        <Cart cart={cart} handleClearCart={handleClearCart}>
          <Link to="/checkout" className="no-underline">
            <button className="bg-amber-500 w-[90%] h-14 text-xl mx-auto my-2 rounded text-white flex justify-between items-center px-4">
              Proceed Checkout
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
