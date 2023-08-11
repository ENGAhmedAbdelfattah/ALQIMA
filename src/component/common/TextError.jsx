/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */
import React from "react";
import { connect } from "react-redux";

function TextError(props) {

  return <div className="form-error-msg">{props.children}</div>;
}

const mapStateToProps = (state) => {
  return {
    lang: state.langDir.lang,
  };
};

export default connect(mapStateToProps)(TextError);