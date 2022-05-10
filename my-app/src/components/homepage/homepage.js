import React from "react";

import "./homepage.css";
import "../../index.css";
import { HomepageLinks } from "./homepagelinks";

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
        <HomepageLinks />
      </div>
    );
  }
}

export default Homepage;
