import React from "react";
import { connect } from "react-redux";
import WaveLanding from "../../../../../common/WaveLanding";

function TeacherLanding({ teacherLanding, teachersImgs }) {
  return (
    <section className="landingSections teachersLanding">
      <div className="container">
        <div className="content-box">
          <h1 className="main-header">{teacherLanding.header}</h1>
        </div>
        <div className="teacher-landing-img">
          <img src={teachersImgs.landingTeacherImg} alt="teachers of Learning"></img>
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
    teacherLanding: state.dataText.dataJson.teachersPage.teacherLanding,
    teachersImgs: state.allImages.pagesImgs.teachersImgs,
  };
};

export default connect(mapStateToProps)(TeacherLanding);
