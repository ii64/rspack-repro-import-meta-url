"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_network_NetworkSearchScope_js"], {
"./panels/network/NetworkSearchScope.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  NetworkSearchResult: function() { return NetworkSearchResult; },
  NetworkSearchScope: function() { return NetworkSearchScope; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */var _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../panels/network/forward/forward.js */ "./panels/network/forward/forward.js");
// Copyright 2018 The Chromium Authors. All rights reserved.
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
function _class_static_private_method_get(receiver, classConstructor, method) {
    _class_check_private_static_access(receiver, classConstructor);
    return method;
}
function _class_check_private_static_access(receiver, classConstructor) {
    if (receiver !== classConstructor) {
        throw new TypeError("Private static access of wrong provenance");
    }
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
     *@description Text for web URLs
     */ url: 'URL'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/network/NetworkSearchScope.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var _networkLog = /*#__PURE__*/ new WeakMap();
var NetworkSearchScope = /*#__PURE__*/ function() {
    "use strict";
    function NetworkSearchScope(networkLog) {
        _class_call_check(this, NetworkSearchScope);
        _class_private_field_init(this, _networkLog, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _networkLog, networkLog);
    }
    _create_class(NetworkSearchScope, [
        {
            key: "performIndexing",
            value: function performIndexing(progress) {
                queueMicrotask(function() {
                    progress.done();
                });
            }
        },
        {
            key: "performSearch",
            value: function performSearch(searchConfig, progress, searchResultCallback, searchFinishedCallback) {
                var _this = this;
                return _async_to_generator(function() {
                    var promises, requests, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, request, promise, resultsWithNull, results, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, result;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                promises = [];
                                requests = _class_private_field_get(_this, _networkLog).requests().filter(function(request) {
                                    return searchConfig.filePathMatchesFileQuery(request.url());
                                });
                                progress.setTotalWork(requests.length);
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = requests[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        request = _step.value;
                                        promise = _this.searchRequest(searchConfig, request, progress);
                                        promises.push(promise);
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
                                return [
                                    4,
                                    Promise.all(promises)
                                ];
                            case 1:
                                resultsWithNull = _state.sent();
                                results = resultsWithNull.filter(function(result) {
                                    return result !== null;
                                });
                                if (progress.isCanceled()) {
                                    searchFinishedCallback(false);
                                    return [
                                        2
                                    ];
                                }
                                _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                                try {
                                    for(_iterator1 = results.sort(function(r1, r2) {
                                        return r1.label().localeCompare(r2.label());
                                    })[Symbol.iterator](); !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                        result = _step1.value;
                                        if (result.matchesCount() > 0) {
                                            searchResultCallback(result);
                                        }
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
                                progress.done();
                                searchFinishedCallback(true);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "searchRequest",
            value: function searchRequest(searchConfig, request, progress) {
                return _async_to_generator(function() {
                    var bodyMatches, locations, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, header, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, header1, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, match;
                    function headerMatchesQuery(header) {
                        return stringMatchesQuery("".concat(header.name, ": ").concat(header.value));
                    }
                    function stringMatchesQuery(string) {
                        var flags = searchConfig.ignoreCase() ? 'i' : '';
                        var regExps = searchConfig.queries().map(function(query) {
                            return new RegExp(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.escapeForRegExp(query), flags);
                        });
                        var pos = 0;
                        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(var _iterator = regExps[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                var regExp = _step.value;
                                var match = string.substr(pos).match(regExp);
                                if (!match || match.index === undefined) {
                                    return false;
                                }
                                pos += match.index + match[0].length;
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
                        return true;
                    }
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_static_private_method_get(NetworkSearchScope, NetworkSearchScope, responseBodyMatches).call(NetworkSearchScope, searchConfig, request)
                                ];
                            case 1:
                                bodyMatches = _state.sent();
                                if (progress.isCanceled()) {
                                    return [
                                        2,
                                        null
                                    ];
                                }
                                locations = [];
                                if (stringMatchesQuery(request.url())) {
                                    locations.push(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_3__.UIRequestLocation.UIRequestLocation.urlMatch(request));
                                }
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = request.requestHeaders()[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        header = _step.value;
                                        if (headerMatchesQuery(header)) {
                                            locations.push(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_3__.UIRequestLocation.UIRequestLocation.requestHeaderMatch(request, header));
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
                                _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                                try {
                                    for(_iterator1 = request.responseHeaders[Symbol.iterator](); !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                        header1 = _step1.value;
                                        if (headerMatchesQuery(header1)) {
                                            locations.push(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_3__.UIRequestLocation.UIRequestLocation.responseHeaderMatch(request, header1));
                                        }
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
                                _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                                try {
                                    for(_iterator2 = bodyMatches[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                                        match = _step2.value;
                                        locations.push(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_3__.UIRequestLocation.UIRequestLocation.bodyMatch(request, match));
                                    }
                                } catch (err) {
                                    _didIteratorError2 = true;
                                    _iteratorError2 = err;
                                } finally{
                                    try {
                                        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                                            _iterator2.return();
                                        }
                                    } finally{
                                        if (_didIteratorError2) {
                                            throw _iteratorError2;
                                        }
                                    }
                                }
                                progress.incrementWorked();
                                return [
                                    2,
                                    new NetworkSearchResult(request, locations)
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "stopSearch",
            value: function stopSearch() {}
        }
    ]);
    return NetworkSearchScope;
}();
function responseBodyMatches(searchConfig, request) {
    return _responseBodyMatches.apply(this, arguments);
}
function _responseBodyMatches() {
    _responseBodyMatches = _async_to_generator(function(searchConfig, request) {
        var matches, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, query, tmpMatches, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!request.contentType().isTextType()) {
                        return [
                            2,
                            []
                        ];
                    }
                    matches = [];
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        6,
                        7,
                        8
                    ]);
                    _iterator = searchConfig.queries()[Symbol.iterator]();
                    _state.label = 2;
                case 2:
                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                        3,
                        5
                    ];
                    query = _step.value;
                    return [
                        4,
                        request.searchInContent(query, !searchConfig.ignoreCase(), searchConfig.isRegex())
                    ];
                case 3:
                    tmpMatches = _state.sent();
                    if (tmpMatches.length === 0) {
                        // Mirror file search that all individual queries must produce matches.
                        return [
                            2,
                            []
                        ];
                    }
                    matches = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.ArrayUtilities.mergeOrdered(matches, tmpMatches, _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__.ContentProvider.SearchMatch.comparator);
                    _state.label = 4;
                case 4:
                    _iteratorNormalCompletion = true;
                    return [
                        3,
                        2
                    ];
                case 5:
                    return [
                        3,
                        8
                    ];
                case 6:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        8
                    ];
                case 7:
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
                case 8:
                    return [
                        2,
                        matches
                    ];
            }
        });
    });
    return _responseBodyMatches.apply(this, arguments);
}
var NetworkSearchResult = /*#__PURE__*/ function() {
    "use strict";
    function NetworkSearchResult(request, locations) {
        _class_call_check(this, NetworkSearchResult);
        _define_property(this, "request", void 0);
        _define_property(this, "locations", void 0);
        this.request = request;
        this.locations = locations;
    }
    _create_class(NetworkSearchResult, [
        {
            key: "matchesCount",
            value: function matchesCount() {
                return this.locations.length;
            }
        },
        {
            key: "label",
            value: function label() {
                return this.request.displayName;
            }
        },
        {
            key: "description",
            value: function description() {
                var parsedUrl = this.request.parsedURL;
                if (!parsedUrl) {
                    return this.request.url();
                }
                return parsedUrl.urlWithoutScheme();
            }
        },
        {
            key: "matchLineContent",
            value: function matchLineContent(index) {
                var _location_header;
                var location = this.locations[index];
                if (location.isUrlMatch) {
                    return this.request.url();
                }
                var header = location === null || location === void 0 ? void 0 : (_location_header = location.header) === null || _location_header === void 0 ? void 0 : _location_header.header;
                if (header) {
                    return header.value;
                }
                return location.searchMatch.lineContent;
            }
        },
        {
            key: "matchRevealable",
            value: function matchRevealable(index) {
                return this.locations[index];
            }
        },
        {
            key: "matchLabel",
            value: function matchLabel(index) {
                var _location_header;
                var location = this.locations[index];
                if (location.isUrlMatch) {
                    return i18nString(UIStrings.url);
                }
                var header = location === null || location === void 0 ? void 0 : (_location_header = location.header) === null || _location_header === void 0 ? void 0 : _location_header.header;
                if (header) {
                    return "".concat(header.name, ":");
                }
                return (location.searchMatch.lineNumber + 1).toString();
            }
        },
        {
            key: "matchColumn",
            value: function matchColumn(index) {
                var _location_searchMatch;
                var location = this.locations[index];
                return (_location_searchMatch = location.searchMatch) === null || _location_searchMatch === void 0 ? void 0 : _location_searchMatch.columnNumber;
            }
        },
        {
            key: "matchLength",
            value: function matchLength(index) {
                var _location_searchMatch;
                var location = this.locations[index];
                return (_location_searchMatch = location.searchMatch) === null || _location_searchMatch === void 0 ? void 0 : _location_searchMatch.matchLength;
            }
        }
    ]);
    return NetworkSearchResult;
} //# sourceMappingURL=NetworkSearchScope.js.map
();


}),

}]);