import "./navbar.css";
import { MyHomeButton, MyBackButton } from "../buttons/button";

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
  return (
    <div className="navbar">
      <img
        className="navbar-icon"
        src={require("../../assets/images/navbar/tripledots.png")}
        alt=""
      />
      <div>
        {" "}
        <MyHomeButton />
        <MyBackButton />
      </div>
    </div>
  );
};
