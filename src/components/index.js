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
        question: "What is the capital of the United States?",
        options: [
            "Washington DC",
            "California",
            "Washington",
            "Georgia"
        ],
        answer: "Washington DC",
        explanation: "Washington DC is the capital of the United States."
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
    {
        question: "Tokyo is a capital city in what country?",
        options: [
            "Japan",
            "United States",
            "United Kingdom",
            "China"
        ],
        answer: "Japan",
        explanation: "Tokyo is the capital of Japan."
    },
    {
        question: "How tall is Godzilla Earth?",
        options: [
            "A massive 1,804 feet (550 meters)",
            "A super crazy massive 550,000 feet (167,640 meters)",
            "A fearsome 393 feet (120 meters)",
            "A wimpy 164 feet (50 meters)"
        ],
        answer: "A massive 1,804 feet (550 meters)",
        explanation: "According to the Godzilla Netflex anime trilogy, Godzilla Earth stands at 1,804 feet (550 meters)."
    },
    {
        question: "Who was the first man on the moon?",
        options: [
            "Superman",
            "Captain James Kirk",
            "Neil Armstrong",
            "Tom Hanks"
        ],
        answer: "Neil Armstrong",
        explanation: "Neil Armstrong was the first man to walk on the moon, stepping onto the lunar surface on July 20, 1969."
    },
    
];

export function createInitialAnswers() {
    return questionBank.map(() => null);
}
