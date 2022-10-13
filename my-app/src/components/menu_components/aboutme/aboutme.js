import React from "react";
import { MyHomeButton } from "../../@helpers/buttons/button";
import { PDFShower } from "../../@helpers/pdf/pdfshower.js";
import { TabPanelContent } from "../../@helpers/tabs/tabpanelcontent";

import { IntroContent, SkillContent } from "./content";
import "./aboutme.css";
import "../../../index.css";

import resumepdf from "../../../assets/pdf/Internship_Resume.pdf";

const tabsArray = [
  { name: "Intro", content: IntroContent },

  { name: "Skills", content: SkillContent },
  {
    name: "Resume",
    content: (
      <div>
        <PDFShower
          isNeedButton={false}
          pdfobject={resumepdf}
          pagesArray={[1, 2]}
          pdfName={"Resume"}
        />
        <div style={{ textAlign: "center" }}>
          <h3>
            <a
              href={resumepdf}
              download={"ThongWengLokMax_Resume.pdf"}
              target="_blank"
            >
              Download a copy
            </a>
          </h3>
        </div>
        <br />
        <br />
        <br />
      </div>
    ),
  },
];

export class AboutMe extends React.Component {
  render() {
    return (
      <div className="aboutme-body">
        <TabPanelContent tabsArray={tabsArray} />
        <div>{MyHomeButton()}</div>
      </div>
    );
  }
}
