import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  amount: 5,
  total: 0,
  isLoading: true
}

const cartSlice = createSlice({
  name:'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    addToCart: (state, actions) => {
      console.log('addToCart actions', actions)
    },
    removeFromCart: (state, actions) => {
      console.log('removeFromCart actions', actions)
    },
    updateCart: (state, actions) => {
      console.log('updateCart actions', actions)
    },
  }
})

// console.log('cartSlice', cartSlice);

export const {clearCart} = cartSlice.actions;

export default cartSlice.reducer;