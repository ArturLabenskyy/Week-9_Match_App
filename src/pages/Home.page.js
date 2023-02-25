import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Wrapped from "../styles/styled/homePage.styled";

const Home = () => {
    return (
        <Wrapped className="home-page">
            <Navbar />
            <div className="home-container">
                <p className="rules">
                    Hello, this is a simple MATCH APP. <br />
                    <br />
                    After You press START button, You will see pictures with
                    questions. <br />
                    <br /> You need to give a right answer for what exactly
                    shown in the picture. <br />
                    <br /> Each right answer brings You one score point.
                    <br />
                    <br />
                    The game ends when player score 10 points.
                    <br />
                    <br />
                </p>
                <h2>Let's check Your knowledge of our solar system!!!!!!</h2>
                <Link to="/game">START</Link>
            </div>
        </Wrapped>
    );
};

export default Home;
