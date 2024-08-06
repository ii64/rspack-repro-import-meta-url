"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_elements_components_ElementsBreadcrumbs_js"], {
"./panels/elements/components/ElementsBreadcrumbs.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ElementsBreadcrumbs: function() { return ElementsBreadcrumbs; },
  NodeSelectedEvent: function() { return NodeSelectedEvent; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/helpers/helpers.js */ "./ui/components/helpers/helpers.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_components_node_text_node_text_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/node_text/node_text.js */ "./ui/components/node_text/node_text.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _elementsBreadcrumbs_css_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./elementsBreadcrumbs.css.js */ "./panels/elements/components/elementsBreadcrumbs.css.js");
/* harmony import */var _ElementsBreadcrumbsUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ElementsBreadcrumbsUtils.js */ "./panels/elements/components/ElementsBreadcrumbsUtils.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
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
        "devtools-elements-breadcrumbs"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n      <button\n        class=",
        "\n        @click=",
        "\n        ?disabled=",
        "\n        aria-label=",
        "\n        title=",
        ">\n        <",
        " .data=",
        ">\n        </",
        ">\n      </button>\n      "
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "\n                <li class=",
        "\n                  data-node-id=",
        '\n                  data-crumb="true"\n                >\n                  <a href="#"\n                    draggable=false\n                    class="crumb-link"\n                    jslog=',
        "\n                    @click=",
        "\n                    @mousemove=",
        "\n                    @mouseleave=",
        "\n                    @focus=",
        "\n                    @blur=",
        "\n                  ><",
        " data-node-title=",
        " .data=",
        "></",
        "></a>\n                </li>"
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        '\n      <nav class="crumbs" aria-label=',
        " jslog=",
        ">\n        ",
        '\n\n        <div class="crumbs-window" @scroll=',
        '>\n          <ul class="crumbs-scroll-container">\n            ',
        "\n          </ul>\n        </div>\n        ",
        "\n      </nav>\n    "
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}









