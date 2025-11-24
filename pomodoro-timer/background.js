const defaultTimerStart = 30;

chrome.alarms.create({
  periodInMinutes: 1 / 60,
});

chrome.alarms.onAlarm.addListener((alarm) => {
    chrome.storage.local.get(["timer", "reset", "running"], (localRes) => {
      // que haya timer implica q esto corrio una vez al menos
      if (!localRes.running && localRes.timer && !localRes.reset) return; 

        // Get timer value from sync storage, then process
        chrome.storage.sync.get("timerValueInMinutes", (syncRes) => {
        const timerStart = syncRes.timerValueInMinutes ?? defaultTimerStart;

        // time is a Date object - initialize if it doesn't exist, otherwise subtract 1 second
        let time =
            !localRes.timer || localRes.reset
            ? new Date(
                new Date(2025, 4, 1, 0, 0, 0).getTime() + timerStart * 60 * 1000
                ) // Use selected timer value
            : new Date(localRes.timer - 1000); // Convert stored timestamp back to Date

        if (localRes.reset) {
            chrome.storage.local.set({
            reset: false,
            });
        }
        // Show minutes and seconds in badge
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();

        // Finished timer, no soporto 1h asi q queda asi
        if (minutes == 59 && seconds == 59) {
            this.registration.showNotification("Timer finished", {body: `The timer has finished`})
            chrome.storage.local.set({running: false})

            return
        }
        chrome.action.setBadgeText({
            text: `${minutes}:${seconds.toString().padStart(2, "0")}`,
        });

        // Store the Date as timestamp (number)
        chrome.storage.local.set({
            timer: time.getTime(),
        });
    });
  });
});
