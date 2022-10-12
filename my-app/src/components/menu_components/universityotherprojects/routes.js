import { Routes, Route } from "react-router-dom";
import { Des396 } from "./des396/des396";
import { Des396A1 } from "./des396/a1";
import { Des396A2 } from "./des396/a2";
import { Des396A3 } from "./des396/a3";
import { UniversityOtherProjectsIntro } from "./intro";

export const routes = (
  <Routes>
    <Route exact path="intro" element={<UniversityOtherProjectsIntro />} />
    <Route exact path="des396" element={<Des396 />} />
    <Route exact path="des396a1" element={<Des396A1 />} />
    <Route exact path="des396a2" element={<Des396A2 />} />
    <Route exact path="des396a3" element={<Des396A3 />} />
  </Routes>
);
