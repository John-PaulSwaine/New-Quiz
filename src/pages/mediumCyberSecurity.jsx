import React, { useState, useEffect } from 'react';
import '../App.css';

const MediumCyberSecurity = () => {
  const [isCorrectClick, setIsCorrectClick] = useState({});
  const [isIncorrectClicked, setIsIncorrectClicked] = useState({});
  const [disabled, setDisabled] = useState({});
  const [answeredQuestions, setAnsweredQuestions] = useState({});
  const [timeLeft, setTimeLeft] = useState(240);
  const [timeExpired, setTimeExpired] = useState(false);

  const correctAnswers = {
    q1: 'q1_a3',
    q2: 'q2_a1',
    q3: 'q3_a4',
    q4: 'q4_a2',
    q5: 'q5_a3',
  };

  const explanations = {
    q1: "A DDoS attack floods a system with traffic, overwhelming it and causing it to crash or become unavailable.",
    q2: "Phishing attempts to trick users into giving up sensitive info like passwords by pretending to be trustworthy.",
    q3: "Multi-factor authentication adds an extra security layer, requiring multiple forms of ID to access an account.",
    q4: "A firewall blocks unauthorized access to a network by filtering traffic based on set rules.",
    q5: "Encryption converts data into a code to prevent unauthorized access during transmission.",
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
      <h1>Medium Cybersecurity Quiz</h1>
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
        <p>What is a DDoS attack?</p>
        <button className={`answer-button ${getButtonClass('q1', 'q1_a1')}`} onClick={() => handleIncorrectClick('q1_a1')} disabled={disabled.q1 || timeExpired}>An attack that steals data.</button>
        <button className={`answer-button ${getButtonClass('q1', 'q1_a2')}`} onClick={() => handleIncorrectClick('q1_a2')} disabled={disabled.q1 || timeExpired}>An attack that installs malware.</button>
        <button className={`answer-button ${getButtonClass('q1', 'q1_a3')}`} onClick={() => handleCorrectClick('q1_a3')} disabled={disabled.q1 || timeExpired}>An attack that overwhelms a system with traffic.</button>
        <button className={`answer-button ${getButtonClass('q1', 'q1_a4')}`} onClick={() => handleIncorrectClick('q1_a4')} disabled={disabled.q1 || timeExpired}>An attack that breaks passwords.</button>
        {renderExplanation('q1')}
      </div>

      <div>
        <h5>Question 2:</h5>
        <p>What is phishing?</p>
        <button className={`answer-button ${getButtonClass('q2', 'q2_a1')}`} onClick={() => handleCorrectClick('q2_a1')} disabled={disabled.q2 || timeExpired}>A scam to steal sensitive info via fake emails or sites.</button>
        <button className={`answer-button ${getButtonClass('q2', 'q2_a2')}`} onClick={() => handleIncorrectClick('q2_a2')} disabled={disabled.q2 || timeExpired}>A type of firewall software.</button>
        <button className={`answer-button ${getButtonClass('q2', 'q2_a3')}`} onClick={() => handleIncorrectClick('q2_a3')} disabled={disabled.q2 || timeExpired}>A method of encrypting data.</button>
        <button className={`answer-button ${getButtonClass('q2', 'q2_a4')}`} onClick={() => handleIncorrectClick('q2_a4')} disabled={disabled.q2 || timeExpired}>A virus that deletes files.</button>
        {renderExplanation('q2')}
      </div>

      <div>
        <h5>Question 3:</h5>
        <p>What is multi-factor authentication?</p>
        <button className={`answer-button ${getButtonClass('q3', 'q3_a1')}`} onClick={() => handleIncorrectClick('q3_a1')} disabled={disabled.q3 || timeExpired}>Using a single password only.</button>
        <button className={`answer-button ${getButtonClass('q3', 'q3_a2')}`} onClick={() => handleIncorrectClick('q3_a2')} disabled={disabled.q3 || timeExpired}>Using biometrics alone.</button>
        <button className={`answer-button ${getButtonClass('q3', 'q3_a3')}`} onClick={() => handleIncorrectClick('q3_a3')} disabled={disabled.q3 || timeExpired}>Using a firewall to secure accounts.</button>
        <button className={`answer-button ${getButtonClass('q3', 'q3_a4')}`} onClick={() => handleCorrectClick('q3_a4')} disabled={disabled.q3 || timeExpired}>Using two or more verification methods to access an account.</button>
        {renderExplanation('q3')}
      </div>

      <div>
        <h5>Question 4:</h5>
        <p>What is the purpose of a firewall?</p>
        <button className={`answer-button ${getButtonClass('q4', 'q4_a1')}`} onClick={() => handleIncorrectClick('q4_a1')} disabled={disabled.q4 || timeExpired}>To delete viruses from a system.</button>
        <button className={`answer-button ${getButtonClass('q4', 'q4_a2')}`} onClick={() => handleCorrectClick('q4_a2')} disabled={disabled.q4 || timeExpired}>To block unauthorized access to a network.</button>
        <button className={`answer-button ${getButtonClass('q4', 'q4_a3')}`} onClick={() => handleIncorrectClick('q4_a3')} disabled={disabled.q4 || timeExpired}>To encrypt all files on a device.</button>
        <button className={`answer-button ${getButtonClass('q4', 'q4_a4')}`} onClick={() => handleIncorrectClick('q4_a4')} disabled={disabled.q4 || timeExpired}>To scan for phishing emails.</button>
        {renderExplanation('q4')}
      </div>

      <div>
        <h5>Question 5:</h5>
        <p>What does encryption do?</p>
        <button className={`answer-button ${getButtonClass('q5', 'q5_a1')}`} onClick={() => handleIncorrectClick('q5_a1')} disabled={disabled.q5 || timeExpired}>Deletes data after use.</button>
        <button className={`answer-button ${getButtonClass('q5', 'q5_a2')}`} onClick={() => handleIncorrectClick('q5_a2')} disabled={disabled.q5 || timeExpired}>Sends data without any protection.</button>
        <button className={`answer-button ${getButtonClass('q5', 'q5_a3')}`} onClick={() => handleCorrectClick('q5_a3')} disabled={disabled.q5 || timeExpired}>Converts data into a code to protect it during transmission.</button>
        <button className={`answer-button ${getButtonClass('q5', 'q5_a4')}`} onClick={() => handleIncorrectClick('q5_a4')} disabled={disabled.q5 || timeExpired}>Copies data to multiple locations.</button>
        {renderExplanation('q5')}
      </div>
    </div>
  );
};

export default MediumCyberSecurity;
