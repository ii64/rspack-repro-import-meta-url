"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_emulation_DeviceModeView_js"], {
"./panels/emulation/DeviceModeView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DeviceModeView: function() { return DeviceModeView; },
  Ruler: function() { return Ruler; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/emulation/emulation.js */ "./models/emulation/emulation.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _DeviceModeToolbar_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DeviceModeToolbar.js */ "./panels/emulation/DeviceModeToolbar.js");
/* harmony import */var _deviceModeView_css_legacy_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./deviceModeView.css.legacy.js */ "./panels/emulation/deviceModeView.css.legacy.js");
/* harmony import */var _MediaQueryInspector_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MediaQueryInspector.js */ "./panels/emulation/MediaQueryInspector.js");
// Copyright 2015 The Chromium Authors. All rights reserved.
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
     *@description Bottom resizer element title in Device Mode View of the Device Toolbar
     */ doubleclickForFullHeight: 'Double-click for full height',
    /**
     * @description Name of a device that the user can select to emulate. Small mobile device.
     * Translation of this phrase should be limited to 10 characters.
     */ mobileS: 'Mobile S',
    /**
     * @description Name of a device that the user can select to emulate. Medium mobile device.
     * Translation of this phrase should be limited to 10 characters.
     */ mobileM: 'Mobile M',
    /**
     * @description Name of a device that the user can select to emulate. Large mobile device.
     * Translation of this phrase should be limited to 10 characters.
     */ mobileL: 'Mobile L',
    /**
     * @description Name of a device that the user can select to emulate. Tablet device.
     * Translation of this phrase should be limited to 10 characters.
     */ tablet: 'Tablet',
    /**
     * @description Name of a device that the user can select to emulate. Laptop device.
     * Translation of this phrase should be limited to 10 characters.
     */ laptop: 'Laptop',
    /**
     * @description Name of a device that the user can select to emulate. Large laptop device.
     * Translation of this phrase should be limited to 10 characters.
     */ laptopL: 'Laptop L'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/emulation/DeviceModeView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
