"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assert_array = void 0;
function assert_array(value) {
    if (!Array.isArray(value)) {
        throw new Error('Expected value to be an array');
    }
}
exports.assert_array = assert_array;
