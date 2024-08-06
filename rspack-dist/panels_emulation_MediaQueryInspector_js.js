"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_emulation_MediaQueryInspector_js"], {
"./panels/emulation/MediaQueryInspector.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  MediaQueryInspector: function() { return MediaQueryInspector; },
  MediaQueryUIModel: function() { return MediaQueryUIModel; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _mediaQueryInspector_css_legacy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mediaQueryInspector.css.legacy.js */ "./panels/emulation/mediaQueryInspector.css.legacy.js");
// Copyright 2014 The Chromium Authors. All rights reserved.
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
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
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








var UIStrings = {
    /**
     * @description A context menu item/command in the Media Query Inspector of the Device Toolbar.
     * Takes the user to the source code where this media query actually came from.
     */ revealInSourceCode: 'Reveal in source code'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/emulation/MediaQueryInspector.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var MediaQueryInspector = /*#__PURE__*/ function(_UI_Widget_Widget) {
    "use strict";
    _inherits(MediaQueryInspector, _UI_Widget_Widget);
    var _super = _create_super(MediaQueryInspector);
    function MediaQueryInspector(getWidthCallback, setWidthCallback, mediaThrottler) {
        _class_call_check(this, MediaQueryInspector);
        var _this;
        _this = _super.call(this, true);
        _define_property(_assert_this_initialized(_this), "mediaThrottler", void 0);
        _define_property(_assert_this_initialized(_this), "getWidthCallback", void 0);
        _define_property(_assert_this_initialized(_this), "setWidthCallback", void 0);
        _define_property(_assert_this_initialized(_this), "scale", void 0);
        _define_property(_assert_this_initialized(_this), "elementsToMediaQueryModel", void 0);
        _define_property(_assert_this_initialized(_this), "elementsToCSSLocations", void 0);
        _define_property(_assert_this_initialized(_this), "cssModel", void 0);
        _define_property(_assert_this_initialized(_this), "cachedQueryModels", void 0);
        _this.registerRequiredCSS(_mediaQueryInspector_css_legacy_js__WEBPACK_IMPORTED_MODULE_7__["default"]);
        _this.contentElement.classList.add('media-inspector-view');
        _this.contentElement.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.mediaInspectorView().track({
            click: true
        })));
        _this.contentElement.addEventListener('click', _this.onMediaQueryClicked.bind(_assert_this_initialized(_this)), false);
        _this.contentElement.addEventListener('contextmenu', _this.onContextMenu.bind(_assert_this_initialized(_this)), false);
        _this.mediaThrottler = mediaThrottler;
        _this.getWidthCallback = getWidthCallback;
        _this.setWidthCallback = setWidthCallback;
        _this.scale = 1;
        _this.elementsToMediaQueryModel = new WeakMap();
        _this.elementsToCSSLocations = new WeakMap();
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().observeModels(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.CSSModel.CSSModel, _assert_this_initialized(_this));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ZoomManager.ZoomManager.instance().addEventListener("ZoomChanged" /* UI.ZoomManager.Events.ZoomChanged */ , _this.renderMediaQueries.bind(_assert_this_initialized(_this)), _assert_this_initialized(_this));
        return _this;
    }
    _create_class(MediaQueryInspector, [
        {
            key: "modelAdded",
            value: function modelAdded(cssModel) {
                // FIXME: adapt this to multiple targets.
                if (cssModel.target() !== _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().primaryPageTarget()) {
                    return;
                }
                this.cssModel = cssModel;
                this.cssModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.CSSModel.Events.StyleSheetAdded, this.scheduleMediaQueriesUpdate, this);
                this.cssModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.CSSModel.Events.StyleSheetRemoved, this.scheduleMediaQueriesUpdate, this);
                this.cssModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.CSSModel.Events.StyleSheetChanged, this.scheduleMediaQueriesUpdate, this);
                this.cssModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.CSSModel.Events.MediaQueryResultChanged, this.scheduleMediaQueriesUpdate, this);
            }
        },
        {
            key: "modelRemoved",
            value: function modelRemoved(cssModel) {
                if (cssModel !== this.cssModel) {
                    return;
                }
                this.cssModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.CSSModel.Events.StyleSheetAdded, this.scheduleMediaQueriesUpdate, this);
                this.cssModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.CSSModel.Events.StyleSheetRemoved, this.scheduleMediaQueriesUpdate, this);
                this.cssModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.CSSModel.Events.StyleSheetChanged, this.scheduleMediaQueriesUpdate, this);
                this.cssModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.CSSModel.Events.MediaQueryResultChanged, this.scheduleMediaQueriesUpdate, this);
                delete this.cssModel;
            }
        },
        {
            key: "setAxisTransform",
            value: function setAxisTransform(scale) {
                if (Math.abs(this.scale - scale) < 1e-8) {
                    return;
                }
                this.scale = scale;
                this.renderMediaQueries();
            }
        },
        {
            key: "onMediaQueryClicked",
            value: function onMediaQueryClicked(event) {
                var mediaQueryMarker = event.target.enclosingNodeOrSelfWithClass('media-inspector-bar');
                if (!mediaQueryMarker) {
                    return;
                }
                var model = this.elementsToMediaQueryModel.get(mediaQueryMarker);
                if (!model) {
                    return;
                }
                var modelMaxWidth = model.maxWidthExpression();
                var modelMinWidth = model.minWidthExpression();
                if (model.section() === 0 /* Section.Max */ ) {
                    this.setWidthCallback(modelMaxWidth ? modelMaxWidth.computedLength() || 0 : 0);
                    return;
                }
                if (model.section() === 2 /* Section.Min */ ) {
                    this.setWidthCallback(modelMinWidth ? modelMinWidth.computedLength() || 0 : 0);
                    return;
                }
                var currentWidth = this.getWidthCallback();
                if (modelMinWidth && currentWidth !== modelMinWidth.computedLength()) {
                    this.setWidthCallback(modelMinWidth.computedLength() || 0);
                } else {
                    this.setWidthCallback(modelMaxWidth ? modelMaxWidth.computedLength() || 0 : 0);
                }
            }
        },
        {
            key: "onContextMenu",
            value: function onContextMenu(event) {
                if (!this.cssModel || !this.cssModel.isEnabled()) {
                    return;
                }
                var mediaQueryMarker = event.target.enclosingNodeOrSelfWithClass('media-inspector-bar');
                if (!mediaQueryMarker) {
                    return;
                }
                var locations = this.elementsToCSSLocations.get(mediaQueryMarker) || [];
                var uiLocations = new Map();
                for(var i = 0; i < locations.length; ++i){
                    var uiLocation = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_4__.CSSWorkspaceBinding.CSSWorkspaceBinding.instance().rawLocationToUILocation(locations[i]);
                    if (!uiLocation) {
                        continue;
                    }
                    var descriptor = typeof uiLocation.columnNumber === 'number' ? _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.sprintf('%s:%d:%d', uiLocation.uiSourceCode.url(), uiLocation.lineNumber + 1, uiLocation.columnNumber + 1) : _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.sprintf('%s:%d', uiLocation.uiSourceCode.url(), uiLocation.lineNumber + 1);
                    uiLocations.set(descriptor, uiLocation);
                }
                var contextMenuItems = _to_consumable_array(uiLocations.keys()).sort();
                var contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ContextMenu.ContextMenu(event);
                var subMenuItem = contextMenu.defaultSection().appendSubMenuItem(i18nString(UIStrings.revealInSourceCode), undefined, 'reveal-in-source-list');
                for(var i1 = 0; i1 < contextMenuItems.length; ++i1){
                    var title = contextMenuItems[i1];
                    subMenuItem.defaultSection().appendItem(title, this.revealSourceLocation.bind(this, uiLocations.get(title)), {
                        jslogContext: 'reveal-in-source'
                    });
                }
                void contextMenu.show();
            }
        },
        {
            key: "revealSourceLocation",
            value: function revealSourceLocation(location) {
                void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(location);
            }
        },
        {
            key: "scheduleMediaQueriesUpdate",
            value: function scheduleMediaQueriesUpdate() {
                if (!this.isShowing()) {
                    return;
                }
                void this.mediaThrottler.schedule(this.refetchMediaQueries.bind(this));
            }
        },
        {
            key: "refetchMediaQueries",
            value: function refetchMediaQueries() {
                if (!this.isShowing() || !this.cssModel) {
                    return Promise.resolve();
                }
                return this.cssModel.getMediaQueries().then(this.rebuildMediaQueries.bind(this));
            }
        },
        {
            key: "squashAdjacentEqual",
            value: function squashAdjacentEqual(models) {
                var filtered = [];
                for(var i = 0; i < models.length; ++i){
                    var last = filtered[filtered.length - 1];
                    if (!last || !last.equals(models[i])) {
                        filtered.push(models[i]);
                    }
                }
                return filtered;
            }
        },
        {
            key: "rebuildMediaQueries",
            value: function rebuildMediaQueries(cssMedias) {
                var queryModels = [];
                for(var i = 0; i < cssMedias.length; ++i){
                    var cssMedia = cssMedias[i];
                    if (!cssMedia.mediaList) {
                        continue;
                    }
                    for(var j = 0; j < cssMedia.mediaList.length; ++j){
                        var mediaQuery = cssMedia.mediaList[j];
                        var queryModel = MediaQueryUIModel.createFromMediaQuery(cssMedia, mediaQuery);
                        if (queryModel) {
                            queryModels.push(queryModel);
                        }
                    }
                }
                queryModels.sort(compareModels);
                queryModels = this.squashAdjacentEqual(queryModels);
                var allEqual = this.cachedQueryModels && this.cachedQueryModels.length === queryModels.length;
                for(var i1 = 0; allEqual && i1 < queryModels.length; ++i1){
                    allEqual = allEqual && this.cachedQueryModels && this.cachedQueryModels[i1].equals(queryModels[i1]);
                }
                if (allEqual) {
                    return;
                }
                this.cachedQueryModels = queryModels;
                this.renderMediaQueries();
                function compareModels(model1, model2) {
                    return model1.compareTo(model2);
                }
            }
        },
        {
            key: "renderMediaQueries",
            value: function renderMediaQueries() {
                if (!this.cachedQueryModels || !this.isShowing()) {
                    return;
                }
                var markers = [];
                var lastMarker = null;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.cachedQueryModels[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var model = _step.value;
                        if (lastMarker && lastMarker.model.dimensionsEqual(model)) {
                            lastMarker.active = lastMarker.active || model.active();
                        } else {
                            lastMarker = {
                                active: model.active(),
                                model: model,
                                locations: []
                            };
                            markers.push(lastMarker);
                        }
                        var rawLocation = model.rawLocation();
                        if (rawLocation) {
                            lastMarker.locations.push(rawLocation);
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
                this.contentElement.removeChildren();
                var container = null;
                for(var i = 0; i < markers.length; ++i){
                    if (!i || markers[i].model.section() !== markers[i - 1].model.section()) {
                        container = this.contentElement.createChild('div', 'media-inspector-marker-container');
                    }
                    var marker = markers[i];
                    var bar = this.createElementFromMediaQueryModel(marker.model);
                    this.elementsToMediaQueryModel.set(bar, marker.model);
                    this.elementsToCSSLocations.set(bar, marker.locations);
                    bar.classList.toggle('media-inspector-marker-inactive', !marker.active);
                    if (!container) {
                        throw new Error('Could not find container to render media queries into.');
                    }
                    container.appendChild(bar);
                }
            }
        },
        {
            key: "zoomFactor",
            value: function zoomFactor() {
                return _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ZoomManager.ZoomManager.instance().zoomFactor() / this.scale;
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(MediaQueryInspector.prototype), "wasShown", this).call(this);
                this.scheduleMediaQueriesUpdate();
            }
        },
        {
            key: "createElementFromMediaQueryModel",
            value: function createElementFromMediaQueryModel(model) {
                var zoomFactor = this.zoomFactor();
                var minWidthExpression = model.minWidthExpression();
                var maxWidthExpression = model.maxWidthExpression();
                var minWidthValue = minWidthExpression ? (minWidthExpression.computedLength() || 0) / zoomFactor : 0;
                var maxWidthValue = maxWidthExpression ? (maxWidthExpression.computedLength() || 0) / zoomFactor : 0;
                var result = document.createElement('div');
                result.classList.add('media-inspector-bar');
                if (model.section() === 0 /* Section.Max */ ) {
                    result.createChild('div', 'media-inspector-marker-spacer');
                    var markerElement = result.createChild('div', 'media-inspector-marker media-inspector-marker-max-width');
                    markerElement.style.width = maxWidthValue + 'px';
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip.Tooltip.install(markerElement, model.mediaText());
                    appendLabel(markerElement, model.maxWidthExpression(), false, false);
                    appendLabel(markerElement, model.maxWidthExpression(), true, true);
                    result.createChild('div', 'media-inspector-marker-spacer');
                }
                if (model.section() === 1 /* Section.MinMax */ ) {
                    result.createChild('div', 'media-inspector-marker-spacer');
                    var leftElement = result.createChild('div', 'media-inspector-marker media-inspector-marker-min-max-width');
                    leftElement.style.width = (maxWidthValue - minWidthValue) * 0.5 + 'px';
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip.Tooltip.install(leftElement, model.mediaText());
                    appendLabel(leftElement, model.maxWidthExpression(), true, false);
                    appendLabel(leftElement, model.minWidthExpression(), false, true);
                    result.createChild('div', 'media-inspector-marker-spacer').style.flex = '0 0 ' + minWidthValue + 'px';
                    var rightElement = result.createChild('div', 'media-inspector-marker media-inspector-marker-min-max-width');
                    rightElement.style.width = (maxWidthValue - minWidthValue) * 0.5 + 'px';
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip.Tooltip.install(rightElement, model.mediaText());
                    appendLabel(rightElement, model.minWidthExpression(), true, false);
                    appendLabel(rightElement, model.maxWidthExpression(), false, true);
                    result.createChild('div', 'media-inspector-marker-spacer');
                }
                if (model.section() === 2 /* Section.Min */ ) {
                    var leftElement1 = result.createChild('div', 'media-inspector-marker media-inspector-marker-min-width media-inspector-marker-min-width-left');
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip.Tooltip.install(leftElement1, model.mediaText());
                    appendLabel(leftElement1, model.minWidthExpression(), false, false);
                    result.createChild('div', 'media-inspector-marker-spacer').style.flex = '0 0 ' + minWidthValue + 'px';
                    var rightElement1 = result.createChild('div', 'media-inspector-marker media-inspector-marker-min-width media-inspector-marker-min-width-right');
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip.Tooltip.install(rightElement1, model.mediaText());
                    appendLabel(rightElement1, model.minWidthExpression(), true, true);
                }
                function appendLabel(marker, expression, atLeft, leftAlign) {
                    if (!expression) {
                        return;
                    }
                    marker.createChild('div', 'media-inspector-marker-label-container ' + (atLeft ? 'media-inspector-marker-label-container-left' : 'media-inspector-marker-label-container-right')).createChild('span', 'media-inspector-marker-label ' + (leftAlign ? 'media-inspector-label-left' : 'media-inspector-label-right')).textContent = expression.value() + expression.unit();
                }
                return result;
            }
        }
    ]);
    return MediaQueryInspector;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Widget.Widget);
