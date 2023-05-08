import React, { useState, useEffect } from "react";
import Navbar from '../../components/Navbar'
import InfoBot from '../../components/InfoBot'
import { useNavigate } from 'react-router-dom'
import Map from '../assets/images/map/map.png'
import firebase from '../../components/firebase'
const Level2 = () => {
    const userID = firebase.auth().currentUser.uid;
    const levels = firebase.firestore().collection('users').doc(userID);
    const [isUnlocked, setIsUnlocked] = useState(false);
    const nav = useNavigate()
    const [gearPositions, setGearPositions] = useState({
        gearOne: 0,
        gearTwo: 0,
        gearThree: 0,
    });
    const [leverPositions, setLeverPositions] = useState({
        leverOne: false,
        leverTwo: false,
    });
    const [timer, setTimer] = useState(60);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prevTime) => prevTime - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (timer === 0 && !isUnlocked) {
            alert("Time's up! You lose.");
        }
    }, [timer]);

    const handleGearRotation = (gear) => {
        let newPosition = gearPositions[gear] + 1;
        if (newPosition > 11) {
            newPosition = 0;
        }
        setGearPositions({ ...gearPositions, [gear]: newPosition });
    };

    const handleLeverSwitch = (lever) => {
        setLeverPositions({ ...leverPositions, [lever]: !leverPositions[lever] });
    };

    const handleUnlock = () => {
        if (
            gearPositions.gearOne === 2 &&
            gearPositions.gearTwo === 7 &&
            gearPositions.gearThree === 11 &&
            leverPositions.leverOne &&
            !leverPositions.leverTwo
        ) {
            setIsUnlocked(true);
        } else {
            alert("The door remains locked.");
        }
    };
    return (
        <div className="level2-main">
            {isUnlocked ? (
                <div>
                    <h2>Congratulations! </h2>

                    <p>You have unlocked the door!</p>
                    <button onClick={() => {
                        levels.update({
                            level: 2,
                            score: 8
                        })
                        nav('/level3')
                    }
                    }

                    >
                        Next Level {`>>`}
                    </button>
                </div>
            ) : (
                <div className="gear-main">
                    <h2>Level 2: Problem Solving</h2>
                    <p>Unlock the door by manipulating the gears and levers.</p>
                    <p>You have {timer} seconds remaining to unlock the door.</p>
                    <div className="gear-container">
                        <div className={`gear gear-1 position-${gearPositions.gearOne}`}>
                            A ({gearPositions.gearOne})
                        </div>
                        <div className={`gear gear-2 position-${gearPositions.gearTwo}`}>
                            B ({gearPositions.gearTwo})
                        </div>
                        <div className={`gear gear-3 position-${gearPositions.gearThree}`}>
                            C ({gearPositions.gearThree})
                        </div>
                    </div>
                    <div className="lever-container">
                        <div
                            className={`lever lever-1 ${leverPositions.leverOne ? "active" : ""}`}
                            onClick={() => handleLeverSwitch("leverOne")}
                        >
                            D ({leverPositions.leverOne ? "Unlocked" : "Locked"})
                        </div>
                        <div
                            className={`lever lever-2 ${leverPositions.leverTwo ? "active" : ""}`}
                            onClick={() => handleLeverSwitch("leverTwo")}
                        >
                            E ({leverPositions.leverTwo ? "Locked" : "Unclocked"})
                        </div>
                    </div>
                    <div className="button-container">
                        <button onClick={() => handleGearRotation("gearOne")}>Rotate A</button>
                        <button onClick={() => handleGearRotation("gearTwo")}>Rotate B</button>
                        <button onClick={() => handleGearRotation("gearThree")}>
                            Rotate C
                        </button>
                    </div>
                    <div className="button-container-2">
                        <button onClick={() => handleUnlock()}>Unlock door</button>
                    </div>
                </div>
            )}
            <InfoBot
                title="Level 2: Gear Puzzle"
                desc="To unlock the door, manipulate the gears/levers A, B, C, D, and E. A, B, and C are at 0 and D is locked. 
             Here are the clues: Set A to the smallest prime, set B to the forth prime number, and set C to the smallest 2-digit palindrome. D and E are levers. D is locked and is unlocked by tapping it."
            />
        </div>
    );
};

export default Level2

// import React from 'react'
// import Navbar from '../../components/Navbar'
// import InfoBot from '../../components/InfoBot'
// import Map from '../assets/images/map/map.png'

// const Level2 = () => {
//     return (
//         <div className='container'>
//             <Navbar />
//             <div className='map-difference'>
//                 <div className='map'>
//                     <img src={Map} alt='Map'/>
//                     <img src={Map} alt='Map'/>
//                 </div>
//             </div>
//             <div className='check1'></div>
//             <div className='check2'></div>
//             <div className='check3'></div>
//             <div className='check4'></div>
//             <div className='check5'></div>
//             <div className='check6'></div>
//             <InfoBot
//                 title="Level 2: Problem Solving"
//                 desc="The player is presented with a complex puzzle that requires them to think critically and creatively. The puzzle consists of a series of interconnected gears and levers that the player must manipulate to unlock a door leading to the next level."
//             />
//         </div>
//     )
// }

// export default Level2