import Homepage from "./components/homepage/homepage.js"; //render homepage
import { Routes, Route } from "react-router-dom";

//COMPONENTS
import { Game } from "./components/tictactoe/index.js";
import { AboutMe } from "./components/aboutme/aboutme.js";
import { Playground } from "./components/playground/playground.js";
import { UniversityGameProjects } from "./components/universitygameprojects/universitygameprojects";
import {
  FindGameSection,
  GameSectionArray,
} from "./components/universitygameprojects/sectionelements.js";

const MyRoutes = (
  <div>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/components/tictactoe" element={<Game />} />
      <Route path="/components/aboutme" element={<AboutMe />} />
      <Route path="/components/playground" element={<Playground />} />
      <Route
        path="/components/universitygameprojects/ragnarok"
        element={FindGameSection(GameSectionArray, "Ragnarok")}
      />
      <Route
        path="/components/universitygameprojects/zeroday"
        element={FindGameSection(GameSectionArray, "ZeroDay")}
      />
      <Route
        path="/components/universitygameprojects"
        element={<UniversityGameProjects />}
      />
    </Routes>
  </div>
);

export default MyRoutes;
