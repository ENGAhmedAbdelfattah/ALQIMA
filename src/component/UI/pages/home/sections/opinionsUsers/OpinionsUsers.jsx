import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import OpinionsPerson from "./units/OpinionsPerson";

function OpinionsUsers({ opinionsUsers, OpinionsUsersImgs, lang }) {
  const [activeNum, setActiveNum] = useState(
    0
    // lang === "en"
    //   ? 0
    //   : lang === "ar"
    //   ? Object.values(OpinionsUsersImgs).length
    //   : 0
  );
  useEffect(() => {
    let activeNumClone = activeNum;
    let numIntervalOne = setInterval(() => {
      if (activeNumClone < opinionsUsers.opinionsPersons.length - 1) {
        activeNumClone++;
        setActiveNum(activeNumClone);
      } else if (activeNumClone === opinionsUsers.opinionsPersons.length - 1) {
        activeNumClone = 0;
        setActiveNum(activeNumClone);
      }
    }, 2500);
    return () => {
      clearInterval(numIntervalOne);
    };
  }, []);

  return (
    <section className="opinions-users">
      <div className="container">
        <div className="opinions-users-top">
          <h2 className="opinions-users-header">
            {opinionsUsers.opinionsUsersHeader}
          </h2>
          <p className="opinions-users-paragraph">
            {opinionsUsers.opinionsUsersParagraph}
          </p>
        </div>
        <div className="opinions-persons-box">
          {opinionsUsers.opinionsPersons.map((el, inx) => (
            <OpinionsPerson
              key={inx + el.id}
              className={activeNum === inx ? "active" : ""}
              quoteParagraph={el.quoteParagraph}
              personImg={OpinionsUsersImgs[`opinionImg${inx + 1}`]}
              personName={el.personName}
              personCareer={el.personCareer}
            />
          ))}
          <div className="person-ballets">
            {opinionsUsers.opinionsPersons.map((el, inx) => (
              <span
                key={inx + el.id}
                className={activeNum === inx ? "active" : ""}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    opinionsUsers: state.dataText.dataJson.home.opinionsUsers,
    OpinionsUsersImgs: state.allImages.pagesImgs.homeImgs.OpinionsUsersImgs,
    lang: state.langDir.lang,
  };
};

export default connect(mapStateToProps)(OpinionsUsers);
