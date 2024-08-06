"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_components_color_picker_FormatPickerContextMenu_js"], {
"./ui/legacy/components/color_picker/FormatPickerContextMenu.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  FormatPickerContextMenu: function() { return FormatPickerContextMenu; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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




var UIStrings = {
    /**
     *@description Tooltip text describing that a color was clipped after conversion to match the target gamut
     *@example {rgb(255 255 255)} PH1
     */ colorClippedTooltipText: 'This color was clipped to match the format\'s gamut. The actual result was {PH1}'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('ui/legacy/components/color_picker/FormatPickerContextMenu.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var _color = /*#__PURE__*/ new WeakMap();
var FormatPickerContextMenu = /*#__PURE__*/ function() {
    "use strict";
    function FormatPickerContextMenu(color) {
        _class_call_check(this, FormatPickerContextMenu);
        _class_private_field_init(this, _color, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _color, color);
    }
    _create_class(FormatPickerContextMenu, [
        {
            key: "show",
            value: function show(e, onSelect) {
                var _this = this;
                return _async_to_generator(function() {
                    var resolveShowPromise, showPromise, legacyFormats, modernFormats, menu, legacySection, wideSection, colorFunctionSection, nickname, _class_private_field_get_alpha, shortHex, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, format, newColor, section;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                resolveShowPromise = undefined;
                                showPromise = new Promise(function(resolve) {
                                    resolveShowPromise = resolve;
                                });
                                legacyFormats = [
                                    "hex" /* Common.Color.Format.HEX */ ,
                                    "hexa" /* Common.Color.Format.HEXA */ ,
                                    "rgb" /* Common.Color.Format.RGB */ ,
                                    "rgba" /* Common.Color.Format.RGBA */ ,
                                    "hsl" /* Common.Color.Format.HSL */ ,
                                    "hwb" /* Common.Color.Format.HWB */ 
                                ];
                                modernFormats = [
                                    "lch" /* Common.Color.Format.LCH */ ,
                                    "oklch" /* Common.Color.Format.OKLCH */ ,
                                    "lab" /* Common.Color.Format.LAB */ ,
                                    "oklab" /* Common.Color.Format.OKLAB */ ,
                                    "srgb" /* Common.Color.Format.SRGB */ ,
                                    "srgb-linear" /* Common.Color.Format.SRGB_LINEAR */ ,
                                    "display-p3" /* Common.Color.Format.DISPLAY_P3 */ ,
                                    "a98-rgb" /* Common.Color.Format.A98_RGB */ ,
                                    "prophoto-rgb" /* Common.Color.Format.PROPHOTO_RGB */ ,
                                    "rec2020" /* Common.Color.Format.REC_2020 */ ,
                                    "xyz" /* Common.Color.Format.XYZ */ ,
                                    "xyz-d50" /* Common.Color.Format.XYZ_D50 */ ,
                                    "xyz-d65" /* Common.Color.Format.XYZ_D65 */ 
                                ];
                                menu = new _legacy_js__WEBPACK_IMPORTED_MODULE_3__.ContextMenu.ContextMenu(e, {
                                    onSoftMenuClosed: function() {
                                        return resolveShowPromise === null || resolveShowPromise === void 0 ? void 0 : resolveShowPromise();
                                    }
                                });
                                legacySection = menu.section('legacy');
                                wideSection = menu.section('wide');
                                colorFunctionSection = menu.section('color-function').appendSubMenuItem('color()', false, 'color').section();
                                if (!_instanceof(_class_private_field_get(_this, _color), _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Nickname)) {
                                    nickname = _class_private_field_get(_this, _color).asLegacyColor().nickname();
                                    if (nickname) {
                                        _this.addColorToSection(nickname, legacySection, onSelect);
                                    }
                                }
                                if (!_instanceof(_class_private_field_get(_this, _color), _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.ShortHex)) {
                                    ;
                                    shortHex = _class_private_field_get(_this, _color).as(((_class_private_field_get_alpha = _class_private_field_get(_this, _color).alpha) !== null && _class_private_field_get_alpha !== void 0 ? _class_private_field_get_alpha : 1) === 1 ? "hex" /* Common.Color.Format.HEX */  : "hexa" /* Common.Color.Format.HEXA */ ).shortHex();
                                    if (shortHex) {
                                        _this.addColorToSection(shortHex, legacySection, onSelect);
                                    }
                                }
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = _to_consumable_array(legacyFormats).concat(_to_consumable_array(modernFormats))[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        format = _step.value;
                                        if (format === _class_private_field_get(_this, _color).format()) {
                                            continue;
                                        }
                                        newColor = _class_private_field_get(_this, _color).as(format);
                                        section = legacyFormats.includes(format) ? legacySection : _instanceof(newColor, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.ColorFunction) ? colorFunctionSection : wideSection;
                                        _this.addColorToSection(newColor, section, onSelect);
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
                                return [
                                    4,
                                    menu.show()
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    4,
                                    showPromise
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
        },
        {
            key: "addColorToSection",
            value: function addColorToSection(newColor, section, onSelect) {
                if (_instanceof(newColor, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Legacy)) {
                    var _class_private_field_get_alpha;
                    var originalHasAlpha = ((_class_private_field_get_alpha = _class_private_field_get(this, _color).alpha) !== null && _class_private_field_get_alpha !== void 0 ? _class_private_field_get_alpha : 1) !== 1;
                    var isAlphaFormat = newColor.alpha !== null;
                    // When the original color has alpha, only print alpha legacy formats. Otherwise, only print non-alpha legacy
                    // formats.
                    if (isAlphaFormat !== originalHasAlpha) {
                        return;
                    }
                }
                var label = newColor.asString();
                if (!label) {
                    return;
                }
                var icon = undefined;
                if (newColor.isGamutClipped()) {
                    icon = new _components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon();
                    icon.data = {
                        iconName: 'warning',
                        color: 'var(--icon-default)',
                        width: '16px',
                        height: '16px'
                    };
                    icon.style.marginLeft = '1px';
                    icon.style.marginTop = '-1px';
                    icon.style.minWidth = '16px';
                    icon.style.minHeight = '16px';
                }
                var _newColor_getAsRawString;
                var tooltip = icon ? i18nString(UIStrings.colorClippedTooltipText, {
                    PH1: (_newColor_getAsRawString = newColor.getAsRawString()) !== null && _newColor_getAsRawString !== void 0 ? _newColor_getAsRawString : 'none'
                }) : undefined;
                var handler = function() {
                    return onSelect(newColor);
                };
                section.appendItem(label, handler, {
                    additionalElement: icon,
                    tooltip: tooltip,
                    jslogContext: newColor.isGamutClipped() ? 'color' : 'clipped-color'
                });
            }
        }
    ]);
    return FormatPickerContextMenu;
} //# sourceMappingURL=FormatPickerContextMenu.js.map
();


}),

}]);