import { Link } from "react-router-dom";
import styled from "styled-components";
// import { useState, useRef } from "react";

import { ButtonGroupLinks } from "../@helpers/buttons/buttongrouplinks";

// const HoverContentAnimationStart = keyframes`
// 0%{opacity:0}
// 100%{opacity:1}
// `;

// const HoverContentAnimationEnd = keyframes`
// 0%{opacity:1}
// 100%{opacity:0}
// `;

// const HoverContentStyled = styled.div`
//   display: flex;
//   height: max-content;
//   max-width: 50%;
//   overflow-wrap: anywhere;
//   text-align: left;
//   position: absolute;
//   background-color: black;
//   z-index: 1000;
//   left: ${(props) => props.x}px;
//   top: ${(props) => props.y}px;
//   transform: translate(350px, -50px);
//   border-style: solid;
//   animation-name: ${(props) =>
//     props.isHover ? HoverContentAnimationStart : HoverContentAnimationEnd};
//   animation-duration: 0.3s;
//   animation-iteration-count: 1;
//   animation-fill-mode: both;
// `;

const HomePageLinksArray = [
  {
    path: "/aboutme",
    name: "About Me",
    hoverContent: "",
  },
  {
    path: "/universitygameprojects/intro",
    name: "University Game Projects",
    hoverContent: "",
  },
  {
    path: "/universityotherprojects/intro",
    name: "University Other Projects",
    hoverContent: "",
  },
  {
    path: "/tictactoe",
    name: "Tic Tac Toe",
    hoverContent: "",
  },
  {
    path: "/playground/homepage",
    name: "Playground",
    hoverContent: "",
  },
];

export const HomepageLinks = () => {
  return (
    <>
      {/* <HomepageLinksStyled>
        Click on one of the buttons to check it out!
        {HomePageLinksArray.map((element) => {
          return <div key={element.path}>{HomepageLink(element)}</div>;
        })}
      </HomepageLinksStyled> */}

      <ButtonGroupLinks
        buttonArray={HomePageLinksArray}
        settings={{ orientation: "vertical" }}
        style={{ textAlign: "center" }}
        buttonMargin="1em"
      />
    </>
  );
};
