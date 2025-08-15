//      This file will contain the functions needed for the functionality of my quiz. 

export const handleCorrect = (questionId, setCorrectClick, setIncorrectClick, setInfoClass, setDisabled) => {
    setCorrectClick((prev) => ({ ...prev, [questionId]: true }));
    setIncorrectClick((prev) => ({ ...prev, [questionId]: false }));
    setInfoClass((prev) => ({ ...prev, [questionId]: 'show' }));
    setDisabled((prev) => ({ ...prev, [questionId]: true }));
};

export const handleIncorrect = (questionId, setIncorrectClick, setInfoClass, setDisabled) => {
    setIncorrectClick((prev) => ({ ...prev, [questionId]: true }));
    setInfoClass((prev) => ({ ...prev, [questionId]: 'show' }));
    setDisabled((prev) => ({ ...prev, [questionId]: true }));
};
