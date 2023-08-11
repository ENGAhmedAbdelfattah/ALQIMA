/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */
// libraries
import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// component
import TmPreload from "./../component/common/TmPreload";
import Home from "./../component/UI/pages/home/Home";

// const LazyHome = lazy(() => {
//   return Promise.all([
//     import("./../component/UI/pages/home/Home"),
//     new Promise((resolve) => setTimeout(resolve, 0)),
//   ]).then(([moduleExports]) => {
//     document.body.style.overflow = "auto";
//     return moduleExports;
//   });
// });

const LazyTeachers = lazy(() => {
  return Promise.all([
    import("./../component/UI/pages/teachers/Teachers"),
    new Promise((resolve) => setTimeout(resolve, 0)),
  ]).then(([moduleExports]) => {
    document.body.style.overflow = "auto";
    return moduleExports;
  });
});

const LazyCourses = lazy(() => {
  return Promise.all([
    import("./../component/UI/pages/courses/Courses"),
    new Promise((resolve) => setTimeout(resolve, 0)),
  ]).then(([moduleExports]) => {
    document.body.style.overflow = "auto";
    return moduleExports;
  });
});

const LazyContactUs = lazy(() => {
  return Promise.all([
    import("./../component/UI/pages/contactUs/ContactUs"),
    new Promise((resolve) => setTimeout(resolve, 0)),
  ]).then(([moduleExports]) => {
    document.body.style.overflow = "auto";
    return moduleExports;
  });
});

const LazyLogin = lazy(() => {
  return Promise.all([
    import("./../component/UI/pages/login/Login"),
    new Promise((resolve) => setTimeout(resolve, 0)),
  ]).then(([moduleExports]) => {
    document.body.style.overflow = "auto";
    return moduleExports;
  });
});

const LazySignUp = lazy(() => {
  return Promise.all([
    import("./../component/UI/pages/signup/SignUp"),
    new Promise((resolve) => setTimeout(resolve, 0)),
  ]).then(([moduleExports]) => {
    document.body.style.overflow = "auto";
    return moduleExports;
  });
});

const LazyNotFound = lazy(() => {
  return Promise.all([
    import("./../component/UI/pages/notfound/NotFound"),
    new Promise((resolve) => setTimeout(resolve, 0)),
  ]).then(([moduleExports]) => {
    document.body.style.overflow = "auto";
    return moduleExports;
  });
});

function Router() {
  return (
    <Routes>
      {/* <Route
        path="home"
        element={
          <Suspense fallback={<TmPreload />}>
            <LazyHome />
          </Suspense>
        }
      /> */}

      <Route path="home" element={<Home />} />
      <Route path="/" element={<Navigate to="/Home" />} />
      <Route
        path="teachers/:id"
        element={
          <Suspense fallback={<TmPreload />}>
            <LazyTeachers />
          </Suspense>
        }
      />
      <Route
        path="courses/:id"
        element={
          <Suspense fallback={<TmPreload />}>
            <LazyCourses />
          </Suspense>
        }
      />
      <Route
        path="contactus"
        element={
          <Suspense fallback={<TmPreload />}>
            <LazyContactUs />
          </Suspense>
        }
      />
      <Route
        path="login"
        element={
          <Suspense fallback={<TmPreload />}>
            <LazyLogin />
          </Suspense>
        }
      />
      <Route
        path="signup"
        element={
          <Suspense fallback={<TmPreload />}>
            <LazySignUp />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<TmPreload />}>
            <LazyNotFound />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default Router;
