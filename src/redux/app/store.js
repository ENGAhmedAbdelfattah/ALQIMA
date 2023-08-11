/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */
import { configureStore } from "@reduxjs/toolkit";
// import { logger } from "redux-logger";
import changLangReducer from "../features/changLang/changLangSlice";
import dataReducer from "../features/dataText/dataTextSlice";
import imageReducer from "../features/allImages/allImageSlice";
import allPathsReducer from "../features/allPaths/allPathsSlice";
import apiDataReducer from "../features/apiData/apiDataSlice";
import dataAuthReducer from "../features/dataAuth/dataAuthSlice";
const store = configureStore({
  reducer: {
    langDir: changLangReducer,
    dataText: dataReducer,
    allImages: imageReducer,
    allPaths: allPathsReducer,
    apiData: apiDataReducer,
    dataAuth: dataAuthReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
