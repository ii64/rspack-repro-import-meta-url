"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_docs_tree_outline_basic_js"], {
"./ui/components/docs/tree_outline/basic.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
/* harmony import */var _tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tree_outline/tree_outline.js */ "./ui/components/tree_outline/tree_outline.js");
/* harmony import */var _sample_data_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sample-data.js */ "./ui/components/docs/tree_outline/sample-data.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var _document_getElementById, _document_getElementById1, _document_getElementById2;




await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__.ComponentServerSetup.setup();
await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.initializeGlobalVars();
var component = new _tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_2__.TreeOutline.TreeOutline();
component.data = {
    defaultRenderer: _tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_2__.TreeOutline.defaultRenderer,
    tree: _sample_data_js__WEBPACK_IMPORTED_MODULE_3__.officesAndProductsData
};
component.setAttribute('animated', 'animated');
component.addEventListener('treenodemouseover', function(event) {
    var evt = event;
    // eslint-disable-next-line no-console
    console.log('Node', evt.data.node, 'mouseover');
});
component.addEventListener('treenodemouseout', function(event) {
    var evt = event;
    // eslint-disable-next-line no-console
    console.log('Node', evt.data.node, 'mouseout');
});
(_document_getElementById = document.getElementById('container')) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.appendChild(component);
(_document_getElementById1 = document.getElementById('recursively-expand')) === null || _document_getElementById1 === void 0 ? void 0 : _document_getElementById1.addEventListener('click', function() {
    void component.expandRecursively();
});
(_document_getElementById2 = document.getElementById('expand-to-belgrave-house')) === null || _document_getElementById2 === void 0 ? void 0 : _document_getElementById2.addEventListener('click', function() {
    void component.expandToAndSelectTreeNode(_sample_data_js__WEBPACK_IMPORTED_MODULE_3__.belgraveHouse);
}); //# sourceMappingURL=basic.js.map

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

}),
"./ui/components/docs/tree_outline/sample-data.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  belgraveHouse: function() { return belgraveHouse; },
  officesAndProductsData: function() { return officesAndProductsData; }
});
/* harmony import */var _tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tree_outline/tree_outline.js */ "./ui/components/tree_outline/tree_outline.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var belgraveHouse = {
    treeNodeData: 'BEL',
    id: 'BEL'
};
var officesAndProductsData = [
    {
        treeNodeData: 'Offices',
        id: 'Offices',
        children: function() {
            return Promise.resolve([
                {
                    treeNodeData: 'Europe',
                    id: 'Europe',
                    children: function() {
                        return Promise.resolve([
                            {
                                treeNodeData: 'UK',
                                id: 'UK',
                                children: function() {
                                    return Promise.resolve([
                                        {
                                            treeNodeData: 'LON',
                                            id: 'LON',
                                            children: function() {
                                                return Promise.resolve([
                                                    {
                                                        treeNodeData: '6PS',
                                                        id: '6PS'
                                                    },
                                                    {
                                                        treeNodeData: 'CSG',
                                                        id: 'CSG'
                                                    },
                                                    belgraveHouse
                                                ]);
                                            }
                                        }
                                    ]);
                                }
                            },
                            {
                                treeNodeData: 'Germany',
                                id: 'Germany',
                                children: function() {
                                    return Promise.resolve([
                                        {
                                            treeNodeData: 'MUC',
                                            id: 'MUC'
                                        },
                                        {
                                            treeNodeData: 'BER',
                                            id: 'BER'
                                        }
                                    ]);
                                }
                            }
                        ]);
                    }
                }
            ]);
        }
    },
    {
        treeNodeData: 'Products',
        id: 'Products',
        children: function() {
            return Promise.resolve([
                {
                    treeNodeData: 'Chrome',
                    id: 'Chrome'
                },
                {
                    treeNodeData: 'YouTube',
                    id: 'YouTube'
                },
                {
                    treeNodeData: 'Drive',
                    id: 'Drive'
                },
                {
                    treeNodeData: 'Calendar',
                    id: 'Calendar'
                }
            ]);
        }
    }
]; //# sourceMappingURL=sample-data.js.map


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