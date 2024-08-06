"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_elements_StylePropertyUtils_js"], {
"./panels/elements/StylePropertyUtils.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getCssDeclarationAsJavascriptProperty: function() { return getCssDeclarationAsJavascriptProperty; }
});
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getCssDeclarationAsJavascriptProperty(declaration) {
    var name = declaration.name, value = declaration.value;
    var declarationNameAsJs = name.startsWith('--') ? "'".concat(name, "'") : name.replace(/-([a-z])/gi, function(_str, group) {
        return group.toUpperCase();
    });
    var declarationAsJs = "'".concat(value.replaceAll('\'', '\\\''), "'");
    return "".concat(declarationNameAsJs, ": ").concat(declarationAsJs);
} //# sourceMappingURL=StylePropertyUtils.js.map


}),

}]);