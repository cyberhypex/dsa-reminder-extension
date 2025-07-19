chrome.runtime.onInstalled.addListener(() => {
 
  chrome.alarms.create("dsaReminder", { periodInMinutes:60 });
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "dsaReminder") {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "icon.png",
      title: "Time to Practice DSA!",
      message: "Solve at least one DSA problem to prepare for placements!",
      priority: 2
    });
  }
});
