"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_ActionRegistration_test_js"], {
"./ui/legacy/ActionRegistration.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_root_root_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _components_quick_open_quick_open_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/quick_open/quick_open.js */ "./ui/legacy/components/quick_open/quick_open.js");
/* harmony import */var _legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
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






(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.describeWithEnvironment)('ActionRegistration', function() {
    it('toggling settings affects registered actions', function() {
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.registerSettingExtension({
            settingName: 'test-setting',
            settingType: "boolean" /* Common.Settings.SettingType.BOOLEAN */ ,
            defaultValue: false
        });
        // Force new instance for the setting extension to apply.
        var dummyStorage = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingsStorage({});
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance({
            forceNew: true,
            syncedStorage: dummyStorage,
            globalStorage: dummyStorage,
            localStorage: dummyStorage
        });
        _legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistration.registerActionExtension({
            actionId: 'test-action',
            category: "GLOBAL" /* UI.ActionRegistration.ActionCategory.GLOBAL */ ,
            setting: 'test-setting'
        });
        var list = _legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistration.getRegisteredActionExtensions();
        assert.lengthOf(list, 0);
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.moduleSetting('test-setting').set(true);
        list = _legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistration.getRegisteredActionExtensions();
        assert.lengthOf(list, 1);
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.moduleSetting('test-setting').set(false);
        list = _legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistration.getRegisteredActionExtensions();
        assert.lengthOf(list, 0);
    });
});
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.describeWithEnvironment)('ActionRegistration', function() {
    var actionExecuted = false;
    var actionTitle = 'Mock action';
    var actionId = 'mock.action';
    var MockActionDelegate = /*#__PURE__*/ function() {
        "use strict";
        function MockActionDelegate() {
            _class_call_check(this, MockActionDelegate);
        }
        _create_class(MockActionDelegate, [
            {
                key: "handleAction",
                value: function handleAction(_context, _actionId) {
                    actionExecuted = true;
                    return actionExecuted;
                }
            }
        ]);
        return MockActionDelegate;
    }();
    var MockContextType = function MockContextType() {
        "use strict";
        _class_call_check(this, MockContextType);
    };
    before(/*#__PURE__*/ _async_to_generator(function() {
        var actionRegistryInstance;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistration.registerActionExtension({
                        actionId: actionId,
                        category: "ELEMENTS" /* UI.ActionRegistration.ActionCategory.ELEMENTS */ ,
                        title: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedLazyString(actionTitle),
                        loadActionDelegate: function loadActionDelegate() {
                            return _async_to_generator(function() {
                                return _ts_generator(this, function(_state) {
                                    return [
                                        2,
                                        new MockActionDelegate()
                                    ];
                                });
                            })();
                        },
                        contextTypes: function contextTypes() {
                            return [
                                MockContextType
                            ];
                        }
                    });
                    _core_root_root_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.experiments.clearForTest();
                    return [
                        4,
                        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.initializeGlobalVars)()
                    ];
                case 1:
                    _state.sent();
                    // A ShortcutRegistry instance is needed to add a command to execute an action to the
                    // command menu and an instance of ActionRegistry is needed to instatiate the ShorcutRegistry.
                    actionRegistryInstance = _legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistry.ActionRegistry.instance({
                        forceNew: true
                    });
                    _legacy_js__WEBPACK_IMPORTED_MODULE_5__.ShortcutRegistry.ShortcutRegistry.instance({
                        forceNew: true,
                        actionRegistry: actionRegistryInstance
                    });
                    _legacy_js__WEBPACK_IMPORTED_MODULE_5__.Context.Context.instance().setFlavor(MockContextType, new MockContextType());
                    return [
                        2
                    ];
            }
        });
    }));
    after(/*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.deinitializeGlobalVars)()
                    ];
                case 1:
                    _state.sent();
                    _legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistry.ActionRegistry.reset();
                    _legacy_js__WEBPACK_IMPORTED_MODULE_5__.ShortcutRegistry.ShortcutRegistry.removeInstance();
                    _legacy_js__WEBPACK_IMPORTED_MODULE_5__.Context.Context.instance().setFlavor(MockContextType, null);
                    return [
                        2
                    ];
            }
        });
    }));
    describe('hasAction', function() {
        it('yields true for a registered action', function() {
            assert.isTrue(_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistry.ActionRegistry.instance().hasAction(actionId));
        });
        it('yields false for an unknown action', function() {
            assert.isFalse(_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistry.ActionRegistry.instance().hasAction('foo'));
        });
    });
    describe('getAction', function() {
        it('retrieves a registered action', function() {
            var preRegisteredAction = _legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistry.ActionRegistry.instance().getAction(actionId);
            assert.strictEqual(preRegisteredAction.title(), actionTitle, 'Action title is not returned correctly');
        });
        it('throws for unknown actions', function() {
            assert.throws(function() {
                return _legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistry.ActionRegistry.instance().getAction('foo');
            });
        });
    });
    it('finds a pre registered action as available when its context types are in the current context flavors', function() {
        var availableActions = _legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistry.ActionRegistry.instance().availableActions().map(function(action) {
            return action.id();
        });
        assert.notStrictEqual(availableActions.indexOf(actionId), -1);
    });
    it('executes a pre registered action', /*#__PURE__*/ _async_to_generator(function() {
        var preRegisteredAction;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    actionExecuted = false;
                    preRegisteredAction = _legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistry.ActionRegistry.instance().getAction(actionId);
                    return [
                        4,
                        preRegisteredAction.execute()
                    ];
                case 1:
                    _state.sent();
                    assert.isTrue(actionExecuted, 'Action was not executed');
                    return [
                        2
                    ];
            }
        });
    }));
    it('executes a pre registered from the command menu', /*#__PURE__*/ _async_to_generator(function() {
        var commandMenuProvider, i;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    actionExecuted = false;
                    commandMenuProvider = new _components_quick_open_quick_open_js__WEBPACK_IMPORTED_MODULE_4__.CommandMenu.CommandMenuProvider();
                    commandMenuProvider.attach();
                    i = 0;
                    _state.label = 1;
                case 1:
                    if (!(i < commandMenuProvider.itemCount())) return [
                        3,
                        4
                    ];
                    if (!commandMenuProvider.itemKeyAt(i).includes(actionTitle)) return [
                        3,
                        3
                    ];
                    return [
                        4,
                        commandMenuProvider.selectItem(i, '')
                    ];
                case 2:
                    _state.sent();
                    _state.label = 3;
                case 3:
                    ++i;
                    return [
                        3,
                        1
                    ];
                case 4:
                    assert.isTrue(actionExecuted, 'Action was not executed from CommandMenu');
                    return [
                        2
                    ];
            }
        });
    }));
    it('throws an error trying to register a duplicated view id', function() {
        assert.throws(function() {
            _legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistration.registerActionExtension({
                actionId: actionId,
                category: "ELEMENTS" /* UI.ActionRegistration.ActionCategory.ELEMENTS */ 
            });
        });
    });
    it('throws an error trying to register an action with an invalid id', function() {
        assert.throws(function() {
            _legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistration.registerActionExtension({
                actionId: 'quickOpen.show',
                category: "GLOBAL" /* UI.ActionRegistration.ActionCategory.GLOBAL */ 
            });
        });
    });
    it('does not find a pre registered action as available when its context types are not in the current context flavors', function() {
        _legacy_js__WEBPACK_IMPORTED_MODULE_5__.Context.Context.instance().setFlavor(MockContextType, null);
        var availableActions = _legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistry.ActionRegistry.instance().availableActions().map(function(action) {
            return action.id();
        });
        assert.strictEqual(availableActions.indexOf(actionId), -1);
    });
    it('deletes a registered action using its id', function() {
        var removalResult = _legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistration.maybeRemoveActionExtension(actionId);
        assert.isTrue(removalResult);
        assert.doesNotThrow(function() {
            _legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistration.registerActionExtension({
                actionId: actionId,
                category: "ELEMENTS" /* UI.ActionRegistration.ActionCategory.ELEMENTS */ 
            });
        });
    });
}); //# sourceMappingURL=ActionRegistration.test.js.map


}),

}]);