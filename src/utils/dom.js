export function forward(url) {
    const extensionUrl = chrome.runtime.getURL(
        `src/redirect/redirect.html?to=${encodeURIComponent(url)}`
    );
    window.location.href = extensionUrl;
}

export async function bypassRequests(execution_method) {
    const rawOpen = XMLHttpRequest.prototype.open;

    if (!XMLHttpRequest.prototype._hooked) {
        XMLHttpRequest.prototype.open = function () {
            this.addEventListener("load", () => {
                try {
                    execution_method(this);
                } catch (e) {
                    console.error("Error in execution_method (XHR):", e);
                }
            });
            rawOpen.apply(this, arguments);
        };
        XMLHttpRequest.prototype._hooked = true;
    }

    if (!window._fetchHooked) {
        const rawFetch = window.fetch;
        window.fetch = async (requestInfo, init) => {
            const result = await rawFetch(requestInfo, init);
            try {
                execution_method(result.clone());
            } catch (e) {
                console.error("Error in execution_method (fetch):", e);
            }
            return result;
        };
        window._fetchHooked = true;
    }
}
