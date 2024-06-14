export function assert_number(value: any): asserts value is number {
  if (typeof value !== 'number') {
    throw new Error('Expected value to be a number');
  }
}
