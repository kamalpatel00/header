import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Style.css";
class Header extends Component {
  state = {
    color: "white",
  };

  listenScrollEvent = (e) => {
    if (window.scrollY > 400) {
      this.setState({ color: "black" });
    } else {
      this.setState({ color: "white" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <div className="Header" style={{ color: this.state.color }}>
        <img
          className="logo"
          src="https://cdn.greenhouse.io/external_greenhouse_job_boards/logos/000/003/977/original/BettercomGreenhouse-1024x587.png?1554404619"
        />
        <ul className="menu-ul">
          {/* <li>
            <Link to="/"> Home</Link>
          </li> */}
          <li>
            <Link to="/about"> Credit score</Link>
          </li>
          <li id="con">
            <Link to="/contact">+91-9648877586</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
