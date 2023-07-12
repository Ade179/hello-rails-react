import { createSlice } from '@reduxjs/toolkit';
import getGreetings from './messageThunk';

const initialState = {
  greeting: '',
  loading: false,
  error: null,
};

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getGreetings.pending, (state) => ({ ...state, loading: true }))
      .addCase(getGreetings.fulfilled, (state, { payload }) => ({
        ...state,
        loading: false,
        error: null,
        greeting: payload,
      }))
      .addCase(getGreetings.rejected, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }));
  },
});

export default greetingsSlice.reducer;
