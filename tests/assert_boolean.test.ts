import {assert_boolean} from "../src";

describe('AssertBoolean', () => {
    it('should not throw an error for a boolean', () => {
        expect(() => assert_boolean(true)).not.toThrow();
    });

    it('should throw an error for a non-boolean', () => {
        expect(() => assert_boolean(123)).toThrow('Expected value to be a boolean');
    });
})