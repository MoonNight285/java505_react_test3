import {BrowserRouter, Route, Routes} from "react-router-dom";
import Board from "./homework/Board";
import About from "./homework/About";
import App2 from "./App2";
import NotFound from "./homework/NotFound";
import React from "react";

function MyRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<App2 />} />
                <Route path={"board"} element={<Board />} />
                <Route path={"About"} element={<About />} />
                <Route path={"*"} element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default MyRouter;