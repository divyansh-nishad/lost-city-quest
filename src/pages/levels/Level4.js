import React, { useState } from "react"
import Navbar from '../../components/Navbar'
import InfoBot from '../../components/InfoBot'
import { useNavigate } from "react-router-dom"
import firebase from '../../components/firebase'

const Level4 = () => {
    const userID = firebase.auth().currentUser.uid;
    const levels = firebase.firestore().collection('users').doc(userID);
    const nav = useNavigate()
    const [step, setStep] = useState(0);
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [input3, setInput3] = useState("");
    const [input4, setInput4] = useState("");
    const [showMessage, setShowMessage] = useState(false);

    const handleInput1 = (e) => {
        setInput1(e.target.value);
        if (e.target.value.toLowerCase() === "needle" || e.target.value.toLowerCase() === "a needle") {
            setStep(step + 1);
        }
    };

    const handleInput2 = (e) => {
        setInput2(e.target.value);
        if (e.target.value.toLowerCase() === "bottle" || e.target.value.toLowerCase() === "a bottle") {
            setStep(step + 1);
        }
    };

    const handleInput3 = (e) => {
        setInput3(e.target.value);
        if (e.target.value.toLowerCase() === "envelope" || e.target.value.toLowerCase() === "an envelope") {
            setStep(step + 1);
        }
    };

    const handleInput4 = (e) => {
        setInput4(e.target.value);
        if (e.target.value.toLowerCase() === "future" || e.target.value.toLowerCase() === "the future") {
            setShowMessage(true);
        }
    };

    return (
        <div className="level2-main">
            <div className="gear-main">
                <h1>Challenging Puzzle</h1>
                {step === 0 && (
                    <div className="question">
                        <p>Question 1: What has a head and a tail, but no body?</p>
                        <input type="text" value={input1} onChange={handleInput1} className="level4-input" placeholder="Enter your answer..." />
                        <br />
                        <p> Clue: It's a common tool used for sewing.</p>
                    </div>
                )}
                {step === 1 && (
                    <div className="question">
                        <p>Question 2: What has a neck but no head, and wears a cap?</p>
                        <input type="text" value={input2} onChange={handleInput2} className="level4-input" placeholder="Enter your answer..." />
                        <br />
                        <p> Clue: It's commonly used for containing liquids.</p>
                    </div>
                )}
                {step === 2 && (
                    <div className="question">
                        <p>What starts with an "E", ends with an "E", but only contains one letter?</p>
                        <input type="text" value={input3} onChange={handleInput3} className="level4-input" placeholder="Enter your answer..." />
                        <br />
                        <p> Clue: The item is usually made of paper and is frequently seen in mailboxes.</p>
                    </div>
                )}
                {step === 3 && (
                    <div className="question">
                        <p>What is always in front of you but can't be seen?</p>
                        <input type="text" value={input4} onChange={handleInput4} className="level4-input" placeholder="Enter your answer..." />
                        <br />
                        <p> Clue: It's a concept that represents the time ahead of us.</p>
                    </div>
                )}
                {showMessage && (
                    <div className="question">
                        <p style={{ color: "green" }}>
                            Congratulations! You have solved the challenging puzzle!
                        </p>
                        <button onClick={() => {
                            levels.update({
                                level: 4,
                                score: 16
                            })
                            nav('/level6')
                        }
                        }

                        >
                            Next Level {`>>`}
                        </button>
                    </div>
                )
                }
            </div>
            <InfoBot
                title={"Level 4: Object Recognition"}
                desc={"You find yourself in a dark room filled with various objects. Your task is to identify a specific object based on a series of clues and hints provided. The challenge is to use your perseverance and problem-solving skills to determine the correct object and progress to the next level."}
            />


        </div>
    )
}

export default Level4