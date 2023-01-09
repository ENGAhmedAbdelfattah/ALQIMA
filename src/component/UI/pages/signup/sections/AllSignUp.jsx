import React from "react";
import { connect } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import TextError from "./../../../../common/TextError";
import {
  signInUser,
  signUpUser,
} from "./../../../../../redux/features/dataAuth/dataAuthSlice";

function LoginSignUp({
  signUpPage,
  signUpImgs,
  errorMsg,
  signUpUser,
  signInUser,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/";

  const initialValues = {
    name: "",
    email: "",
    password: "",
    checkbox: false,
  };
  const validationSchema = Yup.object({
    name: Yup.string().required(errorMsg.required),
    email: Yup.string().email(errorMsg.invalid).required(errorMsg.required),
    password: Yup.string().required(errorMsg.required),
    checkbox: Yup.boolean(),
  });
  const onSubmit = async (values, submitProps) => {
    // console.log(values);
    await signUpUser(values);
    await signInUser(values);
    if (localStorage.getItem("token")) {
      navigate(redirectPath, { replace: true });
    }
    submitProps.setSubmitting(false);
    submitProps.resetForm();
  };
  const handleGoLogin = () => {
    navigate(`/login`);
  };
  return (
    <section className="login">
      <div className="container-wrapped">
        <div className="sign">
          <div className="sign-left-container">
            <div className="sign-left">
              <div className="sign-left-top">
                <div className="hand-img">
                  <img src={signUpImgs.logoImg} alt="" />
                </div>
                <h2 className="sign-header">{signUpPage.signupSignHeader}</h2>
                <p className="sign-paragraph">
                  {signUpPage.signupSignParagraph}
                </p>
              </div>
              <div className="sign-form">
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                >
                  {(formik) => (
                    <Form>
                      <div className="sign-box sign-name">
                        <label htmlFor="login-name">
                          {signUpPage.signupNameLabel}
                        </label>
                        <Field
                          type="text"
                          id="login-name"
                          name="name"
                          placeholder={signUpPage.signupNamePlaceholder}
                        />
                        <ErrorMessage name="name" component={TextError} />
                      </div>
                      <div className="sign-box sign-email">
                        <label htmlFor="login-email">
                          {signUpPage.signupEmailLabel}
                        </label>
                        <Field
                          type="email"
                          id="login-email"
                          name="email"
                          placeholder={signUpPage.signupEmailPlaceholder}
                        />
                        <ErrorMessage name="email" component={TextError} />
                      </div>
                      <div className="sign-box sign-password">
                        <label htmlFor="login-password">
                          {signUpPage.signupPasswordLabel}
                        </label>
                        <Field
                          type="password"
                          id="login-password"
                          name="password"
                          placeholder={signUpPage.signupPasswordPlaceholder}
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
                            {signUpPage.signupRememberMe}
                          </label>
                        </div>
                      </div>
                      <button type="submit" className="sign-btn">
                        {signUpPage.signupLoginBtn}
                      </button>
                      <button type="button" className="google-btn">
                        <img
                          className="googleLogo"
                          src={signUpImgs.googleLogo}
                          alt=""
                        />
                        {signUpPage.signupGoogleBtn}
                      </button>

                      <p className="bottom-paragraph">
                        {signUpPage.signupBottomParagraph}&thinsp;
                        <button
                          type="button"
                          className="button-go-login"
                          onClick={handleGoLogin}
                        >
                          <span className="bottom-span">
                            {signUpPage.signupBottomSpan}
                          </span>
                        </button>
                      </p>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>

          <div className="sign-right">
            <img src={signUpImgs.leftImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
const mapStateToProps = (state) => {
  return {
    signUpPage: state.dataText.dataJson.signUpPage,
    signUpImgs: state.allImages.pagesImgs.signUpImgs,
    errorMsg: state.dataText.dataJson.errorMsg,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUpUser: (formData) => dispatch(signUpUser(formData)),
    signInUser: (formData) => dispatch(signInUser(formData)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginSignUp);
