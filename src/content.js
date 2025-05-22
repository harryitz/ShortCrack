import { bypassUrl } from "./bypass/index.js";

(async () => {
    const currentUrl = window.location.href;
    const bypassed = await bypassUrl(currentUrl);
    if (bypassed && bypassed !== currentUrl) {
        console.log("[Bypass] Redirecting to:", bypassed);
        window.location.href = bypassed;
    }
})();
