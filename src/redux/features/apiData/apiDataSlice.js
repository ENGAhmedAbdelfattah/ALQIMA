import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  apiData: [],
  error: "",
};

// Generates pending, fulfilled and rejected action types
export const fetchApiData = createAsyncThunk("apiData/fetchApiData", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data);
});

const apiDataSlice = createSlice({
  name: "apiData",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchApiData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchApiData.fulfilled, (state, action) => {
      state.loading = false;
      state.apiData = action.payload;
      state.error = "";
    });
    builder.addCase(fetchApiData.rejected, (state, action) => {
      state.loading = false;
      state.apiData = [];
      state.error = action.error.message;
    });
  },
});

export default apiDataSlice.reducer;
