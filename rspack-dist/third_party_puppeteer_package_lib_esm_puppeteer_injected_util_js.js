"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_injected_util_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/injected/util.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  checkVisibility: function() { return checkVisibility; },
  pierce: function() { return pierce; },
  pierceAll: function() { return pierceAll; }
});
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ function _instanceof(left, right) {
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
var HIDDEN_VISIBILITY_VALUES = [
    'hidden',
    'collapse'
];
/**
 * @internal
 */ var checkVisibility = function(node, visible) {
    if (!node) {
        return visible === false;
    }
    if (visible === undefined) {
        return node;
    }
    var element = node.nodeType === Node.TEXT_NODE ? node.parentElement : node;
    var style = window.getComputedStyle(element);
    var isVisible = style && !HIDDEN_VISIBILITY_VALUES.includes(style.visibility) && !isBoundingBoxEmpty(element);
    return visible === isVisible ? node : false;
};
function isBoundingBoxEmpty(element) {
    var rect = element.getBoundingClientRect();
    return rect.width === 0 || rect.height === 0;
}
var hasShadowRoot = function(node) {
    return 'shadowRoot' in node && _instanceof(node.shadowRoot, ShadowRoot);
};
/**
 * @internal
 */ function pierce(root) {
    return _ts_generator(this, function(_state) {
        switch(_state.label){
            case 0:
                if (!hasShadowRoot(root)) return [
                    3,
                    2
                ];
                return [
                    4,
                    root.shadowRoot
                ];
            case 1:
                _state.sent();
                return [
                    3,
                    4
                ];
            case 2:
                return [
                    4,
                    root
                ];
            case 3:
                _state.sent();
                _state.label = 4;
            case 4:
                return [
                    2
                ];
        }
    });
}
/**
 * @internal
 */ function pierceAll(root) {
    var walkers, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, walker, node, err;
    return _ts_generator(this, function(_state) {
        switch(_state.label){
            case 0:
                root = pierce(root).next().value;
                return [
                    4,
                    root
                ];
            case 1:
                _state.sent();
                walkers = [
                    document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT)
                ];
                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                _state.label = 2;
            case 2:
                _state.trys.push([
                    2,
                    8,
                    9,
                    10
                ]);
                _iterator = walkers[Symbol.iterator]();
                _state.label = 3;
            case 3:
                if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                    3,
                    7
                ];
                walker = _step.value;
                node = void 0;
                _state.label = 4;
            case 4:
                if (!(node = walker.nextNode())) return [
                    3,
                    6
                ];
                if (!node.shadowRoot) {
                    return [
                        3,
                        4
                    ];
                }
                return [
                    4,
                    node.shadowRoot
                ];
            case 5:
                _state.sent();
                walkers.push(document.createTreeWalker(node.shadowRoot, NodeFilter.SHOW_ELEMENT));
                return [
                    3,
                    4
                ];
            case 6:
                _iteratorNormalCompletion = true;
                return [
                    3,
                    3
                ];
            case 7:
                return [
                    3,
                    10
                ];
            case 8:
                err = _state.sent();
                _didIteratorError = true;
                _iteratorError = err;
                return [
                    3,
                    10
                ];
            case 9:
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
            case 10:
                return [
                    2
                ];
        }
    });
} //# sourceMappingURL=util.js.map


}),

}]);