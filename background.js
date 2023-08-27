// background.js

let clickCount = 0;

function getColorOdd(number) {
  if (number % 2 == 0) {
    return [0, 0, 255, 255]; // blue color
  } else {
    return [0, 128, 0, 255]; // green color
  }
}

// Set the badge text and background color when the extension is installed or updated
chrome.runtime.onInstalled.addListener((details) => {
  chrome.action.setBadgeText({ text: clickCount.toString() });
  chrome.action.setBadgeBackgroundColor({ color: getColorOdd(clickCount) });
});

// Add a listener for clicks on the extension's browser action
chrome.action.onClicked.addListener((tab) => {
  // Increment the click count and update the badge text and background color
  clickCount++;
  chrome.action.setBadgeText({ text: clickCount.toString() });
  chrome.action.setBadgeBackgroundColor({ color: getColorOdd(clickCount) });
});