import React, { useState } from 'react';
import Navbar from '../../components/Navbar'
import InfoBot from '../../components/InfoBot'
import { useNavigate } from 'react-router-dom'
import firebase from '../../components/firebase'

const symbolKey = {
    '🔥': 'A',
    '🌊': 'B',
    '🌲': 'C',
    '🌞': 'D',
    '🌸': 'E',
    '🌴': 'F',
    '🍁': 'G',
    '🍎': 'H',
    '🍇': 'I',
    '🍋': 'J',
};

const messageSymbols = ['🌊', '🌞', '🍁', '🌴', '🍎', '🍇', '🔥', '🌲', '🌸', '🍋'];

const correctMessage = 'BEDFICHGJA';

const Level3 = () => {
    const userID = firebase.auth().currentUser.uid;
    const levels = firebase.firestore().collection('users').doc(userID);
    const nav = useNavigate()
    const [inputMessage, setInputMessage] = useState('');

    const onInputChange = (event) => {
        setInputMessage(event.target.value.toUpperCase());
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputMessage === correctMessage) {
            alert('Correct message! You have unlocked the next level.');
            levels.update({
                level: 3,
                score: 12
            })
            nav('/level4')
        } else {
            alert('Incorrect message, please try again');
        }
    };

    return (
        <div className='level2-main'>
            <div className='gear-main'>
                <h1>Level 3: Communication</h1>
                <p>Decode the following message by matching symbols to English letters:</p>
                <p>🌊🌸🌞🌴🍇🌲🍎🍁🍋🔥</p>
                <ul>
                    {messageSymbols.map((symbol) => (
                        <li key={symbol}>
                            {symbol} - {symbolKey[symbol]}
                        </li>
                    ))}
                </ul>
                <form onSubmit={onSubmit}>
                    <label htmlFor="inputMessage">Enter the decoded message:</label>
                    <input type="text" id="inputMessage" value={inputMessage} onChange={onInputChange} />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <Navbar />
            <InfoBot
                title={"Level 3: Language Decoding"}
                desc={"You discover an ancient scroll that is written in a lost language. Using your knowledge of symbols and your attention to detail, you must match each symbol to an English letter to decode the message. Once you've decoded the message, you can use it to solve a puzzle that will provide a clue to the location of the next level."}
            />


        </div>
    )
}

export default Level3