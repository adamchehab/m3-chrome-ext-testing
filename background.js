// background.js

// Set the badge text to "1" when the extension is installed or updated
chrome.runtime.onInstalled.addListener((details) => {
  chrome.action.setBadgeText({ text: "1" });
});

// Add a listener for clicks on the extension's browser action
chrome.action.onClicked.addListener((tab) => {
  // Set the badge text to "2" when the extension icon is clicked
  chrome.action.setBadgeText({ text: "2" });
});