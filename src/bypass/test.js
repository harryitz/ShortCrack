import { wait } from "../utils/wait.js";
import { register } from "./registry.js";

register({
    match: /github\.com/,
    async bypass(url) {
        wait(100000);
        return url.replace(/github\.com/, "githubusercontent.com");
    },
});
