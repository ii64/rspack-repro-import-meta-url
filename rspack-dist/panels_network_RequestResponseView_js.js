"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_network_RequestResponseView_js"], {
"./panels/network/RequestResponseView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  RequestResponseView: function() { return RequestResponseView; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./ui/legacy/components/source_frame/source_frame.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/*
 * Copyright (C) 2011 Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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







var UIStrings = {
    /**
     *@description Text in Request Response View of the Network panel
     */ thisRequestHasNoResponseData: 'This request has no response data available.',
    /**
     *@description Text in Request Preview View of the Network panel
     */ failedToLoadResponseData: 'Failed to load response data'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/network/RequestResponseView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
var RequestResponseView = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(RequestResponseView, _UI_Widget_VBox);
    var _super = _create_super(RequestResponseView);
    function RequestResponseView(request) {
        _class_call_check(this, RequestResponseView);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "request", void 0);
        _define_property(_assert_this_initialized(_this), "contentViewPromise", void 0);
        _this.element.classList.add('request-view');
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.pane('response').track({
            resize: true
        })));
        _this.request = request;
        _this.contentViewPromise = null;
        return _this;
    }
    _create_class(RequestResponseView, [
        {
            key: "wasShown",
            value: function wasShown() {
                void this.doShowPreview();
            }
        },
        {
            key: "doShowPreview",
            value: function doShowPreview() {
                if (!this.contentViewPromise) {
                    this.contentViewPromise = this.showPreview();
                }
                return this.contentViewPromise;
            }
        },
        {
            key: "showPreview",
            value: function showPreview() {
                var _this = this;
                return _async_to_generator(function() {
                    var responseView;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.createPreview()
                                ];
                            case 1:
                                responseView = _state.sent();
                                responseView.show(_this.element);
                                return [
                                    2,
                                    responseView
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "createPreview",
            value: function createPreview() {
                var _this = this;
                return _async_to_generator(function() {
                    var contentData, sourceView;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.request.requestStreamingContent()
                                ];
                            case 1:
                                contentData = _state.sent();
                                if (_models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_3__.StreamingContentData.isError(contentData)) {
                                    return [
                                        2,
                                        new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.EmptyWidget.EmptyWidget(i18nString(UIStrings.failedToLoadResponseData) + ': ' + contentData.error)
                                    ];
                                }
                                return [
                                    4,
                                    RequestResponseView.sourceViewForRequest(_this.request)
                                ];
                            case 2:
                                sourceView = _state.sent();
                                if (!sourceView || _this.request.statusCode === 204) {
                                    return [
                                        2,
                                        new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.EmptyWidget.EmptyWidget(i18nString(UIStrings.thisRequestHasNoResponseData))
                                    ];
                                }
                                return [
                                    2,
                                    sourceView
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "revealPosition",
            value: function revealPosition(position) {
                var _this = this;
                return _async_to_generator(function() {
                    var view;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.doShowPreview()
                                ];
                            case 1:
                                view = _state.sent();
                                if (_instanceof(view, _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_4__.ResourceSourceFrame.SearchableContainer)) {
                                    void view.revealPosition(position);
                                }
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ], [
        {
            key: "sourceViewForRequest",
            value: function sourceViewForRequest(request) {
                return _async_to_generator(function() {
                    var sourceView, contentData, mimeType, isMinified, mediaType;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                sourceView = requestToSourceView.get(request);
                                if (sourceView !== undefined) {
                                    return [
                                        2,
                                        sourceView
                                    ];
                                }
                                return [
                                    4,
                                    request.requestStreamingContent()
                                ];
                            case 1:
                                contentData = _state.sent();
                                // Note: Even though WASM is binary data, the source view will disassemble it and show a text representation.
                                if (_models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_3__.StreamingContentData.isError(contentData) || !(contentData.isTextContent || contentData.mimeType === 'application/wasm')) {
                                    requestToSourceView.delete(request);
                                    return [
                                        2,
                                        null
                                    ];
                                }
                                // If the main document is of type JSON (or any JSON subtype), do not use the more generic canonical MIME type,
                                // which would prevent the JSON from being pretty-printed. See https://crbug.com/406900
                                if (_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.simplifyContentType(request.mimeType) === 'application/json') {
                                    mimeType = request.mimeType;
                                } else {
                                    mimeType = request.resourceType().canonicalMimeType() || request.mimeType;
                                }
                                isMinified = contentData.mimeType === 'application/wasm' ? false : _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_3__.TextUtils.isMinified(contentData.content().text);
                                mediaType = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.mediaTypeForMetrics(mimeType, request.resourceType().isFromSourceMap(), isMinified);
                                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.networkPanelResponsePreviewOpened(mediaType);
                                sourceView = _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_4__.ResourceSourceFrame.ResourceSourceFrame.createSearchableView(request, mimeType);
                                requestToSourceView.set(request, sourceView);
                                return [
                                    2,
                                    sourceView
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return RequestResponseView;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Widget.VBox);
var requestToSourceView = new WeakMap(); //# sourceMappingURL=RequestResponseView.js.map


}),

}]);