import { Provider } from "react-redux";
import store from "./redux/app/store";
import NavBar from "./component/UI/navBar/NavBar";
import Routers from "./router/Routers";
import Footer from "./component/UI/footer/Footer";
// import style and icons
import "./style/App.scss";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
// img of design for test
// import homeImg from "./assets/images/testImage/Contact_us.png";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="for-test">{/* <img src={homeImg} alt="" /> */}</div>
        <NavBar />
        <Routers />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
