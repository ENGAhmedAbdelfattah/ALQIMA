/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */
import React from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import TextError from "./../../../../common/TextError";
import {
  logOut,
  signInUser,
} from "./../../../../../redux/features/dataAuth/dataAuthSlice";

function AllLogin({ loginPage, loginImgs, errorMsg, signInUser, logOut }) {
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/";
  const initialValues = {
    email: "",
    password: "",
    checkbox: false,
  };
  const validationSchema = Yup.object({
    email: Yup.string().email(errorMsg.invalid).required(errorMsg.required),
    password: Yup.string().required(errorMsg.required),
    checkbox: Yup.boolean(),
  });
  const onSubmit = async (values, submitProps) => {
    // console.log(values);
    // console.log(submitProps);
    await signInUser(values);
    if (localStorage.getItem("token")) {
      navigate(redirectPath, { replace: true });
    }

    submitProps.setSubmitting(false);
    submitProps.resetForm();
  };
  const handleGoLink = (path) => {
    navigate(`/${path}`);
  };
  return (
    <section className="login">
      <div className="container-wrapped">
        <div className="sign">
          <div className="sign-left-container">
            <div className="sign-left">
              <div className="sign-left-top">
                <div className="hand-img">
                  <img src={loginImgs.logoImg2} alt="" />
                </div>
                <h2 className="sign-header">{loginPage.loginSignHeader}</h2>
                <p className="sign-paragraph">{loginPage.loginSignParagraph}</p>
              </div>
              <div className="sign-form">
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                >
                  {(formik) => {
                    return (
                      <Form>
                        <div className="sign-box sign-email">
                          <label htmlFor="login-email">
                            {loginPage.loginEmailLabel}
                          </label>
                          <Field
                            type="email"
                            id="login-email"
                            name="email"
                            placeholder={loginPage.loginEmailPlaceholder}
                          />
                          <ErrorMessage name="email" component={TextError} />
                        </div>
                        <div className="sign-box sign-password">
                          <label htmlFor="login-password">
                            {loginPage.loginPasswordLabel}
                          </label>
                          <Field
                            type="password"
                            id="login-password"
                            name="password"
                            placeholder={loginPage.loginPasswordPlaceholder}
                          />
                          <ErrorMessage name="password" component={TextError} />
                        </div>
                        <div className="text-remember">
                          <div className="checkbox-box">
                            <Field
                              type="checkbox"
                              id="login-checkbox"
                              name="checkbox"
                            />
                            <label htmlFor="login-checkbox">
                              {loginPage.loginRememberMe}
                            </label>
                          </div>
                          <button
                            type="button"
                            className="odd-words"
                            onClick={() => handleGoLink("forgetpassword")}
                            // onClick={() => logOut()}
                          >
                            {loginPage.loginForgetPassword}
                          </button>
                        </div>
                        <button type="submit" className="sign-btn">
                          {loginPage.loginLoginBtn}
                        </button>
                        <p className="bottom-paragraph">
                          {loginPage.loginBottomParagraph}&thinsp;
                          <button
                            type="button"
                            className="button-go-login"
                            onClick={() => handleGoLink("signup")}
                          >
                            <span className="bottom-span">
                              {loginPage.loginBottomSpan}
                            </span>
                          </button>
                        </p>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </div>
          <div className="sign-right">
            <img src={loginImgs.leftImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    loginPage: state.dataText.dataJson.loginPage,
    loginImgs: state.allImages.pagesImgs.loginImgs,
    errorMsg: state.dataText.dataJson.errorMsg,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signInUser: (formData) => dispatch(signInUser(formData)),
    // logOut: () => dispatch(logOut()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AllLogin);
