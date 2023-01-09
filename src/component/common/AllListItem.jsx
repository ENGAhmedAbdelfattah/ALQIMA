import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { NavLink, useLocation, useParams } from "react-router-dom";

// import images personImages
import CoursesItem from "./../UI/pages/courses/sections/AllCourses/units/CoursesItem";
import TeacherItem from "./../UI/pages/teachers/sections/allTeachers/units/TeacherItem";

function AllCourses({
  allCourses,
  allTeachers,
  coursesImgs,
  teachersImgs,
  coursesPaths,
}) {
  const location = useLocation().pathname.split("/")[1];

  const param = useParams();
  const ParamId = param.id;
  // state
  const [allItem, setAllItem] = useState("");
  const [selectForms, setSelectForms] = useState({
    gradeSelect: "All",
    rateSelect: "All",
  });
  useEffect(() => {
    const allItemClone =
      location === "courses"
        ? allCourses
        : location === "teachers"
        ? allTeachers
        : "";
    setAllItem(allItemClone);
  }, [allTeachers, allCourses]);
  const [showedItemsPaginated, setShowedItemsPaginated] = useState([0, 9]);
  // methods
  const handleCoursesArray = (anyLocation) => {
    let showALL = [];
    if (anyLocation === "courses") {
      if (ParamId === "all") {
        showALL = Object.values(allCourses.coursesItems).flat();
      } else {
        showALL = allCourses.coursesItems[`${ParamId}`];
      }
      showALL =
        selectForms.gradeSelect === "" || selectForms.gradeSelect === "All"
          ? showALL
          : showALL.filter((el) => el.gradeYear === selectForms.gradeSelect);
      showALL =
        selectForms.rateSelect === "" || selectForms.rateSelect === "All"
          ? showALL
          : showALL.filter((el) => el.rateNum === selectForms.rateSelect);
      return showALL;
    } else if (anyLocation === "teachers") {
      if (ParamId === "all") {
        showALL = Object.values(allTeachers.teachersItems).flat();
      }
      showALL =
        selectForms.gradeSelect === "" || selectForms.gradeSelect === "All"
          ? showALL
          : showALL.filter((el) =>
              el.gradeYear.some((el) => el === selectForms.gradeSelect)
            );

      return showALL;
    }
  };

  const handleNumberCourses = handleCoursesArray(location).length;
  const handleShowedCourse = (nextOrPrev = "next") => {
    let showedItemsPaginatedClone = [...showedItemsPaginated];
    if (nextOrPrev === "next") {
      if (showedItemsPaginatedClone[1] < handleCoursesArray(location).length) {
        showedItemsPaginatedClone[0] += 9;
        showedItemsPaginatedClone[1] += 9;
      }
    } else if (nextOrPrev === "prev") {
      if (showedItemsPaginatedClone[0] > 0) {
        showedItemsPaginatedClone[0] -= 9;
        showedItemsPaginatedClone[1] -= 9;
      }
    }
    setShowedItemsPaginated(showedItemsPaginatedClone);
  };
  const numsPagesCourses = Math.ceil(handleNumberCourses / 9);
  const handleChange = (e) => {
    const selectFormsClone = { ...selectForms };
    selectFormsClone[e.currentTarget.name] = e.currentTarget.value;
    setSelectForms(selectFormsClone);
    handleCoursesArray(location);
  };
  useEffect(() => {
    console.log(selectForms);
  }, [selectForms]);
  return (
    <>
      <section className="All">
        <div className="container">
          <div className="All-top">
            <h2 className="courses-header">{allItem && allItem.header}</h2>
            <div className="courses-selected-box">
              <label className="courses-selected-label" htmlFor="grade-select">
                {allItem && allItem.selectedLabel}
              </label>
              <div className="courses-select-box">
                <select
                  name="gradeSelect"
                  id="grade-select"
                  className="grade-select"
                  value={selectForms.gradeSelect}
                  onChange={handleChange}
                >
                  {allItem &&
                    allItem.options.map((el, inx) => (
                      <option key={inx} value={el.value}>
                        {el.text}
                      </option>
                    ))}
                </select>
                <i className="select-icon fas fa-angle-down"></i>
              </div>
            </div>
          </div>
          {location === "courses" && (
            <div className="All-header-filter">
              <ul>
                {allCourses.headerFilter.map((el, inx) => (
                  <NavLink
                    key={inx + el}
                    to={"/courses" + Object.values(coursesPaths)[inx]}
                  >
                    <li className="list-item">{el}</li>
                  </NavLink>
                ))}
              </ul>
            </div>
          )}
          {location === "courses" && (
            <div className="All-sorted All-top">
              <h2 className="courses-sorted courses-header">
                {handleNumberCourses} {allCourses.coursesNumberTitle}
              </h2>
              <div className="courses-sorted courses-selected-box">
                <label
                  className="courses-sorted courses-selected-label"
                  htmlFor="rate-select"
                >
                  {allCourses.sortedSelectedLabel}
                </label>
                <div className="courses-sorted courses-select-box">
                  <select
                    name="rateSelect"
                    id="rate-select"
                    className="grade-select"
                    value={selectForms.rateSelect}
                    onChange={handleChange}
                  >
                    {allCourses.sortedCoursesOptions.map((el, inx) => (
                      <option key={inx + el.id} value={el.value}>
                        {el.text}
                      </option>
                    ))}
                  </select>
                  <i className="courses-sorted select-icon fas fa-angle-down"></i>
                </div>
              </div>
            </div>
          )}
          <div className="All-items">
            {handleCoursesArray(location) &&
              handleCoursesArray(location)
                .slice(showedItemsPaginated[0], showedItemsPaginated[1])
                .map(
                  (el, inx) =>
                    (location === "courses" && (
                      <CoursesItem
                        key={el.id}
                        coursesImg={coursesImgs[`coursesImg${inx + 1}`]}
                        itemContentHeader={el.itemContentHeader}
                        rateNum={el.rateNum}
                        rateInfo={el.rateInfo}
                        contentParagraph={el.contentParagraph}
                        participant={el.participant}
                        Hour={el.Hour}
                        lecture={el.lecture}
                        personImage={teachersImgs[`teachersImg${inx + 1}`]}
                        personName={el.personName}
                        bottomPrice={el.bottomPrice}
                      />
                    )) ||
                    (location === "teachers" && (
                      <TeacherItem
                        key={el.id}
                        image={teachersImgs[`teachersImg${inx + 1}`]}
                        name={el.name}
                        career={el.career}
                        rate={el.rate}
                      />
                    ))
                )}
          </div>
          <div className="pagination">
            <i
              className="start fas fa-angle-left"
              onClick={() => handleShowedCourse("prev")}
            ></i>
            <div className="center-bullet">
              {[...Array(numsPagesCourses)].map((el, inx) => (
                <div
                  key={inx}
                  className={
                    Math.ceil(showedItemsPaginated[1] / 9) === inx + 1
                      ? "active"
                      : ""
                  }
                >
                  {el}
                </div>
              ))}
            </div>
            <i
              className="end fas fa-angle-right"
              onClick={() => handleShowedCourse("next")}
            ></i>
          </div>
        </div>
      </section>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    allCourses: state.dataText.dataJson.coursesPage.allCourses,
    allTeachers: state.dataText.dataJson.teachersPage.allTeachers,
    coursesImgs: state.allImages.pagesImgs.coursesImgs,
    teachersImgs: state.allImages.pagesImgs.teachersImgs,
    coursesPaths: state.allPaths.coursesPaths,
  };
};

export default connect(mapStateToProps)(AllCourses);
