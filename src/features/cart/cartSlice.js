import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    // {
    //   pizzaId: 12,
    //   name: "Mediterranean",
    //   quantity: 2,
    //   unitPrice: 16,
    //   totalPrice: 32,
    // },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = newItem
      const pizza = state.cart.find((item) => item.pizzaId === action.payload.pizzaId);
      if (pizza) cartSlice.caseReducers.increaseQuantity(state, { payload: action.payload.pizzaId });
      else state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload = pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
    decreaseQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const { addItem, deleteItem, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

export function getTotalCartPrice(state) {
  return state.cart.cart.reduce((total, item) => total + item.totalPrice, 0);
}

export function getCartQuantity(state) {
  return state.cart.cart.reduce((total, item) => total + item.quantity, 0);
}

export function getCart(state) {
  return state.cart.cart;
}

export const getCurrentQuantityById = (pizzaId) => (state) => state.cart.cart.find((item) => item.pizzaId === pizzaId)?.quantity ?? 0;
