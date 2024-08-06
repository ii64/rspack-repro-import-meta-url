"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_elements_components_CSSPropertyIconResolver_test_js"], {
"./panels/elements/components/CSSPropertyIconResolver.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components.js */ "./panels/elements/components/components.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('CSSPropertyIconResolver', function() {
    var mapFromStyle = function mapFromStyle(style) {
        var result = new Map();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = Object.keys(style)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var key = _step.value;
                result.set(key, style[key]);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        return result;
    };
    it('can computed actual directions for row and column', function() {
        var tests = [
            {
                style: {
                    'direction': 'ltr',
                    display: 'flex'
                },
                expected: {
                    row: "left-to-right" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.LEFT_TO_RIGHT */ ,
                    column: "top-to-bottom" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.TOP_TO_BOTTOM */ ,
                    'row-reverse': "right-to-left" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.RIGHT_TO_LEFT */ ,
                    'column-reverse': "bottom-to-top" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.BOTTOM_TO_TOP */ 
                }
            },
            {
                style: {
                    'direction': 'ltr',
                    'writing-mode': 'vertical-rl',
                    display: 'flex'
                },
                expected: {
                    row: "top-to-bottom" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.TOP_TO_BOTTOM */ ,
                    column: "right-to-left" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.RIGHT_TO_LEFT */ ,
                    'row-reverse': "bottom-to-top" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.BOTTOM_TO_TOP */ ,
                    'column-reverse': "left-to-right" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.LEFT_TO_RIGHT */ 
                }
            },
            {
                style: {
                    'direction': 'ltr',
                    'writing-mode': 'vertical-lr',
                    display: 'flex'
                },
                expected: {
                    row: "top-to-bottom" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.TOP_TO_BOTTOM */ ,
                    column: "left-to-right" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.LEFT_TO_RIGHT */ ,
                    'row-reverse': "bottom-to-top" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.BOTTOM_TO_TOP */ ,
                    'column-reverse': "right-to-left" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.RIGHT_TO_LEFT */ 
                }
            },
            {
                style: {
                    'direction': 'ltr',
                    'writing-mode': 'tb',
                    display: 'flex'
                },
                expected: {
                    row: "top-to-bottom" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.TOP_TO_BOTTOM */ ,
                    column: "right-to-left" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.RIGHT_TO_LEFT */ ,
                    'row-reverse': "bottom-to-top" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.BOTTOM_TO_TOP */ ,
                    'column-reverse': "left-to-right" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.LEFT_TO_RIGHT */ 
                }
            },
            {
                style: {
                    'direction': 'ltr',
                    'writing-mode': 'tb-rl',
                    display: 'flex'
                },
                expected: {
                    row: "top-to-bottom" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.TOP_TO_BOTTOM */ ,
                    column: "right-to-left" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.RIGHT_TO_LEFT */ ,
                    'row-reverse': "bottom-to-top" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.BOTTOM_TO_TOP */ ,
                    'column-reverse': "left-to-right" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.LEFT_TO_RIGHT */ 
                }
            },
            {
                style: {
                    'direction': 'rtl',
                    display: 'flex'
                },
                expected: {
                    row: "right-to-left" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.RIGHT_TO_LEFT */ ,
                    column: "top-to-bottom" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.TOP_TO_BOTTOM */ ,
                    'row-reverse': "left-to-right" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.LEFT_TO_RIGHT */ ,
                    'column-reverse': "bottom-to-top" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.BOTTOM_TO_TOP */ 
                }
            },
            {
                style: {
                    'direction': 'rtl',
                    'writing-mode': 'vertical-rl',
                    display: 'flex'
                },
                expected: {
                    row: "bottom-to-top" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.BOTTOM_TO_TOP */ ,
                    column: "right-to-left" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.RIGHT_TO_LEFT */ ,
                    'row-reverse': "top-to-bottom" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.TOP_TO_BOTTOM */ ,
                    'column-reverse': "left-to-right" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.LEFT_TO_RIGHT */ 
                }
            },
            {
                style: {
                    'direction': 'rtl',
                    'writing-mode': 'vertical-lr',
                    display: 'flex'
                },
                expected: {
                    row: "bottom-to-top" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.BOTTOM_TO_TOP */ ,
                    column: "left-to-right" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.LEFT_TO_RIGHT */ ,
                    'row-reverse': "top-to-bottom" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.TOP_TO_BOTTOM */ ,
                    'column-reverse': "right-to-left" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.RIGHT_TO_LEFT */ 
                }
            },
            {
                style: {
                    'direction': 'rtl',
                    'writing-mode': 'tb',
                    display: 'flex'
                },
                expected: {
                    row: "bottom-to-top" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.BOTTOM_TO_TOP */ ,
                    column: "right-to-left" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.RIGHT_TO_LEFT */ ,
                    'row-reverse': "top-to-bottom" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.TOP_TO_BOTTOM */ ,
                    'column-reverse': "left-to-right" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.LEFT_TO_RIGHT */ 
                }
            },
            {
                style: {
                    'direction': 'rtl',
                    'writing-mode': 'tb-rl',
                    display: 'flex'
                },
                expected: {
                    row: "bottom-to-top" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.BOTTOM_TO_TOP */ ,
                    column: "right-to-left" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.RIGHT_TO_LEFT */ ,
                    'row-reverse': "top-to-bottom" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.TOP_TO_BOTTOM */ ,
                    'column-reverse': "left-to-right" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.LEFT_TO_RIGHT */ 
                }
            }
        ];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = tests[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var test = _step.value;
                assert.deepEqual(_components_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyIconResolver.getPhysicalDirections(mapFromStyle(test.style)), test.expected, "Test ".concat(JSON.stringify(test.style), " failed."));
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    });
    it('can rotate the icon', function() {
        assert.deepEqual(_components_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyIconResolver.rotateFlexDirectionIcon("left-to-right" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.LEFT_TO_RIGHT */ ), {
            iconName: 'flex-direction',
            rotate: -90,
            scaleX: -1,
            scaleY: 1
        });
        assert.deepEqual(_components_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyIconResolver.rotateFlexDirectionIcon("right-to-left" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.RIGHT_TO_LEFT */ ), {
            iconName: 'flex-direction',
            rotate: 90,
            scaleX: 1,
            scaleY: 1
        });
        assert.deepEqual(_components_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyIconResolver.rotateFlexDirectionIcon("top-to-bottom" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.TOP_TO_BOTTOM */ ), {
            iconName: 'flex-direction',
            rotate: 0,
            scaleX: 1,
            scaleY: 1
        });
        assert.deepEqual(_components_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyIconResolver.rotateFlexDirectionIcon("bottom-to-top" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.BOTTOM_TO_TOP */ ), {
            iconName: 'flex-direction',
            rotate: 0,
            scaleX: 1,
            scaleY: -1
        });
    });
    it('can find an icon for flex-direction row', function() {
        var tests = [
            {
                style: {
                    'direction': 'ltr',
                    display: 'flex'
                },
                expected: "left-to-right" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.LEFT_TO_RIGHT */ 
            },
            {
                style: {
                    'direction': 'ltr',
                    'writing-mode': 'tb',
                    display: 'flex'
                },
                expected: "top-to-bottom" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.TOP_TO_BOTTOM */ 
            },
            {
                style: {
                    'direction': 'ltr',
                    'writing-mode': 'vertical-lr',
                    display: 'flex'
                },
                expected: "top-to-bottom" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.TOP_TO_BOTTOM */ 
            },
            {
                style: {
                    'direction': 'ltr',
                    'writing-mode': 'vertical-rl',
                    display: 'flex'
                },
                expected: "top-to-bottom" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.TOP_TO_BOTTOM */ 
            },
            {
                style: {
                    'direction': 'ltr',
                    'writing-mode': 'tb-rl',
                    display: 'flex'
                },
                expected: "top-to-bottom" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.TOP_TO_BOTTOM */ 
            },
            {
                style: {
                    'direction': 'rtl',
                    display: 'flex'
                },
                expected: "right-to-left" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.RIGHT_TO_LEFT */ 
            },
            {
                style: {
                    'direction': 'rtl',
                    'writing-mode': 'tb',
                    display: 'flex'
                },
                expected: "bottom-to-top" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.BOTTOM_TO_TOP */ 
            },
            {
                style: {
                    'direction': 'rtl',
                    'writing-mode': 'vertical-lr',
                    display: 'flex'
                },
                expected: "bottom-to-top" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.BOTTOM_TO_TOP */ 
            },
            {
                style: {
                    'direction': 'rtl',
                    'writing-mode': 'vertical-rl',
                    display: 'flex'
                },
                expected: "bottom-to-top" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.BOTTOM_TO_TOP */ 
            },
            {
                style: {
                    'direction': 'rtl',
                    'writing-mode': 'tb-rl',
                    display: 'flex'
                },
                expected: "bottom-to-top" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.BOTTOM_TO_TOP */ 
            }
        ];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = tests[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var test = _step.value;
                assert.deepEqual(_components_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyIconResolver.findIcon('flex-direction: row', mapFromStyle(test.style)), _components_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyIconResolver.rotateFlexDirectionIcon(test.expected), "Test 'flex-direction: row'(".concat(JSON.stringify(test.style), ") failed."));
                assert.deepEqual(_components_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyIconResolver.findIcon('flex-direction: row-reverse', mapFromStyle(test.style)), _components_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyIconResolver.rotateFlexDirectionIcon(_components_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyIconResolver.reverseDirection(test.expected)), "Test 'flex-direction: row-reverse'(".concat(JSON.stringify(test.style), ") failed."));
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    });
    it('can find an icon for flex-direction: column and column-reverse', function() {
        var tests = [
            {
                style: {
                    'direction': 'ltr',
                    display: 'flex'
                },
                expected: "top-to-bottom" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.TOP_TO_BOTTOM */ 
            },
            {
                style: {
                    'writing-mode': 'vertical-rl',
                    display: 'flex'
                },
                expected: "right-to-left" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.RIGHT_TO_LEFT */ 
            },
            {
                style: {
                    'writing-mode': 'vertical-lr',
                    display: 'flex'
                },
                expected: "left-to-right" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.LEFT_TO_RIGHT */ 
            }
        ];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = tests[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var test = _step.value;
                assert.deepEqual(_components_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyIconResolver.findIcon('flex-direction: column', mapFromStyle(test.style)), _components_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyIconResolver.rotateFlexDirectionIcon(test.expected), "Test 'flex-direction: column'(".concat(JSON.stringify(test.style), ") failed."));
                assert.deepEqual(_components_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyIconResolver.findIcon('flex-direction: column-reverse', mapFromStyle(test.style)), _components_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyIconResolver.rotateFlexDirectionIcon(_components_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyIconResolver.reverseDirection(test.expected)), "Test 'flex-direction: column-reverse'(".concat(JSON.stringify(test.style), ") failed."));
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    });
    it('can rotate an icon for align-content', function() {
        var iconName = 'iconName';
        assert.deepEqual(_components_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyIconResolver.rotateAlignContentIcon(iconName, "left-to-right" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.LEFT_TO_RIGHT */ ), {
            iconName: iconName,
            rotate: -90,
            scaleX: 1,
            scaleY: 1
        });
        assert.deepEqual(_components_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyIconResolver.rotateAlignContentIcon(iconName, "right-to-left" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.RIGHT_TO_LEFT */ ), {
            iconName: iconName,
            rotate: 90,
            scaleX: 1,
            scaleY: 1
        });
        assert.deepEqual(_components_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyIconResolver.rotateAlignContentIcon(iconName, "top-to-bottom" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.TOP_TO_BOTTOM */ ), {
            iconName: iconName,
            rotate: 0,
            scaleX: 1,
            scaleY: 1
        });
        assert.deepEqual(_components_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyIconResolver.rotateAlignContentIcon(iconName, "bottom-to-top" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.BOTTOM_TO_TOP */ ), {
            iconName: iconName,
            rotate: 0,
            scaleX: 1,
            scaleY: 1
        });
    });
    it('can find an icon for align-content properties', function() {
        var tests = [
            // flexbox
            {
                style: {
                    'flex-direction': 'row',
                    'align-content': 'center',
                    display: 'flex'
                },
                iconName: 'align-content-center',
                expected: "top-to-bottom" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.TOP_TO_BOTTOM */ 
            },
            {
                style: {
                    'flex-direction': 'column',
                    'align-content': 'center',
                    display: 'flex'
                },
                iconName: 'align-content-center',
                expected: "left-to-right" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.LEFT_TO_RIGHT */ 
            },
            {
                style: {
                    'flex-direction': 'row',
                    'align-content': 'center',
                    'writing-mode': 'vertical-rl',
                    display: 'flex'
                },
                iconName: 'align-content-center',
                expected: "right-to-left" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.RIGHT_TO_LEFT */ 
            },
            {
                style: {
                    'flex-direction': 'row',
                    'align-content': 'center',
                    'writing-mode': 'vertical-lr',
                    display: 'flex'
                },
                iconName: 'align-content-center',
                expected: "left-to-right" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.LEFT_TO_RIGHT */ 
            },
            {
                style: {
                    'flex-direction': 'row-reverse',
                    'align-content': 'center',
                    'writing-mode': 'vertical-rl',
                    display: 'flex'
                },
                iconName: 'align-content-center',
                expected: "right-to-left" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.RIGHT_TO_LEFT */ 
            },
            // grid
            {
                style: {
                    'align-content': 'center',
                    display: 'grid'
                },
                iconName: 'align-content-center',
                expected: "top-to-bottom" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.TOP_TO_BOTTOM */ 
            },
            {
                style: {
                    'align-content': 'center',
                    'writing-mode': 'vertical-rl',
                    display: 'grid'
                },
                iconName: 'align-content-center',
                expected: "right-to-left" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.RIGHT_TO_LEFT */ 
            }
        ];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = tests[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var test = _step.value;
                assert.deepEqual(_components_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyIconResolver.findIcon("align-content: ".concat(test.style['align-content']), mapFromStyle(test.style)), _components_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyIconResolver.rotateAlignContentIcon(test.iconName, test.expected), "Test align-content(".concat(JSON.stringify(test.style), ") failed."));
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    });
    it('can rotate an icon for justify-content', function() {
        var iconName = 'iconName';
        assert.deepEqual(_components_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyIconResolver.rotateJustifyContentIcon(iconName, "left-to-right" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.LEFT_TO_RIGHT */ ), {
            iconName: iconName,
            rotate: 0,
            scaleX: 1,
            scaleY: 1
        });
        assert.deepEqual(_components_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyIconResolver.rotateJustifyContentIcon(iconName, "right-to-left" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.RIGHT_TO_LEFT */ ), {
            iconName: iconName,
            rotate: 0,
            scaleX: -1,
            scaleY: 1
        });
        assert.deepEqual(_components_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyIconResolver.rotateJustifyContentIcon(iconName, "top-to-bottom" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.TOP_TO_BOTTOM */ ), {
            iconName: iconName,
            rotate: 90,
            scaleX: 1,
            scaleY: 1
        });
        assert.deepEqual(_components_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyIconResolver.rotateJustifyContentIcon(iconName, "bottom-to-top" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.BOTTOM_TO_TOP */ ), {
            iconName: iconName,
            rotate: -90,
            scaleX: 1,
            scaleY: 1
        });
    });
    it('can find an icon for justify-content properties', function() {
        var tests = [
            // flexbox
            {
                style: {
                    'flex-direction': 'row',
                    'justify-content': 'center',
                    display: 'flex'
                },
                iconName: 'justify-content-center',
                expected: "left-to-right" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.LEFT_TO_RIGHT */ 
            },
            {
                style: {
                    'flex-direction': 'column',
                    'justify-content': 'center',
                    display: 'flex'
                },
                iconName: 'justify-content-center',
                expected: "top-to-bottom" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.TOP_TO_BOTTOM */ 
            },
            {
                style: {
                    'flex-direction': 'row',
                    'justify-content': 'center',
                    'writing-mode': 'vertical-rl',
                    display: 'flex'
                },
                iconName: 'justify-content-center',
                expected: "top-to-bottom" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.TOP_TO_BOTTOM */ 
            },
            {
                style: {
                    'flex-direction': 'row',
                    'justify-content': 'center',
                    'writing-mode': 'vertical-lr',
                    display: 'flex'
                },
                iconName: 'justify-content-center',
                expected: "top-to-bottom" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.TOP_TO_BOTTOM */ 
            },
            {
                style: {
                    'flex-direction': 'row-reverse',
                    'justify-content': 'center',
                    display: 'flex'
                },
                iconName: 'justify-content-center',
                expected: "right-to-left" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.RIGHT_TO_LEFT */ 
            },
            // grid
            {
                style: {
                    'justify-content': 'center',
                    display: 'grid'
                },
                iconName: 'justify-content-center',
                expected: "left-to-right" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.LEFT_TO_RIGHT */ 
            },
            {
                style: {
                    'justify-content': 'center',
                    'writing-mode': 'vertical-rl',
                    display: 'grid'
                },
                iconName: 'justify-content-center',
                expected: "top-to-bottom" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.TOP_TO_BOTTOM */ 
            }
        ];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = tests[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var test = _step.value;
                assert.deepEqual(_components_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyIconResolver.findIcon("justify-content: ".concat(test.style['justify-content']), mapFromStyle(test.style)), _components_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyIconResolver.rotateJustifyContentIcon(test.iconName, test.expected), "Test justify-content(".concat(JSON.stringify(test.style), ") failed."));
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    });
    it('can rotate an icon for align-items', function() {
        var iconName = 'iconName';
        assert.deepEqual(_components_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyIconResolver.rotateAlignItemsIcon(iconName, "left-to-right" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.LEFT_TO_RIGHT */ ), {
            iconName: iconName,
            rotate: -90,
            scaleX: 1,
            scaleY: 1
        });
        assert.deepEqual(_components_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyIconResolver.rotateAlignItemsIcon(iconName, "right-to-left" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.RIGHT_TO_LEFT */ ), {
            iconName: iconName,
            rotate: 90,
            scaleX: 1,
            scaleY: 1
        });
        assert.deepEqual(_components_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyIconResolver.rotateAlignItemsIcon(iconName, "top-to-bottom" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.TOP_TO_BOTTOM */ ), {
            iconName: iconName,
            rotate: 0,
            scaleX: 1,
            scaleY: 1
        });
        assert.deepEqual(_components_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyIconResolver.rotateAlignItemsIcon(iconName, "bottom-to-top" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.BOTTOM_TO_TOP */ ), {
            iconName: iconName,
            rotate: 0,
            scaleX: 1,
            scaleY: 1
        });
    });
    it('can find an icon for align-items properties', function() {
        var tests = [
            // flexbox
            {
                style: {
                    'flex-direction': 'row',
                    'align-items': 'flex-start',
                    display: 'flex'
                },
                iconName: 'align-items-start',
                expected: "top-to-bottom" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.TOP_TO_BOTTOM */ 
            },
            {
                style: {
                    'flex-direction': 'column',
                    'align-items': 'flex-start',
                    display: 'flex'
                },
                iconName: 'align-items-start',
                expected: "left-to-right" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.LEFT_TO_RIGHT */ 
            },
            {
                style: {
                    'flex-direction': 'row',
                    'align-items': 'flex-start',
                    'writing-mode': 'vertical-rl',
                    display: 'flex'
                },
                iconName: 'align-items-start',
                expected: "right-to-left" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.RIGHT_TO_LEFT */ 
            },
            {
                style: {
                    'flex-direction': 'row',
                    'align-items': 'flex-start',
                    'writing-mode': 'vertical-lr',
                    display: 'flex'
                },
                iconName: 'align-items-start',
                expected: "left-to-right" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.LEFT_TO_RIGHT */ 
            },
            {
                style: {
                    'flex-direction': 'column-reverse',
                    'align-items': 'flex-start',
                    display: 'flex'
                },
                iconName: 'align-items-start',
                expected: "left-to-right" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.LEFT_TO_RIGHT */ 
            },
            // grid
            {
                style: {
                    'align-items': 'start',
                    display: 'grid'
                },
                iconName: 'align-items-start',
                expected: "top-to-bottom" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.TOP_TO_BOTTOM */ 
            },
            {
                style: {
                    'align-items': 'start',
                    'writing-mode': 'vertical-lr',
                    display: 'grid'
                },
                iconName: 'align-items-start',
                expected: "left-to-right" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.LEFT_TO_RIGHT */ 
            }
        ];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = tests[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var test = _step.value;
                assert.deepEqual(_components_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyIconResolver.findIcon("align-items: ".concat(test.style['align-items']), mapFromStyle(test.style)), _components_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyIconResolver.rotateAlignItemsIcon(test.iconName, test.expected), "Test align-items(".concat(JSON.stringify(test.style), ") failed."));
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    });
    it('can find baseline icons', function() {
        var baselineIconInfo = {
            iconName: 'align-items-baseline',
            rotate: 0,
            scaleX: 1,
            scaleY: 1
        };
        assert.deepEqual(_components_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyIconResolver.findIcon('align-items: baseline', mapFromStyle({
            display: 'flex'
        })), baselineIconInfo, 'Assertion for the \'align-items: baseline\' icon failed.');
        assert.deepEqual(_components_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyIconResolver.findIcon('align-self: baseline', null, mapFromStyle({
            display: 'flex'
        })), baselineIconInfo, 'Assertion for the \'align-self: baseline\' icon failed.');
        assert.deepEqual(_components_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyIconResolver.findIcon('align-content: baseline', mapFromStyle({
            display: 'flex'
        })), baselineIconInfo, 'Assertion for the \'align-content: baseline\' icon failed.');
    });
    it('can find an icon for align-self properties', function() {
        var tests = [
            // flexbox
            {
                style: {
                    'align-self': 'flex-start'
                },
                parentStyle: {
                    'flex-direction': 'row',
                    display: 'flex'
                },
                iconName: 'align-self-start',
                expected: "top-to-bottom" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.TOP_TO_BOTTOM */ 
            },
            {
                style: {
                    'align-self': 'flex-start'
                },
                parentStyle: {
                    'flex-direction': 'column',
                    display: 'flex'
                },
                iconName: 'align-self-start',
                expected: "left-to-right" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.LEFT_TO_RIGHT */ 
            },
            {
                style: {
                    'align-self': 'flex-start'
                },
                parentStyle: {
                    'flex-direction': 'row',
                    'writing-mode': 'vertical-rl',
                    display: 'flex'
                },
                iconName: 'align-self-start',
                expected: "right-to-left" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.RIGHT_TO_LEFT */ 
            },
            {
                style: {
                    'align-self': 'flex-start'
                },
                parentStyle: {
                    'writing-mode': 'vertical-lr',
                    'flex-direction': 'row',
                    display: 'flex'
                },
                iconName: 'align-self-start',
                expected: "left-to-right" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.LEFT_TO_RIGHT */ 
            },
            {
                style: {
                    'align-self': 'flex-start'
                },
                parentStyle: {
                    'flex-direction': 'column-reverse',
                    display: 'flex'
                },
                iconName: 'align-self-start',
                expected: "left-to-right" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.LEFT_TO_RIGHT */ 
            },
            // grid
            {
                style: {
                    'align-self': 'start'
                },
                parentStyle: {
                    display: 'grid'
                },
                iconName: 'align-self-start',
                expected: "top-to-bottom" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.TOP_TO_BOTTOM */ 
            },
            {
                style: {
                    'align-self': 'start'
                },
                parentStyle: {
                    'writing-mode': 'vertical-rl',
                    display: 'grid'
                },
                iconName: 'align-self-start',
                expected: "right-to-left" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.RIGHT_TO_LEFT */ 
            },
            {
                style: {
                    'align-self': 'start'
                },
                parentStyle: {
                    'writing-mode': 'vertical-lr',
                    display: 'grid'
                },
                iconName: 'align-self-start',
                expected: "left-to-right" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.LEFT_TO_RIGHT */ 
            }
        ];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = tests[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var test = _step.value;
                assert.deepEqual(_components_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyIconResolver.findIcon("align-self: ".concat(test.style['align-self']), mapFromStyle(test.style), mapFromStyle(test.parentStyle)), _components_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyIconResolver.rotateAlignItemsIcon(test.iconName, test.expected), "Test align-self(".concat(JSON.stringify(test.style), ") failed."));
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    });
    it('can find an icon for flex-wrap properties', function() {
        var tests = [
            {
                style: {
                    'flex-direction': 'row',
                    'flex-wrap': 'wrap',
                    display: 'flex'
                },
                iconName: 'flex-wrap',
                expected: "left-to-right" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.LEFT_TO_RIGHT */ 
            },
            {
                style: {
                    'flex-direction': 'row',
                    'flex-wrap': 'nowrap',
                    display: 'flex'
                },
                iconName: 'flex-no-wrap',
                expected: "left-to-right" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.LEFT_TO_RIGHT */ 
            },
            {
                style: {
                    'flex-direction': 'column',
                    'flex-wrap': 'wrap',
                    display: 'flex'
                },
                iconName: 'flex-wrap',
                expected: "top-to-bottom" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.TOP_TO_BOTTOM */ 
            },
            {
                style: {
                    'flex-direction': 'column',
                    'flex-wrap': 'nowrap',
                    display: 'flex'
                },
                iconName: 'flex-no-wrap',
                expected: "top-to-bottom" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.TOP_TO_BOTTOM */ 
            }
        ];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = tests[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var test = _step.value;
                assert.deepEqual(_components_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyIconResolver.findIcon("flex-wrap: ".concat(test.style['flex-wrap']), mapFromStyle(test.style)), _components_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyIconResolver.roateFlexWrapIcon(test.iconName, test.expected), "Test flex-wrap(".concat(JSON.stringify(test.style), ") failed."));
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    });
    it('can rotate an icon for justify-items', function() {
        var iconName = 'iconName';
        assert.deepEqual(_components_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyIconResolver.rotateJustifyItemsIcon(iconName, "left-to-right" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.LEFT_TO_RIGHT */ ), {
            iconName: iconName,
            rotate: 0,
            scaleX: 1,
            scaleY: 1
        });
        assert.deepEqual(_components_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyIconResolver.rotateJustifyItemsIcon(iconName, "right-to-left" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.RIGHT_TO_LEFT */ ), {
            iconName: iconName,
            rotate: 0,
            scaleX: -1,
            scaleY: 1
        });
        assert.deepEqual(_components_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyIconResolver.rotateJustifyItemsIcon(iconName, "top-to-bottom" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.TOP_TO_BOTTOM */ ), {
            iconName: iconName,
            rotate: 90,
            scaleX: 1,
            scaleY: 1
        });
        assert.deepEqual(_components_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyIconResolver.rotateJustifyItemsIcon(iconName, "bottom-to-top" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.BOTTOM_TO_TOP */ ), {
            iconName: iconName,
            rotate: -90,
            scaleX: 1,
            scaleY: 1
        });
    });
    it('can find an icon for justify-items properties', function() {
        var tests = [
            // grid
            {
                style: {
                    'justify-items': 'start',
                    display: 'grid'
                },
                iconName: 'justify-items-start',
                expected: "top-to-bottom" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.TOP_TO_BOTTOM */ 
            },
            {
                style: {
                    'justify-items': 'start',
                    'writing-mode': 'vertical-lr',
                    display: 'grid'
                },
                iconName: 'justify-items-start',
                expected: "right-to-left" /* ElementsComponents.CSSPropertyIconResolver.PhysicalDirection.RIGHT_TO_LEFT */ 
            }
        ];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = tests[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var test = _step.value;
                assert.deepEqual(_components_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyIconResolver.findIcon("justify-items: ".concat(test.style['justify-items']), mapFromStyle(test.style)), _components_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyIconResolver.rotateAlignItemsIcon(test.iconName, test.expected), "Test justify-items(".concat(JSON.stringify(test.style), ") failed."));
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    });
}); //# sourceMappingURL=CSSPropertyIconResolver.test.js.map


}),
"./panels/elements/components/Helper.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  legacyNodeToElementsComponentsNode: function() { return legacyNodeToElementsComponentsNode; }
});
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var legacyNodeToElementsComponentsNode = function(node) {
    return {
        parentNode: node.parentNode ? legacyNodeToElementsComponentsNode(node.parentNode) : null,
        id: node.id,
        nodeType: node.nodeType(),
        pseudoType: node.pseudoType(),
        shadowRootType: node.shadowRootType(),
        nodeName: node.nodeName(),
        nodeNameNicelyCased: node.nodeNameInCorrectCase(),
        legacyDomNode: node,
        highlightNode: function(mode) {
            return node.highlight(mode);
        },
        clearHighlight: function() {
            return _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.OverlayModel.OverlayModel.hideDOMNodeHighlight();
        },
        getAttribute: node.getAttribute.bind(node)
    };
}; //# sourceMappingURL=Helper.js.map


}),
"./panels/elements/components/LayoutPaneUtils.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
 //# sourceMappingURL=LayoutPaneUtils.js.map


}),
"./panels/elements/components/components.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AccessibilityTreeNode: function() { return /* reexport module object */ _AccessibilityTreeNode_js__WEBPACK_IMPORTED_MODULE_0__; },
  AdornerManager: function() { return /* reexport module object */ _AdornerManager_js__WEBPACK_IMPORTED_MODULE_1__; },
  AdornerSettingsPane: function() { return /* reexport module object */ _AdornerSettingsPane_js__WEBPACK_IMPORTED_MODULE_2__; },
  AnchorFunctionLinkSwatch: function() { return /* reexport module object */ _AnchorFunctionLinkSwatch_js__WEBPACK_IMPORTED_MODULE_3__; },
  CSSHintDetailsView: function() { return /* reexport module object */ _CSSHintDetailsView_js__WEBPACK_IMPORTED_MODULE_6__; },
  CSSPropertyDocsView: function() { return /* reexport module object */ _CSSPropertyDocsView_js__WEBPACK_IMPORTED_MODULE_7__; },
  CSSPropertyIconResolver: function() { return /* reexport module object */ _CSSPropertyIconResolver_js__WEBPACK_IMPORTED_MODULE_8__; },
  CSSQuery: function() { return /* reexport module object */ _CSSQuery_js__WEBPACK_IMPORTED_MODULE_9__; },
  CSSVariableValueView: function() { return /* reexport module object */ _CSSVariableValueView_js__WEBPACK_IMPORTED_MODULE_10__; },
  ComputedStyleProperty: function() { return /* reexport module object */ _ComputedStyleProperty_js__WEBPACK_IMPORTED_MODULE_4__; },
  ComputedStyleTrace: function() { return /* reexport module object */ _ComputedStyleTrace_js__WEBPACK_IMPORTED_MODULE_5__; },
  ElementsBreadcrumbs: function() { return /* reexport module object */ _ElementsBreadcrumbs_js__WEBPACK_IMPORTED_MODULE_11__; },
  ElementsBreadcrumbsUtils: function() { return /* reexport module object */ _ElementsBreadcrumbsUtils_js__WEBPACK_IMPORTED_MODULE_12__; },
  ElementsTreeExpandButton: function() { return /* reexport module object */ _ElementsTreeExpandButton_js__WEBPACK_IMPORTED_MODULE_13__; },
  Helper: function() { return /* reexport module object */ _Helper_js__WEBPACK_IMPORTED_MODULE_14__; },
  LayoutPane: function() { return /* reexport module object */ _LayoutPane_js__WEBPACK_IMPORTED_MODULE_15__; },
  LayoutPaneUtils: function() { return /* reexport module object */ _LayoutPaneUtils_js__WEBPACK_IMPORTED_MODULE_16__; },
  QueryContainer: function() { return /* reexport module object */ _QueryContainer_js__WEBPACK_IMPORTED_MODULE_17__; },
  StylePropertyEditor: function() { return /* reexport module object */ _StylePropertyEditor_js__WEBPACK_IMPORTED_MODULE_18__; }
});
/* harmony import */var _AccessibilityTreeNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccessibilityTreeNode.js */ "./panels/elements/components/AccessibilityTreeNode.js");
/* harmony import */var _AdornerManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdornerManager.js */ "./panels/elements/components/AdornerManager.js");
/* harmony import */var _AdornerSettingsPane_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdornerSettingsPane.js */ "./panels/elements/components/AdornerSettingsPane.js");
/* harmony import */var _AnchorFunctionLinkSwatch_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AnchorFunctionLinkSwatch.js */ "./panels/elements/components/AnchorFunctionLinkSwatch.js");
/* harmony import */var _ComputedStyleProperty_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ComputedStyleProperty.js */ "./panels/elements/components/ComputedStyleProperty.js");
/* harmony import */var _ComputedStyleTrace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ComputedStyleTrace.js */ "./panels/elements/components/ComputedStyleTrace.js");
/* harmony import */var _CSSHintDetailsView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CSSHintDetailsView.js */ "./panels/elements/components/CSSHintDetailsView.js");
/* harmony import */var _CSSPropertyDocsView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CSSPropertyDocsView.js */ "./panels/elements/components/CSSPropertyDocsView.js");
/* harmony import */var _CSSPropertyIconResolver_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CSSPropertyIconResolver.js */ "./panels/elements/components/CSSPropertyIconResolver.js");
/* harmony import */var _CSSQuery_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CSSQuery.js */ "./panels/elements/components/CSSQuery.js");
/* harmony import */var _CSSVariableValueView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CSSVariableValueView.js */ "./panels/elements/components/CSSVariableValueView.js");
/* harmony import */var _ElementsBreadcrumbs_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ElementsBreadcrumbs.js */ "./panels/elements/components/ElementsBreadcrumbs.js");
/* harmony import */var _ElementsBreadcrumbsUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ElementsBreadcrumbsUtils.js */ "./panels/elements/components/ElementsBreadcrumbsUtils.js");
/* harmony import */var _ElementsTreeExpandButton_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ElementsTreeExpandButton.js */ "./panels/elements/components/ElementsTreeExpandButton.js");
/* harmony import */var _Helper_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Helper.js */ "./panels/elements/components/Helper.js");
/* harmony import */var _LayoutPane_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./LayoutPane.js */ "./panels/elements/components/LayoutPane.js");
/* harmony import */var _LayoutPaneUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./LayoutPaneUtils.js */ "./panels/elements/components/LayoutPaneUtils.js");
/* harmony import */var _QueryContainer_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./QueryContainer.js */ "./panels/elements/components/QueryContainer.js");
/* harmony import */var _StylePropertyEditor_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./StylePropertyEditor.js */ "./panels/elements/components/StylePropertyEditor.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



















 //# sourceMappingURL=components.js.map


}),

}]);