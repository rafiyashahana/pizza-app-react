import { createContext, useReducer } from "react";
import { pizzaMenu } from "../pizzaMenu";
import { cartReducer } from "../reducers/cart/cart.reducer";

export const CartContext = createContext();

const INITIAL_STATE = {
  products: pizzaMenu,
  cart: [],
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const value = { state, dispatch };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
