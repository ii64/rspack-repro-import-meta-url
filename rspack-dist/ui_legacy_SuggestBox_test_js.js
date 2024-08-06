"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_SuggestBox_test_js"], {
"./ui/legacy/SuggestBox.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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


var MockSuggestBoxDelegate = /*#__PURE__*/ function() {
    "use strict";
    function MockSuggestBoxDelegate(element) {
        _class_call_check(this, MockSuggestBoxDelegate);
        _define_property(this, "element", void 0);
        _define_property(this, "appliedSuggestions", []);
        _define_property(this, "accceptedSuggestions", []);
        _define_property(this, "lastAppliedSuggestion", void 0);
        this.element = element;
    }
    _create_class(MockSuggestBoxDelegate, [
        {
            key: "applySuggestion",
            value: function applySuggestion(suggestion, isIntermediateSuggestion) {
                if (!suggestion) {
                    throw new Error('All tests should pass a real suggestion to `applySuggestion`');
                }
                this.appliedSuggestions.push({
                    suggestion: suggestion.text,
                    isIntermediateSuggestion: isIntermediateSuggestion
                });
                this.lastAppliedSuggestion = suggestion;
            }
        },
        {
            key: "acceptSuggestion",
            value: function acceptSuggestion() {
                this.accceptedSuggestions.push(this.lastAppliedSuggestion.text);
            }
        },
        {
            key: "ownerElement",
            value: function ownerElement() {
                return this.element;
            }
        }
    ]);
    return MockSuggestBoxDelegate;
}();
var createKeyEvent = function(key) {
    return new KeyboardEvent('keydown', {
        bubbles: true,
        cancelable: true,
        key: key
    });
};
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithLocale)('SuggestBox', function() {
    var delegate;
    var div;
    var suggestBox;
    var anchorBox = new AnchorBox(50, 50, 400, 400);
    beforeEach(function() {
        div = document.createElement('div');
        delegate = new MockSuggestBoxDelegate(div);
        suggestBox = new _legacy_js__WEBPACK_IMPORTED_MODULE_1__.SuggestBox.SuggestBox(delegate);
        // Needed to render the `SuggestBox`.
        _legacy_js__WEBPACK_IMPORTED_MODULE_1__.GlassPane.GlassPane.setContainer(suggestBox.element);
    });
    afterEach(function() {
        suggestBox.hide();
        div.remove();
    });
    it('opens the controller element after updating suggestions', function() {
        suggestBox.updateSuggestions(anchorBox, [
            {
                text: 'First'
            },
            {
                text: 'Second'
            }
        ], true, true, 'e');
        assert.strictEqual(div.getAttribute('aria-expanded'), 'true');
    });
    it('selects the first item when no priority is specified', function() {
        suggestBox.updateSuggestions(anchorBox, [
            {
                text: 'First'
            },
            {
                text: 'Hello'
            },
            {
                text: 'The best suggestion'
            }
        ], true, true, 'e');
        assert.deepStrictEqual(delegate.appliedSuggestions, [
            {
                suggestion: 'First',
                isIntermediateSuggestion: true
            }
        ]);
    });
    it('selects no item when "canShowForSingleItem" is false', function() {
        suggestBox.updateSuggestions(anchorBox, [
            {
                text: 'First'
            },
            {
                text: 'Hello',
                priority: 2
            },
            {
                text: 'The best suggestion',
                priority: 5
            }
        ], false, true, 'e');
        assert.deepStrictEqual(delegate.appliedSuggestions, []);
    });
    it('selects the highest priority item', function() {
        suggestBox.updateSuggestions(anchorBox, [
            {
                text: 'First'
            },
            {
                text: 'Hello',
                priority: 2
            },
            {
                text: 'The best suggestion',
                priority: 5
            }
        ], true, true, 'e');
        assert.deepStrictEqual(delegate.appliedSuggestions, [
            {
                suggestion: 'The best suggestion',
                isIntermediateSuggestion: true
            }
        ]);
    });
    it('allows arrow keys for selection', function() {
        suggestBox.updateSuggestions(anchorBox, [
            {
                text: 'First'
            },
            {
                text: 'Hello',
                priority: 2
            },
            {
                text: 'The best suggestion',
                priority: 5
            }
        ], true, true, 'e');
        suggestBox.keyPressed(createKeyEvent('ArrowUp'));
        suggestBox.keyPressed(createKeyEvent('ArrowUp'));
        suggestBox.keyPressed(createKeyEvent('ArrowUp'));
        suggestBox.keyPressed(createKeyEvent('ArrowDown'));
        suggestBox.keyPressed(createKeyEvent('ArrowDown'));
        assert.deepStrictEqual(delegate.appliedSuggestions, [
            {
                suggestion: 'The best suggestion',
                isIntermediateSuggestion: true
            },
            {
                suggestion: 'Hello',
                isIntermediateSuggestion: true
            },
            {
                suggestion: 'First',
                isIntermediateSuggestion: true
            },
            {
                suggestion: 'The best suggestion',
                isIntermediateSuggestion: true
            },
            {
                suggestion: 'First',
                isIntermediateSuggestion: true
            },
            {
                suggestion: 'Hello',
                isIntermediateSuggestion: true
            }
        ]);
    });
    it('allows using the "Enter" key to accept a suggestions', function() {
        suggestBox.updateSuggestions(anchorBox, [
            {
                text: 'First'
            },
            {
                text: 'Hello',
                priority: 2
            },
            {
                text: 'The best suggestion',
                priority: 5
            }
        ], true, true, 'e');
        suggestBox.keyPressed(createKeyEvent('Enter'));
        assert.deepStrictEqual(delegate.accceptedSuggestions, [
            'The best suggestion'
        ]);
    });
    it('closes the controller element after accepting a suggestion', function() {
        suggestBox.updateSuggestions(anchorBox, [
            {
                text: 'First'
            },
            {
                text: 'Hello',
                priority: 2
            },
            {
                text: 'The best suggestion',
                priority: 5
            }
        ], true, true, 'e');
        suggestBox.keyPressed(createKeyEvent('Enter'));
        assert.strictEqual(div.getAttribute('aria-expanded'), 'false');
    });
}); //# sourceMappingURL=SuggestBox.test.js.map


}),

}]);