import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Wrapped from "../styles/styled/game.styled";
import Navbar from "../components/Navbar";
import { QUESTION_DATA as questions } from "../data/data";
import { ANSWER_DATA as answers } from "../data/data";

const Game = () => {
    const navigate = useNavigate();
    let [score, setScore] = useState(0);
    const [answer, setAnswer] = useState(
        answers[Math.floor(Math.random() * 11)]
    );
    const [quest, setQuest] = useState(
        questions[Math.floor(Math.random() * 11)]
    );

    let [counter, setCounter] = useState(0);

    const gameOver = () => {
        if (score >= 10) navigate("/game-over");
    };

    const noClick = () => {
        if (counter >= 3) {
            const num = Math.floor(Math.random() * 11);
            setAnswer(answers[num]);
            setQuest(questions[num]);
        } else {
            setAnswer(answers[Math.floor(Math.random() * 11)]);
            setQuest(questions[Math.floor(Math.random() * 11)]);
            setCounter((counter += 1));
        }
        gameOver();
    };

    const yesClick = () => {
        if (answer.id === quest.id) {
            setScore((score += 1));
            setCounter(0);
            setAnswer(answers[Math.floor(Math.random() * 11)]);
            setQuest(questions[Math.floor(Math.random() * 11)]);
        } else if (counter >= 3) {
            const num = Math.floor(Math.random() * 11);
            setCounter(0);
            setAnswer(answers[num]);
            setQuest(questions[num]);
        } else {
            setAnswer(answers[Math.floor(Math.random() * 11)]);
            setQuest(questions[Math.floor(Math.random() * 11)]);
            setCounter((counter += 1));
        }
        gameOver();
    };

    return (
        <Wrapped className="game-page">
            <Navbar />
            <div className="game-play">
                <h1>Score: {score}</h1>
                <img src={answer.url} alt="" />
                <h1>{quest.question}</h1>
                <div className="buttons">
                    <button onClick={noClick}>NO!</button>
                    <button onClick={yesClick}>YES!</button>
                </div>
            </div>
        </Wrapped>
    );
};

export default Game;
