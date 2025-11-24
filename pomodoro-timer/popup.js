const timer = document.getElementById("timer");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");

function updateTimer() {
  chrome.storage.local.get("timer", (res) => {
    const timerRawValue = new Date(res.timer);
    const minutes = timerRawValue.getMinutes().toString().padStart(2, "0");
    const seconds = timerRawValue.getSeconds().toString().padStart(2, "0");

    const time = `${minutes}:${seconds}`;
    timer.textContent = time;
  });
}

startBtn.addEventListener("click", (e) => {
  chrome.storage.local.set({
    running: true,
  });
});

stopBtn.addEventListener("click", (e) => {
  chrome.storage.local.set({
    running: false,
  });
});

resetBtn.addEventListener("click", (e) => {
  chrome.storage.local.set({
    reset: true,
  });
});

updateTimer();
setInterval(updateTimer, 1);
