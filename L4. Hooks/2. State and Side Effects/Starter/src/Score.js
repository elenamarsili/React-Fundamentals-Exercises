const Score = ({numCorrect, numQuestions}) => (
    <div>
        <p className="text">
          Your Score: {numCorrect}/{numQuestions}
        </p>
    </div>
);

export default Score;