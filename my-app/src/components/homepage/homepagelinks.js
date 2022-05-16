import { Link } from "react-router-dom";
import styled from "styled-components";
// import { useState, useRef } from "react";

import { ButtonGroupLinks } from "../@helpers/buttons/buttongrouplinks";
import { MyButton } from "../@helpers/buttons/button";

const StyledLink = styled(Link)`
  display: block;
  margin: 1em;
`;

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

const HomepageLinksStyled = styled.div`
  text-align: center;
`;

const HomePageLinksArray = [
  {
    path: "/components/aboutme",
    name: "About Me",
    hoverContent: "",
  },
  {
    path: "/components/universitygameprojects/intro",
    name: "University Game Projects",
    hoverContent: "",
  },
  {
    path: "/components/tictactoe",
    name: "Tic Tac Toe",
    hoverContent: "",
  },
  {
    path: "/components/playground",
    name: "Playground",
    hoverContent: "",
  },
];

const HomepageLink = (props) => {
  // const [isHover, setIsHover] = useState(false);
  // const [isShowHoverContent, setIsShowHoverContent] = useState(false);
  // const [xy, setXY] = useState({ x: 0, y: 0 });
  // const myRef = useRef();

  // const getPos = () => {
  //   setXY({ x: myRef.current.offsetLeft, y: myRef.current.offsetTop });
  // };

  return (
    <>
      <StyledLink
        //ref={myRef}
        to={props.path}
        onMouseEnter={() => {
          // setIsHover(true);
          // if (!isShowHoverContent) setIsShowHoverContent(true);
          // getPos();
        }}
        onMouseLeave={() => {
          //setIsHover(false);
        }}
      >
        <MyButton name={props.buttonName} />
      </StyledLink>

      {/* {isShowHoverContent && (
        <HoverContentStyled
          x={xy.x}
          y={xy.y}
          isHover={isHover}
          onAnimationEnd={() => {
            if (!isHover) setIsShowHoverContent(false);
          }}
        >
          {props.hoverContent}
        </HoverContentStyled>
      )} */}
    </>
  );
};

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
