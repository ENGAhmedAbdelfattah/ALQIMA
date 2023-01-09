import React from "react";

function OpinionsPerson({
  quoteParagraph,
  className,
  personImg,
  personName,
  personCareer,
}) {
  return (
    <div className={`person-item ${className}`}>
      <div className="opinions-users-quote">
        <p className="quote-paragraph">{quoteParagraph}</p>
      </div>
      <div className="opinions-users-person">
        <div className="person-img"><img src={personImg} alt=""/></div>
        <div className="person-name">{personName}</div>
        <div className="person-career">{personCareer}</div>
      </div>
    </div>
  );
}

export default OpinionsPerson;
