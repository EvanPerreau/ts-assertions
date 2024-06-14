import {assert_array} from "../src";

describe('AssertArray', () => {
    it('should not throw an error for an array', () => {
        expect(() => assert_array([])).not.toThrow();
    });

    it('should throw an error for a non-array', () => {
        expect(() => assert_array(123)).toThrow('Expected value to be an array');
    });
})