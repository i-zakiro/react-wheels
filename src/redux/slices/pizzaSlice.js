import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzasStatus',
  async (params) => {
    const {      
      sortBy,
      order,
      category,
      search,
      currentPage,
    } = params;

    const { data } = await axios.get(
        `https://-62a43b1747e6e400638e8143.mockapi.io/items?page=${currentPage}&limit=4&${category}sortBy=${sortBy}&order=${order}${search}`,
      )
    return data;
  }
);

const initialState = {
    items: [],
    error: null,
    status: 'loading',
}

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems  (state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    'pizza/fetchPizzasStatus/pending': (state) => {
      state.status = 'loading';
      state.items = [];
      state.error = null;
      console.log('loaddddiing');
    },
    'pizza/fetchPizzasStatus/fulfilled': (state, action) => {
      state.items = action.payload;
      state.status = 'success';
      console.log('succcccess');
    },
    [fetchPizzas.rejected]: (state, action) => {
      state.status = 'error';
      state.items = [];
      console.log('errrror');
    },
  },
})

export const { setItems } = pizzaSlice.actions

export default pizzaSlice.reducer