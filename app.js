const submitBtn = document.querySelector(".btn");
const firstCard = document.querySelector("#rating-state");
const secondCard = document.querySelector("#thank-you-state");
const ratingNumbers = document.querySelectorAll(".number");
const selectedNumber = document.querySelector(".selected");
let number = 0;

ratingNumbers.forEach(num => {
    num.addEventListener('click', function () {
        number = this.textContent;
        ratingNumbers.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
      });
});

submitBtn.addEventListener("click", rateUs);

// function activateButton(e) {
//     if (e.target.parentElement.classList.contains("rating-numbers")) {
//         e.target.classList.add("active");
//         selectedNumber.textContent = e.target.textContent;
//     }
// }


function rateUs() {
    selectedNumber.textContent = number;
    firstCard.style.display = "none";
    secondCard.style.display = "block";
}