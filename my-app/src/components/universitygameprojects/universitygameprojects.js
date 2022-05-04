import React from "react";
import { MyButton, MyHomeButton } from "../buttons/button.js";
import { Link } from "react-router-dom";

import { parentRoutePath } from "./sectionelements";

import "./universitygameprojects.css";
import "./sectionelements.js";

const GameSectionsLinkArray = [
  {
    routePath: parentRoutePath + "ragnarok",
    brief: "ragnarok brief",
    buttonName: "Ragnarok",
    thumbnailPath: "",
  },
  {
    routePath: parentRoutePath + "zeroday",
    brief: "",
    buttonName: "Zero-Day",
    thumbnailPath: "",
  },
];

export class UniversityGameProjects extends React.Component {
  render() {
    return (
      <div>
        <div>Intro and brief</div>

        {GameSectionsLinkArray.map((element, index) => {
          return (
            <div key={index} style={{ marginBottom: "1em" }}>
              <Link to={element.routePath}>{MyButton(element.buttonName)}</Link>
              {element.brief}
              <img src={element.thumbnailPath} alt="" />
            </div>
          );
        })}
        <div>
          <MyHomeButton />
        </div>
      </div>
    );
  }
}
