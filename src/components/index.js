export const questionBank = [
    {
        question: "What is the capital of France?",
        options: [
            "Paris",
            "London",
            "Berlin",
            "Madrid"
        ],
        answer: "Paris",
        explanation: "Paris is the capital and largest city of France."
    },
    {
        question: "Which language is used for front-end web apps?",
        options: [
            "JavaScript",
            "Python",
            "Java",
            "C++"
        ],
        answer: "JavaScript",
        explanation: "JavaScript is the language most commonly used to build interactive front-end web applications."
    },
    {
        question: "What does JSX stand for?",
        options: [
            "JavaScript XML",
            "Java Syntax Extension",
            "JSON XML",
            "None of the above"
        ],
        answer: "JavaScript XML",
        explanation: "JSX stands for JavaScript XML, a syntax extension used with React to describe UI structure."
    },
];

export function createInitialAnswers() {
    return questionBank.map(() => null);
}
