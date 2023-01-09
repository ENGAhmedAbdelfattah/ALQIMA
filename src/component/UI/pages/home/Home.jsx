import React from "react";
import Landing from "./sections/landing/Landing";
import Statistics from "./sections/statistics/Statistics";
import BenefitJoin from "./sections/benefitJoin/BenefitJoin";
import OpinionsUsers from "./sections/opinionsUsers/OpinionsUsers";
import Learning from "./sections/learning/Learning";
import GetApp from "./sections/getApp/GetApp";
import { connect } from "react-redux";
import usePageMeta from "./../../../../hooks/usePageMeta";

// import { useAuth } from "./../../../../auth/auth";
function Home({ metaHome }) {
    usePageMeta(metaHome.title, metaHome.description);

  // const auth = useAuth();
  // console.log(auth.dataAuth);
  return (
      <div className="home">
        <Landing />
        <Statistics />
        <BenefitJoin />
        <Learning />
        <GetApp />
        <OpinionsUsers />
      </div>
  );
}

const mapStateToProps = (state) => {
  return {
    metaHome: state.dataText.dataJson.home.meta,
  };
};

export default connect(mapStateToProps)(Home);
