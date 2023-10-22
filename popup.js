const extensionHeader = document.getElementById('extension-header');
const level1Btn = document.getElementById('level-1-btn');
const level2Btn = document.getElementById('level-2-btn');
const level3Btn = document.getElementById('level-3-btn');
const keywordInput = document.getElementById('keyword-input');

// render exntension header with hello world
extensionHeader.innerHTML = 'Focii';


level1Btn.addEventListener('click', () => {
    console.log(keywordInput.value);
});
