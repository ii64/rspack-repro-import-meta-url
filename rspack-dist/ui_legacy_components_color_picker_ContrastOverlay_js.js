"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_components_color_picker_ContrastOverlay_js"], {
"./ui/legacy/components/color_picker/ContrastOverlay.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ContrastOverlay: function() { return ContrastOverlay; },
  ContrastRatioLineBuilder: function() { return ContrastRatioLineBuilder; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/root/root.js */ "./core/root/root.js");
/* harmony import */var _legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
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
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
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



var ContrastOverlay = /*#__PURE__*/ function() {
    "use strict";
    function ContrastOverlay(contrastInfo, colorElement) {
        _class_call_check(this, ContrastOverlay);
        _define_property(this, "contrastInfo", void 0);
        _define_property(this, "visible", void 0);
        _define_property(this, "contrastRatioSVG", void 0);
        _define_property(this, "contrastRatioLines", void 0);
        _define_property(this, "width", void 0);
        _define_property(this, "height", void 0);
        _define_property(this, "contrastRatioLineBuilder", void 0);
        _define_property(this, "contrastRatioLinesThrottler", void 0);
        _define_property(this, "drawContrastRatioLinesBound", void 0);
        this.contrastInfo = contrastInfo;
        this.visible = false;
        this.contrastRatioSVG = _legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createSVGChild(colorElement, 'svg', 'spectrum-contrast-container fill');
        this.contrastRatioLines = new Map();
        if (_core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.isEnabled('apca')) {
            this.contrastRatioLines.set('APCA', _legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createSVGChild(this.contrastRatioSVG, 'path', 'spectrum-contrast-line'));
        } else {
            this.contrastRatioLines.set('aa', _legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createSVGChild(this.contrastRatioSVG, 'path', 'spectrum-contrast-line'));
            this.contrastRatioLines.set('aaa', _legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createSVGChild(this.contrastRatioSVG, 'path', 'spectrum-contrast-line'));
        }
        this.width = 0;
        this.height = 0;
        this.contrastRatioLineBuilder = new ContrastRatioLineBuilder(this.contrastInfo);
        this.contrastRatioLinesThrottler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(0);
        this.drawContrastRatioLinesBound = this.drawContrastRatioLines.bind(this);
        this.contrastInfo.addEventListener("ContrastInfoUpdated" /* Events.ContrastInfoUpdated */ , this.update.bind(this));
    }
    _create_class(ContrastOverlay, [
        {
            key: "update",
            value: function update() {
                if (!this.visible || this.contrastInfo.isNull()) {
                    return;
                }
                if (_core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.isEnabled('apca') && this.contrastInfo.contrastRatioAPCA() === null) {
                    return;
                }
                if (!this.contrastInfo.contrastRatio()) {
                    return;
                }
                void this.contrastRatioLinesThrottler.schedule(this.drawContrastRatioLinesBound);
            }
        },
        {
            key: "setDimensions",
            value: function setDimensions(width, height) {
                this.width = width;
                this.height = height;
                this.update();
            }
        },
        {
            key: "setVisible",
            value: function setVisible(visible) {
                this.visible = visible;
                this.contrastRatioSVG.classList.toggle('hidden', !visible);
                this.update();
            }
        },
        {
            key: "drawContrastRatioLines",
            value: function drawContrastRatioLines() {
                var _this = this;
                return _async_to_generator(function() {
                    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _step_value, level, element, path;
                    return _ts_generator(this, function(_state) {
                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(_iterator = _this.contrastRatioLines[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                _step_value = _sliced_to_array(_step.value, 2), level = _step_value[0], element = _step_value[1];
                                path = _this.contrastRatioLineBuilder.drawContrastRatioLine(_this.width, _this.height, level);
                                if (path) {
                                    element.setAttribute('d', path);
                                } else {
                                    element.removeAttribute('d');
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
                        return [
                            2
                        ];
                    });
                })();
            }
        }
    ]);
    return ContrastOverlay;
}();
var ContrastRatioLineBuilder = /*#__PURE__*/ function() {
    "use strict";
    function ContrastRatioLineBuilder(contrastInfo) {
        _class_call_check(this, ContrastRatioLineBuilder);
        _define_property(this, "contrastInfo", void 0);
        this.contrastInfo = contrastInfo;
    }
    _create_class(ContrastRatioLineBuilder, [
        {
            key: "drawContrastRatioLine",
            value: function drawContrastRatioLine(width, height, level) {
                var isAPCA = _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.isEnabled('apca');
                var requiredContrast = isAPCA ? this.contrastInfo.contrastRatioAPCAThreshold() : this.contrastInfo.contrastRatioThreshold(level);
                if (!width || !height || requiredContrast === null) {
                    return null;
                }
                var dS = 0.02;
                var H = 0;
                var S = 1;
                var V = 2;
                var A = 3;
                var color = this.contrastInfo.color();
                var bgColor = this.contrastInfo.bgColor();
                if (!color || !bgColor) {
                    return null;
                }
                var fgRGBA = color.rgba();
                var fgHSVA = color.as("hsl" /* Common.Color.Format.HSL */ ).hsva();
                var bgRGBA = bgColor.rgba();
                var bgLuminance = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.luminance(bgRGBA);
                var blendedRGBA = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.blendColors(fgRGBA, bgRGBA);
                var fgLuminance = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.luminance(blendedRGBA);
                var fgIsLighter = fgLuminance > bgLuminance;
                var desiredLuminance = isAPCA ? _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.desiredLuminanceAPCA(bgLuminance, requiredContrast, fgIsLighter) : _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.desiredLuminance(bgLuminance, requiredContrast, fgIsLighter);
                if (isAPCA && Math.abs(Math.round(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.contrastRatioByLuminanceAPCA(desiredLuminance, bgLuminance))) < requiredContrast) {
                    return null;
                }
                var lastV = fgHSVA[V];
                var currentSlope = 0;
                var candidateHSVA = [
                    fgHSVA[H],
                    0,
                    0,
                    fgHSVA[A]
                ];
                var pathBuilder = [];
                var candidateRGBA = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.hsva2rgba(candidateHSVA);
                blendedRGBA = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.blendColors(candidateRGBA, bgRGBA);
                var candidateLuminance = function(candidateHSVA) {
                    return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.luminance(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.blendColors(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Legacy.fromHSVA(candidateHSVA).rgba(), bgRGBA));
                };
                if (_core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.isEnabled('apca')) {
                    candidateLuminance = function(candidateHSVA) {
                        return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.luminanceAPCA(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.blendColors(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Legacy.fromHSVA(candidateHSVA).rgba(), bgRGBA));
                    };
                }
                // Plot V for values of S such that the computed luminance approximates
                // `desiredLuminance`, until no suitable value for V can be found, or the
                // current value of S goes of out bounds.
                var s;
                for(s = 0; s < 1 + dS; s += dS){
                    s = Math.min(1, s);
                    candidateHSVA[S] = s;
                    // Extrapolate the approximate next value for `v` using the approximate
                    // gradient of the curve.
                    candidateHSVA[V] = lastV + currentSlope * dS;
                    var v = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.approachColorValue(candidateHSVA, bgRGBA, V, desiredLuminance, candidateLuminance);
                    if (v === null) {
                        break;
                    }
                    // Approximate the current gradient of the curve.
                    currentSlope = s === 0 ? 0 : (v - lastV) / dS;
                    lastV = v;
                    pathBuilder.push(pathBuilder.length ? 'L' : 'M');
                    pathBuilder.push((s * width).toFixed(2));
                    pathBuilder.push(((1 - v) * height).toFixed(2));
                }
                // If no suitable V value for an in-bounds S value was found, find the value
                // of S such that V === 1 and add that to the path.
                if (s < 1 + dS) {
                    s -= dS;
                    candidateHSVA[V] = 1;
                    s = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.approachColorValue(candidateHSVA, bgRGBA, S, desiredLuminance, candidateLuminance);
                    if (s !== null) {
                        pathBuilder = pathBuilder.concat([
                            'L',
                            (s * width).toFixed(2),
                            '-0.1'
                        ]);
                    }
                }
                if (pathBuilder.length === 0) {
                    return null;
                }
                return pathBuilder.join(' ');
            }
        }
    ]);
    return ContrastRatioLineBuilder;
} //# sourceMappingURL=ContrastOverlay.js.map
();


}),

}]);