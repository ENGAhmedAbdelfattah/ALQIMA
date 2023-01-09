import React from "react";

function ItemContact({image,header,address}) {
  return (
    <div className="item-contact">
      <div className="item-image"><img src={image} alt=""/>{}</div>
      <div className="item-content">
        <h4 className="item-header">{header}</h4>
        <p className="item-contact-address" dir="ltr">{address}</p>
      </div>
    </div>
  );
}

export default ItemContact;
