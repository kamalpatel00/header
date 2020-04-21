import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PhoneMissedIcon from "@material-ui/icons/PhoneMissed";
import "./Style.css";
import { MenuItem } from "@material-ui/core";
import Logo from "./bettr.svg";
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
        <img className="logo" src={Logo} />

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
                  fontFamily: "Montserrat",
                }}
              >
                Credit Score
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
                  letterSpacing: "normal",
                  fontsize: 10,
                  fontweight: 600,
                  textDecoration: "none",
                  color: "black",
                  fontFamily: "Montserrat",
                  fontStretch: "normal",
                  fontStyle: "normal",
                }}
              >
                <PhoneMissedIcon
                  className="missedcall"
                  fontSize="small"
                  style={{
                    width: 18,
                    height: 17,
                    marginBottom: -3,
                    marginLeft: 15,
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
