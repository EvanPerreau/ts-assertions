export function assertObject(value: any): asserts value is object {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    throw new Error('Expected value to be an object');
  }
}
