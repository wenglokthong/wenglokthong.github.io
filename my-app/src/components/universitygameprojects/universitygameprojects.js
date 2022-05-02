import React from "react";
import "./universitygameprojects.scss";
import "./sectionelements.js";
import { MyHomeButton } from "../buttons/button.js";
import { RagnarokElement } from "./sectionelements.js";

function GameSection(element) {
  return element;
}

export class UniversityGameProjects extends React.Component {
  render() {
    return (
      <div>
        {GameSection(RagnarokElement)}
        {MyHomeButton()}
      </div>
    );
  }
}
