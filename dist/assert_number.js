"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assert_number = void 0;
function assert_number(value) {
    if (typeof value !== 'number') {
        throw new Error('Expected value to be a number');
    }
}
exports.assert_number = assert_number;
