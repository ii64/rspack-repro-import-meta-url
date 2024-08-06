"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["legacy_test_runner_console_test_runner_console_test_runner_js"], {
"./legacy_test_runner/console_test_runner/console_test_runner.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ConsoleTestRunner: function() { return ConsoleTestRunner; }
});
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../panels/console/console.js */ "./panels/console/console.js");
/* harmony import */var _panels_console_counters_console_counters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../panels/console_counters/console_counters.js */ "./panels/console_counters/console_counters.js");
/* harmony import */var _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/object_ui/object_ui.js */ "./ui/legacy/components/object_ui/object_ui.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../test_runner/test_runner.js */ "./legacy_test_runner/test_runner/test_runner.js");
/* harmony import */var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__);
// Copyright 2017 The Chromium Authors. All rights reserved.
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
 * @fileoverview using private properties isn't a Closure violation in tests.
 */ var ConsoleTestRunner = {};
/** @typedef {function(!Element, !SDK.ConsoleModel.ConsoleMessage=):string} */ ConsoleTestRunner.Formatter;
/**
 * @param {boolean=} printOriginatingCommand
 * @param {boolean=} dumpClassNames
 * @param {!ConsoleTestRunner.Formatter=} formatter
 */ ConsoleTestRunner.dumpConsoleMessages = function() {
    var _ref = _async_to_generator(function(printOriginatingCommand, dumpClassNames, formatter) {
        var _;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _ = _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addResults;
                    return [
                        4,
                        ConsoleTestRunner.dumpConsoleMessagesIntoArray(printOriginatingCommand, dumpClassNames, formatter)
                    ];
                case 1:
                    _.apply(_test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner, [
                        _state.sent()
                    ]);
                    return [
                        2
                    ];
            }
        });
    });
    return function(printOriginatingCommand, dumpClassNames, formatter) {
        return _ref.apply(this, arguments);
    };
}();
/**
 * @param {boolean=} printOriginatingCommand
 * @param {boolean=} dumpClassNames
 * @param {!ConsoleTestRunner.Formatter=} formatter
 * @return {!Promise<!Array<string>>}
 */ ConsoleTestRunner.dumpConsoleMessagesIntoArray = function() {
    var _ref = _async_to_generator(function(printOriginatingCommand, dumpClassNames, formatter) {
        var result, consoleView, originalViewportStyle, originalSize, viewMessages, i, uiMessage, message, element, classNames, node, depth, depthTest, messageText;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    formatter = formatter || ConsoleTestRunner.prepareConsoleMessageText;
                    result = [];
                    consoleView = _panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleView.ConsoleView.instance();
                    originalViewportStyle = consoleView.viewport.element.style;
                    originalSize = {
                        width: originalViewportStyle.width,
                        height: originalViewportStyle.height
                    };
                    ConsoleTestRunner.disableConsoleViewport();
                    if (consoleView.needsFullUpdate) {
                        consoleView.updateMessageList();
                    }
                    viewMessages = consoleView.visibleViewMessages;
                    i = 0;
                    _state.label = 1;
                case 1:
                    if (!(i < viewMessages.length)) return [
                        3,
                        5
                    ];
                    uiMessage = viewMessages[i];
                    message = uiMessage.consoleMessage();
                    element = uiMessage.element();
                    // Retrieving the message element triggered rendering, now wait for
                    // the live location within to be resolved initially.
                    return [
                        4,
                        uiMessage.formatErrorStackPromiseForTest()
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.waitForPendingLiveLocationUpdates()
                    ];
                case 3:
                    _state.sent();
                    classNames = void 0;
                    if (dumpClassNames) {
                        classNames = [
                            ''
                        ];
                        for(node = element.firstChild; node; node = node.traverseNextNode(element)){
                            if (node.nodeType === Node.ELEMENT_NODE && node.className) {
                                depth = 0;
                                depthTest = node;
                                while(depthTest !== element){
                                    if (depthTest.nodeType === Node.ELEMENT_NODE && depthTest.className) {
                                        depth++;
                                    }
                                    depthTest = depthTest.parentNodeOrShadowHost();
                                }
                                classNames.push('  '.repeat(depth) + node.className.replace('platform-linux', 'platform-*').replace('platform-mac', 'platform-*').replace('platform-windows', 'platform-*'));
                            }
                        }
                    }
                    if (ConsoleTestRunner.dumpConsoleTableMessage(uiMessage, false, result)) {
                        if (dumpClassNames) {
                            result.push(classNames.join('\n'));
                        }
                    } else {
                        messageText = formatter(element, message);
                        messageText = messageText.replace(/VM\d+/g, 'VM');
                        result.push(messageText + (dumpClassNames ? ' ' + classNames.join('\n') : ''));
                    }
                    if (printOriginatingCommand && uiMessage.consoleMessage().originatingMessage()) {
                        result.push('Originating from: ' + uiMessage.consoleMessage().originatingMessage().messageText);
                    }
                    _state.label = 4;
                case 4:
                    ++i;
                    return [
                        3,
                        1
                    ];
                case 5:
                    consoleView.viewport.element.style.width = originalSize.width;
                    consoleView.viewport.element.style.height = originalSize.height;
                    return [
                        2,
                        result
                    ];
            }
        });
    });
    return function(printOriginatingCommand, dumpClassNames, formatter) {
        return _ref.apply(this, arguments);
    };
}();
/**
 * @param {!Element} messageElement
 * @return {string}
 */ ConsoleTestRunner.prepareConsoleMessageText = function(messageElement) {
    var messageText = messageElement.deepTextContent().replace(/\u200b/g, '');
    // Replace scriptIds with generic scriptId string to avoid flakiness.
    messageText = messageText.replace(/VM\d+/g, 'VM');
    // Remove line and column of evaluate method.
    messageText = messageText.replace(/(at eval \(eval at evaluate) \(:\d+:\d+\)/, '$1');
    if (messageText.startsWith('Navigated to')) {
        var fileName = messageText.split(' ').pop().split('/').pop();
        messageText = 'Navigated to ' + fileName;
    }
    // The message might be extremely long in case of dumping stack overflow message.
    messageText = messageText.substring(0, 1024);
    return messageText;
};
/**
 * @param {!Element} messageElement
 * @return {string}
 */ ConsoleTestRunner.prepareConsoleMessageTextTrimmed = function(messageElement) {
    return ConsoleTestRunner.prepareConsoleMessageText(messageElement).replace(/[ ]+/g, ' ');
};
/**
 * @param {!Console.ConsoleViewMessage.ConsoleViewMessage} viewMessage
 * @param {boolean} forceInvalidate
 * @param {!Array<string>} results
 * @return {boolean}
 */ ConsoleTestRunner.dumpConsoleTableMessage = function(viewMessage, forceInvalidate, results) {
    if (forceInvalidate) {
        _panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleView.ConsoleView.instance().viewport.invalidate();
    }
    var formattedTable = viewMessage.element().querySelector('.console-message-formatted-table');
    if (!formattedTable) {
        return false;
    }
    var table = formattedTable.querySelector('span').shadowRoot;
    var headers = table.querySelectorAll('th > div:first-child');
    if (!headers.length) {
        return false;
    }
    var headerLine = '';
    for(var i = 0; i < headers.length; i++){
        headerLine += headers[i].textContent + ' | ';
    }
    addResult('HEADER ' + headerLine);
    var rows = table.querySelectorAll('.data-container tr');
    for(var i1 = 0; i1 < rows.length; i1++){
        var row = rows[i1];
        var rowLine = '';
        var items = row.querySelectorAll('td > span');
        for(var j = 0; j < items.length; j++){
            rowLine += items[j].textContent + ' | ';
        }
        if (rowLine.trim()) {
            addResult('ROW ' + rowLine);
        }
    }
    /**
   * @param {string} x
   */ function addResult(x) {
        if (results) {
            results.push(x);
        } else {
            _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addResult(x);
        }
    }
    return true;
};
ConsoleTestRunner.disableConsoleViewport = function() {
    ConsoleTestRunner.fixConsoleViewportDimensions(600, 2000);
};
/**
 * @param {number} width
 * @param {number} height
 */ ConsoleTestRunner.fixConsoleViewportDimensions = function(width, height) {
    var viewport = _panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleView.ConsoleView.instance().viewport;
    viewport.element.style.width = width + 'px';
    viewport.element.style.height = height + 'px';
    viewport.element.style.position = 'absolute';
    viewport.invalidate();
};
ConsoleTestRunner.selectMainExecutionContext = function() {
    var executionContexts = _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.runtimeModel.executionContexts();
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = executionContexts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var context = _step.value;
            if (context.isDefault) {
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RuntimeModel.ExecutionContext, context);
                return;
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
};
/**
 * @param {string} code
 * @param {!Function=} callback
 * @param {boolean=} dontForceMainContext
 */ ConsoleTestRunner.evaluateInConsole = function(code, callback, dontForceMainContext) {
    if (!dontForceMainContext) {
        ConsoleTestRunner.selectMainExecutionContext();
    }
    callback = _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.safeWrap(callback);
    var consoleView = _panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleView.ConsoleView.instance();
    consoleView.prompt.appendCommand(code, true);
    ConsoleTestRunner.addConsoleViewSniffer(function(commandResult) {
        var element = commandResult.toMessageElement();
        // Only call the callback once the live location within the
        // message element is resolved initially.
        Promise.all([
            commandResult.formatErrorStackPromiseForTest(),
            _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.waitForPendingLiveLocationUpdates()
        ]).then(function() {
            callback(element.deepTextContent());
        });
    });
};
/**
 * @param {string} code
 * @param {boolean=} dontForceMainContext
 * @return {!Promise}
 */ ConsoleTestRunner.evaluateInConsolePromise = function(code, dontForceMainContext) {
    return new Promise(function(fulfill) {
        return ConsoleTestRunner.evaluateInConsole(code, fulfill, dontForceMainContext);
    });
};
/**
 * @param {!Function} override
 * @param {boolean=} opt_sticky
 */ ConsoleTestRunner.addConsoleViewSniffer = function(override, opt_sticky) {
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addSniffer(_panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleView.ConsoleView.prototype, 'consoleMessageAddedForTest', override, opt_sticky);
};
ConsoleTestRunner.waitForPendingViewportUpdates = /*#__PURE__*/ _async_to_generator(function() {
    var refreshPromise;
    return _ts_generator(this, function(_state) {
        switch(_state.label){
            case 0:
                refreshPromise = _panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleView.ConsoleView.instance().scheduledRefreshPromiseForTest || Promise.resolve();
                return [
                    4,
                    refreshPromise
                ];
            case 1:
                _state.sent();
                return [
                    2
                ];
        }
    });
});
/**
 * @param {string} code
 * @param {!Function=} callback
 * @param {boolean=} dontForceMainContext
 */ ConsoleTestRunner.evaluateInConsoleAndDump = function(code, callback, dontForceMainContext) {
    callback = _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.safeWrap(callback);
    /**
   * @param {string} text
   */ function mycallback(text) {
        text = text.replace(/\bVM\d+/g, 'VM');
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addResult(code + ' = ' + text);
        callback(text);
    }
    ConsoleTestRunner.evaluateInConsole(code, mycallback, dontForceMainContext);
};
/**
 * @param {string} code
 * @param {boolean=} dontForceMainContext
 * @return {!Promise}
 */ ConsoleTestRunner.evaluateInConsoleAndDumpPromise = function(code, dontForceMainContext) {
    return new Promise(function(fulfill) {
        return ConsoleTestRunner.evaluateInConsoleAndDump(code, fulfill, dontForceMainContext);
    });
};
/**
 * @return {number}
 */ ConsoleTestRunner.consoleMessagesCount = function() {
    var consoleView = _panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleView.ConsoleView.instance();
    return consoleView.consoleMessages.length;
};
/**
 * @param {function(!Element):string|undefined} messageFormatter
 * @param {!Element} node
 * @return {string}
 */ ConsoleTestRunner.formatterIgnoreStackFrameUrls = function(messageFormatter, node) {
    /**
   * @param {string} string
   */ function isNotEmptyLine(string) {
        return string.trim().length > 0;
    }
    /**
   * @param {string} string
   */ function ignoreStackFrameAndMutableData(string) {
        var buffer = string.replace(/\u200b/g, '');
        buffer = buffer.replace(/VM\d+/g, 'VM');
        return buffer.replace(/^\s+at [^\]]+(]?)$/, '$1');
    }
    messageFormatter = messageFormatter || _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.textContentWithLineBreaks;
    var buffer = messageFormatter(node);
    return buffer.split('\n').map(ignoreStackFrameAndMutableData).filter(isNotEmptyLine).join('\n');
};
/**
 * @param {!Element} element
 * @param {!SDK.ConsoleModel.ConsoleMessage} message
 * @return {string}
 */ ConsoleTestRunner.simpleFormatter = function(element, message) {
    return message.messageText + ':' + message.line + ':' + message.column;
};
/**
 * @param {boolean=} printOriginatingCommand
 * @param {boolean=} dumpClassNames
 * @param {!ConsoleTestRunner.Formatter=} messageFormatter
 */ ConsoleTestRunner.dumpConsoleMessagesIgnoreErrorStackFrames = function() {
    var _ref = _async_to_generator(function(printOriginatingCommand, dumpClassNames, messageFormatter) {
        var _;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _ = _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addResults;
                    return [
                        4,
                        ConsoleTestRunner.dumpConsoleMessagesIntoArray(printOriginatingCommand, dumpClassNames, ConsoleTestRunner.formatterIgnoreStackFrameUrls.bind(this, messageFormatter))
                    ];
                case 1:
                    _.apply(_test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner, [
                        _state.sent()
                    ]);
                    return [
                        2
                    ];
            }
        });
    });
    return function(printOriginatingCommand, dumpClassNames, messageFormatter) {
        return _ref.apply(this, arguments);
    };
}();
ConsoleTestRunner.dumpConsoleMessagesWithStyles = function() {
    var messageViews = _panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleView.ConsoleView.instance().visibleViewMessages;
    for(var i = 0; i < messageViews.length; ++i){
        var element = messageViews[i].element();
        var messageText = ConsoleTestRunner.prepareConsoleMessageText(element);
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addResult(messageText);
        var spans = element.querySelectorAll('.console-message-text *');
        for(var j = 0; j < spans.length; ++j){
            _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addResult('Styled text #' + j + ': ' + (spans[j].style.cssText || 'NO STYLES DEFINED'));
        }
    }
};
/**
 * @param {boolean=} sortMessages
 * @param {boolean=} trimMessages
 */ ConsoleTestRunner.dumpConsoleMessagesWithClasses = function() {
    var _ref = _async_to_generator(function(sortMessages, trimMessages) {
        var result, messageViews, i, element, contentElement, messageText;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    result = [];
                    messageViews = _panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleView.ConsoleView.instance().visibleViewMessages;
                    i = 0;
                    _state.label = 1;
                case 1:
                    if (!(i < messageViews.length)) return [
                        3,
                        4
                    ];
                    element = messageViews[i].element();
                    contentElement = messageViews[i].contentElement();
                    return [
                        4,
                        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.waitForPendingLiveLocationUpdates()
                    ];
                case 2:
                    _state.sent();
                    messageText = ConsoleTestRunner.prepareConsoleMessageText(element);
                    if (trimMessages) {
                        messageText = messageText.replace(/[ ]+/g, ' ');
                        messageText = messageText.replace(/\s+\n\s+/g, ' ');
                    }
                    result.push(messageText + ' ' + element.getAttribute('class') + ' > ' + contentElement.getAttribute('class'));
                    _state.label = 3;
                case 3:
                    ++i;
                    return [
                        3,
                        1
                    ];
                case 4:
                    if (sortMessages) {
                        result.sort();
                    }
                    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addResults(result);
                    return [
                        2
                    ];
            }
        });
    });
    return function(sortMessages, trimMessages) {
        return _ref.apply(this, arguments);
    };
}();
ConsoleTestRunner.dumpConsoleClassesBrief = /*#__PURE__*/ _async_to_generator(function() {
    var messageViews, i, repeatText, element;
    return _ts_generator(this, function(_state) {
        switch(_state.label){
            case 0:
                messageViews = _panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleView.ConsoleView.instance().visibleViewMessages;
                i = 0;
                _state.label = 1;
            case 1:
                if (!(i < messageViews.length)) return [
                    3,
                    4
                ];
                repeatText = messageViews[i].repeatCount() > 1 ? ' x' + messageViews[i].repeatCount() : '';
                element = messageViews[i].toMessageElement();
                return [
                    4,
                    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.waitForPendingLiveLocationUpdates()
                ];
            case 2:
                _state.sent();
                _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addResult(element.className + repeatText);
                _state.label = 3;
            case 3:
                ++i;
                return [
                    3,
                    1
                ];
            case 4:
                return [
                    2
                ];
        }
    });
});
ConsoleTestRunner.dumpConsoleCounters = /*#__PURE__*/ _async_to_generator(function() {
    var counter;
    return _ts_generator(this, function(_state) {
        switch(_state.label){
            case 0:
                counter = _panels_console_counters_console_counters_js__WEBPACK_IMPORTED_MODULE_3__.WarningErrorCounter.WarningErrorCounter.instanceForTest;
                if (!counter.updatingForTest) return [
                    3,
                    2
                ];
                return [
                    4,
                    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addSnifferPromise(counter, 'updatedForTest')
                ];
            case 1:
                _state.sent();
                _state.label = 2;
            case 2:
                if (counter.titlesForTesting) {
                    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addResult(counter.titlesForTesting);
                }
                return [
                    4,
                    ConsoleTestRunner.dumpConsoleClassesBrief()
                ];
            case 3:
                _state.sent();
                return [
                    2
                ];
        }
    });
});
/**
 * @param {!Function} callback
 * @param {function(!Element):boolean} deepFilter
 * @param {function(!ObjectUI.ObjectPropertiesSection.ObjectPropertiesSection):boolean} sectionFilter
 */ ConsoleTestRunner.expandConsoleMessages = function(callback, deepFilter, sectionFilter) {
    _panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleView.ConsoleView.instance().invalidateViewport();
    var messageViews = _panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleView.ConsoleView.instance().visibleViewMessages;
    // Initiate round-trips to fetch necessary data for further rendering.
    for(var i = 0; i < messageViews.length; ++i){
        messageViews[i].element();
    }
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.deprecatedRunAfterPendingDispatches(expandTreeElements);
    function expandTreeElements() {
        for(var i = 0; i < messageViews.length; ++i){
            var element = messageViews[i].element();
            for(var node = element; node; node = node.traverseNextNode(element)){
                if (node.treeElementForTest) {
                    node.treeElementForTest.expand();
                }
                if (node.expandStackTraceForTest) {
                    node.expandStackTraceForTest();
                }
                var section = _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_4__.ObjectPropertiesSection.getObjectPropertiesSectionFrom(node);
                if (!section) {
                    continue;
                }
                if (sectionFilter && !sectionFilter(section)) {
                    continue;
                }
                section.expand();
                if (!deepFilter) {
                    continue;
                }
                var treeElements = section.rootElement().children();
                for(var j = 0; j < treeElements.length; ++j){
                    for(var treeElement = treeElements[j]; treeElement; treeElement = treeElement.traverseNextTreeElement(true, null, true)){
                        if (deepFilter(treeElement)) {
                            treeElement.expand();
                        }
                    }
                }
            }
        }
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.deprecatedRunAfterPendingDispatches(callback);
    }
};
/**
 * @param {function(!Element):boolean} deepFilter
 * @param {function(!ObjectUI.ObjectPropertiesSection.ObjectPropertiesSection):boolean} sectionFilter
 * @return {!Promise}
 */ ConsoleTestRunner.expandConsoleMessagesPromise = function(deepFilter, sectionFilter) {
    return new Promise(function(fulfill) {
        return ConsoleTestRunner.expandConsoleMessages(fulfill, deepFilter, sectionFilter);
    });
};
/**
 * @param {!Function} callback
 */ ConsoleTestRunner.expandGettersInConsoleMessages = function(callback) {
    var messageViews = _panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleView.ConsoleView.instance().visibleViewMessages;
    var properties = [];
    var propertiesCount = 0;
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addSniffer(_ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_4__.ObjectPropertiesSection.ObjectPropertyTreeElement.prototype, 'updateExpandable', propertyExpandableUpdated);
    for(var i = 0; i < messageViews.length; ++i){
        var element = messageViews[i].element();
        for(var node = element; node; node = node.traverseNextNode(element)){
            if (node.classList && node.classList.contains('object-value-calculate-value-button')) {
                ++propertiesCount;
                node.click();
                properties.push(node.parentElement.parentElement);
            }
        }
    }
    function propertyExpandableUpdated() {
        --propertiesCount;
        if (propertiesCount === 0) {
            for(var i = 0; i < properties.length; ++i){
                properties[i].click();
            }
            _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.deprecatedRunAfterPendingDispatches(callback);
        } else {
            _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addSniffer(_ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_4__.ObjectPropertiesSection.ObjectPropertyTreeElement.prototype, 'updateExpandable', propertyExpandableUpdated);
        }
    }
};
/**
 * @param {!Function} callback
 */ ConsoleTestRunner.expandConsoleMessagesErrorParameters = function(callback) {
    var messageViews = _panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleView.ConsoleView.instance().visibleViewMessages;
    // Initiate round-trips to fetch necessary data for further rendering.
    for(var i = 0; i < messageViews.length; ++i){
        messageViews[i].element();
    }
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.deprecatedRunAfterPendingDispatches(callback);
};
/**
 * @param {!Function} callback
 */ ConsoleTestRunner.waitForRemoteObjectsConsoleMessages = function(callback) {
    var messages = _panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleView.ConsoleView.instance().visibleViewMessages;
    for(var i = 0; i < messages.length; ++i){
        messages[i].toMessageElement();
    }
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.deprecatedRunAfterPendingDispatches(callback);
};
/**
 * @return {!Promise}
 */ ConsoleTestRunner.waitForRemoteObjectsConsoleMessagesPromise = function() {
    return new Promise(function(resolve) {
        return ConsoleTestRunner.waitForRemoteObjectsConsoleMessages(resolve);
    });
};
/**
 * @return {!Promise}
 */ ConsoleTestRunner.waitUntilConsoleEditorLoaded = function() {
    var fulfill;
    var promise = new Promise(function(x) {
        fulfill = x;
    });
    var prompt = _panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleView.ConsoleView.instance().prompt;
    if (prompt.editor) {
        fulfill(prompt.editor);
    } else {
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addSniffer(_panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__.ConsolePrompt.ConsolePrompt.prototype, 'editorSetForTest', function(_) {
            return fulfill(prompt.editor);
        });
    }
    return promise;
};
/**
 * @param {!Function} callback
 */ ConsoleTestRunner.waitUntilMessageReceived = function(callback) {
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addSniffer(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ConsoleModel.ConsoleModel.prototype, 'addMessage', callback, false);
};
/**
 * @return {!Promise}
 */ ConsoleTestRunner.waitUntilMessageReceivedPromise = function() {
    return new Promise(function(fulfill) {
        return ConsoleTestRunner.waitUntilMessageReceived(fulfill);
    });
};
/**
 * @param {number} count
 * @param {!Function} callback
 */ ConsoleTestRunner.waitUntilNthMessageReceived = function(count, callback) {
    function override() {
        if (--count === 0) {
            _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.safeWrap(callback)();
        } else {
            _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addSniffer(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ConsoleModel.ConsoleModel.prototype, 'addMessage', override, false);
        }
    }
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addSniffer(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ConsoleModel.ConsoleModel.prototype, 'addMessage', override, false);
};
/**
 * @param {number} count
 * @return {!Promise}
 */ ConsoleTestRunner.waitUntilNthMessageReceivedPromise = function(count) {
    return new Promise(function(fulfill) {
        return ConsoleTestRunner.waitUntilNthMessageReceived(count, fulfill);
    });
};
/**
 * @param {string} namePrefix
 */ ConsoleTestRunner.changeExecutionContext = function(namePrefix) {
    var selector = _panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleView.ConsoleView.instance().consoleContextSelector;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = selector.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var executionContext = _step.value;
            if (selector.titleFor(executionContext).startsWith(namePrefix)) {
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RuntimeModel.ExecutionContext, executionContext);
                return;
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
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addResult('FAILED: context with prefix: ' + namePrefix + ' not found in the context list');
};
/**
 * @param {number} expectedCount
 * @param {!Function} callback
 */ ConsoleTestRunner.waitForConsoleMessages = function(expectedCount, callback) {
    var consoleView = _panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleView.ConsoleView.instance();
    checkAndReturn();
    function checkAndReturn() {
        if (consoleView.visibleViewMessages.length === expectedCount) {
            _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addResult('Message count: ' + expectedCount);
            callback();
        } else {
            _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addSniffer(consoleView, 'messageAppendedForTests', checkAndReturn);
        }
    }
};
/**
 * @param {number} expectedCount
 * @return {!Promise}
 */ ConsoleTestRunner.waitForConsoleMessagesPromise = function() {
    var _ref = _async_to_generator(function(expectedCount) {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        new Promise(function(fulfill) {
                            return ConsoleTestRunner.waitForConsoleMessages(expectedCount, fulfill);
                        })
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.waitForPendingLiveLocationUpdates()
                    ];
                case 2:
                    _state.sent();
                    return [
                        2,
                        ConsoleTestRunner.waitForPendingViewportUpdates()
                    ];
            }
        });
    });
    return function(expectedCount) {
        return _ref.apply(this, arguments);
    };
}();
/**
 * @param {number} fromMessage
 * @param {number} fromTextOffset
 * @param {number} toMessage
 * @param {number} toTextOffset
 */ ConsoleTestRunner.selectConsoleMessages = function() {
    var _ref = _async_to_generator(function(fromMessage, fromTextOffset, toMessage, toTextOffset) {
        var consoleView, fromElement, toElement, from, to;
        /**
   * @param {!Node} container
   * @param {number} offset
   * @return {?{container: !Node, offset: number}}
   */ function selectionContainerAndOffset(container, offset) {
            /** @type {?Node} */ var node = container;
            if (offset === 0 && container.nodeType !== Node.TEXT_NODE) {
                container = /** @type {!Node} */ container.traverseNextTextNode();
                node = container;
            }
            var charCount = 0;
            while(node = node.traverseNextTextNode(container)){
                var length = node.textContent.length;
                if (charCount + length >= offset) {
                    return {
                        container: node,
                        offset: offset - charCount
                    };
                }
                charCount += length;
            }
            return null;
        }
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    consoleView = _panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleView.ConsoleView.instance();
                    fromElement = consoleView.itemElement(fromMessage).element();
                    toElement = consoleView.itemElement(toMessage).element();
                    return [
                        4,
                        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.waitForPendingLiveLocationUpdates()
                    ];
                case 1:
                    _state.sent();
                    from = selectionContainerAndOffset(fromElement, fromTextOffset);
                    to = selectionContainerAndOffset(toElement, toTextOffset);
                    window.getSelection().setBaseAndExtent(from.container, from.offset, to.container, to.offset);
                    return [
                        2
                    ];
            }
        });
    });
    return function(fromMessage, fromTextOffset, toMessage, toTextOffset) {
        return _ref.apply(this, arguments);
    };
}();
/**
 * @param {!Function} override
 * @param {boolean=} opt_sticky
 */ ConsoleTestRunner.addConsoleSniffer = function(override, opt_sticky) {
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addSniffer(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ConsoleModel.ConsoleModel.prototype, 'addMessage', override, opt_sticky);
};
/**
 * @param {!Function} func
 * @return {!Function}
 */ ConsoleTestRunner.wrapListener = function(func) {
    function wrapper() {
        return _wrapper.apply(this, arguments);
    }
    function _wrapper() {
        _wrapper = /**
   * @this {*}
   */ _async_to_generator(function() {
            var _arguments = arguments;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            Promise.resolve()
                        ];
                    case 1:
                        _state.sent();
                        func.apply(this, _arguments);
                        return [
                            2
                        ];
                }
            });
        });
        return _wrapper.apply(this, arguments);
    }
    return wrapper;
};
ConsoleTestRunner.dumpStackTraces = function() {
    var viewMessages = _panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleView.ConsoleView.instance().visibleViewMessages;
    for(var i = 0; i < viewMessages.length; ++i){
        var m = viewMessages[i].consoleMessage();
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addResult('Message[' + i + ']: ' + _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.ResourceUtils.displayNameForURL(m.url || '') + ':' + m.line + ' ' + m.messageText);
        var trace = m.stackTrace ? m.stackTrace.callFrames : null;
        if (!trace) {
            _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addResult('FAIL: no stack trace attached to message #' + i);
        } else {
            _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addResult('Stack Trace:\n');
            _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addResult('  url: ' + trace[0].url);
            _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addResult('  function: ' + trace[0].functionName);
            _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addResult('  line: ' + trace[0].lineNumber);
        }
    }
};
/**
 * @return {!{first: number, last: number, count: number}}
 */ ConsoleTestRunner.visibleIndices = function() {
    var consoleView = _panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleView.ConsoleView.instance();
    var viewport = consoleView.viewport;
    var viewportRect = viewport.element.getBoundingClientRect();
    var first = -1;
    var last = -1;
    var count = 0;
    for(var i = 0; i < consoleView.visibleViewMessages.length; i++){
        // Created message elements may have a bounding rect, but not be connected to DOM.
        var item = consoleView.visibleViewMessages[i];
        if (!item.elementInternal || !item.elementInternal.isConnected) {
            continue;
        }
        var itemRect = item.elementInternal.getBoundingClientRect();
        var isVisible = itemRect.bottom > viewportRect.top + 0.5 && itemRect.top < viewportRect.bottom - 0.5;
        if (isVisible) {
            first = first === -1 ? i : first;
            last = i;
            count++;
        }
    }
    return {
        first: first,
        last: last,
        count: count
    };
};


}),
"./panels/console_counters/console_counters.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  WarningErrorCounter: function() { return /* reexport module object */ _WarningErrorCounter_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _WarningErrorCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WarningErrorCounter.js */ "./panels/console_counters/WarningErrorCounter.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 //# sourceMappingURL=console_counters.js.map


}),

}]);