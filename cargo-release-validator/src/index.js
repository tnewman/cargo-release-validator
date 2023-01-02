import {getInput} from "@actions/core";
import {setFailed} from "@actions/core";
import {context} from "@actions/github";
import validate from "./validate";

try {
    const ref = context.payload.ref;
    const prefix = getInput('prefix');
    validate(ref, prefix);
} catch (error) {
    setFailed(error.message);
}
