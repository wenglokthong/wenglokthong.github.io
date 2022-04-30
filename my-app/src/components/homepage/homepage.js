import React from "react";
import { Link } from "react-router-dom"; //link to other pages

import "./homepage.css";
import { MyButton } from "../buttons/button.js";

class Homepage extends React.Component {
  render() {
    return (
      <div className="homepage-root">
        <div className="homepage-name">Thong Weng Lok, Max</div>
        <div className="homepage-intro">
          Welcome! This 'site' was made using ReactJS as a learning project. I
          will be using this as a portfolio as I develop it further. It will
          mostly be random and hopefully interesting stuff that I have done, or
          want to showcase. Thank you for your visit!
        </div>
        <div className="homepage-buttons-list">
          Click on one of the buttons to see!
          <div>
            <ul>
              <li>
                <Link to="/components/tictactoe">{MyButton("TicTacToe")}</Link>
              </li>
              <li>
                <Link to="/components/aboutme">{MyButton("About Me")}</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
