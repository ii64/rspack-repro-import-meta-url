"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["legacy_test_runner_axe_core_test_runner_axe_core_test_runner_js"], {
"./legacy_test_runner/axe_core_test_runner/axe_core_test_runner.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AxeCoreTestRunner: function() { return AxeCoreTestRunner; }
});
/* harmony import */var _third_party_axe_core_axe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../third_party/axe-core/axe.js */ "./third_party/axe-core/axe.js");
/* harmony import */var _third_party_axe_core_axe_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_third_party_axe_core_axe_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../test_runner/test_runner.js */ "./legacy_test_runner/test_runner/test_runner.js");
/* harmony import */var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_1__);
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
 */ // These rules are disabled for one or more of the following reasons:
// * The rule is slow enough to cause flaky timeouts.
// * The rule has known issues.
// * The rule is low value so we disable it to improve overall test time.
// For performance issues see:
//
var DISABLED_RULES = {
    // Slow rules
    // https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#section-4-performance
    // (more performance investigation) https://github.com/dequelabs/axe-core/pull/1503
    'aria-hidden-focus': {
        enabled: false
    },
    'aria-input-field-name': {
        enabled: false
    },
    'aria-toggle-field-name': {
        enabled: false
    },
    'color-contrast': {
        enabled: false
    },
    'image-redundant-alt': {
        enabled: false
    },
    // Rules with issues
    // https://github.com/dequelabs/axe-core/issues/1444
    'aria-required-children': {
        enabled: false
    },
    // Low value rules
    'aria-allowed-role': {
        enabled: false
    },
    'aria-dpub-role-fallback': {
        enabled: false
    },
    'audio-caption': {
        enabled: false
    },
    'blink': {
        enabled: false
    },
    'form-field-multiple-labels': {
        enabled: false
    },
    'frame-tested': {
        enabled: false
    },
    'html-has-lang': {
        enabled: false
    },
    'html-lang-valid': {
        enabled: false
    },
    'html-xml-lang-mismatch': {
        enabled: false
    },
    'landmark-banner-is-top-level': {
        enabled: false
    },
    'landmark-complementary-is-top-level': {
        enabled: false
    },
    'landmark-contentinfo-is-top-level': {
        enabled: false
    },
    'landmark-main-is-top-level': {
        enabled: false
    },
    'landmark-no-duplicate-banner': {
        enabled: false
    },
    'landmark-no-duplicate-contentinfo': {
        enabled: false
    },
    'landmark-one-main': {
        enabled: false
    },
    'landmark-unique': {
        enabled: false
    },
    'marquee': {
        enabled: false
    },
    'meta-refresh': {
        enabled: false
    },
    'meta-viewport': {
        enabled: false
    },
    'meta-viewport-large': {
        enabled: false
    },
    'object-alt': {
        enabled: false
    },
    'page-has-heading-one': {
        enabled: false
    },
    'scrollable-region-focusable': {
        enabled: false
    },
    'video-caption': {
        enabled: false
    },
    'video-description': {
        enabled: false
    },
    'valid-lang': {
        enabled: false
    }
};
var DEFAULT_CONFIG = {
    checks: [
        // This is a workaround for a bug in our version of axe-core
        // which does not support aria-placeholder.
        // Any attribute included in the options array will be
        // ignored by the 'aria-valid-attr' rule.
        // This should be removed after axe-core is updated.
        // See: https://github.com/dequelabs/axe-core/issues/1457
        {
            id: 'aria-valid-attr',
            options: [
                'aria-placeholder',
                'aria-description'
            ]
        }
    ],
    runOnly: {
        type: 'tags',
        values: {
            include: [
                'wcag2a',
                'best-practice'
            ],
            exclude: [
                'experimental'
            ]
        }
    }
};
var AxeCoreTestRunner = {};
AxeCoreTestRunner.processAxeResult = function(violations) {
    var result = violations.map(function(rule) {
        return {
            ruleDescription: rule.description,
            helpUrl: rule.helpUrl,
            ruleId: rule.id,
            impact: rule.impact,
            failedNodes: AxeCoreTestRunner.processAxeResultNodesArray(rule.nodes)
        };
    });
    return JSON.stringify(result, undefined, 2);
};
AxeCoreTestRunner.processAxeResultNodesArray = function(nodes) {
    var list = nodes.map(function(node) {
        return {
            target: node.target,
            html: node.html,
            failureSummary: node.failureSummary
        };
    });
    return list;
};
AxeCoreTestRunner.runValidation = function() {
    var _ref = _async_to_generator(function(element, rules, config) {
        var results, violations, e;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    axe.configure(_object_spread({}, DEFAULT_CONFIG, config));
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
                        axe.run(element, {
                            rules: _object_spread({}, DISABLED_RULES, rules)
                        })
                    ];
                case 2:
                    results = _state.sent();
                    violations = AxeCoreTestRunner.processAxeResult(results.violations);
                    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_1__.TestRunner.addResult("aXe violations: ".concat(violations, "\n"));
                    return [
                        3,
                        4
                    ];
                case 3:
                    e = _state.sent();
                    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_1__.TestRunner.addResult("aXe threw an error: '".concat(e, "'"));
                    return [
                        3,
                        4
                    ];
                case 4:
                    return [
                        2
                    ];
            }
        });
    });
    return function(element, rules, config) {
        return _ref.apply(this, arguments);
    };
}();


}),

}]);