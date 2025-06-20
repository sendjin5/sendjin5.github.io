import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import Test from "./js/main/TestJs";
import Test2 from "./js/main/TestJs2";
import Header from "./js/basic/Header";
import ThreeDimension from "./js/main/ThreeDimension";
import Portfolio from "./js/main/Portfolio";
import Animation from "./js/main/Animation";
import CoverIndex from "./js/main/CoverIndex";
import "./css/basic.css";

const App = () => {
  const [selectedRoute, setSelectedRoute] = useState("/");

  return (
    <Router>
      <div className="flex_between" style={{ zIndex: -2 }}>
        <Header setSelectedRoute={setSelectedRoute} />
        <div className="container">
          {selectedRoute === "/Portfolio" && <Test />}
          {selectedRoute === "/" && <Animation />}
          {selectedRoute === "/ThreeDimension" && <ThreeDimension />}
          {selectedRoute === "/Forest" && <Test2 />}
        </div>
      </div>
      <CoverIndex />
    </Router>
  );
};

export default App;
