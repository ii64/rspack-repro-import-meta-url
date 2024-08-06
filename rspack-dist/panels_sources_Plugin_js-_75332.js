"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_sources_Plugin_js-_75332"], {
"./panels/sources/Plugin.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Plugin: function() { return Plugin; }
});
// Copyright 2020 The Chromium Authors. All rights reserved.
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
var Plugin = /*#__PURE__*/ function() {
    "use strict";
    function Plugin(uiSourceCode, _transformer) {
        _class_call_check(this, Plugin);
        _define_property(this, "uiSourceCode", void 0);
        this.uiSourceCode = uiSourceCode;
    }
    _create_class(Plugin, [
        {
            key: "willHide",
            value: function willHide() {}
        },
        {
            key: "rightToolbarItems",
            value: function rightToolbarItems() {
                return [];
            }
        },
        {
            /**
     *
     * TODO(szuend): It is OK to asyncify this function (similar to {rightToolbarItems}),
     *               but it is currently not strictly necessary.
     */ key: "leftToolbarItems",
            value: function leftToolbarItems() {
                return [];
            }
        },
        {
            key: "populateLineGutterContextMenu",
            value: function populateLineGutterContextMenu(_contextMenu, _lineNumber) {}
        },
        {
            key: "populateTextAreaContextMenu",
            value: function populateTextAreaContextMenu(_contextMenu, _lineNumber, _columnNumber) {}
        },
        {
            key: "decorationChanged",
            value: function decorationChanged(_type, _editor) {}
        },
        {
            key: "editorExtension",
            value: function editorExtension() {
                return [];
            }
        },
        {
            key: "editorInitialized",
            value: function editorInitialized(_editor) {}
        },
        {
            key: "dispose",
            value: function dispose() {}
        }
    ], [
        {
            key: "accepts",
            value: function accepts(_uiSourceCode) {
                return false;
            }
        }
    ]);
    return Plugin;
} //# sourceMappingURL=Plugin.js.map
();


}),

}]);