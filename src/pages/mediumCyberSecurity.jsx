import React, { useState } from 'react';
import '../App.css';

const MediumCyberSecurity = () => {
  const [isCorrectClick, setIsCorrectClick] = useState({});
  const [isIncorrectClicked, setIsIncorrectClicked] = useState({});
  const [disabled, setDisabled] = useState({});
  const [answeredQuestions, setAnsweredQuestions] = useState({});

  const correctAnswers = {
    q1: 'q1_a1',
    q2: 'q2_a4',
    q3: 'q3_a2',
    q4: 'q4_a1',
    q5: 'q5_a4',
  };

  const handleCorrectClick = (key) => {
    const questionId = key.split('_')[0];
    setIsCorrectClick(prev => ({ ...prev, [key]: true }));
    setDisabled(prev => ({ ...prev, [questionId]: true }));
    setAnsweredQuestions(prev => ({ ...prev, [questionId]: true }));
  };

  const handleIncorrectClick = (key) => {
    const questionId = key.split('_')[0];
    setIsIncorrectClicked(prev => ({ ...prev, [key]: true }));
    setDisabled(prev => ({ ...prev, [questionId]: true }));
    setAnsweredQuestions(prev => ({ ...prev, [questionId]: true }));
  };

  const getButtonClass = (questionId, answerKey) => {
    if (isCorrectClick[answerKey]) return 'correct-button-clicked';
    if (answeredQuestions[questionId] && correctAnswers[questionId] === answerKey) return 'correct-button-clicked';
    if (isIncorrectClicked[answerKey]) return 'incorrect-button-clicked';
    return '';
  };

  return (
    <div>
      <h1>Medium Cyber Security Quiz</h1>
      <div>
        <h5>Rules:</h5>
        <p>You will be asked 5 questions.</p>
        <p>You will be given 4 potential answers, with only 1 being correct.</p>
        <p>You only get ONE chance to answer.</p>
      </div>
      <br /><br /><br />
      <div>
        <h5>Question 1:</h5>
        <p>What is the key difference between a White-Hat and a Grey-Hat hacker?</p>
        <button className={`answer-button ${getButtonClass('q1', 'q1_a1')}`} onClick={() => handleCorrectClick('q1_a1')} disabled={disabled.q1}>A white hat hacker is authorised to test a system's or network's security and reports their findings. A grey hat does not have authority nor malicious intent and will often sell their findings to the company</button>
        <button className={`answer-button ${getButtonClass('q1', 'q1_a2')}`} onClick={() => handleIncorrectClick('q1_a2')} disabled={disabled.q1}>A white hat hacker wears a white hat, while a grey hat hacker favours grey hats.</button>
        <button className={`answer-button ${getButtonClass('q1', 'q1_a3')}`} onClick={() => handleIncorrectClick('q1_a3')} disabled={disabled.q1}>White-hat hackers work alone whereas Grey-hat hackers work as part of an organised criminal enterprise.</button>
        <button className={`answer-button ${getButtonClass('q1', 'q1_a4')}`} onClick={() => handleIncorrectClick('q1_a4')} disabled={disabled.q1}>White hat hackers only use hardware to hack whilst the grey hat hackers only use software.</button>
      </div>
      <div>
        <h5>Question 2:</h5>
        <p>What is the name of the attack type where a cyber criminal intercepts and potentially alters the contents of a message sent electronically such as email or sms</p>
        <button className={`answer-button ${getButtonClass('q2', 'q2_a1')}`} onClick={() => handleIncorrectClick('q2_a1')} disabled={disabled.q2}>DDoS attack</button>
        <button className={`answer-button ${getButtonClass('q2', 'q2_a2')}`} onClick={() => handleIncorrectClick('q2_a2')} disabled={disabled.q2}>Phishing Attack</button>
        <button className={`answer-button ${getButtonClass('q2', 'q2_a3')}`} onClick={() => handleIncorrectClick('q2_a3')} disabled={disabled.q2}>Whaling Attack</button>
        <button className={`answer-button ${getButtonClass('q2', 'q2_a4')}`} onClick={() => handleCorrectClick('q2_a4')} disabled={disabled.q2}>Man-In-The-Middle Attack</button>
      </div>
      <div>
        <h5>Question 3:</h5>
        <p>Which of these is NOT considered a method of Multi-Factor Authentication?</p>
        <button className={`answer-button ${getButtonClass('q3', 'q3_a1')}`} onClick={() => handleIncorrectClick('q3_a1')} disabled={disabled.q3}>SMS Code</button>
        <button className={`answer-button ${getButtonClass('q3', 'q3_a2')}`} onClick={() => handleCorrectClick('q3_a2')} disabled={disabled.q3}>Security Questions</button>
        <button className={`answer-button ${getButtonClass('q3', 'q3_a3')}`} onClick={() => handleIncorrectClick('q3_a3')} disabled={disabled.q3}>Authenticator App</button>
        <button className={`answer-button ${getButtonClass('q3', 'q3_a4')}`} onClick={() => handleIncorrectClick('q3_a4')} disabled={disabled.q3}>Biometric Scan</button>
      </div>
      <div>
        <h5>Question 4:</h5>
        <p>What exactly is the function of a vulnerability scanner?</p>
        <button className={`answer-button ${getButtonClass('q4', 'q4_a1')}`} onClick={() => handleCorrectClick('q4_a1')} disabled={disabled.q4}>To identify weaknesses within a system.</button>
        <button className={`answer-button ${getButtonClass('q4', 'q4_a2')}`} onClick={() => handleIncorrectClick('q4_a2')} disabled={disabled.q4}>To identify lost data.</button>
        <button className={`answer-button ${getButtonClass('q4', 'q4_a3')}`} onClick={() => handleIncorrectClick('q4_a3')} disabled={disabled.q4}>To encrypt sensitive files on a network</button>
        <button className={`answer-button ${getButtonClass('q4', 'q4_a4')}`} onClick={() => handleIncorrectClick('q4_a4')} disabled={disabled.q4}>To block unauthorised access.</button>
      </div>
      <div>
        <h5>Question 5:</h5>
        <p>What does the principle of 'least privilege' entail?</p>
        <button className={`answer-button ${getButtonClass('q5', 'q5_a1')}`} onClick={() => handleIncorrectClick('q5_a1')} disabled={disabled.q5}>Giving administrative access to all users</button>
        <button className={`answer-button ${getButtonClass('q5', 'q5_a2')}`} onClick={() => handleIncorrectClick('q5_a2')} disabled={disabled.q5}>Allowing temporary privilege to guests</button>
        <button className={`answer-button ${getButtonClass('q5', 'q5_a3')}`} onClick={() => handleIncorrectClick('q5_a3')} disabled={disabled.q5}>Giving all privileges to a specific role</button>
        <button className={`answer-button ${getButtonClass('q5', 'q5_a4')}`} onClick={() => handleCorrectClick('q5_a4')} disabled={disabled.q5}>Giving users the minimum access necessary to complete their task(s).</button>
      </div>
    </div>
  );
};

export default MediumCyberSecurity;
