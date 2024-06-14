"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assert_object = void 0;
function assert_object(value) {
    if (typeof value !== 'object' || value === null || Array.isArray(value)) {
        throw new Error('Expected value to be an object');
    }
}
exports.assert_object = assert_object;
