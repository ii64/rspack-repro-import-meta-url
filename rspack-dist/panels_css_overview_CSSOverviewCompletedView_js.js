"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_css_overview_CSSOverviewCompletedView_js"], {
"./panels/css_overview/CSSOverviewCompletedView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CSSOverviewCompletedView: function() { return CSSOverviewCompletedView; },
  DetailsView: function() { return DetailsView; },
  ElementDetailsView: function() { return ElementDetailsView; },
  ElementNode: function() { return ElementNode; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/legacy/components/data_grid/data_grid.js */ "./ui/legacy/components/data_grid/data_grid.js");
/* harmony import */var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _cssOverviewCompletedView_css_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cssOverviewCompletedView.css.js */ "./panels/css_overview/cssOverviewCompletedView.css.js");
/* harmony import */var _CSSOverviewSidebarPanel_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./CSSOverviewSidebarPanel.js */ "./panels/css_overview/CSSOverviewSidebarPanel.js");
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
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
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
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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
        "<div>",
        "</div>"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        '<div class="horizontally-padded">',
        "</div>"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        '<div class="horizontally-padded">',
        "</div>"
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        '\n    <div class="vbox overview-completed-view">\n      <div $="summary" class="results-section horizontally-padded summary">\n        <h1>',
        '</h1>\n\n        <ul>\n          <li>\n            <div class="label">',
        '</div>\n            <div class="value">',
        '</div>\n          </li>\n          <li>\n            <div class="label">',
        '</div>\n            <div class="value">',
        '</div>\n          </li>\n          <li>\n            <div class="label">',
        '</div>\n            <div class="value">',
        '</div>\n          </li>\n          <li>\n            <div class="label">',
        '</div>\n            <div class="value">',
        '</div>\n          </li>\n          <li>\n            <div class="label">',
        '</div>\n            <div class="value">',
        '</div>\n          </li>\n          <li>\n            <div class="label">',
        '</div>\n            <div class="value">',
        '</div>\n          </li>\n          <li>\n            <div class="label">',
        '</div>\n            <div class="value">',
        '</div>\n          </li>\n          <li>\n            <div class="label">',
        '</div>\n            <div class="value">',
        '</div>\n          </li>\n          <li>\n            <div class="label">',
        '</div>\n            <div class="value">',
        '</div>\n          </li>\n          <li>\n            <div class="label">',
        '</div>\n            <div class="value">',
        '</div>\n          </li>\n          <li>\n            <div class="label">',
        '</div>\n            <div class="value">',
        '</div>\n          </li>\n        </ul>\n      </div>\n\n      <div $="colors" class="results-section horizontally-padded colors">\n        <h1>',
        "</h1>\n        <h2>",
        "</h2>\n        <ul>\n          ",
        "\n        </ul>\n\n        <h2>",
        "</h2>\n        <ul>\n          ",
        "\n        </ul>\n\n        ",
        "\n\n        <h2>",
        "</h2>\n        <ul>\n          ",
        "\n        </ul>\n\n        <h2>",
        "</h2>\n        <ul>\n          ",
        '\n        </ul>\n      </div>\n\n      <div $="font-info" class="results-section font-info">\n        <h1>',
        "</h1>\n        ",
        '\n      </div>\n\n      <div $="unused-declarations" class="results-section unused-declarations">\n        <h1>',
        "</h1>\n        ",
        '\n      </div>\n\n      <div $="media-queries" class="results-section media-queries">\n        <h1>',
        "</h1>\n        ",
        "\n      </div>\n    </div>"
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        '<section class="font-family"><h2>',
        "</h2> ",
        "</section>"
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _tagged_template_literal([
        "\n  ",
        "\n  "
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = _tagged_template_literal([
        "\n  <div>\n  <h3>",
        "</h3>\n  ",
        "\n  </div>"
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = _tagged_template_literal([
        '\n  <div class="font-metric">\n  ',
        "\n  </div>"
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject8() {
    var data = _tagged_template_literal([
        '<li>\n        <div class="title">',
        '</div>\n        <button data-type="',
        '" data-path="',
        '" data-',
        '="',
        '"\n        jslog="',
        '">\n          <div class="details">',
        '</div>\n          <div class="bar-container">\n            <div class="bar" style="width: ',
        '%;"></div>\n          </div>\n        </button>\n      </li>'
    ]);
    _templateObject8 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject9() {
    var data = _tagged_template_literal([
        "<ul>\n    ",
        "\n    </ul>"
    ]);
    _templateObject9 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject10() {
    var data = _tagged_template_literal([
        "\n  <h2>",
        "</h2>\n  <ul>\n  ",
        "\n  </ul>\n  "
    ]);
    _templateObject10 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject11() {
    var data = _tagged_template_literal([
        '<li>\n      <button\n        title="',
        '" aria-label="',
        '"\n        data-type="contrast" data-key="',
        '" data-section="contrast" class="block" $="color"\n        jslog="',
        '">\n        Text\n      </button>\n      <div class="block-title">\n        <div class="contrast-warning hidden" $="aa"><span class="threshold-label">',
        '</span></div>\n        <div class="contrast-warning hidden" $="aaa"><span class="threshold-label">',
        '</span></div>\n        <div class="contrast-warning hidden" $="apca"><span class="threshold-label">',
        "</span></div>\n      </div>\n    </li>"
    ]);
    _templateObject11 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject12() {
    var data = _tagged_template_literal([
        "<li>\n      <button title=",
        ' data-type="color" data-color="',
        '"\n        data-section="',
        '" class="block" $="color"\n        jslog="',
        '"></button>\n      <div class="block-title color-text">',
        "</div>\n    </li>"
    ]);
    _templateObject12 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject13() {
    var data = _tagged_template_literal([
        '\n        <div class="contrast-container-in-grid" $="container">\n          <span class="contrast-preview" style="border: ',
        ";\n          color: ",
        ";\n          background-color: ",
        ';">Aa</span>\n          <span>',
        "</span>\n        </div>\n      "
    ]);
    _templateObject13 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject14() {
    var data = _tagged_template_literal([
        "<span>",
        "</span>"
    ]);
    _templateObject14 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject15() {
    var data = _tagged_template_literal([
        "<span>",
        "</span>"
    ]);
    _templateObject15 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject16() {
    var data = _tagged_template_literal([
        "<span>",
        "</span>"
    ]);
    _templateObject16 = function _templateObject() {
        return data;
    };
    return data;
}













var UIStrings = {
    /**
     *@description Label for the summary in the CSS overview report
     */ overviewSummary: 'Overview summary',
    /**
     *@description Title of colors subsection in the CSS overview panel
     */ colors: 'Colors',
    /**
     *@description Title of font info subsection in the CSS overview panel
     */ fontInfo: 'Font info',
    /**
     *@description Label to denote unused declarations in the target page
     */ unusedDeclarations: 'Unused declarations',
    /**
     *@description Label for the number of media queries in the CSS overview report
     */ mediaQueries: 'Media queries',
    /**
     *@description Title of the Elements Panel
     */ elements: 'Elements',
    /**
     *@description Label for the number of External stylesheets in the CSS overview report
     */ externalStylesheets: 'External stylesheets',
    /**
     *@description Label for the number of inline style elements in the CSS overview report
     */ inlineStyleElements: 'Inline style elements',
    /**
     *@description Label for the number of style rules in CSS overview report
     */ styleRules: 'Style rules',
    /**
     *@description Label for the number of type selectors in the CSS overview report
     */ typeSelectors: 'Type selectors',
    /**
     *@description Label for the number of ID selectors in the CSS overview report
     */ idSelectors: 'ID selectors',
    /**
     *@description Label for the number of class selectors in the CSS overview report
     */ classSelectors: 'Class selectors',
    /**
     *@description Label for the number of universal selectors in the CSS overview report
     */ universalSelectors: 'Universal selectors',
    /**
     *@description Label for the number of Attribute selectors in the CSS overview report
     */ attributeSelectors: 'Attribute selectors',
    /**
     *@description Label for the number of non-simple selectors in the CSS overview report
     */ nonsimpleSelectors: 'Non-simple selectors',
    /**
     *@description Label for unique background colors in the CSS overview panel
     *@example {32} PH1
     */ backgroundColorsS: 'Background colors: {PH1}',
    /**
     *@description Label for unique text colors in the CSS overview panel
     *@example {32} PH1
     */ textColorsS: 'Text colors: {PH1}',
    /**
     *@description Label for unique fill colors in the CSS overview panel
     *@example {32} PH1
     */ fillColorsS: 'Fill colors: {PH1}',
    /**
     *@description Label for unique border colors in the CSS overview panel
     *@example {32} PH1
     */ borderColorsS: 'Border colors: {PH1}',
    /**
     *@description Label to indicate that there are no fonts in use
     */ thereAreNoFonts: 'There are no fonts.',
    /**
     *@description Message to show when no unused declarations in the target page
     */ thereAreNoUnusedDeclarations: 'There are no unused declarations.',
    /**
     *@description Message to show when no media queries are found in the target page
     */ thereAreNoMediaQueries: 'There are no media queries.',
    /**
     *@description Title of the Drawer for contrast issues in the CSS overview panel
     */ contrastIssues: 'Contrast issues',
    /**
     * @description Text to indicate how many times this CSS rule showed up.
     */ nOccurrences: '{n, plural, =1 {# occurrence} other {# occurrences}}',
    /**
     *@description Section header for contrast issues in the CSS overview panel
     *@example {1} PH1
     */ contrastIssuesS: 'Contrast issues: {PH1}',
    /**
     *@description Title of the button for a contrast issue in the CSS overview panel
     *@example {#333333} PH1
     *@example {#333333} PH2
     *@example {2} PH3
     */ textColorSOverSBackgroundResults: 'Text color {PH1} over {PH2} background results in low contrast for {PH3} elements',
    /**
     *@description Label aa text content in Contrast Details of the Color Picker
     */ aa: 'AA',
    /**
     *@description Label aaa text content in Contrast Details of the Color Picker
     */ aaa: 'AAA',
    /**
     *@description Label for the APCA contrast in Color Picker
     */ apca: 'APCA',
    /**
     *@description Label for the column in the element list in the CSS overview report
     */ element: 'Element',
    /**
     *@description Column header title denoting which declaration is unused
     */ declaration: 'Declaration',
    /**
     *@description Text for the source of something
     */ source: 'Source',
    /**
     *@description Text of a DOM element in Contrast Details of the Color Picker
     */ contrastRatio: 'Contrast ratio',
    /**
     *@description Accessible title of a table in the CSS overview elements.
     */ cssOverviewElements: 'CSS overview elements',
    /**
     *@description Title of the button to show the element in the CSS overview panel
     */ showElement: 'Show element'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/css_overview/CSSOverviewCompletedView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
function getBorderString(color) {
    var _color_as = color.as("hsl" /* Common.Color.Format.HSL */ ), h = _color_as.h, s = _color_as.s, l = _color_as.l;
    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);
    // Reduce the lightness of the border to make sure that there's always a visible outline.
    l = Math.max(0, l - 15);
    return "1px solid hsl(".concat(h, "deg ").concat(s, "% ").concat(l, "%)");
}
var _splitWidget = /*#__PURE__*/ new WeakMap(), _controller = /*#__PURE__*/ new WeakMap(), _formatter = /*#__PURE__*/ new WeakMap(), _mainContainer = /*#__PURE__*/ new WeakMap(), _resultsContainer = /*#__PURE__*/ new WeakMap(), _elementContainer = /*#__PURE__*/ new WeakMap(), _sideBar = /*#__PURE__*/ new WeakMap(), _cssModel = /*#__PURE__*/ new WeakMap(), _domModel = /*#__PURE__*/ new WeakMap(), _linkifier = /*#__PURE__*/ new WeakMap(), _viewMap = /*#__PURE__*/ new WeakMap(), _data = /*#__PURE__*/ new WeakMap(), _fragment = /*#__PURE__*/ new WeakMap(), _sideBarItemSelected = /*#__PURE__*/ new WeakSet(), _sideBarReset = /*#__PURE__*/ new WeakSet(), _reset = /*#__PURE__*/ new WeakSet(), _onClick = /*#__PURE__*/ new WeakSet(), _render = /*#__PURE__*/ new WeakSet(), _createElementsView = /*#__PURE__*/ new WeakSet(), _fontInfoToFragment = /*#__PURE__*/ new WeakSet(), _fontMetricsToFragment = /*#__PURE__*/ new WeakSet(), _groupToFragment = /*#__PURE__*/ new WeakSet(), _contrastIssuesToFragment = /*#__PURE__*/ new WeakSet(), _contrastIssueToFragment = /*#__PURE__*/ new WeakSet(), _colorsToFragment = /*#__PURE__*/ new WeakSet(), _sortColorsByLuminance = /*#__PURE__*/ new WeakSet(), _UI_Widget_VBox;
var CSSOverviewCompletedView = /*#__PURE__*/ function(_superClass) {
    "use strict";
    _inherits(CSSOverviewCompletedView, _superClass);
    var _super = _create_super(CSSOverviewCompletedView);
    function CSSOverviewCompletedView(controller) {
        _class_call_check(this, CSSOverviewCompletedView);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _sideBarItemSelected);
        _class_private_method_init(_assert_this_initialized(_this), _sideBarReset);
        _class_private_method_init(_assert_this_initialized(_this), _reset);
        _class_private_method_init(_assert_this_initialized(_this), _onClick);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_method_init(_assert_this_initialized(_this), _createElementsView);
        _class_private_method_init(_assert_this_initialized(_this), _fontInfoToFragment);
        _class_private_method_init(_assert_this_initialized(_this), _fontMetricsToFragment);
        _class_private_method_init(_assert_this_initialized(_this), _groupToFragment);
        _class_private_method_init(_assert_this_initialized(_this), _contrastIssuesToFragment);
        _class_private_method_init(_assert_this_initialized(_this), _contrastIssueToFragment);
        _class_private_method_init(_assert_this_initialized(_this), _colorsToFragment);
        _class_private_method_init(_assert_this_initialized(_this), _sortColorsByLuminance);
        _class_private_field_init(_assert_this_initialized(_this), _splitWidget, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _controller, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _formatter, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _mainContainer, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _resultsContainer, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _elementContainer, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _sideBar, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _cssModel, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _domModel, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _linkifier, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _viewMap, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _data, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _fragment, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(_assert_this_initialized(_this), _controller, controller);
        _class_private_field_set(_assert_this_initialized(_this), _formatter, new Intl.NumberFormat('en-US'));
        _class_private_field_set(_assert_this_initialized(_this), _splitWidget, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.SplitWidget.SplitWidget(true, false, undefined, 200));
        _class_private_field_get(_this, _splitWidget).show(_this.element);
        _class_private_field_set(_assert_this_initialized(_this), _mainContainer, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.SplitWidget.SplitWidget(true, true));
        _class_private_field_set(_assert_this_initialized(_this), _resultsContainer, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Widget.VBox());
        _class_private_field_set(_assert_this_initialized(_this), _elementContainer, new DetailsView());
        // If closing the last tab, collapse the sidebar.
        _class_private_field_get(_this, _elementContainer).addEventListener("TabClosed" /* Events.TabClosed */ , function(evt) {
            if (evt.data === 0) {
                _class_private_field_get(_this, _mainContainer).setSidebarMinimized(true);
            }
        });
        // Dupe the styles into the main container because of the shadow root will prevent outer styles.
        _class_private_field_get(_this, _mainContainer).setMainWidget(_class_private_field_get(_assert_this_initialized(_this), _resultsContainer));
        _class_private_field_get(_this, _mainContainer).setSidebarWidget(_class_private_field_get(_assert_this_initialized(_this), _elementContainer));
        _class_private_field_get(_this, _mainContainer).setVertical(false);
        _class_private_field_get(_this, _mainContainer).setSecondIsSidebar(true);
        _class_private_field_get(_this, _mainContainer).setSidebarMinimized(true);
        _class_private_field_set(_assert_this_initialized(_this), _sideBar, new _CSSOverviewSidebarPanel_js__WEBPACK_IMPORTED_MODULE_12__.CSSOverviewSidebarPanel());
        _class_private_field_get(_this, _sideBar).setMinimumSize(100, 25);
        _class_private_field_get(_this, _splitWidget).setSidebarWidget(_class_private_field_get(_assert_this_initialized(_this), _sideBar));
        _class_private_field_get(_this, _splitWidget).setMainWidget(_class_private_field_get(_assert_this_initialized(_this), _mainContainer));
        _class_private_field_set(_assert_this_initialized(_this), _linkifier, new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_8__.Linkifier.Linkifier(/* maxLinkLength */ 20, /* useLinkDecorator */ true));
        _class_private_field_set(_assert_this_initialized(_this), _viewMap, new Map());
        _class_private_field_get(_this, _sideBar).addItem(i18nString(UIStrings.overviewSummary), 'summary');
        _class_private_field_get(_this, _sideBar).addItem(i18nString(UIStrings.colors), 'colors');
        _class_private_field_get(_this, _sideBar).addItem(i18nString(UIStrings.fontInfo), 'font-info');
        _class_private_field_get(_this, _sideBar).addItem(i18nString(UIStrings.unusedDeclarations), 'unused-declarations');
        _class_private_field_get(_this, _sideBar).addItem(i18nString(UIStrings.mediaQueries), 'media-queries');
        _class_private_field_get(_this, _sideBar).select('summary', false);
        _class_private_field_get(_this, _sideBar).addEventListener("ItemSelected" /* SidebarEvents.ItemSelected */ , _class_private_method_get(_assert_this_initialized(_this), _sideBarItemSelected, sideBarItemSelected), _assert_this_initialized(_this));
        _class_private_field_get(_this, _sideBar).addEventListener("Reset" /* SidebarEvents.Reset */ , _class_private_method_get(_assert_this_initialized(_this), _sideBarReset, sideBarReset), _assert_this_initialized(_this));
        _class_private_field_get(_this, _controller).addEventListener("Reset" /* CSSOverViewControllerEvents.Reset */ , _class_private_method_get(_assert_this_initialized(_this), _reset, reset), _assert_this_initialized(_this));
        _class_private_field_get(_this, _controller).addEventListener("PopulateNodes" /* CSSOverViewControllerEvents.PopulateNodes */ , _class_private_method_get(_assert_this_initialized(_this), _createElementsView, createElementsView), _assert_this_initialized(_this));
        _class_private_field_get(_this, _resultsContainer).element.addEventListener('click', _class_private_method_get(_this, _onClick, onClick).bind(_assert_this_initialized(_this)));
        _class_private_field_set(_assert_this_initialized(_this), _data, null);
        return _this;
    }
    _create_class(CSSOverviewCompletedView, [
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(CSSOverviewCompletedView.prototype), "wasShown", this).call(this);
                _class_private_field_get(this, _mainContainer).registerCSSFiles([
                    _cssOverviewCompletedView_css_js__WEBPACK_IMPORTED_MODULE_11__["default"]
                ]);
                this.registerCSSFiles([
                    _cssOverviewCompletedView_css_js__WEBPACK_IMPORTED_MODULE_11__["default"]
                ]);
            // TODO(paullewis): update the links in the panels in case source has been .
            }
        },
        {
            key: "initializeModels",
            value: function initializeModels(target) {
                var cssModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.CSSModel.CSSModel);
                var domModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DOMModel.DOMModel);
                if (!cssModel || !domModel) {
                    throw new Error('Target must provide CSS and DOM models');
                }
                _class_private_field_set(this, _cssModel, cssModel);
                _class_private_field_set(this, _domModel, domModel);
            }
        },
        {
            key: "setOverviewData",
            value: function setOverviewData(data) {
                void _class_private_method_get(this, _render, render).call(this, data);
            }
        }
    ]);
    return CSSOverviewCompletedView;
}(_UI_Widget_VBox = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Widget.VBox);
_define_property(CSSOverviewCompletedView, "pushedNodes", new Set());
function sideBarItemSelected(event) {
    var data = event.data;
    var section = _class_private_field_get(this, _fragment).$(data.id);
    if (!section) {
        return;
    }
    section.scrollIntoView();
    // Set focus for keyboard invoked event
    if (!data.isMouseEvent && data.key === 'Enter') {
        var focusableElement = section.querySelector('button, [tabindex="0"]');
        focusableElement === null || focusableElement === void 0 ? void 0 : focusableElement.focus();
    }
}
function sideBarReset() {
    _class_private_field_get(this, _controller).dispatchEventToListeners("Reset" /* CSSOverViewControllerEvents.Reset */ );
}
function reset() {
    _class_private_field_get(this, _resultsContainer).element.removeChildren();
    _class_private_field_get(this, _mainContainer).setSidebarMinimized(true);
    _class_private_field_get(this, _elementContainer).closeTabs();
    _class_private_field_set(this, _viewMap, new Map());
    CSSOverviewCompletedView.pushedNodes.clear();
    _class_private_field_get(this, _sideBar).select('summary', false);
}
function onClick(evt) {
    if (!evt.target) {
        return;
    }
    var target = evt.target;
    var dataset = target.dataset;
    var type = dataset.type;
    if (!type || !_class_private_field_get(this, _data)) {
        return;
    }
    var payload;
    switch(type){
        case 'contrast':
            {
                var section = dataset.section;
                var key = dataset.key;
                if (!key) {
                    return;
                }
                // Remap the Set to an object that is the same shape as the unused declarations.
                var nodes = _class_private_field_get(this, _data).textColorContrastIssues.get(key) || [];
                payload = {
                    type: type,
                    key: key,
                    nodes: nodes,
                    section: section
                };
                break;
            }
        case 'color':
            {
                var color = dataset.color;
                var section1 = dataset.section;
                if (!color) {
                    return;
                }
                var nodes1;
                switch(section1){
                    case 'text':
                        nodes1 = _class_private_field_get(this, _data).textColors.get(color);
                        break;
                    case 'background':
                        nodes1 = _class_private_field_get(this, _data).backgroundColors.get(color);
                        break;
                    case 'fill':
                        nodes1 = _class_private_field_get(this, _data).fillColors.get(color);
                        break;
                    case 'border':
                        nodes1 = _class_private_field_get(this, _data).borderColors.get(color);
                        break;
                }
                if (!nodes1) {
                    return;
                }
                // Remap the Set to an object that is the same shape as the unused declarations.
                nodes1 = Array.from(nodes1).map(function(nodeId) {
                    return {
                        nodeId: nodeId
                    };
                });
                payload = {
                    type: type,
                    color: color,
                    nodes: nodes1,
                    section: section1
                };
                break;
            }
        case 'unused-declarations':
            {
                var declaration = dataset.declaration;
                if (!declaration) {
                    return;
                }
                var nodes2 = _class_private_field_get(this, _data).unusedDeclarations.get(declaration);
                if (!nodes2) {
                    return;
                }
                payload = {
                    type: type,
                    declaration: declaration,
                    nodes: nodes2
                };
                break;
            }
        case 'media-queries':
            {
                var text = dataset.text;
                if (!text) {
                    return;
                }
                var nodes3 = _class_private_field_get(this, _data).mediaQueries.get(text);
                if (!nodes3) {
                    return;
                }
                payload = {
                    type: type,
                    text: text,
                    nodes: nodes3
                };
                break;
            }
        case 'font-info':
            {
                var value = dataset.value;
                if (!dataset.path) {
                    return;
                }
                var _dataset_path_split = _sliced_to_array(dataset.path.split('/'), 2), fontFamily = _dataset_path_split[0], fontMetric = _dataset_path_split[1];
                if (!value) {
                    return;
                }
                var fontFamilyInfo = _class_private_field_get(this, _data).fontInfo.get(fontFamily);
                if (!fontFamilyInfo) {
                    return;
                }
                var fontMetricInfo = fontFamilyInfo.get(fontMetric);
                if (!fontMetricInfo) {
                    return;
                }
                var nodesIds = fontMetricInfo.get(value);
                if (!nodesIds) {
                    return;
                }
                var nodes4 = nodesIds.map(function(nodeId) {
                    return {
                        nodeId: nodeId
                    };
                });
                var name = "".concat(value, " (").concat(fontFamily, ", ").concat(fontMetric, ")");
                payload = {
                    type: type,
                    name: name,
                    nodes: nodes4
                };
                break;
            }
        default:
            return;
    }
    evt.consume();
    _class_private_field_get(this, _controller).dispatchEventToListeners("PopulateNodes" /* CSSOverViewControllerEvents.PopulateNodes */ , {
        payload: payload
    });
    _class_private_field_get(this, _mainContainer).setSidebarMinimized(false);
}
function render(data) {
    return _render1.apply(this, arguments);
}
function _render1() {
    _render1 = _async_to_generator(function(data) {
        var _$_class_private_field_get, elementCount, backgroundColors, textColors, textColorContrastIssues, fillColors, borderColors, globalStyleStats, mediaQueries, unusedDeclarations, fontInfo, sortedBackgroundColors, sortedTextColors, sortedFillColors, sortedBorderColors;
        return _ts_generator(this, function(_state) {
            if (!data || !('backgroundColors' in data) || !('textColors' in data)) {
                return [
                    2
                ];
            }
            _class_private_field_set(this, _data, data);
            _$_class_private_field_get = _class_private_field_get(this, _data), elementCount = _$_class_private_field_get.elementCount, backgroundColors = _$_class_private_field_get.backgroundColors, textColors = _$_class_private_field_get.textColors, textColorContrastIssues = _$_class_private_field_get.textColorContrastIssues, fillColors = _$_class_private_field_get.fillColors, borderColors = _$_class_private_field_get.borderColors, globalStyleStats = _$_class_private_field_get.globalStyleStats, mediaQueries = _$_class_private_field_get.mediaQueries, unusedDeclarations = _$_class_private_field_get.unusedDeclarations, fontInfo = _$_class_private_field_get.fontInfo;
            // Convert rgb values from the computed styles to either undefined or HEX(A) strings.
            sortedBackgroundColors = _class_private_method_get(this, _sortColorsByLuminance, sortColorsByLuminance).call(this, backgroundColors);
            sortedTextColors = _class_private_method_get(this, _sortColorsByLuminance, sortColorsByLuminance).call(this, textColors);
            sortedFillColors = _class_private_method_get(this, _sortColorsByLuminance, sortColorsByLuminance).call(this, fillColors);
            sortedBorderColors = _class_private_method_get(this, _sortColorsByLuminance, sortColorsByLuminance).call(this, borderColors);
            _class_private_field_set(this, _fragment, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Fragment.Fragment.build(_templateObject3(), i18nString(UIStrings.overviewSummary), i18nString(UIStrings.elements), _class_private_field_get(this, _formatter).format(elementCount), i18nString(UIStrings.externalStylesheets), _class_private_field_get(this, _formatter).format(globalStyleStats.externalSheets), i18nString(UIStrings.inlineStyleElements), _class_private_field_get(this, _formatter).format(globalStyleStats.inlineStyles), i18nString(UIStrings.styleRules), _class_private_field_get(this, _formatter).format(globalStyleStats.styleRules), i18nString(UIStrings.mediaQueries), _class_private_field_get(this, _formatter).format(mediaQueries.size), i18nString(UIStrings.typeSelectors), _class_private_field_get(this, _formatter).format(globalStyleStats.stats.type), i18nString(UIStrings.idSelectors), _class_private_field_get(this, _formatter).format(globalStyleStats.stats.id), i18nString(UIStrings.classSelectors), _class_private_field_get(this, _formatter).format(globalStyleStats.stats.class), i18nString(UIStrings.universalSelectors), _class_private_field_get(this, _formatter).format(globalStyleStats.stats.universal), i18nString(UIStrings.attributeSelectors), _class_private_field_get(this, _formatter).format(globalStyleStats.stats.attribute), i18nString(UIStrings.nonsimpleSelectors), _class_private_field_get(this, _formatter).format(globalStyleStats.stats.nonSimple), i18nString(UIStrings.colors), i18nString(UIStrings.backgroundColorsS, {
                PH1: sortedBackgroundColors.length
            }), sortedBackgroundColors.map(_class_private_method_get(this, _colorsToFragment, colorsToFragment).bind(this, 'background')), i18nString(UIStrings.textColorsS, {
                PH1: sortedTextColors.length
            }), sortedTextColors.map(_class_private_method_get(this, _colorsToFragment, colorsToFragment).bind(this, 'text')), textColorContrastIssues.size > 0 ? _class_private_method_get(this, _contrastIssuesToFragment, contrastIssuesToFragment).call(this, textColorContrastIssues) : '', i18nString(UIStrings.fillColorsS, {
                PH1: sortedFillColors.length
            }), sortedFillColors.map(_class_private_method_get(this, _colorsToFragment, colorsToFragment).bind(this, 'fill')), i18nString(UIStrings.borderColorsS, {
                PH1: sortedBorderColors.length
            }), sortedBorderColors.map(_class_private_method_get(this, _colorsToFragment, colorsToFragment).bind(this, 'border')), i18nString(UIStrings.fontInfo), fontInfo.size > 0 ? _class_private_method_get(this, _fontInfoToFragment, fontInfoToFragment).call(this, fontInfo) : _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Fragment.Fragment.build(_templateObject(), i18nString(UIStrings.thereAreNoFonts)), i18nString(UIStrings.unusedDeclarations), unusedDeclarations.size > 0 ? _class_private_method_get(this, _groupToFragment, groupToFragment).call(this, unusedDeclarations, 'unused-declarations', 'declaration') : _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Fragment.Fragment.build(_templateObject1(), i18nString(UIStrings.thereAreNoUnusedDeclarations)), i18nString(UIStrings.mediaQueries), mediaQueries.size > 0 ? _class_private_method_get(this, _groupToFragment, groupToFragment).call(this, mediaQueries, 'media-queries', 'text') : _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Fragment.Fragment.build(_templateObject2(), i18nString(UIStrings.thereAreNoMediaQueries))));
            _class_private_field_get(this, _resultsContainer).element.appendChild(_class_private_field_get(this, _fragment).element());
            return [
                2
            ];
        });
    });
    return _render1.apply(this, arguments);
}
function createElementsView(evt) {
    var payload = evt.data.payload;
    var id = '';
    var tabTitle = '';
    switch(payload.type){
        case 'contrast':
            {
                var section = payload.section, key = payload.key;
                id = "".concat(section, "-").concat(key);
                tabTitle = i18nString(UIStrings.contrastIssues);
                break;
            }
        case 'color':
            {
                var section1 = payload.section, color = payload.color;
                id = "".concat(section1, "-").concat(color);
                tabTitle = "".concat(color.toUpperCase(), " (").concat(section1, ")");
                break;
            }
        case 'unused-declarations':
            {
                var declaration = payload.declaration;
                id = "".concat(declaration);
                tabTitle = "".concat(declaration);
                break;
            }
        case 'media-queries':
            {
                var text = payload.text;
                id = "".concat(text);
                tabTitle = "".concat(text);
                break;
            }
        case 'font-info':
            {
                var name = payload.name;
                id = "".concat(name);
                tabTitle = "".concat(name);
                break;
            }
    }
    var view = _class_private_field_get(this, _viewMap).get(id);
    if (!view) {
        if (!_class_private_field_get(this, _domModel) || !_class_private_field_get(this, _cssModel)) {
            throw new Error('Unable to initialize CSS overview, missing models');
        }
        view = new ElementDetailsView(_class_private_field_get(this, _controller), _class_private_field_get(this, _domModel), _class_private_field_get(this, _cssModel), _class_private_field_get(this, _linkifier));
        void view.populateNodes(payload.nodes);
        _class_private_field_get(this, _viewMap).set(id, view);
    }
    _class_private_field_get(this, _elementContainer).appendTab(id, tabTitle, view, payload.type);
}
function fontInfoToFragment(fontInfo) {
    var _this = this;
    var fonts = Array.from(fontInfo.entries());
    return _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Fragment.Fragment.build(_templateObject5(), fonts.map(function(param) {
        var _param = _sliced_to_array(param, 2), font = _param[0], fontMetrics = _param[1];
        return _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Fragment.Fragment.build(_templateObject4(), font, _class_private_method_get(_this, _fontMetricsToFragment, fontMetricsToFragment).call(_this, font, fontMetrics));
    }));
}
function fontMetricsToFragment(font, fontMetrics) {
    var _this = this;
    var fontMetricInfo = Array.from(fontMetrics.entries());
    return _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Fragment.Fragment.build(_templateObject7(), fontMetricInfo.map(function(param) {
        var _param = _sliced_to_array(param, 2), label = _param[0], values = _param[1];
        var sanitizedPath = "".concat(font, "/").concat(label);
        return _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Fragment.Fragment.build(_templateObject6(), label, _class_private_method_get(_this, _groupToFragment, groupToFragment).call(_this, values, 'font-info', 'value', sanitizedPath));
    }));
}
function groupToFragment(items, type, dataLabel) {
    var path = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : '';
    // Sort by number of items descending.
    var values = Array.from(items.entries()).sort(function(d1, d2) {
        var v1Nodes = d1[1];
        var v2Nodes = d2[1];
        return v2Nodes.length - v1Nodes.length;
    });
    var total = values.reduce(function(prev, curr) {
        return prev + curr[1].length;
    }, 0);
    return _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Fragment.Fragment.build(_templateObject9(), values.map(function(param) {
        var _param = _sliced_to_array(param, 2), title = _param[0], nodes = _param[1];
        var width = 100 * nodes.length / total;
        var itemLabel = i18nString(UIStrings.nOccurrences, {
            n: nodes.length
        });
        return _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Fragment.Fragment.build(_templateObject8(), title, type, path, dataLabel, title, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__.action().track({
            click: true
        }).context("css-overview.".concat(type)), itemLabel, width);
    }));
}
function contrastIssuesToFragment(issues) {
    var _this = this;
    return _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Fragment.Fragment.build(_templateObject10(), i18nString(UIStrings.contrastIssuesS, {
        PH1: issues.size
    }), _to_consumable_array(issues.entries()).map(function(param) {
        var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
        return _class_private_method_get(_this, _contrastIssueToFragment, contrastIssueToFragment).call(_this, key, value);
    }));
}
function contrastIssueToFragment(key, issues) {
    console.assert(issues.length > 0);
    var minContrastIssue = issues[0];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = issues[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var issue = _step.value;
            // APCA contrast can be a negative value that is to be displayed. But the
            // absolute value is used to compare against the threshold. Therefore, the min
            // absolute value is the worst contrast.
            if (Math.abs(issue.contrastRatio) < Math.abs(minContrastIssue.contrastRatio)) {
                minContrastIssue = issue;
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
    var color = minContrastIssue.textColor.asString("hexa" /* Common.Color.Format.HEXA */ );
    var backgroundColor = minContrastIssue.backgroundColor.asString("hexa" /* Common.Color.Format.HEXA */ );
    var showAPCA = _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.experiments.isEnabled('apca');
    var title = i18nString(UIStrings.textColorSOverSBackgroundResults, {
        PH1: color,
        PH2: backgroundColor,
        PH3: issues.length
    });
    var blockFragment = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Fragment.Fragment.build(_templateObject11(), title, title, key, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__.action('css-overview.contrast').track({
        click: true
    }), i18nString(UIStrings.aa), i18nString(UIStrings.aaa), i18nString(UIStrings.apca));
    if (showAPCA) {
        var apca = blockFragment.$('apca');
        if (minContrastIssue.thresholdsViolated.apca) {
            apca.appendChild(createClearIcon());
        } else {
            apca.appendChild(createCheckIcon());
        }
        apca.classList.remove('hidden');
    } else {
        var aa = blockFragment.$('aa');
        if (minContrastIssue.thresholdsViolated.aa) {
            aa.appendChild(createClearIcon());
        } else {
            aa.appendChild(createCheckIcon());
        }
        var aaa = blockFragment.$('aaa');
        if (minContrastIssue.thresholdsViolated.aaa) {
            aaa.appendChild(createClearIcon());
        } else {
            aaa.appendChild(createCheckIcon());
        }
        aa.classList.remove('hidden');
        aaa.classList.remove('hidden');
    }
    var block = blockFragment.$('color');
    block.style.backgroundColor = backgroundColor;
    block.style.color = color;
    block.style.border = getBorderString(minContrastIssue.backgroundColor.asLegacyColor());
    return blockFragment;
}
function colorsToFragment(section, color) {
    var _Common_Color_parse;
    var blockFragment = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Fragment.Fragment.build(_templateObject12(), color, color, section, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__.action('css-overview.color').track({
        click: true
    }), color);
    var block = blockFragment.$('color');
    block.style.backgroundColor = color;
    var borderColor = (_Common_Color_parse = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(color)) === null || _Common_Color_parse === void 0 ? void 0 : _Common_Color_parse.asLegacyColor();
    if (!borderColor) {
        return;
    }
    block.style.border = getBorderString(borderColor);
    return blockFragment;
}
function sortColorsByLuminance(srcColors) {
    return Array.from(srcColors.keys()).sort(function(colA, colB) {
        var _Common_Color_parse, _Common_Color_parse1;
        var colorA = (_Common_Color_parse = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(colA)) === null || _Common_Color_parse === void 0 ? void 0 : _Common_Color_parse.asLegacyColor();
        var colorB = (_Common_Color_parse1 = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(colB)) === null || _Common_Color_parse1 === void 0 ? void 0 : _Common_Color_parse1.asLegacyColor();
        if (!colorA || !colorB) {
            return 0;
        }
        return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.luminance(colorB.rgba()) - _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.luminance(colorA.rgba());
    });
}
var _tabbedPane = /*#__PURE__*/ new WeakMap();
var DetailsView = /*#__PURE__*/ function(_Common_ObjectWrapper_eventMixin) {
    "use strict";
    _inherits(DetailsView, _Common_ObjectWrapper_eventMixin);
    var _super = _create_super(DetailsView);
    function DetailsView() {
        _class_call_check(this, DetailsView);
        var _this;
        _this = _super.call(this);
        _class_private_field_init(_assert_this_initialized(_this), _tabbedPane, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(_assert_this_initialized(_this), _tabbedPane, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.TabbedPane.TabbedPane());
        _class_private_field_get(_this, _tabbedPane).show(_this.element);
        _class_private_field_get(_this, _tabbedPane).addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.TabbedPane.Events.TabClosed, function() {
            _this.dispatchEventToListeners("TabClosed" /* Events.TabClosed */ , _class_private_field_get(_this, _tabbedPane).tabIds().length);
        });
        return _this;
    }
    _create_class(DetailsView, [
        {
            key: "appendTab",
            value: function appendTab(id, tabTitle, view, jslogContext) {
                if (!_class_private_field_get(this, _tabbedPane).hasTab(id)) {
                    _class_private_field_get(this, _tabbedPane).appendTab(id, tabTitle, view, undefined, undefined, /* isCloseable */ true, undefined, undefined, jslogContext);
                }
                _class_private_field_get(this, _tabbedPane).selectTab(id);
            }
        },
        {
            key: "closeTabs",
            value: function closeTabs() {
                _class_private_field_get(this, _tabbedPane).closeTabs(_class_private_field_get(this, _tabbedPane).tabIds());
            }
        }
    ]);
    return DetailsView;
}(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Widget.VBox));
var _controller1 = /*#__PURE__*/ new WeakMap(), _domModel1 = /*#__PURE__*/ new WeakMap(), _cssModel1 = /*#__PURE__*/ new WeakMap(), _linkifier1 = /*#__PURE__*/ new WeakMap(), _elementGridColumns = /*#__PURE__*/ new WeakMap(), _elementGrid = /*#__PURE__*/ new WeakMap(), _sortMediaQueryDataGrid = /*#__PURE__*/ new WeakSet(), _onMouseOver = /*#__PURE__*/ new WeakSet();
var ElementDetailsView = /*#__PURE__*/ function(_UI_Widget_Widget) {
    "use strict";
    _inherits(ElementDetailsView, _UI_Widget_Widget);
    var _super = _create_super(ElementDetailsView);
    function ElementDetailsView(controller, domModel, cssModel, linkifier) {
        _class_call_check(this, ElementDetailsView);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _sortMediaQueryDataGrid);
        _class_private_method_init(_assert_this_initialized(_this), _onMouseOver);
        _class_private_field_init(_assert_this_initialized(_this), _controller1, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _domModel1, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _cssModel1, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _linkifier1, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _elementGridColumns, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _elementGrid, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(_assert_this_initialized(_this), _controller1, controller);
        _class_private_field_set(_assert_this_initialized(_this), _domModel1, domModel);
        _class_private_field_set(_assert_this_initialized(_this), _cssModel1, cssModel);
        _class_private_field_set(_assert_this_initialized(_this), _linkifier1, linkifier);
        _class_private_field_set(_assert_this_initialized(_this), _elementGridColumns, [
            {
                id: 'node-id',
                title: i18nString(UIStrings.element),
                sortable: true,
                weight: 50,
                titleDOMFragment: undefined,
                sort: undefined,
                align: undefined,
                width: undefined,
                fixedWidth: undefined,
                editable: undefined,
                nonSelectable: undefined,
                longText: undefined,
                disclosure: undefined,
                allowInSortByEvenWhenHidden: undefined,
                dataType: undefined,
                defaultWeight: undefined
            },
            {
                id: 'declaration',
                title: i18nString(UIStrings.declaration),
                sortable: true,
                weight: 50,
                titleDOMFragment: undefined,
                sort: undefined,
                align: undefined,
                width: undefined,
                fixedWidth: undefined,
                editable: undefined,
                nonSelectable: undefined,
                longText: undefined,
                disclosure: undefined,
                allowInSortByEvenWhenHidden: undefined,
                dataType: undefined,
                defaultWeight: undefined
            },
            {
                id: 'source-url',
                title: i18nString(UIStrings.source),
                sortable: false,
                weight: 100,
                titleDOMFragment: undefined,
                sort: undefined,
                align: undefined,
                width: undefined,
                fixedWidth: undefined,
                editable: undefined,
                nonSelectable: undefined,
                longText: undefined,
                disclosure: undefined,
                allowInSortByEvenWhenHidden: undefined,
                dataType: undefined,
                defaultWeight: undefined
            },
            {
                id: 'contrast-ratio',
                title: i18nString(UIStrings.contrastRatio),
                sortable: true,
                weight: 25,
                titleDOMFragment: undefined,
                sort: undefined,
                align: undefined,
                width: '150px',
                fixedWidth: true,
                editable: undefined,
                nonSelectable: undefined,
                longText: undefined,
                disclosure: undefined,
                allowInSortByEvenWhenHidden: undefined,
                dataType: undefined,
                defaultWeight: undefined
            }
        ]);
        _class_private_field_set(_assert_this_initialized(_this), _elementGrid, new _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_7__.SortableDataGrid.SortableDataGrid({
            displayName: i18nString(UIStrings.cssOverviewElements),
            columns: _class_private_field_get(_assert_this_initialized(_this), _elementGridColumns),
            editCallback: undefined,
            deleteCallback: undefined,
            refreshCallback: undefined
        }));
        _class_private_field_get(_this, _elementGrid).element.classList.add('element-grid');
        _class_private_field_get(_this, _elementGrid).element.addEventListener('mouseover', _class_private_method_get(_this, _onMouseOver, onMouseOver).bind(_assert_this_initialized(_this)));
        _class_private_field_get(_this, _elementGrid).setStriped(true);
        _class_private_field_get(_this, _elementGrid).addEventListener("SortingChanged" /* DataGrid.DataGrid.Events.SortingChanged */ , _class_private_method_get(_this, _sortMediaQueryDataGrid, sortMediaQueryDataGrid).bind(_assert_this_initialized(_this)));
        _class_private_field_get(_this, _elementGrid).asWidget().show(_this.element);
        return _this;
    }
    _create_class(ElementDetailsView, [
        {
            key: "populateNodes",
            value: function populateNodes(data) {
                var _this = this;
                return _async_to_generator(function() {
                    var _data, firstItem, visibility, relatedNodesMap, nodeIds, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item, frontendNode, node;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _class_private_field_get(_this, _elementGrid).rootNode().removeChildren();
                                if (!data.length) {
                                    return [
                                        2
                                    ];
                                }
                                _data = _sliced_to_array(data, 1), firstItem = _data[0];
                                visibility = new Set();
                                'nodeId' in firstItem && firstItem.nodeId && visibility.add('node-id');
                                'declaration' in firstItem && firstItem.declaration && visibility.add('declaration');
                                'sourceURL' in firstItem && firstItem.sourceURL && visibility.add('source-url');
                                'contrastRatio' in firstItem && firstItem.contrastRatio && visibility.add('contrast-ratio');
                                if (!('nodeId' in firstItem && visibility.has('node-id'))) return [
                                    3,
                                    2
                                ];
                                // Grab the nodes from the frontend, but only those that have not been
                                // retrieved already.
                                nodeIds = data.reduce(function(prev, curr) {
                                    var nodeId = curr.nodeId;
                                    if (CSSOverviewCompletedView.pushedNodes.has(nodeId)) {
                                        return prev;
                                    }
                                    CSSOverviewCompletedView.pushedNodes.add(nodeId);
                                    return prev.add(nodeId);
                                }, new Set());
                                return [
                                    4,
                                    _class_private_field_get(_this, _domModel1).pushNodesByBackendIdsToFrontend(nodeIds)
                                ];
                            case 1:
                                relatedNodesMap = _state.sent();
                                _state.label = 2;
                            case 2:
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = data[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        item = _step.value;
                                        frontendNode = void 0;
                                        if ('nodeId' in item && visibility.has('node-id')) {
                                            if (!relatedNodesMap) {
                                                continue;
                                            }
                                            frontendNode = relatedNodesMap.get(item.nodeId);
                                            if (!frontendNode) {
                                                continue;
                                            }
                                        }
                                        node = new ElementNode(item, frontendNode, _class_private_field_get(_this, _linkifier1), _class_private_field_get(_this, _cssModel1));
                                        node.selectable = false;
                                        _class_private_field_get(_this, _elementGrid).insertChild(node);
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
                                _class_private_field_get(_this, _elementGrid).setColumnsVisibility(visibility);
                                _class_private_field_get(_this, _elementGrid).renderInline();
                                _class_private_field_get(_this, _elementGrid).wasShown();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return ElementDetailsView;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Widget.Widget);
function sortMediaQueryDataGrid() {
    var sortColumnId = _class_private_field_get(this, _elementGrid).sortColumnId();
    if (!sortColumnId) {
        return;
    }
    var comparator = _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_7__.SortableDataGrid.SortableDataGrid.StringComparator.bind(null, sortColumnId);
    _class_private_field_get(this, _elementGrid).sortNodes(comparator, !_class_private_field_get(this, _elementGrid).isSortOrderAscending());
}
function onMouseOver(evt) {
    // Traverse the event path on the grid to find the nearest element with a backend node ID attached. Use
    // that for the highlighting.
    var node = evt.composedPath().find(function(el) {
        return el.dataset && el.dataset.backendNodeId;
    });
    if (!node) {
        return;
    }
    var backendNodeId = Number(node.dataset.backendNodeId);
    _class_private_field_get(this, _controller1).dispatchEventToListeners("RequestNodeHighlight" /* CSSOverViewControllerEvents.RequestNodeHighlight */ , backendNodeId);
}
var _linkifier2 = /*#__PURE__*/ new WeakMap(), _cssModel2 = /*#__PURE__*/ new WeakMap(), _frontendNode = /*#__PURE__*/ new WeakMap(), _linkifyRuleLocation = /*#__PURE__*/ new WeakSet();
var ElementNode = /*#__PURE__*/ function(_DataGrid_SortableDataGrid_SortableDataGridNode) {
    "use strict";
    _inherits(ElementNode, _DataGrid_SortableDataGrid_SortableDataGridNode);
    var _super = _create_super(ElementNode);
    function ElementNode(data, frontendNode, linkifier, cssModel) {
        _class_call_check(this, ElementNode);
        var _this;
        _this = _super.call(this, data);
        _class_private_method_init(_assert_this_initialized(_this), _linkifyRuleLocation);
        _class_private_field_init(_assert_this_initialized(_this), _linkifier2, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _cssModel2, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _frontendNode, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(_assert_this_initialized(_this), _frontendNode, frontendNode);
        _class_private_field_set(_assert_this_initialized(_this), _linkifier2, linkifier);
        _class_private_field_set(_assert_this_initialized(_this), _cssModel2, cssModel);
        return _this;
    }
    _create_class(ElementNode, [
        {
            key: "createCell",
            value: function createCell(columnId) {
                // Nodes.
                var frontendNode = _class_private_field_get(this, _frontendNode);
                if (columnId === 'node-id') {
                    var cell = this.createTD(columnId);
                    cell.textContent = '...';
                    if (!frontendNode) {
                        throw new Error('Node entry is missing a related frontend node.');
                    }
                    void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Linkifier.Linkifier.linkify(frontendNode).then(function(link) {
                        cell.textContent = '';
                        link.dataset.backendNodeId = frontendNode.backendNodeId().toString();
                        cell.appendChild(link);
                        var showNodeIcon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__.Icon.Icon();
                        showNodeIcon.data = {
                            iconName: 'select-element',
                            color: 'var(--icon-show-element)',
                            width: '16px'
                        };
                        showNodeIcon.classList.add('show-element');
                        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Tooltip.Tooltip.install(showNodeIcon, i18nString(UIStrings.showElement));
                        showNodeIcon.tabIndex = 0;
                        showNodeIcon.onclick = function() {
                            return frontendNode.scrollIntoView();
                        };
                        cell.appendChild(showNodeIcon);
                    });
                    return cell;
                }
                // Links to CSS.
                if (columnId === 'source-url') {
                    var cell1 = this.createTD(columnId);
                    if (this.data.range) {
                        var link = _class_private_method_get(this, _linkifyRuleLocation, linkifyRuleLocation).call(this, _class_private_field_get(this, _cssModel2), _class_private_field_get(this, _linkifier2), this.data.styleSheetId, _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_5__.TextRange.TextRange.fromObject(this.data.range));
                        if (!link || link.textContent === '') {
                            cell1.textContent = '(unable to link)';
                        } else {
                            cell1.appendChild(link);
                        }
                    } else {
                        cell1.textContent = '(unable to link to inlined styles)';
                    }
                    return cell1;
                }
                if (columnId === 'contrast-ratio') {
                    var cell2 = this.createTD(columnId);
                    var showAPCA = _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.experiments.isEnabled('apca');
                    var contrastRatio = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.floor(this.data.contrastRatio, 2);
                    var contrastRatioString = showAPCA ? contrastRatio + '%' : contrastRatio;
                    var border = getBorderString(this.data.backgroundColor);
                    var color = this.data.textColor.asString();
                    var backgroundColor = this.data.backgroundColor.asString();
                    var contrastFragment = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Fragment.Fragment.build(_templateObject13(), border, color, backgroundColor, contrastRatioString);
                    var container = contrastFragment.$('container');
                    if (showAPCA) {
                        container.append(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Fragment.Fragment.build(_templateObject14(), i18nString(UIStrings.apca)).element());
                        if (this.data.thresholdsViolated.apca) {
                            container.appendChild(createClearIcon());
                        } else {
                            container.appendChild(createCheckIcon());
                        }
                    } else {
                        container.append(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Fragment.Fragment.build(_templateObject15(), i18nString(UIStrings.aa)).element());
                        if (this.data.thresholdsViolated.aa) {
                            container.appendChild(createClearIcon());
                        } else {
                            container.appendChild(createCheckIcon());
                        }
                        container.append(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Fragment.Fragment.build(_templateObject16(), i18nString(UIStrings.aaa)).element());
                        if (this.data.thresholdsViolated.aaa) {
                            container.appendChild(createClearIcon());
                        } else {
                            container.appendChild(createCheckIcon());
                        }
                    }
                    cell2.appendChild(contrastFragment.element());
                    return cell2;
                }
                return _get(_get_prototype_of(ElementNode.prototype), "createCell", this).call(this, columnId);
            }
        }
    ]);
    return ElementNode;
}(_ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_7__.SortableDataGrid.SortableDataGridNode);
function linkifyRuleLocation(cssModel, linkifier, styleSheetId, ruleLocation) {
    var styleSheetHeader = cssModel.styleSheetHeaderForId(styleSheetId);
    if (!styleSheetHeader) {
        return;
    }
    var lineNumber = styleSheetHeader.lineNumberInSource(ruleLocation.startLine);
    var columnNumber = styleSheetHeader.columnNumberInSource(ruleLocation.startLine, ruleLocation.startColumn);
    var matchingSelectorLocation = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.CSSModel.CSSLocation(styleSheetHeader, lineNumber, columnNumber);
    return linkifier.linkifyCSSLocation(matchingSelectorLocation);
}
function createClearIcon() {
    var icon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__.Icon.Icon();
    icon.data = {
        iconName: 'clear',
        color: 'var(--icon-error)',
        width: '14px',
        height: '14px'
    };
    return icon;
}
function createCheckIcon() {
    var icon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__.Icon.Icon();
    icon.data = {
        iconName: 'checkmark',
        color: 'var(--icon-checkmark-green)',
        width: '14px',
        height: '14px'
    };
    return icon;
} //# sourceMappingURL=CSSOverviewCompletedView.js.map


}),
"./panels/css_overview/cssOverviewCompletedView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/**\n * Copyright 2019 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.overview-completed-view {\n  overflow: auto;\n\n  --overview-default-padding: 28px;\n  --overview-icon-padding: 32px;\n}\n\n.overview-completed-view .summary ul,\n.overview-completed-view .colors ul {\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.overview-completed-view .summary ul {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 140px);\n  grid-gap: 16px;\n}\n\n.overview-completed-view .colors ul li {\n  display: inline-block;\n  margin: 0 0 16px;\n  padding: 0 8px 0 0;\n}\n\n.overview-completed-view .summary ul li {\n  display: flex;\n  flex-direction: column;\n  grid-column-start: auto;\n}\n\n.overview-completed-view li .label {\n  font-size: 12px;\n  padding-bottom: 2px;\n}\n\n.overview-completed-view li .value {\n  font-size: 17px;\n}\n\n.overview-completed-view ul li span {\n  font-weight: bold;\n}\n\n.unused-rules-grid .header-container,\n.unused-rules-grid .data-container,\n.unused-rules-grid table.data {\n  position: relative;\n}\n\n.unused-rules-grid .data-container {\n  top: 0;\n  max-height: 350px;\n}\n\n.unused-rules-grid {\n  border-left: none;\n  border-right: none;\n}\n/** Ensure links are rendered at the correct height */\n\n.unused-rules-grid .monospace {\n  display: block;\n  height: 18px;\n}\n\n.element-grid {\n  flex: 1;\n  border-left: none;\n  border-right: none;\n  overflow: auto;\n}\n\n.block {\n  width: 65px;\n  height: 25px;\n  border-radius: 3px;\n  margin-right: 16px;\n}\n\n.block-title {\n  padding-top: 4px;\n  font-size: 12px;\n  color: var(--sys-color-on-surface);\n  letter-spacing: 0;\n  text-transform: uppercase;\n}\n\n.block-title.color-text {\n  text-transform: none;\n  max-width: 65px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: text;\n  user-select: text;\n  overflow: hidden;\n}\n\n.results-section {\n  flex-shrink: 0;\n  border-bottom: 1px solid var(--sys-color-divider);\n  padding: var(--overview-default-padding) 0 var(--overview-default-padding) 0;\n}\n\n.horizontally-padded {\n  padding-left: var(--overview-default-padding);\n  padding-right: var(--overview-default-padding);\n}\n\n.results-section h1 {\n  font-size: 15px;\n  font-weight: normal;\n  padding: 0;\n  margin: 0 0 20px;\n  padding-left: calc(var(--overview-default-padding) + var(--overview-icon-padding));\n  position: relative;\n  height: 26px;\n  line-height: 26px;\n}\n\n.results-section h1::before {\n  content: "";\n  display: block;\n  position: absolute;\n  left: var(--overview-default-padding);\n  top: 0;\n  width: 26px;\n  height: 26px;\n  background-image: var(--image-file-cssoverview_icons_2x);\n  background-size: 104px 26px;\n}\n\n.results-section.horizontally-padded h1 {\n  padding-left: var(--overview-icon-padding);\n}\n\n.results-section.horizontally-padded h1::before {\n  left: 0;\n}\n\n.results-section.summary h1 {\n  padding-left: 0;\n}\n\n.results-section.summary h1::before {\n  display: none;\n}\n\n.results-section.colors h1::before {\n  background-position: 0 0;\n}\n\n.results-section.font-info h1::before {\n  background-position: -26px 0;\n}\n\n.results-section.unused-declarations h1::before {\n  background-position: -52px 0;\n}\n\n.results-section.media-queries h1::before {\n  background-position: -78px 0;\n}\n\n.results-section.colors h2 {\n  margin-top: 20px;\n  font-size: 13px;\n  font-weight: normal;\n}\n\n.overview-completed-view .font-info ul,\n.overview-completed-view .media-queries ul,\n.overview-completed-view .unused-declarations ul {\n  width: 100%;\n  list-style: none;\n  margin: 0;\n  padding: 0 var(--overview-default-padding);\n}\n\n.overview-completed-view .font-info ul li,\n.overview-completed-view .media-queries ul li,\n.overview-completed-view .unused-declarations ul li {\n  display: grid;\n  grid-template-columns: 2fr 3fr;\n  grid-gap: 12px;\n  margin-bottom: 4px;\n  align-items: center;\n}\n\n.overview-completed-view .font-info button .details,\n.overview-completed-view .media-queries button .details,\n.overview-completed-view .unused-declarations button .details {\n  min-width: 100px;\n  text-align: right;\n  margin-right: 8px;\n  color: var(--sys-color-primary);\n  pointer-events: none;\n}\n\n.overview-completed-view .font-info button .bar-container,\n.overview-completed-view .media-queries button .bar-container,\n.overview-completed-view .unused-declarations button .bar-container {\n  flex: 1;\n  pointer-events: none;\n}\n\n.overview-completed-view .font-info button .bar,\n.overview-completed-view .media-queries button .bar,\n.overview-completed-view .unused-declarations button .bar {\n  height: 8px;\n  background: var(--sys-color-primary-bright);\n  border-radius: 2px;\n  min-width: 2px;\n}\n\n.overview-completed-view .font-info button,\n.overview-completed-view .media-queries button,\n.overview-completed-view .unused-declarations button {\n  border: none;\n  padding: 0;\n  padding-right: 10px;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  border-radius: 2px;\n  cursor: pointer;\n  height: 28px;\n  background: none;\n\n  &:focus-visible {\n    outline: 2px solid var(--sys-color-state-focus-ring);\n  }\n\n  &:hover {\n    border-radius: 12px;\n    background: var(--sys-color-state-hover-on-subtle);\n  }\n\n  &:hover .details,\n  &:focus .details {\n    color: color-mix(in sRGB, var(--sys-color-primary), var(--sys-color-state-hover-on-prominent) 6%);\n  }\n\n  &:hover .bar,\n  &:focus .bar {\n    background-color: color-mix(in sRGB, var(--sys-color-primary-bright), var(--sys-color-state-hover-on-prominent) 6%);\n    color: var(--sys-color-on-primary);\n  }\n}\n\n.overview-completed-view .font-info .font-metric {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  grid-gap: 12px;\n}\n\n.overview-completed-view .font-info ul {\n  padding: 0;\n}\n\n.overview-completed-view .font-info ul li {\n  grid-template-columns: 1fr 4fr;\n}\n\n.overview-completed-view .font-info h2 {\n  font-size: 14px;\n  font-weight: bold;\n  margin: 0 0 1em;\n}\n\n.overview-completed-view .font-info h3 {\n  font-size: 13px;\n  font-weight: normal;\n  font-style: italic;\n  margin: 0 0 0.5em;\n}\n\n.overview-completed-view .font-info {\n  padding-bottom: 0;\n}\n\n.overview-completed-view .font-family {\n  padding: var(--overview-default-padding);\n}\n\n.overview-completed-view .font-family:nth-child(2n+1) {\n  background: var(--sys-color-cdt-base-container);\n}\n\n.overview-completed-view .font-family:first-of-type {\n  padding-top: 0;\n}\n\n.contrast-warning {\n  display: flex;\n  align-items: center;\n  margin-top: 2px;\n}\n\n.contrast-warning .threshold-label {\n  font-weight: normal;\n  width: 30px;\n}\n\n.contrast-warning devtools-icon {\n  margin-left: 2px;\n}\n\n.contrast-preview {\n  padding: 0 5px;\n}\n\n.contrast-container-in-grid {\n  display: flex;\n  align-items: center;\n}\n\n.contrast-container-in-grid > * {\n  margin-right: 5px;\n  min-width: initial;\n}\n\n.data .nodeId-column {\n  align-items: center;\n  display: flex;\n  height: 20px;\n}\n\n.nodeId-column .monospace {\n  overflow: hidden;\n}\n\n.show-element {\n  margin: 0 0 0 8px;\n  display: none;\n  cursor: pointer;\n  flex: none;\n\n  --icon-show-element: var(--icon-default);\n}\n\n.show-element:focus,\n.show-element:hover {\n  --icon-show-element: var(--icon-default-hover);\n}\n\n.nodeId-column:focus-within .show-element,\n.nodeId-column:hover .show-element {\n  display: inline-block;\n}\n\n.results-section.colors {\n  forced-color-adjust: none; /* show colors in high contrast theme */\n}\n\n/*# sourceURL=cssOverviewCompletedView.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);