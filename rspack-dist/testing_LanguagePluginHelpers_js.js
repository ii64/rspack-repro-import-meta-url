"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["testing_LanguagePluginHelpers_js"], {
"./testing/LanguagePluginHelpers.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  TestPlugin: function() { return TestPlugin; }
});
// Copyright 2022 The Chromium Authors. All rights reserved.
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
var TestPlugin = /*#__PURE__*/ function() {
    "use strict";
    function TestPlugin(name) {
        _class_call_check(this, TestPlugin);
        _define_property(this, "name", void 0);
        this.name = name;
    }
    _create_class(TestPlugin, [
        {
            key: "handleScript",
            value: function handleScript(_script) {
                return false;
            }
        },
        {
            key: "createPageResourceLoadInitiator",
            value: function createPageResourceLoadInitiator() {
                var extensionId = 'chrome-extension-id';
                return {
                    target: null,
                    frameId: null,
                    extensionId: extensionId,
                    initiatorUrl: extensionId
                };
            }
        },
        {
            key: "evaluate",
            value: function evaluate(_expression, _context, _stopId) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            null
                        ];
                    });
                })();
            }
        },
        {
            key: "getProperties",
            value: function getProperties(_objectId) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            []
                        ];
                    });
                })();
            }
        },
        {
            key: "releaseObject",
            value: function releaseObject(_objectId) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "addRawModule",
            value: function addRawModule(_rawModuleId, _symbolsURL, _rawModule) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            []
                        ];
                    });
                })();
            }
        },
        {
            key: "sourceLocationToRawLocation",
            value: function sourceLocationToRawLocation(_sourceLocation) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            []
                        ];
                    });
                })();
            }
        },
        {
            key: "rawLocationToSourceLocation",
            value: function rawLocationToSourceLocation(_rawLocation) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            []
                        ];
                    });
                })();
            }
        },
        {
            key: "getScopeInfo",
            value: function getScopeInfo(type) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            {
                                type: type,
                                typeName: type
                            }
                        ];
                    });
                })();
            }
        },
        {
            key: "listVariablesInScope",
            value: function listVariablesInScope(_rawLocation) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            []
                        ];
                    });
                })();
            }
        },
        {
            key: "removeRawModule",
            value: function removeRawModule(_rawModuleId) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "getFunctionInfo",
            value: function getFunctionInfo(_rawLocation) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            {
                                frames: []
                            }
                        ];
                    });
                })();
            }
        },
        {
            key: "getInlinedFunctionRanges",
            value: function getInlinedFunctionRanges(_rawLocation) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            []
                        ];
                    });
                })();
            }
        },
        {
            key: "getInlinedCalleesRanges",
            value: function getInlinedCalleesRanges(_rawLocation) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            []
                        ];
                    });
                })();
            }
        },
        {
            key: "getMappedLines",
            value: function getMappedLines(_rawModuleId, _sourceFileURL) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            undefined
                        ];
                    });
                })();
            }
        }
    ]);
    return TestPlugin;
} //# sourceMappingURL=LanguagePluginHelpers.js.map
();


}),

}]);