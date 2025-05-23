(async () => {
    const contentMain = chrome.runtime.getURL("src/content_main.js");
    const contentScript = await import(contentMain);
    await contentScript.main();
})();
