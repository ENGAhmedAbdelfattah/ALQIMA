/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  navbarPaths: {
    home: "/home",
    teachers: "/teachers/all",
    courses: "/courses/all",
    contactus: "/contactus",
  },
  footerPaths: {
    home: "/home",
    teachers: "/teachers/all",
    courses: "/courses/all",
    contactus: "/contactus",
    help: "/help",
    privacy: "/privacy",
  },
  coursesPaths: {
    all: "/all",
    arabic: "/arabic",
    english: "/english",
    physics: "/physics",
    chemistry: "/chemistry",
    biology: "/biology",
    maths: "/maths",
    history: "/history",
    french: "/french",
  },
};

const allPathsSlice = createSlice({
  name: "allPaths",
  initialState,
  reducers: {},
});

export const { allPaths } = allPathsSlice.actions;

export default allPathsSlice.reducer;
