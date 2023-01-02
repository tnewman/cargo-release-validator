import validateCargo from "./validateCargo.js";
import validateRef from "./validateRef.js";

/**
 * Applies all validation rules.
 * 
 * @param {string} ref The Git ref to validate.
 * @param {string?} prefix An optional prefix that tags must start with.
 * @throws An error with a message describing the failed validation rule.
 */
export default function validate() {
    validateCargo();
    validateRef(ref, prefix);
}
