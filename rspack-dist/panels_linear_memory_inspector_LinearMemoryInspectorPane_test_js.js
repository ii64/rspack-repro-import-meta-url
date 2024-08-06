"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_linear_memory_inspector_LinearMemoryInspectorPane_test_js"], {
"./panels/linear_memory_inspector/LinearMemoryInspectorPane.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _linear_memory_inspector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linear_memory_inspector.js */ "./panels/linear_memory_inspector/linear_memory_inspector.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
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


function createArray() {
    var array = [];
    for(var i = 0; i < 100; ++i){
        array.push(i);
    }
    return new Uint8Array(array);
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithEnvironment)('LinearMemoryInspectorPane', function() {
    var Uint8Wrapper = /*#__PURE__*/ function() {
        "use strict";
        function Uint8Wrapper(array) {
            _class_call_check(this, Uint8Wrapper);
            _define_property(this, "array", void 0);
            this.array = array;
        }
        _create_class(Uint8Wrapper, [
            {
                key: "getRange",
                value: function getRange(start, end) {
                    return Promise.resolve(this.array.slice(start, end));
                }
            },
            {
                key: "length",
                value: function length() {
                    return this.array.length;
                }
            }
        ]);
        return Uint8Wrapper;
    }();
    it('can be created', function() {
        var instance = _linear_memory_inspector_js__WEBPACK_IMPORTED_MODULE_1__.LinearMemoryInspectorPane.LinearMemoryInspectorPane.instance();
        var arrayWrapper = new Uint8Wrapper(createArray());
        var scriptId = 'script-id';
        var title = 'Test Title';
        instance.create(scriptId, title, arrayWrapper, 10);
        var tabbedPane = instance.contentElement.querySelector('.tabbed-pane');
        assert.exists(tabbedPane);
        var inspector = tabbedPane.querySelector('devtools-linear-memory-inspector-inspector');
        assert.notInstanceOf(inspector, HTMLSpanElement);
    });
}); //# sourceMappingURL=LinearMemoryInspectorPane.test.js.map


}),
"./panels/linear_memory_inspector/linear_memory_inspector.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  LinearMemoryInspectorController: function() { return /* reexport module object */ _LinearMemoryInspectorController_js__WEBPACK_IMPORTED_MODULE_0__; },
  LinearMemoryInspectorPane: function() { return /* reexport module object */ _LinearMemoryInspectorPane_js__WEBPACK_IMPORTED_MODULE_1__; }
});
/* harmony import */var _LinearMemoryInspectorController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinearMemoryInspectorController.js */ "./panels/linear_memory_inspector/LinearMemoryInspectorController.js");
/* harmony import */var _LinearMemoryInspectorPane_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LinearMemoryInspectorPane.js */ "./panels/linear_memory_inspector/LinearMemoryInspectorPane.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


 //# sourceMappingURL=linear_memory_inspector.js.map


}),

}]);