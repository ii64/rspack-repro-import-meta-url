"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_event_listeners_EventListenersUtils_js"], {
"./panels/event_listeners/EventListenersUtils.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  frameworkEventListeners: function() { return frameworkEventListeners; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
// Copyright 2015 The Chromium Authors. All rights reserved.
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
        var self1 = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self1, args);
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
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


function frameworkEventListeners(object) {
    return _frameworkEventListeners.apply(this, arguments);
} //# sourceMappingURL=EventListenersUtils.js.map
function _frameworkEventListeners() {
    _frameworkEventListeners = _async_to_generator(function(object) {
        var domDebuggerModel, listenersResult;
        function getOwnProperties(object) {
            return object.getOwnProperties(false);
        }
        function createEventListeners(result) {
            return _createEventListeners.apply(this, arguments);
        }
        function _createEventListeners() {
            _createEventListeners = _async_to_generator(function(result) {
                var promises, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, property;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            if (!result.properties) {
                                throw new Error('Object properties is empty');
                            }
                            promises = [];
                            _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            try {
                                for(_iterator = result.properties[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                    property = _step.value;
                                    if (property.name === 'eventListeners' && property.value) {
                                        promises.push(convertToEventListeners(property.value).then(storeEventListeners));
                                    }
                                    if (property.name === 'internalHandlers' && property.value) {
                                        promises.push(convertToInternalHandlers(property.value).then(storeInternalHandlers));
                                    }
                                    if (property.name === 'errorString' && property.value) {
                                        printErrorString(property.value);
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
                            return [
                                4,
                                Promise.all(promises)
                            ];
                        case 1:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            });
            return _createEventListeners.apply(this, arguments);
        }
        function convertToEventListeners(pageEventListenersObject) {
            return _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RemoteObject.RemoteArray.objectAsArray(pageEventListenersObject).map(toEventListener).then(filterOutEmptyObjects);
            function toEventListener(listenerObject) {
                var type;
                var useCapture;
                var passive;
                var once;
                var handler = null;
                var originalHandler = null;
                var location = null;
                var removeFunctionObject = null;
                var promises = [];
                promises.push(listenerObject.callFunctionJSON(truncatePageEventListener, undefined).then(storeTruncatedListener));
                function truncatePageEventListener() {
                    return {
                        type: this.type,
                        useCapture: this.useCapture,
                        passive: this.passive,
                        once: this.once
                    };
                }
                function storeTruncatedListener(truncatedListener) {
                    if (truncatedListener.type !== undefined) {
                        type = truncatedListener.type;
                    }
                    if (truncatedListener.useCapture !== undefined) {
                        useCapture = truncatedListener.useCapture;
                    }
                    if (truncatedListener.passive !== undefined) {
                        passive = truncatedListener.passive;
                    }
                    if (truncatedListener.once !== undefined) {
                        once = truncatedListener.once;
                    }
                }
                promises.push(listenerObject.callFunction(handlerFunction).then(assertCallFunctionResult).then(storeOriginalHandler).then(toTargetFunction).then(storeFunctionWithDetails));
                function handlerFunction() {
                    return this.handler || null;
                }
                function storeOriginalHandler(functionObject) {
                    originalHandler = functionObject;
                    return originalHandler;
                }
                function storeFunctionWithDetails(functionObject) {
                    handler = functionObject;
                    return functionObject.debuggerModel().functionDetailsPromise(functionObject).then(storeFunctionDetails);
                }
                function storeFunctionDetails(functionDetails) {
                    location = functionDetails ? functionDetails.location : null;
                }
                promises.push(listenerObject.callFunction(getRemoveFunction).then(assertCallFunctionResult).then(storeRemoveFunction));
                function getRemoveFunction() {
                    return this.remove || null;
                }
                function storeRemoveFunction(functionObject) {
                    if (functionObject.type !== 'function') {
                        return;
                    }
                    removeFunctionObject = functionObject;
                }
                return Promise.all(promises).then(createEventListener).catch(function(error) {
                    console.error(error);
                    return null;
                });
                function createEventListener() {
                    if (!location) {
                        throw new Error('Empty event listener\'s location');
                    }
                    return new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMDebuggerModel.EventListener(domDebuggerModel, object, type, useCapture, passive, once, handler, originalHandler, location, removeFunctionObject, "FrameworkUser" /* SDK.DOMDebuggerModel.EventListener.Origin.FrameworkUser */ );
                }
            }
        }
        function convertToInternalHandlers(pageInternalHandlersObject) {
            return _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RemoteObject.RemoteArray.objectAsArray(pageInternalHandlersObject).map(toTargetFunction).then(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RemoteObject.RemoteArray.createFromRemoteObjects.bind(null));
        }
        function toTargetFunction(functionObject) {
            return _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RemoteObject.RemoteFunction.objectAsFunction(functionObject).targetFunction();
        }
        function storeEventListeners(eventListeners) {
            listenersResult.eventListeners = eventListeners;
        }
        function storeInternalHandlers(internalHandlers) {
            listenersResult.internalHandlers = internalHandlers;
        }
        function printErrorString(errorString) {
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.Console.instance().error(String(errorString.value));
        }
        function returnResult() {
            return listenersResult;
        }
        function assertCallFunctionResult(result) {
            if (result.wasThrown || !result.object) {
                throw new Error('Exception in callFunction or empty result');
            }
            return result.object;
        }
        function filterOutEmptyObjects(objects) {
            return objects.filter(filterOutEmpty);
            function filterOutEmpty(object) {
                return Boolean(object);
            }
        }
        /*
      frameworkEventListeners fetcher functions should produce following output:
          {
            // framework event listeners
            "eventListeners": [
              {
                "handler": function(),
                "useCapture": true,
                "passive": false,
                "once": false,
                "type": "change",
                "remove": function(type, handler, useCapture, passive)
              },
              ...
            ],
            // internal framework event handlers
            "internalHandlers": [
              function(),
              function(),
              ...
            ]
          }
      */ function frameworkEventListenersImpl() {
            var errorLines = [];
            var eventListeners = [];
            var internalHandlers = [];
            var fetchers = [
                jQueryFetcher
            ];
            try {
                // @ts-ignore Here because of layout tests.
                if (self.devtoolsFrameworkEventListeners && isArrayLike(self.devtoolsFrameworkEventListeners)) {
                    // @ts-ignore Here because of layout tests.
                    fetchers = fetchers.concat(self.devtoolsFrameworkEventListeners);
                }
            } catch (e) {
                errorLines.push('devtoolsFrameworkEventListeners call produced error: ' + toString(e));
            }
            for(var i = 0; i < fetchers.length; ++i){
                try {
                    var fetcherResult = fetchers[i](this);
                    if (fetcherResult.eventListeners && isArrayLike(fetcherResult.eventListeners)) {
                        var fetcherResultEventListeners = fetcherResult.eventListeners;
                        var nonEmptyEventListeners = fetcherResultEventListeners.map(function(eventListener) {
                            return checkEventListener(eventListener);
                        }).filter(nonEmptyObject);
                        eventListeners = eventListeners.concat(nonEmptyEventListeners);
                    }
                    if (fetcherResult.internalHandlers && isArrayLike(fetcherResult.internalHandlers)) {
                        var fetcherResultInternalHandlers = fetcherResult.internalHandlers;
                        var nonEmptyInternalHandlers = fetcherResultInternalHandlers.map(function(handler) {
                            return checkInternalHandler(handler);
                        }).filter(nonEmptyObject);
                        internalHandlers = internalHandlers.concat(nonEmptyInternalHandlers);
                    }
                } catch (e) {
                    errorLines.push('fetcher call produced error: ' + toString(e));
                }
            }
            var result = {
                eventListeners: eventListeners,
                internalHandlers: internalHandlers.length ? internalHandlers : undefined,
                errorString: undefined
            };
            // The logic further up seems to expect that if the internalHandlers is set,
            // that it should have a non-empty Array, but TS / Closure also expect the
            // property to exist, so we always add it above, but then remove it again
            // here if there's no value set.
            if (!result.internalHandlers) {
                delete result.internalHandlers;
            }
            if (errorLines.length) {
                var errorString = 'Framework Event Listeners API Errors:\n\t' + errorLines.join('\n\t');
                errorString = errorString.substr(0, errorString.length - 1);
                result.errorString = errorString;
            }
            // Remove the errorString if it's not set.
            if (result.errorString === '' || result.errorString === undefined) {
                delete result.errorString;
            }
            return result;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            function isArrayLike(obj) {
                if (!obj || (typeof obj === "undefined" ? "undefined" : _type_of(obj)) !== 'object') {
                    return false;
                }
                try {
                    if (typeof obj.splice === 'function') {
                        var len = obj.length;
                        return typeof len === 'number' && len >>> 0 === len && (len > 0 || 1 / len > 0);
                    }
                } catch (e) {}
                return false;
            }
            function checkEventListener(eventListener) {
                try {
                    var errorString = '';
                    if (!eventListener) {
                        errorString += 'empty event listener, ';
                    } else {
                        var type = eventListener.type;
                        if (!type || typeof type !== 'string') {
                            errorString += 'event listener\'s type isn\'t string or empty, ';
                        }
                        var useCapture = eventListener.useCapture;
                        if (typeof useCapture !== 'boolean') {
                            errorString += 'event listener\'s useCapture isn\'t boolean or undefined, ';
                        }
                        var passive = eventListener.passive;
                        if (typeof passive !== 'boolean') {
                            errorString += 'event listener\'s passive isn\'t boolean or undefined, ';
                        }
                        var once = eventListener.once;
                        if (typeof once !== 'boolean') {
                            errorString += 'event listener\'s once isn\'t boolean or undefined, ';
                        }
                        var handler = eventListener.handler;
                        if (!handler || typeof handler !== 'function') {
                            errorString += 'event listener\'s handler isn\'t a function or empty, ';
                        }
                        var remove = eventListener.remove;
                        if (remove && typeof remove !== 'function') {
                            errorString += 'event listener\'s remove isn\'t a function, ';
                        }
                        if (!errorString) {
                            return {
                                type: type,
                                useCapture: useCapture,
                                passive: passive,
                                once: once,
                                handler: handler,
                                remove: remove
                            };
                        }
                    }
                    errorLines.push(errorString.substr(0, errorString.length - 2));
                    return null;
                } catch (error) {
                    errorLines.push(toString(error));
                    return null;
                }
            }
            // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            function checkInternalHandler(handler) {
                if (handler && typeof handler === 'function') {
                    return handler;
                }
                errorLines.push('internal handler isn\'t a function or empty');
                return null;
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            function toString(obj) {
                try {
                    return String(obj);
                } catch (e) {
                    return '<error>';
                }
            }
            function nonEmptyObject(obj) {
                return Boolean(obj);
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            function jQueryFetcher(node) {
                if (!node || !_instanceof(node, Node)) {
                    return {
                        eventListeners: []
                    };
                }
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                var jQuery = window['jQuery'];
                if (!jQuery || !jQuery.fn) {
                    return {
                        eventListeners: []
                    };
                }
                var jQueryFunction = jQuery;
                var data = jQuery._data || jQuery.data;
                var eventListeners = [];
                var internalHandlers = [];
                if (typeof data === 'function') {
                    var events = data(node, 'events');
                    for(var type in events){
                        for(var key in events[type]){
                            var frameworkListener = events[type][key];
                            if ((typeof frameworkListener === "undefined" ? "undefined" : _type_of(frameworkListener)) === 'object' || typeof frameworkListener === 'function') {
                                var listener = {
                                    handler: frameworkListener.handler || frameworkListener,
                                    useCapture: true,
                                    passive: false,
                                    once: false,
                                    type: type,
                                    remove: jQueryRemove.bind(node, frameworkListener.selector)
                                };
                                eventListeners.push(listener);
                            }
                        }
                    }
                    var nodeData = data(node);
                    if (nodeData && typeof nodeData.handle === 'function') {
                        internalHandlers.push(nodeData.handle);
                    }
                }
                var entry = jQueryFunction(node)[0];
                if (entry) {
                    var entryEvents = entry['$events'];
                    for(var type1 in entryEvents){
                        var events1 = entryEvents[type1];
                        for(var key1 in events1){
                            if (typeof events1[key1] === 'function') {
                                var listener1 = {
                                    handler: events1[key1],
                                    useCapture: true,
                                    passive: false,
                                    once: false,
                                    type: type1
                                };
                                // We don't support removing for old version < 1.4 of jQuery because it doesn't provide API for getting "selector".
                                eventListeners.push(listener1);
                            }
                        }
                    }
                    if (entry && entry['$handle']) {
                        internalHandlers.push(entry['$handle']);
                    }
                }
                return {
                    eventListeners: eventListeners,
                    internalHandlers: internalHandlers
                };
            }
            function jQueryRemove(selector, type, handler) {
                if (!this || !_instanceof(this, Node)) {
                    return;
                }
                var node = this;
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                var jQuery = window['jQuery'];
                if (!jQuery || !jQuery.fn) {
                    return;
                }
                var jQueryFunction = jQuery;
                jQueryFunction(node).off(type, selector, handler);
            }
        }
        return _ts_generator(this, function(_state) {
            domDebuggerModel = object.runtimeModel().target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMDebuggerModel.DOMDebuggerModel);
            if (!domDebuggerModel) {
                return [
                    2,
                    {
                        eventListeners: [],
                        internalHandlers: null
                    }
                ];
            }
            listenersResult = {
                internalHandlers: null,
                eventListeners: []
            };
            return [
                2,
                object.callFunction(frameworkEventListenersImpl, undefined).then(assertCallFunctionResult).then(getOwnProperties).then(createEventListeners).then(returnResult).catch(function(error) {
                    console.error(error);
                    return listenersResult;
                })
            ];
        });
    });
    return _frameworkEventListeners.apply(this, arguments);
}


}),

}]);