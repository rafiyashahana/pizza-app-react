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
      return { ...state, cart: [...state.cart, { ...payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return { ...state, cart: state.cart.filter((c) => c.id !== payload.id) };

    default:
      return state;
  }
};
