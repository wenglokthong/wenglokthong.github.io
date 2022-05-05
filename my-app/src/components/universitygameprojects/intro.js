import "./universitygameprojects.css";
import React from "react";
import { MyHomeButton } from "../buttons/button.js";
import { Link } from "react-router-dom";

const parentRoutePath = "/components/universitygameprojects/";

const GameSectionsLinkArray = [
  {
    routePath: parentRoutePath + "ragnarok",
    brief: "Ragnarok is a top-down shooter made using ASCII graphics",
    linkName: "GAM100: Ragnarok",
    thumbnailPath: "",
  },
  {
    routePath: parentRoutePath + "zeroday",
    brief: "",
    buttonName: "Zero-Day",
    thumbnailPath: "",
  },
];

const summary = (
  <>
    <div
      style={{
        fontSize: "2em",
        fontWeight: "bold",
        textDecoration: "underline",
      }}
    >
      DigiPen GAM projects
    </div>
    <p style={{ fontSize: "1.2em" }}>
      This section is a collection of the game projects I have done in my course
      of university. These game projects (abbreviated as{" "}
      <i>
        GAM {"<"}Level{">"}
      </i>
      ) involves building a game using a custom developed engine, in a team of
      three or more. On a side note, there are minor projects that I have done
      in other modules using commercial engines like Unreal, but I will not be
      putting them here because those are more of a "learning how to use Unreal"
      type of projects.
      <br style={{ marginTop: "1em" }} />
      Below are the links that redirect you to individual pages of the projects
      in detail, coupled together with my own thoughts and experiences. Do check
      them out!
    </p>
  </>
);

export class UniversityGameProjectsIntro extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          margin: "auto",
          textAlign: "center",
          flexDirection: "column",
        }}
      >
        <div>{summary}</div>

        {GameSectionsLinkArray.map((element, index) => {
          return (
            <div key={index} style={{ marginBottom: "1em" }}>
              <Link style={{ fontSize: "2em" }} to={element.routePath}>
                {element.linkName}
              </Link>
              <div>{element.brief}</div>
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
