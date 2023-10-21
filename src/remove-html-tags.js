
// input: string
// description: remove html tags from string
// output: string

function removeHtmlTags(pageSource) {
    return pageSource.replace(/<[^>]*>/g, '');
}