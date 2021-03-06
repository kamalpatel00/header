import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Header from "./components/Header";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../src/components/Style.css";
import Excercise from "./components_Grid/Excercise";
import Footer from "./components_Grid/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* <Route exact path="/" component={Home} /> */}
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Router>
      {/* <Header />
      <Excercise />
      <Footer /> */}

      {/*       
      <Home />
      <About />
      <Contact />
      <Header /> */}
    </div>
  );
}

export default App;
