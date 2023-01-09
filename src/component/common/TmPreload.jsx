import React from "react";

function TmPreload() {
  document.body.style.overflow = "hidden";
  return (
    <div className="tm-preloader" style={{ overFlow: "hidden" }}>
      <img src="http://elqima.com/assets/front/images/preloader.gif" alt="logo" />
    </div>
  );
}
export default TmPreload;
