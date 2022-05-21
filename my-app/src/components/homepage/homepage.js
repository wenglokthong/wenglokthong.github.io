import React from "react";

import "./homepage.css";
import "../../index.css";
import { HomepageLinks } from "./homepagelinks";

class Homepage extends React.Component {
  render() {
    return (
      <div className="homepage-root">
        <div className="homepage-name">Thong Weng Lok, Max</div>
        <div className="homepage-intro">
          Welcome! This site was made using ReactJS as a learning project. I
          will be developing it further as I go along. It will mostly be a
          platform to experiment with what I can do with React, and at the same
          time using it as a portfolio and expressing myself.
          <br />
          <br />
          I am still learning as I go along, so do pardon any bugs or issues
          with this site. That being said, any feedback regarding technical or
          design is welcomed!
          <br />
          <br />
          Thank you for your visit!
        </div>
        <HomepageLinks />
      </div>
    );
  }
}

export default Homepage;
