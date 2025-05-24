import "./bypass/test.js";
import { bypassUrl } from "./bypass/registry.js";
import info from "./shortcrack.js";

export async function main() {
    const dev_mode_enabled =
        (await chrome.storage.local.get(["dev_mode_enabled"]))
            .dev_mode_enabled ?? false;

    if (info.is_development && dev_mode_enabled) {
        const bypass = await bypassUrl(window.location.href);
    }
}
