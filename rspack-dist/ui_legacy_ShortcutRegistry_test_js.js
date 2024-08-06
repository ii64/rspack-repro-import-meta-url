"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_ShortcutRegistry_test_js"], {
"./ui/legacy/ShortcutRegistry.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('ShortcutTreeNode', function() {
    it('can be instantiated without issues', function() {
        var node = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.ShortcutRegistry.ShortcutTreeNode(0, 0);
        assert.isEmpty(node.actions(), 'node should not have any actions upon instantiation');
        assert.isFalse(node.hasChords(), 'node should not have any chords');
        assert.strictEqual(node.key(), 0, 'node should set key property');
    });
    it('can add a mapping', function() {
        var _node_getNode_getNode, _node_getNode;
        var node = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.ShortcutRegistry.ShortcutTreeNode(0, 0);
        node.addKeyMapping([
            12,
            154,
            36
        ], 'test action');
        var leafNode = (_node_getNode = node.getNode(12)) === null || _node_getNode === void 0 ? void 0 : (_node_getNode_getNode = _node_getNode.getNode(154)) === null || _node_getNode_getNode === void 0 ? void 0 : _node_getNode_getNode.getNode(36);
        assert.ok(leafNode, 'node should have a descendant for the mapping');
        assert.include((leafNode === null || leafNode === void 0 ? void 0 : leafNode.actions()) || [], 'test action', 'the mapping\'s node should have the \'test action\' action');
        assert.isTrue(node.hasChords(), 'node should have chords');
        assert.ok(node.getNode(12), 'node should have a child for key=12');
        assert.notOk(node.getNode(154), 'node should not have a direct child for key=154');
    });
    it('can clear itself', function() {
        var node = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.ShortcutRegistry.ShortcutTreeNode(0, 0);
        node.addKeyMapping([
            12,
            154,
            36
        ], 'test action');
        node.addAction('another action');
        node.clear();
        assert.isEmpty(node.actions(), 'node should not have any actions after being cleared');
        assert.isFalse(node.hasChords(), 'node should not have any chords after being cleared');
    });
}); //# sourceMappingURL=ShortcutRegistry.test.js.map


}),

}]);