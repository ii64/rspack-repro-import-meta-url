"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_ListWidget_test_js"], {
"./ui/legacy/ListWidget.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}



(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithLocale)('ListWidget', function() {
    describe('Editor', function() {
        it('Cancel button triggers on mouse click event', function() {
            var cancel = function cancel() {
                cancelled = true;
            };
            var editor = new _legacy_js__WEBPACK_IMPORTED_MODULE_2__.ListWidget.Editor();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(editor.element);
            var cancelled = false;
            editor.beginEdit('test', 0, 'Commit', function() {}, cancel);
            var buttons = editor.element.querySelectorAll('devtools-button');
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = buttons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var button = _step.value;
                    if (button.innerHTML === 'Cancel') {
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(button);
                        break;
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
            assert.isTrue(cancelled);
        });
        it('Commit button triggers on mouse click event', function() {
            var commit = function commit() {
                committed = true;
            };
            var editor = new _legacy_js__WEBPACK_IMPORTED_MODULE_2__.ListWidget.Editor();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(editor.element);
            var committed = false;
            editor.beginEdit('test', 0, 'Commit', commit, function() {});
            var buttons = editor.element.querySelectorAll('devtools-button');
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = buttons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var button = _step.value;
                    if (button.innerHTML === 'Commit') {
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(button);
                        break;
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
            assert.isTrue(committed);
        });
    });
    it('adds a new item even when the empty string', function() {
        var MockEditor = /*#__PURE__*/ function(_UI_ListWidget_Editor) {
            "use strict";
            _inherits(MockEditor, _UI_ListWidget_Editor);
            var _super = _create_super(MockEditor);
            function MockEditor() {
                _class_call_check(this, MockEditor);
                return _super.apply(this, arguments);
            }
            _create_class(MockEditor, [
                {
                    key: "beginEdit",
                    value: function beginEdit(item, index, commitButtonTitle, commit, cancel) {
                        _get(_get_prototype_of(MockEditor.prototype), "beginEdit", this).call(this, item, index, commitButtonTitle, commit, cancel);
                        commit();
                    }
                }
            ]);
            return MockEditor;
        }(_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ListWidget.Editor);
        var MockDelegate = /*#__PURE__*/ function() {
            "use strict";
            function MockDelegate() {
                _class_call_check(this, MockDelegate);
                _define_property(this, "committed", false);
            }
            _create_class(MockDelegate, [
                {
                    key: "beginEdit",
                    value: function beginEdit(_item) {
                        return new MockEditor();
                    }
                },
                {
                    key: "commitEdit",
                    value: function commitEdit(_item, _editor, _isNew) {
                        this.committed = true;
                    }
                },
                {
                    key: "removeItemRequested",
                    value: function removeItemRequested(_item, _index) {}
                },
                {
                    key: "renderItem",
                    value: function renderItem(_item, _editable) {
                        return document.createElement('span');
                    }
                }
            ]);
            return MockDelegate;
        }();
        var delegate = new MockDelegate();
        var list = new _legacy_js__WEBPACK_IMPORTED_MODULE_2__.ListWidget.ListWidget(delegate);
        list.markAsRoot();
        list.show((0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(document.createElement('main')));
        list.addNewItem(0, '');
        assert.isTrue(delegate.committed);
    });
}); //# sourceMappingURL=ListWidget.test.js.map


}),

}]);