import semver from "semver";

/**
 * Validates a Git ref.
 * 
 * @param {string} type The type of ref (branch/tag).
 * @param {string} name The ref name to validate (tag name/branch name).
 * @param {string?} prefix An optional prefix that tags must start with.
 * @throws An error with a message describing the failed validation rule.
 */
export default function validateRef(type, name, prefix) {
    if (type !== "tags") {
        return;
    }

    validateTag(name, prefix);
}

function validateTag(name, prefix) {
    let normalizedName;

    if (prefix) {
        if (!name.startsWith(prefix)) {
            throw `The tag name ${name} does not start with the required prefix ${prefix}!`;
        }

        normalizedName = name.slice(prefix.length);
    } else {
        normalizedName = name;
    }

    if(!semver.valid(normalizedName)) {
        throw `The tag name ${name} does not include a valid semantic version!`;
    }
}
