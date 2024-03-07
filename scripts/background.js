// Background script

// Listen for a click on the extension's icon.
chrome.action.onClicked.addListener((tab) => {
  // Execute the content script on the current tab.
  chrome.scripting.executeScript({
    // Specify the target tab by its ID for the script to be injected.
    target: { tabId: tab.id },
    // List of scripts to be injected into the tab.
    files: ["scripts/content.js"],
  });
});
