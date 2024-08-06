"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_console_ConsoleFormat_test_js"],{

/***/ "./panels/console/ConsoleFormat.test.js":
/*!**********************************************!*\
  !*** ./panels/console/ConsoleFormat.test.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _console_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./console.js */ "./panels/console/console.js");
// Copyright (c) 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


describe('ConsoleFormat', () => {
    describe('format', () => {
        it('deals with empty format string', () => {
            assert.deepNestedPropertyVal(_console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.format('', []), 'tokens', []);
        });
        it('yields unused arguments', () => {
            const argNumber = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RemoteObject.RemoteObject.fromLocalObject(42);
            const argString = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RemoteObject.RemoteObject.fromLocalObject('Hello World!');
            const argSymbol = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RemoteObject.RemoteObject.fromLocalObject(Symbol('My very special Symbol'));
            const { args } = _console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.format('This string is boring!', [argNumber, argString, argSymbol]);
            assert.lengthOf(args, 3);
            assert.strictEqual(args[0], argNumber);
            assert.strictEqual(args[1], argString);
            assert.strictEqual(args[2], argSymbol);
        });
        it('deals with format strings without formatting specifiers', () => {
            assert.deepNestedPropertyVal(_console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.format('This string does NOT contain specifiers', []), 'tokens', [
                {
                    type: 'string',
                    value: 'This string does NOT contain specifiers',
                },
            ]);
        });
        it('replaces %% with %', () => {
            assert.deepNestedPropertyVal(_console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.format('Go 100%%, and then another 50%%!', []), 'tokens', [
                { type: 'string', value: 'Go 100%, and then another 50%!' },
            ]);
        });
        it('deals with trailing %', () => {
            assert.deepNestedPropertyVal(_console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.format('75%', []), 'tokens', [
                { type: 'string', value: '75%' },
            ]);
        });
        it('deals with %o and %O', () => {
            const argFirst = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RemoteObject.RemoteObject.fromLocalObject({ 'first': 1 });
            const argSecond = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RemoteObject.RemoteObject.fromLocalObject({ 'second': 2 });
            const { tokens } = _console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.format('%o %O', [argFirst, argSecond]);
            assert.lengthOf(tokens, 3);
            assert.propertyVal(tokens[0], 'type', 'optimal');
            assert.propertyVal(tokens[0], 'value', argFirst);
            assert.propertyVal(tokens[1], 'type', 'string');
            assert.propertyVal(tokens[1], 'value', ' ');
            assert.propertyVal(tokens[2], 'type', 'generic');
            assert.propertyVal(tokens[2], 'value', argSecond);
        });
        it('deals with %c', () => {
            assert.deepNestedPropertyVal(_console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.format('%cColorful%c!', [
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RemoteObject.RemoteObject.fromLocalObject('color: red'),
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RemoteObject.RemoteObject.fromLocalObject('color: black'),
            ]), 'tokens', [
                { type: 'style', value: 'color: red' },
                { type: 'string', value: 'Colorful' },
                { type: 'style', value: 'color: black' },
                { type: 'string', value: '!' },
            ]);
        });
        it('eats arguments with %_', () => {
            const argFirst = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RemoteObject.RemoteObject.fromLocalObject({ 'first': 1 });
            const argSecond = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RemoteObject.RemoteObject.fromLocalObject({ 'second': 2 });
            const argThird = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RemoteObject.RemoteObject.fromLocalObject({ 'third': 3 });
            const { tokens, args } = _console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.format('This is%_ some %_text!', [argFirst, argSecond, argThird]);
            assert.lengthOf(args, 1);
            assert.strictEqual(args[0], argThird);
            assert.lengthOf(tokens, 1);
            assert.propertyVal(tokens[0], 'type', 'string');
            assert.propertyVal(tokens[0], 'value', 'This is some text!');
        });
        it('leaves unsatisfied formatting specifiers in place', () => {
            assert.deepNestedPropertyVal(_console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.format('%_ %O %o %d %i %f %s %c', []), 'tokens', [
                { type: 'string', value: '%_ %O %o %d %i %f %s %c' },
            ]);
        });
        it('deals with %s', () => {
            assert.deepNestedPropertyVal(_console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.format('%s%s%s!', [
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RemoteObject.RemoteObject.fromLocalObject('Hello'),
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RemoteObject.RemoteObject.fromLocalObject(' '),
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RemoteObject.RemoteObject.fromLocalObject('World'),
            ]), 'tokens', [
                { type: 'string', value: 'Hello World!' },
            ]);
            assert.deepNestedPropertyVal(_console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.format('%s!', [
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RemoteObject.RemoteObject.fromLocalObject('%s %s'),
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RemoteObject.RemoteObject.fromLocalObject('Hello'),
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RemoteObject.RemoteObject.fromLocalObject('World'),
            ]), 'tokens', [
                { type: 'string', value: 'Hello World!' },
            ]);
        });
        it('deals with %d, %i, and %f', () => {
            assert.deepNestedPropertyVal(_console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.format('%d %i %f', [
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RemoteObject.RemoteObject.fromLocalObject(42.1),
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RemoteObject.RemoteObject.fromLocalObject(21.5),
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RemoteObject.RemoteObject.fromLocalObject(3.1415),
            ]), 'tokens', [
                { type: 'string', value: '42 21 3.1415' },
            ]);
            assert.deepNestedPropertyVal(_console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.format('%f %i %d', [
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RemoteObject.RemoteObject.fromLocalObject(Symbol('Some %s')),
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RemoteObject.RemoteObject.fromLocalObject('Some %s'),
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RemoteObject.RemoteObject.fromLocalObject(false),
            ]), 'tokens', [
                { type: 'string', value: 'NaN NaN NaN' },
            ]);
        });
        it('deals with ANSI color codes to change font weight and style', () => {
            assert.deepNestedPropertyVal(_console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.format('\x1B[1ma\x1B[2mb\x1B[22mc', []), 'tokens', [
                { type: 'style', value: 'font-weight:bold' },
                { type: 'string', value: 'a' },
                { type: 'style', value: 'font-weight:lighter' },
                { type: 'string', value: 'b' },
                { type: 'style', value: '' },
                { type: 'string', value: 'c' },
            ]);
            assert.deepNestedPropertyVal(_console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.format('\x1B[3ma\x1B[23mb', []), 'tokens', [
                { type: 'style', value: 'font-style:italic' },
                { type: 'string', value: 'a' },
                { type: 'style', value: '' },
                { type: 'string', value: 'b' },
            ]);
            assert.deepNestedPropertyVal(_console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.format('\x1B[3;1ma\x1B[23mb\x1B[22;3mc', []), 'tokens', [
                { type: 'style', value: 'font-style:italic;font-weight:bold' },
                { type: 'string', value: 'a' },
                { type: 'style', value: 'font-weight:bold' },
                { type: 'string', value: 'b' },
                { type: 'style', value: 'font-style:italic' },
                { type: 'string', value: 'c' },
            ]);
        });
        it('deals with ANSI color codes to change text decoration', () => {
            assert.deepNestedPropertyVal(_console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.format('\x1B[4m1\x1B[9;24;53m2\x1B[29;4;53m3\x1B[24;29;55m', []), 'tokens', [
                { type: 'style', value: 'text-decoration:underline' },
                { type: 'string', value: '1' },
                { type: 'style', value: 'text-decoration:line-through overline' },
                { type: 'string', value: '2' },
                { type: 'style', value: 'text-decoration:overline underline' },
                { type: 'string', value: '3' },
                { type: 'style', value: '' },
            ]);
        });
        it('deals with unsupported ANSI color codes', () => {
            assert.deepNestedPropertyVal(_console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.format('\x1B[1;254mHello\x1B[255m\x1B[2mWorld\x1B[128m', []), 'tokens', [
                { type: 'style', value: 'font-weight:bold' },
                { type: 'string', value: 'Hello' },
                { type: 'style', value: 'font-weight:bold' },
                { type: 'style', value: 'font-weight:lighter' },
                { type: 'string', value: 'World' },
                { type: 'style', value: 'font-weight:lighter' },
            ]);
            assert.deepNestedPropertyVal(_console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.format('\x1B[232;255;254m', []), 'tokens', [
                { type: 'style', value: '' },
            ]);
        });
        it('deals with ANSI SGR reset parameter', () => {
            assert.deepNestedPropertyVal(_console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.format('\x1B[m', []), 'tokens', [
                { type: 'style', value: '' },
            ]);
            assert.deepNestedPropertyVal(_console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.format('\x1B[0m', []), 'tokens', [
                { type: 'style', value: '' },
            ]);
            assert.deepNestedPropertyVal(_console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.format('\x1B[1;2;m', []), 'tokens', [
                { type: 'style', value: '' },
            ]);
            assert.deepNestedPropertyVal(_console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.format('\x1B[1mA\x1B[3mB\x1B[0mC', []), 'tokens', [
                { type: 'style', value: 'font-weight:bold' },
                { type: 'string', value: 'A' },
                { type: 'style', value: 'font-weight:bold;font-style:italic' },
                { type: 'string', value: 'B' },
                { type: 'style', value: '' },
                { type: 'string', value: 'C' },
            ]);
        });
        it('leaves broken ANSI escape sequences in place', () => {
            assert.deepNestedPropertyVal(_console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.format('Bar\x1B[90', []), 'tokens', [
                { type: 'string', value: 'Bar\x1B[90' },
            ]);
            assert.deepNestedPropertyVal(_console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.format('\x1B[39FOO', []), 'tokens', [
                { type: 'string', value: '\x1B[39FOO' },
            ]);
        });
        it('deals with ANSI color codes', () => {
            [
                // Foreground codes
                [30, 'color:var(--console-color-black)'],
                [31, 'color:var(--console-color-red)'],
                [32, 'color:var(--console-color-green)'],
                [33, 'color:var(--console-color-yellow)'],
                [34, 'color:var(--console-color-blue)'],
                [35, 'color:var(--console-color-magenta)'],
                [36, 'color:var(--console-color-cyan)'],
                [37, 'color:var(--console-color-gray)'],
                [90, 'color:var(--console-color-darkgray)'],
                [91, 'color:var(--console-color-lightred)'],
                [92, 'color:var(--console-color-lightgreen)'],
                [93, 'color:var(--console-color-lightyellow)'],
                [94, 'color:var(--console-color-lightblue)'],
                [95, 'color:var(--console-color-lightmagenta)'],
                [96, 'color:var(--console-color-lightcyan)'],
                [97, 'color:var(--console-color-white)'],
                // Background codes
                [40, 'background-color:var(--console-color-black)'],
                [41, 'background-color:var(--console-color-red)'],
                [42, 'background-color:var(--console-color-green)'],
                [43, 'background-color:var(--console-color-yellow)'],
                [44, 'background-color:var(--console-color-blue)'],
                [45, 'background-color:var(--console-color-magenta)'],
                [46, 'background-color:var(--console-color-cyan)'],
                [47, 'background-color:var(--console-color-gray)'],
                [100, 'background-color:var(--console-color-darkgray)'],
                [101, 'background-color:var(--console-color-lightred)'],
                [102, 'background-color:var(--console-color-lightgreen)'],
                [103, 'background-color:var(--console-color-lightyellow)'],
                [104, 'background-color:var(--console-color-lightblue)'],
                [105, 'background-color:var(--console-color-lightmagenta)'],
                [106, 'background-color:var(--console-color-lightcyan)'],
                [107, 'background-color:var(--console-color-white)'],
            ].forEach(([code, value]) => {
                assert.deepNestedPropertyVal(_console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.format(`\x1B[${code}m`, []), 'tokens', [
                    { type: 'style', value },
                ]);
            });
            for (let i = 0; i <= 255; i += 33) {
                assert.deepNestedPropertyVal(_console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.format(`\x1B[38;2;${i}m\x1B[38;2;5;${i};m\x1B[48;2;${i};${i};${i};39m\x1B[49m`, []), 'tokens', [
                    { type: 'style', value: `color:rgb(${i},0,0)` },
                    { type: 'style', value: `color:rgb(5,${i},0)` },
                    { type: 'style', value: `background-color:rgb(${i},${i},${i})` },
                    { type: 'style', value: '' },
                ]);
            }
        });
        it('correctly clears ANSI color and background color', () => {
            assert.deepNestedPropertyVal(_console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.format('foo \x1B[41m\x1B[37mbar\x1B[39m\x1B[49m baz', []), 'tokens', [
                { type: 'string', value: 'foo ' },
                { type: 'style', value: 'background-color:var(--console-color-red)' },
                { type: 'style', value: 'background-color:var(--console-color-red);color:var(--console-color-gray)' },
                { type: 'string', value: 'bar' },
                { type: 'style', value: 'background-color:var(--console-color-red)' },
                { type: 'style', value: '' },
                { type: 'string', value: ' baz' },
            ]);
        });
        it('deals with ANSI colors and formatting specifiers', () => {
            const { tokens } = _console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.format('\x1B[30m%d\x1B[31m%f\x1B[32m%s\x1B[33m%d\x1B[34m%f\x1B[35m%s\x1B[36m%d\x1B[37m%f\x1B[m', [1, 1.1, 'a', 2, 2.2, 'b', 3, 3.3].map(obj => _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RemoteObject.RemoteObject.fromLocalObject(obj)));
            assert.deepEqual(tokens, [
                { type: 'style', value: 'color:var(--console-color-black)' },
                { type: 'string', value: '1' },
                { type: 'style', value: 'color:var(--console-color-red)' },
                { type: 'string', value: '1.1' },
                { type: 'style', value: 'color:var(--console-color-green)' },
                { type: 'string', value: 'a' },
                { type: 'style', value: 'color:var(--console-color-yellow)' },
                { type: 'string', value: '2' },
                { type: 'style', value: 'color:var(--console-color-blue)' },
                { type: 'string', value: '2.2' },
                { type: 'style', value: 'color:var(--console-color-magenta)' },
                { type: 'string', value: 'b' },
                { type: 'style', value: 'color:var(--console-color-cyan)' },
                { type: 'string', value: '3' },
                { type: 'style', value: 'color:var(--console-color-gray)' },
                { type: 'string', value: '3.3' },
                { type: 'style', value: '' },
            ]);
        });
        it('deals with ANSI color combinations', () => {
            const { tokens } = _console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.format('\x1B[30m1\x1B[40m2\x1B[31m3\x1B[41m4\x1B[90m5\x1B[100m6\x1B[91m7\x1B[101m8', []);
            assert.deepEqual(tokens, [
                { type: 'style', value: 'color:var(--console-color-black)' },
                { type: 'string', value: '1' },
                { type: 'style', value: 'color:var(--console-color-black);background-color:var(--console-color-black)' },
                { type: 'string', value: '2' },
                { type: 'style', value: 'color:var(--console-color-red);background-color:var(--console-color-black)' },
                { type: 'string', value: '3' },
                { type: 'style', value: 'color:var(--console-color-red);background-color:var(--console-color-red)' },
                { type: 'string', value: '4' },
                { type: 'style', value: 'color:var(--console-color-darkgray);background-color:var(--console-color-red)' },
                { type: 'string', value: '5' },
                { type: 'style', value: 'color:var(--console-color-darkgray);background-color:var(--console-color-darkgray)' },
                { type: 'string', value: '6' },
                { type: 'style', value: 'color:var(--console-color-lightred);background-color:var(--console-color-darkgray)' },
                { type: 'string', value: '7' },
                { type: 'style', value: 'color:var(--console-color-lightred);background-color:var(--console-color-lightred)' },
                { type: 'string', value: '8' },
            ]);
        });
    });
    describe('updateStyle', () => {
        it('allows allow-listed styles', () => {
            const styles = new Map();
            _console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.updateStyle(styles, 'border-top-style:solid');
            assert.deepEqual(styles.get('border-top-style'), { value: 'solid', priority: '' });
            _console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.updateStyle(styles, 'color:red');
            assert.deepEqual(styles.get('color'), { value: 'red', priority: '' });
            _console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.updateStyle(styles, 'font-family:serif');
            assert.deepEqual(styles.get('font-family'), { value: 'serif', priority: '' });
            _console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.updateStyle(styles, 'line-height:100%');
            assert.deepEqual(styles.get('line-height'), { value: '100%', priority: '' });
            _console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.updateStyle(styles, 'margin-top:30px');
            assert.deepEqual(styles.get('margin-top'), { value: '30px', priority: '' });
            _console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.updateStyle(styles, 'padding-top : 20px');
            assert.deepEqual(styles.get('padding-top'), { value: '20px', priority: '' });
            _console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.updateStyle(styles, 'text-align : center');
            assert.deepEqual(styles.get('text-align'), { value: 'center', priority: '' });
        });
        it('handles multiple styles', () => {
            const styles = new Map();
            _console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.updateStyle(styles, 'font-size:14px; color:red');
            assert.deepEqual(styles.get('color'), { value: 'red', priority: '' });
            assert.deepEqual(styles.get('font-size'), { value: '14px', priority: '' });
        });
        it('resets styles', () => {
            const styles = new Map();
            _console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.updateStyle(styles, 'font-size:14px; color:red');
            _console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.updateStyle(styles, 'color:red');
            assert.isFalse(styles.has('font-size'));
        });
        it('blocks styles outside of allow-list', () => {
            const styles = new Map();
            _console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.updateStyle(styles, 'visibility:hidden');
            assert.isFalse(styles.has('visibility'));
            _console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.updateStyle(styles, 'width:100px');
            assert.isFalse(styles.has('width'));
            _console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.updateStyle(styles, 'box-sizing:border-box');
            assert.isFalse(styles.has('box-sizing'));
        });
        it('blocks block-listed url schemes in values', () => {
            const styles = new Map();
            _console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.updateStyle(styles, 'background-image:url(http://localhost/a.png)');
            assert.isFalse(styles.has('background-image'));
            _console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.updateStyle(styles, 'background-image:url(https://localhost/a.png)');
            assert.isFalse(styles.has('background-image'));
            _console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.updateStyle(styles, 'background-image:url(resource://localhost/a.png)');
            assert.isFalse(styles.has('background-image'));
            _console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.updateStyle(styles, 'background-image:url(app://com.foo.bar/index.html)');
            assert.isFalse(styles.has('background-image'));
            _console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.updateStyle(styles, 'background-image:url(chrome://a/b.png)');
            assert.isFalse(styles.has('background-image'));
            _console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.updateStyle(styles, 'background-image:url(about:flags)');
            assert.isFalse(styles.has('background-image'));
            _console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.updateStyle(styles, 'background-image:url(ftp://localhost/a.png)');
            assert.isFalse(styles.has('background-image'));
            _console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.updateStyle(styles, 'background-image:url(file://c/a.txt)');
            assert.isFalse(styles.has('background-image'));
            _console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.updateStyle(styles, 'border-image-source:url(file://c/a.txt)');
            assert.isFalse(styles.has('border-image-source'));
            _console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.updateStyle(styles, 'background-image:url(httpS://localhost/a.png)');
            assert.isFalse(styles.has('background-image'));
            _console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.updateStyle(styles, 'border-image-source:url(fIle://c/a.txt)');
            assert.isFalse(styles.has('border-image-source'));
            _console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.updateStyle(styles, 'background-image:url(https\\0009://localhost/a.png)');
            assert.isFalse(styles.has('background-image'));
            _console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.updateStyle(styles, 'background-image:url("file://c/a.txt")'); // With double quotes.
            assert.isFalse(styles.has('background-image'));
            _console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.updateStyle(styles, 'background-image:url(\'http://localhost/a.png\')'); // With single quots.
            assert.isFalse(styles.has('background-image'));
            _console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.updateStyle(styles, 'background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAAAAABzHgM7AAAAF0lEQVR42mM4Awb/wYCBYg6EgghRzAEAWDWBGQVyKPMAAAAASUVORK5CYII=), url(http://localhost/a.png)'); // Multiple URLs
            assert.isFalse(styles.has('background-image'));
        });
        it('allows data urls in values', () => {
            const dataUrl = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAAAAABzHgM7AAAAF0lEQVR42mM4Awb/wYCBYg6EgghRzAEAWDWBGQVyKPMAAAAASUVORK5CYII=)';
            const styles = new Map();
            _console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.updateStyle(styles, `background-image:${dataUrl}`);
            assert.include(styles.get('background-image').value, 'data:image/png;base64');
            _console_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleFormat.updateStyle(styles, `border-image-source:${dataUrl}`);
            assert.include(styles.get('border-image-source').value, 'data:image/png;base64');
        });
    });
});
//# sourceMappingURL=ConsoleFormat.test.js.map

/***/ })

}]);