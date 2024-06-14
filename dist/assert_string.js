"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assert_string = void 0;
function assert_string(value) {
    if (typeof value !== 'string') {
        throw new Error('Expected value to be a string');
    }
}
exports.assert_string = assert_string;
