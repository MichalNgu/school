document.addEventListener("DOMContentLoaded", function () {
    const quizForm = document.getElementById("quiz-form");
    const resultSection = document.getElementById("result");
    const scoreText = document.getElementById("score");

    const correctAnswers = {q1: "1", q2: "1", q3: "1"};

    quizForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let score = 0;
        let totalQuestions = Object.keys(correctAnswers).length;

        for (let question in correctAnswers) {
            const selected = document.querySelector(`input[name="${question}"]:checked`);
            const labels = document.querySelectorAll(`input[name="${question}"] + label`);

            if (selected) {
                labels.forEach(label => label.classList.remove("correct", "incorrect"));

                if (selected.value === correctAnswers[question]) {
                    score++;
                    selected.parentElement.classList.add("correct");
                } else {
                    selected.parentElement.classList.add("incorrect");
                }
            }
        }

        resultSection.classList.remove("hidden");
        resultSection.innerHTML = `<h2>Výsledek:</h2><p>Správně: ${score} / ${totalQuestions}</p>`;

        if (score / totalQuestions >= 0.5) {
            resultSection.classList.add("success");
            resultSection.classList.remove("fail");
        } else {
            resultSection.classList.add("fail");
            resultSection.classList.remove("success");
        }

        const inputs = document.querySelectorAll("input[type='radio']");
        inputs.forEach(input => input.disabled = true);
    });
});