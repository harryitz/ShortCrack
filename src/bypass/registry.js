const rules = [];

export function register(rule) {
    if (!rule || !rule.bypass || !rule.match) return;

    const matchArray = Array.isArray(rule.match) ? rule.match : [rule.match];

    if (matchArray.every((m) => m instanceof RegExp)) {
        rules.push({ ...rule, match: matchArray });
    }
}

export async function bypassUrl(url) {
    for (const rule of rules) {
        if (rule.match.some((regex) => regex.test(url))) {
            return await rule.bypass(url);
        }
    }
    return null;
}
