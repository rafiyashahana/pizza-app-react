const INITIAL_STATE = {
  cartItems: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
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
