import { bypassRequests, forward } from "../utils/dom.js";
import { wait } from "../utils/wait.js";
import { register } from "./registry.js";

register({
    match: /sub2unlock\.com/,
    async bypass(url) {
        await wait(1000);
        const scriptTag = document.getElementById("__NEXT_DATA__");

        if (scriptTag) {
            const jsonData = JSON.parse(scriptTag.textContent);
            const sinkData = jsonData.props?.pageProps?.sink?.data;

            if (sinkData) {
                forward(sinkData.unlocked_link);
            }
        }
    },
});
