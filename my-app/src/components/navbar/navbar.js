import "./navbar.css";
import { MyHomeButton, MyBackButton } from "../@helpers/buttons/button";
import { useState } from "react";

//inline 'hover' does not work HMMM
// const navbarStyle = {
//   width: "5vw",
//   height: "5vh",
//   position: "fixed",
//   zIndex: "1000",
//   overflow: "hidden",
//   transition: "all 0.2",

//   "&:hover": {
//     width: "100vw",
//     height: "100vh",
//   },
// };

export const NavBar = () => {
  const [navState, setNavState] = useState(false);

  return (
    <div
      className="navbar"
      onMouseEnter={() => setNavState(true)}
      onMouseLeave={() => setNavState(false)}
    >
      <img
        className="navbar-icon"
        src={require("../../assets/images/navbar/tripledots.png")}
        alt=""
      />

      {navState && (
        <div className="navbar-buttons">
          <MyHomeButton />
          <MyBackButton />
        </div>
      )}
    </div>
  );
};
