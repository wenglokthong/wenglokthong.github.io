import Homepage from "./components/homepage/homepage.js"; //render homepage
import { Routes, Route } from "react-router-dom";

//COMPONENTS
import { NavBar } from "./components/navbar/navbar.js";
import { Game } from "./components/menu_components/tictactoe/index.js";
import { AboutMe } from "./components/menu_components/aboutme/aboutme.js";
import { Playground } from "./components/menu_components/playground/playground.js";
import { UniversityGameProjects } from "./components/menu_components/universitygameprojects/universitygameprojects";
import { UniversityOtherProjects } from "./components/menu_components/universityotherprojects/universityotherproject.js";

const MyRoutes = (
  <>
    <div>
      {/*elements here will render in all pages*/}
      <Routes>
        {" "}
        {/* temp way to render navbar on all other pages EXCEPT home (/). V6 does not support regex*/}
        <Route path="/" element={null} />
        <Route path="*" element={<NavBar />} />
      </Routes>
    </div>
    <div style={{ margin: "2em" }}>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/tictactoe" element={<Game />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/playground/*" element={<Playground />} />
        <Route
          path="/universitygameprojects/*"
          element={<UniversityGameProjects />}
        />
        <Route
          path="/universityotherprojects/*"
          element={<UniversityOtherProjects />}
        />
      </Routes>
    </div>
  </>
);

export default MyRoutes;
