"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_docs_tree_outline_sample-data_js"], {
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