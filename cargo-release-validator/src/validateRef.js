/**
 * Validates a Git ref.
 * 
 * @param {string} ref The Git ref to validate.
 * @param {string?} prefix An optional prefix that tags must start with.
 * @throws An error with a message describing the failed validation rule.
 */
export default function validateRef(ref, prefix) {
    const [_, type, name] = ref.split("/", 3);

    if (type !== "tags") {
        return;
    }

    validateTag(name, prefix);
}

function validateTag(name, prefix) {
    let normalizedName;

    if (prefix) {
        if (!name.startsWith(prefix)) {
            throw `The tag name ${tag} does not start with the required prefix ${prefix}!`
        }

        normalizedName = name.slice(prefix.length);
    } else {
        normalizedName = name;
    }
}