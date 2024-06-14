import {assert_string} from "../src";

describe('assertString', () => {
  it('should not throw an error for a string', () => {
    expect(() => assert_string('hello')).not.toThrow();
  });

  it('should throw an error for a non-string', () => {
    expect(() => assert_string(123)).toThrow('Expected value to be a string');
  });
});
