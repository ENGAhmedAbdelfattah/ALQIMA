import React from "react";

function WaveTop() {
  return (
    <div
      className="sections-wave-svg-top"
      style={{ height: 150, overflow: "hidden", backgroundColor: "white" }}
    >
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style={{ height: "100%", width: "100%" }}
      >
        <path
          d="M0.00,49.99 C250.93,10.10 343.44,211.08 504.68,52.09 L500.00,0.00 L0.00,0.00 Z"
          style={{ stroke: "none", fill: "#f7f8f9" }}
        />
      </svg>
    </div>
  );
}

export default WaveTop;
