"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_docs_toggle_fonts_js"], {
"./ui/components/docs/toggle_fonts.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  init: function() { return init; }
});
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var PLATFORM_MAC_CLASS = 'platform-mac';
var PLATFORM_LINUX_CLASS = 'platform-linux';
var PLATFORM_WINDOWS_CLASS = 'platform-windows';
var urlParams = new URLSearchParams(window.location.search);
function init() {
    // fontFamily is provided by the interaction tests.
    // While platform-specific class names define multiple font-families,
    // we want a single font-family to be used by the tests.
    if (urlParams.has('fontFamily')) {
        var div = document.createElement('div');
        div.className = 'component-docs-ui';
        div.style.position = 'fixed';
        div.style.bottom = '10px';
        div.style.right = '230px';
        div.style.width = '250px';
        div.style.fontSize = '16px';
        div.style.padding = '5px';
        div.innerText = "font-family: ".concat(urlParams.get('fontFamily'));
        window.addEventListener('load', function() {
            document.body.appendChild(div);
        });
        document.body.style.fontFamily = "".concat(urlParams.get('fontFamily'));
        return;
    }
    document.documentElement.classList.add(PLATFORM_LINUX_CLASS);
    var button = document.createElement('button');
    button.className = 'component-docs-ui';
    var loop = [
        PLATFORM_LINUX_CLASS,
        PLATFORM_MAC_CLASS,
        PLATFORM_WINDOWS_CLASS
    ];
    function toggleFonts() {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = loop[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var className = _step.value;
                if (className === loop[0]) {
                    document.documentElement.classList.add(className);
                } else {
                    document.documentElement.classList.remove(className);
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
        loop.push(loop.shift());
        button.innerText = 'Turn on ' + loop[0] + ' fonts';
    }
    window.addEventListener('load', function() {
        toggleFonts();
        button.style.position = 'fixed';
        button.style.bottom = '10px';
        button.style.right = '230px';
        button.style.width = '250px';
        button.style.fontSize = '16px';
        button.style.padding = '5px';
        button.style.cursor = 'pointer';
        button.addEventListener('click', function(event) {
            event.preventDefault();
            toggleFonts();
        });
        document.body.appendChild(button);
    });
} //# sourceMappingURL=toggle_fonts.js.map


}),

}]);