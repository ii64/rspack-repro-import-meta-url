"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_third_party_mitt_mitt_js"], {
"./third_party/puppeteer/package/lib/esm/third_party/mitt/mitt.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return mitt_default; }
});
/**
MIT License

Copyright (c) 2021 Jason Miller

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/ // ../../node_modules/mitt/dist/mitt.mjs
function mitt_default(n) {
    return {
        all: n = n || /* @__PURE__ */ new Map(),
        on: function on(t, e) {
            var i = n.get(t);
            i ? i.push(e) : n.set(t, [
                e
            ]);
        },
        off: function off(t, e) {
            var i = n.get(t);
            i && (e ? i.splice(i.indexOf(e) >>> 0, 1) : n.set(t, []));
        },
        emit: function emit(t, e) {
            var i = n.get(t);
            i && i.slice().map(function(n2) {
                n2(e);
            }), (i = n.get("*")) && i.slice().map(function(n2) {
                n2(t, e);
            });
        }
    };
}



}),

}]);