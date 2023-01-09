import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

/*___________________________initialState________________________________*/
const initialState = {
  loading: false,
  dataAuth: [],
  token: "",
  error: "",
};
/*________________________________________________________________________*/

/*_______________________________AsyncThunk_______________________________*/

// signUpUser
export const signUpUser = createAsyncThunk("signUpUser", async (formData) => {
  try {
    const response = await axios.post("https://reqres.in/api/login", formData);
    return response.data;
  } catch (err) {
    console.error(err);
  }
});

// signInUser
export const signInUser = createAsyncThunk("signInUser", async (formData) => {
  try {
    const response = await axios.post("https://reqres.in/api/login", formData);
    return response.data;
  } catch (err) {
    console.error(err);
  }
});
/*________________________________________________________________________*/

/*___________________________Slice________________________________________*/
const dataAuthSlice = createSlice({
  name: "dataAuth",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = localStorage.getItem("token");
    },
    logOut: (state, action) => {
      state.token = null;
      localStorage.clear();
      state.dataAuth = [];
    },
  },
  extraReducers: {
    /*=============================================
    =                 signInUser                 =
    =============================================*/
    [signInUser.pending]: (state, action) => {
      state.loading = true;
    },
    [signInUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.dataAuth = action.payload;
      state.token = action.payload.token;
      state.error = "";
      localStorage.setItem("token", state.token);
    },
    [signInUser.rejected]: (state, action) => {
      state.loading = false;
      state.dataAuth = [];
      state.error = action.error.message;
    },
    /*===========  End of signInUser  =============*/

    /*=============================================
    =                signUpUser                  =
    =============================================*/
    [signUpUser.pending]: (state, action) => {
      state.loading = true;
    },
    [signUpUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.dataAuth = action.payload;
      state.error = "";
    },
    [signUpUser.rejected]: (state, action) => {
      state.loading = false;
      state.dataAuth = [];
      state.error = action.error.message;
    },
    /*=========  End of signUpUser  ===============*/
  },
});
/*_________________________________________________________________________*/

export const { addToken, logOut } = dataAuthSlice.actions;
export default dataAuthSlice.reducer;
