import React from "react";

function BenefitItem({ itemImg, itemHeader, itemParagraph }) {
  return (
    <div className="benefit-item">
      <div className="item-top-img">
        <img src={itemImg} alt="" />
      </div>
      <h4 className="item-header">{itemHeader}</h4>
      <p className="item-paragraph">{itemParagraph}</p>
    </div>
  );
}

export default BenefitItem;
