"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_web-vitals_package_dist_modules_lib_getSelector_js"], {
"./third_party/web-vitals/package/dist/modules/lib/getSelector.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getSelector: function() { return getSelector; }
});
/*
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var getName = function(node) {
    var name = node.nodeName;
    return node.nodeType === 1 ? name.toLowerCase() : name.toUpperCase().replace(/^#/, '');
};
var getSelector = function(node, maxLen) {
    var sel = '';
    try {
        while(node && node.nodeType !== 9){
            var el = node;
            var part = el.id ? '#' + el.id : getName(el) + (el.classList && el.classList.value && el.classList.value.trim() && el.classList.value.trim().length ? '.' + el.classList.value.trim().replace(/\s+/g, '.') : '');
            if (sel.length + part.length > (maxLen || 100) - 1) return sel || part;
            sel = sel ? part + '>' + sel : part;
            if (el.id) break;
            node = el.parentNode;
        }
    } catch (err) {
    // Do nothing...
    }
    return sel;
};


}),

}]);