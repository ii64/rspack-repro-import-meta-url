"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_sources_components_BreakpointsViewUtils_test_js"], {
"./panels/sources/components/BreakpointsViewUtils.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components.js */ "./panels/sources/components/components.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('getDifferentiatingPathMap', function() {
    var createTitleInfos = function createTitleInfos(data) {
        var infos = [];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = data.ambiguous[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var path = _step.value;
                infos.push({
                    name: AMBIGUOUS_FILE_NAME,
                    url: "".concat(path, "/").concat(AMBIGUOUS_FILE_NAME)
                });
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
        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
        try {
            for(var _iterator1 = data.nonAmbiguous[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                var path1 = _step1.value;
                infos.push({
                    name: OTHER_FILE_NAME,
                    url: "".concat(path1, "/").concat(OTHER_FILE_NAME)
                });
            }
        } catch (err) {
            _didIteratorError1 = true;
            _iteratorError1 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                    _iterator1.return();
                }
            } finally{
                if (_didIteratorError1) {
                    throw _iteratorError1;
                }
            }
        }
        return infos;
    };
    var AMBIGUOUS_FILE_NAME = 'index.js';
    var OTHER_FILE_NAME = 'a.js';
    it('can extract the differentiating segment if it is the parent folder', function() {
        var titleInfos = createTitleInfos({
            ambiguous: [
                'http://www.google.com/src/a',
                'http://www.google.com/src/b',
                'http://www.google.com/src/c'
            ],
            nonAmbiguous: []
        });
        var differentiatingPathMap = _components_js__WEBPACK_IMPORTED_MODULE_0__.BreakpointsViewUtils.getDifferentiatingPathMap(titleInfos);
        assert.strictEqual(differentiatingPathMap.get(titleInfos[0].url), 'a/');
        assert.strictEqual(differentiatingPathMap.get(titleInfos[1].url), 'b/');
        assert.strictEqual(differentiatingPathMap.get(titleInfos[2].url), 'c/');
    });
    it('can extract the differentiating segment if it is the direct parent folder', function() {
        var titleInfos = createTitleInfos({
            ambiguous: [
                'http://www.google.com/src/a',
                'http://www.google.com/src2/b'
            ],
            nonAmbiguous: []
        });
        var differentiatingPathMap = _components_js__WEBPACK_IMPORTED_MODULE_0__.BreakpointsViewUtils.getDifferentiatingPathMap(titleInfos);
        assert.strictEqual(differentiatingPathMap.get(titleInfos[0].url), 'a/');
        assert.strictEqual(differentiatingPathMap.get(titleInfos[1].url), 'b/');
    });
    it('can extract the differentiating segment if it is the parent folder, but has overlapping path prefixes', function() {
        var titleInfos = createTitleInfos({
            ambiguous: [
                'http://www.google.com/src/a',
                'http://www.google.com/src2/b',
                'http://www.google.com/src2/c'
            ],
            nonAmbiguous: []
        });
        var differentiatingPathMap = _components_js__WEBPACK_IMPORTED_MODULE_0__.BreakpointsViewUtils.getDifferentiatingPathMap(titleInfos);
        assert.strictEqual(differentiatingPathMap.get(titleInfos[0].url), 'a/');
        assert.strictEqual(differentiatingPathMap.get(titleInfos[1].url), 'b/');
        assert.strictEqual(differentiatingPathMap.get(titleInfos[2].url), 'c/');
    });
    it('does not output any differentiating segment if the name is unique', function() {
        var titleInfos = createTitleInfos({
            ambiguous: [
                'http://www.google.com/src/a',
                'http://www.google.com/src/b'
            ],
            nonAmbiguous: [
                'http://www.google.com/src/c'
            ]
        });
        var differentiatingPathMap = _components_js__WEBPACK_IMPORTED_MODULE_0__.BreakpointsViewUtils.getDifferentiatingPathMap(titleInfos);
        assert.strictEqual(differentiatingPathMap.get(titleInfos[0].url), 'a/');
        assert.strictEqual(differentiatingPathMap.get(titleInfos[1].url), 'b/');
        assert.isUndefined(differentiatingPathMap.get(titleInfos[2].url));
    });
    it('can extract the differentiating segment if paths have overlapping prefixes and suffixes', function() {
        var titleInfos = createTitleInfos({
            ambiguous: [
                'http://www.google.com/src/a',
                'http://www.google.com/src/b',
                'http://www.google.com/src2/a',
                'http://www.google.com/src2/b'
            ],
            nonAmbiguous: []
        });
        var differentiatingPathMap = _components_js__WEBPACK_IMPORTED_MODULE_0__.BreakpointsViewUtils.getDifferentiatingPathMap(titleInfos);
        assert.strictEqual(differentiatingPathMap.get(titleInfos[0].url), 'src/a/');
        assert.strictEqual(differentiatingPathMap.get(titleInfos[1].url), 'src/b/');
        assert.strictEqual(differentiatingPathMap.get(titleInfos[2].url), 'src2/a/');
        assert.strictEqual(differentiatingPathMap.get(titleInfos[3].url), 'src2/b/');
    });
    it('can extract the differentiating segment if paths have overlapping prefixes and suffixes', function() {
        var titleInfos = createTitleInfos({
            ambiguous: [
                'http://www.google.com/src/a/d',
                'http://www.google.com/src/a/e',
                'http://www.google.com/src2/a/d',
                'http://www.google.com/src2/a/e'
            ],
            nonAmbiguous: []
        });
        var differentiatingPathMap = _components_js__WEBPACK_IMPORTED_MODULE_0__.BreakpointsViewUtils.getDifferentiatingPathMap(titleInfos);
        assert.strictEqual(differentiatingPathMap.get(titleInfos[0].url), 'src/a/d/');
        assert.strictEqual(differentiatingPathMap.get(titleInfos[1].url), 'src/a/e/');
        assert.strictEqual(differentiatingPathMap.get(titleInfos[2].url), 'src2/a/d/');
        assert.strictEqual(differentiatingPathMap.get(titleInfos[3].url), 'src2/a/e/');
    });
    it('can extract the differentiating segment if it is not the direct parent folder', function() {
        var titleInfos = createTitleInfos({
            ambiguous: [
                'http://www.google.com/src/a/e',
                'http://www.google.com/src/b/e',
                'http://www.google.com/src2/c/e',
                'http://www.google.com/src2/d/e'
            ],
            nonAmbiguous: []
        });
        var differentiatingPathMap = _components_js__WEBPACK_IMPORTED_MODULE_0__.BreakpointsViewUtils.getDifferentiatingPathMap(titleInfos);
        assert.strictEqual(differentiatingPathMap.get(titleInfos[0].url), 'a/…/');
        assert.strictEqual(differentiatingPathMap.get(titleInfos[1].url), 'b/…/');
        assert.strictEqual(differentiatingPathMap.get(titleInfos[2].url), 'c/…/');
        assert.strictEqual(differentiatingPathMap.get(titleInfos[3].url), 'd/…/');
    });
    it('can extract the differentiating segment if one path is completely overlapping', function() {
        var titleInfos = createTitleInfos({
            ambiguous: [
                'http://www.google.com/src/a/e',
                'http://www.google.com/src/a'
            ],
            nonAmbiguous: []
        });
        var differentiatingPathMap = _components_js__WEBPACK_IMPORTED_MODULE_0__.BreakpointsViewUtils.getDifferentiatingPathMap(titleInfos);
        assert.strictEqual(differentiatingPathMap.get(titleInfos[0].url), 'e/');
        assert.strictEqual(differentiatingPathMap.get(titleInfos[1].url), 'a/');
    });
    it('can extract the differentiating segment if parts of the differentiating foldername is overlapping', function() {
        var titleInfos = createTitleInfos({
            ambiguous: [
                'http://www.google.com/src/a/b/cfile',
                'http://www.google.com/src/c/d/c'
            ],
            nonAmbiguous: []
        });
        var differentiatingPathMap = _components_js__WEBPACK_IMPORTED_MODULE_0__.BreakpointsViewUtils.getDifferentiatingPathMap(titleInfos);
        assert.strictEqual(differentiatingPathMap.get(titleInfos[0].url), 'cfile/');
        assert.strictEqual(differentiatingPathMap.get(titleInfos[1].url), 'c/');
    });
    it('can extract the differentiating segment if part of suffix is unique', function() {
        var titleInfos = createTitleInfos({
            ambiguous: [
                'http://www.google.com/src/a/y',
                'http://www.google.com/src2/a/x',
                'http://www.google.com/src/b/y',
                'http://www.google.com/src2/b/x'
            ],
            nonAmbiguous: []
        });
        var differentiatingPathMap = _components_js__WEBPACK_IMPORTED_MODULE_0__.BreakpointsViewUtils.getDifferentiatingPathMap(titleInfos);
        assert.strictEqual(differentiatingPathMap.get(titleInfos[0].url), 'a/y/');
        assert.strictEqual(differentiatingPathMap.get(titleInfos[1].url), 'a/x/');
        assert.strictEqual(differentiatingPathMap.get(titleInfos[2].url), 'b/y/');
        assert.strictEqual(differentiatingPathMap.get(titleInfos[3].url), 'b/x/');
    });
    it('can extract the differentiating segment if separate paths of urls are unique', function() {
        var titleInfos = createTitleInfos({
            ambiguous: [
                'http://www.google.com/src/d/y',
                'http://www.google.com/src2/c/y',
                'http://www.google.com/src3/c/y'
            ],
            nonAmbiguous: []
        });
        var differentiatingPathMap = _components_js__WEBPACK_IMPORTED_MODULE_0__.BreakpointsViewUtils.getDifferentiatingPathMap(titleInfos);
        assert.strictEqual(differentiatingPathMap.get(titleInfos[0].url), 'd/…/');
        assert.strictEqual(differentiatingPathMap.get(titleInfos[1].url), 'src2/c/…/');
        assert.strictEqual(differentiatingPathMap.get(titleInfos[2].url), 'src3/c/…/');
    });
    it('can extract the differentiating segment if paths have different length', function() {
        var titleInfos = createTitleInfos({
            ambiguous: [
                'http://www.google.com/src/d',
                'http://www.google.com/src/c/y/d',
                'http://www.google.com/src2/c/y/d',
                'http://www.google.com/src3/c/y/d'
            ],
            nonAmbiguous: []
        });
        var differentiatingPathMap = _components_js__WEBPACK_IMPORTED_MODULE_0__.BreakpointsViewUtils.getDifferentiatingPathMap(titleInfos);
        assert.strictEqual(differentiatingPathMap.get(titleInfos[0].url), 'src/…/');
        assert.strictEqual(differentiatingPathMap.get(titleInfos[1].url), 'src/c/y/…/');
        assert.strictEqual(differentiatingPathMap.get(titleInfos[2].url), 'src2/c/y/…/');
        assert.strictEqual(differentiatingPathMap.get(titleInfos[3].url), 'src3/c/y/…/');
    });
    it('can extract the differentiating segment if paths have different length and are completely overlapping otherwise', function() {
        var titleInfos = createTitleInfos({
            ambiguous: [
                'http://www.google.com/src/d',
                'http://www.google.com/x/src/d'
            ],
            nonAmbiguous: []
        });
        var differentiatingPathMap = _components_js__WEBPACK_IMPORTED_MODULE_0__.BreakpointsViewUtils.getDifferentiatingPathMap(titleInfos);
        assert.strictEqual(differentiatingPathMap.get(titleInfos[0].url), '/…/');
        assert.strictEqual(differentiatingPathMap.get(titleInfos[1].url), 'x/…/');
    });
}); //# sourceMappingURL=BreakpointsViewUtils.test.js.map


}),
"./panels/sources/components/components.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BreakpointsView: function() { return /* reexport module object */ _BreakpointsView_js__WEBPACK_IMPORTED_MODULE_0__; },
  BreakpointsViewUtils: function() { return /* reexport module object */ _BreakpointsViewUtils_js__WEBPACK_IMPORTED_MODULE_1__; },
  HeadersView: function() { return /* reexport module object */ _HeadersView_js__WEBPACK_IMPORTED_MODULE_2__; }
});
/* harmony import */var _BreakpointsView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BreakpointsView.js */ "./panels/sources/components/BreakpointsView.js");
/* harmony import */var _BreakpointsViewUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BreakpointsViewUtils.js */ "./panels/sources/components/BreakpointsViewUtils.js");
/* harmony import */var _HeadersView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeadersView.js */ "./panels/sources/components/HeadersView.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



 //# sourceMappingURL=components.js.map


}),

}]);