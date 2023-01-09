import React from "react";
import AllTeachers from "./sections/allTeachers/AllTeachers";
import TeacherLanding from "./sections/teacherLanding/TeacherLanding";
import { connect } from "react-redux";
import usePageMeta from "./../../../../hooks/usePageMeta";

function Teachers({ metaTeachers }) {
  usePageMeta(metaTeachers.title, metaTeachers.description);
  return (
    <>
      <div>
        <TeacherLanding />
        <AllTeachers />
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    metaTeachers: state.dataText.dataJson.teachersPage.meta,
  };
};

export default connect(mapStateToProps)(Teachers);
