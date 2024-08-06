"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_sources_components_BreakpointsViewUtils_js"], {
"./panels/sources/components/BreakpointsViewUtils.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  findNextNodeForKeyboardNavigation: function() { return findNextNodeForKeyboardNavigation; },
  getDifferentiatingPathMap: function() { return getDifferentiatingPathMap; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./core/platform/platform.js");
// Copyright (c) 2022 The Chromium Authors. All rights reserved.
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
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



var SUMMARY_ELEMENT_SELECTOR = 'summary';
var domNodeIsTree = function(domNode) {
    return domNode.getAttribute('role') === 'tree';
};
var domNodeIsBreakpointItemNode = function(domNode) {
    return domNode.getAttribute('role') === 'treeitem';
};
var domNodeIsPauseOnExceptionsNode = function(domNode) {
    return domNode.getAttribute('data-first-pause') !== null || domNode.getAttribute('data-last-pause') !== null;
};
var domNodeIsSummaryNode = function(domNode) {
    return !domNodeIsBreakpointItemNode(domNode);
};
var groupIsExpanded = function(detailsElement) {
    return detailsElement.getAttribute('open') !== null;
};
var getFirstBreakpointItemInGroup = function(detailsElement) {
    return detailsElement.querySelector('[data-first-breakpoint]');
};
var getLastBreakpointItemInGroup = function(detailsElement) {
    return detailsElement.querySelector('[data-last-breakpoint]');
};
var getNextGroupsSummaryNode = function(detailsElement) {
    var nextDetailsElement = getNextDetailsElement(detailsElement);
    if (nextDetailsElement && _instanceof(nextDetailsElement, HTMLDetailsElement)) {
        return nextDetailsElement === null || nextDetailsElement === void 0 ? void 0 : nextDetailsElement.querySelector('summary');
    }
    return null;
};
var getCurrentSummaryNode = function(detailsElement) {
    return detailsElement.querySelector(SUMMARY_ELEMENT_SELECTOR);
};
var getNextDetailsElement = function(detailsElement) {
    var nextDetailsElement = detailsElement.nextElementSibling;
    if (nextDetailsElement && _instanceof(nextDetailsElement, HTMLDetailsElement)) {
        return nextDetailsElement;
    }
    return null;
};
var getPreviousDetailsElement = function(detailsElement) {
    var previousDetailsElement = detailsElement.previousElementSibling;
    if (previousDetailsElement && _instanceof(previousDetailsElement, HTMLDetailsElement)) {
        return previousDetailsElement;
    }
    return null;
};
function findNextNodeForPauseOnExceptions(target, key) {
    // Handle keyboard navigation on one of the pause on exceptions checkboxes.
    console.assert(domNodeIsPauseOnExceptionsNode(target));
    var nextNode = null;
    switch(key){
        case "ArrowUp" /* Platform.KeyboardUtilities.ArrowKey.UP */ :
            {
                var previousElementSibling = target.previousElementSibling;
                if (_instanceof(previousElementSibling, HTMLElement)) {
                    nextNode = previousElementSibling;
                    console.assert(domNodeIsPauseOnExceptionsNode(nextNode));
                }
                break;
            }
        case "ArrowDown" /* Platform.KeyboardUtilities.ArrowKey.DOWN */ :
            {
                var nextElementSibling = target.nextElementSibling;
                if (_instanceof(nextElementSibling, HTMLElement)) {
                    if (domNodeIsTree(nextElementSibling)) {
                        var detailsElement = nextElementSibling.querySelector('[data-first-group]');
                        if (detailsElement) {
                            nextNode = getCurrentSummaryNode(detailsElement);
                        }
                    } else {
                        nextNode = nextElementSibling;
                        console.assert(domNodeIsPauseOnExceptionsNode(nextNode));
                    }
                }
                break;
            }
        default:
            break;
    }
    return nextNode;
}
function findNextNodeForKeyboardNavigation(target, key, setGroupExpandedStateCallback) {
    return _findNextNodeForKeyboardNavigation.apply(this, arguments);
}
function _findNextNodeForKeyboardNavigation() {
    _findNextNodeForKeyboardNavigation = _async_to_generator(function(target, key, setGroupExpandedStateCallback) {
        var detailsElement, nextNode, nextSibling, previousDetailsElement, _detailsElement_parentElement, pauseOnExceptions, previousSibling;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (domNodeIsPauseOnExceptionsNode(target)) {
                        return [
                            2,
                            findNextNodeForPauseOnExceptions(target, key)
                        ];
                    }
                    // Handle keyboard navigation in the breakpoint tree.
                    detailsElement = target.parentElement;
                    if (!detailsElement || !_instanceof(detailsElement, HTMLDetailsElement)) {
                        throw new Error('The selected nodes should be direct children of an HTMLDetails element.');
                    }
                    nextNode = null;
                    switch(key){
                        case "ArrowLeft" /* Platform.KeyboardUtilities.ArrowKey.LEFT */ :
                            return [
                                3,
                                1
                            ];
                        case "ArrowRight" /* Platform.KeyboardUtilities.ArrowKey.RIGHT */ :
                            return [
                                3,
                                6
                            ];
                        case "ArrowDown" /* Platform.KeyboardUtilities.ArrowKey.DOWN */ :
                            return [
                                3,
                                9
                            ];
                        case "ArrowUp" /* Platform.KeyboardUtilities.ArrowKey.UP */ :
                            return [
                                3,
                                10
                            ];
                    }
                    return [
                        3,
                        11
                    ];
                case 1:
                    if (!domNodeIsSummaryNode(target)) return [
                        3,
                        4
                    ];
                    if (!groupIsExpanded(detailsElement)) return [
                        3,
                        3
                    ];
                    return [
                        4,
                        setGroupExpandedStateCallback(detailsElement, false)
                    ];
                case 2:
                    _state.sent();
                    _state.label = 3;
                case 3:
                    return [
                        3,
                        5
                    ];
                case 4:
                    // On a breakpoint item node, navigate up to the summary node.
                    return [
                        2,
                        getCurrentSummaryNode(detailsElement)
                    ];
                case 5:
                    return [
                        3,
                        11
                    ];
                case 6:
                    if (!domNodeIsSummaryNode(target)) return [
                        3,
                        8
                    ];
                    // On a summary node, expand if group is collapsed, and otherwise navigate
                    // to the first breakpoint item in this group.
                    if (groupIsExpanded(detailsElement)) {
                        return [
                            2,
                            getFirstBreakpointItemInGroup(detailsElement)
                        ];
                    }
                    return [
                        4,
                        setGroupExpandedStateCallback(detailsElement, true)
                    ];
                case 7:
                    _state.sent();
                    _state.label = 8;
                case 8:
                    return [
                        3,
                        11
                    ];
                case 9:
                    {
                        if (domNodeIsSummaryNode(target)) {
                            if (groupIsExpanded(detailsElement)) {
                                // If the current node is a summary node of an expanded group, navigating down
                                // should lead to the first breakpoint item within the group.
                                nextNode = getFirstBreakpointItemInGroup(detailsElement);
                            } else {
                                // If the current node is a summary node of a collapsed group, go to the next
                                // group's summary node if existent.
                                nextNode = getNextGroupsSummaryNode(detailsElement);
                            }
                        } else {
                            // If the current node is a breakpoint item, try to get the next
                            // breakpoint item if available, otherwise the next group's summary
                            // node.
                            nextSibling = target.nextElementSibling;
                            if (nextSibling && _instanceof(nextSibling, HTMLDivElement)) {
                                nextNode = nextSibling;
                            } else {
                                nextNode = getNextGroupsSummaryNode(detailsElement);
                            }
                        }
                        return [
                            3,
                            11
                        ];
                    }
                    _state.label = 10;
                case 10:
                    {
                        // If the current node is a summary node, navigating upwards will either
                        // navigate to the last breakpoint item of the previous group (if expanded),
                        // and otherwise navigate to the previous group's summary node.
                        if (domNodeIsSummaryNode(target)) {
                            previousDetailsElement = getPreviousDetailsElement(detailsElement);
                            if (previousDetailsElement) {
                                if (groupIsExpanded(previousDetailsElement)) {
                                    nextNode = getLastBreakpointItemInGroup(previousDetailsElement);
                                } else {
                                    nextNode = getCurrentSummaryNode(previousDetailsElement);
                                }
                            } else {
                                ;
                                pauseOnExceptions = (_detailsElement_parentElement = detailsElement.parentElement) === null || _detailsElement_parentElement === void 0 ? void 0 : _detailsElement_parentElement.previousElementSibling;
                                if (_instanceof(pauseOnExceptions, HTMLElement)) {
                                    nextNode = pauseOnExceptions;
                                }
                            }
                        } else {
                            // If the current node is a breakpoint item, going up should get
                            // the previous sibling, which can be both a summary node or a
                            // a breakpoint item.
                            previousSibling = target.previousElementSibling;
                            if (_instanceof(previousSibling, HTMLElement)) {
                                nextNode = previousSibling;
                            }
                        }
                        return [
                            3,
                            11
                        ];
                    }
                    _state.label = 11;
                case 11:
                    return [
                        2,
                        nextNode
                    ];
            }
        });
    });
    return _findNextNodeForKeyboardNavigation.apply(this, arguments);
}
function findFirstDifferingSegmentIndex(splitUrls) {
    var firstUrl = splitUrls[0];
    var firstDifferingIndex = -1;
    for(var segmentIndex = 0; segmentIndex < firstUrl.length && firstDifferingIndex === -1; ++segmentIndex){
        var segment = firstUrl[segmentIndex];
        for(var urlIndex = 1; urlIndex < splitUrls.length; ++urlIndex){
            var url = splitUrls[urlIndex];
            if (url.length <= segmentIndex || url[segmentIndex] !== segment) {
                firstDifferingIndex = segmentIndex;
                break;
            }
        }
    }
    return firstDifferingIndex === -1 ? firstUrl.length : firstDifferingIndex;
}
function findDifferentiatingPath(url, allUrls, startIndex) {
    var _loop = function(segmentIndex) {
        var segment = url[segmentIndex];
        differentiatingPath.push(segment);
        remainingUrlsToDifferentiate = remainingUrlsToDifferentiate.filter(function(url) {
            return url.length > segmentIndex && url[segmentIndex] === segment;
        });
        if (remainingUrlsToDifferentiate.length === 0) {
            return "break";
        }
    };
    var differentiatingPath = [];
    var remainingUrlsToDifferentiate = allUrls.filter(function(other) {
        return other !== url;
    });
    for(var segmentIndex = startIndex; segmentIndex < url.length; ++segmentIndex){
        var _ret = _loop(segmentIndex);
        if (_ret === "break") break;
    }
    return differentiatingPath;
}
// This function tries to find a subpath (if available) that we can use to differentiate
// urls that have the same file name.
// It does so by 1. removing common suffixes, 2. taking segments of the path (from right to left) until the path is
// unique.
//
// Example:
//
//     Paths:  'http://www.google.com/src/a/index.js', 'http://www.google.com/src2/a/index.js'
//     Output: 'src/…/', 'src2/…/'
function populateDifferentiatingPathMap(urls, urlToDifferentiator) {
    var splitReversedUrls = urls.map(function(url) {
        var _Common_ParsedURL_ParsedURL_fromString;
        // Get the folder path components without the first '/'.
        var paths = (_Common_ParsedURL_ParsedURL_fromString = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.fromString(url)) === null || _Common_ParsedURL_ParsedURL_fromString === void 0 ? void 0 : _Common_ParsedURL_ParsedURL_fromString.folderPathComponents.slice(1);
        (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.assertNotNullOrUndefined)(paths);
        return paths.split('/').reverse();
    });
    var startIndex = findFirstDifferingSegmentIndex(splitReversedUrls);
    for(var i = 0; i < splitReversedUrls.length; ++i){
        var splitUrl = splitReversedUrls[i];
        var differentiator = findDifferentiatingPath(splitUrl, splitReversedUrls, startIndex);
        var reversed = differentiator.reverse().join('/');
        // If we start to collect the differentiator from the last segment (startIndex === 0),
        // only append a '/', otherwise' …/'.
        if (startIndex === 0) {
            urlToDifferentiator.set(urls[i], reversed + '/');
        } else {
            urlToDifferentiator.set(urls[i], reversed + '/\u2026/');
        }
    }
    console.assert(new Set(urlToDifferentiator.values()).size === urls.length, 'Differentiators should be unique.');
}
function getDifferentiatingPathMap(titleInfos) {
    var nameToUrl = new Map();
    var urlToDifferentiatingPath = new Map();
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = titleInfos[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _step.value, name = _step_value.name, url = _step_value.url;
            var _nameToUrl_get;
            if (!nameToUrl.has(name)) {
                nameToUrl.set(name, []);
            }
            (_nameToUrl_get = nameToUrl.get(name)) === null || _nameToUrl_get === void 0 ? void 0 : _nameToUrl_get.push(url);
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
    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
    try {
        for(var _iterator1 = nameToUrl.values()[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
            var urlsGroupedByName = _step1.value;
            if (urlsGroupedByName.length > 1) {
                populateDifferentiatingPathMap(urlsGroupedByName, urlToDifferentiatingPath);
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
    return urlToDifferentiatingPath;
} //# sourceMappingURL=BreakpointsViewUtils.js.map


}),

}]);