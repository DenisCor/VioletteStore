import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishlistData: [],
}



const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    clearWishlist: (state) => {
      console.log('clear all wishlist')
    },
    addToWishlist: (state, { payload }) => {
      console.log('add to wishlist payload', {payload});
      const itemInCart = state.wishlistData.find((item) => item.id === payload.product.id && item.attributes.name === payload.product.attributes.name);
   
       
    
      if (!itemInCart) {
        state.wishlistData.push({ ...payload.product });
      }
    
    },
    removeFromWishlist: (state, { payload }) => {
      console.log('remove from wishlist payload', payload);
      state.wishlistData = state.wishlistData.filter((item) => item.id !== payload.id)

 
    },
  }
})

// console.log('wishlistSlice', wishlistSlice);

export const { clearWishlist, addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;