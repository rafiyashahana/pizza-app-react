import { createContext, useReducer } from "react";
import { pizzaMenu } from "../pizzaMenu";
import { cartReducer } from "../reducers/cart/cart.reducer";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    products: pizzaMenu,
    cart: [],
  });
  const value = { state, dispatch };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
