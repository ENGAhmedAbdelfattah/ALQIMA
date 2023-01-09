import { createSlice } from "@reduxjs/toolkit";
import enData from "../../../assets/translations/en.json";
import ArData from "../../../assets/translations/ar.json";

const initialState = {
  dataJson: enData,
};

const dataTestSlice = createSlice({
  name: "dataText",
  initialState,
  reducers: {
    changeData: (state, action) => {
      const dataText =
        action.payload === "en"
          ? enData
          : action.payload === "ar"
          ? ArData
          : enData;
      state.dataJson = dataText;
    },
  },
});

export const { changeData } = dataTestSlice.actions;

export default dataTestSlice.reducer;
