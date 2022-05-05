import { Routes, Route } from "react-router-dom";
import { FindGameSection, GameSectionArray } from "./sectionelements";
import { UniversityGameProjectsIntro } from "./intro";

export const gameroutes = (
  <Routes>
    <Route path="intro" element={<UniversityGameProjectsIntro />} />
    <Route
      path="ragnarok"
      element={FindGameSection(GameSectionArray, "Ragnarok")}
    />
    <Route
      path="zeroday"
      element={FindGameSection(GameSectionArray, "ZeroDay")}
    />
  </Routes>
);
