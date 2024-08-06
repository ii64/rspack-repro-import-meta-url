"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_elements_ImagePreviewPopover_js"], {
"./panels/elements/ImagePreviewPopover.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ImagePreviewPopover: function() { return ImagePreviewPopover; }
});
/* harmony import */var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
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
 * ImagePreviewPopover sets listeners on the container element to display
 * an image preview if needed. The image URL comes from the event (mouseover) target
 * in a propery identified by HrefSymbol. To enable preview for any child element
 * set the property HrefSymbol.
 */ var ImagePreviewPopover = /*#__PURE__*/ function() {
    "use strict";
    function ImagePreviewPopover(container, getLinkElement, getDOMNode) {
        _class_call_check(this, ImagePreviewPopover);
        _define_property(this, "getLinkElement", void 0);
        _define_property(this, "getDOMNode", void 0);
        _define_property(this, "popover", void 0);
        this.getLinkElement = getLinkElement;
        this.getDOMNode = getDOMNode;
        this.popover = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.PopoverHelper.PopoverHelper(container, this.handleRequest.bind(this), 'elements.image-preview');
        this.popover.setHasPadding(true);
        this.popover.setTimeout(0, 100);
    }
    _create_class(ImagePreviewPopover, [
        {
            key: "handleRequest",
            value: function handleRequest(event) {
                var link = this.getLinkElement(event);
                if (!link) {
                    return null;
                }
                var href = elementToURLMap.get(link);
                if (!href) {
                    return null;
                }
                var _this = this;
                return {
                    box: link.boxInWindow(),
                    hide: undefined,
                    show: function() {
                        var _ref = _async_to_generator(function(popover) {
                            var node, precomputedFeatures, preview;
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        node = _this.getDOMNode(link);
                                        if (!node) {
                                            return [
                                                2,
                                                false
                                            ];
                                        }
                                        return [
                                            4,
                                            _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.ImagePreview.ImagePreview.loadDimensionsForNode(node)
                                        ];
                                    case 1:
                                        precomputedFeatures = _state.sent();
                                        return [
                                            4,
                                            _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.ImagePreview.ImagePreview.build(node.domModel().target(), href, true, {
                                                imageAltText: undefined,
                                                precomputedFeatures: precomputedFeatures
                                            })
                                        ];
                                    case 2:
                                        preview = _state.sent();
                                        if (preview) {
                                            popover.contentElement.appendChild(preview);
                                        }
                                        return [
                                            2,
                                            Boolean(preview)
                                        ];
                                }
                            });
                        });
                        return function(popover) {
                            return _ref.apply(this, arguments);
                        };
                    }()
                };
            }
        },
        {
            key: "hide",
            value: function hide() {
                this.popover.hidePopover();
            }
        }
    ], [
        {
            key: "setImageUrl",
            value: function setImageUrl(element, url) {
                elementToURLMap.set(element, url);
                return element;
            }
        },
        {
            key: "getImageURL",
            value: function getImageURL(element) {
                return elementToURLMap.get(element);
            }
        }
    ]);
    return ImagePreviewPopover;
}();
var elementToURLMap = new WeakMap(); //# sourceMappingURL=ImagePreviewPopover.js.map


}),

}]);