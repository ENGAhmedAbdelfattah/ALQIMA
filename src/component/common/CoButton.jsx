import React from "react";
import {useNavigate } from "react-router-dom";

function CoButton({path, contentText, className}) {
  const navigate = useNavigate();
  const handleSignGo = (path) => {
    navigate(`/${path}`);
  };

  return (
    <button className={className} onClick={() => handleSignGo(path)}>
      {contentText}
    </button>
  );
}

export default CoButton;
