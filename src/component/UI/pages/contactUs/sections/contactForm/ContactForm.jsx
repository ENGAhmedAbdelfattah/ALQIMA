import React from "react";
import { connect } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import TextError from "./../../../../../common/TextError";

function ContactForm({ contactForm, errorMsg }) {
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required(errorMsg.required),
    email: Yup.string().email(errorMsg.invalid).required(errorMsg.required),
    subject: Yup.string().required(errorMsg.required),
    message: Yup.string().required(errorMsg.required),
  });
  const onSubmit = (values, submitProps) => {
    console.log(values);
    submitProps.setSubmitting(false);
    submitProps.resetForm();
  };
  return (
    <section className="contact-form">
      <div className="container">
        <h3>{contactForm.fromHeader}</h3>
        <div className="form-box">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => (
              <Form>
                <div className="form-fields">
                  <div className="contact-left">
                    <div className="contact-name-input">
                      <Field
                        type="text"
                        id="contact-name-input"
                        name="name"
                        placeholder={contactForm.fromPlaceholder.name}
                      />
                      <ErrorMessage name="name" component={TextError} />
                    </div>
                    <div className="contact-email-input">
                      <Field
                        type="email"
                        id="contact-email-input"
                        name="email"
                        placeholder={contactForm.fromPlaceholder.email}
                      />
                      <ErrorMessage name="email" component={TextError} />
                    </div>
                    <div className="contact-subject-input">
                      <Field
                        type="text"
                        id="contact-subject-input"
                        name="subject"
                        placeholder={contactForm.fromPlaceholder.subject}
                      />
                      <ErrorMessage name="subject" component={TextError} />
                    </div>
                  </div>
                  <div className="contact-right">
                    <div className="contact-message">
                      <Field
                        as="textarea"
                        id="contact-subject-input"
                        name="message"
                        placeholder={contactForm.fromPlaceholder.message}
                      ></Field>
                      <ErrorMessage name="message" component={TextError} />
                    </div>
                  </div>
                </div>
                <button type="submit" className="contact-form-btn">
                  {contactForm.fromBtn}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    contactForm: state.dataText.dataJson.contactsPage.contactForm,
    errorMsg: state.dataText.dataJson.errorMsg,
  };
};

export default connect(mapStateToProps)(ContactForm);
