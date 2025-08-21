import { Product } from "./../../index";
import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async (): Promise<Product[]> => {
  const loadedProducts = await fetch("products.json");
  const products: Product[] = await loadedProducts.json();

  const storedCart = getShoppingCart();
  const savedCart: Product[] = [];

  for (const id in storedCart) {
    const addedProduct = products.find((pd: Product) => pd.id === id);
    if (addedProduct) {
      const quantity = storedCart[id];
      addedProduct.quantity = quantity;
      savedCart.push(addedProduct);
    }
  }

  return savedCart;
};

export default cartProductsLoader;
