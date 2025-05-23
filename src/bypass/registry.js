const rules = [];

export function register(rule) {
    if (rule?.match && rule?.bypass) {
        rules.push(rule);
    }
}

export async function bypassUrl(url) {
    for (const rule of rules) {
        if (rule.match.test(url)) {
            return await rule.bypass(url);
        }
    }
    return null;
}
