"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_expandable_list_ExpandableList_test_js"], {
"./ui/components/expandable_list/ExpandableList.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/MutationHelpers.js */ "./testing/MutationHelpers.js");
/* harmony import */var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _expandable_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./expandable_list.js */ "./ui/components/expandable_list/expandable_list.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
function _templateObject() {
    var data = _tagged_template_literal([
        '<div class="row">row 1</div>'
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        '<div class="row">row 2</div>'
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        '<div class="row">row 1</div>'
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}




describe('ExpandableList', function() {
    it('can be expanded', /*#__PURE__*/ _async_to_generator(function() {
        var list, rows, iconSpan, button;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    list = new _expandable_list_js__WEBPACK_IMPORTED_MODULE_3__.ExpandableList.ExpandableList();
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(list);
                    list.data = {
                        rows: [
                            _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.html(_templateObject()),
                            _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.html(_templateObject1())
                        ]
                    };
                    assert.isNotNull(list.shadowRoot);
                    // checks that list is not expanded initially
                    rows = list.shadowRoot.querySelectorAll('.row');
                    assert.strictEqual(rows.length, 1);
                    iconSpan = list.shadowRoot.querySelector('span.arrow-icon');
                    assert.isNotNull(iconSpan);
                    assert.isFalse(iconSpan === null || iconSpan === void 0 ? void 0 : iconSpan.classList.contains('expanded'));
                    // checks that clicking button expands list by adding a div
                    button = list.shadowRoot.querySelector('button.arrow-icon-button');
                    return [
                        4,
                        (0,_testing_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_1__.withMutations)([
                            {
                                target: 'div',
                                type: "ADD" /* MutationType.ADD */ ,
                                max: 1
                            }
                        ], list.shadowRoot, function() {
                            button === null || button === void 0 ? void 0 : button.click();
                        })
                    ];
                case 1:
                    _state.sent();
                    // checks that list is expanded
                    assert.isTrue(iconSpan === null || iconSpan === void 0 ? void 0 : iconSpan.classList.contains('expanded'));
                    rows = list.shadowRoot.querySelectorAll('.row');
                    assert.strictEqual(rows.length, 2);
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not render when given 0 rows', /*#__PURE__*/ _async_to_generator(function() {
        var list, rows, iconSpan;
        return _ts_generator(this, function(_state) {
            list = new _expandable_list_js__WEBPACK_IMPORTED_MODULE_3__.ExpandableList.ExpandableList();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(list);
            list.data = {
                rows: []
            };
            assert.isNotNull(list.shadowRoot);
            // checks that list is not rendered
            rows = list.shadowRoot.querySelectorAll('.row');
            assert.strictEqual(rows.length, 0);
            iconSpan = list.shadowRoot.querySelector('span.arrow-icon');
            assert.isNull(iconSpan);
            return [
                2
            ];
        });
    }));
    it('cannot be expanded when given 1 row', /*#__PURE__*/ _async_to_generator(function() {
        var list, rows, iconSpan, button;
        return _ts_generator(this, function(_state) {
            list = new _expandable_list_js__WEBPACK_IMPORTED_MODULE_3__.ExpandableList.ExpandableList();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(list);
            list.data = {
                rows: [
                    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.html(_templateObject2())
                ]
            };
            assert.isNotNull(list.shadowRoot);
            // checks that list contains 1 row
            rows = list.shadowRoot.querySelectorAll('.row');
            assert.strictEqual(rows.length, 1);
            // checks that list does not render button for expanding
            iconSpan = list.shadowRoot.querySelector('span.arrow-icon');
            assert.isNull(iconSpan);
            button = list.shadowRoot.querySelector('button.arrow-icon-button');
            assert.isNull(button);
            return [
                2
            ];
        });
    }));
}); //# sourceMappingURL=ExpandableList.test.js.map


}),
"./ui/components/expandable_list/expandable_list.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ExpandableList: function() { return /* reexport module object */ _ExpandableList_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _ExpandableList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExpandableList.js */ "./ui/components/expandable_list/ExpandableList.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 //# sourceMappingURL=expandable_list.js.map


}),

}]);