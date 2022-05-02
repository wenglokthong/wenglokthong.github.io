import React from "react";
import "./universitygameprojects.css";
import "./sectionelements.js";
import { MyHomeButton } from "../buttons/button.js";
import { GameImageSlider, RagnarokImages,RagnarokText } from "./sectionelements.js";

function GameSection(title,image,text) {
  return (
    <div>
    <div className='game-title'>{title}</div>
    <div >{image}</div>
    <div className='game-text'>{text}</div></div>
  );
}

export class UniversityGameProjects extends React.Component {
  render() {
    return (
      <div className="universitygameprojects-body">
         <div>{GameSection("Year 1: Ragnarok",GameImageSlider(RagnarokImages),RagnarokText)}</div>
         <div>{GameSection("Year 1.5: ZER0-DAY",GameImageSlider(RagnarokImages))}</div>
        <div>{MyHomeButton()}</div>
      </div>
    );
  }
}
