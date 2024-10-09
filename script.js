let gameArea = document.getElementById("gameArea");
let score = document.getElementById("score");
let scoreHeading = document.getElementById("heading");
let start = document.getElementById("start");
let bestScore = document.getElementById("bestScore");
let timer = document.getElementById("time");
let second = 60;
let clockTimerId;
let timeLimit = "0";
let gameName = document.getElementById("gameName");
let kill = document.getElementById("kill");

start.addEventListener("click", firstDotAdd);

function firstDotAdd() {
  start.style.display = "none";
  scoreHeading.style.visibility = "visible";
  score.innerHTML = 0; // Initialize score
  gameName.style.display = "none";
  kill.style.visibility = "visible";
  addDots();
}

function addDots() {
  const dots = document.createElement("div");
  dots.classList.add("dot");

  // Set random position within the game area
  dots.style.top = Math.random() * (gameArea.clientHeight - 50) + "px";
  dots.style.left = Math.random() * (gameArea.clientWidth - 50) + "px";

  // When dot is clicked
  dots.addEventListener("click", () => {
    score.innerHTML = parseInt(score.innerHTML) + 1;
    dots.remove();
    addDots();
    addDots();
  });

  gameArea.appendChild(dots);
}

function resetGame() {
  const allDots = document.querySelectorAll(".dot");
  allDots.forEach((dot) => dot.remove());

  start.style.display = "block";
  scoreHeading.style.visibility = "hidden";
  bestScore.innerText = score.innerHTML;
  score.innerHTML = 0;
}

start.addEventListener("click", () => {
  clockTimerId = setInterval(() => {
    second--;
    timer.innerHTML = "Time:" + second.toString().padStart(2, "0");

    if (second == timeLimit) {
      clearInterval(clockTimerId);
      timer.innerHTML = "Time:00";
      start.disabled = false;
      second = 60;
      alert(`Time is Over! 🤖\nYour Score: ${score.innerHTML}`);

      resetGame();
    }
  }, 1000);
});
