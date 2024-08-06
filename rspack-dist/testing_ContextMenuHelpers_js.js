"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["testing_ContextMenuHelpers_js"], {
"./testing/ContextMenuHelpers.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  findMenuItemWithLabel: function() { return findMenuItemWithLabel; },
  getContextMenuForElement: function() { return getContextMenuForElement; },
  getMenuForShiftClick: function() { return getMenuForShiftClick; },
  getMenuForToolbarButton: function() { return getMenuForToolbarButton; },
  getMenuItemLabels: function() { return getMenuItemLabels; }
});
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function getMenu(action) {
    var sandbox = sinon.createSandbox();
    var contextMenuShow = sandbox.stub(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.ContextMenu.ContextMenu.prototype, 'show').resolves();
    action();
    sandbox.restore();
    return contextMenuShow.thisValues[0];
}
function getMenuForToolbarButton(button) {
    return getMenu(function() {
        button.clicked(new MouseEvent('click', {
            bubbles: true,
            cancelable: true
        }));
    });
}
function findMenuItemWithLabel(section, label) {
    return section.items.find(function(item) {
        return item.buildDescriptor().label === label;
    });
}
function getMenuItemLabels(section) {
    return section.items.map(function(item) {
        return item.buildDescriptor().label;
    });
}
function getContextMenuForElement(element, target) {
    return getMenu(function() {
        var event = new MouseEvent('contextmenu', {
            bubbles: true
        });
        if (target) {
            sinon.stub(event, 'target').value(target);
        }
        element.dispatchEvent(event);
    });
}
function getMenuForShiftClick(element) {
    return getMenu(function() {
        element.dispatchEvent(new MouseEvent('click', {
            shiftKey: true
        }));
    });
} //# sourceMappingURL=ContextMenuHelpers.js.map


}),

}]);