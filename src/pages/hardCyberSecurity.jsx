import React, { useState, useEffect } from 'react';
import '../App.css';

const HardCyberSecurity = () => {
  const [isCorrectClick, setIsCorrectClick] = useState({});
  const [isIncorrectClicked, setIsIncorrectClicked] = useState({});
  const [disabled, setDisabled] = useState({});
  const [answeredQuestions, setAnsweredQuestions] = useState({});
  const [timeLeft, setTimeLeft] = useState(300);
  const [timeExpired, setTimeExpired] = useState(false);

  const correctAnswers = {
    q1: 'q1_a3',
    q2: 'q2_a2',
    q3: 'q3_a4',
    q4: 'q4_a1',
    q5: 'q5_a1',
  };

  const explanations = {
    q1: "The primary purpose of a honeypot is to lure attackers and study their tactics to improve security measures.",
    q2: "The CIA triad stands for Confidentiality, Integrity, and Availability — the foundational principles of information security.",
    q3: "Cross-site scripting (XSS) attacks inject malicious scripts into trusted websites to compromise user data.",
    q4: "TLS (Transport Layer Security) is the cryptographic protocol that provides secure communications over a network.",
    q5: "Salting a password adds random data to the password before hashing to defend against rainbow table attacks.",
  };

  useEffect(() => {
    if (timeLeft <= 0) {
      setTimeExpired(true);
      setDisabled({ q1: true, q2: true, q3: true, q4: true, q5: true });
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  const handleCorrectClick = (key) => {
    if (timeExpired) return;
    const questionId = key.split('_')[0];
    setIsCorrectClick(prev => ({ ...prev, [key]: true }));
    setDisabled(prev => ({ ...prev, [questionId]: true }));
    setAnsweredQuestions(prev => ({ ...prev, [questionId]: true }));
  };

  const handleIncorrectClick = (key) => {
    if (timeExpired) return;
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
      <h1>Hard Cybersecurity Quiz</h1>
      <div>
        <h5>Rules:</h5>
        <p>You will be asked five challenging questions.</p>
        <p>Each has four potential answers; only one is correct.</p>
        <p>You have one attempt per question.</p>
      </div>
      <br />
      <div><strong>Time left: {timeLeft} second{timeLeft !== 1 ? 's' : ''}</strong></div>
      {timeExpired && <p style={{ color: 'red', fontWeight: 'bold' }}>Time's up! You can no longer answer questions.</p>}
      <br />

      <div>
        <h5>Question 1:</h5>
        <p>What is the primary purpose of a honeypot in cybersecurity?</p>
        <button className={`answer-button ${getButtonClass('q1', 'q1_a1')}`} onClick={() => handleIncorrectClick('q1_a1')} disabled={disabled.q1 || timeExpired}>To trap malware inside an isolated environment to study it safely.</button>
        <button className={`answer-button ${getButtonClass('q1', 'q1_a2')}`} onClick={() => handleIncorrectClick('q1_a2')} disabled={disabled.q1 || timeExpired}>To serve as a backup server in case of failure.</button>
        <button className={`answer-button ${getButtonClass('q1', 'q1_a3')}`} onClick={() => handleCorrectClick('q1_a3')} disabled={disabled.q1 || timeExpired}>To lure attackers and study their methods to improve security.</button>
        <button className={`answer-button ${getButtonClass('q1', 'q1_a4')}`} onClick={() => handleIncorrectClick('q1_a4')} disabled={disabled.q1 || timeExpired}>To monitor network traffic for unauthorized access.</button>
        {renderExplanation('q1')}
      </div>

      <div>
        <h5>Question 2:</h5>
        <p>What does the CIA triad in information security stand for?</p>
        <button className={`answer-button ${getButtonClass('q2', 'q2_a1')}`} onClick={() => handleIncorrectClick('q2_a1')} disabled={disabled.q2 || timeExpired}>Control, Integrity, Access</button>
        <button className={`answer-button ${getButtonClass('q2', 'q2_a2')}`} onClick={() => handleCorrectClick('q2_a2')} disabled={disabled.q2 || timeExpired}>Confidentiality, Integrity, Availability</button>
        <button className={`answer-button ${getButtonClass('q2', 'q2_a3')}`} onClick={() => handleIncorrectClick('q2_a3')} disabled={disabled.q2 || timeExpired}>Confidentiality, Identification, Authorization</button>
        <button className={`answer-button ${getButtonClass('q2', 'q2_a4')}`} onClick={() => handleIncorrectClick('q2_a4')} disabled={disabled.q2 || timeExpired}>Control, Identification, Access</button>
        {renderExplanation('q2')}
      </div>

      <div>
        <h5>Question 3:</h5>
        <p>What is Cross-site scripting (XSS)?</p>
        <button className={`answer-button ${getButtonClass('q3', 'q3_a1')}`} onClick={() => handleIncorrectClick('q3_a1')} disabled={disabled.q3 || timeExpired}>An attack that involves SQL injection to compromise databases.</button>
        <button className={`answer-button ${getButtonClass('q3', 'q3_a2')}`} onClick={() => handleIncorrectClick('q3_a2')} disabled={disabled.q3 || timeExpired}>An attack targeting web servers via denial of service.</button>
        <button className={`answer-button ${getButtonClass('q3', 'q3_a3')}`} onClick={() => handleIncorrectClick('q3_a3')} disabled={disabled.q3 || timeExpired}>A method of encrypting data between sites.</button>
        <button className={`answer-button ${getButtonClass('q3', 'q3_a4')}`} onClick={() => handleCorrectClick('q3_a4')} disabled={disabled.q3 || timeExpired}>An attack injecting malicious scripts into trusted websites.</button>
        {renderExplanation('q3')}
      </div>

      <div>
        <h5>Question 4:</h5>
        <p>Which protocol is primarily used to secure communications over a network?</p>
        <button className={`answer-button ${getButtonClass('q4', 'q4_a1')}`} onClick={() => handleCorrectClick('q4_a1')} disabled={disabled.q4 || timeExpired}>TLS (Transport Layer Security)</button>
        <button className={`answer-button ${getButtonClass('q4', 'q4_a2')}`} onClick={() => handleIncorrectClick('q4_a2')} disabled={disabled.q4 || timeExpired}>FTP (File Transfer Protocol)</button>
        <button className={`answer-button ${getButtonClass('q4', 'q4_a3')}`} onClick={() => handleIncorrectClick('q4_a3')} disabled={disabled.q4 || timeExpired}>HTTP (HyperText Transfer Protocol)</button>
        <button className={`answer-button ${getButtonClass('q4', 'q4_a4')}`} onClick={() => handleIncorrectClick('q4_a4')} disabled={disabled.q4 || timeExpired}>SMTP (Simple Mail Transfer Protocol)</button>
        {renderExplanation('q4')}
      </div>

      <div>
        <h5>Question 5:</h5>
        <p>What does 'salting' a password mean in cryptography?</p>
        <button className={`answer-button ${getButtonClass('q5', 'q5_a1')}`} onClick={() => handleCorrectClick('q5_a1')} disabled={disabled.q5 || timeExpired}>Adding random data to a password before hashing to enhance security.</button>
        <button className={`answer-button ${getButtonClass('q5', 'q5_a2')}`} onClick={() => handleIncorrectClick('q5_a2')} disabled={disabled.q5 || timeExpired}>Encrypting the password with a symmetric key.</button>
        <button className={`answer-button ${getButtonClass('q5', 'q5_a3')}`} onClick={() => handleIncorrectClick('q5_a3')} disabled={disabled.q5 || timeExpired}>Storing the password in plain text in a secure location.</button>
        <button className={`answer-button ${getButtonClass('q5', 'q5_a4')}`} onClick={() => handleIncorrectClick('q5_a4')} disabled={disabled.q5 || timeExpired}>Changing the password periodically to avoid reuse.</button>
        {renderExplanation('q5')}
      </div>
    </div>
  );
};

export default HardCyberSecurity;
