///entry point///
import React from 'react';
import ReactDOM from 'react-dom/client'
import "./index.css"
import Homepage from "./homepage.js"//render homepage
import { BrowserRouter , Routes,Route} from 'react-router-dom';
import Game from "./components/tictactoe/index.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<BrowserRouter>
    <Routes>
        <Route path="/" element= {<Homepage/>}/>
        <Route path="/components/tictactoe" element= {<Game/>}/>
    </Routes>
</BrowserRouter> );




