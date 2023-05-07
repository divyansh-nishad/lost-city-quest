import React from 'react'
import Navbar from '../../components/Navbar'
import InfoBot from '../../components/InfoBot'
import { useState, useEffect } from "react";

const TIME_LIMIT = 5;


const Level6 = () => {
    const [currentPuzzle, setCurrentPuzzle] = useState(2);
    const [timeRemaining, setTimeRemaining] = useState(TIME_LIMIT);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);

    useEffect(() => {
        let intervalId;

        if (timeRemaining > 0 && !gameOver) {
            intervalId = setInterval(() => setTimeRemaining(timeRemaining - 1), 1000);
        } else if (!gameOver) {
            setTimeRemaining(TIME_LIMIT);
            setScore(score - 1);
        }

        return () => clearInterval(intervalId);
    }, [timeRemaining]);

    const handleAnswer = (event) => {
        event.preventDefault();
        const answer = parseInt(event.target.elements.answer.value);
        if (answer === currentPuzzle * (currentPuzzle + 1)) { // multiplication check
            setCurrentPuzzle(currentPuzzle + 1);
            setScore(score + 1);
        } else {
            setScore(score - 1);
        }
        event.target.elements.answer.value = "";
    };

    useEffect(() => {
        if (currentPuzzle > 7) {
            setGameOver(true);
        } else {
            setTimeRemaining(TIME_LIMIT);
        }
    }, [currentPuzzle]);

    const handleStart = () => {
        setGameStarted(true);
    };

    return (
        <div className="level2-main">
            {!gameStarted && (
                <div className='start-6'>
                    <button onClick={handleStart} >Start Game</button>
                </div>
            )}
            {gameStarted && gameOver ? (
                <div>
                    <h2>Congratulations!</h2>
                    <p>You have completed all the puzzles.</p>
                    <p>Final score: {score}</p>
                </div>
            ) : gameStarted ? (
                <div className='gear-main-6'>
                    
                    <h2>Puzzle {currentPuzzle}</h2>
                    <p>Solve the following multiplication problem:</p>
                    <p>{currentPuzzle} x {currentPuzzle + 1} = ?</p> {/* multiplication problem */}
                    <form onSubmit={handleAnswer}>
                        <input type="number" name="answer" />
                        <button type="submit">Submit</button>
                    </form>
                    <p>Time remaining: {timeRemaining} seconds</p>
                    <p>Score: {score}</p>
                    
                </div>
            ) : null}
            <InfoBot
                title={"Level 5: Time-based Multiplication"}
                desc={"You enter a room with a series of math problems that must be solved within a strict time limit. The challenge is to solve each problem quickly and accurately to uncover a clue that will lead you to the next level. Your time management skills will be crucial in this level."}
            />
        </div>
    );
    // return (
    //     <div className='container'>
    //         <Navbar />
    //         <InfoBot
    //             title={"Level 6: Time Management"}
    //             desc={"The player is presented with a series of puzzles that must be solved within a strict time limit. Each puzzle completed provides a clue to the location of the next puzzle, and failure to complete a puzzle within the time limit will result in a penalty."}
    //         />

    //         <div>Level5</div>
    //     </div>
    // )
}

export default Level6