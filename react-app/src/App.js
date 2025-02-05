import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./js/basic/Header";
import Home from "./js/main/Home";
import Portfolio from "./js/main/Portfolio";
import Animation from "./js/main/Animation";
import "./css/basic.css";

const App = () => {
  const [selectedRoute, setSelectedRoute] = useState("/");

  return (
    <Router>
      <div className="flex_between">
        <Header setSelectedRoute={setSelectedRoute} />
        <div className="container">
          {selectedRoute === "/" && <Home />}
          {selectedRoute === "/Portfolio" && <Portfolio />}
          {selectedRoute === "/Animation" && <Animation />}
        </div>
      </div>
    </Router>
  );
};

export default App;
