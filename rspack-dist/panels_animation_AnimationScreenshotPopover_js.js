"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_animation_AnimationScreenshotPopover_js"], {
"./panels/animation/AnimationScreenshotPopover.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AnimationScreenshotPopover: function() { return AnimationScreenshotPopover; }
});
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _animationScreenshotPopover_css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animationScreenshotPopover.css.js */ "./panels/animation/animationScreenshotPopover.css.js");
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) {
        return descriptor.get.call(receiver);
    }
    return descriptor.value;
}
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) {
        descriptor.set.call(receiver, value);
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
}
function _class_apply_descriptor_update(receiver, descriptor) {
    if (descriptor.set) {
        if (!descriptor.get) {
            throw new TypeError("attempted to read set only private field");
        }
        if (!("__destrWrapper" in descriptor)) {
            descriptor.__destrWrapper = {
                set value (v){
                    descriptor.set.call(receiver, v);
                },
                get value () {
                    return descriptor.get.call(receiver);
                }
            };
        }
        return descriptor.__destrWrapper;
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        return descriptor;
    }
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
}
function _class_private_field_get(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
    return _class_apply_descriptor_get(receiver, descriptor);
}
function _class_private_field_init(obj, privateMap, value) {
    _check_private_redeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
    _class_apply_descriptor_set(receiver, descriptor, value);
    return value;
}
function _class_private_field_update(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "update");
    return _class_apply_descriptor_update(receiver, descriptor);
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


var _frames = /*#__PURE__*/ new WeakMap(), _rafId = /*#__PURE__*/ new WeakMap(), _currentFrame = /*#__PURE__*/ new WeakMap(), _progressBar = /*#__PURE__*/ new WeakMap(), _showFrame = /*#__PURE__*/ new WeakMap(), _endDelay = /*#__PURE__*/ new WeakMap();
var AnimationScreenshotPopover = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(AnimationScreenshotPopover, _UI_Widget_VBox);
    var _super = _create_super(AnimationScreenshotPopover);
    function AnimationScreenshotPopover(images) {
        _class_call_check(this, AnimationScreenshotPopover);
        var _this;
        _this = _super.call(this, true);
        _class_private_field_init(_assert_this_initialized(_this), _frames, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _rafId, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _currentFrame, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _progressBar, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _showFrame, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _endDelay, {
            writable: true,
            value: void 0
        });
        console.assert(images.length > 0);
        _this.contentElement.classList.add('animation-screenshot-popover');
        _class_private_field_set(_assert_this_initialized(_this), _frames, images);
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = images[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var image = _step.value;
                _this.contentElement.appendChild(image);
                image.style.display = 'none';
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
        _class_private_field_set(_assert_this_initialized(_this), _rafId, 0);
        _class_private_field_set(_assert_this_initialized(_this), _currentFrame, 0);
        _class_private_field_get(_this, _frames)[0].style.display = 'block';
        _class_private_field_set(_assert_this_initialized(_this), _progressBar, _this.contentElement.createChild('div', 'animation-progress'));
        return _this;
    }
    _create_class(AnimationScreenshotPopover, [
        {
            key: "wasShown",
            value: function wasShown() {
                _class_private_field_set(this, _rafId, this.contentElement.window().requestAnimationFrame(this.changeFrame.bind(this)));
                this.registerCSSFiles([
                    _animationScreenshotPopover_css_js__WEBPACK_IMPORTED_MODULE_1__["default"]
                ]);
            }
        },
        {
            key: "willHide",
            value: function willHide() {
                this.contentElement.window().cancelAnimationFrame(_class_private_field_get(this, _rafId));
                _class_private_field_set(this, _endDelay, undefined);
            }
        },
        {
            key: "changeFrame",
            value: function changeFrame() {
                _class_private_field_set(this, _rafId, this.contentElement.window().requestAnimationFrame(this.changeFrame.bind(this)));
                if (_class_private_field_get(this, _endDelay)) {
                    _class_private_field_update(this, _endDelay).value--;
                    return;
                }
                _class_private_field_set(this, _showFrame, !_class_private_field_get(this, _showFrame));
                if (!_class_private_field_get(this, _showFrame)) {
                    return;
                }
                var numFrames = _class_private_field_get(this, _frames).length;
                _class_private_field_get(this, _frames)[_class_private_field_get(this, _currentFrame) % numFrames].style.display = 'none';
                _class_private_field_update(this, _currentFrame).value++;
                _class_private_field_get(this, _frames)[_class_private_field_get(this, _currentFrame) % numFrames].style.display = 'block';
                if (_class_private_field_get(this, _currentFrame) % numFrames === numFrames - 1) {
                    _class_private_field_set(this, _endDelay, 50);
                }
                _class_private_field_get(this, _progressBar).style.width = (_class_private_field_get(this, _currentFrame) % numFrames + 1) / numFrames * 100 + '%';
            }
        }
    ]);
    return AnimationScreenshotPopover;
} //# sourceMappingURL=AnimationScreenshotPopover.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.Widget.VBox);


}),
"./panels/animation/animationScreenshotPopover.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright (c) 2015 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\nimg {\n  max-height: 300px;\n  border-radius: 2px;\n}\n\n.animation-progress {\n  position: absolute;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background: var(--legacy-selection-bg-color);\n}\n\n/*# sourceURL=animationScreenshotPopover.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);