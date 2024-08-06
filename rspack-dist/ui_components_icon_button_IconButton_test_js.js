"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_icon_button_IconButton_test_js"], {
"./ui/components/icon_button/IconButton.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  extractIconGroups: function() { return extractIconGroups; }
});
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _icon_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon_button.js */ "./ui/components/icon_button/icon_button.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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


var renderIconButton = function(data) {
    var component = new _icon_button_js__WEBPACK_IMPORTED_MODULE_1__.IconButton.IconButton();
    component.data = data;
    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
    assert.isNotNull(component.shadowRoot);
    return {
        component: component,
        shadowRoot: component.shadowRoot
    };
};
var defaultIcon = {
    iconName: 'cross-circle',
    iconColor: 'var(--icon-error)',
    text: '1'
};
var extractIconGroups = function(shadowRoot) {
    var icons = shadowRoot.querySelectorAll('.status-icon');
    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.assertElements)(icons, _icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon);
    var labels = shadowRoot.querySelectorAll('.icon-button-title');
    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.assertElements)(labels, HTMLSpanElement);
    assert(icons.length === labels.length, 'Expected icons and labels to appear in pairs');
    var iconGroups = [];
    for(var i = 0; i < icons.length; ++i){
        var labelElement = labels[i];
        var label = window.getComputedStyle(labelElement).display === 'none' ? null : labelElement.textContent;
        iconGroups.push({
            iconData: icons[i].data,
            label: label
        });
    }
    return iconGroups;
};
describe('IconButton', function() {
    it('renders correctly with one icon', function() {
        var shadowRoot = renderIconButton({
            clickHandler: function() {},
            groups: [
                defaultIcon
            ]
        }).shadowRoot;
        var icons = extractIconGroups(shadowRoot);
        assert.strictEqual(icons.length, 1);
        assert.deepEqual(icons.map(function(c) {
            return c.label;
        }), [
            '1'
        ]);
        var iconNames = icons.map(function(c) {
            return 'iconName' in c.iconData ? c.iconData.iconName : undefined;
        });
        assert.deepEqual(iconNames, [
            'cross-circle'
        ]);
    });
    it('renders correctly with two icons', function() {
        var shadowRoot = renderIconButton({
            clickHandler: function() {},
            groups: [
                defaultIcon,
                {
                    iconName: 'warning',
                    iconColor: 'var(--icon-warning)',
                    text: '12'
                }
            ]
        }).shadowRoot;
        var icons = extractIconGroups(shadowRoot);
        assert.strictEqual(icons.length, 2);
        assert.deepEqual(icons.map(function(c) {
            return c.label;
        }), [
            '1',
            '12'
        ]);
        var iconNames = icons.map(function(c) {
            return 'iconName' in c.iconData ? c.iconData.iconName : undefined;
        });
        assert.deepEqual(iconNames, [
            'cross-circle',
            'warning'
        ]);
    });
    describe('compact mode', function() {
        it('renders correctly with one icon', function() {
            var shadowRoot = renderIconButton({
                clickHandler: function() {},
                groups: [
                    defaultIcon
                ],
                compact: true
            }).shadowRoot;
            var icons = extractIconGroups(shadowRoot);
            assert.strictEqual(icons.length, 1);
            assert.deepEqual(icons.map(function(c) {
                return c.label;
            }), [
                null
            ]);
            var iconNames = icons.map(function(c) {
                return 'iconName' in c.iconData ? c.iconData.iconName : undefined;
            });
            assert.deepEqual(iconNames, [
                'cross-circle'
            ]);
        });
        it('renders correctly with two icons', function() {
            var shadowRoot = renderIconButton({
                clickHandler: function() {},
                groups: [
                    defaultIcon,
                    {
                        iconName: 'warning',
                        iconColor: 'var(--icon-warning)',
                        text: '12'
                    }
                ],
                compact: true
            }).shadowRoot;
            var icons = extractIconGroups(shadowRoot);
            assert.strictEqual(icons.length, 1);
            assert.deepEqual(icons.map(function(c) {
                return c.label;
            }), [
                null
            ]);
            var iconNames = icons.map(function(c) {
                return 'iconName' in c.iconData ? c.iconData.iconName : undefined;
            });
            assert.deepEqual(iconNames, [
                'cross-circle'
            ]);
        });
    });
    it('renders correctly with two icons where one text is undefined', function() {
        var shadowRoot = renderIconButton({
            clickHandler: function() {},
            groups: [
                {
                    iconName: 'warning',
                    iconColor: 'var(--icon-warning)',
                    text: undefined
                },
                defaultIcon
            ]
        }).shadowRoot;
        var icons = extractIconGroups(shadowRoot);
        assert.strictEqual(icons.length, 1);
        assert.deepEqual(icons.map(function(c) {
            return c.label;
        }), [
            '1'
        ]);
        var iconNames = icons.map(function(c) {
            return 'iconName' in c.iconData ? c.iconData.iconName : undefined;
        });
        assert.deepEqual(iconNames, [
            'cross-circle'
        ]);
    });
    it('renders correctly with a customly sized icon', function() {
        var shadowRoot = renderIconButton({
            clickHandler: function() {},
            groups: [
                {
                    iconName: 'warning',
                    iconColor: 'var(--icon-warning)',
                    text: 'Text',
                    iconHeight: '2ex',
                    iconWidth: '3ex'
                }
            ]
        }).shadowRoot;
        var icons = extractIconGroups(shadowRoot);
        assert.strictEqual(icons.length, 1);
        var icon = icons[0];
        assert.strictEqual(icon.iconData.height, '2ex');
        assert.strictEqual(icon.iconData.width, '3ex');
    });
    describe('data getter and setter', function() {
        it('renders correctly with two icons', function() {
            var _renderIconButton = renderIconButton({
                clickHandler: function() {},
                groups: [
                    defaultIcon,
                    {
                        iconName: 'warning',
                        iconColor: 'var(--icon-warning)',
                        text: '31'
                    }
                ]
            }), component = _renderIconButton.component, shadowRoot = _renderIconButton.shadowRoot;
            var iconsBefore = extractIconGroups(shadowRoot);
            assert.strictEqual(iconsBefore.length, 2);
            assert.deepEqual(iconsBefore.map(function(c) {
                return c.label;
            }), [
                '1',
                '31'
            ]);
            var iconNamesBefore = iconsBefore.map(function(c) {
                return 'iconName' in c.iconData ? c.iconData.iconName : undefined;
            });
            assert.deepEqual(iconNamesBefore, [
                'cross-circle',
                'warning'
            ]);
            var data = component.data;
            component.data = _object_spread_props(_object_spread({}, data), {
                groups: data.groups.map(function(group, index) {
                    return _object_spread_props(_object_spread({}, group), {
                        text: "".concat(index)
                    });
                })
            });
            var iconsAfter = extractIconGroups(shadowRoot);
            assert.strictEqual(iconsAfter.length, 2);
            assert.deepEqual(iconsAfter.map(function(c) {
                return c.label;
            }), [
                '0',
                '1'
            ]);
            var iconNamesAfter = iconsAfter.map(function(c) {
                return 'iconName' in c.iconData ? c.iconData.iconName : undefined;
            });
            assert.deepEqual(iconNamesAfter, [
                'cross-circle',
                'warning'
            ]);
        });
    });
    describe('click event', function() {
        it('is dispatched from button', /*#__PURE__*/ _async_to_generator(function() {
            var clickHandler, clicked, shadowRoot, icon;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        clickHandler = function() {};
                        clicked = new Promise(function(r) {
                            clickHandler = r;
                        });
                        shadowRoot = renderIconButton({
                            clickHandler: clickHandler,
                            groups: [
                                defaultIcon
                            ]
                        }).shadowRoot;
                        icon = shadowRoot.querySelector('.status-icon');
                        assert.instanceOf(icon, _icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon);
                        icon.click();
                        return [
                            4,
                            clicked
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
        it('is dispatched from child of button', /*#__PURE__*/ _async_to_generator(function() {
            var clickHandler, clicked, shadowRoot, icon;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        clickHandler = function() {};
                        clicked = new Promise(function(r) {
                            clickHandler = r;
                        });
                        shadowRoot = renderIconButton({
                            clickHandler: clickHandler,
                            groups: [
                                defaultIcon
                            ]
                        }).shadowRoot;
                        icon = shadowRoot.querySelector('.icon-button');
                        assert.instanceOf(icon, HTMLButtonElement);
                        icon.click();
                        return [
                            4,
                            clicked
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('border', function() {
        it('is rendered when there is a click handler', /*#__PURE__*/ _async_to_generator(function() {
            var shadowRoot, button;
            return _ts_generator(this, function(_state) {
                shadowRoot = renderIconButton({
                    clickHandler: function() {},
                    groups: [
                        defaultIcon
                    ]
                }).shadowRoot;
                button = shadowRoot.querySelector('.icon-button');
                assert.instanceOf(button, HTMLButtonElement);
                assert.isTrue(button.classList.contains('with-click-handler'));
                return [
                    2
                ];
            });
        }));
        it('is omitted when requested', /*#__PURE__*/ _async_to_generator(function() {
            var shadowRoot, button;
            return _ts_generator(this, function(_state) {
                shadowRoot = renderIconButton({
                    groups: [
                        defaultIcon
                    ]
                }).shadowRoot;
                button = shadowRoot.querySelector('.icon-button');
                assert.instanceOf(button, HTMLButtonElement);
                assert.isFalse(button.classList.contains('with-click-handler'));
                return [
                    2
                ];
            });
        }));
    });
    describe('leading text', function() {
        it('is rendered if provided', /*#__PURE__*/ _async_to_generator(function() {
            var shadowRoot, texts;
            return _ts_generator(this, function(_state) {
                shadowRoot = renderIconButton({
                    clickHandler: function() {},
                    groups: [
                        defaultIcon
                    ],
                    leadingText: 'LEAD'
                }).shadowRoot;
                texts = Array.from(shadowRoot.querySelectorAll('.icon-button-title'));
                assert.deepEqual(texts.map(function(x) {
                    return x.textContent;
                }), [
                    'LEAD',
                    '1'
                ]);
                return [
                    2
                ];
            });
        }));
        it('is omitted in compact mode even if provided', /*#__PURE__*/ _async_to_generator(function() {
            var shadowRoot, texts;
            return _ts_generator(this, function(_state) {
                shadowRoot = renderIconButton({
                    clickHandler: function() {},
                    groups: [
                        defaultIcon
                    ],
                    leadingText: 'LEAD',
                    compact: true
                }).shadowRoot;
                texts = Array.from(shadowRoot.querySelectorAll('.icon-button-title'));
                assert.deepEqual(texts.map(function(x) {
                    return x.textContent;
                }), [
                    '1'
                ]);
                return [
                    2
                ];
            });
        }));
        it('is omitted if not provided', /*#__PURE__*/ _async_to_generator(function() {
            var shadowRoot, texts;
            return _ts_generator(this, function(_state) {
                shadowRoot = renderIconButton({
                    clickHandler: function() {},
                    groups: [
                        defaultIcon
                    ]
                }).shadowRoot;
                texts = Array.from(shadowRoot.querySelectorAll('.icon-button-title'));
                assert.deepEqual(texts.map(function(x) {
                    return x.textContent;
                }), [
                    '1'
                ]);
                return [
                    2
                ];
            });
        }));
    });
    describe('trailing text', function() {
        it('is rendered if provided', /*#__PURE__*/ _async_to_generator(function() {
            var shadowRoot, texts;
            return _ts_generator(this, function(_state) {
                shadowRoot = renderIconButton({
                    clickHandler: function() {},
                    groups: [
                        defaultIcon
                    ],
                    trailingText: 'TRAIL'
                }).shadowRoot;
                texts = Array.from(shadowRoot.querySelectorAll('.icon-button-title'));
                assert.deepEqual(texts.map(function(x) {
                    return x.textContent;
                }), [
                    '1',
                    'TRAIL'
                ]);
                return [
                    2
                ];
            });
        }));
        it('is omitted in compact mode even if provided', /*#__PURE__*/ _async_to_generator(function() {
            var shadowRoot, texts;
            return _ts_generator(this, function(_state) {
                shadowRoot = renderIconButton({
                    clickHandler: function() {},
                    groups: [
                        defaultIcon
                    ],
                    trailingText: 'TRAIL',
                    compact: true
                }).shadowRoot;
                texts = Array.from(shadowRoot.querySelectorAll('.icon-button-title'));
                assert.deepEqual(texts.map(function(x) {
                    return x.textContent;
                }), [
                    '1'
                ]);
                return [
                    2
                ];
            });
        }));
        it('is omitted if not provided', /*#__PURE__*/ _async_to_generator(function() {
            var shadowRoot, texts;
            return _ts_generator(this, function(_state) {
                shadowRoot = renderIconButton({
                    clickHandler: function() {},
                    groups: [
                        defaultIcon
                    ]
                }).shadowRoot;
                texts = Array.from(shadowRoot.querySelectorAll('.icon-button-title'));
                assert.deepEqual(texts.map(function(x) {
                    return x.textContent;
                }), [
                    '1'
                ]);
                return [
                    2
                ];
            });
        }));
    });
    describe('accessible name', function() {
        it('is rendered if provided', function() {
            var expectedAccessibleName = 'AccessibleName';
            var shadowRoot = renderIconButton({
                clickHandler: function() {},
                groups: [
                    defaultIcon
                ],
                accessibleName: expectedAccessibleName
            }).shadowRoot;
            var accessibleName = shadowRoot.querySelector('button').getAttribute('aria-label');
            assert.deepEqual(accessibleName, expectedAccessibleName);
        });
        it('is omitted if not provided', function() {
            var shadowRoot = renderIconButton({
                clickHandler: function() {},
                groups: [
                    defaultIcon
                ]
            }).shadowRoot;
            var accessibleName = shadowRoot.querySelector('button').getAttribute('aria-label');
            assert.isNull(accessibleName);
        });
    });
}); //# sourceMappingURL=IconButton.test.js.map


}),

}]);