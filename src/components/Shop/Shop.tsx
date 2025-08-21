import React, { useEffect, useState } from "react";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";

import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import { Link } from "react-router-dom";
import { Product as ProductType } from "../../../";

const Shop: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [cart, setCart] = useState<ProductType[]>([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data: ProductType[]) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart: ProductType[] = [];

    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }

    setCart(savedCart);
  }, [products]);

  const handleAddToCart = (product: ProductType) => {
    const exists = cart.find((pd) => pd.id === product.id);
    let newCart: ProductType[] = [];

    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exists.quantity += 1;
      const remaining = cart.filter((pd) => pd.id !== product.id);
      newCart = [...remaining, exists];
    }

    setCart(newCart);
    addToDb(product.id);
  };

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-3 m-12 grid grid-cols-3 gap-12">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div className="col-span-1">
        <Cart cart={cart} handleClearCart={handleClearCart}>
          <Link to="/orders" className="no-underline">
            <button className="bg-primary w-[90%] h-14 text-xl mx-auto my-2 rounded text-white flex justify-between items-center px-4">
              Review Order
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
