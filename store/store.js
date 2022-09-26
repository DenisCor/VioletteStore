import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const persistConfig = {
  key: 'cart',
  storage,
}

const persistedReducer = persistReducer(persistConfig, cartReducer)

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
})






// import { combineReducers, configureStore, applyMiddleware } from 'redux';
// import { createWrapper } from 'next-redux-wrapper';
// import createSagaMiddleware from 'redux-saga';
// import rootSaga from './root-saga';
// import { persistStore, persistReducer } from 'redux-persist';
// // import storage from 'redux-persist/lib/storage';

// // Import Reducers
// import cartReducer from "./cart";
// import wishlistReducer from './wishlist';

// const rootReducers = combineReducers({
//     cartlist: cartReducer,
//     wishlist: wishlistReducer,

// });

// // const persistConfig = {
// //     key: 'root',
// //     storage: AsyncStorage,
// // }

// // const persistedReducer = persistReducer(persistConfig, rootReducers)
// const sagaMiddleware = createSagaMiddleware();

// export const makeStore = (context) => {
//     // const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));
//     const store = configureStore({rootReducers})
//     store.sagaTask = sagaMiddleware.run(rootSaga);
//     store.__persistor = persistStore(store);
//     return store;
// };

// // export default makeStore;

// export const wrapper = createWrapper(makeStore, { debug: true });