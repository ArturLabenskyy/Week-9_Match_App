import React from "react";

import Wrapped from "../styles/styled/gameOver.styled";
import Navbar from "../components/Navbar";

const GameOver = () => {
    return (
        <Wrapped>
            <Navbar />
            <h1>
                Congratulations!!!! <br />
                <br /> You answered right 10 times!!!
            </h1>
        </Wrapped>
    );
};

export default GameOver;
