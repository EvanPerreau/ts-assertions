export function assert_instance<T>(value: any, constructor: { new (...args: any[]): T }): asserts value is T {
  if (!(value instanceof constructor)) {
    throw new Error(`Expected value to be an instance of ${constructor.name}`);
  }
}
