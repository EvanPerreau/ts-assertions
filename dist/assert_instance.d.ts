export declare function assert_instance<T>(value: any, constructor: {
    new (...args: any[]): T;
}): asserts value is T;
