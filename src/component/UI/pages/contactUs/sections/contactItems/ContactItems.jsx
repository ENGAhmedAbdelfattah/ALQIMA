import React from "react";
import { connect } from "react-redux";

import ItemContact from "./units/ItemContact";

function ContactItems({ contactItems, contactUsImgs }) {
  return (
    <section className="contact-items">
      <div className="container">
        {contactItems.map((el, inx) => (
          <ItemContact
            key={inx + el.id}
            image={contactUsImgs[`contactImg${inx + 1}`]}
            header={el.itemHeader}
            address={el.contactAddress}
          />
        ))}
      </div>
    </section>
  );
}
const mapStateToProps = (state) => {
  return {
    contactItems: state.dataText.dataJson.contactsPage.contactItems,
    contactUsImgs: state.allImages.pagesImgs.contactUsImgs
  };
};

export default connect(mapStateToProps)(ContactItems);
