// const keywordInput = document.getElementById('keyword-input');

const blockedHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Website Blocked</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            text-align: center;
            margin: 0;
            padding: 0;
            overflow: hidden;
        }
        .blocked-container {
            display: none;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            padding: 20px;
            margin: 10% auto;
            max-width: 600px;
            opacity: 0;
            transform: translateY(-20px);
            transition: transform 0.5s, opacity 0.5s;
        }
        h1 {
            color: #f44336;
            font-size: 36px;
            margin: 0 0 20px;
            font-weight: bold;
        }
        p {
            font-size: 20px;
            color: #333;
            margin: 10px 0;
            line-height: 1.6;
        }
        .subtle-text {
            font-size: 18px;
            color: #555;
            font-style: italic;
        }
        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100%" height="100%" fill="#f44336"/><circle cx="50" cy="50" r="30" fill="#4285f4"/></svg>');
            z-index: -1;
            opacity: 0.2;
        }
    </style>
</head>
<body>
    <div class="blocked-container">
        <h1>Oops, You've Hit a Roadblock!</h1>
        <p>This website doesn't align with your current mission. It's time to refocus and conquer your goals.</p>
        <p class="subtle-text">Focii Extension</p>
    </div>
    <script>
        window.onload = function() {
            const blockedContainer = document.querySelector(".blocked-container");
            blockedContainer.style.display = "block";
            let opacity = 0;
            const fadeIn = setInterval(function() {
                if (opacity < 1) {
                    opacity += 0.05;
                    blockedContainer.style.opacity = opacity;
                    blockedContainer.style.transform = translateY(0px);
                } else {
                    clearInterval(fadeIn);
                }
            }, 50);
        }
    </script>
</body>
</html>
`

function stringToList(inputString) {
    const items = inputString.split(',').map(item => item.trim());
  
    return items;
}

const data = {
    keywordInput: [],
    keywordWebsite: []
}

var isActive = 1;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.keywordInput) {
        data.keywordInput = stringToList(message.keywordInput);
    } else if (message.keywordWebsite) {
        data.keywordWebsite = message.keywordWebsite;
    } else if (message.isActive == 0 || message.isActive == 1) {
        isActive = message.isActive;
    }
    // console.log(data);

    const url = 'http://192.3.249.51/verifyWebsite';
    // const url = "http://10.20.7.21/verifyWebsite";

    if(data.keywordInput.length>0 && data.keywordWebsite.length>0 && isActive) {
        //send data to server
        console.log(data);
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
            //go to the active tab and delete the html of the page if data is 0
            if(data == 0){
                chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                    chrome.scripting.executeScript({
                        target: {tabId: tabs[0].id},
                        function: () => {
                            document.documentElement.innerHTML = "";
                            document.documentElement = blockedHtml;
                        }
                    });
                });
            }
          })
          .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
          });
    }
});