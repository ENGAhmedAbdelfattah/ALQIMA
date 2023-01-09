import React from "react";
import { connect } from "react-redux";
import StateItem from "./units/StateItem";
import WaveBottom from "./../../../../../common/WaveBottom";
import WaveTop from "./../../../../../common/WaveTop";

// import pattern statistic image
function Statistics({ statistics }) {
  return (
    <section className="statistics">
      <div className="statistics-box">
        <WaveTop />
        <div className="container pattern">
          <div className="text-box">
            <h2 className="sec-header">{statistics.textBox.secHeader}</h2>
            <p className="statistics-description">
              {statistics.textBox.statisticsDescription}
            </p>
          </div>
          <div className="units-box">
            {statistics.unitsBox.stateItems.map((el) => (
              <StateItem
                key={el.id}
                number={el.num}
                numberDescriptions={el.numDescription}
              />
            ))}
          </div>
        </div>
        <WaveBottom />
      </div>
    </section>
  );
}
const mapStateToProps = (state) => {
  return {
    statistics: state.dataText.dataJson.home.statistics,
  };
};

export default connect(mapStateToProps)(Statistics);
