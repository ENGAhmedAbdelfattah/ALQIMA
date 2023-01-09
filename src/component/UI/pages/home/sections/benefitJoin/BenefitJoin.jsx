import React from "react";
import BenefitItem from "./units/BenefitItem";
import { connect } from "react-redux";

function BenefitJoin({ benefitJoin, benefitJoinImgs }) {
  return (
    <section className="benefit-join">
      <div className="container">
        <div className="bullets-item"></div>
        <div className="bullets-item"></div>
        <div className="bullets-item"></div>
        <div className="top-box">
          <h2 className="benefit-header">
            <div className="img-hand">
              <img
                className="pattern-join-img"
                src={benefitJoinImgs.patternJoinImg}
                alt=""
              />
            </div>
            {benefitJoin.benefitHeader}
          </h2>
          <p className="benefit-paragraph">{benefitJoin.benefitParagraph}</p>
        </div>
        <div className="bottom-box">
          {benefitJoin.benefitItems.map((el, inx) => (
            <BenefitItem
              key={inx + el.id}
              itemImg={benefitJoinImgs[`benefitImg${inx + 1}`]}
              itemHeader={el.itemHeader}
              itemParagraph={el.itemParagraph}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    benefitJoin: state.dataText.dataJson.home.benefitJoin,
    benefitJoinImgs: state.allImages.pagesImgs.homeImgs.benefitJoinImgs,
  };
};

export default connect(mapStateToProps)(BenefitJoin);
