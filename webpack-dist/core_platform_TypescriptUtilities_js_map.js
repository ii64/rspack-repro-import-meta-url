(self["webpackChunk"] = self["webpackChunk"] || []).push([["core_platform_TypescriptUtilities_js_map"],{

/***/ "./core/platform/TypescriptUtilities.js.map":
/*!**************************************************!*\
  !*** ./core/platform/TypescriptUtilities.js.map ***!
  \**************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"TypescriptUtilities.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/core/platform/TypescriptUtilities.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B;;;;GAIG;AACH,MAAM,UAAU,wBAAwB,CAAI,GAAM,EAAE,OAAgB;IAClE,IAAI,GAAG,KAAK,IAAI,IAAI,GAAG,KAAK,SAAS,EAAE,CAAC;QACtC,MAAM,IAAI,KAAK,CAAC,6DAA6D,GAAG,GAAG,OAAO,CAAC,CAAC,CAAC,KAAK,OAAO,EAAE,CAAC,CAAC,CAAC,EAAE,EAAE,CAAC,CAAC;IACtH,CAAC;AACH,CAAC;AAED,MAAM,UAAU,WAAW,CAAC,IAAW,EAAE,OAAe;IACtD,MAAM,IAAI,KAAK,CAAC,OAAO,CAAC,CAAC;AAC3B,CAAC;AAED;;;;GAIG;AACH,MAAM,UAAU,eAAe,CAAI,aAAgB;IACjD,OAAO,aAAa,CAAC;AACvB,CAAC\",\"sourcesContent\":[\"// Copyright 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\n/**\\n * This is useful to keep TypeScript happy in a test - if you have a value\\n * that's potentially `null` you can use this function to assert that it isn't,\\n * and satisfy TypeScript that the value is present.\\n */\\nexport function assertNotNullOrUndefined<T>(val: T, message?: string): asserts val is NonNullable<T> {\\n  if (val === null || val === undefined) {\\n    throw new Error(`Expected given value to not be null/undefined but it was: ${val}${message ? `\\\\n${message}` : ''}`);\\n  }\\n}\\n\\nexport function assertNever(type: never, message: string): never {\\n  throw new Error(message);\\n}\\n\\n/**\\n * This is useful to check on the type-level that the unhandled cases of\\n * a switch are exactly `T` (where T is usually a union type of enum values).\\n * @param caseVariable\\n */\\nexport function assertUnhandled<T>(_caseVariable: T): T {\\n  return _caseVariable;\\n}\\n\\nexport type FieldsThatExtend<Type, Selector> = {\\n  [Key in keyof Type]: Type[Key] extends Selector ? Key : never;\\n}[keyof Type];\\n\\nexport type PickFieldsThatExtend<Type, Selector> = Pick<Type, FieldsThatExtend<Type, Selector>>;\\n\\n/**\\n * Turns a Union type (a | b) into an Intersection type (a & b).\\n * This is a helper type to implement the \\\"NoUnion\\\" guard.\\n *\\n * Adapted from https://stackoverflow.com/a/50375286.\\n *\\n * The tautological `T extends any` is necessary to trigger distributivity for\\n * plain unions, e.g. in IntersectionFromUnion<'a'|'b'> TypeScript expands it\\n * to  ('a' extends any ? (arg: 'a') => void : never)\\n *  |  ('b' extends any ? (arg: 'b') => void : never)\\n *\\n * The second extends clause then asks TypeScript to find a type of the form\\n * `(arg: infer U) => void` that upper-bounds the union, i.e., intuitively,\\n * a type that converts to each of the union members. This forces U to be the\\n * intersection of 'a' and 'b' in the example.\\n *\\n * Please note that some intersection types are simply impossible, e.g.\\n * `string & number`. There is no type that fulfills both at the same time. A\\n * union of this kind is reduced to `never`.\\n */\\n// eslint-disable-next-line @typescript-eslint/no-explicit-any\\ntype IntersectionFromUnion<T> = (T extends any ? (arg: T) => void : never) extends((arg: infer U) => void) ? U : never;\\n\\n/**\\n * When writing generic code it may be desired to disallow Union types from\\n * being passed. This type can be used in those cases.\\n *\\n *   function foo<T>(argument: NoUnion<T>) {...}\\n *\\n * Would result in a compile error for foo<a|b>(...); invocations as `argument`\\n * would be typed as `never`.\\n *\\n * Adapted from https://stackoverflow.com/a/50641073.\\n *\\n * Conditional types become distributive when receiving a union type. To\\n * prevent this from happening, we use `[T] extends [IntersectionFromUnion<T>]`\\n * instead of `T extends IntersectionFromUnion<T>`.\\n * See: https://www.typescriptlang.org/docs/handbook/2/conditional-types.html\\n */\\nexport type NoUnion<T> = [T] extends [IntersectionFromUnion<T>] ? T : never;\\n\"]}");

/***/ })

}]);