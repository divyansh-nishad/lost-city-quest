import React, { useEffect, useState } from 'react'
import firebase from '../../components/firebase'
import InfoBot from '../../components/InfoBot'
import Pipe1 from '../assets/images/pipe/pipe1.jpg'
import Pipe2 from '../assets/images/pipe/pipe2.jpg'
import Pipe3 from '../assets/images/pipe/pipe3.jpg'
import Pipe4 from '../assets/images/pipe/pipe4.jpg'
import Pipe5 from '../assets/images/pipe/pipe5.jpg'
import Pipe6 from '../assets/images/pipe/pipe6.jpg'
import Pipe7 from '../assets/images/pipe/pipe7.jpg'
import Pipe8 from '../assets/images/pipe/pipe8.jpg'
import Pipe9 from '../assets/images/pipe/pipe9.jpg'
import Pipe10 from '../assets/images/pipe/pipe10.jpg'
import Pipe11 from '../assets/images/pipe/pipe11.jpg'
import Pipe12 from '../assets/images/pipe/pipe12.jpg'
import Pipe13 from '../assets/images/pipe/pipe13.jpg'
import Pipe14 from '../assets/images/pipe/pipe14.jpg'
import Pipe15 from '../assets/images/pipe/pipe15.jpg'
import Pipe16 from '../assets/images/pipe/pipe16.jpg'
import Pipe17 from '../assets/images/pipe/pipe17.jpg'
import Pipe18 from '../assets/images/pipe/pipe18.jpg'
import Pipe19 from '../assets/images/pipe/pipe19.jpg'
import Pipe20 from '../assets/images/pipe/pipe20.jpg'
import Pipe21 from '../assets/images/pipe/pipe21.jpg'
import Pipe22 from '../assets/images/pipe/pipe22.jpg'
import Pipe23 from '../assets/images/pipe/pipe23.jpg'
import Pipe24 from '../assets/images/pipe/pipe24.jpg'
import Pipe25 from '../assets/images/pipe/pipe25.jpg'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'

