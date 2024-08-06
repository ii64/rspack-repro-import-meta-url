"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_issues_AffectedResourcesView_js"], {
"./panels/issues/AffectedResourcesView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AffectedResourcesView: function() { return AffectedResourcesView; },
  extractShortPath: function() { return extractShortPath; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/logs/logs.js */ "./models/logs/logs.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_components_request_link_icon_request_link_icon_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/components/request_link_icon/request_link_icon.js */ "./ui/components/request_link_icon/request_link_icon.js");
/* harmony import */var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
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
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
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










var UIStrings = {
    /**
     *@description Text in Object Properties Section
     */ unknown: 'unknown',
    /**
     *@description Tooltip for button linking to the Elements panel
     */ clickToRevealTheFramesDomNodeIn: 'Click to reveal the frame\'s DOM node in the Elements panel',
    /**
     *@description Replacement text for a link to an HTML element which is not available (anymore).
     */ unavailable: 'unavailable'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/issues/AffectedResourcesView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
var extractShortPath = function(path) {
    // 1st regex matches everything after last '/'
    // if path ends with '/', 2nd regex returns everything between the last two '/'
    return (/[^/]+$/.exec(path) || /[^/]+\/$/.exec(path) || [
        ''
    ])[0];
};
var _parentView = /*#__PURE__*/ new WeakMap(), _affectedResourcesCount = /*#__PURE__*/ new WeakMap(), _frameListeners = /*#__PURE__*/ new WeakMap(), _unresolvedFrameIds = /*#__PURE__*/ new WeakMap(), /**
     * This function resolves a frameId to a ResourceTreeFrame. If the frameId does not resolve, or hasn't navigated yet,
     * a listener is installed that takes care of updating the view if the frame is added. This is useful if the issue is
     * added before the frame gets reported.
     */ _resolveFrameId = /*#__PURE__*/ new WeakSet(), _onFrameChanged = /*#__PURE__*/ new WeakSet();
/**
 * The base class for all affected resource views. It provides basic scaffolding
 * as well as machinery for resolving request and frame ids to SDK objects.
 */ var AffectedResourcesView = /*#__PURE__*/ function(_UI_TreeOutline_TreeElement) {
    "use strict";
    _inherits(AffectedResourcesView, _UI_TreeOutline_TreeElement);
    var _super = _create_super(AffectedResourcesView);
    function AffectedResourcesView(parent, issue, jslogContext) {
        _class_call_check(this, AffectedResourcesView);
        var _this;
        _this = _super.call(this, /* title */ undefined, /* expandable */ undefined, jslogContext);
        _class_private_method_init(_assert_this_initialized(_this), _resolveFrameId);
        _class_private_method_init(_assert_this_initialized(_this), _onFrameChanged);
        _class_private_field_init(_assert_this_initialized(_this), _parentView, {
            writable: true,
            value: void 0
        });
        _define_property(_assert_this_initialized(_this), "issue", void 0);
        _define_property(_assert_this_initialized(_this), "affectedResourcesCountElement", void 0);
        _define_property(_assert_this_initialized(_this), "affectedResources", void 0);
        _class_private_field_init(_assert_this_initialized(_this), _affectedResourcesCount, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _frameListeners, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _unresolvedFrameIds, {
            writable: true,
            value: void 0
        });
        _define_property(_assert_this_initialized(_this), "requestResolver", void 0);
        _class_private_field_set(_assert_this_initialized(_this), _parentView, parent);
        _this.issue = issue;
        _this.toggleOnClick = true;
        _this.affectedResourcesCountElement = _this.createAffectedResourcesCounter();
        _this.affectedResources = _this.createAffectedResources();
        _class_private_field_set(_assert_this_initialized(_this), _affectedResourcesCount, 0);
        _this.requestResolver = new _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_4__.RequestResolver.RequestResolver();
        _class_private_field_set(_assert_this_initialized(_this), _frameListeners, []);
        _class_private_field_set(_assert_this_initialized(_this), _unresolvedFrameIds, new Set());
        return _this;
    }
    _create_class(AffectedResourcesView, [
        {
            /**
     * Sets the issue to take the resources from. Does not
     * trigger an update, the caller needs to do that explicitly.
     */ key: "setIssue",
            value: function setIssue(issue) {
                this.issue = issue;
            }
        },
        {
            key: "createAffectedResourcesCounter",
            value: function createAffectedResourcesCounter() {
                var counterLabel = document.createElement('div');
                counterLabel.classList.add('affected-resource-label');
                this.listItemElement.appendChild(counterLabel);
                return counterLabel;
            }
        },
        {
            key: "createAffectedResources",
            value: function createAffectedResources() {
                var body = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.TreeOutline.TreeElement();
                var affectedResources = document.createElement('table');
                affectedResources.classList.add('affected-resource-list');
                body.listItemElement.appendChild(affectedResources);
                this.appendChild(body);
                return affectedResources;
            }
        },
        {
            key: "updateAffectedResourceCount",
            value: function updateAffectedResourceCount(count) {
                _class_private_field_set(this, _affectedResourcesCount, count);
                this.affectedResourcesCountElement.textContent = this.getResourceNameWithCount(count);
                this.hidden = _class_private_field_get(this, _affectedResourcesCount) === 0;
                _class_private_field_get(this, _parentView).updateAffectedResourceVisibility();
            }
        },
        {
            key: "isEmpty",
            value: function isEmpty() {
                return _class_private_field_get(this, _affectedResourcesCount) === 0;
            }
        },
        {
            key: "clear",
            value: function clear() {
                this.affectedResources.textContent = '';
                this.requestResolver.clear();
            }
        },
        {
            key: "expandIfOneResource",
            value: function expandIfOneResource() {
                if (_class_private_field_get(this, _affectedResourcesCount) === 1) {
                    this.expand();
                }
            }
        },
        {
            key: "createFrameCell",
            value: function createFrameCell(frameId, issueCategory) {
                var frame = _class_private_method_get(this, _resolveFrameId, resolveFrameId).call(this, frameId);
                var url = frame && (frame.unreachableUrl() || frame.url) || i18nString(UIStrings.unknown);
                var frameCell = document.createElement('td');
                frameCell.classList.add('affected-resource-cell');
                if (frame) {
                    var icon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon();
                    icon.data = {
                        iconName: 'code-circle',
                        color: 'var(--icon-link)',
                        width: '16px',
                        height: '16px'
                    };
                    icon.classList.add('link', 'elements-panel');
                    icon.onclick = /*#__PURE__*/ _async_to_generator(function() {
                        var frame, ownerNode;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.issuesPanelResourceOpened(issueCategory, "Element" /* AffectedItem.Element */ );
                                    frame = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.FrameManager.FrameManager.instance().getFrame(frameId);
                                    if (!frame) return [
                                        3,
                                        2
                                    ];
                                    return [
                                        4,
                                        frame.getOwnerDOMNodeOrDocument()
                                    ];
                                case 1:
                                    ownerNode = _state.sent();
                                    if (ownerNode) {
                                        void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(ownerNode);
                                    }
                                    _state.label = 2;
                                case 2:
                                    return [
                                        2
                                    ];
                            }
                        });
                    });
                    icon.title = i18nString(UIStrings.clickToRevealTheFramesDomNodeIn);
                    frameCell.appendChild(icon);
                }
                frameCell.appendChild(document.createTextNode(url));
                frameCell.onmouseenter = function() {
                    var frame = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.FrameManager.FrameManager.instance().getFrame(frameId);
                    if (frame) {
                        void frame.highlight();
                    }
                };
                frameCell.onmouseleave = function() {
                    return _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.OverlayModel.OverlayModel.hideDOMNodeHighlight();
                };
                return frameCell;
            }
        },
        {
            key: "createRequestCell",
            value: function createRequestCell(affectedRequest) {
                var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                var requestCell = document.createElement('td');
                requestCell.classList.add('affected-resource-cell');
                var requestLinkIcon = new _ui_components_request_link_icon_request_link_icon_js__WEBPACK_IMPORTED_MODULE_6__.RequestLinkIcon.RequestLinkIcon();
                requestLinkIcon.data = _object_spread_props(_object_spread({}, options), {
                    affectedRequest: affectedRequest,
                    requestResolver: this.requestResolver,
                    displayURL: true
                });
                requestCell.appendChild(requestLinkIcon);
                return requestCell;
            }
        },
        {
            key: "createElementCell",
            value: function createElementCell(param, issueCategory) {
                var backendNodeId = param.backendNodeId, nodeName = param.nodeName, target = param.target;
                return _async_to_generator(function() {
                    var cellElement, deferredDOMNode, anchorElement, cellElement1;
                    function sendTelemetry() {
                        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.issuesPanelResourceOpened(issueCategory, "Element" /* AffectedItem.Element */ );
                    }
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!target) {
                                    cellElement = document.createElement('td');
                                    cellElement.textContent = nodeName || i18nString(UIStrings.unavailable);
                                    return [
                                        2,
                                        cellElement
                                    ];
                                }
                                deferredDOMNode = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DeferredDOMNode(target, backendNodeId);
                                return [
                                    4,
                                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Linkifier.Linkifier.linkify(deferredDOMNode)
                                ];
                            case 1:
                                anchorElement = _state.sent();
                                anchorElement.textContent = nodeName;
                                anchorElement.addEventListener('click', function() {
                                    return sendTelemetry();
                                });
                                anchorElement.addEventListener('keydown', function(event) {
                                    if (event.key === 'Enter') {
                                        sendTelemetry();
                                    }
                                });
                                cellElement1 = document.createElement('td');
                                cellElement1.classList.add('affected-resource-element', 'devtools-link');
                                cellElement1.appendChild(anchorElement);
                                return [
                                    2,
                                    cellElement1
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "appendSourceLocation",
            value: function appendSourceLocation(element, sourceLocation, target) {
                var sourceCodeLocation = document.createElement('td');
                sourceCodeLocation.classList.add('affected-source-location');
                if (sourceLocation) {
                    var maxLengthForDisplayedURLs = 40; // Same as console messages.
                    // TODO(crbug.com/1108503): Add some mechanism to be able to add telemetry to this element.
                    var linkifier = new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.Linkifier.Linkifier(maxLengthForDisplayedURLs);
                    var sourceAnchor = linkifier.linkifyScriptLocation(target || null, sourceLocation.scriptId || null, sourceLocation.url, sourceLocation.lineNumber, {
                        columnNumber: sourceLocation.columnNumber,
                        inlineFrameIndex: 0
                    });
                    sourceAnchor.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__.link('source-location').track({
                        click: true
                    })));
                    sourceCodeLocation.appendChild(sourceAnchor);
                }
                element.appendChild(sourceCodeLocation);
            }
        },
        {
            key: "appendColumnTitle",
            value: function appendColumnTitle(header, title) {
                var additionalClass = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
                var info = document.createElement('td');
                info.classList.add('affected-resource-header');
                if (additionalClass) {
                    info.classList.add(additionalClass);
                }
                info.textContent = title;
                header.appendChild(info);
            }
        },
        {
            key: "createIssueDetailCell",
            value: function createIssueDetailCell(textContent) {
                var additionalClass = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                var cell = document.createElement('td');
                if (typeof textContent === 'string') {
                    cell.textContent = textContent;
                } else {
                    cell.appendChild(textContent);
                }
                if (additionalClass) {
                    cell.classList.add(additionalClass);
                }
                return cell;
            }
        },
        {
            key: "appendIssueDetailCell",
            value: function appendIssueDetailCell(element, textContent) {
                var additionalClass = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
                var cell = this.createIssueDetailCell(textContent, additionalClass);
                element.appendChild(cell);
                return cell;
            }
        }
    ]);
    return AffectedResourcesView;
} //# sourceMappingURL=AffectedResourcesView.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.TreeOutline.TreeElement);
function resolveFrameId(frameId) {
    var frame = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.FrameManager.FrameManager.instance().getFrame(frameId);
    if (!frame || !frame.url) {
        _class_private_field_get(this, _unresolvedFrameIds).add(frameId);
        if (!_class_private_field_get(this, _frameListeners).length) {
            var addListener = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.FrameManager.FrameManager.instance().addEventListener("FrameAddedToTarget" /* SDK.FrameManager.Events.FrameAddedToTarget */ , _class_private_method_get(this, _onFrameChanged, onFrameChanged), this);
            var navigateListener = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.FrameManager.FrameManager.instance().addEventListener("FrameNavigated" /* SDK.FrameManager.Events.FrameNavigated */ , _class_private_method_get(this, _onFrameChanged, onFrameChanged), this);
            _class_private_field_set(this, _frameListeners, [
                addListener,
                navigateListener
            ]);
        }
    }
    return frame;
}
function onFrameChanged(event) {
    var frame = event.data.frame;
    if (!frame.url) {
        return;
    }
    var frameWasUnresolved = _class_private_field_get(this, _unresolvedFrameIds).delete(frame.id);
    if (_class_private_field_get(this, _unresolvedFrameIds).size === 0 && _class_private_field_get(this, _frameListeners).length) {
        // Stop listening once all requests are resolved.
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.EventTarget.removeEventListeners(_class_private_field_get(this, _frameListeners));
        _class_private_field_set(this, _frameListeners, []);
    }
    if (frameWasUnresolved) {
        this.update();
    }
}


}),

}]);