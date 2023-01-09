import React from "react";
import AllSignUp from "./sections/AllSignUp";
import { connect } from "react-redux";
import usePageMeta from './../../../../hooks/usePageMeta';

function SignUp({ metaSignUp }) {
    usePageMeta(metaSignUp.title, metaSignUp.description);

  return (
      <div >
        <AllSignUp />
      </div>
  );
}

const mapStateToProps = (state) => {
  return {
    metaSignUp: state.dataText.dataJson.coursesPage.meta,
  };
};

export default connect(mapStateToProps)(SignUp);
