///entry point///
import { hot } from "react-hot-loader/root";
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import MyRoutes from "./routes.js";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => <HashRouter>{MyRoutes}</HashRouter>;

root.render(<App />);

export default hot(App);
