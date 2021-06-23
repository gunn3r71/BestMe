const questions = [
    "What did i learn today?",
    "What makes me angry today? and What I can do to improve?",
    "What makes me happy today?",
    "How many people did i help today?"
];

const answers = [];

const ask = (index = 0) => {
    process.stdout.write("\n" + questions[index] + "> ");
};

ask();


process.stdin.on("data", data => {
    answers.push(data.toString().trim());
    if(answers.length < questions.length) {
        ask(answers.length);
    } else {
        console.log(answers);
        process.exit();
    }
});