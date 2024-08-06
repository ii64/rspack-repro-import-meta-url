"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_node_PuppeteerNode_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/node/PuppeteerNode.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PuppeteerNode: function() { return PuppeteerNode; }
});
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */var _common_Puppeteer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Puppeteer.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Puppeteer.js");
/* harmony import */var _revisions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../revisions.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/revisions.js");
/* harmony import */var _ChromeLauncher_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChromeLauncher.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/node/ChromeLauncher.js");
/* harmony import */var _FirefoxLauncher_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FirefoxLauncher.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/node/FirefoxLauncher.js");
/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ function _assert_this_initialized(self) {
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
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
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





var __launcher = /*#__PURE__*/ new WeakMap(), _lastLaunchedProduct = /*#__PURE__*/ new WeakMap(), _launcher = /*#__PURE__*/ new WeakMap();
/**
 * Extends the main {@link Puppeteer} class with Node specific behaviour for
 * fetching and downloading browsers.
 *
 * If you're using Puppeteer in a Node environment, this is the class you'll get
 * when you run `require('puppeteer')` (or the equivalent ES `import`).
 *
 * @remarks
 * The most common method to use is {@link PuppeteerNode.launch | launch}, which
 * is used to launch and connect to a new browser instance.
 *
 * See {@link Puppeteer | the main Puppeteer class} for methods common to all
 * environments, such as {@link Puppeteer.connect}.
 *
 * @example
 * The following is a typical example of using Puppeteer to drive automation:
 *
 * ```ts
 * import puppeteer from 'puppeteer';
 *
 * (async () => {
 *   const browser = await puppeteer.launch();
 *   const page = await browser.newPage();
 *   await page.goto('https://www.google.com');
 *   // other actions...
 *   await browser.close();
 * })();
 * ```
 *
 * Once you have created a `page` you have access to a large API to interact
 * with the page, navigate, or find certain elements in that page.
 * The {@link Page | `page` documentation} lists all the available methods.
 *
 * @public
 */ var PuppeteerNode = /*#__PURE__*/ function(Puppeteer) {
    "use strict";
    _inherits(PuppeteerNode, Puppeteer);
    var _super = _create_super(PuppeteerNode);
    function PuppeteerNode(settings) {
        _class_call_check(this, PuppeteerNode);
        var _this;
        var configuration = settings.configuration, commonSettings = _object_without_properties(settings, [
            "configuration"
        ]);
        _this = _super.call(this, commonSettings);
        /**
     * @internal
     */ _class_private_field_init(_assert_this_initialized(_this), _launcher, {
            get: get_launcher,
            set: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), __launcher, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _lastLaunchedProduct, {
            writable: true,
            value: void 0
        });
        /**
     * @internal
     */ _define_property(_assert_this_initialized(_this), "defaultBrowserRevision", void 0);
        /**
     * @internal
     */ _define_property(_assert_this_initialized(_this), "configuration", {});
        if (configuration) {
            _this.configuration = configuration;
        }
        switch(_this.configuration.defaultProduct){
            case 'firefox':
                _this.defaultBrowserRevision = _revisions_js__WEBPACK_IMPORTED_MODULE_2__.PUPPETEER_REVISIONS.firefox;
                break;
            default:
                _this.configuration.defaultProduct = 'chrome';
                _this.defaultBrowserRevision = _revisions_js__WEBPACK_IMPORTED_MODULE_2__.PUPPETEER_REVISIONS.chrome;
                break;
        }
        _this.connect = _this.connect.bind(_assert_this_initialized(_this));
        _this.launch = _this.launch.bind(_assert_this_initialized(_this));
        _this.executablePath = _this.executablePath.bind(_assert_this_initialized(_this));
        _this.defaultArgs = _this.defaultArgs.bind(_assert_this_initialized(_this));
        _this.trimCache = _this.trimCache.bind(_assert_this_initialized(_this));
        return _this;
    }
    _create_class(PuppeteerNode, [
        {
            /**
     * This method attaches Puppeteer to an existing browser instance.
     *
     * @param options - Set of configurable options to set on the browser.
     * @returns Promise which resolves to browser instance.
     */ key: "connect",
            value: function connect(options) {
                return _get(_get_prototype_of(PuppeteerNode.prototype), "connect", this).call(this, options);
            }
        },
        {
            /**
     * Launches a browser instance with given arguments and options when
     * specified.
     *
     * When using with `puppeteer-core`,
     * {@link LaunchOptions.executablePath | options.executablePath} or
     * {@link LaunchOptions.channel | options.channel} must be provided.
     *
     * @example
     * You can use {@link LaunchOptions.ignoreDefaultArgs | options.ignoreDefaultArgs}
     * to filter out `--mute-audio` from default arguments:
     *
     * ```ts
     * const browser = await puppeteer.launch({
     *   ignoreDefaultArgs: ['--mute-audio'],
     * });
     * ```
     *
     * @remarks
     * Puppeteer can also be used to control the Chrome browser, but it works best
     * with the version of Chrome for Testing downloaded by default.
     * There is no guarantee it will work with any other version. If Google Chrome
     * (rather than Chrome for Testing) is preferred, a
     * {@link https://www.google.com/chrome/browser/canary.html | Chrome Canary}
     * or
     * {@link https://www.chromium.org/getting-involved/dev-channel | Dev Channel}
     * build is suggested. See
     * {@link https://www.howtogeek.com/202825/what%E2%80%99s-the-difference-between-chromium-and-chrome/ | this article}
     * for a description of the differences between Chromium and Chrome.
     * {@link https://chromium.googlesource.com/chromium/src/+/lkgr/docs/chromium_browser_vs_google_chrome.md | This article}
     * describes some differences for Linux users. See
     * {@link https://developer.chrome.com/blog/chrome-for-testing/ | this doc} for the description
     * of Chrome for Testing.
     *
     * @param options - Options to configure launching behavior.
     */ key: "launch",
            value: function launch() {
                var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                var _options_product = options.product, product = _options_product === void 0 ? this.defaultProduct : _options_product;
                _class_private_field_set(this, _lastLaunchedProduct, product);
                return _class_private_field_get(this, _launcher).launch(options);
            }
        },
        {
            /**
     * The default executable path.
     */ key: "executablePath",
            value: function executablePath(channel) {
                return _class_private_field_get(this, _launcher).executablePath(channel);
            }
        },
        {
            key: "browserRevision",
            get: /**
     * @internal
     */ function get() {
                var _$_class_private_field_get;
                var _class_private_field_get_getActualBrowserRevision, _ref;
                return (_ref = (_class_private_field_get_getActualBrowserRevision = (_$_class_private_field_get = _class_private_field_get(this, __launcher)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.getActualBrowserRevision()) !== null && _class_private_field_get_getActualBrowserRevision !== void 0 ? _class_private_field_get_getActualBrowserRevision : this.configuration.browserRevision) !== null && _ref !== void 0 ? _ref : this.defaultBrowserRevision;
            }
        },
        {
            key: "defaultDownloadPath",
            get: /**
     * The default download path for puppeteer. For puppeteer-core, this
     * code should never be called as it is never defined.
     *
     * @internal
     */ function get() {
                return this.configuration.cacheDirectory;
            }
        },
        {
            key: "lastLaunchedProduct",
            get: /**
     * The name of the browser that was last launched.
     */ function get() {
                var _$_class_private_field_get;
                return (_$_class_private_field_get = _class_private_field_get(this, _lastLaunchedProduct)) !== null && _$_class_private_field_get !== void 0 ? _$_class_private_field_get : this.defaultProduct;
            }
        },
        {
            key: "defaultProduct",
            get: /**
     * The name of the browser that will be launched by default. For
     * `puppeteer`, this is influenced by your configuration. Otherwise, it's
     * `chrome`.
     */ function get() {
                var _this_configuration_defaultProduct;
                return (_this_configuration_defaultProduct = this.configuration.defaultProduct) !== null && _this_configuration_defaultProduct !== void 0 ? _this_configuration_defaultProduct : 'chrome';
            }
        },
        {
            key: "product",
            get: /**
     * @deprecated Do not use as this field as it does not take into account
     * multiple browsers of different types. Use
     * {@link PuppeteerNode.defaultProduct | defaultProduct} or
     * {@link PuppeteerNode.lastLaunchedProduct | lastLaunchedProduct}.
     *
     * @returns The name of the browser that is under automation.
     */ function get() {
                return _class_private_field_get(this, _launcher).product;
            }
        },
        {
            /**
     * @param options - Set of configurable options to set on the browser.
     *
     * @returns The default flags that Chromium will be launched with.
     */ key: "defaultArgs",
            value: function defaultArgs() {
                var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                return _class_private_field_get(this, _launcher).defaultArgs(options);
            }
        },
        {
            key: "trimCache",
            value: /**
     * Removes all non-current Firefox and Chrome binaries in the cache directory
     * identified by the provided Puppeteer configuration. The current browser
     * version is determined by resolving PUPPETEER_REVISIONS from Puppeteer
     * unless `configuration.browserRevision` is provided.
     *
     * @remarks
     *
     * Note that the method does not check if any other Puppeteer versions
     * installed on the host that use the same cache directory require the
     * non-current binaries.
     *
     * @public
     */ function trimCache() {
                var _this = this;
                return _async_to_generator(function() {
                    var platform, cacheDir, installedBrowsers, product, puppeteerBrowsers, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item, err, currentBrowserBuilds, currentBrowsers, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, installedBrowser, err;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                platform = Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                                if (!platform) {
                                    throw new Error('The current platform is not supported.');
                                }
                                cacheDir = _this.configuration.cacheDirectory;
                                return [
                                    4,
                                    Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
                                        cacheDir: cacheDir
                                    })
                                ];
                            case 1:
                                installedBrowsers = _state.sent();
                                product = _this.configuration.defaultProduct;
                                puppeteerBrowsers = [
                                    {
                                        product: 'chrome',
                                        browser: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                        currentBuildId: ''
                                    },
                                    {
                                        product: 'firefox',
                                        browser: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                                        currentBuildId: ''
                                    }
                                ];
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                _state.label = 2;
                            case 2:
                                _state.trys.push([
                                    2,
                                    7,
                                    8,
                                    9
                                ]);
                                _iterator = puppeteerBrowsers[Symbol.iterator]();
                                _state.label = 3;
                            case 3:
                                if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                    3,
                                    6
                                ];
                                item = _step.value;
                                return [
                                    4,
                                    Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(item.browser, platform, (product === item.product ? _this.configuration.browserRevision : null) || _revisions_js__WEBPACK_IMPORTED_MODULE_2__.PUPPETEER_REVISIONS[item.product])
                                ];
                            case 4:
                                item.currentBuildId = _state.sent();
                                _state.label = 5;
                            case 5:
                                _iteratorNormalCompletion = true;
                                return [
                                    3,
                                    3
                                ];
                            case 6:
                                return [
                                    3,
                                    9
                                ];
                            case 7:
                                err = _state.sent();
                                _didIteratorError = true;
                                _iteratorError = err;
                                return [
                                    3,
                                    9
                                ];
                            case 8:
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                                        _iterator.return();
                                    }
                                } finally{
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                                return [
                                    7
                                ];
                            case 9:
                                currentBrowserBuilds = new Set(puppeteerBrowsers.map(function(browser) {
                                    return "".concat(browser.browser, "_").concat(browser.currentBuildId);
                                }));
                                currentBrowsers = new Set(puppeteerBrowsers.map(function(browser) {
                                    return browser.browser;
                                }));
                                _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                                _state.label = 10;
                            case 10:
                                _state.trys.push([
                                    10,
                                    15,
                                    16,
                                    17
                                ]);
                                _iterator1 = installedBrowsers[Symbol.iterator]();
                                _state.label = 11;
                            case 11:
                                if (!!(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done)) return [
                                    3,
                                    14
                                ];
                                installedBrowser = _step1.value;
                                // Don't uninstall browsers that are not managed by Puppeteer yet.
                                if (!currentBrowsers.has(installedBrowser.browser)) {
                                    return [
                                        3,
                                        13
                                    ];
                                }
                                // Keep the browser build used by the current Puppeteer installation.
                                if (currentBrowserBuilds.has("".concat(installedBrowser.browser, "_").concat(installedBrowser.buildId))) {
                                    return [
                                        3,
                                        13
                                    ];
                                }
                                return [
                                    4,
                                    Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
                                        browser: installedBrowser.browser,
                                        platform: platform,
                                        cacheDir: cacheDir,
                                        buildId: installedBrowser.buildId
                                    })
                                ];
                            case 12:
                                _state.sent();
                                _state.label = 13;
                            case 13:
                                _iteratorNormalCompletion1 = true;
                                return [
                                    3,
                                    11
                                ];
                            case 14:
                                return [
                                    3,
                                    17
                                ];
                            case 15:
                                err = _state.sent();
                                _didIteratorError1 = true;
                                _iteratorError1 = err;
                                return [
                                    3,
                                    17
                                ];
                            case 16:
                                try {
                                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                        _iterator1.return();
                                    }
                                } finally{
                                    if (_didIteratorError1) {
                                        throw _iteratorError1;
                                    }
                                }
                                return [
                                    7
                                ];
                            case 17:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return PuppeteerNode;
} //# sourceMappingURL=PuppeteerNode.js.map
(_common_Puppeteer_js__WEBPACK_IMPORTED_MODULE_1__.Puppeteer);
function get_launcher() {
    if (_class_private_field_get(this, __launcher) && _class_private_field_get(this, __launcher).product === this.lastLaunchedProduct) {
        return _class_private_field_get(this, __launcher);
    }
    switch(this.lastLaunchedProduct){
        case 'chrome':
            this.defaultBrowserRevision = _revisions_js__WEBPACK_IMPORTED_MODULE_2__.PUPPETEER_REVISIONS.chrome;
            _class_private_field_set(this, __launcher, new _ChromeLauncher_js__WEBPACK_IMPORTED_MODULE_3__.ChromeLauncher(this));
            break;
        case 'firefox':
            this.defaultBrowserRevision = _revisions_js__WEBPACK_IMPORTED_MODULE_2__.PUPPETEER_REVISIONS.firefox;
            _class_private_field_set(this, __launcher, new _FirefoxLauncher_js__WEBPACK_IMPORTED_MODULE_4__.FirefoxLauncher(this));
            break;
        default:
            throw new Error("Unknown product: ".concat(_class_private_field_get(this, _lastLaunchedProduct)));
    }
    return _class_private_field_get(this, __launcher);
}


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/revisions.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PUPPETEER_REVISIONS: function() { return PUPPETEER_REVISIONS; }
});
/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * @internal
 */ var PUPPETEER_REVISIONS = Object.freeze({
    chrome: '127.0.6533.72',
    'chrome-headless-shell': '127.0.6533.72',
    firefox: 'latest'
}); //# sourceMappingURL=revisions.js.map


}),

}]);