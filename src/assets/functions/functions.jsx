export const handleCorrect = (key, setIsCorrectClick, setIsIncorrectClicked, _setInfoClass, setDisabled) => {
    setIsCorrectClick(prev => ({ ...prev, [key]: true }));
    const questionId = key.split('_')[0];  // gets 'q1' from 'q1_a1'
    setDisabled(prev => ({ ...prev, [questionId]: true }));
  };
  
  export const handleIncorrect = (key, setIsIncorrectClicked, _setInfoClass, setDisabled) => {
    setIsIncorrectClicked(prev => ({ ...prev, [key]: true }));
    const questionId = key.split('_')[0];
    setDisabled(prev => ({ ...prev, [questionId]: true }));
  };
  