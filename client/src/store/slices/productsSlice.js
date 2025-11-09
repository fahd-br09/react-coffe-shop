import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  }
);

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
