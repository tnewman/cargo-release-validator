/**
 * Validates that a Cargo Manifest File contains the 
 * same version for tag refs.
 * 
 * @param {string} cargoManifest The path to the Cargo Manifest File.
 * @param {string} type The type of ref (branch/tag).
 * @param {string} name The ref name to validate (tag name/branch name).
 * @param {string?} prefix An optional prefix that tags must start with.
 * @throws An error with a message describing the failed validation rule.
 */
export default async function validateCargo(cargoManifest, type, name, prefix) {
    let normalizedName;

    if (prefix) {
        if (!name.startsWith(prefix)) {
            throw `The tag name ${name} does not start with the required prefix ${prefix}!`;
        }

        normalizedName = name.slice(prefix.length);
    } else {
        normalizedName = name;
    }
}
