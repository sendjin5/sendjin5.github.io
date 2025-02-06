import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
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
          {selectedRoute === "/Portfolio" && <Portfolio />}
          {selectedRoute === "/" && <Animation />}
          {selectedRoute === "/ThreeDimension" && <ThreeDimension />}
        </div>
      </div>
      <CoverIndex />
    </Router>
  );
};

export default App;
