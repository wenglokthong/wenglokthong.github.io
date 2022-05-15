import React from "react";
import { MyHomeButton } from "../@helpers/buttons/button";
import { PDFShower } from "../@helpers/pdf/pdfshower.js";
import { ButtonGroupContent } from "../@helpers/content/buttongroupcontent";

import "./aboutme.css";
import "../../index.css";
import linkedinlogo from "../../assets/images/linkedin-logo.png";
import resumepdf from "../../assets/pdf/Internship_Resume.pdf";

const buttonArray = [
  { name: "One", content: "Meow" },
  { name: "three", content: "woof" },
  { name: "One", content: "Meow" },
  { name: "three", content: "woof" },
  { name: "One", content: "Meow" },
  { name: "three", content: "woof" },
  {
    name: "two",
    content: (
      <PDFShower
        isNeedButton={false}
        pdfobject={resumepdf}
        pagesArray={[1, 2]}
        pdfName={"Resume"}
      />
    ),
  },
];

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
        <ButtonGroupContent
          buttonArray={buttonArray}
          style={{ textAlign: "center" }}
          settings={{
            variant: "text",
            orientation: "horizontal",
          }}
        />
        <div>{MyHomeButton()}</div>
      </div>
    );
  }
}
