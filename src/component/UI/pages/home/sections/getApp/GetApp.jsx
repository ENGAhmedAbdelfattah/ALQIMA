import React from "react";
import { connect } from "react-redux";

import WaveTop from "./../../../../../common/WaveTop";
import WaveBottom from "../../../../../common/WaveBottom";

function GetApp({ getApp, getAppImgs }) {
  return (
    <section className="get-app">
      <WaveTop />
      <div className="container pattern">
        <div className="getApp-left">
          <div className="image-hand-one">
            <img
              className="getApp-img"
              src={getAppImgs.AppImg2}
              alt={getApp.getAppImgAlt2}
            />
            <div className="image-hand-two">
              <img
                className="getApp-img"
                src={getAppImgs.AppImg1}
                alt={getApp.getAppImgAlt1}
              />
            </div>
          </div>
        </div>
        <div className="getApp-right">
          <h2 className="learn-header">{getApp.learnHeader}</h2>
          <p className="getApp-paragraph">{getApp.getAppParagraph}</p>
          <div className="get-app">
            <a href="#" className="get-app-img">
              <img src={getAppImgs.AppStoreImg} alt={getApp.downloadAppAlt1} />
            </a>
            <a href="#" className="get-app-img">
              <img
                src={getAppImgs.GooglePlayImg}
                alt={getApp.downloadAppAlt12}
              />
            </a>
          </div>
        </div>
      </div>
      <WaveBottom />
    </section>
  );
}
const mapStateToProps = (state) => {
  return {
    getApp: state.dataText.dataJson.home.getApp,
    getAppImgs: state.allImages.pagesImgs.homeImgs.getAppImgs,
  };
};

export default connect(mapStateToProps)(GetApp);
