// use local storage to manage cart data
export interface ShoppingCart {
  [key: string]: number;
}

const addToDb = (id: string): void => {
  let shoppingCart: ShoppingCart = getShoppingCart();

  if (!shoppingCart[id]) {
    shoppingCart[id] = 1;
  } else {
    shoppingCart[id] += 1;
  }

  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const removeFromDb = (id: string): void => {
  const shoppingCart: ShoppingCart = getShoppingCart();

  if (id in shoppingCart) {
    delete shoppingCart[id];
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
  }
};

const getShoppingCart = (): ShoppingCart => {
  let shoppingCart: ShoppingCart = {};

  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }

  return shoppingCart;
};

const deleteShoppingCart = (): void => {
  localStorage.removeItem("shopping-cart");
};

export { addToDb, removeFromDb, getShoppingCart, deleteShoppingCart };
