"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_accessibility_ARIAAttributesView_js"], {
"./panels/accessibility/ARIAAttributesView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ARIAAttributePrompt: function() { return ARIAAttributePrompt; },
  ARIAAttributesPane: function() { return ARIAAttributesPane; },
  ARIAAttributesTreeElement: function() { return ARIAAttributesTreeElement; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _AccessibilitySubPane_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AccessibilitySubPane.js */ "./panels/accessibility/AccessibilitySubPane.js");
/* harmony import */var _ARIAMetadata_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ARIAMetadata.js */ "./panels/accessibility/ARIAMetadata.js");
// Copyright 2016 The Chromium Authors. All rights reserved.
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
     *@description Text in ARIAAttributes View of the Accessibility panel
     */ ariaAttributes: 'ARIA Attributes',
    /**
     *@description Text in ARIAAttributes View of the Accessibility panel
     */ noAriaAttributes: 'No ARIA attributes'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/accessibility/ARIAAttributesView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var ARIAAttributesPane = /*#__PURE__*/ function(AccessibilitySubPane) {
    "use strict";
    _inherits(ARIAAttributesPane, AccessibilitySubPane);
    var _super = _create_super(ARIAAttributesPane);
    function ARIAAttributesPane() {
        _class_call_check(this, ARIAAttributesPane);
        var _this;
        _this = _super.call(this, i18nString(UIStrings.ariaAttributes));
        _define_property(_assert_this_initialized(_this), "noPropertiesInfo", void 0);
        _define_property(_assert_this_initialized(_this), "treeOutline", void 0);
        _this.noPropertiesInfo = _this.createInfo(i18nString(UIStrings.noAriaAttributes));
        _this.treeOutline = _this.createTreeOutline();
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.section('aria-attributes')));
        return _this;
    }
    _create_class(ARIAAttributesPane, [
        {
            key: "setNode",
            value: function setNode(node) {
                _get(_get_prototype_of(ARIAAttributesPane.prototype), "setNode", this).call(this, node);
                this.treeOutline.removeChildren();
                if (!node) {
                    return;
                }
                var target = node.domModel().target();
                var attributes = node.attributes();
                for(var i = 0; i < attributes.length; ++i){
                    var attribute = attributes[i];
                    if (!this.isARIAAttribute(attribute)) {
                        continue;
                    }
                    this.treeOutline.appendChild(new ARIAAttributesTreeElement(this, attribute, target));
                }
                var foundAttributes = this.treeOutline.rootElement().childCount() !== 0;
                this.noPropertiesInfo.classList.toggle('hidden', foundAttributes);
                this.treeOutline.element.classList.toggle('hidden', !foundAttributes);
            }
        },
        {
            key: "isARIAAttribute",
            value: function isARIAAttribute(attribute) {
                return ATTRIBUTES.has(attribute.name);
            }
        }
    ]);
    return ARIAAttributesPane;
}(_AccessibilitySubPane_js__WEBPACK_IMPORTED_MODULE_4__.AccessibilitySubPane);
var ARIAAttributesTreeElement = /*#__PURE__*/ function(_UI_TreeOutline_TreeElement) {
    "use strict";
    _inherits(ARIAAttributesTreeElement, _UI_TreeOutline_TreeElement);
    var _super = _create_super(ARIAAttributesTreeElement);
    function ARIAAttributesTreeElement(parentPane, attribute, _target) {
        _class_call_check(this, ARIAAttributesTreeElement);
        var _this;
        _this = _super.call(this, '');
        _define_property(_assert_this_initialized(_this), "parentPane", void 0);
        _define_property(_assert_this_initialized(_this), "attribute", void 0);
        _define_property(_assert_this_initialized(_this), "nameElement", void 0);
        _define_property(_assert_this_initialized(_this), "valueElement", void 0);
        _define_property(_assert_this_initialized(_this), "prompt", void 0);
        _this.parentPane = parentPane;
        _this.attribute = attribute;
        _this.selectable = false;
        return _this;
    }
    _create_class(ARIAAttributesTreeElement, [
        {
            key: "onattach",
            value: function onattach() {
                this.populateListItem();
                this.listItemElement.addEventListener('click', this.mouseClick.bind(this));
            }
        },
        {
            key: "populateListItem",
            value: function populateListItem() {
                this.listItemElement.removeChildren();
                this.appendNameElement(this.attribute.name);
                this.listItemElement.createChild('span', 'separator').textContent = ':\xA0';
                this.appendAttributeValueElement(this.attribute.value);
            }
        },
        {
            key: "appendNameElement",
            value: function appendNameElement(name) {
                this.nameElement = document.createElement('span');
                this.nameElement.textContent = name;
                this.nameElement.classList.add('ax-name');
                this.nameElement.classList.add('monospace');
                this.listItemElement.appendChild(this.nameElement);
            }
        },
        {
            key: "appendAttributeValueElement",
            value: function appendAttributeValueElement(value) {
                this.valueElement = ARIAAttributesTreeElement.createARIAValueElement(value);
                this.listItemElement.appendChild(this.valueElement);
            }
        },
        {
            key: "mouseClick",
            value: function mouseClick(event) {
                if (event.target === this.listItemElement) {
                    return;
                }
                event.consume(true);
                this.startEditing();
            }
        },
        {
            key: "startEditing",
            value: function startEditing() {
                var _this = this;
                var valueElement = this.valueElement;
                if (!valueElement || _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.isBeingEdited(valueElement)) {
                    return;
                }
                var previousContent = valueElement.textContent || '';
                function blurListener(previousContent, event) {
                    var target = event.target;
                    var text = target.textContent || '';
                    this.editingCommitted(text, previousContent);
                }
                var attributeName = this.nameElement.textContent || '';
                this.prompt = new ARIAAttributePrompt((0,_ARIAMetadata_js__WEBPACK_IMPORTED_MODULE_5__.ariaMetadata)().valuesForProperty(attributeName), this);
                this.prompt.setAutocompletionTimeout(0);
                var proxyElement = this.prompt.attachAndStartEditing(valueElement, blurListener.bind(this, previousContent));
                proxyElement.addEventListener('keydown', function(event) {
                    return _this.editingValueKeyDown(previousContent, event);
                }, false);
                var selection = valueElement.getComponentSelection();
                if (selection) {
                    selection.selectAllChildren(valueElement);
                }
            }
        },
        {
            key: "removePrompt",
            value: function removePrompt() {
                if (!this.prompt) {
                    return;
                }
                this.prompt.detach();
                delete this.prompt;
            }
        },
        {
            key: "editingCommitted",
            value: function editingCommitted(userInput, previousContent) {
                this.removePrompt();
                // Make the changes to the attribute
                if (userInput !== previousContent) {
                    var node = this.parentPane.node();
                    node.setAttributeValue(this.attribute.name, userInput);
                }
            }
        },
        {
            key: "editingCancelled",
            value: function editingCancelled() {
                this.removePrompt();
                this.populateListItem();
            }
        },
        {
            key: "editingValueKeyDown",
            value: function editingValueKeyDown(previousContent, event) {
                if (event.handled) {
                    return;
                }
                if (event.key === 'Enter') {
                    var target = event.target;
                    this.editingCommitted(target.textContent || '', previousContent);
                    event.consume();
                    return;
                }
                if (_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.KeyboardUtilities.isEscKey(event)) {
                    this.editingCancelled();
                    event.consume();
                    return;
                }
            }
        }
    ], [
        {
            key: "createARIAValueElement",
            value: function createARIAValueElement(value) {
                var valueElement = document.createElement('span');
                valueElement.classList.add('monospace');
                // TODO(aboxhall): quotation marks?
                valueElement.setTextContentTruncatedIfNeeded(value || '');
                return valueElement;
            }
        }
    ]);
    return ARIAAttributesTreeElement;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.TreeOutline.TreeElement);
