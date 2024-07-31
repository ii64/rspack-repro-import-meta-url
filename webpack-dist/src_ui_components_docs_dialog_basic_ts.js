"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_docs_dialog_basic_ts"],{

/***/ "./src/ui/components/docs/dialog/basic.ts":
/*!************************************************!*\
  !*** ./src/ui/components/docs/dialog/basic.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../ui/components/dialogs/dialogs.js */ "./src/ui/components/dialogs/dialogs.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const showConnectors = [true, false];
const verticalPositions = [_ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_0__.Dialog.DialogVerticalPosition.TOP, _ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_0__.Dialog.DialogVerticalPosition.BOTTOM];
const horizontalAlignments = [
    _ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_0__.Dialog.DialogHorizontalAlignment.AUTO,
    _ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_0__.Dialog.DialogHorizontalAlignment.LEFT,
    _ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_0__.Dialog.DialogHorizontalAlignment.CENTER,
    _ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_0__.Dialog.DialogHorizontalAlignment.RIGHT,
    _ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_0__.Dialog.DialogHorizontalAlignment.AUTO,
];
const root = document.getElementById('root');
let i = 0;
for (const showConnector of showConnectors) {
    for (const verticalPosition of verticalPositions) {
        const row = document.createElement('div');
        row.classList.add('row');
        root.appendChild(row);
        for (const horizontalAlignment of horizontalAlignments) {
            const dialog = new _ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_0__.Dialog.Dialog();
            const container = document.createElement('div');
            container.classList.add('container');
            container.id = `container-${i}`;
            const host = document.createElement('div');
            host.classList.add('dialog-host');
            host.id = `host-${i}`;
            host.textContent = 'Hover me';
            container.appendChild(host);
            row.appendChild(container);
            dialog.position = verticalPosition;
            dialog.horizontalAlignment = horizontalAlignment;
            dialog.showConnector = showConnector;
            dialog.origin = host;
            dialog.id = `dialog-${i}`;
            host.addEventListener('mouseover', () => {
                void dialog.setDialogVisible(true);
            });
            dialog.addEventListener('clickoutsidedialog', () => {
                void dialog.setDialogVisible(false);
            });
            const div = document.createElement('div');
            div.classList.add('dialog-content');
            div.style.padding = '0 1em';
            div.innerHTML = `Hello, World<br/>Show connector: ${showConnector}<br/>Vertical position: ${verticalPosition}<br/>Horizontal alignment: ${horizontalAlignment}`;
            dialog.appendChild(div);
            root.appendChild(dialog);
            i++;
        }
    }
}
for (const verticalPosition of verticalPositions) {
    const row = document.createElement('div');
    row.classList.add('row');
    root.appendChild(row);
    for (const horizontalAlignment of horizontalAlignments) {
        const dialog = new _ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_0__.Dialog.Dialog();
        const container = document.createElement('div');
        container.classList.add('container');
        container.id = `container-${i}`;
        const host = document.createElement('div');
        host.classList.add('dialog-host-narrow');
        host.id = `host-${i}`;
        host.textContent = 'H';
        container.appendChild(host);
        row.appendChild(container);
        dialog.position = verticalPosition;
        dialog.horizontalAlignment = horizontalAlignment;
        dialog.showConnector = true;
        dialog.origin = host;
        dialog.id = `dialog-${i}`;
        host.addEventListener('mouseover', () => {
            void dialog.setDialogVisible(true);
        });
        dialog.addEventListener('clickoutsidedialog', () => {
            void dialog.setDialogVisible(false);
        });
        const div = document.createElement('div');
        div.classList.add('dialog-content');
        div.style.padding = '0 1em';
        div.innerHTML = `Hello, World<br/>Show connector: true<br/>Vertical position: ${verticalPosition}<br/>Horizontal alignment: ${horizontalAlignment}`;
        dialog.appendChild(div);
        root.appendChild(dialog);
        i++;
    }
}


/***/ })

}]);