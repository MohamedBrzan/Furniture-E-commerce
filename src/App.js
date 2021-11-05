import React, { Component } from "react";
import "./App.css";
import Home from "./components/nav.js";
import Preloader from "./components/preloader.js";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        {" "}
        <Home />
      </div>
    );
  }
}

export default App;
