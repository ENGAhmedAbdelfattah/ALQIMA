import React from "react";

function StateItem({ number, numberDescriptions }) {
  return (
    <div className="state-item">
      <p className="number">{number}</p>
      <span className="num-description">{numberDescriptions}</span>
    </div>
  );
}

export default StateItem;
