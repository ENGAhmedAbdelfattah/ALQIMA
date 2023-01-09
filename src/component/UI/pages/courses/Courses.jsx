import React from "react";
import CoursesLanding from "./sections/coursesLanding/CoursesLanding";
import AllCourses from "./sections/AllCourses/AllCourses";
import { connect } from "react-redux";
import usePageMeta from './../../../../hooks/usePageMeta';

function Courses({ metaCourses }) {
  usePageMeta(metaCourses.title, metaCourses.description);
  return (
    <>
      <div>
        <CoursesLanding />
        <AllCourses />
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    metaCourses: state.dataText.dataJson.coursesPage.meta,
  };
};

export default connect(mapStateToProps)(Courses);
