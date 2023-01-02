import {info} from "@actions/core";
import validateCargo from "./validateCargo.js";
import validateRef from "./validateRef.js";

/**
 * Applies all validation rules.
 * 
 * @param {string} ref The Git ref to validate.
 * @param {string?} prefix An optional prefix that tags must start with.
 * @throws An error with a message describing the failed validation rule.
 */
export default function validate(ref, prefix) {
    const [_, type, name] = ref.split("/", 3);

    info(`Validating Ref Type: ${type}, Ref Name: ${name}, Prefix: ${prefix}`);

    validateCargo(type, name, prefix);
    validateRef(type, name, prefix);

    info(`Validation succeeded`);
}
