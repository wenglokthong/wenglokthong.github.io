import "./navbar.css";
import { MyHomeButton, MyBackButton } from "../@helpers/buttons/button";
import { ContentCollapsible } from "../@helpers/content/contentcollapsible";
import MenuIcon from "@mui/icons-material/Menu";

export const NavBar = () => {
  return (
    <ContentCollapsible
      title={<MenuIcon fontSize="large" />}
      style={{
        position: "fixed",
        bottom: "0%",
        left: "0%",
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
