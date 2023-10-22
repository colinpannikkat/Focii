// const keywordInput = document.getElementById('keyword-input');

function stringToList(inputString) {
    const items = inputString.split(',').map(item => item.trim());
  
    return items;
}

const data = {
    keywordInput: [],
    keywordWebsite: []
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.keywordInput) {
        data.keywordInput = stringToList(message.keywordInput);
    } else if (message.keywordWebsite) {
        data.keywordWebsite = message.keywordWebsite;
    }
    console.log(data);

    const url = 'http://192.3.249.51/verifyWebsite';
    // const url = "http://10.20.7.21/verifyWebsite";

    if(data.keywordInput && data.keywordWebsite) {
        //send data to server
        var requestOptions = {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          };
          fetch(url, requestOptions)
          .then(response => {
            if (response.ok) {
              return response.json(); // or response.text() if the server sends plain text
            } else {
              throw new Error('Network response was not ok');
            }
          })
          .then(data => {
            // Handle the response data here
            console.log(data);
          })
          .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
          });
    }
});