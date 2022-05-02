import React from "react";
import "./universitygameprojects.css";
import ImageSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const sliderSettings = {
  dots: true,
  infinite: true,
  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: false,
};

export const RagnarokImages = [
  { imgSrc: require("../../assets/images/digipengampictures/ragnarok1.png") },
  { imgSrc: require("../../assets/images/digipengampictures/ragnarok2.png") },
  { imgSrc: require("../../assets/images/digipengampictures/ragnarok3.png") },
];

export const GameElement = (images) => {
  return (
    <div className="image-slider">
      <ImageSlider {...sliderSettings}>
        {images.map((arrayElement, arrayIndex) => {
          return (
            <div className="image-single" key={arrayIndex}>
              <img src={arrayElement.imgSrc} alt="" />
            </div>
          );
        })}
      </ImageSlider>
    </div>
  );
};
