import React, { useState } from 'react';
import '../App.css';

const EasyCyberSecurity = () => {
  const [isCorrectClick, setIsCorrectClick] = useState({});
  const [isIncorrectClicked, setIsIncorrectClicked] = useState({});
  const [disabled, setDisabled] = useState({});
  const [answeredQuestions, setAnsweredQuestions] = useState({});

  const correctAnswers = {
    q1: 'q1_a1',
    q2: 'q2_a2',
    q3: 'q3_a1',
    q4: 'q4_a2',
    q5: 'q5_a3',
  };

  const explanations = {
    q1: "Cybersecurity refers to protecting all aspects of the digital world — devices, networks, and data — from threats and attacks.",
    q2: "Using the same password everywhere is risky. If one account is compromised, others become vulnerable.",
    q3: "Untrusted downloads may contain malware, viruses, or spyware that can compromise your device or data.",
    q4: "A firewall monitors and filters incoming and outgoing network traffic to block unauthorized access.",
    q5: "VPN stands for Virtual Private Network — it encrypts your internet connection to secure your data and privacy.",
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

  const renderExplanation = (questionId) => {
    if (answeredQuestions[questionId]) {
      return <p className="explanation-text"><em>{explanations[questionId]}</em></p>;
    }
    return null;
  };

  return (
    <div>
      <h1>Easy Cybersecurity Quiz</h1>
      <h5>Rules:</h5>
      <p>You will be asked five questions.</p>
      <p>You will be given up to four potential answers, with only one being correct.</p>
      <p>You only get one chance to answer.</p>
      <br />
      <div>
        <h5>Question 1:</h5>
        <p>What is cybersecurity?</p>
        <button className={`answer-button ${getButtonClass('q1', 'q1_a1')}`} onClick={() => handleCorrectClick('q1_a1')} disabled={disabled.q1}>The protection of all things within the digital world, including, but not limited to, computers, smartphones and networks.</button>
        <button className={`answer-button ${getButtonClass('q1', 'q1_a2')}`} onClick={() => handleIncorrectClick('q1_a2')} disabled={disabled.q1}>Protecting a service user's information.</button>
        <button className={`answer-button ${getButtonClass('q1', 'q1_a3')}`} onClick={() => handleIncorrectClick('q1_a3')} disabled={disabled.q1}>The process of testing for weaknesses.</button>
        <button className={`answer-button ${getButtonClass('q1', 'q1_a4')}`} onClick={() => handleIncorrectClick('q1_a4')} disabled={disabled.q1}>Developing a new piece of software for use across the business.</button>
        {renderExplanation('q1')}
      </div>
      <div>
        <h5>Question 2:</h5>
        <p>Should you use the same password for everything?</p>
        <button className={`answer-button ${getButtonClass('q2', 'q2_a1')}`} onClick={() => handleIncorrectClick('q2_a1')} disabled={disabled.q2}>Yes.</button>
        <button className={`answer-button ${getButtonClass('q2', 'q2_a2')}`} onClick={() => handleCorrectClick('q2_a2')} disabled={disabled.q2}>No.</button>
        {renderExplanation('q2')}
      </div>
      <div>
        <h5>Question 3:</h5>
        <p>Why shouldn't you download from untrusted sources?</p>
        <button className={`answer-button ${getButtonClass('q3', 'q3_a1')}`} onClick={() => handleCorrectClick('q3_a1')} disabled={disabled.q3}>The download may contain malware, including viruses or spyware.</button>
        <button className={`answer-button ${getButtonClass('q3', 'q3_a2')}`} onClick={() => handleIncorrectClick('q3_a2')} disabled={disabled.q3}>Untrusted sources usually have faster downloads.</button>
        <button className={`answer-button ${getButtonClass('q3', 'q3_a3')}`} onClick={() => handleIncorrectClick('q3_a3')} disabled={disabled.q3}>Because doing so may prevent a company, such as McAfee, from taking money for the same service.</button>
        <button className={`answer-button ${getButtonClass('q3', 'q3_a4')}`} onClick={() => handleIncorrectClick('q3_a4')} disabled={disabled.q3}>There is no such thing as untrusted sources.</button>
        {renderExplanation('q3')}
      </div>
      <div>
        <h5>Question 4:</h5>
        <p>In cyber security terms, what is a firewall?</p>
        <button className={`answer-button ${getButtonClass('q4', 'q4_a1')}`} onClick={() => handleIncorrectClick('q4_a1')} disabled={disabled.q4}>A literal wall of fire.</button>
        <button className={`answer-button ${getButtonClass('q4', 'q4_a2')}`} onClick={() => handleCorrectClick('q4_a2')} disabled={disabled.q4}>A piece of software to regulate traffic on a network and/or system to aid in protecting against unauthorised access.</button>
        <button className={`answer-button ${getButtonClass('q4', 'q4_a3')}`} onClick={() => handleIncorrectClick('q4_a3')} disabled={disabled.q4}>A software program that deletes viruses automatically.</button>
        <button className={`answer-button ${getButtonClass('q4', 'q4_a4')}`} onClick={() => handleIncorrectClick('q4_a4')} disabled={disabled.q4}>A method of hunting for vulnerabilities and bugs.</button>
        {renderExplanation('q4')}
      </div>
      <div>
        <h5>Question 5:</h5>
        <p>What does VPN stand for?</p>
        <button className={`answer-button ${getButtonClass('q5', 'q5_a1')}`} onClick={() => handleIncorrectClick('q5_a1')} disabled={disabled.q5}>Visual Public Nuisance</button>
        <button className={`answer-button ${getButtonClass('q5', 'q5_a2')}`} onClick={() => handleIncorrectClick('q5_a2')} disabled={disabled.q5}>Virtual Portfolio Notification</button>
        <button className={`answer-button ${getButtonClass('q5', 'q5_a3')}`} onClick={() => handleCorrectClick('q5_a3')} disabled={disabled.q5}>Virtual Private Network</button>
        <button className={`answer-button ${getButtonClass('q5', 'q5_a4')}`} onClick={() => handleIncorrectClick('q5_a4')} disabled={disabled.q5}>Virtual Public Network</button>
        {renderExplanation('q5')}
      </div>
    </div>
  );
};

export default EasyCyberSecurity;
