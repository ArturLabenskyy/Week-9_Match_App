import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./styles/style.css";
import Home from "./pages/Home.page";
import Game from "./pages/Game.page";
import GameOver from "./pages/GameOver.page";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/game",
        element: <Game />,
    },
    {
        path: "/game-over",
        element: <GameOver />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
