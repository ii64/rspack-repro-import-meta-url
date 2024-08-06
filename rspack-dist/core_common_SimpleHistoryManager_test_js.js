"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_common_SimpleHistoryManager_test_js"], {
"./core/common/SimpleHistoryManager.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./core/common/common.js");
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

var SimpleHistoryManager = _common_js__WEBPACK_IMPORTED_MODULE_0__.SimpleHistoryManager.SimpleHistoryManager;
var Entry = /*#__PURE__*/ function() {
    "use strict";
    function Entry(callback) {
        _class_call_check(this, Entry);
        _define_property(this, "callback", void 0);
        this.callback = callback;
    }
    _create_class(Entry, [
        {
            key: "valid",
            value: function valid() {
                return true;
            }
        },
        {
            key: "reveal",
            value: function reveal() {
                this.callback();
            }
        }
    ]);
    return Entry;
}();
describe('SimpleHistoryManager', function() {
    var setUpHistory = function setUpHistory(numberOfEntries, revealedElements) {
        var _loop = function(i) {
            history.push(new Entry(function() {
                revealedElements.push(i);
            }));
        };
        var history = new SimpleHistoryManager(numberOfEntries);
        for(var i = 0; i < numberOfEntries; ++i)_loop(i);
        assert.isFalse(history.empty());
        return history;
    };
    it('correctly reflects if it can roll back', function() {
        var numberOfEntries = 10;
        var revealedElements = [];
        var history = setUpHistory(numberOfEntries, revealedElements);
        while(history.canRollback()){
            history.rollback();
        }
        var expectedHistoryEntries = [
            8,
            7,
            6,
            5,
            4,
            3,
            2,
            1,
            0
        ];
        assert.deepEqual(revealedElements, expectedHistoryEntries);
    });
    it('correctly reflects if it can roll over', function() {
        var numberOfEntries = 10;
        var revealedElements = [];
        var history = setUpHistory(numberOfEntries, revealedElements);
        for(var i = 0; i < numberOfEntries / 2; ++i){
            history.rollback();
        }
        while(history.canRollover()){
            history.rollover();
        }
        var expectedHistoryEntries = [
            8,
            7,
            6,
            5,
            4,
            5,
            6,
            7,
            8,
            9
        ];
        assert.deepEqual(revealedElements, expectedHistoryEntries);
    });
}); //# sourceMappingURL=SimpleHistoryManager.test.js.map


}),

}]);