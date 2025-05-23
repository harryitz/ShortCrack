import "./bypass/test.js";
import { bypassUrl } from "./bypass/registry.js";

export async function main() {
    const bypass = await bypassUrl(window.location.href);
}
