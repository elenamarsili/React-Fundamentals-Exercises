import {useState, useEffect} from "react";

const Game = ({handleAnswerValidation}) => {
    const [values, setValues] = useState([]);
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        setNewValues();
      }, []);
    
    const setNewValues = () => {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
    const correctAnswer = value1 + value2 + value3;
    setValues([value1, value2, value3]);
    setAnswers([proposedAnswer, correctAnswer]);
    }

    const handleAnswer = (event) => {
        const isProposedAnswerCorrect = answers[0] === answers[1];
        const isUserAnswerCorrect = (event.target.value === "true") === isProposedAnswerCorrect;
        setNewValues();
        handleAnswerValidation(isUserAnswerCorrect);
    }
    
    return (
        <div>
            <div className="equation">
                <p className="text">{`${values[0]} + ${values[1]} + ${values[2]} = ${answers[0]}`}</p>
                <p className="text">{`Correct Answer = ${answers[1]}`}</p>
            </div>
            <button value={true} onClick={handleAnswer}>True</button>
            <button value={false} onClick={handleAnswer}>False</button>
        </div>
    )
};

export default Game;