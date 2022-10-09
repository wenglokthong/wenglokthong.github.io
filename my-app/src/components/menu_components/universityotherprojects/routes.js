import { Routes, Route } from "react-router-dom";
import { Des396 } from "./des396";
import { UniversityOtherProjectsIntro } from "./intro";

export const routes = (
  <Routes>
    <Route path="intro" element={<UniversityOtherProjectsIntro />} />
    <Route path="des396" element={<Des396 />} />
  </Routes>
);
