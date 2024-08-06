"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_profiler_TopDownProfileDataGrid_js"],{

/***/ "./panels/profiler/TopDownProfileDataGrid.js":
/*!***************************************************!*\
  !*** ./panels/profiler/TopDownProfileDataGrid.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TopDownProfileDataGridNode: () => (/* binding */ TopDownProfileDataGridNode),
/* harmony export */   TopDownProfileDataGridTree: () => (/* binding */ TopDownProfileDataGridTree)
/* harmony export */ });
/* harmony import */ var _ProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileDataGrid.js */ "./panels/profiler/ProfileDataGrid.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

class TopDownProfileDataGridNode extends _ProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_0__.ProfileDataGridNode {
    remainingChildren;
    constructor(profileNode, owningTree) {
        const hasChildren = Boolean(profileNode.children && profileNode.children.length);
        super(profileNode, owningTree, hasChildren);
        this.remainingChildren = profileNode.children;
    }
    static sharedPopulate(container) {
        const children = container.remainingChildren;
        const childrenLength = children.length;
        for (let i = 0; i < childrenLength; ++i) {
            container.appendChild(new TopDownProfileDataGridNode(children[i], container.tree));
        }
        container.remainingChildren = [];
    }
    static excludeRecursively(container, aCallUID) {
        if (container.remainingChildren.length > 0) {
            container.populate();
        }
        container.save();
        const children = container.children;
        let index = container.children.length;
        while (index--) {
            TopDownProfileDataGridNode.excludeRecursively(children[index], aCallUID);
        }
        const child = container.childrenByCallUID.get(aCallUID);
        if (child) {
            _ProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_0__.ProfileDataGridNode.merge(container, child, true);
        }
    }
    populateChildren() {
        TopDownProfileDataGridNode.sharedPopulate(this);
    }
}
class TopDownProfileDataGridTree extends _ProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_0__.ProfileDataGridTree {
    remainingChildren;
    constructor(formatter, searchableView, rootProfileNode, total) {
        super(formatter, searchableView, total);
        this.remainingChildren = rootProfileNode.children;
        _ProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_0__.ProfileDataGridNode.populate(this);
    }
    focus(profileDataGridNode) {
        if (!profileDataGridNode) {
            return;
        }
        this.save();
        profileDataGridNode.savePosition();
        this.children = [profileDataGridNode];
        this.total = profileDataGridNode.total;
    }
    exclude(profileDataGridNode) {
        if (!profileDataGridNode) {
            return;
        }
        this.save();
        TopDownProfileDataGridNode.excludeRecursively(this, profileDataGridNode.callUID);
        if (this.lastComparator) {
            this.sort(this.lastComparator, true);
        }
    }
    restore() {
        if (!this.savedChildren) {
            return;
        }
        this.children[0].restorePosition();
        super.restore();
    }
    populateChildren() {
        TopDownProfileDataGridNode.sharedPopulate(this);
    }
}
//# sourceMappingURL=TopDownProfileDataGrid.js.map

/***/ })

}]);