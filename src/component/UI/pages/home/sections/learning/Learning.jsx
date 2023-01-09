import React from "react";
import { connect } from "react-redux";
import CoButton from "./../../../../../common/CoButton";

function Learning({ learning, learningImgs }) {
  return (
    <section className="learning">
      <div className="container">
        <div className="bullets-item"></div>
        <div className="bullets-item"></div>
        <div className="learning-left">
          <h2 className="learn-header">
            {learning.learnHeaderStart}&thinsp;
            <span className="learn-header-span">
              {learning.learnHeaderSpan}
            </span>
            &thinsp;
            {learning.learnHeaderEnd}
          </h2>
          <p className="learning-paragraph">{learning.learningParagraph}</p>
          <CoButton
            path={"signup"}
            contentText={learning.joinUsNow}
            className={"join-us-now"}
          />
        </div>
        <div className="learning-right">
          <div className="learning-img-before">
            <img className="learning-img" src={learningImgs.learningImg1} alt="" />
          </div>
          <img
            className="learning-img"
            src={learningImgs.learningImg}
            alt={learning.learningImgAlt}
          />
          <div className="learning-img-after">
            <img className="learning-img" src={learningImgs.learningImg2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    learning: state.dataText.dataJson.home.learning,
    learningImgs: state.allImages.pagesImgs.homeImgs.learningImgs,
  };
};

export default connect(mapStateToProps)(Learning);
