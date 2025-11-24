const selectElement = document.getElementById("pomodoro-length");

// Load saved value and set it as selected
chrome.storage.sync.get("timerValueInMinutes", (res) => {
  const minutes = res.timerValueInMinutes ?? 30; // Default to 30 minutes
  selectElement.value = minutes;
});

// Add change listener to save when user changes the value
selectElement.addEventListener("change", (e) => {
  const selectedMinutes = parseInt(e.target.value);
  chrome.storage.sync.set({
    timerValueInMinutes: selectedMinutes,
  });
  chrome.storage.local.set({
    reset: true
  })
});
