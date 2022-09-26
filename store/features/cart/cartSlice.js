import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartData: [],
  totalQty: 0,
  totalAmount: 0,
}

console.log('%c initialState ', 'background: #222; color: #0078ff', initialState);


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    addToCart: (state, { payload }) => {
      console.log('addToCart payload', payload)
      const itemInCart = state.cartData.find((item) => item.id === payload.product.id && item.attributes.name === payload.product.attributes.name);
      if (itemInCart) {
        itemInCart.qty = itemInCart.qty + payload.qty;
        itemInCart.total = itemInCart.qty * payload.product.attributes.price
      } else {
        state.cartData.push({ ...payload.product, qty: payload.qty, total: payload.product.attributes.price * payload.qty });
      }
      state.totalQty = state.cartData.reduce((qty, item) => {
        return qty + item.qty
      }, 0)
      state.totalAmount = state.cartData.reduce((total, item) => {
        return total + item.total
      }, 0)
    },
    removeFromCart: (state, { payload }) => {
      state.cartData = state.cartData.filter((item) => item.id !== payload.id)
      state.totalQty = state.cartData.reduce((qty, item) => {
        return qty + item.qty
      }, 0)
      state.totalAmount = state.cartData.reduce((total, item) => {
        return total + item.total
      }, 0)
    },
    updateCart: (state, actions) => {
      console.log('updateCart actions', actions)
    },
  }
})

// console.log('cartSlice', cartSlice);

export const { clearCart, addToCart, removeFromCart, updateCart } = cartSlice.actions;

export default cartSlice.reducer;