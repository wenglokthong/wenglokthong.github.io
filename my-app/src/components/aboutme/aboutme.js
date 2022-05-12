import React from "react";
import { MyHomeButton } from "../buttons/button";
import { PDFShower } from "./helpers";

import "./aboutme.css";
import "../../index.css";
import linkedinlogo from "../../assets/images/linkedin-logo.png";
import resumepdf from "../../assets/pdf/Internship_Resume.pdf";

export const AboutMeSection = (props) => {};

export class AboutMe extends React.Component {
  render() {
    return (
      <div className="aboutme-body">
        Click to go to my LinkedIn profile! (opens up a new window)
        <br />
        <button
          className="linkedin-button"
          onClick={() => {
            window.open("https://www.linkedin.com/in/maxthong/", "_blank");
          }}
        >
          LinkedIn
          <img
            src={linkedinlogo}
            alt="linkedin logo"
            height="40em"
            width="40em"
          />
        </button>
        <PDFShower pdfobject={resumepdf} pagesArray={[1, 2]} />
        <div>{MyHomeButton()}</div>
      </div>
    );
  }
}
