import { createSlice } from "@reduxjs/toolkit";
const cartSlice =createSlice({
  name:"cart",
  initialState:{
    cartIteam:[],
    totalPrice:0 
  },
  reducers:{
    addItemToCart:(state,action)=>{
      state.cartIteam.push(action.payload)
    },

    calculatePrice:(state) =>{
      let total=0
      state.cartIteam.forEach((product)=>{
        total+=product.price
      })
      state.totalPrice=total
    },
    removeItemFromCart:(state,action) =>{
      state.cartIteam=state.cartIteam.filter((product) =>product.id !=action.payload.id)
    }
  }
})
export const{addItemToCart,calculatePrice,removeItemFromCart}= cartSlice.actions
export default cartSlice.reducer