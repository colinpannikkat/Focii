const extensionHeader = document.getElementById('extension-header');
const focusBtn = document.getElementById('focus-btn');
const keywordInput = document.getElementById('keyword-input');
const pauseBtn = document.getElementById('pause-btn');

// const isActive = 1;

// pauseBtn.addEventListener('click', () => {
//     // alert("pause");
//     chrome.runtime.sendMessage({isActive: isActive!});
// });

focusBtn.addEventListener('click', () => {
    chrome.runtime.sendMessage({ keywordInput: keywordInput.value } , (response) => {
        // console.log("sent keywordInput to background.js");
    });
});