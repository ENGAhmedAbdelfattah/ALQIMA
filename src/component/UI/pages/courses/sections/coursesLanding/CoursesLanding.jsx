import React, { useState } from "react";
import { connect } from "react-redux";
import WaveLanding from "../../../../../common/WaveLanding";

function CoursesLanding({ coursesLanding }) {
  // state
  const [coursesForm, setCoursesForm] = useState({
    search: "",
    validate: false,
    errorMassages: {
      search: "",
    },
  });
  // methods
  const handleSearch = (e) => {
    //   clone
    let coursesFormClone = { ...coursesForm };
    //   edit
    coursesFormClone[e.currentTarget.name] = e.currentTarget.value.trim();
    // coursesForm validate;
    if (coursesFormClone.search.trim() !== "") {
      coursesFormClone.errorMassages.search = "";
      coursesFormClone.validate = true;
      // setState
      setCoursesForm(coursesFormClone);
    } else {
      coursesFormClone.errorMassages.search = "! fill in the email field";
      coursesFormClone.validate = false;
      // setState
      setCoursesForm(coursesFormClone);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
  };
  return (
    <section className="coursesLanding landingSections">
      <div className="container">
        <div className="content-box">
          <h1 className="main-header">{coursesLanding.header}</h1>
          <div className="search-box">
            <div className="search-right">
              <div className="search-box-icon">
                <i className="fa-solid fa-magnifying-glass fa-2x"></i>
              </div>
              <div className="search-box-input">
                <form onSubmit={handleSubmit}>
                  <input
                    type="search"
                    name="search"
                    value={coursesForm.search}
                    onChange={handleSearch}
                    placeholder={coursesLanding.placeholder}
                  />
                </form>
              </div>
            </div>
            <button className="search-box-button">
              {coursesLanding.searchBtn}
            </button>
          </div>
        </div>
        {/* <div className="banner-container"> */}
        <div className="bullets-item"></div>
        <div className="bullets-item"></div>
        <div className="bullets-item"></div>
        <div className="bullets-item"></div>
        <div className="bullets-item"></div>
        {/* </div> */}
      </div>
      <WaveLanding />
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    coursesLanding: state.dataText.dataJson.coursesPage.coursesLanding,
  };
};

export default connect(mapStateToProps)(CoursesLanding);
