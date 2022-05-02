import React from "react";
import "./universitygameprojects.css";
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css";

export const RagnarokImages = [
  { imgSrc: require("../../assets/images/digipengampictures/ragnarok1.png") },
  { imgSrc: require("../../assets/images/digipengampictures/ragnarok2.png") },
  { imgSrc: require("../../assets/images/digipengampictures/ragnarok3.png") },
];

export const RagnarokText = 'Ragnarok is an ascii';

export const GameImageSlider = (images) => {
  return (
    <div className="image-slider">
      <AliceCarousel>
        {images.map((arrayElement,index) => {
          return (
              <img key={index} className="image-single" src={arrayElement.imgSrc} alt="" />
          );
        })}
      </AliceCarousel>
    </div>
  );
};
