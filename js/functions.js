const button = document.getElementById("showAnswersBtn");
const answers = document.querySelectorAll(".answer");

button.addEventListener("click", function() {
  answers.forEach(answer => {
    answer.style.display = "block";
  });
});
