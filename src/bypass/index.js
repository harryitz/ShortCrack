const modules = import.meta.glob("./*.js", { eager: true });

const rules = Object.values(modules)
    .map((mod) => mod.default)
    .filter((r) => r?.match && r?.bypass);

export async function bypassUrl(url) {
    for (const rule of rules) {
        if (rule.match.test(url)) {
            return await rule.bypass(url);
        }
    }
    return null;
}
