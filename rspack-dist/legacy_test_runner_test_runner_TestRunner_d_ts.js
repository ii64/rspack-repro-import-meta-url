"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["legacy_test_runner_test_runner_TestRunner_d_ts"], {
"./legacy_test_runner/test_runner/TestRunner.d.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  MockSetting: function() { return MockSetting; },
  StringOutputStream: function() { return StringOutputStream; }
});
/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */ /**
 * @return {boolean}
 */ function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
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
var StringOutputStream = function StringOutputStream() {
    "use strict";
    _class_call_check(this, StringOutputStream);
    _define_property(this, "callback", void 0);
    _define_property(this, "buffer", void 0);
};
/**
 * @template V
 */ var MockSetting = function MockSetting() {
    "use strict";
    _class_call_check(this, MockSetting);
    _define_property(this, "value", void 0);
};


}),

}]);