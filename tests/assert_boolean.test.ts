import {assertBoolean} from "../src";

describe('AssertBoolean', () => {
    it('should not throw an error for a boolean', () => {
        expect(() => assertBoolean(true)).not.toThrow();
    });

    it('should throw an error for a non-boolean', () => {
        expect(() => assertBoolean(123)).toThrow('Expected value to be a boolean');
    });
})