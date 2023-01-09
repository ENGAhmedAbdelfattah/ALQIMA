import React from "react";
import ContactLanding from "./sections/contactLanding/ContactLanding";
import ContactItems from "./sections/contactItems/ContactItems";
import ContactForm from "./sections/contactForm/ContactForm";
import { connect } from "react-redux";
import usePageMeta from './../../../../hooks/usePageMeta';

function ContactUs({ metaContactUs }) {
    usePageMeta(metaContactUs.title, metaContactUs.description);

  return (
      <div className="contact-page">
        <ContactLanding />
        <ContactItems />
        <ContactForm />
      </div>
  );
}
const mapStateToProps = (state) => {
  return {
    metaContactUs: state.dataText.dataJson.contactsPage.meta,
  };
};

export default connect(mapStateToProps)(ContactUs);
