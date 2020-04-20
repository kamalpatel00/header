import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PhoneMissedIcon from "@material-ui/icons/PhoneMissed";
import "./Style.css";
import { MenuItem } from "@material-ui/core";
class Header extends Component {
  constructor() {
    super();
    this.state = {
      scrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== true) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }
  render() {
    return (
      <div className="hdiv">
        <div className={this.state.scrolled ? "nav scrolled" : "nav"}>
          <img
            className="logo"
            src="https://cdn.greenhouse.io/external_greenhouse_job_boards/logos/000/003/977/original/BettercomGreenhouse-1024x587.png?1554404619"
          />

          <ul className="menu-ul">
            {/* <li>
            <Link to="/"> Home</Link>
          </li> */}
            <li>
              <Link to="/about">
                <MenuItem
                  style={{
                    paddingLeft: 7,
                    textDecoration: "none",
                    color: "black",
                    marginTop: 0,
                  }}
                >
                  Credit score
                </MenuItem>
              </Link>
            </li>
            <li id="con">
              <Link to="/contact">
                <MenuItem
                  style={{
                    paddingLeft: 7,
                    marginTop: 0,

                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <PhoneMissedIcon fontSize="small" />
                  <span> </span>
                  +91-9648877586
                </MenuItem>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
