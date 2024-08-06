"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_sources_components_BreakpointsView_js"], {
"./panels/sources/components/BreakpointsView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BreakpointsSidebarController: function() { return BreakpointsSidebarController; },
  BreakpointsView: function() { return BreakpointsView; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models/breakpoints/breakpoints.js */ "./models/breakpoints/breakpoints.js");
/* harmony import */var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../ui/components/input/input.js */ "./ui/components/input/input.js");
/* harmony import */var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _breakpointsView_css_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./breakpointsView.css.js */ "./panels/sources/components/breakpointsView.css.js");
/* harmony import */var _BreakpointsViewUtils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./BreakpointsViewUtils.js */ "./panels/sources/components/BreakpointsViewUtils.js");
// Copyright (c) 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) {
        return descriptor.get.call(receiver);
    }
    return descriptor.value;
}
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) {
        descriptor.set.call(receiver, value);
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
}
function _class_private_field_get(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
    return _class_apply_descriptor_get(receiver, descriptor);
}
function _class_private_field_init(obj, privateMap, value) {
    _check_private_redeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
    _class_apply_descriptor_set(receiver, descriptor, value);
    return value;
}
function _class_private_method_get(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
}
function _class_private_method_init(obj, privateSet) {
    _check_private_redeclaration(obj, privateSet);
    privateSet.add(obj);
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
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
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
function _templateObject() {
    var data = _tagged_template_literal([
        "",
        ""
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n        <div class='pause-on-uncaught-exceptions'\n            tabindex='0'\n            @click=",
        "\n            @keydown=",
        "\n            role='checkbox'\n            aria-checked=",
        "\n            data-first-pause>\n          <label class='checkbox-label'>\n            <input type='checkbox' tabindex=-1 class=\"small\" ?checked=",
        " @change=",
        " jslog=",
        ">\n            <span>",
        "</span>\n          </label>\n        </div>\n        <div class='pause-on-caught-exceptions'\n              tabindex='-1'\n              @click=",
        "\n              @keydown=",
        "\n              role='checkbox'\n              aria-checked=",
        "\n              data-last-pause>\n            <label class='checkbox-label'>\n              <input data-pause-on-caught-checkbox type='checkbox' class=\"small\" tabindex=-1 ?checked=",
        " ?disabled=",
        " @change=",
        " jslog=",
        ">\n              <span>",
        "</span>\n            </label>\n        </div>\n        <div role=tree>\n          ",
        "\n        </div>"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "devtools-breakpoint-view"
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "\n    <button data-edit-breakpoint @click=",
        " title=",
        " jslog=",
        ">\n      <",
        ' name="edit"></',
        ">\n    </button>\n      "
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        "\n    <button data-remove-breakpoint @click=",
        " title=",
        " aria-label=",
        " jslog=",
        ">\n      <",
        ' name="bin"></',
        ">\n    </button>\n      "
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _tagged_template_literal([
        "\n      <details class=",
        "\n               ?data-first-group=",
        "\n               ?data-last-group=",
        "\n               role=group\n               aria-label='",
        "'\n               aria-description='",
        "'\n               ?open=",
        "\n               @toggle=",
        ">\n          <summary @contextmenu=",
        "\n                   tabindex='-1'\n                   @keydown=",
        "\n                   @click=",
        ">\n            <span class='group-header' aria-hidden=true><span class='group-icon-or-disable'>",
        "",
        "</span><span class='group-header-title' title='",
        "'>",
        "<span class='group-header-differentiator'>",
        "</span></span></span>\n            <span class='group-hover-actions'>\n              ",
        "\n            </span>\n          </summary>\n        ",
        "\n      </details>\n      "
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = _tagged_template_literal([
        "\n      <input class='group-checkbox small' type='checkbox'\n            aria-label=''\n            .checked=",
        "\n            @change=",
        "\n            tabindex=-1\n            jslog=",
        ">\n    "
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = _tagged_template_literal([
        "<",
        ' name="file-script"></',
        ">"
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject8() {
    var data = _tagged_template_literal([
        "\n    <div class=",
        "\n         ?data-first-breakpoint=",
        "\n         ?data-last-breakpoint=",
        "\n         aria-label=",
        "\n         role=treeitem\n         tabindex='-1'\n         @contextmenu=",
        "\n         @click=",
        "\n         @keydown=",
        ">\n      <label class='checkbox-label'>\n        <span class='type-indicator'></span>\n        <input type='checkbox'\n              aria-label=",
        "\n              class='small'\n              ?indeterminate=",
        "\n              .checked=",
        "\n              @change=",
        "\n              tabindex=-1\n              jslog=",
        ">\n      </label>\n      <span class='code-snippet' @click=",
        " title=",
        " jslog=",
        ">",
        "</span>\n      <span class='breakpoint-item-location-or-actions'>\n        ",
        "\n        ",
        "\n        <span class='location'>",
        "</span>\n      </span>\n    </div>\n    "
    ]);
    _templateObject8 = function _templateObject() {
        return data;
    };
    return data;
}



















var UIStrings = {
    /**
     *@description Label for a checkbox to toggle pausing on uncaught exceptions in the breakpoint sidebar of the Sources panel. When the checkbox is checked, DevTools will pause if an uncaught exception is thrown at runtime.
     */ pauseOnUncaughtExceptions: 'Pause on uncaught exceptions',
    /**
     *@description Label for a checkbox to toggling pausing on caught exceptions in the breakpoint sidebar of the Sources panel. When the checkbox is checked, DevTools will pause if an exception is thrown, but caught (handled) at runtime.
     */ pauseOnCaughtExceptions: 'Pause on caught exceptions',
    /**
     *@description Text exposed to screen readers on checked items.
     */ checked: 'checked',
    /**
     *@description Accessible text exposed to screen readers when the screen reader encounters an unchecked checkbox.
     */ unchecked: 'unchecked',
    /**
     *@description Accessible text for a breakpoint collection with a combination of checked states.
     */ indeterminate: 'mixed',
    /**
     *@description Accessibility label for hit breakpoints in the Sources panel.
     *@example {checked} PH1
     */ breakpointHit: '{PH1} breakpoint hit',
    /**
     *@description Tooltip text that shows when hovered over a remove button that appears next to a filename in the breakpoint sidebar of the sources panel. Also used in the context menu for breakpoint groups.
     */ removeAllBreakpointsInFile: 'Remove all breakpoints in file',
    /**
     *@description Context menu item in the Breakpoints Sidebar Pane of the Sources panel that disables all breakpoints in a file.
     */ disableAllBreakpointsInFile: 'Disable all breakpoints in file',
    /**
     *@description Context menu item in the Breakpoints Sidebar Pane of the Sources panel that enables all breakpoints in a file.
     */ enableAllBreakpointsInFile: 'Enable all breakpoints in file',
    /**
     *@description Tooltip text that shows when hovered over an edit button that appears next to a breakpoint or conditional breakpoint in the breakpoint sidebar of the sources panel.
     */ editCondition: 'Edit condition',
    /**
     *@description Tooltip text that shows when hovered over an edit button that appears next to a logpoint in the breakpoint sidebar of the sources panel.
     */ editLogpoint: 'Edit logpoint',
    /**
     *@description Context menu item in the Breakpoints Sidebar Pane of the Sources panel that disables all breakpoints.
     */ disableAllBreakpoints: 'Disable all breakpoints',
    /**
     *@description Context menu item in the Breakpoints Sidebar Pane of the Sources panel that enables all breakpoints.
     */ enableAllBreakpoints: 'Enable all breakpoints',
    /**
     *@description Tooltip text that shows when hovered over a remove button that appears next to a breakpoint in the breakpoint sidebar of the sources panel. Also used in the context menu for breakpoint items.
     */ removeBreakpoint: 'Remove breakpoint',
    /**
     *@description Text to remove all breakpoints
     */ removeAllBreakpoints: 'Remove all breakpoints',
    /**
     *@description Text in Breakpoints Sidebar Pane of the Sources panel
     */ removeOtherBreakpoints: 'Remove other breakpoints',
    /**
     *@description Context menu item that reveals the source code location of a breakpoint in the Sources panel.
     */ revealLocation: 'Reveal location',
    /**
     *@description Tooltip text that shows when hovered over a piece of code of a breakpoint in the breakpoint sidebar of the sources panel. It shows the condition, on which the breakpoint will stop.
     *@example {x < 3} PH1
     */ conditionCode: 'Condition: {PH1}',
    /**
     *@description Tooltip text that shows when hovered over a piece of code of a breakpoint in the breakpoint sidebar of the sources panel. It shows what is going to be printed in the console, if execution hits this breakpoint.
     *@example {'hello'} PH1
     */ logpointCode: 'Logpoint: {PH1}'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/sources/components/BreakpointsView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
var coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_12__.RenderCoordinator.RenderCoordinator.instance();
var MAX_SNIPPET_LENGTH = 200;
var breakpointsViewInstance;
var breakpointsViewControllerInstance;
var _breakpointManager = /*#__PURE__*/ new WeakMap(), _breakpointItemToLocationMap = /*#__PURE__*/ new WeakMap(), _breakpointsActiveSetting = /*#__PURE__*/ new WeakMap(), _pauseOnUncaughtExceptionSetting = /*#__PURE__*/ new WeakMap(), _pauseOnCaughtExceptionSetting = /*#__PURE__*/ new WeakMap(), _collapsedFilesSettings = /*#__PURE__*/ new WeakMap(), _collapsedFiles = /*#__PURE__*/ new WeakMap(), // This is used to keep track of outstanding edits to breakpoints that were initiated
// by the breakpoint edit button (for UMA).
_outstandingBreakpointEdited = /*#__PURE__*/ new WeakMap(), _updateScheduled = /*#__PURE__*/ new WeakMap(), _updateRunning = /*#__PURE__*/ new WeakMap(), _onBreakpointAdded = /*#__PURE__*/ new WeakSet(), _onBreakpointRemoved = /*#__PURE__*/ new WeakSet(), _saveSettings = /*#__PURE__*/ new WeakSet(), _getBreakpointTypeAndDetails = /*#__PURE__*/ new WeakSet(), _getLocationsForBreakpointItem = /*#__PURE__*/ new WeakSet(), _getHitUILocation = /*#__PURE__*/ new WeakSet(), _getBreakpointLocations = /*#__PURE__*/ new WeakSet(), _groupBreakpointLocationsById = /*#__PURE__*/ new WeakSet(), _getLocationIdsByLineId = /*#__PURE__*/ new WeakSet(), _getBreakpointState = /*#__PURE__*/ new WeakSet(), _getContent = /*#__PURE__*/ new WeakSet();
var BreakpointsSidebarController = /*#__PURE__*/ function() {
    "use strict";
    function BreakpointsSidebarController(breakpointManager, settings) {
        _class_call_check(this, BreakpointsSidebarController);
        _class_private_method_init(this, _onBreakpointAdded);
        _class_private_method_init(this, _onBreakpointRemoved);
        _class_private_method_init(this, _saveSettings);
        _class_private_method_init(this, _getBreakpointTypeAndDetails);
        _class_private_method_init(this, _getLocationsForBreakpointItem);
        _class_private_method_init(this, _getHitUILocation);
        _class_private_method_init(this, _getBreakpointLocations);
        _class_private_method_init(this, _groupBreakpointLocationsById);
        _class_private_method_init(this, _getLocationIdsByLineId);
        _class_private_method_init(this, _getBreakpointState);
        _class_private_method_init(this, _getContent);
        _class_private_field_init(this, _breakpointManager, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _breakpointItemToLocationMap, {
            writable: true,
            value: new WeakMap()
        });
        _class_private_field_init(this, _breakpointsActiveSetting, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _pauseOnUncaughtExceptionSetting, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _pauseOnCaughtExceptionSetting, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _collapsedFilesSettings, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _collapsedFiles, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _outstandingBreakpointEdited, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _updateScheduled, {
            writable: true,
            value: false
        });
        _class_private_field_init(this, _updateRunning, {
            writable: true,
            value: false
        });
        _class_private_field_set(this, _collapsedFilesSettings, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('collapsed-files', []));
        _class_private_field_set(this, _collapsedFiles, new Set(_class_private_field_get(this, _collapsedFilesSettings).get()));
        _class_private_field_set(this, _breakpointManager, breakpointManager);
        _class_private_field_get(this, _breakpointManager).addEventListener(_models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_6__.BreakpointManager.Events.BreakpointAdded, _class_private_method_get(this, _onBreakpointAdded, onBreakpointAdded), this);
        _class_private_field_get(this, _breakpointManager).addEventListener(_models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_6__.BreakpointManager.Events.BreakpointRemoved, _class_private_method_get(this, _onBreakpointRemoved, onBreakpointRemoved), this);
        _class_private_field_set(this, _breakpointsActiveSetting, settings.moduleSetting('breakpoints-active'));
        _class_private_field_get(this, _breakpointsActiveSetting).addChangeListener(this.update, this);
        _class_private_field_set(this, _pauseOnUncaughtExceptionSetting, settings.moduleSetting('pause-on-uncaught-exception'));
        _class_private_field_get(this, _pauseOnUncaughtExceptionSetting).addChangeListener(this.update, this);
        _class_private_field_set(this, _pauseOnCaughtExceptionSetting, settings.moduleSetting('pause-on-caught-exception'));
        _class_private_field_get(this, _pauseOnCaughtExceptionSetting).addChangeListener(this.update, this);
    }
    _create_class(BreakpointsSidebarController, [
        {
            key: "flavorChanged",
            value: function flavorChanged(_object) {
                void this.update();
            }
        },
        {
            key: "breakpointEditFinished",
            value: function breakpointEditFinished(breakpoint, edited) {
                if (_class_private_field_get(this, _outstandingBreakpointEdited) && _class_private_field_get(this, _outstandingBreakpointEdited) === breakpoint) {
                    if (edited) {
                        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.BreakpointConditionEditedFromSidebar);
                    }
                    _class_private_field_set(this, _outstandingBreakpointEdited, undefined);
                }
            }
        },
        {
            key: "breakpointStateChanged",
            value: function breakpointStateChanged(breakpointItem, checked) {
                var locations = _class_private_method_get(this, _getLocationsForBreakpointItem, getLocationsForBreakpointItem).call(this, breakpointItem);
                locations.forEach(function(value) {
                    var breakpoint = value.breakpoint;
                    breakpoint.setEnabled(checked);
                });
            }
        },
        {
            key: "breakpointEdited",
            value: function breakpointEdited(breakpointItem, editButtonClicked) {
                var _this = this;
                return _async_to_generator(function() {
                    var locations, location, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, locationCandidate;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                locations = _class_private_method_get(_this, _getLocationsForBreakpointItem, getLocationsForBreakpointItem).call(_this, breakpointItem);
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = locations[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        locationCandidate = _step.value;
                                        if (!location || locationCandidate.uiLocation.compareTo(location.uiLocation) < 0) {
                                            location = locationCandidate;
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
                                if (!location) return [
                                    3,
                                    2
                                ];
                                if (editButtonClicked) {
                                    _class_private_field_set(_this, _outstandingBreakpointEdited, location.breakpoint);
                                }
                                return [
                                    4,
                                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(location)
                                ];
                            case 1:
                                _state.sent();
                                _state.label = 2;
                            case 2:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "breakpointsRemoved",
            value: function breakpointsRemoved(breakpointItems) {
                var _this = this;
                var locations = breakpointItems.flatMap(function(breakpointItem) {
                    return _class_private_method_get(_this, _getLocationsForBreakpointItem, getLocationsForBreakpointItem).call(_this, breakpointItem);
                });
                locations.forEach(function(location) {
                    return location === null || location === void 0 ? void 0 : location.breakpoint.remove(false);
                });
            }
        },
        {
            key: "expandedStateChanged",
            value: function expandedStateChanged(url, expanded) {
                if (expanded) {
                    _class_private_field_get(this, _collapsedFiles).delete(url);
                } else {
                    _class_private_field_get(this, _collapsedFiles).add(url);
                }
                _class_private_method_get(this, _saveSettings, saveSettings).call(this);
            }
        },
        {
            key: "jumpToSource",
            value: function jumpToSource(breakpointItem) {
                var _this = this;
                return _async_to_generator(function() {
                    var uiLocations, uiLocation, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, uiLocationCandidate;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                uiLocations = _class_private_method_get(_this, _getLocationsForBreakpointItem, getLocationsForBreakpointItem).call(_this, breakpointItem).map(function(location) {
                                    return location.uiLocation;
                                });
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = uiLocations[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        uiLocationCandidate = _step.value;
                                        if (!uiLocation || uiLocationCandidate.compareTo(uiLocation) < 0) {
                                            uiLocation = uiLocationCandidate;
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
                                if (!uiLocation) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(uiLocation)
                                ];
                            case 1:
                                _state.sent();
                                _state.label = 2;
                            case 2:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "setPauseOnUncaughtExceptions",
            value: function setPauseOnUncaughtExceptions(value) {
                _class_private_field_get(this, _pauseOnUncaughtExceptionSetting).set(value);
            }
        },
        {
            key: "setPauseOnCaughtExceptions",
            value: function setPauseOnCaughtExceptions(value) {
                _class_private_field_get(this, _pauseOnCaughtExceptionSetting).set(value);
            }
        },
        {
            key: "update",
            value: function update() {
                var _this = this;
                return _async_to_generator(function() {
                    var data;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _class_private_field_set(_this, _updateScheduled, true);
                                if (_class_private_field_get(_this, _updateRunning)) {
                                    return [
                                        2
                                    ];
                                }
                                _class_private_field_set(_this, _updateRunning, true);
                                _state.label = 1;
                            case 1:
                                if (!_class_private_field_get(_this, _updateScheduled)) return [
                                    3,
                                    3
                                ];
                                _class_private_field_set(_this, _updateScheduled, false);
                                return [
                                    4,
                                    _this.getUpdatedBreakpointViewData()
                                ];
                            case 2:
                                data = _state.sent();
                                BreakpointsView.instance().data = data;
                                return [
                                    3,
                                    1
                                ];
                            case 3:
                                _class_private_field_set(_this, _updateRunning, false);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getUpdatedBreakpointViewData",
            value: function getUpdatedBreakpointViewData() {
                var _this = this;
                return _async_to_generator(function() {
                    var breakpointsActive, independentPauseToggles, pauseOnUncaughtExceptions, pauseOnCaughtExceptions, breakpointLocations, locationsGroupedById, locationIdsByLineId, _ref, content, selectedUILocation, scriptIdToGroup, idx, locations, fstLocation, sourceURL, scriptId, uiLocation, isHit, numBreakpointsOnLine, showColumn, locationText, text, _uiLocation_columnNumber, _text_lines_text_bytecodeOffsetToLineNumber, codeSnippet, expanded, status, _class_private_method_get_call, type, hoverText, item, group, _group, editable;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                breakpointsActive = _class_private_field_get(_this, _breakpointsActiveSetting).get();
                                independentPauseToggles = BreakpointsSidebarController.targetSupportsIndependentPauseOnExceptionToggles();
                                pauseOnUncaughtExceptions = _class_private_field_get(_this, _pauseOnUncaughtExceptionSetting).get();
                                pauseOnCaughtExceptions = _class_private_field_get(_this, _pauseOnCaughtExceptionSetting).get();
                                breakpointLocations = _class_private_method_get(_this, _getBreakpointLocations, getBreakpointLocations).call(_this);
                                if (!breakpointLocations.length) {
                                    return [
                                        2,
                                        {
                                            breakpointsActive: breakpointsActive,
                                            pauseOnCaughtExceptions: pauseOnCaughtExceptions,
                                            pauseOnUncaughtExceptions: pauseOnUncaughtExceptions,
                                            independentPauseToggles: independentPauseToggles,
                                            groups: []
                                        }
                                    ];
                                }
                                locationsGroupedById = _class_private_method_get(_this, _groupBreakpointLocationsById, groupBreakpointLocationsById).call(_this, breakpointLocations);
                                locationIdsByLineId = _class_private_method_get(_this, _getLocationIdsByLineId, getLocationIdsByLineId).call(_this, breakpointLocations);
                                return [
                                    4,
                                    Promise.all([
                                        _class_private_method_get(_this, _getContent, getContent).call(_this, locationsGroupedById),
                                        _class_private_method_get(_this, _getHitUILocation, getHitUILocation).call(_this)
                                    ])
                                ];
                            case 1:
                                _ref = _sliced_to_array.apply(void 0, [
                                    _state.sent(),
                                    2
                                ]), content = _ref[0], selectedUILocation = _ref[1];
                                scriptIdToGroup = new Map();
                                for(idx = 0; idx < locationsGroupedById.length; idx++){
                                    locations = locationsGroupedById[idx];
                                    fstLocation = locations[0];
                                    sourceURL = fstLocation.uiLocation.uiSourceCode.url();
                                    scriptId = fstLocation.uiLocation.uiSourceCode.canononicalScriptId();
                                    uiLocation = fstLocation.uiLocation;
                                    isHit = selectedUILocation !== null && locations.some(function(location) {
                                        return location.uiLocation.id() === selectedUILocation.id();
                                    });
                                    numBreakpointsOnLine = locationIdsByLineId.get(uiLocation.lineId()).size;
                                    showColumn = numBreakpointsOnLine > 1;
                                    locationText = uiLocation.lineAndColumnText(showColumn);
                                    text = content[idx];
                                    ;
                                    codeSnippet = _instanceof(text, _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_7__.Text.Text) ? text.lineAt(uiLocation.lineNumber) : (_text_lines_text_bytecodeOffsetToLineNumber = text.lines[text.bytecodeOffsetToLineNumber((_uiLocation_columnNumber = uiLocation.columnNumber) !== null && _uiLocation_columnNumber !== void 0 ? _uiLocation_columnNumber : 0)]) !== null && _text_lines_text_bytecodeOffsetToLineNumber !== void 0 ? _text_lines_text_bytecodeOffsetToLineNumber : '';
                                    if (isHit && _class_private_field_get(_this, _collapsedFiles).has(sourceURL)) {
                                        _class_private_field_get(_this, _collapsedFiles).delete(sourceURL);
                                        _class_private_method_get(_this, _saveSettings, saveSettings).call(_this);
                                    }
                                    expanded = !_class_private_field_get(_this, _collapsedFiles).has(sourceURL);
                                    status = _class_private_method_get(_this, _getBreakpointState, getBreakpointState).call(_this, locations);
                                    _class_private_method_get_call = _class_private_method_get(_this, _getBreakpointTypeAndDetails, getBreakpointTypeAndDetails).call(_this, locations), type = _class_private_method_get_call.type, hoverText = _class_private_method_get_call.hoverText;
                                    item = {
                                        id: fstLocation.breakpoint.breakpointStorageId(),
                                        location: locationText,
                                        codeSnippet: codeSnippet,
                                        isHit: isHit,
                                        status: status,
                                        type: type,
                                        hoverText: hoverText
                                    };
                                    _class_private_field_get(_this, _breakpointItemToLocationMap).set(item, locations);
                                    group = scriptIdToGroup.get(scriptId);
                                    if (group) {
                                        ;
                                        group.breakpointItems.push(item);
                                        (_group = group).expanded || (_group.expanded = expanded);
                                    } else {
                                        editable = _class_private_field_get(_this, _breakpointManager).supportsConditionalBreakpoints(uiLocation.uiSourceCode);
                                        group = {
                                            url: sourceURL,
                                            name: uiLocation.uiSourceCode.displayName(),
                                            editable: editable,
                                            expanded: expanded,
                                            breakpointItems: [
                                                item
                                            ]
                                        };
                                        scriptIdToGroup.set(scriptId, group);
                                    }
                                }
                                return [
                                    2,
                                    {
                                        breakpointsActive: breakpointsActive,
                                        pauseOnCaughtExceptions: pauseOnCaughtExceptions,
                                        pauseOnUncaughtExceptions: pauseOnUncaughtExceptions,
                                        independentPauseToggles: independentPauseToggles,
                                        groups: Array.from(scriptIdToGroup.values())
                                    }
                                ];
                        }
                    });
                })();
            }
        }
    ], [
        {
            key: "instance",
            value: function instance() {
                var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                    forceNew: null,
                    breakpointManager: _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_6__.BreakpointManager.BreakpointManager.instance(),
                    settings: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance()
                }, forceNew = _ref.forceNew, breakpointManager = _ref.breakpointManager, settings = _ref.settings;
                if (!breakpointsViewControllerInstance || forceNew) {
                    breakpointsViewControllerInstance = new BreakpointsSidebarController(breakpointManager, settings);
                }
                return breakpointsViewControllerInstance;
            }
        },
        {
            key: "removeInstance",
            value: function removeInstance() {
                breakpointsViewControllerInstance = null;
            }
        },
        {
            key: "targetSupportsIndependentPauseOnExceptionToggles",
            value: function targetSupportsIndependentPauseOnExceptionToggles() {
                var hasNodeTargets = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().targets().some(function(target) {
                    return target.type() === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Target.Type.Node;
                });
                return !hasNodeTargets;
            }
        }
    ]);
    return BreakpointsSidebarController;
}();
function onBreakpointAdded(event) {
    var breakpoint = event.data.breakpoint;
    if (breakpoint.origin === "USER_ACTION" /* Breakpoints.BreakpointManager.BreakpointOrigin.USER_ACTION */  && _class_private_field_get(this, _collapsedFiles).has(breakpoint.url())) {
        // Auto-expand if a new breakpoint was added to a collapsed group.
        _class_private_field_get(this, _collapsedFiles).delete(breakpoint.url());
        _class_private_method_get(this, _saveSettings, saveSettings).call(this);
    }
    return this.update();
}
function onBreakpointRemoved(event) {
    var breakpoint = event.data.breakpoint;
    if (_class_private_field_get(this, _collapsedFiles).has(breakpoint.url())) {
        var locations = _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_6__.BreakpointManager.BreakpointManager.instance().allBreakpointLocations();
        var otherBreakpointsOnSameFileExist = locations.some(function(location) {
            return location.breakpoint.url() === breakpoint.url();
        });
        if (!otherBreakpointsOnSameFileExist) {
            // Clear up the #collapsedFiles set from this url if no breakpoint is left in this group.
            _class_private_field_get(this, _collapsedFiles).delete(breakpoint.url());
            _class_private_method_get(this, _saveSettings, saveSettings).call(this);
        }
    }
    return this.update();
}
function saveSettings() {
    _class_private_field_get(this, _collapsedFilesSettings).set(Array.from(_class_private_field_get(this, _collapsedFiles).values()));
}
function getBreakpointTypeAndDetails(locations) {
    var breakpointWithCondition = locations.find(function(location) {
        return Boolean(location.breakpoint.condition());
    });
    var breakpoint = breakpointWithCondition === null || breakpointWithCondition === void 0 ? void 0 : breakpointWithCondition.breakpoint;
    if (!breakpoint || !breakpoint.condition()) {
        return {
            type: "REGULAR_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.REGULAR_BREAKPOINT */ 
        };
    }
    var condition = breakpoint.condition();
    if (breakpoint.isLogpoint()) {
        return {
            type: "LOGPOINT" /* SDK.DebuggerModel.BreakpointType.LOGPOINT */ ,
            hoverText: condition
        };
    }
    return {
        type: "CONDITIONAL_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.CONDITIONAL_BREAKPOINT */ ,
        hoverText: condition
    };
}
function getLocationsForBreakpointItem(breakpointItem) {
    var locations = _class_private_field_get(this, _breakpointItemToLocationMap).get(breakpointItem);
    (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.assertNotNullOrUndefined)(locations);
    return locations;
}
function getHitUILocation() {
    return _getHitUILocation1.apply(this, arguments);
}
function _getHitUILocation1() {
    _getHitUILocation1 = _async_to_generator(function() {
        var details;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    details = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.DebuggerPausedDetails);
                    if (!(details && details.callFrames.length)) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().rawLocationToUILocation(details.callFrames[0].location())
                    ];
                case 1:
                    return [
                        2,
                        _state.sent()
                    ];
                case 2:
                    return [
                        2,
                        null
                    ];
            }
        });
    });
    return _getHitUILocation1.apply(this, arguments);
}
function getBreakpointLocations() {
    var locations = _class_private_field_get(this, _breakpointManager).allBreakpointLocations().filter(function(breakpointLocation) {
        return breakpointLocation.uiLocation.uiSourceCode.project().type() !== _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.projectTypes.Debugger;
    });
    locations.sort(function(item1, item2) {
        return item1.uiLocation.compareTo(item2.uiLocation);
    });
    var result = [];
    var lastBreakpoint = null;
    var lastLocation = null;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = locations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var location = _step.value;
            if (location.breakpoint !== lastBreakpoint || lastLocation && location.uiLocation.compareTo(lastLocation)) {
                result.push(location);
                lastBreakpoint = location.breakpoint;
                lastLocation = location.uiLocation;
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
    return result;
}
function groupBreakpointLocationsById(breakpointLocations) {
    var map = new _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.MapUtilities.Multimap();
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = breakpointLocations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var breakpointLocation = _step.value;
            var uiLocation = breakpointLocation.uiLocation;
            map.set(uiLocation.id(), breakpointLocation);
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
    var arr = [];
    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
    try {
        for(var _iterator1 = map.keysArray()[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
            var id = _step1.value;
            var locations = Array.from(map.get(id));
            if (locations.length) {
                arr.push(locations);
            }
        }
    } catch (err) {
        _didIteratorError1 = true;
        _iteratorError1 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                _iterator1.return();
            }
        } finally{
            if (_didIteratorError1) {
                throw _iteratorError1;
            }
        }
    }
    return arr;
}
function getLocationIdsByLineId(breakpointLocations) {
    var result = new _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.MapUtilities.Multimap();
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = breakpointLocations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var breakpointLocation = _step.value;
            var uiLocation = breakpointLocation.uiLocation;
            result.set(uiLocation.lineId(), uiLocation.id());
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
    return result;
}
function getBreakpointState(locations) {
    var hasEnabled = locations.some(function(location) {
        return location.breakpoint.enabled();
    });
    var hasDisabled = locations.some(function(location) {
        return !location.breakpoint.enabled();
    });
    var status;
    if (hasEnabled) {
        status = hasDisabled ? "INDETERMINATE" /* BreakpointStatus.INDETERMINATE */  : "ENABLED" /* BreakpointStatus.ENABLED */ ;
    } else {
        status = "DISABLED" /* BreakpointStatus.DISABLED */ ;
    }
    return status;
}
function getContent(locations) {
    // Use a cache to share the Text objects between all breakpoints. This way
    // we share the cached line ending information that Text calculates. This
    // was very slow to calculate with a lot of breakpoints in the same very
    // large source file.
    var contentToTextMap = new Map();
    return Promise.all(locations.map(function() {
        var _ref = _async_to_generator(function(param) {
            var _param, _param_, uiSourceCode, deferredContent, contentText, text;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _param = _sliced_to_array(param, 1), _param_ = _param[0], uiSourceCode = _param_.uiLocation.uiSourceCode;
                        return [
                            4,
                            uiSourceCode.requestContent({
                                cachedWasmOnly: true
                            })
                        ];
                    case 1:
                        deferredContent = _state.sent();
                        if ('wasmDisassemblyInfo' in deferredContent && deferredContent.wasmDisassemblyInfo) {
                            return [
                                2,
                                deferredContent.wasmDisassemblyInfo
                            ];
                        }
                        contentText = deferredContent.content || '';
                        if (contentToTextMap.has(contentText)) {
                            return [
                                2,
                                contentToTextMap.get(contentText)
                            ];
                        }
                        text = new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_7__.Text.Text(contentText);
                        contentToTextMap.set(contentText, text);
                        return [
                            2,
                            text
                        ];
                }
            });
        });
        return function(_) {
            return _ref.apply(this, arguments);
        };
    }()));
}
var _controller = /*#__PURE__*/ new WeakMap(), _LegacyWrapper_LegacyWrapper_WrappableComponent, _shadow = /*#__PURE__*/ new WeakMap(), _pauseOnUncaughtExceptions = /*#__PURE__*/ new WeakMap(), _pauseOnCaughtExceptions = /*#__PURE__*/ new WeakMap(), // TODO(crbug.com/1382762): Remove special casing with dependent toggles as soon as Node LTS caught up on independent pause of exception toggles.
_independentPauseToggles = /*#__PURE__*/ new WeakMap(), _breakpointsActive = /*#__PURE__*/ new WeakMap(), _breakpointGroups = /*#__PURE__*/ new WeakMap(), _urlToDifferentiatingPath = /*#__PURE__*/ new WeakMap(), _keyDownHandler = /*#__PURE__*/ new WeakSet(), _setSelected = /*#__PURE__*/ new WeakSet(), _handleArrowKey = /*#__PURE__*/ new WeakSet(), _handleHomeOrEndKey = /*#__PURE__*/ new WeakSet(), _renderEditBreakpointButton = /*#__PURE__*/ new WeakSet(), _renderRemoveBreakpointButton = /*#__PURE__*/ new WeakSet(), _onBreakpointGroupContextMenu = /*#__PURE__*/ new WeakSet(), _renderBreakpointGroup = /*#__PURE__*/ new WeakSet(), _renderGroupCheckbox = /*#__PURE__*/ new WeakSet(), _renderFileIcon = /*#__PURE__*/ new WeakSet(), _onBreakpointEntryContextMenu = /*#__PURE__*/ new WeakSet(), _renderBreakpointEntry = /*#__PURE__*/ new WeakSet(), _getCodeSnippetTooltip = /*#__PURE__*/ new WeakSet(), _getBreakpointItemDescription = /*#__PURE__*/ new WeakSet(), _onCheckboxToggled = /*#__PURE__*/ new WeakSet(), _onPauseOnCaughtExceptionsStateChanged = /*#__PURE__*/ new WeakSet(), _onPauseOnUncaughtExceptionsStateChanged = /*#__PURE__*/ new WeakSet();
var BreakpointsView = /*#__PURE__*/ function(_superClass) {
    "use strict";
    _inherits(BreakpointsView, _superClass);
    var _super = _create_super(BreakpointsView);
    function BreakpointsView() {
        _class_call_check(this, BreakpointsView);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _keyDownHandler);
        _class_private_method_init(_assert_this_initialized(_this), _setSelected);
        _class_private_method_init(_assert_this_initialized(_this), _handleArrowKey);
        _class_private_method_init(_assert_this_initialized(_this), _handleHomeOrEndKey);
        _class_private_method_init(_assert_this_initialized(_this), _renderEditBreakpointButton);
        _class_private_method_init(_assert_this_initialized(_this), _renderRemoveBreakpointButton);
        _class_private_method_init(_assert_this_initialized(_this), _onBreakpointGroupContextMenu);
        _class_private_method_init(_assert_this_initialized(_this), _renderBreakpointGroup);
        _class_private_method_init(_assert_this_initialized(_this), _renderGroupCheckbox);
        _class_private_method_init(_assert_this_initialized(_this), _renderFileIcon);
        _class_private_method_init(_assert_this_initialized(_this), _onBreakpointEntryContextMenu);
        _class_private_method_init(_assert_this_initialized(_this), _renderBreakpointEntry);
        _class_private_method_init(_assert_this_initialized(_this), _getCodeSnippetTooltip);
        _class_private_method_init(_assert_this_initialized(_this), _getBreakpointItemDescription);
        _class_private_method_init(_assert_this_initialized(_this), _onCheckboxToggled);
        _class_private_method_init(_assert_this_initialized(_this), _onPauseOnCaughtExceptionsStateChanged);
        _class_private_method_init(_assert_this_initialized(_this), _onPauseOnUncaughtExceptionsStateChanged);
        _class_private_field_init(_assert_this_initialized(_this), _controller, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _pauseOnUncaughtExceptions, {
            writable: true,
            value: false
        });
        _class_private_field_init(_assert_this_initialized(_this), _pauseOnCaughtExceptions, {
            writable: true,
            value: false
        });
        _class_private_field_init(_assert_this_initialized(_this), _independentPauseToggles, {
            writable: true,
            value: false
        });
        _class_private_field_init(_assert_this_initialized(_this), _breakpointsActive, {
            writable: true,
            value: true
        });
        _class_private_field_init(_assert_this_initialized(_this), _breakpointGroups, {
            writable: true,
            value: []
        });
        _class_private_field_init(_assert_this_initialized(_this), _urlToDifferentiatingPath, {
            writable: true,
            value: new Map()
        });
        _class_private_field_set(_assert_this_initialized(_this), _controller, BreakpointsSidebarController.instance());
        _this.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_15__.section('sources.js-breakpoints')));
        void _class_private_field_get(_this, _controller).update();
        return _this;
    }
    _create_class(BreakpointsView, [
        {
            key: "data",
            set: function set(data) {
                _class_private_field_set(this, _pauseOnUncaughtExceptions, data.pauseOnUncaughtExceptions);
                _class_private_field_set(this, _pauseOnCaughtExceptions, data.pauseOnCaughtExceptions);
                _class_private_field_set(this, _independentPauseToggles, data.independentPauseToggles);
                _class_private_field_set(this, _breakpointsActive, data.breakpointsActive);
                _class_private_field_set(this, _breakpointGroups, data.groups);
                var titleInfos = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = data.groups[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var group = _step.value;
                        titleInfos.push({
                            name: group.name,
                            url: group.url
                        });
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
                _class_private_field_set(this, _urlToDifferentiatingPath, (0,_BreakpointsViewUtils_js__WEBPACK_IMPORTED_MODULE_17__.getDifferentiatingPathMap)(titleInfos));
                void this.render();
            }
        },
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_10__.checkboxStyles,
                    _breakpointsView_css_js__WEBPACK_IMPORTED_MODULE_16__["default"]
                ];
            }
        },
        {
            key: "render",
            value: function render() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    coordinator.write('BreakpointsView render', function() {
                                        var clickHandler = function() {
                                            var _ref = _async_to_generator(function(event) {
                                                var currentTarget;
                                                return _ts_generator(this, function(_state) {
                                                    switch(_state.label){
                                                        case 0:
                                                            currentTarget = event.currentTarget;
                                                            return [
                                                                4,
                                                                _class_private_method_get(_this, _setSelected, setSelected).call(_this, currentTarget)
                                                            ];
                                                        case 1:
                                                            _state.sent();
                                                            event.consume();
                                                            return [
                                                                2
                                                            ];
                                                    }
                                                });
                                            });
                                            return function clickHandler(event) {
                                                return _ref.apply(this, arguments);
                                            };
                                        }();
                                        var pauseOnCaughtIsChecked = (_class_private_field_get(_this, _independentPauseToggles) || _class_private_field_get(_this, _pauseOnUncaughtExceptions)) && _class_private_field_get(_this, _pauseOnCaughtExceptions);
                                        var pauseOnCaughtExceptionIsDisabled = !_class_private_field_get(_this, _independentPauseToggles) && !_class_private_field_get(_this, _pauseOnUncaughtExceptions);
                                        // clang-format off
                                        var out = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_14__.html(_templateObject1(), clickHandler, _class_private_method_get(_this, _keyDownHandler, keyDownHandler), _class_private_field_get(_this, _pauseOnUncaughtExceptions), _class_private_field_get(_this, _pauseOnUncaughtExceptions), _class_private_method_get(_this, _onPauseOnUncaughtExceptionsStateChanged, onPauseOnUncaughtExceptionsStateChanged).bind(_this), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_15__.toggle('pause-uncaught').track({
                                            change: true
                                        }), i18nString(UIStrings.pauseOnUncaughtExceptions), clickHandler, _class_private_method_get(_this, _keyDownHandler, keyDownHandler), pauseOnCaughtIsChecked, pauseOnCaughtIsChecked, pauseOnCaughtExceptionIsDisabled, _class_private_method_get(_this, _onPauseOnCaughtExceptionsStateChanged, onPauseOnCaughtExceptionsStateChanged).bind(_this), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_15__.toggle('pause-on-caught-exception').track({
                                            change: true
                                        }), i18nString(UIStrings.pauseOnCaughtExceptions), _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_14__.Directives.repeat(_class_private_field_get(_this, _breakpointGroups), function(group) {
                                            return group.url;
                                        }, function(group, groupIndex) {
                                            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_14__.html(_templateObject(), _class_private_method_get(_this, _renderBreakpointGroup, renderBreakpointGroup).call(_this, group, groupIndex));
                                        }));
                                        // clang-format on
                                        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_14__.render(out, _class_private_field_get(_this, _shadow), {
                                            host: _this
                                        });
                                    })
                                ];
                            case 1:
                                _state.sent();
                                // If no element is tabbable, set the pause-on-exceptions to be tabbable. This can happen
                                // if the previously focused element was removed.
                                return [
                                    4,
                                    coordinator.write('BreakpointsView make pause-on-exceptions focusable', function() {
                                        if (_class_private_field_get(_this, _shadow).querySelector('[tabindex="0"]') === null) {
                                            var element = _class_private_field_get(_this, _shadow).querySelector('[data-first-pause]');
                                            element === null || element === void 0 ? void 0 : element.setAttribute('tabindex', '0');
                                        }
                                    })
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ], [
        {
            key: "instance",
            value: function instance() {
                var forceNew = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                    forceNew: false
                }).forceNew;
                if (!breakpointsViewInstance || forceNew) {
                    breakpointsViewInstance = _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_11__.LegacyWrapper.legacyWrapper(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Widget.Widget, new BreakpointsView());
                }
                return breakpointsViewInstance.getComponent();
            }
        }
    ]);
    return BreakpointsView;
}(_LegacyWrapper_LegacyWrapper_WrappableComponent = _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_11__.LegacyWrapper.WrappableComponent);
_define_property(BreakpointsView, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_14__.literal(_templateObject2()));
function keyDownHandler(event) {
    return _keyDownHandler1.apply(this, arguments);
}
function _keyDownHandler1() {
    _keyDownHandler1 = _async_to_generator(function(event) {
        var currentTarget, input;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!event.target || !_instanceof(event.target, HTMLElement)) {
                        return [
                            2
                        ];
                    }
                    if (event.key === 'Home' || event.key === 'End') {
                        event.consume(true);
                        return [
                            2,
                            _class_private_method_get(this, _handleHomeOrEndKey, handleHomeOrEndKey).call(this, event.key)
                        ];
                    }
                    if (_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.KeyboardUtilities.keyIsArrowKey(event.key)) {
                        event.consume(true);
                        return [
                            2,
                            _class_private_method_get(this, _handleArrowKey, handleArrowKey).call(this, event.key, event.target)
                        ];
                    }
                    if (!_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.KeyboardUtilities.isEnterOrSpaceKey(event)) return [
                        3,
                        2
                    ];
                    currentTarget = event.currentTarget;
                    return [
                        4,
                        _class_private_method_get(this, _setSelected, setSelected).call(this, currentTarget)
                    ];
                case 1:
                    _state.sent();
                    input = currentTarget.querySelector('input');
                    if (input) {
                        input.click();
                    }
                    event.consume();
                    _state.label = 2;
                case 2:
                    return [
                        2
                    ];
            }
        });
    });
    return _keyDownHandler1.apply(this, arguments);
}
function setSelected(element) {
    return _setSelected1.apply(this, arguments);
}
function _setSelected1() {
    _setSelected1 = _async_to_generator(function(element) {
        var _this;
        return _ts_generator(this, function(_state) {
            _this = this;
            if (!element) {
                return [
                    2
                ];
            }
            void coordinator.write('BreakpointsView focus on selected element', function() {
                var prevSelected = _class_private_field_get(_this, _shadow).querySelector('[tabindex="0"]');
                prevSelected === null || prevSelected === void 0 ? void 0 : prevSelected.setAttribute('tabindex', '-1');
                element.setAttribute('tabindex', '0');
                element.focus();
            });
            return [
                2
            ];
        });
    });
    return _setSelected1.apply(this, arguments);
}
function handleArrowKey(key, target) {
    return _handleArrowKey1.apply(this, arguments);
}
function _handleArrowKey1() {
    _handleArrowKey1 = _async_to_generator(function(key, target) {
        var setGroupExpandedState, nextNode;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    setGroupExpandedState = function(detailsElement, expanded) {
                        if (expanded) {
                            return coordinator.write('BreakpointsView expand', function() {
                                detailsElement.setAttribute('open', '');
                            });
                        }
                        return coordinator.write('BreakpointsView expand', function() {
                            detailsElement.removeAttribute('open');
                        });
                    };
                    return [
                        4,
                        (0,_BreakpointsViewUtils_js__WEBPACK_IMPORTED_MODULE_17__.findNextNodeForKeyboardNavigation)(target, key, setGroupExpandedState)
                    ];
                case 1:
                    nextNode = _state.sent();
                    return [
                        2,
                        _class_private_method_get(this, _setSelected, setSelected).call(this, nextNode)
                    ];
            }
        });
    });
    return _handleArrowKey1.apply(this, arguments);
}
function handleHomeOrEndKey(key) {
    return _handleHomeOrEndKey1.apply(this, arguments);
}
function _handleHomeOrEndKey1() {
    _handleHomeOrEndKey1 = _async_to_generator(function(key) {
        var pauseOnExceptionsNode, numGroups, lastPauseOnExceptionsNode, lastGroupIndex, lastGroup, lastBreakpointItem, lastGroupSummaryElement;
        return _ts_generator(this, function(_state) {
            if (key === 'Home') {
                pauseOnExceptionsNode = _class_private_field_get(this, _shadow).querySelector('[data-first-pause]');
                return [
                    2,
                    _class_private_method_get(this, _setSelected, setSelected).call(this, pauseOnExceptionsNode)
                ];
            }
            if (key === 'End') {
                numGroups = _class_private_field_get(this, _breakpointGroups).length;
                if (numGroups === 0) {
                    lastPauseOnExceptionsNode = _class_private_field_get(this, _shadow).querySelector('[data-last-pause]');
                    return [
                        2,
                        _class_private_method_get(this, _setSelected, setSelected).call(this, lastPauseOnExceptionsNode)
                    ];
                }
                lastGroupIndex = numGroups - 1;
                lastGroup = _class_private_field_get(this, _breakpointGroups)[lastGroupIndex];
                if (lastGroup.expanded) {
                    lastBreakpointItem = _class_private_field_get(this, _shadow).querySelector('[data-last-group] > [data-last-breakpoint]');
                    return [
                        2,
                        _class_private_method_get(this, _setSelected, setSelected).call(this, lastBreakpointItem)
                    ];
                }
                lastGroupSummaryElement = _class_private_field_get(this, _shadow).querySelector('[data-last-group] > summary');
                return [
                    2,
                    _class_private_method_get(this, _setSelected, setSelected).call(this, lastGroupSummaryElement)
                ];
            }
            return [
                2
            ];
        });
    });
    return _handleHomeOrEndKey1.apply(this, arguments);
}
function renderEditBreakpointButton(breakpointItem) {
    var _this = this;
    var clickHandler = function(event) {
        void _class_private_field_get(_this, _controller).breakpointEdited(breakpointItem, true);
        event.consume();
    };
    var title = breakpointItem.type === "LOGPOINT" /* SDK.DebuggerModel.BreakpointType.LOGPOINT */  ? i18nString(UIStrings.editLogpoint) : i18nString(UIStrings.editCondition);
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_14__.html(_templateObject3(), clickHandler, title, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_15__.action('edit-breakpoint').track({
        click: true
    }), _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_9__.Icon.Icon.litTagName, _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_9__.Icon.Icon.litTagName);
// clang-format on
}
function renderRemoveBreakpointButton(breakpointItems, tooltipText, action) {
    var _this = this;
    var clickHandler = function(event) {
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(action);
        void _class_private_field_get(_this, _controller).breakpointsRemoved(breakpointItems);
        event.consume();
    };
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_14__.html(_templateObject4(), clickHandler, tooltipText, tooltipText, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_15__.action('remove-breakpoint').track({
        click: true
    }), _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_9__.Icon.Icon.litTagName, _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_9__.Icon.Icon.litTagName);
// clang-format on
}
function onBreakpointGroupContextMenu(event, breakpointGroup) {
    var _this = this;
    var breakpointItems = breakpointGroup.breakpointItems;
    var menu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.ContextMenu.ContextMenu(event);
    menu.defaultSection().appendItem(i18nString(UIStrings.removeAllBreakpointsInFile), function() {
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.BreakpointsInFileRemovedFromContextMenu);
        void _class_private_field_get(_this, _controller).breakpointsRemoved(breakpointItems);
    }, {
        jslogContext: 'remove-file-breakpoints'
    });
    var otherGroups = _class_private_field_get(this, _breakpointGroups).filter(function(group) {
        return group !== breakpointGroup;
    });
    menu.defaultSection().appendItem(i18nString(UIStrings.removeOtherBreakpoints), function() {
        var breakpointItems = otherGroups.map(function(param) {
            var breakpointItems = param.breakpointItems;
            return breakpointItems;
        }).flat();
        void _class_private_field_get(_this, _controller).breakpointsRemoved(breakpointItems);
    }, {
        disabled: otherGroups.length === 0,
        jslogContext: 'remove-other-breakpoints'
    });
    menu.defaultSection().appendItem(i18nString(UIStrings.removeAllBreakpoints), function() {
        var breakpointItems = _class_private_field_get(_this, _breakpointGroups).map(function(param) {
            var breakpointItems = param.breakpointItems;
            return breakpointItems;
        }).flat();
        void _class_private_field_get(_this, _controller).breakpointsRemoved(breakpointItems);
    }, {
        jslogContext: 'remove-all-breakpoints'
    });
    var notEnabledItems = breakpointItems.filter(function(breakpointItem) {
        return breakpointItem.status !== "ENABLED" /* BreakpointStatus.ENABLED */ ;
    });
    menu.debugSection().appendItem(i18nString(UIStrings.enableAllBreakpointsInFile), function() {
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.BreakpointsInFileEnabledDisabledFromContextMenu);
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = notEnabledItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var breakpointItem = _step.value;
                _class_private_field_get(_this, _controller).breakpointStateChanged(breakpointItem, true);
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
    }, {
        disabled: notEnabledItems.length === 0,
        jslogContext: 'enable-file-breakpoints'
    });
    var notDisabledItems = breakpointItems.filter(function(breakpointItem) {
        return breakpointItem.status !== "DISABLED" /* BreakpointStatus.DISABLED */ ;
    });
    menu.debugSection().appendItem(i18nString(UIStrings.disableAllBreakpointsInFile), function() {
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.BreakpointsInFileEnabledDisabledFromContextMenu);
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = notDisabledItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var breakpointItem = _step.value;
                _class_private_field_get(_this, _controller).breakpointStateChanged(breakpointItem, false);
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
    }, {
        disabled: notDisabledItems.length === 0,
        jslogContext: 'disable-file-breakpoints'
    });
    void menu.show();
}
function renderBreakpointGroup(group, groupIndex) {
    var _this = this;
    var contextmenuHandler = function(event) {
        _class_private_method_get(_this, _onBreakpointGroupContextMenu, onBreakpointGroupContextMenu).call(_this, event, group);
        event.consume();
    };
    var toggleHandler = function(event) {
        var htmlDetails = event.target;
        group.expanded = htmlDetails.open;
        void _class_private_field_get(_this, _controller).expandedStateChanged(group.url, group.expanded);
    };
    var _this1 = this;
    var clickHandler = function() {
        var _ref = _async_to_generator(function(event) {
            var selected;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        selected = event.currentTarget;
                        return [
                            4,
                            _class_private_method_get(_this1, _setSelected, setSelected).call(_this1, selected)
                        ];
                    case 1:
                        _state.sent();
                        // Record the metric for expanding/collapsing in the click handler,
                        // as we only then get the number of expand/collapse actions that were
                        // initiated by the user.
                        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.BreakpointGroupExpandedStateChanged);
                        event.consume();
                        return [
                            2
                        ];
                }
            });
        });
        return function clickHandler(event) {
            return _ref.apply(this, arguments);
        };
    }();
    var classMap = {
        active: _class_private_field_get(this, _breakpointsActive)
    };
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_14__.html(_templateObject5(), _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_14__.Directives.classMap(classMap), groupIndex === 0, groupIndex === _class_private_field_get(this, _breakpointGroups).length - 1, group.name, group.url, _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_14__.Directives.live(group.expanded), toggleHandler, contextmenuHandler, _class_private_method_get(this, _keyDownHandler, keyDownHandler), clickHandler, _class_private_method_get(this, _renderFileIcon, renderFileIcon).call(this), _class_private_method_get(this, _renderGroupCheckbox, renderGroupCheckbox).call(this, group), group.url, group.name, _class_private_field_get(this, _urlToDifferentiatingPath).get(group.url), _class_private_method_get(this, _renderRemoveBreakpointButton, renderRemoveBreakpointButton).call(this, group.breakpointItems, i18nString(UIStrings.removeAllBreakpointsInFile), _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.BreakpointsInFileRemovedFromRemoveButton), _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_14__.Directives.repeat(group.breakpointItems, function(item) {
        return item.id;
    }, function(item, breakpointItemIndex) {
        return _class_private_method_get(_this, _renderBreakpointEntry, renderBreakpointEntry).call(_this, item, group.editable, groupIndex, breakpointItemIndex);
    }));
