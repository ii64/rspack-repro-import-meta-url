"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_docs_tree_outline_custom-renderers_js"], {
"./ui/components/docs/tree_outline/custom-renderers.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
/* harmony import */var _tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tree_outline/tree_outline.js */ "./ui/components/tree_outline/tree_outline.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
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
        "<code style=",
        ">",
        "</code>"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "<code>",
        "</code>:",
        ""
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
var _document_getElementById, _document_getElementById1;




await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__.ComponentServerSetup.setup();
await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.initializeGlobalVars();
var data = {
    defaultRenderer: function(node, state) {
        var _node_treeNodeData = node.treeNodeData, cssProperty = _node_treeNodeData.cssProperty, cssValue = _node_treeNodeData.cssValue;
        var valueStyles = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.Directives.styleMap({
            paddingLeft: '10px',
            fontStyle: 'italic',
            color: 'var(--sys-color-token-property-special)'
        });
        return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html(_templateObject1(), cssProperty, state.isExpanded ? _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.nothing : _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html(_templateObject(), valueStyles, cssValue));
    },
    tree: [
        {
            treeNodeData: {
                cssProperty: 'border',
                cssValue: '1px solid red'
            },
            id: '1'
        },
        {
            treeNodeData: {
                cssProperty: 'font-size',
                cssValue: '20px'
            },
            id: '2'
        },
        {
            treeNodeData: {
                cssProperty: 'margin',
                cssValue: '10px 5px'
            },
            id: '3',
            children: function children() {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            [
                                {
                                    treeNodeData: {
                                        cssProperty: 'margin-left',
                                        cssValue: '5px'
                                    },
                                    id: '4'
                                },
                                {
                                    treeNodeData: {
                                        cssProperty: 'margin-right',
                                        cssValue: '5px'
                                    },
                                    id: '5'
                                },
                                {
                                    treeNodeData: {
                                        cssProperty: 'margin-top',
                                        cssValue: '10px'
                                    },
                                    id: '6'
                                },
                                {
                                    treeNodeData: {
                                        cssProperty: 'margin-bottom',
                                        cssValue: '10px'
                                    },
                                    id: '7'
                                }
                            ]
                        ];
                    });
                })();
            }
        }
    ]
};
var component = new _tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_3__.TreeOutline.TreeOutline();
component.data = data;
(_document_getElementById = document.getElementById('container')) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.appendChild(component);
(_document_getElementById1 = document.getElementById('recursively-expand')) === null || _document_getElementById1 === void 0 ? void 0 : _document_getElementById1.addEventListener('click', function() {
    void component.expandRecursively();
}); //# sourceMappingURL=custom-renderers.js.map

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

}),
"./ui/components/tree_outline/tree_outline.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  TreeOutline: function() { return /* reexport module object */ _TreeOutline_js__WEBPACK_IMPORTED_MODULE_0__; },
  TreeOutlineUtils: function() { return /* reexport module object */ _TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_1__; }
});
/* harmony import */var _TreeOutline_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TreeOutline.js */ "./ui/components/tree_outline/TreeOutline.js");
/* harmony import */var _TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TreeOutlineUtils.js */ "./ui/components/tree_outline/TreeOutlineUtils.js");
// Copyright (c) 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


 //# sourceMappingURL=tree_outline.js.map


}),

}]);