var ARIAAttributePrompt = /*#__PURE__*/ function(_UI_TextPrompt_TextPrompt) {
    "use strict";
    _inherits(ARIAAttributePrompt, _UI_TextPrompt_TextPrompt);
    var _super = _create_super(ARIAAttributePrompt);
    function ARIAAttributePrompt(ariaCompletions, treeElement) {
        _class_call_check(this, ARIAAttributePrompt);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "ariaCompletions", void 0);
        _define_property(_assert_this_initialized(_this), "treeElement", void 0);
        _this.initialize(_this.buildPropertyCompletions.bind(_assert_this_initialized(_this)));
        _this.ariaCompletions = ariaCompletions;
        _this.treeElement = treeElement;
        return _this;
    }
    _create_class(ARIAAttributePrompt, [
        {
            key: "buildPropertyCompletions",
            value: function buildPropertyCompletions(expression, prefix, force) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        prefix = prefix.toLowerCase();
                        if (!prefix && !force && expression) {
                            return [
                                2,
                                []
                            ];
                        }
                        return [
                            2,
                            _this.ariaCompletions.filter(function(value) {
                                return value.startsWith(prefix);
                            }).map(function(c) {
                                return {
                                    text: c,
                                    title: undefined,
                                    subtitle: undefined,
                                    priority: undefined,
                                    isSecondary: undefined,
                                    subtitleRenderer: undefined,
                                    selectionRange: undefined,
                                    hideGhostText: undefined,
                                    iconElement: undefined
                                };
                            })
                        ];
                    });
                })();
            }
        }
    ]);
    return ARIAAttributePrompt;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.TextPrompt.TextPrompt);
