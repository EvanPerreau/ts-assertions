export function assert_array<T>(value: any): asserts value is Array<T> {
  if (!Array.isArray(value)) {
    throw new Error('Expected value to be an array');
  }
}
