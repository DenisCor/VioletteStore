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
      state.cartData = [];
    },


    addToCart: (state, { payload }) => {
      const itemInCart = state.cartData.find((item) => item.id === payload.product.id && item.attributes.name === payload.product.attributes.name && item.selectedVariant.color_name === payload.selectedVariant.color_name);
      if (itemInCart) {
        itemInCart.qty = itemInCart.qty + payload.qty;
        itemInCart.total = itemInCart.qty * payload.product.attributes.price
      } else {
        state.cartData.push({ ...payload.product, qty: payload.qty, total: payload.product.attributes.price * payload.qty, selectedVariant: payload.selectedVariant });
      }
      state.totalQty = state.cartData.reduce((qty, item) => {
        return qty + item.qty
      }, 0)
      state.totalAmount = state.cartData.reduce((total, item) => {
        return total + item.total
      }, 0)
    },

    removeFromCart: (state, { payload }) => {
      state.cartData = state.cartData.filter((item) => {
        if(item.id === payload.id){
         return item.selectedVariant.color_name !== payload.selectedVariant.color_name
        }else{
          return item.id !== payload.id
        }
      })
      state.totalQty = state.cartData.reduce((qty, item) => {
        return qty + item.qty
      }, 0)
      state.totalAmount = state.cartData.reduce((total, item) => {
        return total + item.total
      }, 0)
    },
    updateCart: (state, { payload }) => {
      const objIndex = state.cartData.findIndex((obj => obj.id === payload.item.id && obj.selectedVariant.color_name === payload.item.selectedVariant.color_name));
      if (payload.iconName === 'add' && payload.item.qty < payload.item.selectedVariant.stock) {
        state.cartData[objIndex].qty++
        state.cartData[objIndex].total = state.cartData[objIndex].qty * payload.item.attributes.price

      } else if (payload.iconName === 'remove' && payload.item.qty > 1) {
        state.cartData[objIndex].qty--
        state.cartData[objIndex].total = state.cartData[objIndex].qty * payload.item.attributes.price
      }
      state.totalQty = state.cartData.reduce((qty, item) => {
        return qty + item.qty
      }, 0)
      state.totalAmount = state.cartData.reduce((total, item) => {
        return total + item.total
      }, 0)

    },
  }
})

// console.log('cartSlice', cartSlice);

export const { clearCart, addToCart, removeFromCart, updateCart } = cartSlice.actions;

export default cartSlice.reducer;