import mode from "./darkmode.js";

const input = document.getElementById("input");
const buttons = document.querySelectorAll("button");

let screenText = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "AC") {
      screenText = "";
      input.value = screenText;
    } 
    else if (button.textContent === "CE"){
        screenText = screenText.slice(0, -1);
        input.value = screenText;
    }
    else if (button.textContent === "=") {
        screenText = eval(screenText);
        input.value = screenText;
    } 
    else if (button.textContent === "Dark Mode" || button.textContent === "Light Mode") {
        const btn = document.getElementById("dark-mode-btn");
        btn.addEventListener("click", mode);
    } 
    else {
        screenText += button.textContent;
        input.value = screenText;
    }
  });
});