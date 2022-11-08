const darkMode = () => {
  const element = document.body;
  element.classList.toggle("dark-mode");
};

const modeSet = () => {
  const element = document.getElementById("dark-mode-btn");
  if (element.textContent === "Dark Mode") {
    element.textContent = "Light Mode";
  }
  else {
    element.textContent = "Dark Mode";
  }
}

const mode = () => {
  darkMode();
  modeSet();
}

export default mode;
