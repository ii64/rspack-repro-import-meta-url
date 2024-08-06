"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["legacy_test_runner_sources_test_runner_SourcesTestRunner_js"], {
"./legacy_test_runner/sources_test_runner/SourcesTestRunner.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  addScriptUISourceCode: function() { return addScriptUISourceCode; },
  dumpNavigatorView: function() { return dumpNavigatorView; },
  dumpNavigatorViewInAllModes: function() { return dumpNavigatorViewInAllModes; },
  dumpNavigatorViewInMode: function() { return dumpNavigatorViewInMode; },
  dumpSwatchPositions: function() { return dumpSwatchPositions; }
});
/* harmony import */var _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../panels/sources/sources.js */ "./panels/sources/sources.js");
/* harmony import */var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../test_runner/test_runner.js */ "./legacy_test_runner/test_runner/test_runner.js");
/* harmony import */var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_1__);
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}


/**
 * @param {!Sources.NavigatorView.NavigatorView} navigatorView
 * @param {boolean=} dumpIcons
 */ var dumpNavigatorView = function dumpNavigatorView(navigatorView, dumpIcons) {
    dumpNavigatorTreeOutline(navigatorView.scriptsTree);
    /**
   * @param {string} prefix
   * @param {!UI.TreeElement} treeElement
   */ function dumpNavigatorTreeElement(prefix, treeElement) {
        var titleText = '';
        if (treeElement.leadingIconsElement && dumpIcons) {
            var icons = treeElement.leadingIconsElement.querySelectorAll('[is=ui-icon]');
            icons = Array.prototype.slice.call(icons);
            var iconTypes = icons.map(function(icon) {
                return icon.iconType;
            });
            if (iconTypes.length) {
                titleText = titleText + '[' + iconTypes.join(', ') + '] ';
            }
        }
        titleText += treeElement.title;
        if (treeElement.nodeType === _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_0__.NavigatorView.Types.FileSystem || treeElement.nodeType === _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_0__.NavigatorView.Types.FileSystemFolder) {
            var hasMappedFiles = treeElement.listItemElement.classList.contains('has-mapped-files');
            if (!hasMappedFiles) {
                titleText += ' [dimmed]';
            }
        }
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_1__.TestRunner.addResult(prefix + titleText);
        treeElement.expand();
        var children = treeElement.children();
        for(var i = 0; i < children.length; ++i){
            dumpNavigatorTreeElement(prefix + '  ', children[i]);
        }
    }
    /**
   * @param {!UI.TreeOutline} treeOutline
   */ function dumpNavigatorTreeOutline(treeOutline) {
        var children = treeOutline.rootElement().children();
        for(var i = 0; i < children.length; ++i){
            dumpNavigatorTreeElement('', children[i]);
        }
    }
};
/**
 * @param {!Sources.NavigatorView.NavigatorView} view
 */ var dumpNavigatorViewInAllModes = function dumpNavigatorViewInAllModes(view) {
    [
        'frame',
        'frame/domain',
        'frame/domain/folder',
        'domain',
        'domain/folder'
    ].forEach(dumpNavigatorViewInMode.bind(_test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_1__.TestRunner, view));
};
/**
 * @param {!Sources.NavigatorView.NavigatorView} view
 * @param {string} mode
 */ var dumpNavigatorViewInMode = function dumpNavigatorViewInMode(view, mode) {
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_1__.TestRunner.addResult(_instanceof(view, _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_0__.SourcesNavigator.NetworkNavigatorView) ? 'Sources:' : 'Content Scripts:');
    view.groupByFrame = mode.includes('frame');
    view.groupByDomain = mode.includes('domain');
    view.groupByFolder = mode.includes('folder');
    view.resetForTest();
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_1__.TestRunner.addResult('-------- Setting mode: [' + mode + ']');
    dumpNavigatorView(view);
};
/**
 * @param {string} url
 * @param {string} content
 * @param {boolean=} isContentScript
 * @param {number=} worldId
 * @return {!Promise}
 */ var addScriptUISourceCode = function addScriptUISourceCode(url, content, isContentScript, worldId) {
    content += '\n//# sourceURL=' + url;
    if (isContentScript) {
        content = "testRunner.evaluateScriptInIsolatedWorld(".concat(worldId, ", `").concat(content, "`)");
    }
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_1__.TestRunner.evaluateInPageAnonymously(content);
    return _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_1__.TestRunner.waitForUISourceCode(url);
};
var dumpSwatchPositions = function dumpSwatchPositions(sourceFrame, bookmarkType) {
    var textEditor = sourceFrame.textEditor;
    var markers = textEditor.bookmarks(textEditor.fullRange(), bookmarkType);
    for(var i = 0; i < markers.length; i++){
        var position = markers[i].position();
        var swatch = markers[i].marker.widgetNode.firstChild;
        var text = swatch.textContent;
        if (swatch.localName === 'devtools-color-swatch') {
            text = swatch.color.asString(swatch.format);
        }
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_1__.TestRunner.addResult('Line ' + position.startLine + ', Column ' + position.startColumn + ': ' + text);
    }
};


}),

}]);