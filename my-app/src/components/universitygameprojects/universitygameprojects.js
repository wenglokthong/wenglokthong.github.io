import React from "react";
import { MyButton, MyHomeButton } from "../buttons/button.js";
import { Link } from "react-router-dom";

import { parentRoutePath } from "./sectionelements";

import "./universitygameprojects.css";
import "./sectionelements.js";

const GameSectionsLinkArray = [
  {
    routePath: parentRoutePath + "ragnarok",
    buttonName: "Ragnarok",
    thumbnailPath: "",
  },
  {
    routePath: parentRoutePath + "zeroday",
    buttonName: "Zero-Day",
    thumbnailPath: "",
  },
];

export class UniversityGameProjects extends React.Component {
  render() {
    return (
      <div>
        {GameSectionsLinkArray.map((element, index) => {
          return (
            <div key={index}>
              <Link to={element.routePath}>{MyButton(element.buttonName)}</Link>
              <img src={element.thumbnailPath} alt="" />
            </div>
          );
        })}
        <div>{MyHomeButton()}</div>
      </div>
    );
  }
}
