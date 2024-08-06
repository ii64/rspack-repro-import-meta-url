"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["legacy_test_runner_data_grid_test_runner_data_grid_test_runner_js"], {
"./legacy_test_runner/data_grid_test_runner/data_grid_test_runner.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DataGridTestRunner: function() { return DataGridTestRunner; }
});
/* harmony import */var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../test_runner/test_runner.js */ "./legacy_test_runner/test_runner/test_runner.js");
/* harmony import */var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_0__);
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */ var DataGridTestRunner = {};
DataGridTestRunner.dumpDataGrid = function(root, descentIntoCollapsed, prefix) {
    if (!prefix) {
        prefix = '';
    }
    var suffix = root.selected ? ' <- selected' : '';
    var columnKeys = root.dataGrid.columnsArray.map(function(column) {
        return column.id;
    });
    var outputColumns = [];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = columnKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var key = _step.value;
            if (key in root.data) {
                outputColumns.push(root.data[key]);
            }
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
    if (outputColumns.length) {
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_0__.TestRunner.addResult(prefix + outputColumns.join(' | ') + suffix);
    }
    if (!descentIntoCollapsed && !root.expanded) {
        return;
    }
    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
    try {
        for(var _iterator1 = root.children[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
            var child = _step1.value;
            DataGridTestRunner.dumpDataGrid(child, descentIntoCollapsed, prefix + ' ');
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
};
DataGridTestRunner.validateDataGrid = function(root) {
    var children = root.children;
    for(var i = 0; i < children.length; ++i){
        var child = children[i];
        if (child.parent !== root) {
            throw 'Wrong parent for child ' + child.data.id + ' of ' + root.data.id;
        }
        if (child.nextSibling !== (i + 1 === children.length ? null : children[i + 1])) {
            throw 'Wrong child.nextSibling for ' + child.data.id + ' (' + i + ' of ' + children.length + ') ';
        }
        if (child.previousSibling !== (i ? children[i - 1] : null)) {
            throw 'Wrong child.previousSibling for ' + child.data.id + ' (' + i + ' of ' + children.length + ') ';
        }
        if (child.parent && !child.parent.isRoot && child.depth !== root.depth + 1) {
            throw 'Wrong depth for ' + child.data.id + ' expected ' + (root.depth + 1) + ' but got ' + child.depth;
        }
        DataGridTestRunner.validateDataGrid(child);
    }
    var selectedNode = root.dataGrid.selectedNode;
    if (!root.parent && selectedNode) {
        if (!selectedNode.selectable) {
            throw 'Selected node is not selectable';
        }
        var node = selectedNode;
        for(; node && node !== root; node = node.parent){}
        if (!node) {
            throw 'Selected node (' + selectedNode.data.id + ') is not within the DataGrid';
        }
    }
};
DataGridTestRunner.dumpAndValidateDataGrid = function(root) {
    DataGridTestRunner.dumpDataGrid(root);
    DataGridTestRunner.validateDataGrid(root);
};


}),

}]);