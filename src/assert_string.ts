export function assertString(value: any): asserts value is string {
  if (typeof value !== 'string') {
    throw new Error('Expected value to be a string');
  }
}
