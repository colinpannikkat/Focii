const extensionHeader = document.getElementById('extension-header');
const focusBtn = document.getElementById('focus-btn');
const keywordInput = document.getElementById('keyword-input');

focusBtn.addEventListener('click', () => {
    chrome.runtime.sendMessage({ keywordInput: keywordInput.value } , (response) => {
        // console.log("sent keywordInput to background.js");
    });
});

// render exntension header with hello world
extensionHeader.innerHTML = 'Focii';