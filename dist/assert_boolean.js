"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assert_boolean = void 0;
function assert_boolean(value) {
    if (typeof value !== 'boolean') {
        throw new Error('Expected value to be a boolean');
    }
}
exports.assert_boolean = assert_boolean;
