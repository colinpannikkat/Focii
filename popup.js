const extensionHeader = document.getElementById('extension-header');
const level1Btn = document.getElementById('level-1-btn');
const level2Btn = document.getElementById('level-2-btn');
const level3Btn = document.getElementById('level-3-btn');
const keywordInput = document.getElementById('keyword-input');

level1Btn.addEventListener('click', () => {
    chrome.runtime.sendMessage({ keywordInput: keywordInput.value } , (response) => {
        // console.log("sent keywordInput to background.js");
    });
});

// render exntension header with hello world
extensionHeader.innerHTML = 'Focii';


