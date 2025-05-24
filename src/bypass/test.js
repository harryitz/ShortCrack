import { forward } from "../utils/dom.js";
import { wait } from "../utils/wait.js";
import { register } from "./registry.js";

register({
    match: /github\.com/,
    async bypass(url) {
        wait(1000);
        // forward(url.replace(/github\.com/, "githubusercontent.com"));
    },
});
