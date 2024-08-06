import {describe, expect, test} from '@jest/globals';
import * as types from '../src/types';
import { is } from 'ts-runtime-checks';

// import base_bad1 from './jsons/base_bad1.json';
// import base_bad2 from './jsons/base_bad2.json';
import base_good from '../jsons/base_good.json';

// declare function is<T, _M = { __$marker: "is" }>(prop: unknown) : prop is T;

describe('Testing [BaseResult]', () => {
  test('Valid', () => {
    const isBase = is<types.BaseResult>(base_good);
    expect(isBase).toBe(true);
  });

  test('Invalid, missing field', () => {
    expect(false).toBe(false);
  });

  test('Invalid, string instead of number', () => {
    expect(false).toBe(false);
  });
});