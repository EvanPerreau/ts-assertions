export function assertBoolean(value: any): asserts value is boolean {
  if (typeof value !== 'boolean') {
    throw new Error('Expected value to be a boolean');
  }
}
