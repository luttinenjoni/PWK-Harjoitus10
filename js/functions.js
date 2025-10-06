// Haetaan nappi ja kaikki vastaukset
const button = document.getElementById("showAnswersBtn");
const answers = document.querySelectorAll(".answer");

// Lisätään toiminto napille
button.addEventListener("click", function() {
  answers.forEach(answer => {
    answer.style.display = "block";
  });
});
