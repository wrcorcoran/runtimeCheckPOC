"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const ts_runtime_checks_1 = require("ts-runtime-checks");
// import base_bad1 from './jsons/base_bad1.json';
// import base_bad2 from './jsons/base_bad2.json';
const base_good_json_1 = __importDefault(require("../jsons/base_good.json"));
// declare function is<T, _M = { __$marker: "is" }>(prop: unknown) : prop is T;
(0, globals_1.describe)('Testing [BaseResult]', () => {
    (0, globals_1.test)('Valid', () => {
        const isBase = (0, ts_runtime_checks_1.is)(base_good_json_1.default);
        (0, globals_1.expect)(isBase).toBe(true);
    });
    (0, globals_1.test)('Invalid, missing field', () => {
        (0, globals_1.expect)(false).toBe(false);
    });
    (0, globals_1.test)('Invalid, string instead of number', () => {
        (0, globals_1.expect)(false).toBe(false);
    });
});
