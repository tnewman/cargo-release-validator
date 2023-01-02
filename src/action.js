import {info, setFailed} from "@actions/core";
import {context} from "@actions/github";
import validate from "./validate.js";

export default async function action() {
    try {
        const ref = context.ref;
        const prefix = core.getInput('prefix');

        validate(ref, prefix);
    } catch (error) {
        setFailed(error.message);
    }
}
