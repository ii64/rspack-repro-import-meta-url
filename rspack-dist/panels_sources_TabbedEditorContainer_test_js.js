"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_sources_TabbedEditorContainer_test_js"], {
"./panels/sources/TabbedEditorContainer.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _sources_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sources.js */ "./panels/sources/sources.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


describe('TabbedEditorContainer', function() {
    describe('HistoryItem', function() {
        var HistoryItem = _sources_js__WEBPACK_IMPORTED_MODULE_1__.TabbedEditorContainer.HistoryItem;
        var url = 'http://localhost';
        describe('fromObject', function() {
            it('rejects invalid resource type names', function() {
                assert.throws(function() {
                    HistoryItem.fromObject({
                        url: url,
                        resourceTypeName: 'some-invalid-resource-type-name'
                    });
                });
            });
            it('correctly deserializes resource type names', function() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = Object.values(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var resourceType = _step.value;
                        var resourceTypeName = resourceType.name();
                        assert.propertyVal(HistoryItem.fromObject({
                            url: url,
                            resourceTypeName: resourceTypeName
                        }), 'resourceType', resourceType);
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
        });
        describe('toObject', function() {
            it('correctly serializes resource types', function() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = Object.values(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var resourceType = _step.value;
                        var item = new HistoryItem(url, resourceType);
                        assert.propertyVal(item.toObject(), 'resourceTypeName', resourceType.name());
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
        });
    });
    describe('History', function() {
        var _Sources_TabbedEditorContainer = _sources_js__WEBPACK_IMPORTED_MODULE_1__.TabbedEditorContainer, History = _Sources_TabbedEditorContainer.History, HistoryItem = _Sources_TabbedEditorContainer.HistoryItem;
        describe('fromObject', function() {
            it('deserializes correctly', function() {
                var history = History.fromObject([
                    {
                        url: 'http://localhost/foo.js',
                        resourceTypeName: 'script'
                    },
                    {
                        url: 'webpack:///src/foo.vue',
                        resourceTypeName: 'sm-script',
                        scrollLineNumber: 5
                    },
                    {
                        url: 'http://localhost/foo.js',
                        resourceTypeName: 'sm-script'
                    }
                ]);
                var keys = history.keys();
                assert.lengthOf(keys, 3);
                assert.propertyVal(keys[0], 'url', 'http://localhost/foo.js');
                assert.propertyVal(keys[0], 'resourceType', _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Script);
                assert.strictEqual(history.selectionRange(keys[0]), undefined);
                assert.strictEqual(history.scrollLineNumber(keys[0]), undefined);
                assert.propertyVal(keys[1], 'url', 'webpack:///src/foo.vue');
                assert.propertyVal(keys[1], 'resourceType', _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.SourceMapScript);
                assert.strictEqual(history.selectionRange(keys[1]), undefined);
                assert.strictEqual(history.scrollLineNumber(keys[1]), 5);
                assert.propertyVal(keys[2], 'url', 'http://localhost/foo.js');
                assert.propertyVal(keys[2], 'resourceType', _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.SourceMapScript);
                assert.strictEqual(history.selectionRange(keys[2]), undefined);
                assert.strictEqual(history.scrollLineNumber(keys[2]), undefined);
            });
            it('gracefully ignores items with invalid resource type names', function() {
                var history = History.fromObject([
                    {
                        url: 'http://localhost/foo.js',
                        resourceTypeName: 'script'
                    },
                    {
                        url: 'http://localhost/baz.js',
                        resourceTypeName: 'some-invalid-resource-type-name'
                    },
                    {
                        url: 'http://localhost/bar.js',
                        resourceTypeName: 'sm-script'
                    }
                ]);
                var keys = history.keys();
                assert.lengthOf(keys, 2);
                assert.propertyVal(keys[0], 'url', 'http://localhost/foo.js');
                assert.propertyVal(keys[1], 'url', 'http://localhost/bar.js');
            });
        });
        describe('toObject', function() {
            it('serializes correctly', function() {
                var history = new History([
                    new HistoryItem('http://localhost/foo.js', _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Script),
                    new HistoryItem('webpack:///src/foo.vue', _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.SourceMapScript, undefined, 5),
                    new HistoryItem('http://localhost/foo.js', _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.SourceMapScript)
                ]);
                var serializedHistory = history.toObject();
                assert.lengthOf(serializedHistory, 3);
                assert.propertyVal(serializedHistory[0], 'url', 'http://localhost/foo.js');
                assert.propertyVal(serializedHistory[0], 'resourceTypeName', 'script');
                assert.propertyVal(serializedHistory[1], 'url', 'webpack:///src/foo.vue');
                assert.propertyVal(serializedHistory[1], 'resourceTypeName', 'sm-script');
                assert.propertyVal(serializedHistory[1], 'scrollLineNumber', 5);
                assert.propertyVal(serializedHistory[2], 'url', 'http://localhost/foo.js');
                assert.propertyVal(serializedHistory[2], 'resourceTypeName', 'sm-script');
            });
        });
        describe('update', function() {
            it('moves items referenced by keys to the beginning', function() {
                var history = new History([
                    new HistoryItem('webpack:///src/foo.vue', _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.SourceMapScript),
                    new HistoryItem('http://localhost/foo.js', _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Script),
                    new HistoryItem('http://localhost/foo.js', _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.SourceMapScript)
                ]);
                history.update([
                    {
                        url: 'http://localhost/foo.js',
                        resourceType: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Script
                    }
                ]);
                assert.strictEqual(history.index({
                    url: 'http://localhost/foo.js',
                    resourceType: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Script
                }), 0);
            });
        });
    });
}); //# sourceMappingURL=TabbedEditorContainer.test.js.map


}),

}]);