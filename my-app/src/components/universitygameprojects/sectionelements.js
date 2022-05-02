import React from "react";
import "./universitygameprojects.scss";
import ImageSlider from "react-simple-image-slider";

const RagnarokImages = [
  { url: require("../../assets/images/digipengampictures/ragnarok1.png") },
  { url: require("../../assets/images/digipengampictures/ragnarok2.png") },
  { url: require("../../assets/images/digipengampictures/ragnarok3.png") },
];

export const RagnarokElement = (
  <div className="image-slider">
    <ImageSlider
      width={100}
      height={100}
      showBullets={true}
      images={RagnarokImages}
    />
  </div>
);
