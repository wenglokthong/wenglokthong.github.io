import "./universitygameprojects.css";
import React from "react";
import { MyHomeButton } from "../../@helpers/buttons/button.js";
import { Link } from "react-router-dom";

const parentRoutePath = "/universitygameprojects/";

const GameSectionsLinkArray = [
  {
    routePath: parentRoutePath + "ragnarok",
    brief:
      "Ragnarok is a top-down shooter made using ASCII graphics. Shoot enemies, collect powerups, and survive as long as possible for the highest score!",
    linkName: "GAM100: Ragnarok",
    thumbnailPath: require("../../../assets/images/digipengampictures/ragnarok2.png"),
  },
  {
    routePath: parentRoutePath + "zeroday",
    brief:
      "A 2D multi-directional fast paced shooter game where the player takes control of a digital virus and journey through progressively harder stages filled with enemies that require specific clear conditions.",
    linkName: "GAM150: ZER0-DAY",
    thumbnailPath: require("../../../assets/images/digipengampictures/zeroday/zeroday2.png"),
  },
  {
    routePath: parentRoutePath + "glowingunder",
    brief:
      "A cinematic puzzle platformer about a restless firefly who journeys underground to rescue a baby firefly and find out what he’s living for.",
    linkName: "GAM200/250: Glowing Under",
    thumbnailPath: require("../../../assets/images/digipengampictures/GlowingUnder/GlowingUnder1.PNG"),
  },
  {
    routePath: parentRoutePath + "rapidridefight",
    brief:
      "Pilot a high-speed jet boat and brawl in a destructive battle revolving around teamplay and navigational abilities set in a dystopian future Singapore.",
    linkName: "GAM300/350: Rapid Ride Fight",
    thumbnailPath: require("../../../assets/images/digipengampictures/rapidridefight/RapidRideFight_InGame07-min.png"),
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
    <div style={{ fontSize: "1.2em" }}>
      This section is a collection of the game projects I have done in my course
      of university. These game projects (abbreviated as{" "}
      <i>
        GAM {"<"}Level{">"}
      </i>
      ) involves building a game of our choice using a custom developed engine ,
      in a team of three or more. Of course, the game will have to meet the
      module's requirements in terms of technical, design and art (if any) .
      <div style={{ marginTop: "1em" }} />
      Below are the links that redirect you to individual pages of the projects
      in detail. Do check them out!
    </div>
  </>
);

export class UniversityGameProjectsIntro extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          margin: "auto",
          textAlign: "left",
          flexDirection: "column",
        }}
      >
        <div>{summary}</div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            textAlign: "left",
            maxWidth: "100vw",
            justifyContent: "center",
            margin: "2em",
          }}
        >
          {GameSectionsLinkArray.map((element, index) => {
            return (
              <div
                key={index}
                style={{
                  marginBottom: "1em",
                  marginRight: "3em",
                  display: "flex",
                  flexDirection: "column",
                  maxWidth: "25em",
                  maxHeight: "25em",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div>
                    <Link style={{ fontSize: "2em" }} to={element.routePath}>
                      {element.linkName}
                    </Link>
                  </div>
                  <div>{element.brief}</div>
                </div>
                <div>
                  <img
                    style={{
                      height: "10em",
                      width: "auto",
                      objectFit: "contain",
                      marginTop: "2em",
                    }}
                    src={element.thumbnailPath}
                    alt=""
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div>
          <MyHomeButton />
        </div>
      </div>
    );
  }
}
