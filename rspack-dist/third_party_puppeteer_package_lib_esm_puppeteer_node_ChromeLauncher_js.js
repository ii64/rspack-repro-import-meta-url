"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_node_ChromeLauncher_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/node/ChromeLauncher.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ChromeLauncher: function() { return ChromeLauncher; },
  getFeatures: function() { return getFeatures; },
  removeMatchingFlags: function() { return removeMatchingFlags; }
});
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs/promises'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'os'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'path'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */var _common_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */var _util_assert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/assert.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
/* harmony import */var _ProductLauncher_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductLauncher.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/node/ProductLauncher.js");
/* harmony import */var _util_fs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/fs.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/node/util/fs.js");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ function _array_like_to_array(arr, len) {
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








/**
 * @internal
 */ var ChromeLauncher = /*#__PURE__*/ function(ProductLauncher) {
    "use strict";
    _inherits(ChromeLauncher, ProductLauncher);
    var _super = _create_super(ChromeLauncher);
    function ChromeLauncher(puppeteer) {
        _class_call_check(this, ChromeLauncher);
        return _super.call(this, puppeteer, 'chrome');
    }
    _create_class(ChromeLauncher, [
        {
            key: "launch",
            value: function launch() {
                var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                if (this.puppeteer.configuration.logLevel === 'warn' && process.platform === 'darwin' && process.arch === 'x64') {
                    var _cpus_;
                    var cpus = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'os'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
                    if ((_cpus_ = cpus[0]) === null || _cpus_ === void 0 ? void 0 : _cpus_.model.includes('Apple')) {
                        console.warn([
                            '\x1B[1m\x1B[43m\x1B[30m',
                            'Degraded performance warning:\x1B[0m\x1B[33m',
                            'Launching Chrome on Mac Silicon (arm64) from an x64 Node installation results in',
                            'Rosetta translating the Chrome binary, even if Chrome is already arm64. This would',
                            'result in huge performance issues. To resolve this, you must run Puppeteer with',
                            'a version of Node built for arm64.'
                        ].join('\n  '));
                    }
                }
                return _get(_get_prototype_of(ChromeLauncher.prototype), "launch", this).call(this, options);
            }
        },
        {
            key: "computeLaunchArguments",
            value: /**
     * @internal
     */ function computeLaunchArguments() {
                var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                var _this = this;
                return _async_to_generator(function() {
                    var _options_ignoreDefaultArgs, ignoreDefaultArgs, _options_args, args, _options_pipe, pipe, debuggingPort, channel, executablePath, chromeArguments, _chromeArguments, _chromeArguments1, _chromeArguments2, isTempUserDataDir, userDataDirIndex, _, _1, _2, userDataDir, chromeExecutable, _options_headless;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _options_ignoreDefaultArgs = options.ignoreDefaultArgs, ignoreDefaultArgs = _options_ignoreDefaultArgs === void 0 ? false : _options_ignoreDefaultArgs, _options_args = options.args, args = _options_args === void 0 ? [] : _options_args, _options_pipe = options.pipe, pipe = _options_pipe === void 0 ? false : _options_pipe, debuggingPort = options.debuggingPort, channel = options.channel, executablePath = options.executablePath;
                                chromeArguments = [];
                                if (!ignoreDefaultArgs) {
                                    ;
                                    (_chromeArguments = chromeArguments).push.apply(_chromeArguments, _to_consumable_array(_this.defaultArgs(options)));
                                } else if (Array.isArray(ignoreDefaultArgs)) {
                                    ;
                                    (_chromeArguments1 = chromeArguments).push.apply(_chromeArguments1, _to_consumable_array(_this.defaultArgs(options).filter(function(arg) {
                                        return !ignoreDefaultArgs.includes(arg);
                                    })));
                                } else {
                                    ;
                                    (_chromeArguments2 = chromeArguments).push.apply(_chromeArguments2, _to_consumable_array(args));
                                }
                                if (!chromeArguments.some(function(argument) {
                                    return argument.startsWith('--remote-debugging-');
                                })) {
                                    if (pipe) {
                                        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_2__.assert)(!debuggingPort, 'Browser should be launched with either pipe or debugging port - not both.');
                                        chromeArguments.push('--remote-debugging-pipe');
                                    } else {
                                        chromeArguments.push("--remote-debugging-port=".concat(debuggingPort || 0));
                                    }
                                }
                                isTempUserDataDir = false;
                                // Check for the user data dir argument, which will always be set even
                                // with a custom directory specified via the userDataDir option.
                                userDataDirIndex = chromeArguments.findIndex(function(arg) {
                                    return arg.startsWith('--user-data-dir');
                                });
                                if (!(userDataDirIndex < 0)) return [
                                    3,
                                    2
                                ];
                                isTempUserDataDir = true;
                                _ = chromeArguments.push;
                                _2 = (_1 = "--user-data-dir=").concat;
                                return [
                                    4,
                                    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs/promises'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_this.getProfilePath())
                                ];
                            case 1:
                                _.apply(chromeArguments, [
                                    _2.apply(_1, [
                                        _state.sent()
                                    ])
                                ]);
                                userDataDirIndex = chromeArguments.length - 1;
                                _state.label = 2;
                            case 2:
                                userDataDir = chromeArguments[userDataDirIndex].split('=', 2)[1];
                                (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_2__.assert)(typeof userDataDir === 'string', '`--user-data-dir` is malformed');
                                chromeExecutable = executablePath;
                                if (!chromeExecutable) {
                                    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_2__.assert)(channel || !_this.puppeteer._isPuppeteerCore, "An `executablePath` or `channel` must be specified for `puppeteer-core`");
                                    ;
                                    chromeExecutable = _this.executablePath(channel, (_options_headless = options.headless) !== null && _options_headless !== void 0 ? _options_headless : true);
                                }
                                return [
                                    2,
                                    {
                                        executablePath: chromeExecutable,
                                        args: chromeArguments,
                                        isTempUserDataDir: isTempUserDataDir,
                                        userDataDir: userDataDir
                                    }
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "cleanUserDataDir",
            value: /**
     * @internal
     */ function cleanUserDataDir(path, opts) {
                return _async_to_generator(function() {
                    var error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!opts.isTemp) return [
                                    3,
                                    4
                                ];
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    3,
                                    ,
                                    4
                                ]);
                                return [
                                    4,
                                    (0,_util_fs_js__WEBPACK_IMPORTED_MODULE_4__.rm)(path)
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    3,
                                    4
                                ];
                            case 3:
                                error = _state.sent();
                                (0,_common_util_js__WEBPACK_IMPORTED_MODULE_1__.debugError)(error);
                                throw error;
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "defaultArgs",
            value: function defaultArgs() {
                var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                var _chromeArguments;
                // See https://github.com/GoogleChrome/chrome-launcher/blob/main/docs/chrome-flags-for-tools.md
                var userDisabledFeatures = getFeatures('--disable-features', options.args);
                if (options.args && userDisabledFeatures.length > 0) {
                    removeMatchingFlags(options.args, '--disable-features');
                }
                var turnOnExperimentalFeaturesForTesting = process.env['PUPPETEER_TEST_EXPERIMENTAL_CHROME_FEATURES'] === 'true';
                // Merge default disabled features with user-provided ones, if any.
                var disabledFeatures = [
                    'Translate',
                    // AcceptCHFrame disabled because of crbug.com/1348106.
                    'AcceptCHFrame',
                    'MediaRouter',
                    'OptimizationHints'
                ].concat(_to_consumable_array(turnOnExperimentalFeaturesForTesting ? [] : [
                    // https://crbug.com/1492053
                    'ProcessPerSiteUpToMainFrameThreshold',
                    // https://github.com/puppeteer/puppeteer/issues/10715
                    'IsolateSandboxedIframes'
                ]), _to_consumable_array(userDisabledFeatures)).filter(function(feature) {
                    return feature !== '';
                });
                var userEnabledFeatures = getFeatures('--enable-features', options.args);
                if (options.args && userEnabledFeatures.length > 0) {
                    removeMatchingFlags(options.args, '--enable-features');
                }
                // Merge default enabled features with user-provided ones, if any.
                var enabledFeatures = [
                    'PdfOopif'
                ].concat(// Add features to enable by default here.
                _to_consumable_array(userEnabledFeatures)).filter(function(feature) {
                    return feature !== '';
                });
                var chromeArguments = [
                    '--allow-pre-commit-input',
                    '--disable-background-networking',
                    '--disable-background-timer-throttling',
                    '--disable-backgrounding-occluded-windows',
                    '--disable-breakpad',
                    '--disable-client-side-phishing-detection',
                    '--disable-component-extensions-with-background-pages',
                    '--disable-component-update',
                    '--disable-default-apps',
                    '--disable-dev-shm-usage',
                    '--disable-extensions',
                    '--disable-hang-monitor',
                    '--disable-infobars',
                    '--disable-ipc-flooding-protection',
                    '--disable-popup-blocking',
                    '--disable-prompt-on-repost',
                    '--disable-renderer-backgrounding',
                    '--disable-search-engine-choice-screen',
                    '--disable-sync',
                    '--enable-automation',
                    '--export-tagged-pdf',
                    '--generate-pdf-document-outline',
                    '--force-color-profile=srgb',
                    '--metrics-recording-only',
                    '--no-first-run',
                    '--password-store=basic',
                    '--use-mock-keychain',
                    "--disable-features=".concat(disabledFeatures.join(',')),
                    "--enable-features=".concat(enabledFeatures.join(','))
                ].filter(function(arg) {
                    return arg !== '';
                });
                var _options_devtools = options.devtools, devtools = _options_devtools === void 0 ? false : _options_devtools, _options_headless = options.headless, headless = _options_headless === void 0 ? !devtools : _options_headless, _options_args = options.args, args = _options_args === void 0 ? [] : _options_args, userDataDir = options.userDataDir;
                if (userDataDir) {
                    chromeArguments.push("--user-data-dir=".concat(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'path'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(userDataDir)));
                }
                if (devtools) {
                    chromeArguments.push('--auto-open-devtools-for-tabs');
                }
                if (headless) {
                    chromeArguments.push(headless === 'shell' ? '--headless' : '--headless=new', '--hide-scrollbars', '--mute-audio');
                }
                if (args.every(function(arg) {
                    return arg.startsWith('-');
                })) {
                    chromeArguments.push('about:blank');
                }
                (_chromeArguments = chromeArguments).push.apply(_chromeArguments, _to_consumable_array(args));
                return chromeArguments;
            }
        },
        {
            key: "executablePath",
            value: function executablePath(channel, headless) {
                if (channel) {
                    return Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
                        browser: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                        channel: convertPuppeteerChannelToBrowsersChannel(channel)
                    });
                } else {
                    return this.resolveExecutablePath(headless);
                }
            }
        }
    ]);
    return ChromeLauncher;
}(_ProductLauncher_js__WEBPACK_IMPORTED_MODULE_3__.ProductLauncher);
function convertPuppeteerChannelToBrowsersChannel(channel) {
    switch(channel){
        case 'chrome':
            return Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
        case 'chrome-dev':
            return Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
        case 'chrome-beta':
            return Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
        case 'chrome-canary':
            return Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
    }
}
/**
 * Extracts all features from the given command-line flag
 * (e.g. `--enable-features`, `--enable-features=`).
 *
 * Example input:
 * ["--enable-features=NetworkService,NetworkServiceInProcess", "--enable-features=Foo"]
 *
 * Example output:
 * ["NetworkService", "NetworkServiceInProcess", "Foo"]
 *
 * @internal
 */ function getFeatures(flag) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return options.filter(function(s) {
        return s.startsWith(flag.endsWith('=') ? flag : "".concat(flag, "="));
    }).map(function(s) {
        var _s_split_;
        return (_s_split_ = s.split(new RegExp("".concat(flag, "=\\s*")))[1]) === null || _s_split_ === void 0 ? void 0 : _s_split_.trim();
    }).filter(function(s) {
        return s;
    });
}
/**
 * Removes all elements in-place from the given string array
 * that match the given command-line flag.
 *
 * @internal
 */ function removeMatchingFlags(array, flag) {
    var regex = new RegExp("^".concat(flag, "=.*"));
    var i = 0;
    while(i < array.length){
        if (regex.test(array[i])) {
            array.splice(i, 1);
        } else {
            i++;
        }
    }
    return array;
} //# sourceMappingURL=ChromeLauncher.js.map


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/node/util/fs.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  rm: function() { return rm; },
  rmSync: function() { return rmSync; }
});
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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

var rmOptions = {
    force: true,
    recursive: true,
    maxRetries: 5
};
/**
 * @internal
 */ function rm(path) {
    return _rm.apply(this, arguments);
}
function _rm() {
    _rm = _async_to_generator(function(path) {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(path, rmOptions)
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return _rm.apply(this, arguments);
}
/**
 * @internal
 */ function rmSync(path) {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(path, rmOptions);
} //# sourceMappingURL=fs.js.map


}),

}]);