import { Routes, Route } from "react-router-dom";
import { PlaygroundHomepage } from "./playgroundhomepage";
import { HTMLWidgets } from "./htmlWidgets/htmlWidgets";
import { RandomPicker } from "./randomPicker.js/randomPicker";

export const PlaygroundRoutes = (
  <>
    <Routes>
      <Route path="homepage" element={<PlaygroundHomepage />} />
      <Route path="htmlwidgets" element={<HTMLWidgets />} />
      <Route path="randompicker" element={<RandomPicker />} />
    </Routes>
  </>
);
