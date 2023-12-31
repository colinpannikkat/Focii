# Focii
Anti-Procrastination Chrome Extension

![focii_background](https://github.com/colinpannikkat/Focii/assets/19521833/0332e63b-4ca2-4e7b-b61a-ac2fa8544cd9)

[Backend](https://github.com/Sarvesh-Thiruppathi/Focii_Backend)

## How to load
* Clone or download this repo
* Go to chrome and enable developer mode
* Click on 'load unpacked extension' and select the repo
* Grant necessary permission and the extension should show up in the extension
* Enjoy not being distracted and stay Focii

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

## Written by:
Sarvesh Thiruppathi Ahila - API, data scraping, and dataset collection

Ajinkya Gokule - Frontend, Chrome Web API

David Gesl - Frontend, Logo Design, CSS Styling

Colin Pannikkat - Backend, Word Embeddings, Blocking Algorithm, Supervised Learning

---
Copyright (c) 2023 Colin Pannikkat, Ajinkya Gokule, Sarvesh Thiruppathi Ahila, David Gesl
