const daysBtn = document.querySelectorAll(".day");
const predictBtn = document.getElementById("predictBtn");

const screenQuestion = document.getElementById("screen-question");
const screenLoading = document.getElementById("screen-loading");
const screenResult = document.getElementById("screen-result");

const resultTitle = document.getElementById("resultTitle");
const resultText = document.getElementById("resultText");

const rightSound = document.getElementById("rightSound");
const wrongSound = document.getElementById("wrongSound");

let selectedDay = null;

// Select day
daysBtn.forEach(btn => {
  btn.onclick = () => {
    daysBtn.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    selectedDay = btn.innerText;

    predictBtn.disabled = false;
    predictBtn.classList.add("enabled");
  };
});

// Predict
predictBtn.onclick = () => {
  screenQuestion.classList.add("hidden");
  screenLoading.classList.remove("hidden");

  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const today = new Date().getDay();
  const correctDay = days[(today + 1) % 7];

  setTimeout(() => {
    screenLoading.classList.add("hidden");
    screenResult.classList.remove("hidden");

    if (selectedDay === correctDay) {
      rightSound.play();
      resultTitle.innerText = "🎉 YOU'RE RIGHT!";
      resultText.innerText = "Your IQ is higher than 99.9% of humanity 😳";
      resultText.style.background = "gold";
    } else {
      wrongSound.play();
      resultTitle.innerText = "❌ YOU'RE WRONG!";
      resultText.innerText = `Correct answer is: ${correctDay}`;
      resultText.style.background = "#ffb3b3";
    }
  }, 3000);
};

// Restart
document.getElementById("restart").onclick = () => {
  location.reload();
};