// clang-format on
}
function renderGroupCheckbox(group) {
    var _this = this;
    var groupCheckboxToggled = function(e) {
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.BreakpointsInFileCheckboxToggled);
        var element = e.target;
        var updatedStatus = element.checked ? "ENABLED" /* BreakpointStatus.ENABLED */  : "DISABLED" /* BreakpointStatus.DISABLED */ ;
        var itemsToUpdate = group.breakpointItems.filter(function(item) {
            return item.status !== updatedStatus;
        });
        itemsToUpdate.forEach(function(item) {
            _class_private_field_get(_this, _controller).breakpointStateChanged(item, element.checked);
        });
        e.consume();
    };
    var checked = group.breakpointItems.some(function(item) {
        return item.status === "ENABLED" /* BreakpointStatus.ENABLED */ ;
    });
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_14__.html(_templateObject6(), checked, groupCheckboxToggled, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_15__.toggle('breakpoint-group').track({
        change: true
    }));
}
function renderFileIcon() {
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_14__.html(_templateObject7(), _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_9__.Icon.Icon.litTagName, _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_9__.Icon.Icon.litTagName);
}
function onBreakpointEntryContextMenu(event, breakpointItem, editable) {
    var _this = this;
    var items = _class_private_field_get(this, _breakpointGroups).map(function(param) {
        var breakpointItems = param.breakpointItems;
        return breakpointItems;
    }).flat();
    var otherItems = items.filter(function(item) {
        return item !== breakpointItem;
    });
    var menu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.ContextMenu.ContextMenu(event);
    var editBreakpointText = breakpointItem.type === "LOGPOINT" /* SDK.DebuggerModel.BreakpointType.LOGPOINT */  ? i18nString(UIStrings.editLogpoint) : i18nString(UIStrings.editCondition);
    menu.revealSection().appendItem(i18nString(UIStrings.revealLocation), function() {
        void _class_private_field_get(_this, _controller).jumpToSource(breakpointItem);
    }, {
        jslogContext: 'jump-to-breakpoint'
    });
    menu.editSection().appendItem(editBreakpointText, function() {
        void _class_private_field_get(_this, _controller).breakpointEdited(breakpointItem, false);
    }, {
        disabled: !editable,
        jslogContext: 'edit-breakpoint'
    });
    menu.defaultSection().appendItem(i18nString(UIStrings.enableAllBreakpoints), items.forEach.bind(items, function(item) {
        return _class_private_field_get(_this, _controller).breakpointStateChanged(item, true);
    }), {
        disabled: items.every(function(item) {
            return item.status === "ENABLED" /* BreakpointStatus.ENABLED */ ;
        }),
        jslogContext: 'enable-all-breakpoints'
    });
    menu.defaultSection().appendItem(i18nString(UIStrings.disableAllBreakpoints), items.forEach.bind(items, function(item) {
        return _class_private_field_get(_this, _controller).breakpointStateChanged(item, false);
    }), {
        disabled: items.every(function(item) {
            return item.status === "DISABLED" /* BreakpointStatus.DISABLED */ ;
        }),
        jslogContext: 'disable-all-breakpoints'
    });
    menu.footerSection().appendItem(i18nString(UIStrings.removeBreakpoint), function() {
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.BreakpointRemovedFromContextMenu);
        void _class_private_field_get(_this, _controller).breakpointsRemoved([
            breakpointItem
        ]);
    }, {
        jslogContext: 'remove-breakpoint'
    });
    menu.footerSection().appendItem(i18nString(UIStrings.removeOtherBreakpoints), function() {
        void _class_private_field_get(_this, _controller).breakpointsRemoved(otherItems);
    }, {
        disabled: otherItems.length === 0,
        jslogContext: 'remove-other-breakpoints'
    });
    menu.footerSection().appendItem(i18nString(UIStrings.removeAllBreakpoints), function() {
        var breakpointItems = _class_private_field_get(_this, _breakpointGroups).map(function(param) {
            var breakpointItems = param.breakpointItems;
            return breakpointItems;
        }).flat();
        void _class_private_field_get(_this, _controller).breakpointsRemoved(breakpointItems);
    }, {
        jslogContext: 'remove-all-breakpoints'
    });
    void menu.show();
}
function renderBreakpointEntry(breakpointItem, editable, groupIndex, breakpointItemIndex) {
    var _this = this;
    var codeSnippetClickHandler = function(event) {
        void _class_private_field_get(_this, _controller).jumpToSource(breakpointItem);
        event.consume();
    };
    var _this1 = this;
    var breakpointItemClickHandler = function() {
        var _ref = _async_to_generator(function(event) {
            var target;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        target = event.currentTarget;
                        return [
                            4,
                            _class_private_method_get(_this1, _setSelected, setSelected).call(_this1, target)
                        ];
                    case 1:
                        _state.sent();
                        event.consume();
                        return [
                            2
                        ];
                }
            });
        });
        return function breakpointItemClickHandler(event) {
            return _ref.apply(this, arguments);
        };
    }();
    var contextmenuHandler = function(event) {
        _class_private_method_get(_this, _onBreakpointEntryContextMenu, onBreakpointEntryContextMenu).call(_this, event, breakpointItem, editable);
        event.consume();
    };
    var classMap = {
        'breakpoint-item': true,
        'hit': breakpointItem.isHit,
        'conditional-breakpoint': breakpointItem.type === "CONDITIONAL_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.CONDITIONAL_BREAKPOINT */ ,
        'logpoint': breakpointItem.type === "LOGPOINT" /* SDK.DebuggerModel.BreakpointType.LOGPOINT */ 
    };
    var breakpointItemDescription = _class_private_method_get(this, _getBreakpointItemDescription, getBreakpointItemDescription).call(this, breakpointItem);
    var codeSnippet = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.trimEndWithMaxLength(breakpointItem.codeSnippet, MAX_SNIPPET_LENGTH);
    var codeSnippetTooltip = _class_private_method_get(this, _getCodeSnippetTooltip, getCodeSnippetTooltip).call(this, breakpointItem.type, breakpointItem.hoverText);
    var itemsInGroup = _class_private_field_get(this, _breakpointGroups)[groupIndex].breakpointItems;
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_14__.html(_templateObject8(), _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_14__.Directives.classMap(classMap), breakpointItemIndex === 0, breakpointItemIndex === itemsInGroup.length - 1, breakpointItemDescription, contextmenuHandler, breakpointItemClickHandler, _class_private_method_get(this, _keyDownHandler, keyDownHandler), breakpointItem.location, breakpointItem.status === "INDETERMINATE" /* BreakpointStatus.INDETERMINATE */ , breakpointItem.status === "ENABLED" /* BreakpointStatus.ENABLED */ , function(e) {
        return _class_private_method_get(_this, _onCheckboxToggled, onCheckboxToggled).call(_this, e, breakpointItem);
    }, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_15__.toggle('breakpoint').track({
        change: true
    }), codeSnippetClickHandler, codeSnippetTooltip, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_15__.action('sources.jump-to-breakpoint').track({
        click: true
    }), codeSnippet, editable ? _class_private_method_get(this, _renderEditBreakpointButton, renderEditBreakpointButton).call(this, breakpointItem) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_14__.nothing, _class_private_method_get(this, _renderRemoveBreakpointButton, renderRemoveBreakpointButton).call(this, [
        breakpointItem
    ], i18nString(UIStrings.removeBreakpoint), _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.BreakpointRemovedFromRemoveButton), breakpointItem.location);
