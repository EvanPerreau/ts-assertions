import {assertNumber} from "../src";

describe('AssertNumber', () => {
    it('should not throw an error for a number', () => {
        expect(() => assertNumber(123)).not.toThrow();
    });

    it('should throw an error for a non-number', () => {
        expect(() => assertNumber('hello')).toThrow('Expected value to be a number');
    });
})