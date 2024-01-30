import { createContext } from "react";
import { pizzaMenu } from "../pizzaMenu";

export const PizzaContext = createContext(pizzaMenu);

export const PizzaProvider = ({ children }) => {
  const value = {};
  return <PizzaContext value={value}>{children}</PizzaContext>;
};
