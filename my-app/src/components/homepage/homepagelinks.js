import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { useState, useRef } from "react";

import { MyButton } from "../buttons/button";

const StyledLink = styled(Link)`
  display: block;
  margin: 1em;
`;

const HoverContentAnimationStart = keyframes`
0%{opacity:0}
100%{opacity:1}
`;

const HoverContentAnimationEnd = keyframes`
0%{opacity:1}
100%{opacity:0}
`;

const HoverContentStyled = styled.div`
  display: flex;
  height: max-content;
  width: max-content;
  position: absolute;
  background-color: black;
  z-index: 1000;
  left: ${(props) => props.x}px;
  top: ${(props) => props.y + 30}px;
  border-style: solid;
  animation-name: ${(props) =>
    props.isHover ? HoverContentAnimationStart : HoverContentAnimationEnd};
  animation-duration: 1s;
`;

const HomepageLinksStyled = styled.div`
  text-align: center;
`;

const HomePageLinksArray = [
  {
    path: "/components/aboutme",
    buttonName: "About Me",
    hoverContent:
      "about meeeeesdcsdcsdcdscsdcssd  sdsdfsdfsdfsdfsdfsd ds dsfdsfsdfsdfsdsdfsfsdfsssdfsdfsdfsdfsdfsdfsdfsdfsdfdsd sd e",
  },
  {
    path: "/components/universitygameprojects/intro",
    buttonName: "University Game Projects",
    hoverContent: "sxcvvvvvvvvvvvv hu h uh dddddddddddddduh u hu",
  },
  {
    path: "/components/tictactoe",
    buttonName: "Tic Tac Toe",
    hoverContent: "asdasdsadsa as sa sa as sa as as as",
  },
  {
    path: "/components/playground",
    buttonName: "Playground",
    hoverContent: "",
  },
];

const HomepageLink = (props) => {
  const [isHover, setIsHover] = useState(false);
  const [xy, setXY] = useState({ x: 0, y: 0 });
  const myRef = useRef();

  const getPos = () => {
    setXY({ x: myRef.current.offsetLeft, y: myRef.current.offsetTop });
  };

  return (
    <>
      <StyledLink
        ref={myRef}
        to={props.path}
        onMouseEnter={() => {
          setIsHover(!isHover);
          getPos();
        }}
        onMouseLeave={() => setIsHover(false)}
      >
        {MyButton(props.buttonName)}
      </StyledLink>

      {isHover && (
        <HoverContentStyled x={xy.x} y={xy.y} isHover={isHover}>
          {props.hoverContent}
        </HoverContentStyled>
      )}
    </>
  );
};

export const HomepageLinks = () => {
  return (
    <>
      <HomepageLinksStyled>
        Click on one of the buttons to check it out!
        {HomePageLinksArray.map((element) => {
          return <div key={element.path}>{HomepageLink(element)}</div>;
        })}
      </HomepageLinksStyled>
    </>
  );
};
