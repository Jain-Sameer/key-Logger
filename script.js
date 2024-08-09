const orangeDiv = document.querySelector("#Orange");
const greyDiv = document.querySelector("#Grey");

const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
startButton.disabled = false;
stopButton.disabled = true;
startButton.addEventListener("click", function () {
  document.addEventListener("keydown", handleKeyDown);
  document.addEventListener("keyup", handleKeyRelease);
  startButton.disabled = true;
  stopButton.disabled = false;
});

stopButton.addEventListener("click", function () {
  document.removeEventListener("keydown", handleKeyDown);
  document.removeEventListener("keyup", handleKeyRelease);
  orangeDiv.textContent = "";
  greyDiv.textContent = " ";
  startButton.disabled = false;
  stopButton.disabled = true;
});

function handleKeyDown(e) {
  //   console.log(e);
  orangeDiv.textContent = `${e.key} is pressed!`;
  greyDiv.textContent = `Key is down!`;
  //   startButton.setAttribute("disabled", "true");
}
function handleKeyRelease(e) {
  orangeDiv.textContent = `${e.key} is released!`;
  greyDiv.textContent = `Key is Up!`;
  //   startButton.setAttribute("disabled", "false");
}
