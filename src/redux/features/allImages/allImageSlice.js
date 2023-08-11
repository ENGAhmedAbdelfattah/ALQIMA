/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */
import { createSlice } from "@reduxjs/toolkit";
// import navBarImgs
import logoImg from "./../../../assets/images/logo/logo1.png";
// import footerImgs
import logoImg2 from "./../../../assets/images/logo/logo2.png";
import AppStoreImg from "./../../../assets/icons/App Store.svg";
import GooglePlayImg from "./../../../assets/icons/Google Play.svg";
/* import pagesImgs */
// import contactUsImgs
import landingContactImg from "./../../../assets/images/contactsLanding.png";
import contactImg1 from "./../../../assets/icons/contactItem1.svg";
import contactImg2 from "./../../../assets/icons/contactItem2.svg";
import contactImg3 from "./../../../assets/icons/contactItem3.svg";
// import coursesImgs
import coursesImg1 from "./../../../assets/images/courses1.png";
import coursesImg2 from "./../../../assets/images/courses1.png";
import coursesImg3 from "./../../../assets/images/courses1.png";
import coursesImg4 from "./../../../assets/images/courses1.png";
import coursesImg5 from "./../../../assets/images/courses1.png";
import coursesImg6 from "./../../../assets/images/courses1.png";
import coursesImg7 from "./../../../assets/images/courses1.png";
import coursesImg8 from "./../../../assets/images/courses1.png";
import coursesImg9 from "./../../../assets/images/courses1.png";
import coursesImg10 from "./../../../assets/images/courses1.png";
import coursesImg11 from "./../../../assets/images/courses1.png";
import coursesImg12 from "./../../../assets/images/courses1.png";
import coursesImg13 from "./../../../assets/images/courses1.png";
import coursesImg14 from "./../../../assets/images/courses1.png";
import coursesImg15 from "./../../../assets/images/courses1.png";
import coursesImg16 from "./../../../assets/images/courses1.png";
import coursesImg17 from "./../../../assets/images/courses1.png";
import coursesImg18 from "./../../../assets/images/courses1.png";
import coursesImg19 from "./../../../assets/images/courses1.png";
import coursesImg20 from "./../../../assets/images/courses1.png";
import coursesImg21 from "./../../../assets/images/courses1.png";
import coursesImg22 from "./../../../assets/images/courses1.png";
import coursesImg23 from "./../../../assets/images/courses1.png";
import coursesImg24 from "./../../../assets/images/courses1.png";
// import signUpImgs and loginImgs
//--logoImg imported in footer before
import leftImg from "./../../../assets/images/leftSignPage.png";
import googleLogo from "./../../../assets/icons/GoogleLogo.webp";
// import teachersImgs
import landingTeacherImg from "./../../../assets/images/TeachersLanding.png";
import teachersImg1 from "./../../../assets/images/teachers/teacher1.png";
import teachersImg2 from "./../../../assets/images/teachers/teacher2.png";
import teachersImg3 from "./../../../assets/images/teachers/teacher3.png";
import teachersImg4 from "./../../../assets/images/teachers/teacher4.png";
import teachersImg5 from "./../../../assets/images/teachers/teacher5.png";
import teachersImg6 from "./../../../assets/images/teachers/teacher6.png";
import teachersImg7 from "./../../../assets/images/teachers/teacher7.png";
import teachersImg8 from "./../../../assets/images/teachers/teacher8.png";
import teachersImg9 from "./../../../assets/images/teachers/teacher9.png";

// import homeImgs
//-- import benefit imgs
import patternJoinImg from "./../../../assets/pattern/Pattern2.svg";
import benefitImg1 from "./../../../assets/icons/benefit1.svg";
import benefitImg2 from "./../../../assets/icons/benefit2.svg";
import benefitImg3 from "./../../../assets/icons/benefit3.svg";
import benefitImg4 from "./../../../assets/icons/benefit4.svg";
//-- import mobile image
import AppImg1 from "./../../../assets/images/appImg1.png";
import AppImg2 from "./../../../assets/images/appImg2.png";
//-- import store App and google play app images
//---- AppStoreImg imported before in footerImgs
//---- GooglePlayImg imported before in footerImgs
// import landing images
import landingImg1 from "./../../../assets/images/landing1.png";
import landingImg2 from "./../../../assets/images/landing2.png";
import landingImg3 from "./../../../assets/images/landing3.png";
import landingImg4 from "./../../../assets/images/landing4.png";
//-- import learning image
import learningImg from "./../../../assets/images/learningImg.png";
import learningImg1 from "./../../../assets/images/learning1.svg";
import learningImg2 from "./../../../assets/images/learning2.svg";
//-- import OpinionsPerson images
import opinionImg1 from "./../../../assets/images/opinions1.png";
import opinionImg2 from "./../../../assets/images/opinions2.png";
import opinionImg3 from "./../../../assets/images/opinions2.png";

// allImages
const initialState = {
  navBarImgs: { logoImg },
  footerImgs: { logoImg2, AppStoreImg, GooglePlayImg },
  pagesImgs: {
    contactUsImgs: { landingContactImg, contactImg1, contactImg2, contactImg3 },
    coursesImgs: {
      coursesImg1,
      coursesImg2,
      coursesImg3,
      coursesImg4,
      coursesImg5,
      coursesImg6,
      coursesImg7,
      coursesImg8,
      coursesImg9,
      coursesImg10,
      coursesImg11,
      coursesImg12,
      coursesImg13,
      coursesImg14,
      coursesImg15,
      coursesImg16,
      coursesImg17,
      coursesImg18,
      coursesImg19,
      coursesImg20,
      coursesImg21,
      coursesImg22,
      coursesImg23,
      coursesImg24,
    },
    homeImgs: {
      benefitJoinImgs: {
        patternJoinImg,
        benefitImg1,
        benefitImg2,
        benefitImg3,
        benefitImg4,
      },
      getAppImgs: { AppImg1, AppImg2, AppStoreImg, GooglePlayImg },
      LandingImgs: {
        landingImg1,
        landingImg2,
        landingImg3,
        landingImg4,
      },
      learningImgs: {
        learningImg,
        learningImg1,
        learningImg2,
      },
      OpinionsUsersImgs: {
        opinionImg1,
        opinionImg2,
        opinionImg3,
      },
      statisticsImgs: {},
    },
    loginImgs: { logoImg2, leftImg },
    signUpImgs: { logoImg2, leftImg, googleLogo },
    teachersImgs: {
      landingTeacherImg,
      teachersImg1,
      teachersImg2,
      teachersImg3,
      teachersImg4,
      teachersImg5,
      teachersImg6,
      teachersImg7,
      teachersImg8,
      teachersImg9,
    },
  },
};

const allImageSlice = createSlice({
  name: "allImages",
  initialState,
  reducers: {},
});

export const { getImages } = allImageSlice.actions;

export default allImageSlice.reducer;
