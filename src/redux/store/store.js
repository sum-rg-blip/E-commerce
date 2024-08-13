import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "../reducer/Cart";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";



const storageconfig ={
  key:"root",
  storage
}
const allReducers =combineReducers({
  cart:cartSlice
})
const persistfunction =persistReducer(storageconfig ,allReducers,)
const store=configureStore({
  
  reducer:persistfunction
   
})
export default store;