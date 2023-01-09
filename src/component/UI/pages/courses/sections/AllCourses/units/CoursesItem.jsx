import React from "react";

function CoursesItem({
  coursesImg,
  itemContentHeader,
  rateNum,
  rateInfo,
  contentParagraph,
  participant,
  Hour,
  lecture,
  personImage,
  personName,
  bottomPrice,
}) {
  return (
    <div className="courses-item">
      <div className="hand-img">
        <img src={coursesImg} alt="" />
      </div>
      <div className="item-content">
        <div className="item-content-top">
          <div className="item-content-header">{itemContentHeader}</div>
          <div className="item-content-rate">
              <i className="span-rate-icon fas fa-star"></i>
              <span className="rate-num">{rateNum}</span>
              <span className="span-rate-info">{rateInfo}</span>
          </div>
        </div>
        <div className="item-content-paragraph">{contentParagraph}</div>
        <div className="item-content-info">
          <div className="info-units">
            <i className="fas fa-users"></i>
            <span className="info-span">{participant}</span>
          </div>
          <div className="info-units">
            <i className="fa-solid fa-clock"></i>
            <span className="info-span">{Hour}</span>
          </div>
          <div className="info-units">
            <i className="fa-regular fa-calendar-days"></i>
            <span className="info-span">{lecture}</span>
          </div>
        </div>
        <div className="item-content-bottom">
          <div className="bottom-person">
            <div className="bottom-person-image">
              <img src={personImage} alt="" />
            </div>
            <div className="bottom-person-name">{personName}</div>
          </div>
          <div className="bottom-price">{bottomPrice}</div>
        </div>
      </div>
    </div>
  );
}

export default CoursesItem;
