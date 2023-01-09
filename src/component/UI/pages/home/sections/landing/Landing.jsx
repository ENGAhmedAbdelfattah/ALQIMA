import React from "react";
import { connect } from "react-redux";
import CoButton from "./../../../../../common/CoButton";
import WaveLanding from "../../../../../common/WaveLanding";

function Landing({ landing, LandingImgs }) {
  return (
    <section className="homeLanding landingSections">
      <div className="container">
        <div className="content-box">
          <h1 className="main-header">
            <span className="odd-word">{landing.mainHeader.oddWord}</span>
            &thinsp;{landing.mainHeader.restHeader}
          </h1>
          <p className="landing-description">{landing.description}</p>
          <div className="button-group-landing">
            <CoButton
              className={"get-started"}
              path={"signup"}
              contentText={landing.buttonGroup.signUpNow}
            />
          </div>
        </div>
        <div className="banner-container">
          <div className="bullets-item"></div>
          <div className="bullets-item"></div>
          <div className="bullets-item"></div>
          <div className="bullets-item"></div>
          <div className="bullets-item"></div>
          <div className="banner-box">
            <div className="banner-item-container">
              <div className="banner-item banner-item-hand-img-one">
                <div className="hand-img">
                  <img src={LandingImgs.landingImg1} alt={landing.bannerImgAlt} />
                </div>
              </div>
            </div>
            <div className="banner-item-container">
              <div className="banner-item banner-item-hand-img-two">
                <div className="hand-img">
                  <img src={LandingImgs.landingImg2} alt={landing.bannerImgAlt} />
                </div>
              </div>
            </div>
            <div className="banner-item-container">
              <div className="banner-item banner-item-hand-img-three">
                <div className="hand-img">
                  <img src={LandingImgs.landingImg3} alt={landing.bannerImgAlt} />
                </div>
              </div>
            </div>
            <div className="banner-item-container">
              <div className="banner-item banner-item-hand-img-four">
                <div className="hand-img">
                  <img src={LandingImgs.landingImg4} alt={landing.bannerImgAlt} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WaveLanding />
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    landing: state.dataText.dataJson.home.landing,
    LandingImgs: state.allImages.pagesImgs.homeImgs.LandingImgs,

  };
};

export default connect(mapStateToProps)(Landing);