var MediaQueryUIModel = /*#__PURE__*/ function() {
    "use strict";
    function MediaQueryUIModel(cssMedia, minWidthExpression, maxWidthExpression, active) {
        _class_call_check(this, MediaQueryUIModel);
        _define_property(this, "cssMedia", void 0);
        _define_property(this, "minWidthExpressionInternal", void 0);
        _define_property(this, "maxWidthExpressionInternal", void 0);
        _define_property(this, "activeInternal", void 0);
        _define_property(this, "sectionInternal", void 0);
        _define_property(this, "rawLocationInternal", void 0);
        this.cssMedia = cssMedia;
        this.minWidthExpressionInternal = minWidthExpression;
        this.maxWidthExpressionInternal = maxWidthExpression;
        this.activeInternal = active;
        if (maxWidthExpression && !minWidthExpression) {
            this.sectionInternal = 0 /* Section.Max */ ;
        } else if (minWidthExpression && maxWidthExpression) {
            this.sectionInternal = 1 /* Section.MinMax */ ;
        } else {
            this.sectionInternal = 2 /* Section.Min */ ;
        }
    }
    _create_class(MediaQueryUIModel, [
        {
            key: "equals",
            value: function equals(other) {
                return this.compareTo(other) === 0;
            }
        },
        {
            key: "dimensionsEqual",
            value: function dimensionsEqual(other) {
                var thisMinWidthExpression = this.minWidthExpression();
                var otherMinWidthExpression = other.minWidthExpression();
                var thisMaxWidthExpression = this.maxWidthExpression();
                var otherMaxWidthExpression = other.maxWidthExpression();
                var sectionsEqual = this.section() === other.section();
                // If there isn't an other min width expression, they aren't equal, so the optional chaining operator is safe to use here.
                var minWidthEqual = !thisMinWidthExpression || thisMinWidthExpression.computedLength() === (otherMinWidthExpression === null || otherMinWidthExpression === void 0 ? void 0 : otherMinWidthExpression.computedLength());
                var maxWidthEqual = !thisMaxWidthExpression || thisMaxWidthExpression.computedLength() === (otherMaxWidthExpression === null || otherMaxWidthExpression === void 0 ? void 0 : otherMaxWidthExpression.computedLength());
                return sectionsEqual && minWidthEqual && maxWidthEqual;
            }
        },
        {
            key: "compareTo",
            value: function compareTo(other) {
                if (this.section() !== other.section()) {
                    return this.section() - other.section();
                }
                if (this.dimensionsEqual(other)) {
                    var myLocation = this.rawLocation();
                    var otherLocation = other.rawLocation();
                    if (!myLocation && !otherLocation) {
                        return _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.compare(this.mediaText(), other.mediaText());
                    }
                    if (myLocation && !otherLocation) {
                        return 1;
                    }
                    if (!myLocation && otherLocation) {
                        return -1;
                    }
                    if (this.active() !== other.active()) {
                        return this.active() ? -1 : 1;
                    }
                    if (!myLocation || !otherLocation) {
                        // This conditional never runs, because it's dealt with above, but
                        // TypeScript can't follow that by this point both myLocation and
                        // otherLocation must exist.
                        return 0;
                    }
                    return _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.compare(myLocation.url, otherLocation.url) || myLocation.lineNumber - otherLocation.lineNumber || myLocation.columnNumber - otherLocation.columnNumber;
                }
                var thisMaxWidthExpression = this.maxWidthExpression();
                var otherMaxWidthExpression = other.maxWidthExpression();
                var thisMaxLength = thisMaxWidthExpression ? thisMaxWidthExpression.computedLength() || 0 : 0;
                var otherMaxLength = otherMaxWidthExpression ? otherMaxWidthExpression.computedLength() || 0 : 0;
                var thisMinWidthExpression = this.minWidthExpression();
                var otherMinWidthExpression = other.minWidthExpression();
                var thisMinLength = thisMinWidthExpression ? thisMinWidthExpression.computedLength() || 0 : 0;
                var otherMinLength = otherMinWidthExpression ? otherMinWidthExpression.computedLength() || 0 : 0;
                if (this.section() === 0 /* Section.Max */ ) {
                    return otherMaxLength - thisMaxLength;
                }
                if (this.section() === 2 /* Section.Min */ ) {
                    return thisMinLength - otherMinLength;
                }
                return thisMinLength - otherMinLength || otherMaxLength - thisMaxLength;
            }
        },
        {
            key: "section",
            value: function section() {
                return this.sectionInternal;
            }
        },
        {
            key: "mediaText",
            value: function mediaText() {
                return this.cssMedia.text || '';
            }
        },
        {
            key: "rawLocation",
            value: function rawLocation() {
                if (!this.rawLocationInternal) {
                    this.rawLocationInternal = this.cssMedia.rawLocation();
                }
                return this.rawLocationInternal;
            }
        },
        {
            key: "minWidthExpression",
            value: function minWidthExpression() {
                return this.minWidthExpressionInternal;
            }
        },
        {
            key: "maxWidthExpression",
            value: function maxWidthExpression() {
                return this.maxWidthExpressionInternal;
            }
        },
        {
            key: "active",
            value: function active() {
                return this.activeInternal;
            }
        }
    ], [
        {
            key: "createFromMediaQuery",
            value: function createFromMediaQuery(cssMedia, mediaQuery) {
                var maxWidthExpression = null;
                var maxWidthPixels = Number.MAX_VALUE;
                var minWidthExpression = null;
                var minWidthPixels = Number.MIN_VALUE;
                var expressions = mediaQuery.expressions();
                if (!expressions) {
                    return null;
                }
                for(var i = 0; i < expressions.length; ++i){
                    var expression = expressions[i];
                    var feature = expression.feature();
                    if (feature.indexOf('width') === -1) {
                        continue;
                    }
                    var pixels = expression.computedLength();
                    if (feature.startsWith('max-') && pixels && pixels < maxWidthPixels) {
                        maxWidthExpression = expression;
                        maxWidthPixels = pixels;
                    } else if (feature.startsWith('min-') && pixels && pixels > minWidthPixels) {
                        minWidthExpression = expression;
                        minWidthPixels = pixels;
                    }
                }
                if (minWidthPixels > maxWidthPixels || !maxWidthExpression && !minWidthExpression) {
                    return null;
                }
                return new MediaQueryUIModel(cssMedia, minWidthExpression, maxWidthExpression, mediaQuery.active());
            }
        }
    ]);
    return MediaQueryUIModel;
} //# sourceMappingURL=MediaQueryInspector.js.map
();


}),
"./panels/emulation/mediaQueryInspector.css.legacy.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    cssContent: "/*\n * Copyright 2015 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n/* Media query bars */\n\n.media-inspector-view {\n  height: 50px;\n}\n\n.media-inspector-marker-container {\n  height: 14px;\n  margin: 2px 0;\n  position: relative;\n}\n\n.media-inspector-bar {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  pointer-events: none;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n\n.media-inspector-marker {\n  flex: none;\n  pointer-events: auto;\n  margin: 1px 0;\n  white-space: nowrap;\n  z-index: auto;\n  position: relative;\n}\n\n.media-inspector-marker-spacer {\n  flex: auto;\n}\n\n.media-inspector-marker:hover {\n  margin: -1px 0;\n  opacity: 100%;\n}\n\n.media-inspector-marker-min-width {\n  flex: auto;\n  background-color: var(--sys-color-yellow-container);\n  border-right: 2px solid var(--sys-color-yellow-bright);\n  border-left: 2px solid var(--sys-color-yellow-bright);\n\n  &:hover {\n    background-color: color-mix(in sRGB, var(--sys-color-yellow-container), var(--sys-color-yellow-bright) 30%);\n  }\n}\n\n.media-inspector-marker-min-width-right {\n  border-left: 2px solid var(--sys-color-yellow-bright);\n}\n\n.media-inspector-marker-min-width-left {\n  border-right: 2px solid var(--sys-color-yellow-bright);\n}\n\n.media-inspector-marker-min-max-width {\n  background-color: var(--sys-color-tertiary-container);\n  border-left: 2px solid var(--sys-color-tertiary);\n  border-right: 2px solid var(--sys-color-tertiary);\n}\n\n.media-inspector-marker-min-max-width:hover {\n  z-index: 1;\n}\n\n.media-inspector-marker-max-width {\n  background-color: var(--sys-color-inverse-primary);\n  border-right: 2px solid var(--sys-color-primary-bright);\n  border-left: 2px solid var(--sys-color-primary-bright);\n}\n\n/* Clear background colors when query is not active and not hovering */\n\n.media-inspector-marker-inactive .media-inspector-marker-min-width:not(:hover) {\n  background-color: var(--sys-color-surface-yellow);\n}\n\n.media-inspector-marker-inactive .media-inspector-marker-min-max-width:not(:hover) {\n  background-color: color-mix(in sRGB, var(--sys-color-tertiary-container), var(--sys-color-cdt-base-container) 30%);\n}\n\n.media-inspector-marker-inactive .media-inspector-marker-max-width:not(:hover) {\n  background-color: var(--sys-color-tonal-container);\n}\n\n/* Media query labels */\n\n.media-inspector-marker-label-container {\n  position: absolute;\n  z-index: 1;\n}\n\n.media-inspector-marker:not(:hover) .media-inspector-marker-label-container {\n  display: none;\n}\n\n.media-inspector-marker-label-container-left {\n  left: -2px;\n}\n\n.media-inspector-marker-label-container-right {\n  right: -2px;\n}\n\n.media-inspector-marker-label {\n  color: var(--sys-color-on-surface);\n  position: absolute;\n  top: 1px;\n  bottom: 0;\n  font-size: 12px;\n  pointer-events: none;\n}\n\n.media-inspector-label-right {\n  right: 4px;\n}\n\n.media-inspector-label-left {\n  left: 4px;\n}\n\n/*# sourceURL=mediaQueryInspector.css */\n"
});


}),

}]);