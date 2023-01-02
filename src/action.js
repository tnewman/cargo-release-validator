import core from "@actions/core";
import github from "@actions/github";
import validate from "./validate.js";

export default async function action() {
    try {
        console.log(JSON.stringify(github.context));

        const ref = github.context.ref;
        const prefix = core.getInput('prefix');
        validate(ref, prefix);
    } catch (error) {
        core.setFailed(error.message);
    }
}
