"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_css_overview_CSSOverviewModel_js"], {
"./panels/css_overview/CSSOverviewModel.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CSSOverviewModel: function() { return CSSOverviewModel; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_legacy_components_color_picker_color_picker_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/components/color_picker/color_picker.js */ "./ui/legacy/components/color_picker/color_picker.js");
/* harmony import */var _CSSOverviewUnusedDeclarations_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CSSOverviewUnusedDeclarations.js */ "./panels/css_overview/CSSOverviewUnusedDeclarations.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
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





var _runtimeAgent = /*#__PURE__*/ new WeakMap(), _cssAgent = /*#__PURE__*/ new WeakMap(), _domSnapshotAgent = /*#__PURE__*/ new WeakMap(), _overlayAgent = /*#__PURE__*/ new WeakMap();
var CSSOverviewModel = /*#__PURE__*/ function(_SDK_SDKModel_SDKModel) {
    "use strict";
    _inherits(CSSOverviewModel, _SDK_SDKModel_SDKModel);
    var _super = _create_super(CSSOverviewModel);
    function CSSOverviewModel(target) {
        _class_call_check(this, CSSOverviewModel);
        var _this;
        _this = _super.call(this, target);
        _class_private_field_init(_assert_this_initialized(_this), _runtimeAgent, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _cssAgent, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _domSnapshotAgent, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _overlayAgent, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(_assert_this_initialized(_this), _runtimeAgent, target.runtimeAgent());
        _class_private_field_set(_assert_this_initialized(_this), _cssAgent, target.cssAgent());
        _class_private_field_set(_assert_this_initialized(_this), _domSnapshotAgent, target.domsnapshotAgent());
        _class_private_field_set(_assert_this_initialized(_this), _overlayAgent, target.overlayAgent());
        return _this;
    }
    _create_class(CSSOverviewModel, [
        {
            key: "highlightNode",
            value: function highlightNode(node) {
                var highlightConfig = {
                    contentColor: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.PageHighlight.Content.toProtocolRGBA(),
                    showInfo: true,
                    contrastAlgorithm: _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.isEnabled('apca') ? "apca" /* Protocol.Overlay.ContrastAlgorithm.Apca */  : "aa" /* Protocol.Overlay.ContrastAlgorithm.Aa */ 
                };
                void _class_private_field_get(this, _overlayAgent).invoke_hideHighlight();
                void _class_private_field_get(this, _overlayAgent).invoke_highlightNode({
                    backendNodeId: node,
                    highlightConfig: highlightConfig
                });
            }
        },
        {
            key: "getNodeStyleStats",
            value: function getNodeStyleStats() {
                var _this = this;
                return _async_to_generator(function() {
                    var backgroundColors, textColors, textColorContrastIssues, fillColors, borderColors, fontInfo, unusedDeclarations, snapshotConfig, formatColor, storeColor, isSVGNode, isReplacedContent, isTableElementWithDefaultStyles, elementCount, _ref, documents, strings, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _step_value, nodes, layout, idx, styles, nodeIdx, nodeId, nodeName, _styles, backgroundColorIdx, textColorIdx, fillIdx, borderTopWidthIdx, borderTopColorIdx, borderBottomWidthIdx, borderBottomColorIdx, borderLeftWidthIdx, borderLeftColorIdx, borderRightWidthIdx, borderRightColorIdx, fontFamilyIdx, fontSizeIdx, fontWeightIdx, lineHeightIdx, positionIdx, topIdx, rightIdx, bottomIdx, leftIdx, displayIdx, widthIdx, heightIdx, verticalAlignIdx, textColor, fontFamily, fontFamilyInfo, sizeLabel, weightLabel, lineHeightLabel, size, weight, lineHeight, fontSizeValue, nodes1, fontWeightValue, nodes2, lineHeightValue, nodes3, blendedBackgroundColor, contrastInfo, blendedTextColor, formattedTextColor, formattedBackgroundColor, key, contrastRatio, threshold, passes, issue, aaThreshold, aaaThreshold, contrastRatio1, issue1;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                backgroundColors = new Map();
                                textColors = new Map();
                                textColorContrastIssues = new Map();
                                fillColors = new Map();
                                borderColors = new Map();
                                fontInfo = new Map();
                                unusedDeclarations = new Map();
                                snapshotConfig = {
                                    computedStyles: [
                                        'background-color',
                                        'color',
                                        'fill',
                                        'border-top-width',
                                        'border-top-color',
                                        'border-bottom-width',
                                        'border-bottom-color',
                                        'border-left-width',
                                        'border-left-color',
                                        'border-right-width',
                                        'border-right-color',
                                        'font-family',
                                        'font-size',
                                        'font-weight',
                                        'line-height',
                                        'position',
                                        'top',
                                        'right',
                                        'bottom',
                                        'left',
                                        'display',
                                        'width',
                                        'height',
                                        'vertical-align'
                                    ],
                                    includeTextColorOpacities: true,
                                    includeBlendedBackgroundColors: true
                                };
                                formatColor = function(color) {
                                    if (_instanceof(color, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Legacy)) {
                                        return color.hasAlpha() ? color.asString("hexa" /* Common.Color.Format.HEXA */ ) : color.asString("hex" /* Common.Color.Format.HEX */ );
                                    }
                                    return color.asString();
                                };
                                storeColor = function(id, nodeId, target) {
                                    if (id === -1) {
                                        return;
                                    }
                                    // Parse the color, discard transparent ones.
                                    var colorText = strings[id];
                                    if (!colorText) {
                                        return;
                                    }
                                    var color = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(colorText);
                                    if (!color || color.asLegacyColor().rgba()[3] === 0) {
                                        return;
                                    }
                                    // Format the color and use as the key.
                                    var colorFormatted = formatColor(color);
                                    if (!colorFormatted) {
                                        return;
                                    }
                                    // Get the existing set of nodes with the color, or create a new set.
                                    var colorValues = target.get(colorFormatted) || new Set();
                                    colorValues.add(nodeId);
                                    // Store.
                                    target.set(colorFormatted, colorValues);
                                    return color;
                                };
                                isSVGNode = function(nodeName) {
                                    var validNodes = new Set([
                                        'altglyph',
                                        'circle',
                                        'ellipse',
                                        'path',
                                        'polygon',
                                        'polyline',
                                        'rect',
                                        'svg',
                                        'text',
                                        'textpath',
                                        'tref',
                                        'tspan'
                                    ]);
                                    return validNodes.has(nodeName.toLowerCase());
                                };
                                isReplacedContent = function(nodeName) {
                                    var validNodes = new Set([
                                        'iframe',
                                        'video',
                                        'embed',
                                        'img'
                                    ]);
                                    return validNodes.has(nodeName.toLowerCase());
                                };
                                isTableElementWithDefaultStyles = function(nodeName, display) {
                                    var validNodes = new Set([
                                        'tr',
                                        'td',
                                        'thead',
                                        'tbody'
                                    ]);
                                    return validNodes.has(nodeName.toLowerCase()) && display.startsWith('table');
                                };
                                elementCount = 0;
                                return [
                                    4,
                                    _class_private_field_get(_this, _domSnapshotAgent).invoke_captureSnapshot(snapshotConfig)
                                ];
                            case 1:
                                _ref = _state.sent(), documents = _ref.documents, strings = _ref.strings;
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = documents[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        _step_value = _step.value, nodes = _step_value.nodes, layout = _step_value.layout;
                                        // Track the number of elements in the documents.
                                        elementCount += layout.nodeIndex.length;
                                        for(idx = 0; idx < layout.styles.length; idx++){
                                            styles = layout.styles[idx];
                                            nodeIdx = layout.nodeIndex[idx];
                                            if (!nodes.backendNodeId || !nodes.nodeName) {
                                                continue;
                                            }
                                            nodeId = nodes.backendNodeId[nodeIdx];
                                            nodeName = nodes.nodeName[nodeIdx];
                                            _styles = _sliced_to_array(styles, 24), backgroundColorIdx = _styles[0], textColorIdx = _styles[1], fillIdx = _styles[2], borderTopWidthIdx = _styles[3], borderTopColorIdx = _styles[4], borderBottomWidthIdx = _styles[5], borderBottomColorIdx = _styles[6], borderLeftWidthIdx = _styles[7], borderLeftColorIdx = _styles[8], borderRightWidthIdx = _styles[9], borderRightColorIdx = _styles[10], fontFamilyIdx = _styles[11], fontSizeIdx = _styles[12], fontWeightIdx = _styles[13], lineHeightIdx = _styles[14], positionIdx = _styles[15], topIdx = _styles[16], rightIdx = _styles[17], bottomIdx = _styles[18], leftIdx = _styles[19], displayIdx = _styles[20], widthIdx = _styles[21], heightIdx = _styles[22], verticalAlignIdx = _styles[23];
                                            storeColor(backgroundColorIdx, nodeId, backgroundColors);
                                            textColor = storeColor(textColorIdx, nodeId, textColors);
                                            if (isSVGNode(strings[nodeName])) {
                                                storeColor(fillIdx, nodeId, fillColors);
                                            }
                                            if (strings[borderTopWidthIdx] !== '0px') {
                                                storeColor(borderTopColorIdx, nodeId, borderColors);
                                            }
                                            if (strings[borderBottomWidthIdx] !== '0px') {
                                                storeColor(borderBottomColorIdx, nodeId, borderColors);
                                            }
                                            if (strings[borderLeftWidthIdx] !== '0px') {
                                                storeColor(borderLeftColorIdx, nodeId, borderColors);
                                            }
                                            if (strings[borderRightWidthIdx] !== '0px') {
                                                storeColor(borderRightColorIdx, nodeId, borderColors);
                                            }
                                            /**
                 * Create a structure like this for font info:
                 *
                 *                 / size (Map) -- nodes (Array)
                 *                /
                 * Font family (Map) ----- weight (Map) -- nodes (Array)
                 *                \
                 *                 \ line-height (Map) -- nodes (Array)
                 */ if (fontFamilyIdx && fontFamilyIdx !== -1) {
                                                fontFamily = strings[fontFamilyIdx];
                                                fontFamilyInfo = fontInfo.get(fontFamily) || new Map();
                                                sizeLabel = 'font-size';
                                                weightLabel = 'font-weight';
                                                lineHeightLabel = 'line-height';
                                                size = fontFamilyInfo.get(sizeLabel) || new Map();
                                                weight = fontFamilyInfo.get(weightLabel) || new Map();
                                                lineHeight = fontFamilyInfo.get(lineHeightLabel) || new Map();
                                                if (fontSizeIdx !== -1) {
                                                    fontSizeValue = strings[fontSizeIdx];
                                                    nodes1 = size.get(fontSizeValue) || [];
                                                    nodes1.push(nodeId);
                                                    size.set(fontSizeValue, nodes1);
                                                }
                                                if (fontWeightIdx !== -1) {
                                                    fontWeightValue = strings[fontWeightIdx];
                                                    nodes2 = weight.get(fontWeightValue) || [];
                                                    nodes2.push(nodeId);
                                                    weight.set(fontWeightValue, nodes2);
                                                }
                                                if (lineHeightIdx !== -1) {
                                                    lineHeightValue = strings[lineHeightIdx];
                                                    nodes3 = lineHeight.get(lineHeightValue) || [];
                                                    nodes3.push(nodeId);
                                                    lineHeight.set(lineHeightValue, nodes3);
                                                }
                                                // Set the data back.
                                                fontFamilyInfo.set(sizeLabel, size);
                                                fontFamilyInfo.set(weightLabel, weight);
                                                fontFamilyInfo.set(lineHeightLabel, lineHeight);
                                                fontInfo.set(fontFamily, fontFamilyInfo);
                                            }
                                            blendedBackgroundColor = textColor && layout.blendedBackgroundColors && layout.blendedBackgroundColors[idx] !== -1 ? _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(strings[layout.blendedBackgroundColors[idx]]) : null;
                                            if (textColor && blendedBackgroundColor) {
                                                contrastInfo = new _ui_legacy_components_color_picker_color_picker_js__WEBPACK_IMPORTED_MODULE_3__.ContrastInfo.ContrastInfo({
                                                    backgroundColors: [
                                                        blendedBackgroundColor.asString("hexa" /* Common.Color.Format.HEXA */ )
                                                    ],
                                                    computedFontSize: fontSizeIdx !== -1 ? strings[fontSizeIdx] : '',
                                                    computedFontWeight: fontWeightIdx !== -1 ? strings[fontWeightIdx] : ''
                                                });
                                                blendedTextColor = textColor.asLegacyColor().blendWithAlpha(layout.textColorOpacities ? layout.textColorOpacities[idx] : 1);
                                                contrastInfo.setColor(blendedTextColor);
                                                formattedTextColor = formatColor(blendedTextColor);
                                                formattedBackgroundColor = formatColor(blendedBackgroundColor.asLegacyColor());
                                                key = "".concat(formattedTextColor, "_").concat(formattedBackgroundColor);
                                                if (_core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.isEnabled('apca')) {
                                                    contrastRatio = contrastInfo.contrastRatioAPCA();
                                                    threshold = contrastInfo.contrastRatioAPCAThreshold();
                                                    passes = contrastRatio && threshold ? Math.abs(contrastRatio) >= threshold : false;
                                                    if (!passes && contrastRatio) {
                                                        issue = {
                                                            nodeId: nodeId,
                                                            contrastRatio: contrastRatio,
                                                            textColor: blendedTextColor,
                                                            backgroundColor: blendedBackgroundColor,
                                                            thresholdsViolated: {
                                                                aa: false,
                                                                aaa: false,
                                                                apca: true
                                                            }
                                                        };
                                                        if (textColorContrastIssues.has(key)) {
                                                            textColorContrastIssues.get(key).push(issue);
                                                        } else {
                                                            textColorContrastIssues.set(key, [
                                                                issue
                                                            ]);
                                                        }
                                                    }
                                                } else {
                                                    aaThreshold = contrastInfo.contrastRatioThreshold('aa') || 0;
                                                    aaaThreshold = contrastInfo.contrastRatioThreshold('aaa') || 0;
                                                    contrastRatio1 = contrastInfo.contrastRatio() || 0;
                                                    if (aaThreshold > contrastRatio1 || aaaThreshold > contrastRatio1) {
                                                        issue1 = {
                                                            nodeId: nodeId,
                                                            contrastRatio: contrastRatio1,
                                                            textColor: blendedTextColor,
                                                            backgroundColor: blendedBackgroundColor,
                                                            thresholdsViolated: {
                                                                aa: aaThreshold > contrastRatio1,
                                                                aaa: aaaThreshold > contrastRatio1,
                                                                apca: false
                                                            }
                                                        };
                                                        if (textColorContrastIssues.has(key)) {
                                                            textColorContrastIssues.get(key).push(issue1);
                                                        } else {
                                                            textColorContrastIssues.set(key, [
                                                                issue1
                                                            ]);
                                                        }
                                                    }
                                                }
                                            }
                                            _CSSOverviewUnusedDeclarations_js__WEBPACK_IMPORTED_MODULE_4__.CSSOverviewUnusedDeclarations.checkForUnusedPositionValues(unusedDeclarations, nodeId, strings, positionIdx, topIdx, leftIdx, rightIdx, bottomIdx);
                                            // Ignore SVG elements as, despite being inline by default, they can have width & height specified.
                                            // Also ignore replaced content, for similar reasons.
                                            if (!isSVGNode(strings[nodeName]) && !isReplacedContent(strings[nodeName])) {
                                                _CSSOverviewUnusedDeclarations_js__WEBPACK_IMPORTED_MODULE_4__.CSSOverviewUnusedDeclarations.checkForUnusedWidthAndHeightValues(unusedDeclarations, nodeId, strings, displayIdx, widthIdx, heightIdx);
                                            }
                                            if (verticalAlignIdx !== -1 && !isTableElementWithDefaultStyles(strings[nodeName], strings[displayIdx])) {
                                                _CSSOverviewUnusedDeclarations_js__WEBPACK_IMPORTED_MODULE_4__.CSSOverviewUnusedDeclarations.checkForInvalidVerticalAlignment(unusedDeclarations, nodeId, strings, displayIdx, verticalAlignIdx);
                                            }
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
                                    2,
                                    {
                                        backgroundColors: backgroundColors,
                                        textColors: textColors,
                                        textColorContrastIssues: textColorContrastIssues,
                                        fillColors: fillColors,
                                        borderColors: borderColors,
                                        fontInfo: fontInfo,
                                        unusedDeclarations: unusedDeclarations,
                                        elementCount: elementCount
                                    }
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getComputedStyleForNode",
            value: function getComputedStyleForNode(nodeId) {
                return _class_private_field_get(this, _cssAgent).invoke_getComputedStyleForNode({
                    nodeId: nodeId
                });
            }
        },
        {
            key: "getMediaQueries",
            value: function getMediaQueries() {
                var _this = this;
                return _async_to_generator(function() {
                    var queries, queryMap, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, query, entries;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this, _cssAgent).invoke_getMediaQueries()
                                ];
                            case 1:
                                queries = _state.sent();
                                queryMap = new Map();
                                if (!queries) {
                                    return [
                                        2,
                                        queryMap
                                    ];
                                }
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = queries.medias[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        query = _step.value;
                                        // Ignore media queries applied to stylesheets; instead only use declared media rules.
                                        if (query.source === 'linkedSheet') {
                                            continue;
                                        }
                                        entries = queryMap.get(query.text) || [];
                                        entries.push(query);
                                        queryMap.set(query.text, entries);
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
                                    2,
                                    queryMap
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getGlobalStylesheetStats",
            value: function getGlobalStylesheetStats() {
                var _this = this;
                return _async_to_generator(function() {
                    var expression, result;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                // There are no ways to pull CSSOM values directly today, due to its unserializable format,
                                // so instead we execute some JS within the page that extracts the relevant data and send that instead.
                                expression = "(function() {\n      let styleRules = 0;\n      let inlineStyles = 0;\n      let externalSheets = 0;\n      const stats = {\n        // Simple.\n        type: new Set(),\n        class: new Set(),\n        id: new Set(),\n        universal: new Set(),\n        attribute: new Set(),\n\n        // Non-simple.\n        nonSimple: new Set()\n      };\n\n      for (const styleSheet of document.styleSheets) {\n        if (styleSheet.href) {\n          externalSheets++;\n        } else {\n          inlineStyles++;\n        }\n\n        // Attempting to grab rules can trigger a DOMException.\n        // Try it and if it fails skip to the next stylesheet.\n        let rules;\n        try {\n          rules = styleSheet.rules;\n        } catch (err) {\n          continue;\n        }\n\n        for (const rule of rules) {\n          if ('selectorText' in rule) {\n            styleRules++;\n\n            // Each group that was used.\n            for (const selectorGroup of rule.selectorText.split(',')) {\n              // Each selector in the group.\n              for (const selector of selectorGroup.split(/[\\t\\n\\f\\r ]+/g)) {\n                if (selector.startsWith('.')) {\n                  // Class.\n                  stats.class.add(selector);\n                } else if (selector.startsWith('#')) {\n                  // Id.\n                  stats.id.add(selector);\n                } else if (selector.startsWith('*')) {\n                  // Universal.\n                  stats.universal.add(selector);\n                } else if (selector.startsWith('[')) {\n                  // Attribute.\n                  stats.attribute.add(selector);\n                } else {\n                  // Type or non-simple selector.\n                  const specialChars = /[#.:\\[\\]|\\+>~]/;\n                  if (specialChars.test(selector)) {\n                    stats.nonSimple.add(selector);\n                  } else {\n                    stats.type.add(selector);\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n\n      return {\n        styleRules,\n        inlineStyles,\n        externalSheets,\n        stats: {\n          // Simple.\n          type: stats.type.size,\n          class: stats.class.size,\n          id: stats.id.size,\n          universal: stats.universal.size,\n          attribute: stats.attribute.size,\n\n          // Non-simple.\n          nonSimple: stats.nonSimple.size\n        }\n      }\n    })()";
                                return [
                                    4,
                                    _class_private_field_get(_this, _runtimeAgent).invoke_evaluate({
                                        expression: expression,
                                        returnByValue: true
                                    })
                                ];
                            case 1:
                                result = _state.sent().result;
                                // TODO(paullewis): Handle errors properly.
                                if (result.type !== 'object') {
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    2,
                                    result.value
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return CSSOverviewModel;
}(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.SDKModel.SDKModel);
_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.SDKModel.SDKModel.register(CSSOverviewModel, {
    capabilities: 2 /* SDK.Target.Capability.DOM */ ,
    autostart: false
}); //# sourceMappingURL=CSSOverviewModel.js.map


}),
"./panels/css_overview/CSSOverviewUnusedDeclarations.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CSSOverviewUnusedDeclarations: function() { return CSSOverviewUnusedDeclarations; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
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

var UIStrings = {
    /**
     *@description Label to explain why top values are ignored
     */ topAppliedToAStatically: '`Top` applied to a statically positioned element',
    /**
     *@description Label to explain why left (opposite to right) values are ignored.
     */ leftAppliedToAStatically: '`Left` applied to a statically positioned element',
    /**
     *@description Label to explain why right values are ignored
     */ rightAppliedToAStatically: '`Right` applied to a statically positioned element',
    /**
     *@description Label to explain why bottom values are ignored
     */ bottomAppliedToAStatically: '`Bottom` applied to a statically positioned element',
    /**
     *@description Label to explain why width values are ignored
     */ widthAppliedToAnInlineElement: '`Width` applied to an inline element',
    /**
     *@description Label to explain why height values are ignored
     */ heightAppliedToAnInlineElement: '`Height` applied to an inline element',
    /**
     *@description Label to explain why vertical-align values are ignored
     */ verticalAlignmentAppliedTo: 'Vertical alignment applied to element which is neither `inline` nor `table-cell`'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/css_overview/CSSOverviewUnusedDeclarations.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var CSSOverviewUnusedDeclarations = /*#__PURE__*/ function() {
    "use strict";
    function CSSOverviewUnusedDeclarations() {
        _class_call_check(this, CSSOverviewUnusedDeclarations);
    }
    _create_class(CSSOverviewUnusedDeclarations, null, [
        {
            key: "add",
            value: function add(target, key, item) {
                var values = target.get(key) || [];
                values.push(item);
                target.set(key, values);
            }
        },
        {
            key: "checkForUnusedPositionValues",
            value: function checkForUnusedPositionValues(unusedDeclarations, nodeId, strings, positionIdx, topIdx, leftIdx, rightIdx, bottomIdx) {
                if (strings[positionIdx] !== 'static') {
                    return;
                }
                if (strings[topIdx] !== 'auto') {
                    var reason = i18nString(UIStrings.topAppliedToAStatically);
                    this.add(unusedDeclarations, reason, {
                        declaration: "top: ".concat(strings[topIdx]),
                        nodeId: nodeId
                    });
                }
                if (strings[leftIdx] !== 'auto') {
                    var reason1 = i18nString(UIStrings.leftAppliedToAStatically);
                    this.add(unusedDeclarations, reason1, {
                        declaration: "left: ".concat(strings[leftIdx]),
                        nodeId: nodeId
                    });
                }
                if (strings[rightIdx] !== 'auto') {
                    var reason2 = i18nString(UIStrings.rightAppliedToAStatically);
                    this.add(unusedDeclarations, reason2, {
                        declaration: "right: ".concat(strings[rightIdx]),
                        nodeId: nodeId
                    });
                }
                if (strings[bottomIdx] !== 'auto') {
                    var reason3 = i18nString(UIStrings.bottomAppliedToAStatically);
                    this.add(unusedDeclarations, reason3, {
                        declaration: "bottom: ".concat(strings[bottomIdx]),
                        nodeId: nodeId
                    });
                }
            }
        },
        {
            key: "checkForUnusedWidthAndHeightValues",
            value: function checkForUnusedWidthAndHeightValues(unusedDeclarations, nodeId, strings, displayIdx, widthIdx, heightIdx) {
                if (strings[displayIdx] !== 'inline') {
                    return;
                }
                if (strings[widthIdx] !== 'auto') {
                    var reason = i18nString(UIStrings.widthAppliedToAnInlineElement);
                    this.add(unusedDeclarations, reason, {
                        declaration: "width: ".concat(strings[widthIdx]),
                        nodeId: nodeId
                    });
                }
                if (strings[heightIdx] !== 'auto') {
                    var reason1 = i18nString(UIStrings.heightAppliedToAnInlineElement);
                    this.add(unusedDeclarations, reason1, {
                        declaration: "height: ".concat(strings[heightIdx]),
                        nodeId: nodeId
                    });
                }
            }
        },
        {
            key: "checkForInvalidVerticalAlignment",
            value: function checkForInvalidVerticalAlignment(unusedDeclarations, nodeId, strings, displayIdx, verticalAlignIdx) {
                if (!strings[displayIdx] || strings[displayIdx].startsWith('inline') || strings[displayIdx].startsWith('table')) {
                    return;
                }
                if (strings[verticalAlignIdx] !== 'baseline') {
                    var reason = i18nString(UIStrings.verticalAlignmentAppliedTo);
                    this.add(unusedDeclarations, reason, {
                        declaration: "vertical-align: ".concat(strings[verticalAlignIdx]),
                        nodeId: nodeId
                    });
                }
            }
        }
    ]);
    return CSSOverviewUnusedDeclarations;
} //# sourceMappingURL=CSSOverviewUnusedDeclarations.js.map
();


}),

}]);