// Keep this list in sync with https://w3c.github.io/aria/#state_prop_def
var ATTRIBUTES = new Set([
    'role',
    'aria-activedescendant',
    'aria-atomic',
    'aria-autocomplete',
    'aria-braillelabel',
    'aria-brailleroledescription',
    'aria-busy',
    'aria-checked',
    'aria-colcount',
    'aria-colindex',
    'aria-colindextext',
    'aria-colspan',
    'aria-controls',
    'aria-current',
    'aria-describedby',
    'aria-description',
    'aria-details',
    'aria-disabled',
    'aria-dropeffect',
    'aria-errormessage',
    'aria-expanded',
    'aria-flowto',
    'aria-grabbed',
    'aria-haspopup',
    'aria-hidden',
    'aria-invalid',
    'aria-keyshortcuts',
    'aria-label',
    'aria-labelledby',
    'aria-level',
    'aria-live',
    'aria-modal',
    'aria-multiline',
    'aria-multiselectable',
    'aria-orientation',
    'aria-owns',
    'aria-placeholder',
    'aria-posinset',
    'aria-pressed',
    'aria-readonly',
    'aria-relevant',
    'aria-required',
    'aria-roledescription',
    'aria-rowcount',
    'aria-rowindex',
    'aria-rowindextext',
    'aria-rowspan',
    'aria-selected',
    'aria-setsize',
    'aria-sort',
    'aria-valuemax',
    'aria-valuemin',
    'aria-valuenow',
    'aria-valuetext'
]); //# sourceMappingURL=ARIAAttributesView.js.map


}),
"./panels/accessibility/ARIAMetadata.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ARIAMetadata: function() { return ARIAMetadata; },
  Attribute: function() { return Attribute; },
  ariaMetadata: function() { return ariaMetadata; }
});
/* harmony import */var _generated_ARIAProperties_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../generated/ARIAProperties.js */ "./generated/ARIAProperties.js");
// Copyright (c) 2016 The Chromium Authors. All rights reserved.
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

var ARIAMetadata = /*#__PURE__*/ function() {
    "use strict";
    function ARIAMetadata(config) {
        _class_call_check(this, ARIAMetadata);
        _define_property(this, "attributes", void 0);
        _define_property(this, "roleNames", void 0);
        this.attributes = new Map();
        this.roleNames = [];
        if (config) {
            this.initialize(config);
        }
    }
    _create_class(ARIAMetadata, [
        {
            key: "initialize",
            value: function initialize(config) {
                var attributes = config['attributes'];
                var booleanEnum = [
                    'true',
                    'false'
                ];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = attributes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var attributeConfig = _step.value;
                        if (attributeConfig.type === 'boolean') {
                            attributeConfig.enum = booleanEnum;
                        }
                        this.attributes.set(attributeConfig.name, new Attribute(attributeConfig));
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
                this.roleNames = config['roles'].map(function(roleConfig) {
                    return roleConfig.name;
                });
            }
        },
        {
            key: "valuesForProperty",
            value: function valuesForProperty(property) {
                var attribute = this.attributes.get(property);
                if (attribute) {
                    return attribute.getEnum();
                }
                if (property === 'role') {
                    return this.roleNames;
                }
                return [];
            }
        }
    ]);
    return ARIAMetadata;
}();
var instance;
function ariaMetadata() {
    if (!instance) {
        instance = new ARIAMetadata(_generated_ARIAProperties_js__WEBPACK_IMPORTED_MODULE_0__.config || null);
    }
    return instance;
}
var Attribute = /*#__PURE__*/ function() {
    "use strict";
    function Attribute(config) {
        _class_call_check(this, Attribute);
        _define_property(this, "enum", void 0);
        this.enum = [];
        if (config.enum) {
            this.enum = config.enum;
        }
    }
    _create_class(Attribute, [
        {
            key: "getEnum",
            value: function getEnum() {
                return this.enum;
            }
        }
    ]);
    return Attribute;
} //# sourceMappingURL=ARIAMetadata.js.map
();


}),

}]);