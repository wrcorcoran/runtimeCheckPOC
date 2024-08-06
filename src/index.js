"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_runtime_checks_1 = require("ts-runtime-checks");
const main = (user) => {
    const test = ts_runtime_checks_1.is;
    console.log(typeof test);
    // const res = tsRuntimeChecks.is<User>(user);
    // console.log(res);
};
main({ name: "abc", id: 3 });
