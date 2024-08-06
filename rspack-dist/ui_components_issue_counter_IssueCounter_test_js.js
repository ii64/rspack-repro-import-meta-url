"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_issue_counter_IssueCounter_test_js"], {
"./ui/components/issue_counter/IssueCounter.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  extractButton: function() { return extractButton; },
  extractIconGroups: function() { return extractIconGroups; }
});
/* harmony import */var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/issues_manager/issues_manager.js */ "./models/issues_manager/issues_manager.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../testing/MockIssuesManager.js */ "./testing/MockIssuesManager.js");
/* harmony import */var _icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _issue_counter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./issue_counter.js */ "./ui/components/issue_counter/issue_counter.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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






var renderIssueCounter = function(data) {
    var component = new _issue_counter_js__WEBPACK_IMPORTED_MODULE_5__.IssueCounter.IssueCounter();
    component.data = data;
    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
    assert.isNotNull(component.shadowRoot);
    return {
        component: component,
        shadowRoot: component.shadowRoot
    };
};
var extractIconGroups = function(shadowRoot) {
    var iconButton = shadowRoot.querySelector('icon-button');
    assert.instanceOf(iconButton, _icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.IconButton.IconButton);
    var iconButtonShadowRoot = iconButton.shadowRoot;
    assert.exists(iconButtonShadowRoot);
    var icons = iconButtonShadowRoot.querySelectorAll('.status-icon');
    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertElements)(icons, _icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon);
    var labels = iconButtonShadowRoot.querySelectorAll('.icon-button-title');
    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertElements)(labels, HTMLSpanElement);
    assert(icons.length === labels.length, 'Expected icons and labels to appear in pairs');
    var iconGroups = [];
    for(var i = 0; i < icons.length; ++i){
        var labelElement = labels[i];
        var label = window.getComputedStyle(labelElement).display === 'none' ? null : labelElement.textContent;
        iconGroups.push({
            iconData: icons[i].data,
            label: label
        });
    }
    return iconGroups;
};
var extractButton = function(shadowRoot) {
    var iconButton = shadowRoot.querySelector('icon-button');
    assert.instanceOf(iconButton, _icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.IconButton.IconButton);
    var iconButtonShadowRoot = iconButton.shadowRoot;
    assert.exists(iconButtonShadowRoot);
    var button = iconButtonShadowRoot.querySelector('button');
    assert.instanceOf(button, HTMLButtonElement);
    return button;
};
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.describeWithLocale)('IssueCounter', function() {
    describe('with omitting zero-count issue kinds', function() {
        it('renders correctly', function() {
            var issuesManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_3__.MockIssuesManager([]);
            var shadowRoot = renderIssueCounter({
                issuesManager: issuesManager,
                throttlerTimeout: 0
            }).shadowRoot;
            var icons = extractIconGroups(shadowRoot);
            assert.strictEqual(icons.length, 2);
            assert.deepEqual(icons.map(function(c) {
                return c.label;
            }), [
                '2',
                '1'
            ]);
            var iconNames = icons.map(function(c) {
                return 'iconName' in c.iconData ? c.iconData.iconName : undefined;
            });
            assert.deepEqual(iconNames, [
                'issue-cross-filled',
                'issue-exclamation-filled'
            ]);
        });
        it('updates correctly', function() {
            var issuesManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_3__.MockIssuesManager([]);
            var shadowRoot = renderIssueCounter({
                issuesManager: issuesManager,
                throttlerTimeout: 0
            }).shadowRoot;
            {
                var icons = extractIconGroups(shadowRoot);
                assert.strictEqual(icons.length, 2);
                assert.deepEqual(icons.map(function(c) {
                    return c.label;
                }), [
                    '2',
                    '1'
                ]);
                var iconNames = icons.map(function(c) {
                    return 'iconName' in c.iconData ? c.iconData.iconName : undefined;
                });
                assert.deepEqual(iconNames, [
                    'issue-cross-filled',
                    'issue-exclamation-filled'
                ]);
            }
            issuesManager.incrementIssueCountsOfAllKinds();
            {
                var icons1 = extractIconGroups(shadowRoot);
                assert.strictEqual(icons1.length, 3);
                assert.deepEqual(icons1.map(function(c) {
                    return c.label;
                }), [
                    '3',
                    '2',
                    '1'
                ]);
                var iconNames1 = icons1.map(function(c) {
                    return 'iconName' in c.iconData ? c.iconData.iconName : undefined;
                });
                assert.deepEqual(iconNames1, [
                    'issue-cross-filled',
                    'issue-exclamation-filled',
                    'issue-text-filled'
                ]);
            }
        });
        it('updates correctly through setter', function() {
            var issuesManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_3__.MockIssuesManager([]);
            var _renderIssueCounter = renderIssueCounter({
                issuesManager: issuesManager,
                throttlerTimeout: 0
            }), component = _renderIssueCounter.component, shadowRoot = _renderIssueCounter.shadowRoot;
            {
                var icons = extractIconGroups(shadowRoot);
                assert.strictEqual(icons.length, 2);
                assert.deepEqual(icons.map(function(c) {
                    return c.label;
                }), [
                    '2',
                    '1'
                ]);
                var iconNames = icons.map(function(c) {
                    return 'iconName' in c.iconData ? c.iconData.iconName : undefined;
                });
                assert.deepEqual(iconNames, [
                    'issue-cross-filled',
                    'issue-exclamation-filled'
                ]);
            }
            component.data = _object_spread_props(_object_spread({}, component.data), {
                displayMode: "OnlyMostImportant" /* IssueCounter.IssueCounter.DisplayMode.OnlyMostImportant */ 
            });
            {
                var icons1 = extractIconGroups(shadowRoot);
                assert.strictEqual(icons1.length, 1);
                assert.deepEqual(icons1.map(function(c) {
                    return c.label;
                }), [
                    '2'
                ]);
                var iconNames1 = icons1.map(function(c) {
                    return 'iconName' in c.iconData ? c.iconData.iconName : undefined;
                });
                assert.deepEqual(iconNames1, [
                    'issue-cross-filled'
                ]);
            }
        });
        it('Aria label is added correctly', function() {
            var expectedAccessibleName = 'Accessible Name';
            var issuesManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_3__.MockIssuesManager([]);
            var shadowRoot = renderIssueCounter({
                issuesManager: issuesManager,
                throttlerTimeout: 0,
                accessibleName: expectedAccessibleName
            }).shadowRoot;
            var button = extractButton(shadowRoot);
            var accessibleName = button.getAttribute('aria-label');
            assert.strictEqual(accessibleName, expectedAccessibleName);
        });
    });
    describe('without omitting zero count issue kinds', function() {
        it('renders correctly', function() {
            var issuesManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_3__.MockIssuesManager([]);
            var shadowRoot = renderIssueCounter({
                issuesManager: issuesManager,
                displayMode: "ShowAlways" /* IssueCounter.IssueCounter.DisplayMode.ShowAlways */ ,
                throttlerTimeout: 0
            }).shadowRoot;
            var icons = extractIconGroups(shadowRoot);
            assert.strictEqual(icons.length, 3);
            assert.deepEqual(icons.map(function(c) {
                return c.label;
            }), [
                '2',
                '1',
                '0'
            ]);
            var iconNames = icons.map(function(c) {
                return 'iconName' in c.iconData ? c.iconData.iconName : undefined;
            });
            assert.deepEqual(iconNames, [
                'issue-cross-filled',
                'issue-exclamation-filled',
                'issue-text-filled'
            ]);
        });
        it('updates correctly', function() {
            var issuesManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_3__.MockIssuesManager([]);
            var shadowRoot = renderIssueCounter({
                issuesManager: issuesManager,
                displayMode: "ShowAlways" /* IssueCounter.IssueCounter.DisplayMode.ShowAlways */ ,
                throttlerTimeout: 0
            }).shadowRoot;
            {
                var icons = extractIconGroups(shadowRoot);
                assert.strictEqual(icons.length, 3);
                assert.deepEqual(icons.map(function(c) {
                    return c.label;
                }), [
                    '2',
                    '1',
                    '0'
                ]);
                var iconNames = icons.map(function(c) {
                    return 'iconName' in c.iconData ? c.iconData.iconName : undefined;
                });
                assert.deepEqual(iconNames, [
                    'issue-cross-filled',
                    'issue-exclamation-filled',
                    'issue-text-filled'
                ]);
            }
            issuesManager.incrementIssueCountsOfAllKinds();
            {
                var icons1 = extractIconGroups(shadowRoot);
                assert.strictEqual(icons1.length, 3);
                assert.deepEqual(icons1.map(function(c) {
                    return c.label;
                }), [
                    '3',
                    '2',
                    '1'
                ]);
                var iconNames1 = icons1.map(function(c) {
                    return 'iconName' in c.iconData ? c.iconData.iconName : undefined;
                });
                assert.deepEqual(iconNames1, [
                    'issue-cross-filled',
                    'issue-exclamation-filled',
                    'issue-text-filled'
                ]);
            }
        });
    });
    describe('in compact mode', function() {
        it('renders correctly', function() {
            var issuesManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_3__.MockIssuesManager([]);
            var shadowRoot = renderIssueCounter({
                issuesManager: issuesManager,
                throttlerTimeout: 0,
                compact: true
            }).shadowRoot;
            var icons = extractIconGroups(shadowRoot);
            assert.strictEqual(icons.length, 1);
            assert.deepEqual(icons.map(function(c) {
                return c.label;
            }), [
                null
            ]);
            var iconNames = icons.map(function(c) {
                return 'iconName' in c.iconData ? c.iconData.iconName : undefined;
            });
            assert.deepEqual(iconNames, [
                'issue-cross-filled'
            ]);
        });
        it('renders correctly with only improvement issues', function() {
            var issuesManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_3__.MockIssuesManager([]);
            issuesManager.setNumberOfIssues(new Map([
                [
                    "Improvement" /* IssuesManager.Issue.IssueKind.Improvement */ ,
                    3
                ],
                [
                    "BreakingChange" /* IssuesManager.Issue.IssueKind.BreakingChange */ ,
                    0
                ],
                [
                    "PageError" /* IssuesManager.Issue.IssueKind.PageError */ ,
                    0
                ]
            ]));
            var shadowRoot = renderIssueCounter({
                issuesManager: issuesManager,
                throttlerTimeout: 0,
                compact: true
            }).shadowRoot;
            var icons = extractIconGroups(shadowRoot);
            assert.strictEqual(icons.length, 1);
            assert.deepEqual(icons.map(function(c) {
                return c.label;
            }), [
                null
            ]);
            var iconNames = icons.map(function(c) {
                return 'iconName' in c.iconData ? c.iconData.iconName : undefined;
            });
            assert.deepEqual(iconNames, [
                'issue-text-filled'
            ]);
        });
    });
});
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.describeWithLocale)('getIssueCountsEnumeration', function() {
    it('formats issue counts correctly', function() {
        var issuesManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_3__.MockIssuesManager([]);
        var string = _issue_counter_js__WEBPACK_IMPORTED_MODULE_5__.IssueCounter.getIssueCountsEnumeration(issuesManager);
        assert.strictEqual(string, '2 page errors, 1 breaking change');
    });
    it('formats issue counts correctly when displaying zero entries', function() {
        var issuesManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_3__.MockIssuesManager([]);
        var string = _issue_counter_js__WEBPACK_IMPORTED_MODULE_5__.IssueCounter.getIssueCountsEnumeration(issuesManager, false);
        assert.strictEqual(string, '2 page errors, 1 breaking change, 0 possible improvements');
    });
}); //# sourceMappingURL=IssueCounter.test.js.map


}),

}]);