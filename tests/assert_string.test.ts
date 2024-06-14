import {assertString} from "../src";

describe('assertString', () => {
  it('should not throw an error for a string', () => {
    expect(() => assertString('hello')).not.toThrow();
  });

  it('should throw an error for a non-string', () => {
    expect(() => assertString(123)).toThrow('Expected value to be a string');
  });
});
