import React from "react";
import "./universitygameprojects.css";
import "./sectionelements.js";
import { MyHomeButton } from "../buttons/button.js";
import { GameElement, RagnarokImages } from "./sectionelements.js";

function GameSection(element) {
  return element;
}

export class UniversityGameProjects extends React.Component {
  render() {
    return (
      <div className="universitygameprojects-body">
        {GameSection(GameElement(RagnarokImages))}
        <div>{MyHomeButton()}</div>
      </div>
    );
  }
}
