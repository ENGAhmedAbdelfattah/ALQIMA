/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: "en",
  dir: "ltr",
};

const changLangSlice = createSlice({
  name: "langDir",
  initialState,
  reducers: {
    changeLang: (state, action) => {
      state.lang = action.payload.payloadLang;
      state.dir = action.payload.payloadDir;
    },
  },
});

export const { changeLang } = changLangSlice.actions;

export default changLangSlice.reducer;
