// const keywordInput = document.getElementById('keyword-input');

function stringToList(inputString) {
    const items = inputString.split(',').map(item => item.trim());
  
    return items;
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.keywordList) {
    //   console.log(message.keywordList);
      sendResponse('Received message!');
        const data = {
            keywords: message.keywordList
            // input: stringToList(message1.keywordInput)
        };
        console.log(data);
    }
});

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    // Handle the received message
    console.log(message.data); // This will contain the data sent from popup.js
    // You can also send a response back to the popup if needed.
    sendResponse({ response: "Message received in the background script" });
  });
  


// const url = 'http://192.3.249.51/verifyWebsite';

// fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   }).then(response => response.json())
//     .then(responseData => {
//       console.log('Response:', responseData);
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });