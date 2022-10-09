import React from "react";
import AliceCarousel from "react-alice-carousel";

import { MyBackButton } from "../../@helpers/buttons/button";
import {
  RagnarokImages,
  RagnarokText,
  ZeroDayImages,
  ZeroDayText,
  GlowingUnderImages,
  GLowingUnderText,
  RRRImages,
  RRRText,
} from "./content";

import "./universitygameprojects.css";
import "react-alice-carousel/lib/alice-carousel.css";

export const GameSectionArray = [
  {
    gameTitle: "Ragnarok",
    gameHeader: "Ragnarok",
    gameImages: RagnarokImages,
    gameText: RagnarokText,
  },
  {
    gameTitle: "ZeroDay",
    gameHeader: "ZER0-DAY",
    gameImages: ZeroDayImages,
    gameText: ZeroDayText,
  },
  {
    gameTitle: "GlowingUnder",
    gameHeader: "Glowing Under",
    gameImages: GlowingUnderImages,
    gameText: GLowingUnderText,
  },
  {
    gameTitle: "RRR",
    gameHeader: "Rapid Ride Fight",
    gameImages: RRRImages,
    gameText: RRRText,
  },
];

export const GameImageSlider = (images) => {
  return (
    <div className="image-slider">
      <AliceCarousel
        autoPlay={true}
        animationDuration={400}
        autoPlayInterval={3000}
        infinite={true}
      >
        {images.map((arrayElement, index) => {
          return (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img
                key={index}
                className="image-single"
                src={arrayElement.imgSrc}
                alt=""
              />
              <div style={{ margin: "auto", fontStyle: "italic" }}>
                {arrayElement.imgInfo}
              </div>
            </div>
          );
        })}
      </AliceCarousel>
    </div>
  );
};

export function GameSection(props) {
  return (
    props && (
      <div>
        <div className="game-header">{props.gameHeader}</div>
        <div>{GameImageSlider(props.gameImages)}</div>
        <div
          style={{
            fontStyle: "italic",
            fontSize: "1.5em",
            textAlign: "center",
            marginBottom: "1em",
          }}
        >
          Hover to focus on image. Use arrows or bullets to scroll through.
        </div>
        <div className="game-text">{props.gameText}</div>
        <MyBackButton />
      </div>
    )
  );
}

export const FindGameSection = (array, name) => {
  return GameSection(
    array.find((element) => {
      return element.gameTitle === name;
    })
  );
};
