import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    totalPrice: 0,
    items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // addItem  (state, action) {
    //   state.items.push(action.payload);
    //   state.totalPrice = state.items.reduce((sum, obj) => {
    //     return obj.price + sum;
    //   }, 0);
    // },
    // let users = [
    //   {id: 1, name: "Вася"},
    //   {id: 2, name: "Петя"},
    //   {id: 3, name: "Маша"}
    // ];
    addItem  (state, action) {
      const findItem = state.items.find(obj => obj.id == action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    // removeItem(state, action) {
    //   state.items = state.items.filter(item => item.id !== action.payload);
    // },
    // clearItems(state) {
    //   state.items = [];
    // },
  },
})

export const { addItem, removeItem, clearItems } = cartSlice.actions

export default cartSlice.reducer