"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_common_Settings_test_js"], {
"./core/common/Settings.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./core/common/common.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
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

var SettingsStorage = _common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingsStorage;
var VersionController = _common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.VersionController;
var _store = /*#__PURE__*/ new WeakMap();
var MockStore = /*#__PURE__*/ function() {
    "use strict";
    function MockStore() {
        _class_call_check(this, MockStore);
        _class_private_field_init(this, _store, {
            writable: true,
            value: new Map()
        });
    }
    _create_class(MockStore, [
        {
            key: "register",
            value: function register() {}
        },
        {
            key: "set",
            value: function set(key, value) {
                _class_private_field_get(this, _store).set(key, value);
            }
        },
        {
            key: "get",
            value: function get(key) {
                return _class_private_field_get(this, _store).get(key);
            }
        },
        {
            key: "remove",
            value: function remove(key) {
                _class_private_field_get(this, _store).delete(key);
            }
        },
        {
            key: "clear",
            value: function clear() {
                _class_private_field_get(this, _store).clear();
            }
        }
    ]);
    return MockStore;
}();
describe('SettingsStorage class', function() {
    it('is able to set a name', function() {
        var settingsStorage = new SettingsStorage({});
        settingsStorage.set('Test Name', 'Test Value');
        assert.strictEqual(settingsStorage.get('Test Name'), 'Test Value', 'Name was not retrieve correctly');
    });
    it('is able to check if a name that it has exists', function() {
        var settingsStorage = new SettingsStorage({});
        settingsStorage.set('Test Name', 'Test Value');
        assert.isTrue(settingsStorage.has('Test Name'), 'the class should have that name');
    });
    it('is able to check if a name that it does not have exists', function() {
        var settingsStorage = new SettingsStorage({});
        assert.isFalse(settingsStorage.has('Test Name'), 'the class should not have that name');
    });
    it('is able to remove a name', function() {
        var settingsStorage = new SettingsStorage({});
        settingsStorage.set('Test Name', 'Test Value');
        settingsStorage.remove('Test Name');
        assert.isFalse(settingsStorage.has('Test Name'), 'the class should not have that name');
    });
    it('is able to remove all names', function() {
        var settingsStorage = new SettingsStorage({});
        settingsStorage.set('Test Name 1', 'Test Value 1');
        settingsStorage.set('Test Name 2', 'Test Value 2');
        settingsStorage.removeAll();
        assert.isFalse(settingsStorage.has('Test Name 1'), 'the class should not have any names');
        assert.isFalse(settingsStorage.has('Test Name 2'), 'the class should not have any names');
    });
    describe('forceGet', function() {
        it('returns the value of the backing store, not the cached one', /*#__PURE__*/ _async_to_generator(function() {
            var mockStore, settingsStorage, _, _1;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        mockStore = new MockStore();
                        settingsStorage = new SettingsStorage({}, mockStore);
                        settingsStorage.set('test', 'value');
                        mockStore.set('test', 'changed');
                        _ = assert.strictEqual;
                        return [
                            4,
                            settingsStorage.forceGet('test')
                        ];
                    case 1:
                        _.apply(assert, [
                            _state.sent(),
                            'changed'
                        ]);
                        _1 = assert.strictEqual;
                        return [
                            4,
                            settingsStorage.forceGet('test')
                        ];
                    case 2:
                        _1.apply(assert, [
                            _state.sent(),
                            'changed'
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('updates the cached value of a SettingsStorage', /*#__PURE__*/ _async_to_generator(function() {
            var mockStore, settingsStorage;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        mockStore = new MockStore();
                        settingsStorage = new SettingsStorage({}, mockStore);
                        settingsStorage.set('test', 'value');
                        mockStore.set('test', 'changed');
                        assert.strictEqual(settingsStorage.get('test'), 'value');
                        return [
                            4,
                            settingsStorage.forceGet('test')
                        ];
                    case 1:
                        _state.sent();
                        assert.strictEqual(settingsStorage.get('test'), 'changed');
                        return [
                            2
                        ];
                }
            });
        }));
        it('leaves the cached value alone if the backing store has the same value', /*#__PURE__*/ _async_to_generator(function() {
            var mockStore, settingsStorage, _, _1;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        mockStore = new MockStore();
                        settingsStorage = new SettingsStorage({}, mockStore);
                        mockStore.set('test', 'value');
                        settingsStorage.set('test', 'value');
                        assert.strictEqual(mockStore.get('test'), 'value');
                        _ = assert.strictEqual;
                        return [
                            4,
                            settingsStorage.forceGet('test')
                        ];
                    case 1:
                        _.apply(assert, [
                            _state.sent(),
                            'value'
                        ]);
                        assert.strictEqual(mockStore.get('test'), 'value');
                        _1 = assert.strictEqual;
                        return [
                            4,
                            settingsStorage.forceGet('test')
                        ];
                    case 2:
                        _1.apply(assert, [
                            _state.sent(),
                            'value'
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
    });
});
describe('Settings instance', function() {
    afterEach(function() {
        _common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.removeInstance();
        _common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.resetSettings(); // Clear SettingsRegistrations.
    });
    it('can be instantiated in a test', function() {
        var dummyStorage = new SettingsStorage({});
        var settings = _common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance({
            forceNew: true,
            syncedStorage: dummyStorage,
            globalStorage: dummyStorage,
            localStorage: dummyStorage
        });
        assert.isOk(settings);
    });
    it('throws when constructed without storage', function() {
        assert.throws(function() {
            return _common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance();
        });
        assert.throws(function() {
            return _common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance({
                forceNew: true,
                syncedStorage: null,
                globalStorage: null,
                localStorage: null
            });
        });
    });
    it('stores synced settings in the correct storage', function() {
        var syncedStorage = new SettingsStorage({});
        var dummyStorage = new SettingsStorage({});
        _common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.registerSettingExtension({
            settingName: 'static-synced-setting',
            settingType: "boolean" /* Common.Settings.SettingType.BOOLEAN */ ,
            defaultValue: false,
            storageType: "Synced" /* Common.Settings.SettingStorageType.Synced */ 
        });
        var settings = _common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance({
            forceNew: true,
            syncedStorage: syncedStorage,
            globalStorage: dummyStorage,
            localStorage: dummyStorage
        });
        var dynamicSetting = settings.createSetting('dynamic-synced-setting', 'default val', "Synced" /* Common.Settings.SettingStorageType.Synced */ );
        dynamicSetting.set('foo value');
        var staticSetting = settings.moduleSetting('static-synced-setting');
        staticSetting.set(true);
        assert.isFalse(dummyStorage.has('dynamic-synced-setting'));
        assert.isFalse(dummyStorage.has('static-synced-setting'));
        assert.strictEqual(syncedStorage.get('dynamic-synced-setting'), '"foo value"');
        assert.strictEqual(syncedStorage.get('static-synced-setting'), 'true');
    });
    it('registers settings with the backing store when creating them', function() {
        var registeredSettings = new Set();
        var mockBackingStore = _object_spread_props(_object_spread({}, _common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.NOOP_STORAGE), {
            register: function(name) {
                return registeredSettings.add(name);
            }
        });
        var storage = new SettingsStorage({}, mockBackingStore, '__prefix__.');
        _common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.registerSettingExtension({
            settingName: 'static-global-setting',
            settingType: "boolean" /* Common.Settings.SettingType.BOOLEAN */ ,
            defaultValue: false,
            storageType: "Global" /* Common.Settings.SettingStorageType.Global */ 
        });
        var settings = _common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance({
            forceNew: true,
            syncedStorage: storage,
            globalStorage: storage,
            localStorage: storage
        });
        settings.createSetting('dynamic-local-setting', 42, "Local" /* Common.Settings.SettingStorageType.Local */ );
        settings.createSetting('dynamic-synced-setting', 'foo', "Synced" /* Common.Settings.SettingStorageType.Synced */ );
        assert.isTrue(registeredSettings.has('__prefix__.static-global-setting'));
        assert.isTrue(registeredSettings.has('__prefix__.dynamic-local-setting'));
        assert.isTrue(registeredSettings.has('__prefix__.dynamic-synced-setting'));
    });
    describe('forceGet', function() {
        it('triggers a setting changed event in case the value in the backing store got updated and we update the cached value', /*#__PURE__*/ _async_to_generator(function() {
            var mockStore, settingsStorage, settings, testSetting, changes, _, _1, _2;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        mockStore = new MockStore();
                        settingsStorage = new SettingsStorage({}, mockStore);
                        mockStore.set('test', '"old"');
                        settings = _common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance({
                            forceNew: true,
                            syncedStorage: settingsStorage,
                            globalStorage: settingsStorage,
                            localStorage: settingsStorage
                        });
                        testSetting = settings.createSetting('test', 'default val', "Global" /* Common.Settings.SettingStorageType.Global */ );
                        changes = [];
                        testSetting.addChangeListener(function(event) {
                            changes.push(event.data);
                        });
                        mockStore.set('test', '"new"');
                        _ = assert.strictEqual;
                        return [
                            4,
                            testSetting.forceGet()
                        ];
                    case 1:
                        _.apply(assert, [
                            _state.sent(),
                            'new'
                        ]);
                        assert.deepEqual(changes, [
                            'new'
                        ]);
                        assert.strictEqual(mockStore.get('test'), '"new"');
                        _1 = assert.strictEqual;
                        return [
                            4,
                            settingsStorage.forceGet('test')
                        ];
                    case 2:
                        _1.apply(assert, [
                            _state.sent(),
                            '"new"'
                        ]);
                        _2 = assert.strictEqual;
                        return [
                            4,
                            testSetting.forceGet()
                        ];
                    case 3:
                        _2.apply(assert, [
                            _state.sent(),
                            'new'
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
    });
});
describe('VersionController', function() {
    var settings;
    var syncedStorage;
    var globalStorage;
    var localStorage;
    beforeEach(function() {
        var mockStore = new MockStore();
        syncedStorage = new _common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingsStorage({}, mockStore);
        globalStorage = new _common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingsStorage({}, mockStore);
        localStorage = new _common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingsStorage({}, mockStore);
        settings = _common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance({
            forceNew: true,
            syncedStorage: syncedStorage,
            globalStorage: globalStorage,
            localStorage: localStorage
        });
    });
    afterEach(function() {
        _common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.removeInstance();
    });
    describe('updateVersion', function() {
        var spyAllUpdateMethods = function spyAllUpdateMethods(versionController) {
            var spies = [];
            for(var i = 0; i < VersionController.CURRENT_VERSION; ++i){
                spies.push(sinon.spy(versionController, "updateVersionFrom".concat(i, "To").concat(i + 1)));
            }
            assert.lengthOf(spies, VersionController.CURRENT_VERSION);
            return spies;
        };
        it('initializes version settings with the current version if the setting doesn\'t exist yet', function() {
            assert.isFalse(globalStorage.has(VersionController.GLOBAL_VERSION_SETTING_NAME));
            assert.isFalse(syncedStorage.has(VersionController.SYNCED_VERSION_SETTING_NAME));
            assert.isFalse(localStorage.has(VersionController.LOCAL_VERSION_SETTING_NAME));
            new VersionController().updateVersion();
            var currentVersion = VersionController.CURRENT_VERSION.toString();
            assert.strictEqual(globalStorage.get(VersionController.GLOBAL_VERSION_SETTING_NAME), currentVersion);
            assert.strictEqual(syncedStorage.get(VersionController.SYNCED_VERSION_SETTING_NAME), currentVersion);
            assert.strictEqual(localStorage.get(VersionController.LOCAL_VERSION_SETTING_NAME), currentVersion);
        });
        it('does not run any update* methods if no version setting exist yet', function() {
            var versionController = new VersionController();
            var spies = spyAllUpdateMethods(versionController);
            versionController.updateVersion();
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = spies[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var spy = _step.value;
                    assert.isFalse(spy.called);
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
        });
        it('does not run any update* methods if all version settings are already current', function() {
            var currentVersion = VersionController.CURRENT_VERSION.toString();
            globalStorage.set(VersionController.GLOBAL_VERSION_SETTING_NAME, currentVersion);
            syncedStorage.set(VersionController.SYNCED_VERSION_SETTING_NAME, currentVersion);
            localStorage.set(VersionController.LOCAL_VERSION_SETTING_NAME, currentVersion);
            var versionController = new VersionController();
            var spies = spyAllUpdateMethods(versionController);
            versionController.updateVersion();
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = spies[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var spy = _step.value;
                    assert.isFalse(spy.called);
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
        });
        it('runs correct update* methods if the local bucket lags behind', function() {
            var currentVersion = VersionController.CURRENT_VERSION.toString();
            var localVersion = (VersionController.CURRENT_VERSION - 3).toString();
            globalStorage.set(VersionController.GLOBAL_VERSION_SETTING_NAME, currentVersion);
            syncedStorage.set(VersionController.SYNCED_VERSION_SETTING_NAME, currentVersion);
            localStorage.set(VersionController.LOCAL_VERSION_SETTING_NAME, localVersion);
            var versionController = new VersionController();
            var spies = spyAllUpdateMethods(versionController);
            versionController.updateVersion();
            var expectedUncalledSpies = spies.slice(0, -3);
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = expectedUncalledSpies[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var spy = _step.value;
                    assert.isFalse(spy.called);
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
            var expectedCalledSpies = spies.slice(-3);
            var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
            try {
                for(var _iterator1 = expectedCalledSpies[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                    var spy1 = _step1.value;
                    assert.isTrue(spy1.called);
                }
            } catch (err) {
                _didIteratorError1 = true;
                _iteratorError1 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                        _iterator1.return();
                    }
                } finally{
                    if (_didIteratorError1) {
                        throw _iteratorError1;
                    }
                }
            }
        });
        it('runs correct update* methods if the synced bucket runs ahead', function() {
            var currentVersion = VersionController.CURRENT_VERSION.toString();
            var oldVersion = (VersionController.CURRENT_VERSION - 1).toString();
            globalStorage.set(VersionController.GLOBAL_VERSION_SETTING_NAME, oldVersion);
            syncedStorage.set(VersionController.SYNCED_VERSION_SETTING_NAME, currentVersion);
            localStorage.set(VersionController.LOCAL_VERSION_SETTING_NAME, oldVersion);
            var versionController = new VersionController();
            var spies = spyAllUpdateMethods(versionController);
            versionController.updateVersion();
            var expectedUncalledSpies = spies.slice(0, -1);
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = expectedUncalledSpies[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var spy = _step.value;
                    assert.isFalse(spy.called);
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
            var expectedCalledSpies = spies.slice(-1);
            var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
            try {
                for(var _iterator1 = expectedCalledSpies[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                    var spy1 = _step1.value;
                    assert.isTrue(spy1.called);
                }
            } catch (err) {
                _didIteratorError1 = true;
                _iteratorError1 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                        _iterator1.return();
                    }
                } finally{
                    if (_didIteratorError1) {
                        throw _iteratorError1;
                    }
                }
            }
        });
    });
    describe('updateVersionFrom31To32', function() {
        it('correctly adds resourceTypeName to breakpoints', function() {
            var versionController = new VersionController();
            var breakpointsSetting = settings.createLocalSetting('breakpoints', [
                {
                    url: 'webpack:///src/foo.ts',
                    lineNumber: 4,
                    condition: '',
                    enabled: false
                },
                {
                    url: 'foo.js',
                    lineNumber: 1,
                    columnNumber: 42,
                    condition: 'false',
                    enabled: true
                }
            ]);
            versionController.updateVersionFrom31To32();
            var breakpoints = breakpointsSetting.get();
            assert.lengthOf(breakpoints, 2);
            assert.propertyVal(breakpoints[0], 'url', 'webpack:///src/foo.ts');
            assert.propertyVal(breakpoints[0], 'resourceTypeName', 'script');
            assert.propertyVal(breakpoints[0], 'lineNumber', 4);
            assert.notProperty(breakpoints[0], 'columnNumber');
            assert.propertyVal(breakpoints[0], 'condition', '');
            assert.propertyVal(breakpoints[0], 'enabled', false);
            assert.propertyVal(breakpoints[1], 'url', 'foo.js');
            assert.propertyVal(breakpoints[1], 'resourceTypeName', 'script');
            assert.propertyVal(breakpoints[1], 'lineNumber', 1);
            assert.propertyVal(breakpoints[1], 'columnNumber', 42);
            assert.propertyVal(breakpoints[1], 'condition', 'false');
            assert.propertyVal(breakpoints[1], 'enabled', true);
        });
    });
    describe('updateVersionFrom32To33', function() {
        it('correctly discards previously viewed files without url properties', function() {
            var versionController = new VersionController();
            var previouslyViewedFilesSetting = settings.createLocalSetting('previouslyViewedFiles', [
                {
                    url: 'http://localhost:3000',
                    scrollLineNumber: 1
                },
                {
                    scrollLineNumber: 1
                },
                {},
                {
                    url: 'webpack:///src/foo.ts'
                }
            ]);
            versionController.updateVersionFrom32To33();
            var previouslyViewedFiles = previouslyViewedFilesSetting.get();
            assert.lengthOf(previouslyViewedFiles, 2);
            assert.propertyVal(previouslyViewedFiles[0], 'url', 'http://localhost:3000');
            assert.notProperty(previouslyViewedFiles[0], 'selectionRange');
            assert.propertyVal(previouslyViewedFiles[0], 'scrollLineNumber', 1);
            assert.propertyVal(previouslyViewedFiles[1], 'url', 'webpack:///src/foo.ts');
            assert.notProperty(previouslyViewedFiles[1], 'selectionRange');
            assert.notProperty(previouslyViewedFiles[1], 'scrollLineNumber');
        });
        it('correctly adds resourceTypeName to previously viewed files', function() {
            var versionController = new VersionController();
            var previouslyViewedFilesSetting = settings.createLocalSetting('previouslyViewedFiles', [
                {
                    url: 'http://localhost:3000',
                    scrollLineNumber: 1
                },
                {
                    url: 'webpack:///src/foo.ts'
                }
            ]);
            versionController.updateVersionFrom32To33();
            var previouslyViewedFiles = previouslyViewedFilesSetting.get();
            assert.lengthOf(previouslyViewedFiles, 2);
            assert.propertyVal(previouslyViewedFiles[0], 'url', 'http://localhost:3000');
            assert.propertyVal(previouslyViewedFiles[0], 'resourceTypeName', 'script');
            assert.notProperty(previouslyViewedFiles[0], 'selectionRange');
            assert.propertyVal(previouslyViewedFiles[0], 'scrollLineNumber', 1);
            assert.propertyVal(previouslyViewedFiles[1], 'url', 'webpack:///src/foo.ts');
            assert.propertyVal(previouslyViewedFiles[1], 'resourceTypeName', 'script');
            assert.notProperty(previouslyViewedFiles[1], 'selectionRange');
            assert.notProperty(previouslyViewedFiles[1], 'scrollLineNumber');
        });
    });
    describe('updateVersionFrom33To34', function() {
        it('correctly adds isLogpoint to breakpoints', function() {
            var versionController = new VersionController();
            var breakpointsSetting = settings.createLocalSetting('breakpoints', [
                {
                    url: 'webpack:///src/foo.ts',
                    lineNumber: 4,
                    resourceTypeName: 'script',
                    condition: '/** DEVTOOLS_LOGPOINT */ console.log(foo.property)',
                    enabled: true
                },
                {
                    url: 'foo.js',
                    lineNumber: 1,
                    columnNumber: 42,
                    resourceTypeName: 'script',
                    condition: 'x === 42',
                    enabled: true
                },
                {
                    url: 'bar.js',
                    lineNumber: 5,
                    columnNumber: 1,
                    resourceTypeName: 'script',
                    condition: '',
                    enabled: true
                }
            ]);
            versionController.updateVersionFrom33To34();
            var breakpoints = breakpointsSetting.get();
            assert.propertyVal(breakpoints[0], 'isLogpoint', true);
            assert.propertyVal(breakpoints[1], 'isLogpoint', false);
            assert.propertyVal(breakpoints[2], 'isLogpoint', false);
        });
    });
    describe('updateVersionFrom34To35', function() {
        it('removes the logpoint prefix/suffix from logpoints', function() {
            var versionController = new VersionController();
            var breakpointsSetting = settings.createLocalSetting('breakpoints', [
                {
                    url: 'webpack:///src/foo.ts',
                    lineNumber: 4,
                    resourceTypeName: 'script',
                    condition: '/** DEVTOOLS_LOGPOINT */ console.log(foo.property)',
                    enabled: true,
                    isLogpoint: true
                }
            ]);
            versionController.updateVersionFrom34To35();
            var breakpoints = breakpointsSetting.get();
            assert.lengthOf(breakpoints, 1);
            assert.propertyVal(breakpoints[0], 'condition', 'foo.property');
        });
        it('leaves conditional breakpoints alone', function() {
            var versionController = new VersionController();
            var breakpointsSetting = settings.createLocalSetting('breakpoints', [
                {
                    url: 'webpack:///src/foo.ts',
                    lineNumber: 4,
                    resourceTypeName: 'script',
                    condition: 'x === 42',
                    enabled: true,
                    isLogpoint: false
                }
            ]);
            versionController.updateVersionFrom34To35();
            var breakpoints = breakpointsSetting.get();
            assert.lengthOf(breakpoints, 1);
            assert.propertyVal(breakpoints[0], 'condition', 'x === 42');
        });
    });
    describe('updateVersionFrom35To36', function() {
        it('update showThirdPartyIssues setting value to true', function() {
            var versionController = new VersionController();
            var showThirdPartyIssuesSetting = settings.createLocalSetting('showThirdPartyIssues', false);
            versionController.updateVersionFrom35To36();
            assert.isTrue(showThirdPartyIssuesSetting.get());
        });
    });
    describe('updateVersionFrom36To37', function() {
        it('updates all keys to kebab case', function() {
            var versionController = new VersionController();
            settings.globalStorage.set('globalSetting1', '');
            settings.globalStorage.set('globalSetting2', '');
            settings.localStorage.set('localSetting', '');
            settings.syncedStorage.set('syncedSetting', '');
            versionController.updateVersionFrom36To37();
            assert.deepEqual(settings.globalStorage.keys(), [
                'global-setting-1',
                'global-setting-2'
            ]);
            assert.deepEqual(settings.localStorage.keys(), [
                'local-setting'
            ]);
            assert.deepEqual(settings.syncedStorage.keys(), [
                'synced-setting'
            ]);
        });
        it('keeps kebab case settings as is', function() {
            var versionController = new VersionController();
            settings.globalStorage.set('setting', '123');
            settings.localStorage.set('another-setting', '456');
            versionController.updateVersionFrom36To37();
            assert.deepEqual(settings.globalStorage.keys(), [
                'setting'
            ]);
            assert.strictEqual(settings.globalStorage.get('setting'), '123');
            assert.strictEqual(settings.localStorage.get('another-setting'), '456');
        });
        it('update data grid column weights value', function() {
            var versionController = new VersionController();
            settings.globalStorage.set('dataGrid-foo-columnWeights', JSON.stringify({
                columnOne: 1,
                columnTwo: 2
            }));
            versionController.updateVersionFrom36To37();
            var setting = settings.createSetting('data-grid-foo-column-weights', {});
            assert.deepEqual(setting.get(), {
                'column-one': 1,
                'column-two': 2
            });
        });
        it('update view manager settings values', function() {
            var versionController = new VersionController();
            settings.globalStorage.set('viewsLocationOverride', JSON.stringify({
                somePanel: 'main',
                other_panel: 'drawer'
            }));
            settings.globalStorage.set('closeableTabs', JSON.stringify({
                somePanel: false,
                other_panel: true
            }));
            settings.globalStorage.set('main-tabOrder', JSON.stringify({
                somePanel: 2,
                other_panel: 1
            }));
            settings.globalStorage.set('main-selectedTab', JSON.stringify('somePanel'));
            versionController.updateVersionFrom36To37();
            assert.deepEqual(settings.createSetting('views-location-override', {}).get(), {
                'some-panel': 'main',
                'other-panel': 'drawer'
            });
            assert.deepEqual(settings.createSetting('closeable-tabs', {}).get(), {
                'some-panel': false,
                'other-panel': true
            });
            assert.deepEqual(settings.createSetting('main-tab-order', {}).get(), {
                'some-panel': 2,
                'other-panel': 1
            });
            assert.deepEqual(settings.createSetting('main-selected-tab', '').get(), 'some-panel');
        });
    });
}); //# sourceMappingURL=Settings.test.js.map


}),

}]);