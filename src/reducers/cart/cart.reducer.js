const INITIAL_STATE = {
  cartItems: [],
};

const CART_ACTION_TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
};

export const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART":
      return { ...state, payload };

    default:
      return state;
  }
};
