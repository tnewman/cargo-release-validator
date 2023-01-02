import {info} from "@actions/core";
import validateCargo from "./validate-cargo.js";
import validateRef from "./validate-ref.js";

/**
 * Applies all validation rules.
 * 
 * @param {string} cargoManifest The path to the Cargo Manifest File.
 * @param {string} ref The Git ref to validate.
 * @param {string?} prefix An optional prefix that tags must start with.
 * @throws An error with a message describing the failed validation rule.
 */
export default function validate(ref, prefix) {
    const [_, type, name] = ref.split("/", 3);

    info(`Validating Ref Type: ${type}, Ref Name: ${name}, Prefix: ${prefix}`);

    validateCargo(cargoManifest, type, name, prefix);
    validateRef(type, name, prefix);

    info(`Validation succeeded`);
}