// clang-format on
}
function getCodeSnippetTooltip(type, hoverText) {
    switch(type){
        case "REGULAR_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.REGULAR_BREAKPOINT */ :
            return undefined;
        case "CONDITIONAL_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.CONDITIONAL_BREAKPOINT */ :
            (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.assertNotNullOrUndefined)(hoverText);
            return i18nString(UIStrings.conditionCode, {
                PH1: hoverText
            });
        case "LOGPOINT" /* SDK.DebuggerModel.BreakpointType.LOGPOINT */ :
            (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.assertNotNullOrUndefined)(hoverText);
            return i18nString(UIStrings.logpointCode, {
                PH1: hoverText
            });
    }
}
function getBreakpointItemDescription(breakpointItem) {
    var checkboxDescription;
    switch(breakpointItem.status){
        case "ENABLED" /* BreakpointStatus.ENABLED */ :
            checkboxDescription = i18nString(UIStrings.checked);
            break;
        case "DISABLED" /* BreakpointStatus.DISABLED */ :
            checkboxDescription = i18nString(UIStrings.unchecked);
            break;
        case "INDETERMINATE" /* BreakpointStatus.INDETERMINATE */ :
            checkboxDescription = i18nString(UIStrings.indeterminate);
            break;
    }
    if (!breakpointItem.isHit) {
        return checkboxDescription;
    }
    return i18nString(UIStrings.breakpointHit, {
        PH1: checkboxDescription
    });
}
function onCheckboxToggled(e, item) {
    var element = e.target;
    _class_private_field_get(this, _controller).breakpointStateChanged(item, element.checked);
}
function onPauseOnCaughtExceptionsStateChanged(e) {
    var checked = e.target.checked;
    _class_private_field_get(this, _controller).setPauseOnCaughtExceptions(checked);
}
function onPauseOnUncaughtExceptionsStateChanged(e) {
    var checked = e.target.checked;
    if (!_class_private_field_get(this, _independentPauseToggles)) {
        var pauseOnCaughtCheckbox = _class_private_field_get(this, _shadow).querySelector('[data-pause-on-caught-checkbox]');
        (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.assertNotNullOrUndefined)(pauseOnCaughtCheckbox);
        if (!checked && pauseOnCaughtCheckbox.checked) {
            // If we can only pause on caught exceptions if we pause on uncaught exceptions, make sure to
            // uncheck the pause on caught exception checkbox.
            pauseOnCaughtCheckbox.click();
        }
        void coordinator.write('BreakpointsView update pause-on-uncaught-exception', function() {
            // Disable/enable the pause on caught exception checkbox depending on whether
            // or not we are pausing on uncaught exceptions.
            if (checked) {
                pauseOnCaughtCheckbox.disabled = false;
            } else {
                pauseOnCaughtCheckbox.disabled = true;
            }
        });
    }
    _class_private_field_get(this, _controller).setPauseOnUncaughtExceptions(checked);
}
customElements.define('devtools-breakpoint-view', BreakpointsView); //# sourceMappingURL=BreakpointsView.js.map


}),
"./panels/sources/components/breakpointsView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright 2022 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  flex: auto;\n  display: flex;\n  flex-direction: column;\n}\n\n.code-snippet {\n  width: 100%;\n  font-family: var(--source-code-font-family);\n  font-size: var(--source-code-font-size);\n  color: var(--sys-color-token-subtle);\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  flex-shrink: 100;\n  cursor: pointer;\n}\n\n.code-snippet:hover {\n  color: var(--sys-color-on-surface);\n  text-decoration: underline;\n}\n\ninput {\n  height: 12px;\n  width: 12px;\n  flex-shrink: 0;\n  margin: 3px 0;\n}\n\ndetails {\n  border-top: 1px solid var(--sys-color-divider);\n  padding: 2px 0;\n}\n\ndetails:not(.active) {\n  background-color: var(--sys-color-state-disabled-container);\n  opacity: 30%;\n}\n\ndetails > summary {\n  min-height: 20px;\n  list-style: none;\n  display: flex;\n  padding: 0 8px 0 6px;\n  align-items: center;\n}\n\ndetails > summary:hover {\n  background-color: var(--sys-color-state-hover-on-subtle);\n}\n\ndetails > summary::before {\n  display: block;\n  user-select: none;\n  mask-image: var(--image-file-triangle-right);\n  background-color: var(--icon-default);\n  content: "";\n  height: 14px;\n  min-width: 14px;\n  max-width: 14px;\n  margin-left: -4px;\n  overflow: hidden;\n  transition: transform 200ms;\n}\n\ndetails[open] > summary::before {\n  transform: rotate(90deg);\n}\n\n.group-header {\n  display: inline-flex;\n  align-items: center;\n  width: 100%;\n  padding-right: 8px;\n  overflow: hidden;\n}\n\n.group-icon-or-disable {\n  justify-content: center;\n  display: flex;\n  width: 16px;\n  margin-left: 2px;\n}\n\n.group-header-title {\n  margin-left: 4px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.group-header-differentiator {\n  font-weight: normal;\n  color: var(--sys-color-state-disabled);\n  margin-left: 8px;\n}\n\n.group-hover-actions {\n  display: flex;\n  align-items: center;\n  justify-content: right;\n  font-size: 10px;\n  font-weight: 500;\n}\n\n.breakpoint-item-location-or-actions {\n  min-width: 20px;\n  flex: 0 0 auto;\n  display: flex;\n  padding-left: 8px;\n  justify-content: right;\n}\n\nbutton {\n  cursor: pointer;\n  width: 13px;\n  height: 13px;\n  border: none;\n  background-color: transparent;\n  display: none;\n  align-items: center;\n  justify-content: center;\n}\n\nbutton + span {\n  padding-left: 6px;\n}\n\nbutton + button {\n  padding-left: 11px;\n}\n\nsummary:hover button {\n  display: flex;\n}\n\ndevtools-icon {\n  width: 16px;\n  height: 16px;\n\n  button:hover & {\n    color: var(--icon-default-hover);\n  }\n}\n\n.type-indicator {\n  --override-color-conditional-breakpoint: var(--ref-palette-orange70);\n  --override-color-logpoint: var(--ref-palette-pink60);\n\n  border-right: 4px solid;\n  border-radius: 0 2px 2px 0;\n  border-color: transparent;\n  height: 16px;\n}\n\n.breakpoint-item {\n  display: flex;\n  align-items: center;\n  line-height: 13px;\n  height: 20px;\n  padding-right: 8px;\n}\n\n.breakpoint-item.hit {\n  background-color: var(--sys-color-yellow-container);\n  color: var(--sys-color-on-yellow-container);\n}\n\n.breakpoint-item.hit:focus {\n  background-color: var(--sys-color-tonal-container);\n}\n\n.theme-with-dark-background .type-indicator,\n:host-context(.theme-with-dark-background) .type-indicator {\n  --override-color-conditional-breakpoint: var(--ref-palette-yellow60);\n  --override-color-logpoint: var(--ref-palette-pink70);\n}\n\n.breakpoint-item.logpoint > label > .type-indicator {\n  border-color: var(--override-color-logpoint);\n}\n\n.breakpoint-item.conditional-breakpoint > label > .type-indicator {\n  border-color: var(--override-color-conditional-breakpoint);\n}\n\n.checkbox-label {\n  display: flex;\n  align-items: center;\n}\n\n.checkbox-label > input {\n  margin-left: 16px;\n  margin-right: 6px;\n}\n\ndevtools-icon[name="file-script"] {\n  color: var(--icon-file-script);\n  width: 18px;\n  height: 18px;\n\n  summary:hover & {\n    display: none;\n  }\n}\n\n.group-checkbox {\n  margin: 0;\n  display: none;\n}\n\nsummary:hover .group-checkbox {\n  display: flex;\n}\n\n.location {\n  line-height: 14px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.breakpoint-item:hover button {\n  display: flex;\n}\n\n.pause-on-uncaught-exceptions {\n  margin-top: 3px;\n}\n\n.pause-on-caught-exceptions {\n  margin-bottom: 3px;\n}\n\n/* TODO(crbug.com/1382762): Remove special casing with dependent toggles as soon as Node LTS caught up on independent pause of exception toggles. */\ninput:disabled + span {\n  color: var(--sys-color-state-disabled);\n}\n\n.pause-on-caught-exceptions > .checkbox-label > input,\n.pause-on-uncaught-exceptions > .checkbox-label > input {\n  margin-left: 6px;\n}\n\n.pause-on-caught-exceptions > .checkbox-label > span,\n.pause-on-uncaught-exceptions > .checkbox-label > span {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.pause-on-uncaught-exceptions,\n.pause-on-caught-exceptions {\n  line-height: 13px;\n  height: 18px;\n  padding-right: 8px;\n\n  & > label {\n    width: fit-content;\n  }\n}\n\ndetails > summary:focus,\n.breakpoint-item:focus,\n.pause-on-uncaught-exceptions:focus,\n.pause-on-caught-exceptions:focus {\n  background-color: var(--sys-color-tonal-container);\n  outline-width: 0;\n}\n\n/*# sourceURL=breakpointsView.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);