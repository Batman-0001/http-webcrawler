const { JSDOM } = require('jsdom');

function getURLsFromHTML(htmlBody, baseURL) {
    const urls = [];
    const dom = new JSDOM(htmlBody);
    const lineElements = dom.window.document.querySelectorAll('a');
    for(const lineElement of lineElements) {
        if (lineElement.href.slice(0, 1) === '/') {
            try {
                const urlObj = new URL(`${baseURL}${lineElement.href}`);
                urls.push(urlObj.href);
            } catch (err) {
                console.log(`error with relative url: ${err.message}`);
            }
        } else {
            try {
                const urlObj = new URL(lineElement.href);
                urls.push(urlObj.href);
            } catch (err) {
                console.log(`error with absolute url: ${err.message}`);
            }
        }
        
    }
    return urls;
}



function normalizeURL(urlString) {
    const urlObj = new URL(urlString);
    const hostPath = `${urlObj.hostname}${urlObj.pathname}`;
    if (hostPath.length > 0 && hostPath.slice(-1) === 
'/') {
    return hostPath.slice(0, -1);
    }
    return hostPath;
}

module.exports = {
    normalizeURL,
    getURLsFromHTML
}