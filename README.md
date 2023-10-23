# Focii
Anti-Procrastination Chrome Extension

## Files
### manifest.json
* Contains all the permissions, paths to backgrounds scripts, icons, for the extension
* Permission includes - activeTab, scripting, storage

### popup.js / .html / .css
* Contains all the logic, html, styling for the extension
* Responsible for retrieving user keywords and sending it to background.js

### background.js
* Contains the JS code that runs at the browser level which has the universal scope
* Responsible for calling and receiving data from apis

### contentScript.js
* Contains script that runs within the scope for the active web page everytime the url is refreshed
* Responsible for retreiving page source and sending it to background.js