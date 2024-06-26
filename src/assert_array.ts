export function assertArray<T>(value: any): asserts value is Array<T> {
  if (!Array.isArray(value)) {
    throw new Error('Expected value to be an array');
  }
}
