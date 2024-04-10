"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateType = exports.debounce = exports.shortKey = void 0;
const types_1 = require("./types");
const shortKey = (key) => {
    if (!key)
        return '???';
    const str = key === null || key === void 0 ? void 0 : key.toString();
    return `${str.substring(0, 4)}...${str.substring(str.length - 5, str.length)}`;
};
exports.shortKey = shortKey;
// Define the debounce function
function debounce(callback, delay) {
    let timerId;
    return async (...args) => {
        if (timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}
exports.debounce = debounce;
const validateType = async (type, value) => {
    switch (type) {
        case types_1.InstructionFieldTypes.Key:
            if (!value) {
                return false;
            }
            return /^[1-9A-HJ-NP-Za-km-z]{40,44}$/.test(value);
        default:
            return true;
    }
};
exports.validateType = validateType;
