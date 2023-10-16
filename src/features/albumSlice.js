import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../api/axiosInstance';

const initialState = {
  albums: [],
};

const albumSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {
    addAlbum: (state, action) => {
      return state;
    },
    updateAlbum: (state, action) => {
      return state;
    },
    deleteAlbum: (state, action) => {
      return state;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase();
  // },
});

export const { addAlbum, updateAlbum, deleteAlbum } = albumSlice.actions;
export default albumSlice.reducer;
