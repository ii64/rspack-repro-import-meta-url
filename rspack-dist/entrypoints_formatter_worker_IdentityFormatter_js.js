"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["entrypoints_formatter_worker_IdentityFormatter_js"], {
"./entrypoints/formatter_worker/IdentityFormatter.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  IdentityFormatter: function() { return IdentityFormatter; }
});
// Copyright 2016 The Chromium Authors. All rights reserved.
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
var IdentityFormatter = /*#__PURE__*/ function() {
    "use strict";
    function IdentityFormatter(builder) {
        _class_call_check(this, IdentityFormatter);
        _define_property(this, "builder", void 0);
        this.builder = builder;
    }
    _create_class(IdentityFormatter, [
        {
            key: "format",
            value: function format(text, lineEndings, fromOffset, toOffset) {
                var content = text.substring(fromOffset, toOffset);
                this.builder.addToken(content, fromOffset);
            }
        }
    ]);
    return IdentityFormatter;
} //# sourceMappingURL=IdentityFormatter.js.map
();


}),

}]);