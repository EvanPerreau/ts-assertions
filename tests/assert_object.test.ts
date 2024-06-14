import {assert_object} from "../src";

describe('AssertObject', () => {
    it('should not throw an error for an object', () => {
        expect(() => assert_object({})).not.toThrow();
    });

    it('should throw an error for a non-object', () => {
        expect(() => assert_object(123)).toThrow('Expected value to be an object');
    });
})