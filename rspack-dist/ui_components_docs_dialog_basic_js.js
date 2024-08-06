"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_docs_dialog_basic_js"], {
"./ui/components/docs/dialog/basic.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../ui/components/dialogs/dialogs.js */ "./ui/components/dialogs/dialogs.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var showConnectors = [
    true,
    false
];
var verticalPositions = [
    "top" /* Dialogs.Dialog.DialogVerticalPosition.TOP */ ,
    "bottom" /* Dialogs.Dialog.DialogVerticalPosition.BOTTOM */ 
];
var horizontalAlignments = [
    "auto" /* Dialogs.Dialog.DialogHorizontalAlignment.AUTO */ ,
    "left" /* Dialogs.Dialog.DialogHorizontalAlignment.LEFT */ ,
    "center" /* Dialogs.Dialog.DialogHorizontalAlignment.CENTER */ ,
    "right" /* Dialogs.Dialog.DialogHorizontalAlignment.RIGHT */ ,
    "auto" /* Dialogs.Dialog.DialogHorizontalAlignment.AUTO */ 
];
var root = document.getElementById('root');
var i = 0;
var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
try {
    var _loop = function() {
        var showConnector = _step.value;
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var verticalPosition = _step1.value;
                var row = document.createElement('div');
                row.classList.add('row');
                root.appendChild(row);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    var _loop = function() {
                        var horizontalAlignment = _step.value;
                        var dialog = new _ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_0__.Dialog.Dialog();
                        var container = document.createElement('div');
                        container.classList.add('container');
                        container.id = "container-".concat(i);
                        var host = document.createElement('div');
                        host.classList.add('dialog-host');
                        host.id = "host-".concat(i);
                        host.textContent = 'Hover me';
                        container.appendChild(host);
                        row.appendChild(container);
                        dialog.position = verticalPosition;
                        dialog.horizontalAlignment = horizontalAlignment;
                        dialog.showConnector = showConnector;
                        dialog.origin = host;
                        dialog.id = "dialog-".concat(i);
                        host.addEventListener('mouseover', function() {
                            void dialog.setDialogVisible(true);
                        });
                        dialog.addEventListener('clickoutsidedialog', function() {
                            void dialog.setDialogVisible(false);
                        });
                        var div = document.createElement('div');
                        div.classList.add('dialog-content');
                        div.style.padding = '0 1em';
                        div.innerHTML = "Hello, World<br/>Show connector: ".concat(showConnector, "<br/>Vertical position: ").concat(verticalPosition, "<br/>Horizontal alignment: ").concat(horizontalAlignment);
                        dialog.appendChild(div);
                        root.appendChild(dialog);
                        i++;
                    };
                    for(var _iterator = horizontalAlignments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
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
            };
            for(var _iterator = verticalPositions[Symbol.iterator](), _step1; !(_iteratorNormalCompletion = (_step1 = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
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
    };
    for(var _iterator = showConnectors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
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
var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
try {
    var _loop1 = function() {
        var verticalPosition = _step1.value;
        var row = document.createElement('div');
        row.classList.add('row');
        root.appendChild(row);
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var horizontalAlignment = _step.value;
                var dialog = new _ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_0__.Dialog.Dialog();
                var container = document.createElement('div');
                container.classList.add('container');
                container.id = "container-".concat(i);
                var host = document.createElement('div');
                host.classList.add('dialog-host-narrow');
                host.id = "host-".concat(i);
                host.textContent = 'H';
                container.appendChild(host);
                row.appendChild(container);
                dialog.position = verticalPosition;
                dialog.horizontalAlignment = horizontalAlignment;
                dialog.showConnector = true;
                dialog.origin = host;
                dialog.id = "dialog-".concat(i);
                host.addEventListener('mouseover', function() {
                    void dialog.setDialogVisible(true);
                });
                dialog.addEventListener('clickoutsidedialog', function() {
                    void dialog.setDialogVisible(false);
                });
                var div = document.createElement('div');
                div.classList.add('dialog-content');
                div.style.padding = '0 1em';
                div.innerHTML = "Hello, World<br/>Show connector: true<br/>Vertical position: ".concat(verticalPosition, "<br/>Horizontal alignment: ").concat(horizontalAlignment);
                dialog.appendChild(div);
                root.appendChild(dialog);
                i++;
            };
            for(var _iterator = horizontalAlignments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
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
    };
    for(var _iterator1 = verticalPositions[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true)_loop1();
     //# sourceMappingURL=basic.js.map
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


}),

}]);