chrome.runtime.onMessage.addListener((message) => {
    if (message.action === "disable_extension") {
        // chrome.action.setIcon({ path: "src/icons/icon-black.png" });
        chrome.action.setBadgeText({ text: "OFF" });
        chrome.action.setBadgeBackgroundColor({ color: "#000000" });
    }
});
