import {assertObject} from "../src";

describe('AssertObject', () => {
    it('should not throw an error for an object', () => {
        expect(() => assertObject({})).not.toThrow();
    });

    it('should throw an error for a non-object', () => {
        expect(() => assertObject(123)).toThrow('Expected value to be an object');
    });
})