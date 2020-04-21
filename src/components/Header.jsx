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
                className="creditScore"
                style={{
                  paddingLeft: 7,
                  textDecoration: "none",
                  color: "black",
                  marginTop: -4,
                }}
              >
                Credit score
              </MenuItem>
            </Link>
          </li>

          <li>
            <MenuItem>|</MenuItem>
          </li>

          <li className="contact">
            <Link to="/contact">
              <MenuItem
                style={{
                  marginLeft: -15,
                  paddingLeft: 7,
                  marginTop: -2,

                  fontsize: 10,
                  fontweight: 600,
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <PhoneMissedIcon
                  className="missedcall"
                  fontSize="small"
                  style={{
                    width: 30,
                    height: 17,
                    marginBottom: -3,
                    marginLeft: -2,
                  }}
                />
                <span> </span>
                080-46809259
              </MenuItem>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
