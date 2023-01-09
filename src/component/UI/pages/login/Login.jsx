import React from "react";
import AllLogin from "./sections/AllLogin";
import { connect } from "react-redux";
import usePageMeta from './../../../../hooks/usePageMeta';

function Login({ metaLogin }) {
    usePageMeta(metaLogin.title, metaLogin.description);

  return (
      <div>
        <AllLogin />
      </div>
  );
}
const mapStateToProps = (state) => {
  return {
    metaLogin: state.dataText.dataJson.coursesPage.meta,
  };
};

export default connect(mapStateToProps)(Login);
