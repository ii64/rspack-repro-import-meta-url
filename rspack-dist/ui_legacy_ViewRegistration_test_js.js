"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_ViewRegistration_test_js"], {
"./ui/legacy/ViewRegistration.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _components_quick_open_quick_open_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/quick_open/quick_open.js */ "./ui/legacy/components/quick_open/quick_open.js");
/* harmony import */var _legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./legacy.js */ "./ui/legacy/legacy.js");
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




var MockView = /*#__PURE__*/ function(_UI_Widget_Widget) {
    "use strict";
    _inherits(MockView, _UI_Widget_Widget);
    var _super = _create_super(MockView);
    function MockView() {
        _class_call_check(this, MockView);
        return _super.apply(this, arguments);
    }
    _create_class(MockView, [
        {
            key: "resolveLocation",
            value: function resolveLocation(_location) {
                return _legacy_js__WEBPACK_IMPORTED_MODULE_3__.ViewManager.ViewManager.instance().createStackLocation();
            }
        }
    ]);
    return MockView;
}(_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Widget.Widget);
var viewId = 'mock-view';
var viewTitle = 'Mock';
var commandPrompt = 'Show Mock';
var order = 10;
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('ViewRegistration', function() {
    before(function() {
        _legacy_js__WEBPACK_IMPORTED_MODULE_3__.ViewManager.registerViewExtension({
            location: "panel" /* UI.ViewManager.ViewLocationValues.PANEL */ ,
            id: viewId,
            commandPrompt: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedLazyString(commandPrompt),
            title: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedLazyString(viewTitle),
            order: order,
            persistence: "permanent" /* UI.ViewManager.ViewPersistence.PERMANENT */ ,
            hasToolbar: false,
            loadView: function loadView() {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            new MockView()
                        ];
                    });
                })();
            }
        });
        // The location resolver needs to be registered to add the command to show a view
        // from the command menu.
        _legacy_js__WEBPACK_IMPORTED_MODULE_3__.ViewManager.registerLocationResolver({
            name: "panel" /* UI.ViewManager.ViewLocationValues.PANEL */ ,
            category: "PANEL" /* UI.ViewManager.ViewLocationCategory.PANEL */ ,
            loadResolver: function loadResolver() {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            new MockView()
                        ];
                    });
                })();
            }
        });
    });
    it('retrieves a registered view', /*#__PURE__*/ _async_to_generator(function() {
        var preRegisteredView, mockWidget;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    preRegisteredView = _legacy_js__WEBPACK_IMPORTED_MODULE_3__.ViewManager.ViewManager.instance().view(viewId);
                    return [
                        4,
                        preRegisteredView.widget()
                    ];
                case 1:
                    mockWidget = _state.sent();
                    assert.instanceOf(mockWidget, MockView, 'View did not load correctly');
                    assert.strictEqual(preRegisteredView.title(), viewTitle, 'View title is not returned correctly');
                    assert.strictEqual(preRegisteredView.commandPrompt(), commandPrompt, 'Command for view is not returned correctly');
                    return [
                        2
                    ];
            }
        });
    }));
    it('adds command for showing a pre registered view', function() {
        var allCommands = _components_quick_open_quick_open_js__WEBPACK_IMPORTED_MODULE_2__.CommandMenu.CommandMenu.instance({
            forceNew: true
        }).commands();
        var filteredCommands = allCommands.filter(function(command) {
            return command.title === commandPrompt && command.isPanelOrDrawer === "PANEL" /* QuickOpen.CommandMenu.PanelOrDrawer.PANEL */ ;
        });
        assert.strictEqual(filteredCommands.length, 1, 'Command for showing a preregistered view was not added correctly');
    });
    it('deletes a registered view using its id', function() {
        var removalResult = _legacy_js__WEBPACK_IMPORTED_MODULE_3__.ViewManager.maybeRemoveViewExtension(viewId);
        assert.isTrue(removalResult);
        assert.doesNotThrow(function() {
            _legacy_js__WEBPACK_IMPORTED_MODULE_3__.ViewManager.registerViewExtension({
                id: viewId,
                commandPrompt: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedLazyString(commandPrompt),
                title: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedLazyString(viewTitle),
                loadView: function loadView() {
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            return [
                                2,
                                new MockView()
                            ];
                        });
                    })();
                }
            });
        });
    });
}); //# sourceMappingURL=ViewRegistration.test.js.map


}),

}]);