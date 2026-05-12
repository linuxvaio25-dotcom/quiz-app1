function Results({ questionBank, userAnswers, restartQuiz }) {
    function getScore() {
        let finalScore = 0;

        userAnswers.forEach((answer, index) => {
            if (answer === questionBank[index].answer) {
                finalScore++;
            }
        });
        return finalScore;
    }

    const score = getScore();

    // function restartQuiz() {
    //     // Logic to reset the quiz state and start over
    // }

    const incorrectCount = questionBank.length - score;

    return (
        <div>
            <h2>You completed the quiz</h2>
            <p className="score">
                You got {score} correct and {incorrectCount} incorrect out of {questionBank.length}!
            </p>
            <button
                className="restart-button"
                onClick={restartQuiz}
            >
                Restart Quiz
            </button>
        </div>
    );
}

export default Results;