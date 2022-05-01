import Homepage from "./components/homepage/homepage.js"; //render homepage
import { Routes, Route } from "react-router-dom";

//COMPONENTS
import { Game } from "./components/tictactoe/index.js";
import { AboutMe } from "./components/aboutme/aboutme.js";
import { Playground } from "./components/playground/playground.js";

const MyRoutes = (
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/components/tictactoe" element={<Game />} />
    <Route path="/components/aboutme" element={<AboutMe />} />
    <Route path="/components/playground" element={<Playground />} />
  </Routes>
);

export default MyRoutes;