var DeviceModeView = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(DeviceModeView, _UI_Widget_VBox);
    var _super = _create_super(DeviceModeView);
    function DeviceModeView() {
        _class_call_check(this, DeviceModeView);
        var _this;
        _this = _super.call(this, true);
        _define_property(_assert_this_initialized(_this), "wrapperInstance", void 0);
        _define_property(_assert_this_initialized(_this), "blockElementToWidth", void 0);
        _define_property(_assert_this_initialized(_this), "model", void 0);
        _define_property(_assert_this_initialized(_this), "mediaInspector", void 0);
        _define_property(_assert_this_initialized(_this), "showMediaInspectorSetting", void 0);
        _define_property(_assert_this_initialized(_this), "showRulersSetting", void 0);
        _define_property(_assert_this_initialized(_this), "topRuler", void 0);
        _define_property(_assert_this_initialized(_this), "leftRuler", void 0);
        _define_property(_assert_this_initialized(_this), "presetBlocks", void 0);
        _define_property(_assert_this_initialized(_this), "responsivePresetsContainer", void 0);
        _define_property(_assert_this_initialized(_this), "screenArea", void 0);
        _define_property(_assert_this_initialized(_this), "pageArea", void 0);
        _define_property(_assert_this_initialized(_this), "outlineImage", void 0);
        _define_property(_assert_this_initialized(_this), "contentClip", void 0);
        _define_property(_assert_this_initialized(_this), "contentArea", void 0);
        _define_property(_assert_this_initialized(_this), "rightResizerElement", void 0);
        _define_property(_assert_this_initialized(_this), "leftResizerElement", void 0);
        _define_property(_assert_this_initialized(_this), "bottomResizerElement", void 0);
        _define_property(_assert_this_initialized(_this), "bottomRightResizerElement", void 0);
        _define_property(_assert_this_initialized(_this), "bottomLeftResizerElement", void 0);
        _define_property(_assert_this_initialized(_this), "cachedResizable", void 0);
        _define_property(_assert_this_initialized(_this), "mediaInspectorContainer", void 0);
        _define_property(_assert_this_initialized(_this), "screenImage", void 0);
        _define_property(_assert_this_initialized(_this), "toolbar", void 0);
        _define_property(_assert_this_initialized(_this), "slowPositionStart", void 0);
        _define_property(_assert_this_initialized(_this), "resizeStart", void 0);
        _define_property(_assert_this_initialized(_this), "cachedCssScreenRect", void 0);
        _define_property(_assert_this_initialized(_this), "cachedCssVisiblePageRect", void 0);
        _define_property(_assert_this_initialized(_this), "cachedOutlineRect", void 0);
        _define_property(_assert_this_initialized(_this), "cachedMediaInspectorVisible", void 0);
        _define_property(_assert_this_initialized(_this), "cachedShowRulers", void 0);
        _define_property(_assert_this_initialized(_this), "cachedScale", void 0);
        _define_property(_assert_this_initialized(_this), "handleWidth", void 0);
        _define_property(_assert_this_initialized(_this), "handleHeight", void 0);
        _this.blockElementToWidth = new WeakMap();
        _this.setMinimumSize(150, 150);
        _this.element.classList.add('device-mode-view');
        _this.registerRequiredCSS(_deviceModeView_css_legacy_js__WEBPACK_IMPORTED_MODULE_8__["default"]);
        _this.model = _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.DeviceModeModel.instance();
        _this.model.addEventListener("Updated" /* EmulationModel.DeviceModeModel.Events.Updated */ , _this.updateUI, _assert_this_initialized(_this));
        _this.mediaInspector = new _MediaQueryInspector_js__WEBPACK_IMPORTED_MODULE_9__.MediaQueryInspector(function() {
            return _this.model.appliedDeviceSize().width;
        }, _this.model.setWidth.bind(_this.model), new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(0));
        _this.showMediaInspectorSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('show-media-query-inspector');
        _this.showMediaInspectorSetting.addChangeListener(_this.updateUI, _assert_this_initialized(_this));
        _this.showRulersSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('emulation.show-rulers');
        _this.showRulersSetting.addChangeListener(_this.updateUI, _assert_this_initialized(_this));
        _this.topRuler = new Ruler(true, _this.model.setWidthAndScaleToFit.bind(_this.model));
        _this.topRuler.element.classList.add('device-mode-ruler-top');
        _this.leftRuler = new Ruler(false, _this.model.setHeightAndScaleToFit.bind(_this.model));
        _this.leftRuler.element.classList.add('device-mode-ruler-left');
        _this.createUI();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ZoomManager.ZoomManager.instance().addEventListener("ZoomChanged" /* UI.ZoomManager.Events.ZoomChanged */ , _this.zoomChanged, _assert_this_initialized(_this));
        return _this;
    }
    _create_class(DeviceModeView, [
        {
            key: "createUI",
            value: function createUI() {
                this.toolbar = new _DeviceModeToolbar_js__WEBPACK_IMPORTED_MODULE_7__.DeviceModeToolbar(this.model, this.showMediaInspectorSetting, this.showRulersSetting);
                this.contentElement.appendChild(this.toolbar.element());
                this.contentClip = this.contentElement.createChild('div', 'device-mode-content-clip vbox');
                this.responsivePresetsContainer = this.contentClip.createChild('div', 'device-mode-presets-container');
                this.responsivePresetsContainer.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.responsivePresets()));
                this.populatePresetsContainer();
                this.mediaInspectorContainer = this.contentClip.createChild('div', 'device-mode-media-container');
                this.contentArea = this.contentClip.createChild('div', 'device-mode-content-area');
                this.outlineImage = this.contentArea.createChild('img', 'device-mode-outline-image hidden fill');
                this.outlineImage.addEventListener('load', this.onImageLoaded.bind(this, this.outlineImage, true), false);
                this.outlineImage.addEventListener('error', this.onImageLoaded.bind(this, this.outlineImage, false), false);
                this.screenArea = this.contentArea.createChild('div', 'device-mode-screen-area');
                this.screenImage = this.screenArea.createChild('img', 'device-mode-screen-image hidden');
                this.screenImage.addEventListener('load', this.onImageLoaded.bind(this, this.screenImage, true), false);
                this.screenImage.addEventListener('error', this.onImageLoaded.bind(this, this.screenImage, false), false);
                this.bottomRightResizerElement = this.screenArea.createChild('div', 'device-mode-resizer device-mode-bottom-right-resizer');
                this.bottomRightResizerElement.createChild('div', '');
                this.createResizer(this.bottomRightResizerElement, 2, 1);
                this.bottomLeftResizerElement = this.screenArea.createChild('div', 'device-mode-resizer device-mode-bottom-left-resizer');
                this.bottomLeftResizerElement.createChild('div', '');
                this.createResizer(this.bottomLeftResizerElement, -2, 1);
                this.rightResizerElement = this.screenArea.createChild('div', 'device-mode-resizer device-mode-right-resizer');
                this.rightResizerElement.createChild('div', '');
                this.createResizer(this.rightResizerElement, 2, 0);
                this.leftResizerElement = this.screenArea.createChild('div', 'device-mode-resizer device-mode-left-resizer');
                this.leftResizerElement.createChild('div', '');
                this.createResizer(this.leftResizerElement, -2, 0);
                this.bottomResizerElement = this.screenArea.createChild('div', 'device-mode-resizer device-mode-bottom-resizer');
                this.bottomResizerElement.createChild('div', '');
                this.createResizer(this.bottomResizerElement, 0, 1);
                this.bottomResizerElement.addEventListener('dblclick', this.model.setHeight.bind(this.model, 0), false);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip.Tooltip.install(this.bottomResizerElement, i18nString(UIStrings.doubleclickForFullHeight));
                this.pageArea = this.screenArea.createChild('div', 'device-mode-page-area');
                this.pageArea.createChild('slot');
            }
        },
        {
            key: "populatePresetsContainer",
            value: function populatePresetsContainer() {
                var sizes = [
                    320,
                    375,
                    425,
                    768,
                    1024,
                    1440,
                    2560
                ];
                var titles = [
                    i18nString(UIStrings.mobileS),
                    i18nString(UIStrings.mobileM),
                    i18nString(UIStrings.mobileL),
                    i18nString(UIStrings.tablet),
                    i18nString(UIStrings.laptop),
                    i18nString(UIStrings.laptopL),
                    '4K'
                ];
                this.presetBlocks = [];
                var inner = this.responsivePresetsContainer.createChild('div', 'device-mode-presets-container-inner');
                for(var i = sizes.length - 1; i >= 0; --i){
                    var outer = inner.createChild('div', 'fill device-mode-preset-bar-outer');
                    var block = outer.createChild('div', 'device-mode-preset-bar');
                    block.createChild('span').textContent = titles[i] + ' \u2013 ' + sizes[i] + 'px';
                    block.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.action().track({
                        click: true
                    }).context("device-mode-preset-".concat(sizes[i], "px"))));
                    block.addEventListener('click', applySize.bind(this, sizes[i]), false);
                    this.blockElementToWidth.set(block, sizes[i]);
                    this.presetBlocks.push(block);
                }
                function applySize(width, e) {
                    this.model.emulate(_models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Type.Responsive, null, null);
                    this.model.setWidthAndScaleToFit(width);
                    e.consume();
                }
            }
        },
        {
            key: "createResizer",
            value: function createResizer(element, widthFactor, heightFactor) {
                var resizer = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ResizerWidget.ResizerWidget();
                element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.slider('device-mode-resizer').track({
                    drag: true
                })));
                resizer.addElement(element);
                var cursor = widthFactor ? 'ew-resize' : 'ns-resize';
                if (widthFactor * heightFactor > 0) {
                    cursor = 'nwse-resize';
                }
                if (widthFactor * heightFactor < 0) {
                    cursor = 'nesw-resize';
                }
                resizer.setCursor(cursor);
                resizer.addEventListener("ResizeStart" /* UI.ResizerWidget.Events.ResizeStart */ , this.onResizeStart, this);
                resizer.addEventListener("ResizeUpdateXY" /* UI.ResizerWidget.Events.ResizeUpdateXY */ , this.onResizeUpdate.bind(this, widthFactor, heightFactor));
                resizer.addEventListener("ResizeEnd" /* UI.ResizerWidget.Events.ResizeEnd */ , this.onResizeEnd, this);
                return resizer;
            }
        },
        {
            key: "onResizeStart",
            value: function onResizeStart() {
                this.slowPositionStart = null;
                var rect = this.model.screenRect();
                this.resizeStart = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Geometry.Size(rect.width, rect.height);
            }
        },
        {
            key: "onResizeUpdate",
            value: function onResizeUpdate(widthFactor, heightFactor, event) {
                if (event.data.shiftKey !== Boolean(this.slowPositionStart)) {
                    this.slowPositionStart = event.data.shiftKey ? {
                        x: event.data.currentX,
                        y: event.data.currentY
                    } : null;
                }
                var cssOffsetX = event.data.currentX - event.data.startX;
                var cssOffsetY = event.data.currentY - event.data.startY;
                if (this.slowPositionStart) {
                    cssOffsetX = (event.data.currentX - this.slowPositionStart.x) / 10 + this.slowPositionStart.x - event.data.startX;
                    cssOffsetY = (event.data.currentY - this.slowPositionStart.y) / 10 + this.slowPositionStart.y - event.data.startY;
                }
                if (widthFactor && this.resizeStart) {
                    var dipOffsetX = cssOffsetX * _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ZoomManager.ZoomManager.instance().zoomFactor();
                    var newWidth = this.resizeStart.width + dipOffsetX * widthFactor;
                    newWidth = Math.round(newWidth / this.model.scale());
                    if (newWidth >= _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.MinDeviceSize && newWidth <= _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.MaxDeviceSize) {
                        this.model.setWidth(newWidth);
                    }
                }
                if (heightFactor && this.resizeStart) {
                    var dipOffsetY = cssOffsetY * _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ZoomManager.ZoomManager.instance().zoomFactor();
                    var newHeight = this.resizeStart.height + dipOffsetY * heightFactor;
                    newHeight = Math.round(newHeight / this.model.scale());
                    if (newHeight >= _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.MinDeviceSize && newHeight <= _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.MaxDeviceSize) {
                        this.model.setHeight(newHeight);
                    }
                }
            }
        },
        {
            key: "exitHingeMode",
            value: function exitHingeMode() {
                if (this.model) {
                    this.model.exitHingeMode();
                }
            }
        },
        {
            key: "onResizeEnd",
            value: function onResizeEnd() {
                delete this.resizeStart;
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.ResizedViewInResponsiveMode);
            }
        },
        {
            key: "updateUI",
            value: function updateUI() {
                function applyRect(element, rect) {
                    element.style.left = rect.left + 'px';
                    element.style.top = rect.top + 'px';
                    element.style.width = rect.width + 'px';
                    element.style.height = rect.height + 'px';
                }
                if (!this.isShowing()) {
                    return;
                }
                var zoomFactor = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ZoomManager.ZoomManager.instance().zoomFactor();
                var callDoResize = false;
                var showRulers = this.showRulersSetting.get() && this.model.type() !== _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Type.None;
                var contentAreaResized = false;
                var updateRulers = false;
                var cssScreenRect = this.model.screenRect().scale(1 / zoomFactor);
                if (!this.cachedCssScreenRect || !cssScreenRect.isEqual(this.cachedCssScreenRect)) {
                    applyRect(this.screenArea, cssScreenRect);
                    updateRulers = true;
                    callDoResize = true;
                    this.cachedCssScreenRect = cssScreenRect;
                }
                var cssVisiblePageRect = this.model.visiblePageRect().scale(1 / zoomFactor);
                if (!this.cachedCssVisiblePageRect || !cssVisiblePageRect.isEqual(this.cachedCssVisiblePageRect)) {
                    applyRect(this.pageArea, cssVisiblePageRect);
                    callDoResize = true;
                    this.cachedCssVisiblePageRect = cssVisiblePageRect;
                }
                var outlineRectFromModel = this.model.outlineRect();
                if (outlineRectFromModel) {
                    var outlineRect = outlineRectFromModel.scale(1 / zoomFactor);
                    if (!this.cachedOutlineRect || !outlineRect.isEqual(this.cachedOutlineRect)) {
                        applyRect(this.outlineImage, outlineRect);
                        callDoResize = true;
                        this.cachedOutlineRect = outlineRect;
                    }
                }
                this.contentClip.classList.toggle('device-mode-outline-visible', Boolean(this.model.outlineImage()));
                var resizable = this.model.type() === _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Type.Responsive;
                if (resizable !== this.cachedResizable) {
                    this.rightResizerElement.classList.toggle('hidden', !resizable);
                    this.leftResizerElement.classList.toggle('hidden', !resizable);
                    this.bottomResizerElement.classList.toggle('hidden', !resizable);
                    this.bottomRightResizerElement.classList.toggle('hidden', !resizable);
                    this.bottomLeftResizerElement.classList.toggle('hidden', !resizable);
                    this.cachedResizable = resizable;
                }
                var mediaInspectorVisible = this.showMediaInspectorSetting.get() && this.model.type() !== _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Type.None;
                if (mediaInspectorVisible !== this.cachedMediaInspectorVisible) {
                    if (mediaInspectorVisible) {
                        this.mediaInspector.show(this.mediaInspectorContainer);
                    } else {
                        this.mediaInspector.detach();
                    }
                    contentAreaResized = true;
                    callDoResize = true;
                    this.cachedMediaInspectorVisible = mediaInspectorVisible;
                }
                if (showRulers !== this.cachedShowRulers) {
                    this.contentClip.classList.toggle('device-mode-rulers-visible', showRulers);
                    if (showRulers) {
                        this.topRuler.show(this.contentArea);
                        this.leftRuler.show(this.contentArea);
                    } else {
                        this.topRuler.detach();
                        this.leftRuler.detach();
                    }
                    contentAreaResized = true;
                    callDoResize = true;
                    this.cachedShowRulers = showRulers;
                }
                if (this.model.scale() !== this.cachedScale) {
                    updateRulers = true;
                    callDoResize = true;
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = this.presetBlocks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var block = _step.value;
                            var blockWidth = this.blockElementToWidth.get(block);
                            if (!blockWidth) {
                                throw new Error('Could not get width for block.');
                            }
                            block.style.width = blockWidth * this.model.scale() + 'px';
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
                    this.cachedScale = this.model.scale();
                }
                this.toolbar.update();
                this.loadImage(this.screenImage, this.model.screenImage());
                this.loadImage(this.outlineImage, this.model.outlineImage());
                this.mediaInspector.setAxisTransform(this.model.scale());
                if (callDoResize) {
                    this.doResize();
                }
                if (updateRulers) {
                    this.topRuler.render(this.model.scale());
                    this.leftRuler.render(this.model.scale());
                    this.topRuler.element.positionAt(this.cachedCssScreenRect ? this.cachedCssScreenRect.left : 0, this.cachedCssScreenRect ? this.cachedCssScreenRect.top : 0);
                    this.leftRuler.element.positionAt(this.cachedCssScreenRect ? this.cachedCssScreenRect.left : 0, this.cachedCssScreenRect ? this.cachedCssScreenRect.top : 0);
                }
                if (contentAreaResized) {
                    this.contentAreaResized();
                }
            }
        },
        {
            key: "loadImage",
            value: function loadImage(element, srcset) {
                if (element.getAttribute('srcset') === srcset) {
                    return;
                }
                element.setAttribute('srcset', srcset);
                if (!srcset) {
                    element.classList.toggle('hidden', true);
                }
            }
        },
        {
            key: "onImageLoaded",
            value: function onImageLoaded(element, success) {
                element.classList.toggle('hidden', !success);
            }
        },
        {
            key: "setNonEmulatedAvailableSize",
            value: function setNonEmulatedAvailableSize(element) {
                if (this.model.type() !== _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Type.None) {
                    return;
                }
                var zoomFactor = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ZoomManager.ZoomManager.instance().zoomFactor();
                var rect = element.getBoundingClientRect();
                var availableSize = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Geometry.Size(Math.max(rect.width * zoomFactor, 1), Math.max(rect.height * zoomFactor, 1));
                this.model.setAvailableSize(availableSize, availableSize);
            }
        },
        {
            key: "contentAreaResized",
            value: function contentAreaResized() {
                var zoomFactor = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ZoomManager.ZoomManager.instance().zoomFactor();
                var rect = this.contentArea.getBoundingClientRect();
                var availableSize = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Geometry.Size(Math.max(rect.width * zoomFactor, 1), Math.max(rect.height * zoomFactor, 1));
                var preferredSize = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Geometry.Size(Math.max((rect.width - 2 * (this.handleWidth || 0)) * zoomFactor, 1), Math.max((rect.height - (this.handleHeight || 0)) * zoomFactor, 1));
                this.model.setAvailableSize(availableSize, preferredSize);
            }
        },
        {
            key: "measureHandles",
            value: function measureHandles() {
                var hidden = this.rightResizerElement.classList.contains('hidden');
                this.rightResizerElement.classList.toggle('hidden', false);
                this.bottomResizerElement.classList.toggle('hidden', false);
                this.handleWidth = this.rightResizerElement.offsetWidth;
                this.handleHeight = this.bottomResizerElement.offsetHeight;
                this.rightResizerElement.classList.toggle('hidden', hidden);
                this.bottomResizerElement.classList.toggle('hidden', hidden);
            }
        },
        {
            key: "zoomChanged",
            value: function zoomChanged() {
                delete this.handleWidth;
                delete this.handleHeight;
                if (this.isShowing()) {
                    this.measureHandles();
                    this.contentAreaResized();
                }
            }
        },
        {
            key: "onResize",
            value: function onResize() {
                if (this.isShowing()) {
                    this.contentAreaResized();
                }
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                this.measureHandles();
                this.toolbar.restore();
            }
        },
        {
            key: "willHide",
            value: function willHide() {
                this.model.emulate(_models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Type.None, null, null);
            }
        },
        {
            key: "captureScreenshot",
            value: function captureScreenshot() {
                var _this = this;
                return _async_to_generator(function() {
                    var screenshot, pageImage;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.model.captureScreenshot(false)
                                ];
                            case 1:
                                screenshot = _state.sent();
                                if (screenshot === null) {
                                    return [
                                        2
                                    ];
                                }
                                pageImage = new Image();
                                pageImage.src = 'data:image/png;base64,' + screenshot;
                                pageImage.onload = /*#__PURE__*/ _async_to_generator(function() {
                                    var scale, outlineRectFromModel, outlineRect, screenRect, visiblePageRect, contentLeft, contentTop, canvas, ctx;
                                    return _ts_generator(this, function(_state) {
                                        switch(_state.label){
                                            case 0:
                                                scale = pageImage.naturalWidth / _this.model.screenRect().width;
                                                outlineRectFromModel = _this.model.outlineRect();
                                                if (!outlineRectFromModel) {
                                                    throw new Error('Unable to take screenshot: no outlineRect available.');
                                                }
                                                outlineRect = outlineRectFromModel.scale(scale);
                                                screenRect = _this.model.screenRect().scale(scale);
                                                visiblePageRect = _this.model.visiblePageRect().scale(scale);
                                                contentLeft = screenRect.left + visiblePageRect.left - outlineRect.left;
                                                contentTop = screenRect.top + visiblePageRect.top - outlineRect.top;
                                                canvas = document.createElement('canvas');
                                                canvas.width = Math.floor(outlineRect.width);
                                                // Cap the height to not hit the GPU limit.
                                                // https://crbug.com/1260828
                                                canvas.height = Math.min(1 << 14, Math.floor(outlineRect.height));
                                                ctx = canvas.getContext('2d');
                                                if (!ctx) {
                                                    throw new Error('Could not get 2d context from canvas.');
                                                }
                                                ctx.imageSmoothingEnabled = false;
                                                if (!_this.model.outlineImage()) return [
                                                    3,
                                                    2
                                                ];
                                                return [
                                                    4,
                                                    _this.paintImage(ctx, _this.model.outlineImage(), outlineRect.relativeTo(outlineRect))
                                                ];
                                            case 1:
                                                _state.sent();
                                                _state.label = 2;
                                            case 2:
                                                if (!_this.model.screenImage()) return [
                                                    3,
                                                    4
                                                ];
                                                return [
                                                    4,
                                                    _this.paintImage(ctx, _this.model.screenImage(), screenRect.relativeTo(outlineRect))
                                                ];
                                            case 3:
                                                _state.sent();
                                                _state.label = 4;
                                            case 4:
                                                ctx.drawImage(pageImage, Math.floor(contentLeft), Math.floor(contentTop));
                                                _this.saveScreenshot(canvas);
                                                return [
                                                    2
                                                ];
                                        }
                                    });
                                });
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "captureFullSizeScreenshot",
            value: function captureFullSizeScreenshot() {
                var _this = this;
                return _async_to_generator(function() {
                    var screenshot;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.model.captureScreenshot(true)
                                ];
                            case 1:
                                screenshot = _state.sent();
                                if (screenshot === null) {
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    2,
                                    _this.saveScreenshotBase64(screenshot)
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "captureAreaScreenshot",
            value: function captureAreaScreenshot(clip) {
                var _this = this;
                return _async_to_generator(function() {
                    var screenshot;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.model.captureScreenshot(false, clip)
                                ];
                            case 1:
                                screenshot = _state.sent();
                                if (screenshot === null) {
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    2,
                                    _this.saveScreenshotBase64(screenshot)
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "saveScreenshotBase64",
            value: function saveScreenshotBase64(screenshot) {
                var _this = this;
                var pageImage = new Image();
                pageImage.src = 'data:image/png;base64,' + screenshot;
                pageImage.onload = function() {
                    var canvas = document.createElement('canvas');
                    canvas.width = pageImage.naturalWidth;
                    // Cap the height to not hit the GPU limit.
                    // https://crbug.com/1260828
                    canvas.height = Math.min(1 << 14, Math.floor(pageImage.naturalHeight));
                    var ctx = canvas.getContext('2d');
                    if (!ctx) {
                        throw new Error('Could not get 2d context for base64 screenshot.');
                    }
                    ctx.imageSmoothingEnabled = false;
                    ctx.drawImage(pageImage, 0, 0);
                    _this.saveScreenshot(canvas);
                };
            }
        },
        {
            key: "paintImage",
            value: function paintImage(ctx, src, rect) {
                return new Promise(function(resolve) {
                    var image = new Image();
                    image.crossOrigin = 'Anonymous';
                    image.srcset = src;
                    image.onerror = function() {
                        return resolve();
                    };
                    image.onload = function() {
                        ctx.drawImage(image, rect.left, rect.top, rect.width, rect.height);
                        resolve();
                    };
                });
            }
        },
        {
            key: "saveScreenshot",
            value: function saveScreenshot(canvas) {
                var url = this.model.inspectedURL();
                var fileName = '';
                if (url) {
                    var withoutFragment = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.removeURLFragment(url);
                    fileName = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.trimURL(withoutFragment);
                }
                var device = this.model.device();
                if (device && this.model.type() === _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Type.Device) {
                    fileName += "(".concat(device.title, ")");
                }
                var link = document.createElement('a');
                link.download = fileName + '.png';
                canvas.toBlob(function(blob) {
                    if (blob === null) {
                        return;
                    }
                    link.href = URL.createObjectURL(blob);
                    link.click();
                });
            }
        }
    ]);
    return DeviceModeView;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Widget.VBox);
var Ruler = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(Ruler, _UI_Widget_VBox);
    var _super = _create_super(Ruler);
    function Ruler(horizontal, applyCallback) {
        _class_call_check(this, Ruler);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "contentElementInternal", void 0);
        _define_property(_assert_this_initialized(_this), "horizontal", void 0);
        _define_property(_assert_this_initialized(_this), "scale", void 0);
        _define_property(_assert_this_initialized(_this), "count", void 0);
        _define_property(_assert_this_initialized(_this), "throttler", void 0);
        _define_property(_assert_this_initialized(_this), "applyCallback", void 0);
        _define_property(_assert_this_initialized(_this), "renderedScale", void 0);
        _define_property(_assert_this_initialized(_this), "renderedZoomFactor", void 0);
        _this.element.classList.add('device-mode-ruler');
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.deviceModeRuler().track({
            click: true
        })));
        _this.contentElementInternal = _this.element.createChild('div', 'device-mode-ruler-content').createChild('div', 'device-mode-ruler-inner');
        _this.horizontal = horizontal;
        _this.scale = 1;
        _this.count = 0;
        _this.throttler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(0);
        _this.applyCallback = applyCallback;
        return _this;
    }
    _create_class(Ruler, [
        {
            key: "render",
            value: function render(scale) {
                this.scale = scale;
                void this.throttler.schedule(this.update.bind(this));
            }
        },
        {
            key: "onResize",
            value: function onResize() {
                void this.throttler.schedule(this.update.bind(this));
            }
        },
        {
            key: "update",
            value: function update() {
                var zoomFactor = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ZoomManager.ZoomManager.instance().zoomFactor();
                var size = this.horizontal ? this.contentElementInternal.offsetWidth : this.contentElementInternal.offsetHeight;
                if (this.scale !== this.renderedScale || zoomFactor !== this.renderedZoomFactor) {
                    this.contentElementInternal.removeChildren();
                    this.count = 0;
                    this.renderedScale = this.scale;
                    this.renderedZoomFactor = zoomFactor;
                }
                var dipSize = size * zoomFactor / this.scale;
                var count = Math.ceil(dipSize / 5);
                var step = 1;
                if (this.scale < 0.8) {
                    step = 2;
                }
                if (this.scale < 0.6) {
                    step = 4;
                }
                if (this.scale < 0.4) {
                    step = 8;
                }
                if (this.scale < 0.2) {
                    step = 16;
                }
                if (this.scale < 0.1) {
                    step = 32;
                }
                for(var i = count; i < this.count; i++){
                    if (!(i % step)) {
                        var lastChild = this.contentElementInternal.lastChild;
                        if (lastChild) {
                            lastChild.remove();
                        }
                    }
                }
                for(var i1 = this.count; i1 < count; i1++){
                    if (i1 % step) {
                        continue;
                    }
                    var marker = this.contentElementInternal.createChild('div', 'device-mode-ruler-marker');
                    if (i1) {
                        if (this.horizontal) {
                            marker.style.left = 5 * i1 * this.scale / zoomFactor + 'px';
                        } else {
                            marker.style.top = 5 * i1 * this.scale / zoomFactor + 'px';
                        }
                        if (!(i1 % 20)) {
                            var text = marker.createChild('div', 'device-mode-ruler-text');
                            text.textContent = String(i1 * 5);
                            text.addEventListener('click', this.onMarkerClick.bind(this, i1 * 5), false);
                        }
                    }
                    if (!(i1 % 10)) {
                        marker.classList.add('device-mode-ruler-marker-large');
                    } else if (!(i1 % 5)) {
                        marker.classList.add('device-mode-ruler-marker-medium');
                    }
                }
                this.count = count;
                return Promise.resolve();
            }
        },
        {
            key: "onMarkerClick",
            value: function onMarkerClick(size) {
                this.applyCallback.call(null, size);
            }
        }
    ]);
    return Ruler;
} //# sourceMappingURL=DeviceModeView.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Widget.VBox);


}),
"./panels/emulation/deviceModeView.css.legacy.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    cssContent: "/*\n * Copyright 2015 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  overflow: hidden;\n  align-items: stretch;\n  flex: auto;\n  background-color: var(--app-color-toolbar-background);\n}\n\n.device-mode-toolbar {\n  flex: none;\n  background-color: var(--app-color-toolbar-background);\n  border-bottom: 1px solid var(--sys-color-divider);\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n}\n\n.device-mode-toolbar .toolbar {\n  overflow: hidden;\n  flex: 0 100000 auto;\n  padding: 0 5px;\n}\n\n.device-mode-toolbar .toolbar.device-mode-toolbar-fixed-size {\n  flex: 0 1 auto;\n}\n\n.device-mode-toolbar-options.toolbar {\n  position: sticky;\n  right: 0;\n  flex: none;\n}\n\n.device-mode-toolbar-spacer {\n  flex: 1 1 0;\n  display: flex;\n  flex-direction: row;\n  overflow: hidden;\n}\n\n.device-mode-content-clip {\n  overflow: hidden;\n  flex: auto;\n}\n\n.device-mode-media-container {\n  flex: none;\n  overflow: hidden;\n  box-shadow: inset 0 -1px var(--sys-color-divider);\n}\n\n.device-mode-content-clip:not(.device-mode-outline-visible) .device-mode-media-container {\n  margin-bottom: 20px;\n}\n\n.device-mode-presets-container {\n  flex: 0 0 20px;\n  display: flex;\n}\n\n.device-mode-presets-container-inner {\n  flex: auto;\n  justify-content: center;\n  position: relative;\n  background-color: var(--sys-color-surface1);\n  border-bottom: 1px solid var(--sys-color-divider);\n}\n\n.device-mode-presets-container:hover {\n  transition: opacity 0.1s;\n  transition-delay: 50ms;\n  opacity: 100%;\n}\n\n.device-mode-preset-bar-outer {\n  pointer-events: none;\n  display: flex;\n  justify-content: center;\n}\n\n.device-mode-preset-bar {\n  border-left: 2px solid var(--sys-color-on-base-divider);\n  border-right: 2px solid var(--sys-color-on-base-divider);\n  pointer-events: auto;\n  text-align: center;\n  flex: none;\n  color: var(--sys-color-on-surface);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  white-space: nowrap;\n  margin-bottom: 1px;\n}\n\n.device-mode-preset-bar:hover {\n  transition: background-color 0.1s;\n  transition-delay: 50ms;\n  background-color: var(--sys-color-state-hover-on-subtle);\n}\n\n.device-mode-preset-bar > span {\n  visibility: hidden;\n}\n\n.device-mode-preset-bar:hover > span {\n  transition: visibility 0.1s;\n  transition-delay: 50ms;\n  visibility: visible;\n}\n\n.device-mode-content-area {\n  flex: auto;\n  position: relative;\n  margin: 0;\n}\n\n.device-mode-screen-area {\n  position: absolute;\n  left: 0;\n  right: 0;\n  width: 0;\n  height: 0;\n  background-color: var(--sys-color-inverse-surface);\n}\n\n.device-mode-content-clip:not(.device-mode-outline-visible) .device-mode-screen-area {\n  --override-screen-area-box-shadow: hsl(240deg 3% 84%) 0 0 0 0.5px, hsl(0deg 0% 80% / 40%) 0 0 20px;\n\n  box-shadow: var(--override-screen-area-box-shadow);\n}\n\n.theme-with-dark-background .device-mode-content-clip:not(.device-mode-outline-visible) .device-mode-screen-area,\n:host-context(.theme-with-dark-background) .device-mode-content-clip:not(.device-mode-outline-visible) .device-mode-screen-area {\n  --override-screen-area-box-shadow: rgb(40 40 42) 0 0 0 0.5px, rgb(51 51 51 / 40%) 0 0 20px;\n}\n\n.device-mode-screen-image {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.device-mode-resizer {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  transition: background-color 0.1s ease, opacity 0.1s ease;\n}\n\n.device-mode-resizer:hover {\n  background-color: var(--sys-color-state-hover-on-subtle);\n  opacity: 100%;\n}\n\n.device-mode-resizer > div {\n  pointer-events: none;\n}\n\n.device-mode-right-resizer {\n  top: 0;\n  bottom: -1px;\n  right: -20px;\n  width: 20px;\n}\n\n.device-mode-left-resizer {\n  top: 0;\n  bottom: -1px;\n  left: -20px;\n  width: 20px;\n  opacity: 0%;\n}\n\n.device-mode-bottom-resizer {\n  left: 0;\n  right: -1px;\n  bottom: -20px;\n  height: 20px;\n}\n\n.device-mode-bottom-right-resizer {\n  left: 0;\n  top: 0;\n  right: -20px;\n  bottom: -20px;\n  background-color: var(--sys-color-surface1);\n}\n\n.device-mode-bottom-left-resizer {\n  left: -20px;\n  top: 0;\n  right: 0;\n  bottom: -20px;\n  opacity: 0%;\n}\n\n.device-mode-right-resizer > div {\n  content: var(--image-file-resizeHorizontal);\n  width: 6px;\n  height: 26px;\n}\n\n.device-mode-left-resizer > div {\n  content: var(--image-file-resizeHorizontal);\n  width: 6px;\n  height: 26px;\n}\n\n.device-mode-bottom-resizer > div {\n  content: var(--image-file-resizeVertical);\n  margin-bottom: -2px;\n  width: 26px;\n  height: 6px;\n}\n\n.device-mode-bottom-right-resizer > div {\n  position: absolute;\n  bottom: 3px;\n  right: 3px;\n  width: 13px;\n  height: 13px;\n  content: var(--image-file-resizeDiagonal);\n}\n\n.device-mode-bottom-left-resizer > div {\n  position: absolute;\n  bottom: 3px;\n  left: 3px;\n  width: 13px;\n  height: 13px;\n  content: var(--image-file-resizeDiagonal);\n  transform: rotate(90deg);\n}\n\n.device-mode-page-area {\n  position: absolute;\n  left: 0;\n  right: 0;\n  width: 0;\n  height: 0;\n  display: flex;\n  background-color: var(--sys-color-cdt-base-container);\n}\n\n.device-mode-ruler {\n  position: absolute;\n  overflow: visible;\n}\n\n.device-mode-ruler-top {\n  height: 20px;\n  right: 0;\n}\n\n.device-mode-ruler-left {\n  width: 20px;\n  bottom: 0;\n}\n\n.device-mode-ruler-content {\n  pointer-events: none;\n  position: absolute;\n  left: -20px;\n  top: -20px;\n}\n\n.device-mode-ruler-top .device-mode-ruler-content {\n  border-top: 1px solid transparent;\n  right: 0;\n  bottom: 20px;\n  background-color: var(--sys-color-cdt-base-container);\n}\n\n.device-mode-ruler-left .device-mode-ruler-content {\n  border-left: 1px solid transparent;\n  border-top: 1px solid transparent;\n  right: 20px;\n  bottom: 0;\n}\n\n.device-mode-content-clip.device-mode-outline-visible .device-mode-ruler-top .device-mode-ruler-content {\n  border-top: 1px solid var(--sys-color-token-subtle);\n}\n\n.device-mode-content-clip.device-mode-outline-visible .device-mode-ruler-left .device-mode-ruler-content {\n  border-left: 1px solid var(--sys-color-token-subtle);\n  border-top: 1px solid var(--sys-color-token-subtle);\n}\n\n.device-mode-ruler-inner {\n  position: absolute;\n}\n\n.device-mode-ruler-top .device-mode-ruler-inner {\n  top: 0;\n  bottom: 0;\n  left: 20px;\n  right: 0;\n  border-bottom: 1px solid var(--sys-color-token-subtle);\n}\n\n.device-mode-ruler-left .device-mode-ruler-inner {\n  left: 0;\n  right: 0;\n  top: 19px;\n  bottom: 0;\n  border-right: 1px solid var(--sys-color-token-subtle);\n  background-color: var(--sys-color-cdt-base-container);\n}\n\n.device-mode-ruler-marker {\n  position: absolute;\n}\n\n.device-mode-ruler-top .device-mode-ruler-marker {\n  width: 0;\n  height: 5px;\n  bottom: 0;\n  border-right: 1px solid var(--sys-color-token-subtle);\n  margin-right: -1px;\n}\n\n.device-mode-ruler-top .device-mode-ruler-marker.device-mode-ruler-marker-medium {\n  height: 10px;\n}\n\n.device-mode-ruler-top .device-mode-ruler-marker.device-mode-ruler-marker-large {\n  height: 15px;\n}\n\n.device-mode-ruler-left .device-mode-ruler-marker {\n  height: 0;\n  width: 5px;\n  right: 0;\n  border-bottom: 1px solid var(--sys-color-token-subtle);\n  margin-bottom: -1px;\n}\n\n.device-mode-ruler-left .device-mode-ruler-marker.device-mode-ruler-marker-medium {\n  width: 10px;\n}\n\n.device-mode-ruler-left .device-mode-ruler-marker.device-mode-ruler-marker-large {\n  width: 15px;\n}\n\n.device-mode-ruler-text {\n  color: var(--sys-color-token-subtle);\n  position: relative;\n  pointer-events: auto;\n}\n\n.device-mode-ruler-text:hover {\n  color: var(--sys-color-on-surface);\n}\n\n.device-mode-ruler-top .device-mode-ruler-text {\n  left: 2px;\n  top: -2px;\n}\n\n.device-mode-ruler-left .device-mode-ruler-text {\n  left: -4px;\n  top: -15px;\n  transform: rotate(270deg);\n}\n\n/*# sourceURL=deviceModeView.css */\n"
});


}),

}]);