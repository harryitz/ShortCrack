export function forward(url) {
    const extensionUrl = chrome.runtime.getURL(
        `src/redirect/redirect.html?to=${encodeURIComponent(url)}`
    );
    window.location.href = extensionUrl;
}
