"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_docs_component_docs_js"], {
"./ui/components/docs/component_docs.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _Images_Images_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Images/Images.js */ "./Images/Images.js");
/* harmony import */var _Images_Images_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Images_Images_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */var _create_breadcrumbs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create_breadcrumbs.js */ "./ui/components/docs/create_breadcrumbs.js");
/* harmony import */var _toggle_dark_mode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggle_dark_mode.js */ "./ui/components/docs/toggle_dark_mode.js");
/* harmony import */var _toggle_fonts_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toggle_fonts.js */ "./ui/components/docs/toggle_fonts.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Ensure all image variables are defined in the component docs.




_toggle_dark_mode_js__WEBPACK_IMPORTED_MODULE_2__.init();
_create_breadcrumbs_js__WEBPACK_IMPORTED_MODULE_1__.init();
_toggle_fonts_js__WEBPACK_IMPORTED_MODULE_3__.init();
// This can be used by tests to hide the UI elements that are part of the component docs interface.
// E.g., this is useful for screenshot tests.
window.addEventListener('hidecomponentdocsui', function() {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = document.querySelectorAll('.component-docs-ui')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var node = _step.value;
            node.style.display = 'none';
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
});
window.addEventListener('showcomponentdocsui', function() {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = document.querySelectorAll('.component-docs-ui')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var node = _step.value;
            node.style.display = '';
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
}); //# sourceMappingURL=component_docs.js.map


}),
"./ui/components/docs/create_breadcrumbs.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  init: function() { return init; }
});
/* harmony import */var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _templateObject() {
    var data = _tagged_template_literal([
        '\n\n  <style>\n    .docs-breadcrumbs {\n      display: flex;\n      list-style: none;\n      position: fixed;\n      background: rgb(255 255 255 / .8);\n      padding: 5px;\n      bottom: 0;\n      left: 10px;\n      width: 300px;\n    }\n\n    .docs-breadcrumbs li a {\n      display: block;\n      padding: 10px;\n      font-size: 16px;\n    }\n\n    .docs-breadcrumbs span {\n      font-size: 20px;\n    }\n  </style>\n\n  <ul class="docs-breadcrumbs component-docs-ui">\n    <li><a href="/">Index</a></li>\n    <li><a href=".">All component examples</a></li>\n  </ul>'
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}

function init() {
    var container = document.createElement('ul');
    // clang-format off
    // eslint-disable-next-line rulesdir/ban_a_tags_in_lit_html
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html(_templateObject()), container);
    // clang-format on
    document.body.appendChild(container);
} //# sourceMappingURL=create_breadcrumbs.js.map


}),
"./ui/components/docs/toggle_dark_mode.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  init: function() { return init; }
});
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var DARK_THEME_CLASS = 'theme-with-dark-background';
function toggleDarkMode(force) {
    var // Only use the second arg if its not undefined. The spec treats `undefined` as falsy. :/
    _document_body_classList;
    (_document_body_classList = document.body.classList).toggle.apply(_document_body_classList, _to_consumable_array([
        DARK_THEME_CLASS
    ].concat(_to_consumable_array(force !== undefined ? [
        force
    ] : []))));
}
function init() {
    // To keep consistent test results, we don't auto-initialize darkmode. This'd do it, though:
    //    toggleDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    window.addEventListener('load', function() {
        var button = document.createElement('button');
        button.innerText = 'Toggle light/dark mode';
        button.className = 'component-docs-ui';
        button.style.position = 'fixed';
        button.style.bottom = '10px';
        button.style.right = '10px';
        button.style.width = '200px';
        button.style.fontSize = '16px';
        button.style.padding = '5px';
        button.style.cursor = 'pointer';
        button.addEventListener('click', function(event) {
            event.preventDefault();
            toggleDarkMode();
        });
        document.body.appendChild(button);
    });
} //# sourceMappingURL=toggle_dark_mode.js.map


}),
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