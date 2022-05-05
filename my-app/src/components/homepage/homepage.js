import React from "react";
import { Link } from "react-router-dom"; //link to other pages

import "./homepage.css";
import "../../index.css";
import { MyButton } from "../buttons/button.js";

class Homepage extends React.Component {
  componentDidMount() {
    document.body.className = "homepage-root";
  }

  componentWillUnmount() {
    document.body.className = "body";
  }

  render() {
    return (
      <div className="homepage-root">
        <div className="homepage-name">Thong Weng Lok, Max</div>
        <div className="homepage-intro">
          Welcome! This site was made using ReactJS as a learning project. I
          will be developing it further as I go along. It will mostly be random
          and hopefully interesting stuff that I have done, or want to showcase.
          Thank you for your visit!
        </div>
        <div className="homepage-buttons-list">
          Click on one of the buttons to check it out!
          <div>
            <ul>
              <li>
                <Link to="/components/aboutme">{MyButton("About Me")}</Link>
              </li>
              <li>
                <Link to="/components/universitygameprojects/intro">
                  {MyButton("University Game Projects")}
                </Link>
              </li>
              <li>
                <Link to="/components/tictactoe">{MyButton("TicTacToe")}</Link>
              </li>
              <li>
                <Link to="/components/playground">
                  {MyButton("Playground")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
