const inputEmail = document.getElementById("email");
const invalidImg = document.querySelector(".invalid");
const invalidText = document.querySelector(".invalid__text");
const btnEmail = document.querySelector(".btn__email");

btnEmail.addEventListener("click", () => {
  if (/\S+@\S+\.\S+/.test(inputEmail.value)) {
    invalidImg.style.display = "none";
    invalidText.style.display = "none";
    inputEmail.style.border = "1px solid hsl(0, 36%, 70%)";
  } else {
    invalidImg.style.display = "block";
    invalidText.style.display = "block";
    inputEmail.style.border = "2px solid hsl(0, 93%, 68%)";
  }
});
