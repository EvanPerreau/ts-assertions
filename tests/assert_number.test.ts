import {assert_number} from "../src";

describe('AssertNumber', () => {
    it('should not throw an error for a number', () => {
        expect(() => assert_number(123)).not.toThrow();
    });

    it('should throw an error for a non-number', () => {
        expect(() => assert_number('hello')).toThrow('Expected value to be a number');
    });
})