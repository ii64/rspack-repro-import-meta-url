"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["core_sdk_CSSStyleDeclaration_test_js"],{

/***/ "./core/sdk/CSSStyleDeclaration.test.js":
/*!**********************************************!*\
  !*** ./core/sdk/CSSStyleDeclaration.test.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sdk.js */ "./core/sdk/sdk.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



function assertPropertValues(object, expectedKeyValuePairs) {
    for (const [key, value] of expectedKeyValuePairs) {
        assert.propertyVal(object, key, value);
    }
}
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.describeWithMockConnection)('CSSStyleDeclaration', () => {
    it('should correctly construct new CSSStyleDeclaration', () => {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        const cssModel = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.CSSModel.CSSModel(target);
        const stubCSSStyle = {
            styleSheetId: 'STYLE_SHEET_ID',
            cssProperties: [
                {
                    name: 'margin',
                    value: '1px',
                    disabled: false,
                    implicit: false,
                    longhandProperties: [
                        { name: 'margin-top', value: '1px' },
                        { name: 'margin-right', value: '1px' },
                        { name: 'margin-bottom', value: '1px' },
                        { name: 'margin-left', value: '1px' },
                    ],
                    range: { startLine: 1, startColumn: 4, endLine: 1, endColumn: 16 },
                    text: 'margin: 1px;',
                },
                {
                    name: 'margin-top',
                    value: '5px',
                    disabled: false,
                    implicit: false,
                    longhandProperties: [],
                    range: { startLine: 2, startColumn: 4, endLine: 2, endColumn: 20 },
                    text: 'margin-top: 5px;',
                },
            ],
            shorthandEntries: [],
            cssText: '\n    margin: 1px;\n    margin-top: 5px;\n',
            range: { startLine: 0, startColumn: 0, endLine: 3, endColumn: 0 },
        };
        const style = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.CSSStyleDeclaration.CSSStyleDeclaration(cssModel, null, stubCSSStyle, _sdk_js__WEBPACK_IMPORTED_MODULE_2__.CSSStyleDeclaration.Type.Regular);
        assertPropertValues(style.allProperties()[0], [
            ['name', 'margin'],
            ['value', '1px'],
            ['implicit', false],
            ['index', 0],
        ]);
        assert.strictEqual(style.allProperties()[0].activeInStyle(), true);
        assertPropertValues(style.allProperties()[1], [
            ['name', 'margin-top'],
            ['value', '5px'],
            ['implicit', false],
            ['index', 1],
        ]);
        assert.strictEqual(style.allProperties()[1].activeInStyle(), true);
        assertPropertValues(style.allProperties()[2], [
            ['name', 'margin-top'],
            ['value', '1px'],
            ['implicit', true],
            ['index', 2],
        ]);
        assert.strictEqual(style.allProperties()[2].activeInStyle(), false);
        assertPropertValues(style.allProperties()[3], [
            ['name', 'margin-right'],
            ['value', '1px'],
            ['implicit', true],
            ['index', 3],
        ]);
        assert.strictEqual(style.allProperties()[3].activeInStyle(), true);
        assertPropertValues(style.allProperties()[4], [
            ['name', 'margin-bottom'],
            ['value', '1px'],
            ['implicit', true],
            ['index', 4],
        ]);
        assert.strictEqual(style.allProperties()[4].activeInStyle(), true);
        assertPropertValues(style.allProperties()[5], [
            ['name', 'margin-left'],
            ['value', '1px'],
            ['implicit', true],
            ['index', 5],
        ]);
        assert.strictEqual(style.allProperties()[5].activeInStyle(), true);
    });
    it('should correctly compute active and inactive declarations', () => {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        const cssModel = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.CSSModel.CSSModel(target);
        const stubCSSStyle = {
            styleSheetId: 'STYLE_SHEET_ID',
            cssProperties: [
                {
                    name: 'margin-top',
                    value: '5px',
                    disabled: false,
                    implicit: false,
                    longhandProperties: [],
                    range: { startLine: 1, startColumn: 4, endLine: 1, endColumn: 20 },
                    text: 'margin-top: 5px;',
                },
                {
                    name: 'margin',
                    value: '1px',
                    disabled: false,
                    implicit: false,
                    longhandProperties: [
                        { name: 'margin-top', value: '1px' },
                        { name: 'margin-right', value: '1px' },
                        { name: 'margin-bottom', value: '1px' },
                        { name: 'margin-left', value: '1px' },
                    ],
                    range: { startLine: 2, startColumn: 4, endLine: 2, endColumn: 16 },
                    text: 'margin: 1px;',
                },
                {
                    name: 'margin-left',
                    value: '30px',
                    disabled: false,
                    implicit: false,
                    longhandProperties: [],
                    range: { startLine: 3, startColumn: 4, endLine: 3, endColumn: 22 },
                    text: 'margin-left: 30px;',
                },
                {
                    name: 'margin',
                    value: '42px',
                    disabled: true,
                    longhandProperties: [
                        { name: 'margin-top', value: '42px' },
                        { name: 'margin-right', value: '42px' },
                        { name: 'margin-bottom', value: '42px' },
                        { name: 'margin-left', value: '42px' },
                    ],
                    range: { startLine: 4, startColumn: 4, endLine: 4, endColumn: 23 },
                    text: '/* margin: 42px; */',
                },
                {
                    name: 'margin-top',
                    value: '35px',
                    disabled: false,
                    implicit: false,
                    longhandProperties: [],
                    range: { startLine: 5, startColumn: 4, endLine: 5, endColumn: 21 },
                    text: 'margin-top: 35px;',
                },
            ],
            shorthandEntries: [],
            cssText: '\n    margin-top: 5px;\n    margin: 1px;\n    margin-left: 30px;\n    /* margin: 42px; */\n    margin-top: 35px;\n',
            range: { startLine: 0, startColumn: 0, endLine: 6, endColumn: 0 },
        };
        const style = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.CSSStyleDeclaration.CSSStyleDeclaration(cssModel, null, stubCSSStyle, _sdk_js__WEBPACK_IMPORTED_MODULE_2__.CSSStyleDeclaration.Type.Regular);
        assert.strictEqual(style.getPropertyValue('margin'), '1px');
        assert.strictEqual(style.getPropertyValue('margin-top'), '35px');
        assert.strictEqual(style.getPropertyValue('margin-right'), '1px');
        assert.strictEqual(style.getPropertyValue('margin-bottom'), '1px');
        assert.strictEqual(style.getPropertyValue('margin-left'), '30px');
    });
    it('correclty computes inactive variable properties in the presence of properties that failed to parse', () => {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        const cssModel = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.CSSModel.CSSModel(target);
        const stubCSSStyle = {
            styleSheetId: 'STYLE_SHEET_ID',
            cssProperties: [
                {
                    name: '--a',
                    value: '5px',
                    disabled: false,
                    implicit: false,
                    longhandProperties: [],
                    range: { startLine: 1, startColumn: 4, endLine: 1, endColumn: 20 },
                    text: '--a 5px;',
                },
                {
                    name: '--a',
                    value: '10',
                    disabled: false,
                    implicit: false,
                    parsedOk: false,
                    longhandProperties: [],
                    range: { startLine: 1, startColumn: 4, endLine: 1, endColumn: 20 },
                    text: '--a 10;',
                },
            ],
            shorthandEntries: [],
            cssText: '\n    --a: 5px;\n    --a: 10\n',
        };
        const style = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.CSSStyleDeclaration.CSSStyleDeclaration(cssModel, null, stubCSSStyle, _sdk_js__WEBPACK_IMPORTED_MODULE_2__.CSSStyleDeclaration.Type.Regular);
        assert.isFalse(style.hasActiveProperty('--a'));
    });
    it('should use ranged declaration as the active one', () => {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        const cssModel = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.CSSModel.CSSModel(target);
        const stubCSSStyle = {
            styleSheetId: 'STYLE_SHEET_ID',
            cssProperties: [
                {
                    name: '-webkit-background-clip',
                    value: 'border-box',
                    disabled: false,
                    implicit: false,
                    longhandProperties: [],
                    range: { startLine: 0, startColumn: 0, endLine: 0, endColumn: 36 },
                    text: '-webkit-background-clip: border-box;',
                },
                {
                    name: 'background-clip',
                    value: 'border-box',
                },
            ],
            shorthandEntries: [],
            cssText: '-webkit-background-clip: border-box;',
            range: { startLine: 0, startColumn: 0, endLine: 0, endColumn: 36 },
        };
        const style = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.CSSStyleDeclaration.CSSStyleDeclaration(cssModel, null, stubCSSStyle, _sdk_js__WEBPACK_IMPORTED_MODULE_2__.CSSStyleDeclaration.Type.Regular);
        assert.strictEqual(style.allProperties().length, 1);
        assertPropertValues(style.allProperties()[0], [
            ['name', '-webkit-background-clip'],
            ['value', 'border-box'],
            ['implicit', false],
            ['index', 0],
        ]);
        assert.strictEqual(style.getPropertyValue('-webkit-background-clip'), 'border-box');
    });
});
//# sourceMappingURL=CSSStyleDeclaration.test.js.map

/***/ })

}]);