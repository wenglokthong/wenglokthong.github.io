import React from "react";
import { MyHomeButton } from "../@helpers/buttons/button";
import { PDFShower } from "../@helpers/pdf/pdfshower.js";
import { TabPanelContent } from "../@helpers/tabs/tabpanelcontent";

import { IntroContent, NerdContent, SkillContent } from "./content";
import "./aboutme.css";
import "../../index.css";

import resumepdf from "../../assets/pdf/Internship_Resume.pdf";

const tabsArray = [
  { name: "Intro", content: IntroContent },

  { name: "Skills", content: SkillContent },
  { name: "Nerd section", content: NerdContent },
  {
    name: "Resume",
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
        <TabPanelContent tabsArray={tabsArray} />
        <div>{MyHomeButton()}</div>
      </div>
    );
  }
}
