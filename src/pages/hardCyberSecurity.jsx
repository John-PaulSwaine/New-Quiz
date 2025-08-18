import React, { useState } from 'react';
import '../App.css';

const HardCyberSecurity = () => {
  const [isCorrectClick, setIsCorrectClick] = useState({});
  const [isIncorrectClicked, setIsIncorrectClicked] = useState({});
  const [disabled, setDisabled] = useState({});
  const [answeredQuestions, setAnsweredQuestions] = useState({});

  const correctAnswers = {
    q1: 'q1_a1',
    q2: 'q2_a3',
    q3: 'q3_a4',
    q4: 'q4_a2',
    q5: 'q5_a2',
  };

  const handleCorrectClick = (key) => {
    const questionId = key.split('_')[0];
    setIsCorrectClick((prev) => ({ ...prev, [key]: true }));
    setDisabled((prev) => ({ ...prev, [questionId]: true }));
    setAnsweredQuestions((prev) => ({ ...prev, [questionId]: true }));
  };

  const handleIncorrectClick = (key) => {
    const questionId = key.split('_')[0];
    setIsIncorrectClicked((prev) => ({ ...prev, [key]: true }));
    setDisabled((prev) => ({ ...prev, [questionId]: true }));
    setAnsweredQuestions((prev) => ({ ...prev, [questionId]: true }));
  };

  const getButtonClass = (questionId, answerKey) => {
    if (isCorrectClick[answerKey]) return 'correct-button-clicked';
    if (answeredQuestions[questionId] && correctAnswers[questionId] === answerKey) return 'correct-button-clicked';
    if (isIncorrectClicked[answerKey]) return 'incorrect-button-clicked';
    return '';
  };

  return (
    <div>
      <h1>Hard Cyber Security Quiz</h1>
      <h5>Rules:</h5>
      <p>You will be asked 5 questions.</p>
      <p>You will be given 4 potential answers, with only 1 being correct.</p>
      <p>You only get ONE chance to answer.</p>
      <br />
      
      <div>
        <h5>Question 1:</h5>
        <p>In asymmetric encryption, which key is used to decrypt data encrypted with the public key?</p>
        <button className={`answer-button ${getButtonClass('q1', 'q1_a1')}`} onClick={() => handleCorrectClick('q1_a1')} disabled={disabled.q1}>The Corresponding Private Key</button>
        <button className={`answer-button ${getButtonClass('q1', 'q1_a2')}`} onClick={() => handleIncorrectClick('q1_a2')} disabled={disabled.q1}>The same public key</button>
        <button className={`answer-button ${getButtonClass('q1', 'q1_a3')}`} onClick={() => handleIncorrectClick('q1_a3')} disabled={disabled.q1}> A shared symmetric key</button>
        <button className={`answer-button ${getButtonClass('q1', 'q1_a4')}`} onClick={() => handleIncorrectClick('q1_a4')} disabled={disabled.q1}>A session key</button>
      </div>
      <div>
        <h5>Question 2:</h5>
        <p>In cryptographic terms, what is "nonce"?</p>
        <button className={`answer-button ${getButtonClass('q2', 'q2_a1')}`} onClick={() => handleIncorrectClick('q2_a1')} disabled={disabled.q2}>A hash function</button>
        <button className={`answer-button ${getButtonClass('q2', 'q2_a2')}`} onClick={() => handleIncorrectClick('q2_a2')} disabled={disabled.q2}>A brute-force script</button>
        <button className={`answer-button ${getButtonClass('q2', 'q2_a3')}`} onClick={() => handleCorrectClick('q2_a3')} disabled={disabled.q2}>A number once used</button>
        <button className={`answer-button ${getButtonClass('q2', 'q2_a4')}`} onClick={() => handleIncorrectClick('q2_a4')} disabled={disabled.q2}>A password salt</button>
      </div>
      <div>
        <h5>Question 3:</h5>
        <p>What is the key difference between asymmetric and symmetric encryption?</p>
        <button className={`answer-button ${getButtonClass('q3', 'q3_a1')}`} onClick={() => handleIncorrectClick('q3_a1')} disabled={disabled.q3}>One uses tokens, the other does not</button>
        <button className={`answer-button ${getButtonClass('q3', 'q3_a2')}`} onClick={() => handleIncorrectClick('q3_a2')} disabled={disabled.q3}>Both use same keys</button>
        <button className={`answer-button ${getButtonClass('q3', 'q3_a3')}`} onClick={() => handleIncorrectClick('q3_a3')} disabled={disabled.q3}>Asymmetric is faster</button>
        <button className={`answer-button ${getButtonClass('q3', 'q3_a4')}`} onClick={() => handleCorrectClick('q3_a4')} disabled={disabled.q3}>Symmetric uses one key while asymmetric uses key pairs</button>
      </div>
      <div>
        <h5>Question 4:</h5>
        <p>What does the term "pivoting" mean in post-exploitation?</p>
        <button className={`answer-button ${getButtonClass('q4', 'q4_a1')}`} onClick={() => handleIncorrectClick('q4_a1')} disabled={disabled.q4}>Blocking antivirus</button>
        <button className={`answer-button ${getButtonClass('q4', 'q4_a2')}`} onClick={() => handleCorrectClick('q4_a2')} disabled={disabled.q4}>Using a compromised system to access another network segment</button>
        <button className={`answer-button ${getButtonClass('q4', 'q4_a3')}`} onClick={() => handleIncorrectClick('q4_a3')} disabled={disabled.q4}>Disabling firewalls</button>
        <button className={`answer-button ${getButtonClass('q4', 'q4_a4')}`} onClick={() => handleIncorrectClick('q4_a4')} disabled={disabled.q4}>Crashing services intentionally</button>
      </div>
      <div>
        <h5>Question 5:</h5>
        <p>In digital certificates, what does the CA (Certificate Authority) do?</p>
        <button className={`answer-button ${getButtonClass('q5', 'q5_a1')}`} onClick={() => handleIncorrectClick('q5_a1')} disabled={disabled.q5}>Encrypts Emails</button>
        <button className={`answer-button ${getButtonClass('q5', 'q5_a2')}`} onClick={() => handleCorrectClick('q5_a2')} disabled={disabled.q5}>Verifies and signs digital certificates</button>
        <button className={`answer-button ${getButtonClass('q5', 'q5_a3')}`} onClick={() => handleIncorrectClick('q5_a3')} disabled={disabled.q5}>Creates TLS handshakes</button>
        <button className={`answer-button ${getButtonClass('q5', 'q5_a4')}`} onClick={() => handleIncorrectClick('q5_a4')} disabled={disabled.q5}>Issues VPN keys</button>
      </div>
    </div>
  );
};

export default HardCyberSecurity;