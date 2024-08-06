"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_css_overview_CSSOverviewUnusedDeclarations_js"], {
"./panels/css_overview/CSSOverviewUnusedDeclarations.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CSSOverviewUnusedDeclarations: function() { return CSSOverviewUnusedDeclarations; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}

var UIStrings = {
    /**
     *@description Label to explain why top values are ignored
     */ topAppliedToAStatically: '`Top` applied to a statically positioned element',
    /**
     *@description Label to explain why left (opposite to right) values are ignored.
     */ leftAppliedToAStatically: '`Left` applied to a statically positioned element',
    /**
     *@description Label to explain why right values are ignored
     */ rightAppliedToAStatically: '`Right` applied to a statically positioned element',
    /**
     *@description Label to explain why bottom values are ignored
     */ bottomAppliedToAStatically: '`Bottom` applied to a statically positioned element',
    /**
     *@description Label to explain why width values are ignored
     */ widthAppliedToAnInlineElement: '`Width` applied to an inline element',
    /**
     *@description Label to explain why height values are ignored
     */ heightAppliedToAnInlineElement: '`Height` applied to an inline element',
    /**
     *@description Label to explain why vertical-align values are ignored
     */ verticalAlignmentAppliedTo: 'Vertical alignment applied to element which is neither `inline` nor `table-cell`'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/css_overview/CSSOverviewUnusedDeclarations.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var CSSOverviewUnusedDeclarations = /*#__PURE__*/ function() {
    "use strict";
    function CSSOverviewUnusedDeclarations() {
        _class_call_check(this, CSSOverviewUnusedDeclarations);
    }
    _create_class(CSSOverviewUnusedDeclarations, null, [
        {
            key: "add",
            value: function add(target, key, item) {
                var values = target.get(key) || [];
                values.push(item);
                target.set(key, values);
            }
        },
        {
            key: "checkForUnusedPositionValues",
            value: function checkForUnusedPositionValues(unusedDeclarations, nodeId, strings, positionIdx, topIdx, leftIdx, rightIdx, bottomIdx) {
                if (strings[positionIdx] !== 'static') {
                    return;
                }
                if (strings[topIdx] !== 'auto') {
                    var reason = i18nString(UIStrings.topAppliedToAStatically);
                    this.add(unusedDeclarations, reason, {
                        declaration: "top: ".concat(strings[topIdx]),
                        nodeId: nodeId
                    });
                }
                if (strings[leftIdx] !== 'auto') {
                    var reason1 = i18nString(UIStrings.leftAppliedToAStatically);
                    this.add(unusedDeclarations, reason1, {
                        declaration: "left: ".concat(strings[leftIdx]),
                        nodeId: nodeId
                    });
                }
                if (strings[rightIdx] !== 'auto') {
                    var reason2 = i18nString(UIStrings.rightAppliedToAStatically);
                    this.add(unusedDeclarations, reason2, {
                        declaration: "right: ".concat(strings[rightIdx]),
                        nodeId: nodeId
                    });
                }
                if (strings[bottomIdx] !== 'auto') {
                    var reason3 = i18nString(UIStrings.bottomAppliedToAStatically);
                    this.add(unusedDeclarations, reason3, {
                        declaration: "bottom: ".concat(strings[bottomIdx]),
                        nodeId: nodeId
                    });
                }
            }
        },
        {
            key: "checkForUnusedWidthAndHeightValues",
            value: function checkForUnusedWidthAndHeightValues(unusedDeclarations, nodeId, strings, displayIdx, widthIdx, heightIdx) {
                if (strings[displayIdx] !== 'inline') {
                    return;
                }
                if (strings[widthIdx] !== 'auto') {
                    var reason = i18nString(UIStrings.widthAppliedToAnInlineElement);
                    this.add(unusedDeclarations, reason, {
                        declaration: "width: ".concat(strings[widthIdx]),
                        nodeId: nodeId
                    });
                }
                if (strings[heightIdx] !== 'auto') {
                    var reason1 = i18nString(UIStrings.heightAppliedToAnInlineElement);
                    this.add(unusedDeclarations, reason1, {
                        declaration: "height: ".concat(strings[heightIdx]),
                        nodeId: nodeId
                    });
                }
            }
        },
        {
            key: "checkForInvalidVerticalAlignment",
            value: function checkForInvalidVerticalAlignment(unusedDeclarations, nodeId, strings, displayIdx, verticalAlignIdx) {
                if (!strings[displayIdx] || strings[displayIdx].startsWith('inline') || strings[displayIdx].startsWith('table')) {
                    return;
                }
                if (strings[verticalAlignIdx] !== 'baseline') {
                    var reason = i18nString(UIStrings.verticalAlignmentAppliedTo);
                    this.add(unusedDeclarations, reason, {
                        declaration: "vertical-align: ".concat(strings[verticalAlignIdx]),
                        nodeId: nodeId
                    });
                }
            }
        }
    ]);
    return CSSOverviewUnusedDeclarations;
} //# sourceMappingURL=CSSOverviewUnusedDeclarations.js.map
();


}),

}]);