"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_node_FirefoxLauncher_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/node/FirefoxLauncher.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  FirefoxLauncher: function() { return FirefoxLauncher; }
});
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
 */ var FirefoxLauncher = /*#__PURE__*/ function(ProductLauncher) {
    "use strict";
    _inherits(FirefoxLauncher, ProductLauncher);
    var _super = _create_super(FirefoxLauncher);
    function FirefoxLauncher(puppeteer) {
        _class_call_check(this, FirefoxLauncher);
        return _super.call(this, puppeteer, 'firefox');
    }
    _create_class(FirefoxLauncher, [
        {
            key: "computeLaunchArguments",
            value: /**
     * @internal
     */ function computeLaunchArguments() {
                var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                var _this = this;
                return _async_to_generator(function() {
                    var _options_ignoreDefaultArgs, ignoreDefaultArgs, _options_args, args, executablePath, _options_pipe, pipe, _options_extraPrefsFirefox, extraPrefsFirefox, _options_debuggingPort, debuggingPort, firefoxArguments, _firefoxArguments, _firefoxArguments1, _firefoxArguments2, userDataDir, isTempUserDataDir, profileArgIndex, firefoxExecutable;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _options_ignoreDefaultArgs = options.ignoreDefaultArgs, ignoreDefaultArgs = _options_ignoreDefaultArgs === void 0 ? false : _options_ignoreDefaultArgs, _options_args = options.args, args = _options_args === void 0 ? [] : _options_args, executablePath = options.executablePath, _options_pipe = options.pipe, pipe = _options_pipe === void 0 ? false : _options_pipe, _options_extraPrefsFirefox = options.extraPrefsFirefox, extraPrefsFirefox = _options_extraPrefsFirefox === void 0 ? {} : _options_extraPrefsFirefox, _options_debuggingPort = options.debuggingPort, debuggingPort = _options_debuggingPort === void 0 ? null : _options_debuggingPort;
                                firefoxArguments = [];
                                if (!ignoreDefaultArgs) {
                                    ;
                                    (_firefoxArguments = firefoxArguments).push.apply(_firefoxArguments, _to_consumable_array(_this.defaultArgs(options)));
                                } else if (Array.isArray(ignoreDefaultArgs)) {
                                    ;
                                    (_firefoxArguments1 = firefoxArguments).push.apply(_firefoxArguments1, _to_consumable_array(_this.defaultArgs(options).filter(function(arg) {
                                        return !ignoreDefaultArgs.includes(arg);
                                    })));
                                } else {
                                    ;
                                    (_firefoxArguments2 = firefoxArguments).push.apply(_firefoxArguments2, _to_consumable_array(args));
                                }
                                if (!firefoxArguments.some(function(argument) {
                                    return argument.startsWith('--remote-debugging-');
                                })) {
                                    if (pipe) {
                                        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_2__.assert)(debuggingPort === null, 'Browser should be launched with either pipe or debugging port - not both.');
                                    }
                                    firefoxArguments.push("--remote-debugging-port=".concat(debuggingPort || 0));
                                }
                                isTempUserDataDir = true;
                                // Check for the profile argument, which will always be set even
                                // with a custom directory specified via the userDataDir option.
                                profileArgIndex = firefoxArguments.findIndex(function(arg) {
                                    return [
                                        '-profile',
                                        '--profile'
                                    ].includes(arg);
                                });
                                if (!(profileArgIndex !== -1)) return [
                                    3,
                                    1
                                ];
                                userDataDir = firefoxArguments[profileArgIndex + 1];
                                if (!userDataDir) {
                                    throw new Error("Missing value for profile command line argument");
                                }
                                // When using a custom Firefox profile it needs to be populated
                                // with required preferences.
                                isTempUserDataDir = false;
                                return [
                                    3,
                                    3
                                ];
                            case 1:
                                return [
                                    4,
                                    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs/promises'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_this.getProfilePath())
                                ];
                            case 2:
                                userDataDir = _state.sent();
                                firefoxArguments.push('--profile');
                                firefoxArguments.push(userDataDir);
                                _state.label = 3;
                            case 3:
                                return [
                                    4,
                                    Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                                        path: userDataDir,
                                        preferences: FirefoxLauncher.getPreferences(extraPrefsFirefox, options.protocol)
                                    })
                                ];
                            case 4:
                                _state.sent();
                                if (_this.puppeteer._isPuppeteerCore || executablePath) {
                                    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_2__.assert)(executablePath, "An `executablePath` must be specified for `puppeteer-core`");
                                    firefoxExecutable = executablePath;
                                } else {
                                    firefoxExecutable = _this.executablePath();
                                }
                                return [
                                    2,
                                    {
                                        isTempUserDataDir: isTempUserDataDir,
                                        userDataDir: userDataDir,
                                        args: firefoxArguments,
                                        executablePath: firefoxExecutable
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
     */ function cleanUserDataDir(userDataDir, opts) {
                return _async_to_generator(function() {
                    var error, prefsBackupPath, prefsPath, error1;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!opts.isTemp) return [
                                    3,
                                    5
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
                                    (0,_util_fs_js__WEBPACK_IMPORTED_MODULE_4__.rm)(userDataDir)
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
                                    3,
                                    11
                                ];
                            case 5:
                                _state.trys.push([
                                    5,
                                    10,
                                    ,
                                    11
                                ]);
                                // When an existing user profile has been used remove the user
                                // preferences file and restore possibly backuped preferences.
                                return [
                                    4,
                                    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs/promises'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'path'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(userDataDir, 'user.js'))
                                ];
                            case 6:
                                _state.sent();
                                prefsBackupPath = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'path'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(userDataDir, 'prefs.js.puppeteer');
                                if (!Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(prefsBackupPath)) return [
                                    3,
                                    9
                                ];
                                prefsPath = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'path'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(userDataDir, 'prefs.js');
                                return [
                                    4,
                                    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs/promises'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(prefsPath)
                                ];
                            case 7:
                                _state.sent();
                                return [
                                    4,
                                    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs/promises'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(prefsBackupPath, prefsPath)
                                ];
                            case 8:
                                _state.sent();
                                _state.label = 9;
                            case 9:
                                return [
                                    3,
                                    11
                                ];
                            case 10:
                                error1 = _state.sent();
                                (0,_common_util_js__WEBPACK_IMPORTED_MODULE_1__.debugError)(error1);
                                return [
                                    3,
                                    11
                                ];
                            case 11:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "executablePath",
            value: function executablePath() {
                // replace 'latest' placeholder with actual downloaded revision
                if (this.puppeteer.browserRevision === 'latest') {
                    var cache = new Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.puppeteer.defaultDownloadPath);
                    var installedFirefox = cache.getInstalledBrowsers().find(function(browser) {
                        return browser.platform === Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())() && browser.browser === Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
                    });
                    if (installedFirefox) {
                        this.actualBrowserRevision = installedFirefox.buildId;
                    }
                }
                return this.resolveExecutablePath();
            }
        },
        {
            key: "defaultArgs",
            value: function defaultArgs() {
                var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                var _firefoxArguments;
                var _options_devtools = options.devtools, devtools = _options_devtools === void 0 ? false : _options_devtools, _options_headless = options.headless, headless = _options_headless === void 0 ? !devtools : _options_headless, _options_args = options.args, args = _options_args === void 0 ? [] : _options_args, _options_userDataDir = options.userDataDir, userDataDir = _options_userDataDir === void 0 ? null : _options_userDataDir;
                var firefoxArguments = [
                    '--no-remote'
                ];
                switch(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'os'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()){
                    case 'darwin':
                        firefoxArguments.push('--foreground');
                        break;
                    case 'win32':
                        firefoxArguments.push('--wait-for-browser');
                        break;
                }
                if (userDataDir) {
                    firefoxArguments.push('--profile');
                    firefoxArguments.push(userDataDir);
                }
                if (headless) {
                    firefoxArguments.push('--headless');
                }
                if (devtools) {
                    firefoxArguments.push('--devtools');
                }
                if (args.every(function(arg) {
                    return arg.startsWith('-');
                })) {
                    firefoxArguments.push('about:blank');
                }
                (_firefoxArguments = firefoxArguments).push.apply(_firefoxArguments, _to_consumable_array(args));
                return firefoxArguments;
            }
        }
    ], [
        {
            key: "getPreferences",
            value: function getPreferences(extraPrefsFirefox, protocol) {
                return _object_spread_props(_object_spread({}, extraPrefsFirefox, protocol === 'webDriverBiDi' ? {
                    // Only enable the WebDriver BiDi protocol
                    'remote.active-protocols': 1
                } : {
                    // Do not close the window when the last tab gets closed
                    'browser.tabs.closeWindowWithLastTab': false,
                    // Prevent various error message on the console
                    // jest-puppeteer asserts that no error message is emitted by the console
                    'network.cookie.cookieBehavior': 0,
                    // Temporarily force disable BFCache in parent (https://bit.ly/bug-1732263)
                    'fission.bfcacheInParent': false,
                    // Only enable the CDP protocol
                    'remote.active-protocols': 2
                }), {
                    // Force all web content to use a single content process. TODO: remove
                    // this once Firefox supports mouse event dispatch from the main frame
                    // context. Once this happens, webContentIsolationStrategy should only
                    // be set for CDP. See
                    // https://bugzilla.mozilla.org/show_bug.cgi?id=1773393
                    'fission.webContentIsolationStrategy': 0
                });
            }
        }
    ]);
    return FirefoxLauncher;
} //# sourceMappingURL=FirefoxLauncher.js.map
(_ProductLauncher_js__WEBPACK_IMPORTED_MODULE_3__.ProductLauncher);


}),

}]);