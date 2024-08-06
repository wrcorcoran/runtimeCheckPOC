import { is, Assert } from "ts-runtime-checks";
// import * as tsRuntimeChecks from 'ts-runtime-checks';
import * as types from './types';
import { InterfaceType, Type } from "typescript";

// const main = (/*data: unknown, expected: boolean, type: Type | InterfaceType*/) => {
//     const valid = is<string>(123);
// }

// main("", false, );

interface User {
    name: string,
    id: number
}

const main = (user: unknown) => {
    const test = is;
    console.log(typeof test);
    // const res = tsRuntimeChecks.is<User>(user);
    // console.log(res);
}

main({name: "abc", id: 3});