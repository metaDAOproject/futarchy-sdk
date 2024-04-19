"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPlaceOrderType = exports.validOrderTypes = void 0;
exports.validOrderTypes = [
    "limit",
    "market",
    "grid",
    "immediateOrCancel",
    "fillOrKill",
    "postOnly",
    "postOnlySlide",
];
function isPlaceOrderType(str) {
    return exports.validOrderTypes.includes(str);
}
exports.isPlaceOrderType = isPlaceOrderType;
