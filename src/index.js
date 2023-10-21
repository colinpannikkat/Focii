const extensionHeader = document.getElementById('extension-header');

// render exntension header with hello world
extensionHeader.innerHTML = 'Hello World!';

// input: string
// description: remove html tags from string
// output: string
function removeHtmlTags(pageSource) {
    return pageSource.replace(/<[^>]*>/g, '');
}