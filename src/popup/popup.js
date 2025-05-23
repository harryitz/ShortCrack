import info from "../shortcrack.js";

document.getElementById("version").textContent = info.version;
document.getElementById("author").textContent = info.author;

const devToggle = document.getElementById("devMode");

chrome.storage.local.get(["dev_mode_enabled"], (result) => {
    const enabled = result.dev_mode_enabled ?? false;
    devToggle.checked = enabled;

    if (info.is_development && !enabled) {
        // chrome.action.setIcon({ path: "icons/icon-black.png" });
        chrome.runtime.sendMessage({ action: "disable_extension" });
    }
});

devToggle.addEventListener("change", () => {
    chrome.storage.local.set({ dev_mode_enabled: devToggle.checked }, () => {
        chrome.runtime.reload();
    });
});
