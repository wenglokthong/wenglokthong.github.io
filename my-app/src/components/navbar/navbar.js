import "./navbar.css";
import { MyHomeButton, MyBackButton } from "../@helpers/buttons/button";
import { useState } from "react";
import { ContentCollapsible } from "../@helpers/content/contentcollapsible";
import MenuIcon from "@mui/icons-material/Menu";

export const NavBar = () => {
  return (
    <ContentCollapsible
      title={<MenuIcon fontSize="large" />}
      style={{
        position: "absolute",
        bottom: "0%",
        left: "0%",
        position: "fixed",
        zIndex: "1000",
      }}
      contentStyle={{
        position: "absolute",
        bottom: "100%",
      }}
    >
      <MyHomeButton />
      <MyBackButton />
    </ContentCollapsible>
  );
};
