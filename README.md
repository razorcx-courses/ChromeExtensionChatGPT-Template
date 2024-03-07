# My Chrome Extension

This Chrome extension is a sample project demonstrating the use of Manifest V3 for building modern Chrome extensions. It includes a popup, a content script, a background script, an options page, and associated styling and scripting for these components.

The project was built with ChatGPT for learning and demonstration purposes.  

Refer to the shared ChatGPT chat regarding the entire step-by-step process for creating this project at: https://chat.openai.com/share/fac3be61-302c-478a-ad70-e20c951be082

## Features

- **Popup**: Click on the extension icon to open a popup with a "Click me!" button.
- **Content Script**: Logs a message to the console of the current webpage.
- **Background Script**: Handles clicks on the extension icon to execute the content script.
- **Options Page**: Allows users to save an option setting that persists across browser sessions.

## Installation Instructions

To install this extension in Chrome, follow these steps:

1. Clone or download this repository to your local machine.
2. Open the Chrome browser and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top-right corner.
4. Click the "Load unpacked" button and select the directory of this extension (the folder containing the `manifest.json` file).
5. The extension should now appear in your list of extensions and can be used immediately.

## Using the Extension

- Click on the extension icon in the toolbar to open the popup.
- Navigate to any webpage and open the developer console to see messages logged by the content script.
- Right-click the extension icon and select "Options" to open the options page and save an example setting.

## Feedback and Contributions

Feedback and contributions are welcome. Please feel free to submit issues or pull requests through the project's GitHub repository.
