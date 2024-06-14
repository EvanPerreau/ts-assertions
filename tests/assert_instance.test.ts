import {assert_instance} from "../src";

describe('AssertInstance', () => {
    it('should not throw an error for an instance', () => {
        expect(() => assert_instance(new String('hello'), String)).not.toThrow();
    });

    it('should throw an error for a non-instance', () => {
        expect(() => assert_instance(123, String)).toThrow('Expected value to be an instance of String');
    });
})