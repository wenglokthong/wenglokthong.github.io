import "./navbar.css";
import { MyHomeButton, MyBackButton } from "../@helpers/buttons/button";
import { useState } from "react";
import { ContentCollapsible } from "../@helpers/content/contentcollapsible";

export const NavBar = () => {
  const [navState, setNavState] = useState(false);

  return (
    <div
      className="navbar"
      onMouseEnter={() => setNavState(true)}
      onMouseLeave={() => setNavState(false)}
    >
      <ContentCollapsible
        title={
          <img
            className="navbar-icon"
            src={require("../../assets/images/navbar/tripledots.png")}
            alt=""
          />
        }
        style={{
          position: "absolute",
          bottom: "0%",
        }}
        contentStyle={{
          position: "absolute",
          bottom: "100%",
        }}
      >
        <MyHomeButton />
        <MyBackButton />
      </ContentCollapsible>

      {/* {navState && (
        <div className="navbar-buttons">
          <MyHomeButton />
          <MyBackButton />
        </div>
      )} */}
    </div>
  );
};
