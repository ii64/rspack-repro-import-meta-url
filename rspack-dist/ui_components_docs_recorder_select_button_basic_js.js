"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_docs_recorder_select_button_basic_js"], {
"./ui/components/docs/recorder_select_button/basic.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/ui/components/helpers/helpers.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/ui/lit-html/lit-html.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */var _panels_recorder_components_components_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../panels/recorder/components/components.js */ "./panels/recorder/components/components.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
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
        "\n    <",
        " .items=",
        " .value=",
        "></",
        ">"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n    <",
        " .disabled=",
        " .items=",
        " .value=",
        "></",
        ">"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "\n    <",
        "\n    .variant=",
        "\n    .items=",
        "\n    .value=",
        "></",
        ">"
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "\n    <",
        "\n    .disabled=",
        "\n    .variant=",
        "\n    .items=",
        "\n    .value=",
        "></",
        ">"
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}



 // eslint-disable-line rulesdir/es_modules_import
await Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/ui/components/helpers/helpers.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.initializeGlobalVars();
var container = document.getElementById('container');
var throttlingIconUrl = new URL(/* asset import */__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../panels/recorder/images/throttling_icon.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())), __webpack_require__.b).toString();
var playIconUrl = new URL(/* asset import */__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../images/play_icon.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())), __webpack_require__.b).toString();
var items = [
    {
        value: 'performance',
        label: function() {
            return 'Performance panel';
        },
        buttonIconUrl: throttlingIconUrl
    },
    {
        value: 'performance_insights',
        label: function() {
            return 'Performance insights panel';
        },
        buttonIconUrl: throttlingIconUrl
    }
];
var replayItems = [
    {
        value: 'normal',
        buttonIconUrl: playIconUrl,
        buttonLabel: function() {
            return 'Replay';
        },
        label: function() {
            return 'Normal (Default)';
        }
    },
    {
        value: 'slow',
        buttonIconUrl: playIconUrl,
        buttonLabel: function() {
            return 'Slow replay';
        },
        label: function() {
            return 'Slow';
        }
    },
    {
        value: 'very_slow',
        buttonIconUrl: playIconUrl,
        buttonLabel: function() {
            return 'Very slow replay';
        },
        label: function() {
            return 'Very slow';
        }
    },
    {
        value: 'extremely_slow',
        buttonIconUrl: playIconUrl,
        buttonLabel: function() {
            return 'Extremely slow replay';
        },
        label: function() {
            return 'Extremely slow';
        }
    }
];
function litRender(template) {
    var div = document.createElement('div');
    div.style.width = '400px';
    div.style.display = 'flex';
    div.style.margin = '10px';
    div.style.flexDirection = 'row-reverse';
    container === null || container === void 0 ? void 0 : container.appendChild(div);
    Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/ui/lit-html/lit-html.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(template, div); // eslint-disable-line
}
litRender(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/ui/lit-html/lit-html.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_templateObject(), _panels_recorder_components_components_js__WEBPACK_IMPORTED_MODULE_1__.SelectButton.SelectButton.litTagName, items, items[0].value, _panels_recorder_components_components_js__WEBPACK_IMPORTED_MODULE_1__.SelectButton.SelectButton.litTagName));
litRender(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/ui/lit-html/lit-html.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_templateObject1(), _panels_recorder_components_components_js__WEBPACK_IMPORTED_MODULE_1__.SelectButton.SelectButton.litTagName, true, items, items[0].value, _panels_recorder_components_components_js__WEBPACK_IMPORTED_MODULE_1__.SelectButton.SelectButton.litTagName));
litRender(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/ui/lit-html/lit-html.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_templateObject2(), _panels_recorder_components_components_js__WEBPACK_IMPORTED_MODULE_1__.SelectButton.SelectButton.litTagName, "outlined" /* RecorderComponents.SelectButton.Variant.OUTLINED */ , replayItems, replayItems[0].value, _panels_recorder_components_components_js__WEBPACK_IMPORTED_MODULE_1__.SelectButton.SelectButton.litTagName));
litRender(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/ui/lit-html/lit-html.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_templateObject3(), _panels_recorder_components_components_js__WEBPACK_IMPORTED_MODULE_1__.SelectButton.SelectButton.litTagName, true, "outlined" /* RecorderComponents.SelectButton.Variant.OUTLINED */ , replayItems, replayItems[2].value, _panels_recorder_components_components_js__WEBPACK_IMPORTED_MODULE_1__.SelectButton.SelectButton.litTagName)); //# sourceMappingURL=basic.js.map

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

}),

}]);