import React from "react";
import { connect } from "react-redux";
import WaveLanding from "../../../../../common/WaveLanding";

function ContactLanding({ contactLanding, contactUsImgs }) {
  return (
    <section className="landingSections contactsLanding">
      <div className="container">
        <div className="content-box">
          <h1 className="main-header">{contactLanding.header}</h1>
        </div>
        <div className=" contact-landing-img">
          <img src={contactUsImgs.landingContactImg} alt="contacts us"></img>
        </div>
        <div className="bullets-item"></div>
        <div className="bullets-item"></div>
        <div className="bullets-item"></div>
        <div className="bullets-item"></div>
        <div className="bullets-item"></div>
      </div>
      <WaveLanding />
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    contactLanding: state.dataText.dataJson.contactsPage.contactLanding,
    contactUsImgs: state.allImages.pagesImgs.contactUsImgs
  };
};

export default connect(mapStateToProps)(ContactLanding);
