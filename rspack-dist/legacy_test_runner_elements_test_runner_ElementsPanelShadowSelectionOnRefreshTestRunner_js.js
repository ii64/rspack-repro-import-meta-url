(self['webpackChunk'] = self['webpackChunk'] || []).push([["legacy_test_runner_elements_test_runner_ElementsPanelShadowSelectionOnRefreshTestRunner_js"], {
"./legacy_test_runner/elements_test_runner/ElementsPanelShadowSelectionOnRefreshTestRunner.js": (function () {
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */ self.ElementsTestRunner = self.ElementsTestRunner || {};
ElementsTestRunner.selectReloadAndDump = function(next, node) {
    ElementsTestRunner.selectNode(node).then(onSelected);
    var reloaded = false;
    var selected = false;
    function onSelected() {
        TestRunner.addSniffer(Elements.ElementsPanel.prototype, 'lastSelectedNodeSelectedForTest', onReSelected);
        TestRunner.reloadPage(onReloaded);
    }
    function onReloaded() {
        reloaded = true;
        maybeDumpSelectedNode();
    }
    function onReSelected() {
        selected = true;
        maybeDumpSelectedNode();
    }
    function maybeDumpSelectedNode() {
        if (!reloaded || !selected) {
            return;
        }
        var selectedElement = ElementsTestRunner.firstElementsTreeOutline().selectedTreeElement;
        var nodeName = selectedElement ? selectedElement.node().nodeNameInCorrectCase() : 'null';
        TestRunner.addResult('Selected node: \'' + nodeName + '\'');
        next();
    }
};


}),

}]);