import React, { useState, useEffect } from 'react';
import '../App.css';

const HardCyberSecurity = () => {
  const [isCorrectClick, setIsCorrectClick] = useState({});
  const [isIncorrectClicked, setIsIncorrectClicked] = useState({});
  const [disabled, setDisabled] = useState({});
  const [answeredQuestions, setAnsweredQuestions] = useState({});
  const [timeLeft, setTimeLeft] = useState(300);
  const [timeExpired, setTimeExpired] = useState(false);
  const [score, setScore] = useState(0); // <-- Added score state

  const correctAnswers = {
    q1: 'q1_a2',
    q2: 'q2_a4',
    q3: 'q3_a1',
    q4: 'q4_a3',
    q5: 'q5_a1',
  };

  const explanations = {
    q1: "Zero-day vulnerabilities are unknown flaws in software that attackers exploit before the vendor can patch them.",
    q2: "Social engineering manipulates people into divulging confidential information or performing actions.",
    q3: "A rootkit is a malicious software designed to hide the presence of malware and maintain privileged access.",
    q4: "Public key cryptography uses pairs of keys — public and private — to securely encrypt and decrypt data.",
    q5: "A sandbox isolates code execution to safely analyze or test software without risking the main system.",
  };

  useEffect(() => {
    const allAnswered = ['q1', 'q2', 'q3', 'q4', 'q5'].every(q => answeredQuestions[q]);

    if (timeLeft <= 0 || allAnswered) {
      setTimeExpired(true);
      setDisabled({ q1: true, q2: true, q3: true, q4: true, q5: true });
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, answeredQuestions]);

  const handleCorrectClick = (key) => {
    if (timeExpired) return;
    const questionId = key.split('_')[0];
    setIsCorrectClick(prev => ({ ...prev, [key]: true }));
    setDisabled(prev => ({ ...prev, [questionId]: true }));
    setAnsweredQuestions(prev => ({ ...prev, [questionId]: true }));
    setScore(prev => prev + 1);  // <-- Increment score on correct answer
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
      <h5>Rules:</h5>
      <p>You will be asked five questions.</p>
      <p>You will be given up to four potential answers, with only one being correct.</p>
      <p>You only get one chance to answer.</p>
      <br />
      <div>
        <strong>Time left: {timeLeft} second{timeLeft !== 1 ? 's' : ''}</strong>
      </div>
      {timeExpired && <p style={{ color: 'red', fontWeight: 'bold' }}>Time's up! You can no longer answer questions.</p>}
      <br />

      <div>
        <h5>Question 1:</h5>
        <p>What is a zero-day vulnerability?</p>
        <button className={`answer-button ${getButtonClass('q1', 'q1_a1')}`} onClick={() => handleIncorrectClick('q1_a1')} disabled={disabled.q1 || timeExpired}>A known software bug with a fix available.</button>
        <button className={`answer-button ${getButtonClass('q1', 'q1_a2')}`} onClick={() => handleCorrectClick('q1_a2')} disabled={disabled.q1 || timeExpired}>An unknown software flaw exploited before a patch is released.</button>
        <button className={`answer-button ${getButtonClass('q1', 'q1_a3')}`} onClick={() => handleIncorrectClick('q1_a3')} disabled={disabled.q1 || timeExpired}>A type of malware that steals passwords.</button>
        <button className={`answer-button ${getButtonClass('q1', 'q1_a4')}`} onClick={() => handleIncorrectClick('q1_a4')} disabled={disabled.q1 || timeExpired}>A firewall rule blocking unauthorized access.</button>
        {renderExplanation('q1')}
      </div>

      <div>
        <h5>Question 2:</h5>
        <p>What is social engineering?</p>
        <button className={`answer-button ${getButtonClass('q2', 'q2_a1')}`} onClick={() => handleIncorrectClick('q2_a1')} disabled={disabled.q2 || timeExpired}>A method to secure networks.</button>
        <button className={`answer-button ${getButtonClass('q2', 'q2_a2')}`} onClick={() => handleIncorrectClick('q2_a2')} disabled={disabled.q2 || timeExpired}>A type of encryption technique.</button>
        <button className={`answer-button ${getButtonClass('q2', 'q2_a3')}`} onClick={() => handleIncorrectClick('q2_a3')} disabled={disabled.q2 || timeExpired}>A software development practice.</button>
        <button className={`answer-button ${getButtonClass('q2', 'q2_a4')}`} onClick={() => handleCorrectClick('q2_a4')} disabled={disabled.q2 || timeExpired}>Manipulating people into giving up confidential information.</button>
        {renderExplanation('q2')}
      </div>

      <div>
        <h5>Question 3:</h5>
        <p>What is a rootkit?</p>
        <button className={`answer-button ${getButtonClass('q3', 'q3_a1')}`} onClick={() => handleCorrectClick('q3_a1')} disabled={disabled.q3 || timeExpired}>Malware that hides its presence and maintains privileged access.</button>
        <button className={`answer-button ${getButtonClass('q3', 'q3_a2')}`} onClick={() => handleIncorrectClick('q3_a2')} disabled={disabled.q3 || timeExpired}>A hardware device to block threats.</button>
        <button className={`answer-button ${getButtonClass('q3', 'q3_a3')}`} onClick={() => handleIncorrectClick('q3_a3')} disabled={disabled.q3 || timeExpired}>A firewall configuration.</button>
        <button className={`answer-button ${getButtonClass('q3', 'q3_a4')}`} onClick={() => handleIncorrectClick('q3_a4')} disabled={disabled.q3 || timeExpired}>An antivirus software feature.</button>
        {renderExplanation('q3')}
      </div>

      <div>
        <h5>Question 4:</h5>
        <p>What is public key cryptography?</p>
        <button className={`answer-button ${getButtonClass('q4', 'q4_a1')}`} onClick={() => handleIncorrectClick('q4_a1')} disabled={disabled.q4 || timeExpired}>Using a single key to encrypt and decrypt data.</button>
        <button className={`answer-button ${getButtonClass('q4', 'q4_a2')}`} onClick={() => handleIncorrectClick('q4_a2')} disabled={disabled.q4 || timeExpired}>A method to hack encrypted files.</button>
        <button className={`answer-button ${getButtonClass('q4', 'q4_a3')}`} onClick={() => handleCorrectClick('q4_a3')} disabled={disabled.q4 || timeExpired}>Using a pair of public and private keys for secure communication.</button>
        <button className={`answer-button ${getButtonClass('q4', 'q4_a4')}`} onClick={() => handleIncorrectClick('q4_a4')} disabled={disabled.q4 || timeExpired}>Encrypting data with a password.</button>
        {renderExplanation('q4')}
      </div>

      <div>
        <h5>Question 5:</h5>
        <p>What is a sandbox in cybersecurity?</p>
        <button className={`answer-button ${getButtonClass('q5', 'q5_a1')}`} onClick={() => handleCorrectClick('q5_a1')} disabled={disabled.q5 || timeExpired}>An isolated environment to safely test and analyze software.</button>
        <button className={`answer-button ${getButtonClass('q5', 'q5_a2')}`} onClick={() => handleIncorrectClick('q5_a2')} disabled={disabled.q5 || timeExpired}>A firewall configuration tool.</button>
        <button className={`answer-button ${getButtonClass('q5', 'q5_a3')}`} onClick={() => handleIncorrectClick('q5_a3')} disabled={disabled.q5 || timeExpired}>A type of virus scan.</button>
        <button className={`answer-button ${getButtonClass('q5', 'q5_a4')}`} onClick={() => handleIncorrectClick('q5_a4')} disabled={disabled.q5 || timeExpired}>A method for stealing credentials.</button>
        {renderExplanation('q5')}
      </div>

      {/* Show score when quiz ends */}
      {timeExpired && (
        <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
          <h3>Quiz Complete!</h3>
          <p>Your Score: {score} / 5</p>
        </div>
      )}
    </div>
  );
};

export default HardCyberSecurity;
