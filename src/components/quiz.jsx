import { useState } from "react";
import Results from "./results";
import { questionBank, createInitialAnswers } from "./index";

function shuffleArray(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function shuffleQuestionOptions(questions) {
    return questions.map((question) => ({
        ...question,
        options: shuffleArray(question.options),
    }));
}

function Quiz() {
    //userAnswers = [ Paris, JavaScript, nullJavaScript XML];

    //const [optionSelected, setOptionSelected] = useState("None");

    const [userAnswers, setUserAnswers] = useState(createInitialAnswers());

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [isQuizFinished, setIsQuizFinished] = useState(false);

    const [shuffledQuestionBank, setShuffledQuestionBank] = useState(questionBank);

    const selectedAnswer = userAnswers[currentQuestion];
    const isAnswered = selectedAnswer !== null;
    const currentQuestionData = shuffledQuestionBank[currentQuestion];
    const isCorrect = isAnswered && selectedAnswer === currentQuestionData.answer;

    function handleSelectOption(option) {
        const newUserAnswers = [...userAnswers];
        newUserAnswers[currentQuestion] = option;

        setUserAnswers(newUserAnswers);
    }

    function goToNext() {
        if (currentQuestion === questionBank.length - 1) {
            setIsQuizFinished(true);
        } else {
            setCurrentQuestion(currentQuestion + 1);
        }
        // setCurrentQuestion(currentQuestion + 1);
    }

    function goToPrev() {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    }

    function restartQuiz() {
        setUserAnswers(createInitialAnswers());
        setCurrentQuestion(0);
        setIsQuizFinished(false);
        setShuffledQuestionBank(shuffleQuestionOptions(questionBank));
    }

    if (isQuizFinished) {
        return (
        <Results
            userAnswers={userAnswers}
            questionBank={questionBank}
            restartQuiz={restartQuiz}
        />
        );
    }

    return (
        <div>
            <h2>Question {currentQuestion + 1} </h2>
            <p className="question">{questionBank[currentQuestion].question}</p>

            {currentQuestionData.options.map((option) => (
                <button
                    key={option}
                    className={"option" + (selectedAnswer === option ? " selected" : "")}
                    onClick={() => handleSelectOption(option)}
                    disabled={isAnswered}
                >
                    {option}
                </button>
            ))}

            {isAnswered && (
                <div className={"feedback " + (isCorrect ? "correct" : "incorrect")}>
                    <p>{isCorrect ? "CORRECT!" : "INCORRECT!"}</p>
                    {isCorrect && <p className="explanation">{currentQuestionData.explanation}</p>}
                </div>
            )}

            <div className="nav-buttons">
                <button
                    onClick={goToPrev}
                    disabled={currentQuestion === 0}
                >
                    Previous
                </button>
                <button
                    onClick={goToNext}
                    disabled={!selectedAnswer}
                >
                    {currentQuestion === questionBank.length - 1 ? "Finish Quiz" : "Next"}
                </button>
            </div>
        </div>
    );
}

export default Quiz;