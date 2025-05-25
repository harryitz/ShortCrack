const rules = [];

function waitForDepends(depends = []) {
    const promises = depends.map((dep) => {
        switch (dep) {
            case "DOMContentLoaded":
                if (document.readyState === "loading") {
                    return new Promise((resolve) =>
                        document.addEventListener("DOMContentLoaded", resolve, {
                            once: true,
                        })
                    );
                }
                return Promise.resolve();
            default:
                return Promise.resolve();
        }
    });

    return Promise.all(promises);
}

export function register(rule) {
    if (!rule || !rule.bypass || !rule.match) return;

    const matchArray = Array.isArray(rule.match) ? rule.match : [rule.match];

    if (matchArray.every((m) => m instanceof RegExp)) {
        rules.push({
            ...rule,
            match: matchArray,
            depends: rule.depends || [],
        });
    }
}

export async function bypassUrl(url) {
    for (const rule of rules) {
        if (rule.match.some((regex) => regex.test(url))) {
            await waitForDepends(rule.depends);
            return await rule.bypass(url);
        }
    }
    return null;
}
