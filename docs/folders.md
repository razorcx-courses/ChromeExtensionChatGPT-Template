# Folder Structure

```markdown
my-chrome-extension/
│
├── images/
│   ├── icon16.png      # Icon used in the extension toolbar (16x16 pixels)
│   ├── icon48.png      # Icon used in the extension management page (48x48 pixels)
│   └── icon128.png     # Icon used in the Chrome Web Store (128x128 pixels)
│
├── scripts/
│   ├── background.js   # Background script
│   ├── content.js      # Content script
│   └── popup.js        # Script for the popup
│
├── pages/
│   ├── popup.html      # HTML document for the popup
│   └── options.html    # HTML document for the options page (if needed)
│
├── styles/
│   ├── popup.css       # CSS for the popup.html
│   └── options.css     # CSS for the options.html (if needed)
│
└── manifest.json       # Manifest file
```

This Markdown snippet represents the typical folder and file structure for a Chrome extension, including the description of what each file is used for within the context of the extension.