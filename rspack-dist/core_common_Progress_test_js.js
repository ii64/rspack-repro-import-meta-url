"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_common_Progress_test_js"], {
"./core/common/Progress.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./core/common/common.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
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

var CompositeProgress = _common_js__WEBPACK_IMPORTED_MODULE_0__.Progress.CompositeProgress;
var ProgressProxy = _common_js__WEBPACK_IMPORTED_MODULE_0__.Progress.ProgressProxy;
var MockProgressIndicator = /*#__PURE__*/ function() {
    "use strict";
    function MockProgressIndicator() {
        _class_call_check(this, MockProgressIndicator);
        _define_property(this, "isCanceledInternal", false);
        _define_property(this, "totalWork", 0);
        _define_property(this, "workCompleted", 0);
        _define_property(this, "title", void 0);
    }
    _create_class(MockProgressIndicator, [
        {
            key: "getTitle",
            get: function get() {
                return this.title;
            }
        },
        {
            key: "getWorkCompleted",
            get: function get() {
                return this.workCompleted;
            }
        },
        {
            key: "getTotalWork",
            get: function get() {
                return this.totalWork;
            }
        },
        {
            key: "isCanceled",
            value: function isCanceled() {
                return this.isCanceledInternal;
            }
        },
        {
            key: "done",
            value: function done() {
                return 'progress indicator: done';
            }
        },
        {
            key: "setTotalWork",
            value: function setTotalWork(totalWork) {
                this.totalWork = totalWork;
            }
        },
        {
            key: "setWorked",
            value: function setWorked(worked, title) {
                this.workCompleted = worked;
                if (typeof title !== 'undefined') {
                    this.title = title;
                }
            }
        },
        {
            key: "setTitle",
            value: function setTitle(title) {
                this.title = title;
            }
        },
        {
            key: "incrementWorked",
            value: function incrementWorked(worked) {
                this.totalWork += worked;
            }
        },
        {
            // Test methods.
            key: "cancel",
            value: function cancel() {
                this.isCanceledInternal = true;
            }
        }
    ]);
    return MockProgressIndicator;
}();
describe('Composite Progress Bar', function() {
    it('works correctly with a single subprogress', function() {
        var indicator = new MockProgressIndicator();
        var composite = new CompositeProgress(indicator);
        var subProgress = composite.createSubProgress();
        assert.strictEqual(indicator.getTitle, undefined);
        assert.strictEqual(indicator.getWorkCompleted, 0);
        assert.strictEqual(indicator.getTotalWork, 1);
        subProgress.setTitle('cuckooing');
        subProgress.setWorked(10);
        assert.strictEqual(indicator.getTitle, 'cuckooing');
        assert.strictEqual(indicator.getWorkCompleted, 0);
        assert.strictEqual(indicator.getTotalWork, 1);
        subProgress.setTotalWork(100);
        assert.strictEqual(indicator.getTitle, 'cuckooing');
        assert.strictEqual(indicator.getWorkCompleted, 0.1);
        assert.strictEqual(indicator.getTotalWork, 1);
        subProgress.setWorked(20, 'meowing');
        assert.strictEqual(indicator.getTitle, 'meowing');
        assert.strictEqual(indicator.getWorkCompleted, 0.2);
        assert.strictEqual(indicator.getTotalWork, 1);
        subProgress.done();
        assert.strictEqual(indicator.getTitle, 'meowing');
        assert.strictEqual(indicator.getWorkCompleted, 1);
        assert.strictEqual(indicator.getTotalWork, 1);
    });
    it('works correctly with multiple subprogresses', function() {
        var indicator = new MockProgressIndicator();
        var composite = new CompositeProgress(indicator);
        // Creates a sub progress with the default weight of 1
        var subProgress1 = composite.createSubProgress();
        // Creates a sub progress with the weight of 3
        var subProgress2 = composite.createSubProgress(3);
        assert.strictEqual(indicator.getTitle, undefined);
        assert.strictEqual(indicator.getWorkCompleted, 0);
        assert.strictEqual(indicator.getTotalWork, 1);
        subProgress1.setTitle('cuckooing');
        subProgress1.setTotalWork(100);
        subProgress1.setWorked(20);
        assert.strictEqual(indicator.getTitle, 'cuckooing');
        assert.strictEqual(indicator.getWorkCompleted, 0.05);
        assert.strictEqual(indicator.getTotalWork, 1);
        subProgress2.setWorked(10);
        assert.strictEqual(indicator.getTitle, 'cuckooing');
        assert.strictEqual(indicator.getWorkCompleted, 0.05);
        assert.strictEqual(indicator.getTotalWork, 1);
        subProgress2.setTotalWork(10);
        subProgress2.setWorked(3, 'barking');
        assert.strictEqual(indicator.getTitle, 'barking');
        assert.strictEqual(indicator.getWorkCompleted, 0.275);
        assert.strictEqual(indicator.getTotalWork, 1);
        subProgress1.setWorked(50, 'meowing');
        subProgress2.setWorked(5);
        assert.strictEqual(indicator.getTitle, 'meowing');
        assert.strictEqual(indicator.getWorkCompleted, 0.5);
        assert.strictEqual(indicator.getTotalWork, 1);
        subProgress2.done();
        assert.strictEqual(indicator.getTitle, 'meowing');
        assert.strictEqual(indicator.getWorkCompleted, 0.875);
        assert.strictEqual(indicator.getTotalWork, 1);
        subProgress1.done();
        assert.strictEqual(indicator.getTitle, 'meowing');
        assert.strictEqual(indicator.getWorkCompleted, 1);
        assert.strictEqual(indicator.getTotalWork, 1);
    });
    it('returns the correct cancellation status', function() {
        var indicator = new MockProgressIndicator();
        var composite = new CompositeProgress(indicator);
        var subProgress = composite.createSubProgress();
        assert.isFalse(subProgress.isCanceled(), 'progress should not be canceled');
        indicator.cancel();
        assert.isTrue(subProgress.isCanceled(), 'progress should be canceled');
    });
    it('works correctly with nested subprogresses', function() {
        var indicator = new MockProgressIndicator();
        var composite0 = new CompositeProgress(indicator);
        var subProgress01 = composite0.createSubProgress();
        var composite1 = new CompositeProgress(subProgress01);
        var subProgress11 = composite1.createSubProgress(10); // Weight should have no effect
        assert.strictEqual(indicator.getTitle, undefined);
        assert.strictEqual(indicator.getWorkCompleted, 0);
        assert.strictEqual(indicator.getTotalWork, 1);
        subProgress11.setWorked(10);
        assert.strictEqual(indicator.getTitle, undefined);
        assert.strictEqual(indicator.getWorkCompleted, 0);
        assert.strictEqual(indicator.getTotalWork, 1);
        subProgress11.setTotalWork(100);
        assert.strictEqual(indicator.getTitle, undefined);
        assert.strictEqual(indicator.getWorkCompleted, 0.1);
        assert.strictEqual(indicator.getTotalWork, 1);
        subProgress11.setWorked(50, 'meowing');
        assert.strictEqual(indicator.getTitle, 'meowing');
        assert.strictEqual(indicator.getWorkCompleted, 0.5);
        assert.strictEqual(indicator.getTotalWork, 1);
        assert.isFalse(subProgress11.isCanceled(), 'progress should not be canceled');
        indicator.cancel();
        assert.isTrue(subProgress11.isCanceled(), 'progress should be canceled');
        subProgress11.done();
        assert.strictEqual(indicator.getTitle, 'meowing');
        assert.strictEqual(indicator.getWorkCompleted, 1);
        assert.strictEqual(indicator.getTotalWork, 1);
    });
    it('can set sub progress to be worked', function() {
        var indicator = new MockProgressIndicator();
        var composite = new CompositeProgress(indicator);
        var subProgress = composite.createSubProgress();
        assert.strictEqual(indicator.getTitle, undefined);
        assert.strictEqual(indicator.getWorkCompleted, 0);
        assert.strictEqual(indicator.getTotalWork, 1);
        assert.strictEqual(subProgress.getWorked(), 0);
        subProgress.incrementWorked();
        assert.strictEqual(indicator.getTitle, undefined);
        assert.strictEqual(indicator.getWorkCompleted, 0);
        assert.strictEqual(indicator.getTotalWork, 1);
        assert.strictEqual(subProgress.getWorked(), 1);
    });
    it('returns the correct cancellation status for a progress proxy with no delegate', function() {
        var progressProxy = new ProgressProxy();
        assert.isFalse(progressProxy.isCanceled());
    });
    it('returns the correct cancellation status for a progress proxy with delegate', function() {
        var indicator = new MockProgressIndicator();
        var composite = new CompositeProgress(indicator);
        var subProgress = composite.createSubProgress();
        var progressProxy = new ProgressProxy(subProgress);
        assert.isFalse(progressProxy.isCanceled(), 'progress should not be canceled');
        indicator.cancel();
        assert.isTrue(progressProxy.isCanceled(), 'progress should be canceled');
    });
    it('returns the correct title for a progress proxy with no delegate', function() {
        var indicator = new MockProgressIndicator();
        var progressProxy = new ProgressProxy();
        progressProxy.setTitle('test proxy');
        assert.isUndefined(indicator.getTitle);
    });
    it('returns the correct title for a progress proxy with delegate', function() {
        var indicator = new MockProgressIndicator();
        var composite = new CompositeProgress(indicator);
        var subProgress = composite.createSubProgress();
        var progressProxy = new ProgressProxy(subProgress);
        progressProxy.setTitle('test proxy');
        assert.strictEqual(indicator.getTitle, 'test proxy');
    });
    it('marks a progress proxy as done', function() {
        var indicator = new MockProgressIndicator();
        var composite = new CompositeProgress(indicator);
        var subProgress = composite.createSubProgress();
        var progressProxy = new ProgressProxy(subProgress);
        progressProxy.setTotalWork(1);
        progressProxy.done();
        assert.strictEqual(subProgress.getWorked(), 1);
    });
    it('able to set worked with title for a progress proxy', function() {
        var indicator = new MockProgressIndicator();
        var composite = new CompositeProgress(indicator);
        var subProgress = composite.createSubProgress();
        var progressProxy = new ProgressProxy(subProgress);
        progressProxy.setWorked(1, 'test proxy');
        assert.strictEqual(subProgress.getWorked(), 1);
        assert.strictEqual(indicator.getTitle, 'test proxy');
    });
    it('able to set worked without title for a progress proxy', function() {
        var indicator = new MockProgressIndicator();
        var composite = new CompositeProgress(indicator);
        var subProgress = composite.createSubProgress();
        var progressProxy = new ProgressProxy(subProgress);
        progressProxy.incrementWorked(1);
        assert.strictEqual(subProgress.getWorked(), 1);
    });
}); //# sourceMappingURL=Progress.test.js.map


}),

}]);