const Level7 = () => {
    const userID = firebase.auth().currentUser.uid;
    const levels = firebase.firestore().collection('users').doc(userID);
    const [rotateDeg1, setRotateDeg1] = useState(90);
    const [count1, setCount1] = useState(2)
    const [rotateDeg2, setRotateDeg2] = useState(180);
    const [count2, setCount2] = useState(3)
    const [rotateDeg3, setRotateDeg3] = useState(90);
    const [count3, setCount3] = useState(2)
    const [rotateDeg4, setRotateDeg4] = useState(270);
    const [count4, setCount4] = useState(4)
    const [rotateDeg5, setRotateDeg5] = useState(0);
    const [count5, setCount5] = useState(1)
    const [rotateDeg6, setRotateDeg6] = useState(90);
    const [count6, setCount6] = useState(2);
    const [rotateDeg7, setRotateDeg7] = useState(180);
    const [count7, setCount7] = useState(3);
    const [rotateDeg8, setRotateDeg8] = useState(90);
    const [count8, setCount8] = useState(2);
    const [rotateDeg9, setRotateDeg9] = useState(270);
    const [count9, setCount9] = useState(4);
    const [rotateDeg10, setRotateDeg10] = useState(0);
    const [count10, setCount10] = useState(1);
    const [rotateDeg11, setRotateDeg11] = useState(90);
    const [count11, setCount11] = useState(2);
    const [rotateDeg12, setRotateDeg12] = useState(180);
    const [count12, setCount12] = useState(3);
    const [rotateDeg13, setRotateDeg13] = useState(90);
    const [count13, setCount13] = useState(2);
    const [rotateDeg14, setRotateDeg14] = useState(270);
    const [count14, setCount14] = useState(4);
    const [rotateDeg15, setRotateDeg15] = useState(0);
    const [count15, setCount15] = useState(1);
    const [rotateDeg16, setRotateDeg16] = useState(90);
    const [count16, setCount16] = useState(2);
    const [rotateDeg17, setRotateDeg17] = useState(180);
    const [count17, setCount17] = useState(3);
    const [rotateDeg18, setRotateDeg18] = useState(90);
    const [count18, setCount18] = useState(2);
    const [rotateDeg19, setRotateDeg19] = useState(270);
    const [count19, setCount19] = useState(4);
    const [rotateDeg20, setRotateDeg20] = useState(0);
    const [count20, setCount20] = useState(1);
    const [rotateDeg21, setRotateDeg21] = useState(90);
    const [count21, setCount21] = useState(2);
    const [rotateDeg22, setRotateDeg22] = useState(180);
    const [count22, setCount22] = useState(3);
    const [rotateDeg23, setRotateDeg23] = useState(90);
    const [count23, setCount23] = useState(2);
    const [rotateDeg24, setRotateDeg24] = useState(270);
    const [count24, setCount24] = useState(4);
    const [rotateDeg25, setRotateDeg25] = useState(0);
    const [count25, setCount25] = useState(1);



    const nav = useNavigate()

    const handleRotate1 = () => {
        setRotateDeg1(rotateDeg1 + 90);
        setCount1(count1 + 1)
    };
    const handleRotate2 = () => {
        setRotateDeg2(rotateDeg2 + 90);
        setCount2(count2 + 1)
    };
    const handleRotate3 = () => {
        setRotateDeg3(rotateDeg3 + 90);
        setCount3(count3 + 1)
    };
    const handleRotate4 = () => {
        setRotateDeg4(rotateDeg4 + 90);
        setCount4(count4 + 1)
    };
    const handleRotate5 = () => {
        setRotateDeg5(rotateDeg5 + 90);
        setCount5(count5 + 1)
    };
    const handleRotate6 = () => {
        setRotateDeg6(rotateDeg6 + 90);
        setCount6(count6 + 1)
    };
    const handleRotate7 = () => {
        setRotateDeg7(rotateDeg7 + 90);
        setCount7(count7 + 1);
    };
    const handleRotate8 = () => {
        setRotateDeg8(rotateDeg8 + 90);
        setCount8(count8 + 1);
    };
    const handleRotate9 = () => {
        setRotateDeg9(rotateDeg9 + 90);
        setCount9(count9 + 1);
    };
    const handleRotate10 = () => {
        setRotateDeg10(rotateDeg10 + 90);
        setCount10(count10 + 1);
    };
    const handleRotate11 = () => {
        setRotateDeg11(rotateDeg11 + 90);
        setCount11(count11 + 1);
    };
    const handleRotate12 = () => {
        setRotateDeg12(rotateDeg12 + 90);
        setCount12(count12 + 1);
    };
    const handleRotate13 = () => {
        setRotateDeg13(rotateDeg13 + 90);
        setCount13(count13 + 1);
    };
    const handleRotate14 = () => {
        setRotateDeg14(rotateDeg14 + 90);
        setCount14(count14 + 1);
    };
    const handleRotate15 = () => {
        setRotateDeg15(rotateDeg15 + 90);
        setCount15(count15 + 1);
    };
    const handleRotate16 = () => {
        setRotateDeg16(rotateDeg16 + 90);
        setCount16(count16 + 1);
    };
    const handleRotate17 = () => {
        setRotateDeg17(rotateDeg17 + 90);
        setCount17(count17 + 1);
    };
    const handleRotate18 = () => {
        setRotateDeg18(rotateDeg18 + 90);
        setCount18(count18 + 1);
    };
    const handleRotate19 = () => {
        setRotateDeg19(rotateDeg19 + 90);
        setCount19(count19 + 1);
    };
    const handleRotate20 = () => {
        setRotateDeg20(rotateDeg20 + 90);
        setCount20(count20 + 1);
    };
    const handleRotate21 = () => {
        setRotateDeg21(rotateDeg21 + 90);
        setCount21(count21 + 1);
    };
    const handleRotate22 = () => {
        setRotateDeg22(rotateDeg22 + 90);
        setCount22(count22 + 1);
    };
    const handleRotate23 = () => {
        setRotateDeg23(rotateDeg23 + 90);
        setCount23(count23 + 1);
    };
    const handleRotate24 = () => {
        setRotateDeg24(rotateDeg24 + 90);
        setCount24(count24 + 1);
    };
    const handleRotate25 = () => {
        setRotateDeg25(rotateDeg25 + 90);
        setCount25(count25 + 1);
    };

    useEffect(() => {
        if (count1 % 4 === 1 && count2 % 4 === 1 && count3 % 4 === 1 && count4 % 4 === 1 && count5 % 4 === 1 && (count6 % 4 === 1 || count6 % 4 === 3) && (count7 % 4 === 1 || count7 % 4 === 3) && count8 % 4 === 1 && count9 % 4 === 1 && (count10 % 4 === 1 || count10 % 4 === 3) && (count11 % 4 === 1 || count11 % 4 === 3) && (count12 % 4 === 1 || count12 % 4 === 3) && count13 % 4 === 1 && count14 % 4 === 1 && count15 % 4 === 1 && (count16 % 4 === 1 || count16 % 4 === 3) && count17 % 4 === 1 && count18 % 4 === 1 && count19 % 4 === 1 && count20 % 4 === 1 && count21 % 4 === 1 && count22 % 4 === 1 && count23 % 4 === 1 && (count24 % 4 === 1 || count24 % 4 === 3) && count25 % 4 === 1) {
            // if completed the level then alert after 3 seconds and navigate to next level
            setTimeout(() => {
                alert('Congratulations! You have completed this level! Move on to the next level!');
                levels.update({
                    level: 6,
                    score: firebase.firestore.FieldValue.increment(4)
                })
               nav('/level8');
            }, 1000);
        }
    }, [count1, count2, count3, count4, count5, count6, count7, count8, count9, count10, count11, count12, count13, count14, count15, count16, count17, count18, count19, count20, count21, count22, count23, count24, count25])


    return (
        <div className='level2-main'>
            <Navbar />
            <div className='pipe-container'>
                <div className='pipe'>
                    <div className='pipe-row'>
                        <img
                            src={Pipe1}
                            alt='pipe1'
                            style={{
                                transform: `rotate(${rotateDeg1}deg)`,
                                transition: "transform 0.5s ease-in-out"
                            }}
                            onClick={handleRotate1}
                        />
                        <img src={Pipe2} alt='pipe2'
                            style={{
                                transform: `rotate(${rotateDeg2}deg)`,
                                transition: "transform 0.5s ease-in-out"
                            }}
                            onClick={handleRotate2}
                        />
                        <img src={Pipe3} alt='pipe3'
                            style={{
                                transform: `rotate(${rotateDeg3}deg)`,
                                transition: "transform 0.5s ease-in-out"
                            }}
                            onClick={handleRotate3}
                        />
                        <img src={Pipe4} alt='pipe4'
                            style={{
                                transform: `rotate(${rotateDeg4}deg)`,
                                transition: "transform 0.5s ease-in-out"
                            }}
                            onClick={handleRotate4}
                        />
                        <img src={Pipe5} alt='pipe5'
                            style={{
                                transform: `rotate(${rotateDeg5}deg)`,
                                transition: "transform 0.5s ease-in-out"
                            }}
                            onClick={handleRotate5}
                        />
                    </div>
                    <div className='pipe-row'>

                        <img src={Pipe6} alt='pipe6'
                            style={{
                                transform: `rotate(${rotateDeg6}deg)`,
                                transition: "transform 0.5s ease-in-out"
                            }}
                            onClick={handleRotate6}
                        />
                        <img src={Pipe7} alt='pipe7'
                            style={{
                                transform: `rotate(${rotateDeg7}deg)`,
                                transition: "transform 0.5s ease-in-out"
                            }}
                            onClick={handleRotate7}
                        />
                        <img src={Pipe8} alt='pipe8'
                            style={{
                                transform: `rotate(${rotateDeg8}deg)`,
                                transition: "transform 0.5s ease-in-out"
                            }}
                            onClick={handleRotate8}
                        />
                        <img src={Pipe9} alt='pipe9'
                            style={{
                                transform: `rotate(${rotateDeg9}deg)`,
                                transition: "transform 0.5s ease-in-out"
                            }}
                            onClick={handleRotate9}
                        />
                        <img src={Pipe10} alt='pipe10'
                            style={{
                                transform: `rotate(${rotateDeg10}deg)`,
                                transition: "transform 0.5s ease-in-out"
                            }}
                            onClick={handleRotate10}
                        />
                    </div>
                    <div className='pipe-row'>
                        <img src={Pipe11} alt='pipe11'
                            style={{
                                transform: `rotate(${rotateDeg11}deg)`,
                                transition: "transform 0.5s ease-in-out"
                            }}
                            onClick={handleRotate11}
                        />
                        <img src={Pipe12} alt='pipe12'
                            style={{
                                transform: `rotate(${rotateDeg12}deg)`,
                                transition: "transform 0.5s ease-in-out"
                            }}
                            onClick={handleRotate12}
                        />
                        <img src={Pipe13} alt='pipe13'
                            style={{
                                transform: `rotate(${rotateDeg13}deg)`,
                                transition: "transform 0.5s ease-in-out"
                            }}
                            onClick={handleRotate13}
                        />
                        <img src={Pipe14} alt='pipe14'
                            style={{
                                transform: `rotate(${rotateDeg14}deg)`,
                                transition: "transform 0.5s ease-in-out"
                            }}
                            onClick={handleRotate14}
                        />
                        <img src={Pipe15} alt='pipe15'
                            style={{
                                transform: `rotate(${rotateDeg15}deg)`,
                                transition: "transform 0.5s ease-in-out"
                            }}
                            onClick={handleRotate15}
                        />
                    </div>
                    <div className='pipe-row'>
                        <img src={Pipe16} alt='pipe16'
                            style={{
                                transform: `rotate(${rotateDeg16}deg)`,
                                transition: "transform 0.5s ease-in-out"
                            }}
                            onClick={handleRotate16}
                        />
                        <img src={Pipe17} alt='pipe17'
                            style={{
                                transform: `rotate(${rotateDeg17}deg)`,
                                transition: "transform 0.5s ease-in-out"
                            }}
                            onClick={handleRotate17}
                        />
                        <img src={Pipe18} alt='pipe18'
                            style={{
                                transform: `rotate(${rotateDeg18}deg)`,
                                transition: "transform 0.5s ease-in-out"
                            }}
                            onClick={handleRotate18}
                        />
                        <img src={Pipe19} alt='pipe19'
                            style={{
                                transform: `rotate(${rotateDeg19}deg)`,
                                transition: "transform 0.5s ease-in-out"
                            }}
                            onClick={handleRotate19}
                        />
                        <img src={Pipe20} alt='pipe20'
                            style={{
                                transform: `rotate(${rotateDeg20}deg)`,
                                transition: "transform 0.5s ease-in-out"
                            }}
                            onClick={handleRotate20}
                        />
                    </div>
                    <div className='pipe-row'>
                        <img src={Pipe21} alt='pipe21'
                            style={{
                                transform: `rotate(${rotateDeg21}deg)`,
                                transition: "transform 0.5s ease-in-out"
                            }}
                            onClick={handleRotate21}
                        />
                        <img src={Pipe22} alt='pipe22'
                            style={{
                                transform: `rotate(${rotateDeg22}deg)`,
                                transition: "transform 0.5s ease-in-out"
                            }}
                            onClick={handleRotate22}
                        />
                        <img src={Pipe23} alt='pipe23'
                            style={{
                                transform: `rotate(${rotateDeg23}deg)`,
                                transition: "transform 0.5s ease-in-out"
                            }}
                            onClick={handleRotate23}
                        />
                        <img src={Pipe24} alt='pipe24'
                            style={{
                                transform: `rotate(${rotateDeg24}deg)`,
                                transition: "transform 0.5s ease-in-out"
                            }}
                            onClick={handleRotate24}
                        />
                        <img src={Pipe25} alt='pipe25'
                            style={{
                                transform: `rotate(${rotateDeg25}deg)`,
                                transition: "transform 0.5s ease-in-out"
                            }}
                            onClick={handleRotate25}
                        />
                    </div>
                </div>
            </div>

            <InfoBot
                title={"Level 6: Pipe Puzzle"}
                desc={"You come across a broken water system that needs to be fixed. Using your adaptability and problem-solving skills, you must connect a series of pipes in the correct sequence to allow the water to flow from one end to the other. This puzzle will require you to think creatively and adjust your approach as the situation changes."}
            />
        </div>

    )
}

export default Level7