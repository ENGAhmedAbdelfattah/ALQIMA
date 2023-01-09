import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

function Footer({ footer, navBar, footerImgs, footerPaths }) {
  const theDate = new Date();
  const year = theDate.getFullYear();
  return (
    <footer className="footer pattern">
      <div className="container">
        <div className="footer-top">
          <div className="footer-top-left">
            <div className="logo-box">
              <div className="logo-img">
                <img src={footerImgs.logoImg2} alt="" />
              </div>
              <span className="span-logo span-logo-dark">
                {navBar.logoBox.logoSpan}
              </span>
            </div>
            <div className="get-app">
              <a href="#" className="get-app-img">
                <img src={footerImgs.AppStoreImg} alt="App store img" />
              </a>
              <a href="#" className="get-app-img">
                <img src={footerImgs.GooglePlayImg} alt="Google play img" />
              </a>
            </div>
          </div>
          <div className="footer-top-right">
            <div className="list-box">
              <ul className="list-ul">
                {navBar.navList.map((el, inx) => (
                  <div key={inx + el}>
                    <NavLink
                      className="list-item"
                      to={Object.values(footerPaths)[inx]}
                    >
                      <li className="list-item" key={inx}>
                        {el}
                      </li>
                    </NavLink>
                  </div>
                ))}
                <NavLink
                  className="list-item"
                  to={Object.values(footerPaths)[4]}
                >
                  <li>{footer.LinkHelp}</li>
                </NavLink>
                <NavLink
                  className="list-item"
                  to={Object.values(footerPaths)[5]}
                >
                  <li>{footer.LinkPrivacy}</li>
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            {"©" + year}
            {footer.copyRight}
          </div>
          <div className="footer-bottom-right">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-github"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const mapStateToProps = (state) => {
  return {
    footer: state.dataText.dataJson.home.footer,
    footerImgs: state.allImages.footerImgs,
    navBar: state.dataText.dataJson.navBar,
    footerPaths: state.allPaths.footerPaths,
  };
};

export default connect(mapStateToProps)(Footer);
