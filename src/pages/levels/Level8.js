import React, { useState } from 'react';
import InfoBot from '../../components/InfoBot';
import firebase from '../../components/firebase'
import { useNavigate } from 'react-router-dom';

const questions = [
    {
        question: 'What is the most effective way to handle a conflict with a co-worker?',
        options: ['Avoid the person and the situation', 'Confront the person directly', 'Try to find a compromise or solution together', 'Complain about the person to a supervisor'],
        answer: 'Try to find a compromise or solution together'
    },
    {
        question: 'When working on a group project, what is the most important thing to ensure success?',
        options: ['Getting credit for your work', 'Being the most knowledgeable person in the group', 'Being a good listener and team player', 'Taking charge and making all the decisions'],
        answer: 'Being a good listener and team player'
    },
    {
        question: 'What is the most effective way to manage your time?',
        options: ['Work long hours every day to get everything done', 'Prioritize tasks and focus on the most important ones first', 'Multitask to get more done at once', 'Procrastinate and leave everything until the last minute'],
        answer: 'Prioritize tasks and focus on the most important ones first'
    },
    {
        question: 'How do you handle a situation where you do not know how to do something?',
        options: ['Ignore the task and hope someone else will do it', 'Pretend that you know how to do it and try to figure it out on your own', 'Ask for help from someone who has experience or knowledge in that area', 'Give up and walk away from the situation'],
        answer: 'Ask for help from someone who has experience or knowledge in that area'
    }
];

const Level8 = () => {
    const nav = useNavigate()
    const userID = firebase.auth().currentUser.uid;
    const levels = firebase.firestore().collection('users').doc(userID);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (selectedAnswer) => {
        if (selectedAnswer === questions[currentQuestion].answer) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            alert(`Congratulations! You have completed the game.`)
            levels.update({
                level: 7,
                score: firebase.firestore.FieldValue.increment(score)
            })
            nav('/admin');
            // Quiz is over, show score
            // alert(`Your final score is ${score} out of ${questions.length}`);
        }
    };

    return (
        <div className='level2-main'>
            <div className='gear-main-8'>
                <div className='question'>
                    <h2>{questions[currentQuestion].question}</h2>
                    {questions[currentQuestion].options.map((option) => (
                        <button onClick={() => handleAnswerOptionClick(option)}>{option}</button>
                    ))}
                </div>
                <InfoBot
                    title={"Level 7: Decision Making"}
                    desc={"You finally arrive at the entrance of the lost city of El Dorado. However, the entrance is guarded by a group of hostile mercenaries who demand that you either give up your quest or face the consequences. Your decision-making skills will be put to the test as you weigh the risks and rewards of different choices. Your final decision will determine the outcome of the game."}
                />
            </div>
        </div>
    );
};

export default Level8