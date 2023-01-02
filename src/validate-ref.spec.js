import {describe, expect, test} from "@jest/globals";
import validateRef from "./validate-ref";

describe('validateRef', () => {
    test('tag ref validation succeeds', () => {
        validateRef('tags', 'v1.0.0', null);
    });

    test('tag ref validation succeeds with prefix', () => {
        validateRef('tags', 'v1.0.0', 'v');
    });

    test('tag ref validation fails with missing prefix', () => {
        expect(() => validateRef('tags', '1.0.0', 'v'))
            .toThrow('The tag name 1.0.0 does not start with the required prefix v!');
    });

    test('tag ref validation fails with invalid version', () => {
        expect(() => validateRef('tags', '1', null))
            .toThrow('The tag name 1 does not include a valid semantic version!');
    });

    test('head ref validation succeeds', () => {
        validateRef('heads', 'main', null);
    });
});
