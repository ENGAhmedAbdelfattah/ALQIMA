import React from "react";

function TeacherItem({ image, name, career, rate }) {
  return (
    <div className="teacher-item">
      <div className="hand-teacher-img">
        <img src={image} alt={name} />
      </div>
      <h4 className="teacher-item-name">{name}</h4>
      <p className="teacher-item-career">{career}</p>
      <span className="teacher-item-rate">
        <i className="fas fa-star"></i>
        <span>{rate}</span>
      </span>
    </div>
  );
}

export default TeacherItem;
