import {assertArray} from "../src";

describe('AssertArray', () => {
    it('should not throw an error for an array', () => {
        expect(() => assertArray([])).not.toThrow();
    });

    it('should throw an error for a non-array', () => {
        expect(() => assertArray(123)).toThrow('Expected value to be an array');
    });
})