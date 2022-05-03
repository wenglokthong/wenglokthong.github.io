import React from "react";
import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";

import { MyButton } from "../buttons/button";
import { RagnarokImages, RagnarokText } from "./content";

import "./universitygameprojects.css";
import "react-alice-carousel/lib/alice-carousel.css";

export const parentRoutePath = "/components/universitygameprojects/";

const backButton = (
  <Link to={parentRoutePath.slice(0, -1)}>{MyButton("Back")}</Link>
);

export const GameSectionArray = [
  {
    gameTitle: "Ragnarok",
    gameHeader: "Year 1: Ragnarok",
    gameImages: RagnarokImages,
    gameText: RagnarokText,
  },
  {
    gameTitle: "ZeroDay",
    gameHeader: "Year 1: ZER0-DAY",
    gameImages: RagnarokImages,
    gameText: RagnarokText,
  },
];

export const GameImageSlider = (images) => {
  return (
    <div className="image-slider">
      <AliceCarousel>
        {images.map((arrayElement, index) => {
          return (
            <img
              key={index}
              className="image-single"
              src={arrayElement.imgSrc}
              alt=""
            />
          );
        })}
      </AliceCarousel>
    </div>
  );
};

export function GameSection(props) {
  return (
    props && (
      <div style={{ fontSize: "12px" }}>
        <div className="game-header">{props.gameHeader}</div>
        <div>{GameImageSlider(props.gameImages)}</div>
        <div className="game-text">{props.gameText}</div>
        {backButton}
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
