"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assert_instance = void 0;
function assert_instance(value, constructor) {
    if (!(value instanceof constructor)) {
        throw new Error(`Expected value to be an instance of ${constructor.name}`);
    }
}
exports.assert_instance = assert_instance;
