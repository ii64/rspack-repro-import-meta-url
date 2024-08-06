"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_docs_icon_button_basic_js"], {
"./ui/components/docs/icon_button/basic.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function appendComponent(data) {
    var _document_getElementById;
    var component = new _icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__.IconButton.IconButton();
    component.data = data;
    (_document_getElementById = document.getElementById('container')) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.appendChild(component);
}
appendComponent({
    clickHandler: function() {},
    groups: [
        {
            iconName: 'review',
            iconColor: 'var(--icon-default)',
            text: '1 item'
        }
    ]
});
appendComponent({
    clickHandler: function() {},
    groups: [
        {
            iconName: 'review',
            iconColor: 'var(--icon-primary)',
            text: 'Test'
        },
        {
            iconName: 'warning-filled',
            iconColor: '',
            text: '1'
        }
    ]
});
appendComponent({
    clickHandler: function() {},
    groups: [
        {
            iconName: 'issue-exclamation-filled',
            iconColor: 'yellow',
            text: '23',
            iconHeight: '2ex',
            iconWidth: '2ex'
        },
        {
            iconName: 'issue-text-filled',
            iconColor: 'blue',
            text: '1'
        }
    ]
});
appendComponent({
    groups: [
        {
            iconName: 'issue-exclamation-filled',
            iconColor: 'yellow',
            text: '23'
        },
        {
            iconName: 'issue-text-filled',
            iconColor: 'blue',
            text: '1'
        }
    ]
});
appendComponent({
    clickHandler: function() {},
    groups: [
        {
            iconName: 'issue-exclamation-filled',
            iconColor: 'yellow',
            text: '23'
        },
        {
            iconName: 'issue-text-filled',
            iconColor: 'blue',
            text: '1'
        }
    ],
    trailingText: 'Issues'
});
appendComponent({
    clickHandler: function() {},
    groups: [
        {
            iconName: 'issue-exclamation-filled',
            iconColor: 'yellow',
            text: '23'
        },
        {
            iconName: 'issue-text-filled',
            iconColor: 'blue',
            text: '1'
        }
    ],
    leadingText: 'Issues:'
});
appendComponent({
    clickHandler: function() {},
    groups: [
        {
            iconName: 'issue-exclamation-filled',
            iconColor: 'yellow',
            text: '23'
        },
        {
            iconName: 'issue-text-filled',
            iconColor: 'blue',
            text: '1'
        }
    ],
    leadingText: 'Issues:',
    compact: true
}); //# sourceMappingURL=basic.js.map


}),

}]);