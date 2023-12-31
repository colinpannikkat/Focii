const extensionHeader = document.getElementById('extension-header');
const focusBtn = document.getElementById('focus-btn');
const keywordInput = document.getElementById('keyword-input');
const pauseBtn = document.getElementById('pause-btn');

var isActive = 1;

chrome.storage.session.get(['pauseBtn'], function(result) {
    const iconPath = result.pauseBtn || "icons/pause-btn.png";
    pauseBtn.src = iconPath;
});

chrome.storage.session.get(['keywordInput'], function(result) {
    keywordInput.value = result.keywordInput || "";
});

pauseBtn.addEventListener('click', () => {
    // alert("pause");
    isActive = !isActive;
    if(isActive){
        pauseBtn.src = "icons/pause-btn.png";
        keywordInput.style.borderColor = "green";
        keywordInput.style.borderWidth = "4px";
    } else {
        keywordInput.style.borderColor = "#ccc";
        keywordInput.style.borderWidth = "1px";
        pauseBtn.src = "icons/play-btn.png";
    }
    // pauseBtn.src = isActive ? "icons/pause-btn.png" : "icons/play-btn.png";
    // alert(isActive);
    chrome.runtime.sendMessage({isActive: isActive});
    chrome.storage.session.set({pauseBtn: pauseBtn.src});
});

focusBtn.addEventListener('click', () => {
    chrome.runtime.sendMessage({ keywordInput: keywordInput.value } , (response) => {
        // console.log("sent keywordInput to background.js");
    });
    keywordInput.style.borderColor = "green";
    keywordInput.style.borderWidth = "4px";
    chrome.storage.session.set({keywordInput: keywordInput.value});
});