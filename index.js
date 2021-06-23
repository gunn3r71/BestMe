const questions = [
    "What did i learn today?",
    "What makes me angry today? and What I can do to improve?",
    "What makes me happy today?",
    "How many people did i help today?"
];

const ask = (index = 0) => {
    process.stdout.write(questions[index] + "\n");
};

ask();