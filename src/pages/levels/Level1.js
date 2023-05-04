import React, { useEffect, useState } from 'react'
import InfoBot from '../../components/InfoBot'
import Map1 from '../assets/images/map/map1.png'
import Map2 from '../assets/images/map/map2.png'
import Map3 from '../assets/images/map/map3.png'
import Map4 from '../assets/images/map/map4.png'
import Map5 from '../assets/images/map/map5.png'
import Map6 from '../assets/images/map/map6.png'
import { useNavigate } from 'react-router-dom'

const Level1 = () => {
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
    const [count6, setCount6] = useState(2)

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

    useEffect(() => {
        if (count1 % 4 === 1 && count2 % 4 === 1 && count3 % 4 === 1 && count4 % 4 === 1 && count5 % 4 === 1 && count6 % 4 === 1) {
            nav('/level2')
        }
    }, [count1, count2, count3, count4, count5, count6])


    return (
        <div className='container'>
            <div className='navbar'>
                <div className='nav-left'></div>
                <div className='nav-right'></div>
            </div>
            <div className='map-container'>
                <div className='map'>
                    <div className='map-row'>
                        <img
                            src={Map1}
                            alt='map1'
                            style={{
                                transform: `rotate(${rotateDeg1}deg)`,
                                transition: "transform 0.5s ease-in-out"
                            }}
                            onClick={handleRotate1}
                        />
                        <img src={Map2} alt='map2'
                            style={{
                                transform: `rotate(${rotateDeg2}deg)`,
                                transition: "transform 0.5s ease-in-out"
                            }}
                            onClick={handleRotate2}
                        />
                        <img src={Map3} alt='map3'
                            style={{
                                transform: `rotate(${rotateDeg3}deg)`,
                                transition: "transform 0.5s ease-in-out"
                            }}
                            onClick={handleRotate3}
                        />
                    </div>
                    <div className='map-row'>
                        <img src={Map4} alt='map4'
                            style={{
                                transform: `rotate(${rotateDeg4}deg)`,
                                transition: "transform 0.5s ease-in-out"
                            }}
                            onClick={handleRotate4}
                        />
                        <img src={Map5} alt='map5'
                            style={{
                                transform: `rotate(${rotateDeg5}deg)`,
                                transition: "transform 0.5s ease-in-out"
                            }}
                            onClick={handleRotate5}
                        />
                        <img src={Map6} alt='map6'
                            style={{
                                transform: `rotate(${rotateDeg6}deg)`,
                                transition: "transform 0.5s ease-in-out"
                            }}
                            onClick={handleRotate6}
                        />
                    </div>
                </div>
            </div>
            <InfoBot
                title={"Level 1: Attention to Detail"}
                desc={"The player is presented with a series of photographs of the expedition campsite, where they must find a hidden object in each photo by paying attention to small details. Once all objects are found, the player must use them to solve a puzzle that will provide a clue to the location of the next level"}
            />
        </div>
    )
}

export default Level1