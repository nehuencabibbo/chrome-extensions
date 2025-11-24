const timeElement = document.getElementById("time");
const name = document.getElementById("name");
const timerElement = document.getElementById("timer");

function updateTimeElement() {
  chrome.storage.local.get("timer", (res) => {
    const time = res.timer ?? 0;
    timerElement.textContent = `The timer is ${time}`;
  });

  timeElement.textContent = `The time is ${new Date().toLocaleTimeString()}`;
}

updateTimeElement();
setInterval(updateTimeElement, 1000);

chrome.action.setBadgeText({ text: "TIME" }, () =>
  console.log("finished loading badge text")
);
chrome.storage.sync.get(["name"], (res) => {
  name.textContent = res.name ?? "???";
});
