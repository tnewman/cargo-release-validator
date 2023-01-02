import {getInput} from "@actions/core";
import {setFailed} from "@actions/core";
import {context} from "@actions/github";
import validate from "./validate";

export default async function action() {
    try {
        const ref = context.payload.ref;
        const prefix = getInput('prefix');
        validate(ref, prefix);
    } catch (error) {
        setFailed(error.message);
    }
}