var UIStrings = {
    /**
     * @description Accessible name for DOM tree breadcrumb navigation.
     */ breadcrumbs: 'DOM tree breadcrumbs',
    /**
     * @description A label/tooltip for a button that scrolls the breadcrumbs bar to the left to show more entries.
     */ scrollLeft: 'Scroll left',
    /**
     * @description A label/tooltip for a button that scrolls the breadcrumbs bar to the right to show more entries.
     */ scrollRight: 'Scroll right'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/elements/components/ElementsBreadcrumbs.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var NodeSelectedEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(NodeSelectedEvent, Event1);
    var _super = _create_super(NodeSelectedEvent);
    function NodeSelectedEvent(node) {
        _class_call_check(this, NodeSelectedEvent);
        var _this;
        _this = _super.call(this, NodeSelectedEvent.eventName, {});
        _define_property(_assert_this_initialized(_this), "legacyDomNode", void 0);
        _this.legacyDomNode = node.legacyDomNode;
        return _this;
    }
    return NodeSelectedEvent;
}(_wrap_native_super(Event));
_define_property(NodeSelectedEvent, "eventName", 'breadcrumbsnodeselected');
var coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_4__.RenderCoordinator.RenderCoordinator.instance();
var _shadow = /*#__PURE__*/ new WeakMap(), _resizeObserver = /*#__PURE__*/ new WeakMap(), _renderBound = /*#__PURE__*/ new WeakMap(), _crumbsData = /*#__PURE__*/ new WeakMap(), _selectedDOMNode = /*#__PURE__*/ new WeakMap(), _overflowing = /*#__PURE__*/ new WeakMap(), _userScrollPosition = /*#__PURE__*/ new WeakMap(), _isObservingResize = /*#__PURE__*/ new WeakMap(), _userHasManuallyScrolled = /*#__PURE__*/ new WeakMap(), _onCrumbClick = /*#__PURE__*/ new WeakSet(), _checkForOverflowOnResize = /*#__PURE__*/ new WeakSet(), _onCrumbMouseMove = /*#__PURE__*/ new WeakSet(), _onCrumbMouseLeave = /*#__PURE__*/ new WeakSet(), _onCrumbFocus = /*#__PURE__*/ new WeakSet(), _onCrumbBlur = /*#__PURE__*/ new WeakSet(), _engageResizeObserver = /*#__PURE__*/ new WeakSet(), _checkForOverflow = /*#__PURE__*/ new WeakSet(), _onCrumbsWindowScroll = /*#__PURE__*/ new WeakSet(), _updateScrollState = /*#__PURE__*/ new WeakSet(), _onOverflowClick = /*#__PURE__*/ new WeakSet(), _renderOverflowButton = /*#__PURE__*/ new WeakSet(), _render = /*#__PURE__*/ new WeakSet(), _ensureSelectedNodeIsVisible = /*#__PURE__*/ new WeakSet();
var ElementsBreadcrumbs = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(ElementsBreadcrumbs, HTMLElement1);
    var _super = _create_super(ElementsBreadcrumbs);
    function ElementsBreadcrumbs() {
        _class_call_check(this, ElementsBreadcrumbs);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _onCrumbClick);
        /*
     * When the window is resized, we need to check if we either:
     * 1) overflowing, and now the window is big enough that we don't need to
     * 2) not overflowing, and now the window is small and we do need to
     *
     * If either of these are true, we toggle the overflowing state accordingly and trigger a re-render.
     */ _class_private_method_init(_assert_this_initialized(_this), _checkForOverflowOnResize);
        _class_private_method_init(_assert_this_initialized(_this), _onCrumbMouseMove);
        _class_private_method_init(_assert_this_initialized(_this), _onCrumbMouseLeave);
        _class_private_method_init(_assert_this_initialized(_this), _onCrumbFocus);
        _class_private_method_init(_assert_this_initialized(_this), _onCrumbBlur);
        _class_private_method_init(_assert_this_initialized(_this), _engageResizeObserver);
        /**
     * This method runs after render or resize and checks if the crumbs are too large
     * for their container and therefore we need to render the overflow buttons at
     * either end which the user can use to scroll back and forward through the crumbs.
     * If it finds that we are overflowing, it sets the instance variable and
     * triggers a re-render. If we are not overflowing, this method returns and
     * does nothing.
     */ _class_private_method_init(_assert_this_initialized(_this), _checkForOverflow);
        _class_private_method_init(_assert_this_initialized(_this), _onCrumbsWindowScroll);
        _class_private_method_init(_assert_this_initialized(_this), _updateScrollState);
        _class_private_method_init(_assert_this_initialized(_this), _onOverflowClick);
        _class_private_method_init(_assert_this_initialized(_this), _renderOverflowButton);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_method_init(_assert_this_initialized(_this), _ensureSelectedNodeIsVisible);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _resizeObserver, {
            writable: true,
            value: new ResizeObserver(function() {
                return _class_private_method_get(_this, _checkForOverflowOnResize, checkForOverflowOnResize).call(_assert_this_initialized(_this));
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _renderBound, {
            writable: true,
            value: _class_private_method_get(_this, _render, render).bind(_assert_this_initialized(_this))
        });
        _class_private_field_init(_assert_this_initialized(_this), _crumbsData, {
            writable: true,
            value: []
        });
        _class_private_field_init(_assert_this_initialized(_this), _selectedDOMNode, {
            writable: true,
            value: null
        });
        _class_private_field_init(_assert_this_initialized(_this), _overflowing, {
            writable: true,
            value: false
        });
        _class_private_field_init(_assert_this_initialized(_this), _userScrollPosition, {
            writable: true,
            value: 'start'
        });
        _class_private_field_init(_assert_this_initialized(_this), _isObservingResize, {
            writable: true,
            value: false
        });
        _class_private_field_init(_assert_this_initialized(_this), _userHasManuallyScrolled, {
            writable: true,
            value: false
        });
        return _this;
    }
    _create_class(ElementsBreadcrumbs, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _elementsBreadcrumbs_css_js__WEBPACK_IMPORTED_MODULE_7__["default"]
                ];
            }
        },
        {
            key: "data",
            set: function set(data) {
                _class_private_field_set(this, _selectedDOMNode, data.selectedNode);
                _class_private_field_set(this, _crumbsData, data.crumbs);
                _class_private_field_set(this, _userHasManuallyScrolled, false);
                void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__.ScheduledRender.scheduleRender(this, _class_private_field_get(this, _renderBound));
            }
        },
        {
            key: "disconnectedCallback",
            value: function disconnectedCallback() {
                _class_private_field_set(this, _isObservingResize, false);
                _class_private_field_get(this, _resizeObserver).disconnect();
            }
        }
    ]);
    return ElementsBreadcrumbs;
}(_wrap_native_super(HTMLElement));
_define_property(ElementsBreadcrumbs, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.literal(_templateObject()));
function onCrumbClick(node) {
    var _this = this;
    return function(event) {
        event.preventDefault();
        _this.dispatchEvent(new NodeSelectedEvent(node));
    };
}
function checkForOverflowOnResize() {
    return _checkForOverflowOnResize1.apply(this, arguments);
}
function _checkForOverflowOnResize1() {
    _checkForOverflowOnResize1 = _async_to_generator(function() {
        var crumbScrollContainer, crumbWindow, crumbWindowWidth, scrollContainerWidth;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    crumbScrollContainer = _class_private_field_get(this, _shadow).querySelector('.crumbs-scroll-container');
                    crumbWindow = _class_private_field_get(this, _shadow).querySelector('.crumbs-window');
                    if (!crumbScrollContainer || !crumbWindow) {
                        return [
                            2
                        ];
                    }
                    return [
                        4,
                        coordinator.read(function() {
                            return crumbWindow.clientWidth;
                        })
                    ];
                case 1:
                    crumbWindowWidth = _state.sent();
                    return [
                        4,
                        coordinator.read(function() {
                            return crumbScrollContainer.clientWidth;
                        })
                    ];
                case 2:
                    scrollContainerWidth = _state.sent();
                    if (_class_private_field_get(this, _overflowing)) {
                        // We currently have overflow buttons.
                        // If the content while displaying buttons still fits, then we can
                        // rerender without overflow.
                        if (scrollContainerWidth < crumbWindowWidth) {
                            _class_private_field_set(this, _overflowing, false);
                        }
                    } else {
                        // We currently do not have overflow buttons.
                        // If the content won't fit anymore, then rerender with overflow.
                        if (scrollContainerWidth > crumbWindowWidth) {
                            _class_private_field_set(this, _overflowing, true);
                        }
                    }
                    void _class_private_method_get(this, _ensureSelectedNodeIsVisible, ensureSelectedNodeIsVisible).call(this);
                    void _class_private_method_get(this, _updateScrollState, updateScrollState).call(this, crumbWindow);
                    return [
                        2
                    ];
            }
        });
    });
    return _checkForOverflowOnResize1.apply(this, arguments);
}
function onCrumbMouseMove(node) {
    return function() {
        return node.highlightNode();
    };
}
function onCrumbMouseLeave(node) {
    return function() {
        return node.clearHighlight();
    };
}
function onCrumbFocus(node) {
    return function() {
        return node.highlightNode();
    };
}
function onCrumbBlur(node) {
    return function() {
        return node.clearHighlight();
    };
}
function engageResizeObserver() {
    if (!_class_private_field_get(this, _resizeObserver) || _class_private_field_get(this, _isObservingResize) === true) {
        return;
    }
    var crumbs = _class_private_field_get(this, _shadow).querySelector('.crumbs');
    if (!crumbs) {
        return;
    }
    _class_private_field_get(this, _resizeObserver).observe(crumbs);
    _class_private_field_set(this, _isObservingResize, true);
}
function checkForOverflow() {
    return _checkForOverflow1.apply(this, arguments);
}
function _checkForOverflow1() {
    _checkForOverflow1 = _async_to_generator(function() {
        var crumbScrollContainer, crumbWindow, crumbWindowWidth, scrollContainerWidth;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    crumbScrollContainer = _class_private_field_get(this, _shadow).querySelector('.crumbs-scroll-container');
                    crumbWindow = _class_private_field_get(this, _shadow).querySelector('.crumbs-window');
                    if (!crumbScrollContainer || !crumbWindow) {
                        return [
                            2
                        ];
                    }
                    return [
                        4,
                        coordinator.read(function() {
                            return crumbWindow.clientWidth;
                        })
                    ];
                case 1:
                    crumbWindowWidth = _state.sent();
                    return [
                        4,
                        coordinator.read(function() {
                            return crumbScrollContainer.clientWidth;
                        })
                    ];
                case 2:
                    scrollContainerWidth = _state.sent();
                    if (_class_private_field_get(this, _overflowing)) {
                        // We currently have overflow buttons.
                        // If the content while displaying buttons still fits, then we can
                        // rerender without overflow.
                        if (scrollContainerWidth < crumbWindowWidth) {
                            _class_private_field_set(this, _overflowing, false);
                            void _class_private_method_get(this, _render, render).call(this);
                        }
                    } else {
                        // We currently do not have overflow buttons.
                        // If the content won't fit anymore, then rerender with overflow.
                        if (scrollContainerWidth > crumbWindowWidth) {
                            _class_private_field_set(this, _overflowing, true);
                            void _class_private_method_get(this, _render, render).call(this);
                        }
                    }
                    return [
                        2
                    ];
            }
        });
    });
    return _checkForOverflow1.apply(this, arguments);
}
function onCrumbsWindowScroll(event) {
    if (!event.target) {
        return;
    }
    /* not all Events are DOM Events so the TS Event def doesn't have
         * .target typed as an Element but in this case we're getting this
         * from a DOM event so we're confident of having .target and it
         * being an element
         */ var scrollWindow = event.target;
    _class_private_method_get(this, _updateScrollState, updateScrollState).call(this, scrollWindow);
}
function updateScrollState(scrollWindow) {
    var maxScrollLeft = scrollWindow.scrollWidth - scrollWindow.clientWidth;
    var currentScroll = scrollWindow.scrollLeft;
    /**
         * When we check if the user is at the beginning or end of the crumbs (such
         * that we disable the relevant button - you can't keep scrolling right if
         * you're at the last breadcrumb) we want to not check exact numbers but
         * give a bit of padding. This means if the user has scrolled to nearly the
         * end but not quite (e.g. there are 2 more pixels they could scroll) we'll
         * mark it as them being at the end. This variable controls how much padding
         * we apply. So if a user has scrolled to within 10px of the end, we count
         * them as being at the end and disable the button.
         */ var scrollBeginningAndEndPadding = 10;
    if (currentScroll < scrollBeginningAndEndPadding) {
        _class_private_field_set(this, _userScrollPosition, 'start');
    } else if (currentScroll >= maxScrollLeft - scrollBeginningAndEndPadding) {
        _class_private_field_set(this, _userScrollPosition, 'end');
    } else {
        _class_private_field_set(this, _userScrollPosition, 'middle');
    }
    void _class_private_method_get(this, _render, render).call(this);
}
function onOverflowClick(direction) {
    var _this = this;
    return function() {
        _class_private_field_set(_this, _userHasManuallyScrolled, true);
        var scrollWindow = _class_private_field_get(_this, _shadow).querySelector('.crumbs-window');
        if (!scrollWindow) {
            return;
        }
        var amountToScrollOnClick = scrollWindow.clientWidth / 2;
        var newScrollAmount = direction === 'left' ? Math.max(Math.floor(scrollWindow.scrollLeft - amountToScrollOnClick), 0) : scrollWindow.scrollLeft + amountToScrollOnClick;
        scrollWindow.scrollTo({
            behavior: 'smooth',
            left: newScrollAmount
        });
    };
}
function renderOverflowButton(direction, disabled) {
    var _obj;
    var buttonStyles = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.Directives.classMap((_obj = {
        overflow: true
    }, _define_property(_obj, direction, true), _define_property(_obj, "hidden", !_class_private_field_get(this, _overflowing)), _obj));
    var tooltipString = direction === 'left' ? i18nString(UIStrings.scrollLeft) : i18nString(UIStrings.scrollRight);
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html(_templateObject1(), buttonStyles, _class_private_method_get(this, _onOverflowClick, onOverflowClick).call(this, direction), disabled, tooltipString, tooltipString, _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon.litTagName, {
        iconName: 'triangle-' + direction,
        color: 'var(--sys-color-on-surface)',
        width: '12px',
        height: '10px'
    }, _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon.litTagName);
// clang-format on
}
function render() {
    var _this = this;
    var crumbs = (0,_ElementsBreadcrumbsUtils_js__WEBPACK_IMPORTED_MODULE_8__.crumbsToRender)(_class_private_field_get(this, _crumbsData), _class_private_field_get(this, _selectedDOMNode));
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html(_templateObject3(), i18nString(UIStrings.breadcrumbs), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.elementsBreadcrumbs(), _class_private_method_get(this, _renderOverflowButton, renderOverflowButton).call(this, 'left', _class_private_field_get(this, _userScrollPosition) === 'start'), _class_private_method_get(this, _onCrumbsWindowScroll, onCrumbsWindowScroll), crumbs.map(function(crumb) {
        var crumbClasses = {
            crumb: true,
            selected: crumb.selected
        };
        // eslint-disable-next-line rulesdir/ban_a_tags_in_lit_html
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html(_templateObject2(), _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.Directives.classMap(crumbClasses), crumb.node.id, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.item().track({
            click: true
        }), _class_private_method_get(_this, _onCrumbClick, onCrumbClick).call(_this, crumb.node), _class_private_method_get(_this, _onCrumbMouseMove, onCrumbMouseMove).call(_this, crumb.node), _class_private_method_get(_this, _onCrumbMouseLeave, onCrumbMouseLeave).call(_this, crumb.node), _class_private_method_get(_this, _onCrumbFocus, onCrumbFocus).call(_this, crumb.node), _class_private_method_get(_this, _onCrumbBlur, onCrumbBlur).call(_this, crumb.node), _ui_components_node_text_node_text_js__WEBPACK_IMPORTED_MODULE_3__.NodeText.NodeText.litTagName, crumb.title.main, {
            nodeTitle: crumb.title.main,
            nodeId: crumb.title.extras.id,
            nodeClasses: crumb.title.extras.classes
        }, _ui_components_node_text_node_text_js__WEBPACK_IMPORTED_MODULE_3__.NodeText.NodeText.litTagName);
    }), _class_private_method_get(this, _renderOverflowButton, renderOverflowButton).call(this, 'right', _class_private_field_get(this, _userScrollPosition) === 'end')), _class_private_field_get(this, _shadow), {
        host: this
    });
    // clang-format on
    void _class_private_method_get(this, _checkForOverflow, checkForOverflow).call(this);
    _class_private_method_get(this, _engageResizeObserver, engageResizeObserver).call(this);
    void _class_private_method_get(this, _ensureSelectedNodeIsVisible, ensureSelectedNodeIsVisible).call(this);
}
function ensureSelectedNodeIsVisible() {
    return _ensureSelectedNodeIsVisible1.apply(this, arguments);
}
function _ensureSelectedNodeIsVisible1() {
    _ensureSelectedNodeIsVisible1 = _async_to_generator(function() {
        var activeCrumbId, activeCrumb;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    /*
         * If the user has manually scrolled the crumbs in either direction, we
         * effectively hand control over the scrolling down to them. This is to
         * prevent the user manually scrolling to the end, and then us scrolling
         * them back to the selected node. The moment they click either scroll
         * button we set userHasManuallyScrolled, and we reset it when we get new
         * data in. This means if the user clicks on a different element in the
         * tree, we will auto-scroll that element into view, because we'll get new
         * data and hence the flag will be reset.
         */ if (!_class_private_field_get(this, _selectedDOMNode) || !_class_private_field_get(this, _shadow) || !_class_private_field_get(this, _overflowing) || _class_private_field_get(this, _userHasManuallyScrolled)) {
                        return [
                            2
                        ];
                    }
                    activeCrumbId = _class_private_field_get(this, _selectedDOMNode).id;
                    activeCrumb = _class_private_field_get(this, _shadow).querySelector('.crumb[data-node-id="'.concat(activeCrumbId, '"]'));
                    if (!activeCrumb) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        coordinator.scroll(function() {
                            activeCrumb.scrollIntoView({
                                // We only want to scroll smoothly when the user is clicking the
                                // buttons manually. If we are automatically scrolling, we could be
                                // scrolling a long distance, so just jump there right away. This
                                // most commonly occurs when the user first opens DevTools on a
                                // deeply nested element, and the slow scrolling of the breadcrumbs
                                // is just a distraction and not useful.
                                behavior: 'auto'
                            });
                        })
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
    });
    return _ensureSelectedNodeIsVisible1.apply(this, arguments);
}
customElements.define('devtools-elements-breadcrumbs', ElementsBreadcrumbs); //# sourceMappingURL=ElementsBreadcrumbs.js.map


}),
"./panels/elements/components/ElementsBreadcrumbsUtils.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  crumbsToRender: function() { return crumbsToRender; },
  determineElementTitle: function() { return determineElementTitle; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var UIStrings = {
    /**
     * @description Text in Elements Breadcrumbs of the Elements panel. Indicates that a HTML element
     * is a text node, meaning it contains text only and no other HTML elements. Should be translatd.
     */ text: '(text)'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/elements/components/ElementsBreadcrumbsUtils.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var crumbsToRender = function(crumbs, selectedNode) {
    if (!selectedNode) {
        return [];
    }
    return crumbs.filter(function(crumb) {
        return crumb.nodeType !== Node.DOCUMENT_NODE;
    }).map(function(crumb) {
        return {
            title: determineElementTitle(crumb),
            selected: crumb.id === selectedNode.id,
            node: crumb,
            originalNode: crumb.legacyDomNode
        };
    }).reverse();
};
var makeCrumbTitle = function(main) {
    var extras = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return {
        main: main,
        extras: extras
    };
};
var determineElementTitle = function(domNode) {
    switch(domNode.nodeType){
        case Node.ELEMENT_NODE:
            {
                if (domNode.pseudoType) {
                    return makeCrumbTitle('::' + domNode.pseudoType);
                }
                var crumbTitle = makeCrumbTitle(domNode.nodeNameNicelyCased);
                var id = domNode.getAttribute('id');
                if (id) {
                    crumbTitle.extras.id = id;
                }
                var classAttribute = domNode.getAttribute('class');
                if (classAttribute) {
                    var classes = new Set(classAttribute.split(/\s+/));
                    crumbTitle.extras.classes = Array.from(classes);
                }
                return crumbTitle;
            }
        case Node.TEXT_NODE:
            return makeCrumbTitle(i18nString(UIStrings.text));
        case Node.COMMENT_NODE:
            return makeCrumbTitle('<!-->');
        case Node.DOCUMENT_TYPE_NODE:
            return makeCrumbTitle('<!doctype>');
        case Node.DOCUMENT_FRAGMENT_NODE:
            return makeCrumbTitle(domNode.shadowRootType ? '#shadow-root' : domNode.nodeNameNicelyCased);
        default:
            return makeCrumbTitle(domNode.nodeNameNicelyCased);
    }
}; //# sourceMappingURL=ElementsBreadcrumbsUtils.js.map


}),
"./panels/elements/components/elementsBreadcrumbs.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2021 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  --override-node-text-label-color: var(--sys-color-token-tag);\n  --override-node-text-class-color: var(--sys-color-token-attribute);\n  --override-node-text-id-color: var(--sys-color-token-attribute);\n  --override-node-text-multiple-descriptors-id: var(--sys-color-on-surface);\n  --override-node-text-multiple-descriptors-class: var(--sys-color-token-property);\n}\n\n.crumbs {\n  display: inline-flex;\n  align-items: stretch;\n  width: 100%;\n  overflow: hidden;\n  pointer-events: auto;\n  cursor: default;\n  white-space: nowrap;\n  position: relative;\n  background: var(--sys-color-cdt-base-container);\n  font-size: inherit;\n  font-family: inherit;\n}\n\n.crumbs-window {\n  flex-grow: 2;\n  overflow: hidden;\n}\n\n.crumbs-scroll-container {\n  display: inline-flex;\n  margin: 0;\n  padding: 0;\n}\n\n.crumb {\n  display: block;\n  padding: 0 7px;\n  line-height: 23px;\n  white-space: nowrap;\n}\n\n.overflow {\n  padding: 0 5px;\n  font-weight: bold;\n  display: block;\n  border: none;\n  flex-grow: 0;\n  flex-shrink: 0;\n  text-align: center;\n  background-color: var(--sys-color-cdt-base-container);\n  color: var(--sys-color-token-subtle);\n  margin: 1px;\n  outline: 1px solid var(--sys-color-neutral-outline);\n}\n\n.overflow.hidden {\n  display: none;\n}\n\n.overflow:disabled {\n  opacity: 50%;\n}\n\n.overflow:focus {\n  outline-color: var(--sys-color-primary);\n}\n\n.overflow:not(:disabled):hover {\n  background-color: var(--sys-color-state-hover-on-subtle);\n  color: var(--sys-color-on-surface);\n}\n\n.crumb-link {\n  text-decoration: none;\n  color: inherit;\n}\n\n.crumb:hover {\n  background: var(--sys-color-state-hover-on-subtle);\n}\n\n.crumb.selected {\n  background: var(--sys-color-tonal-container);\n}\n\n.crumb:focus {\n  outline: var(--sys-color-primary) auto 1px;\n}\n\n/*# sourceURL=elementsBreadcrumbs.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);