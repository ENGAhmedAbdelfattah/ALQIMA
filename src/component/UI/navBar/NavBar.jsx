import React, { useEffect } from "react";
import { connect } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import { changeData } from "../../../redux/features/dataText/dataTextSlice";
import { changeLang } from "../../../redux/features/changLang/changLangSlice";
// import CoButton from "./../../common/CoButton";

function NavBar({
  lang,
  dir,
  changeLang,
  changeData,
  navBar,
  navBarImgs,
  navbarPaths,
}) {
  const navigate = useNavigate();
  // methods
  const handleBtnLang = () => {
    const language = lang === "en" ? "ar" : "en";
    const direction = dir === "ltr" ? "rtl" : "ltr";
    changeLang(language, direction);
    handleLang(language, direction);
    changeData(language);
    localStorage.setItem("language", language);
    localStorage.setItem("direction", direction);
  };
  const handleLang = (language, direction) => {
    if (language === "en" && direction === "ltr") {
      document.getElementsByTagName("html")[0].setAttribute("lang", "en");
      document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");
    } else {
      document.getElementsByTagName("html")[0].setAttribute("lang", "ar");
      document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
    }
  };
  useEffect(() => {
    const language = localStorage.getItem("language");
    const direction = localStorage.getItem("direction");
    if (language && direction) {
      changeLang(language, direction);
      handleLang(language, direction);
      changeData(language);
    }
  }, []);
  const handleSignGo = (path) => {
    navigate(`/${path}`);
  };

  return (
    <>
      <nav className="nav-links">
        <div className="container">
          <div className="nav-box">
            <div
              className="logo-box clickable"
              onClick={() => handleSignGo("home")}
            >
              <div className="logo-img">
                <img src={navBarImgs.logoImg} alt="" />
              </div>
              <span className="span-logo span-logo-light">
                {navBar.logoBox.logoSpan}
              </span>
            </div>
            <div className="list-box">
              <ul className="list-ul">
                {navBar.navList.map((el, inx) => (
                  <NavLink
                    className="list-item"
                    to={Object.values(navbarPaths)[inx]}
                    key={inx + el}
                  >
                    <li className="list-item" key={inx}>
                      {el}
                    </li>
                  </NavLink>
                ))}
                <button className="change-lang" onClick={handleBtnLang}>
                  {navBar.lang}
                </button>
              </ul>
            </div>
            <div className="sign-box">
              <a className="navDownloadApp" href="#">
                {navBar.downloadBtn}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    lang: state.langDir.lang,
    dir: state.langDir.dir,
    navBar: state.dataText.dataJson.navBar,
    navBarImgs: state.allImages.navBarImgs,
    navbarPaths: state.allPaths.navbarPaths,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLang: (language, direction) =>
      dispatch(changeLang({ payloadLang: language, payloadDir: direction })),
    changeData: (language) => dispatch(changeData(language)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
