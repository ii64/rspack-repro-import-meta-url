"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_network_RequestPayloadView_js"], {
"./panels/network/RequestPayloadView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Category: function() { return Category; },
  RequestPayloadView: function() { return RequestPayloadView; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/object_ui/object_ui.js */ "./ui/legacy/components/object_ui/object_ui.js");
/* harmony import */var _ui_legacy_components_object_ui_objectPropertiesSection_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/components/object_ui/objectPropertiesSection.css.js */ "./ui/legacy/components/object_ui/objectPropertiesSection.css.js");
/* harmony import */var _ui_legacy_components_object_ui_objectValue_css_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/components/object_ui/objectValue.css.js */ "./ui/legacy/components/object_ui/objectValue.css.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _requestPayloadTree_css_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./requestPayloadTree.css.js */ "./panels/network/requestPayloadTree.css.js");
/* harmony import */var _requestPayloadView_css_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./requestPayloadView.css.js */ "./panels/network/requestPayloadView.css.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
 * Copyright (C) 2007, 2008 Apple Inc.  All rights reserved.
 * Copyright (C) IBM Corp. 2009  All rights reserved.
 * Copyright (C) 2010 Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *
 * 1.  Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 * 2.  Redistributions in binary form must reproduce the above copyright
 *     notice, this list of conditions and the following disclaimer in the
 *     documentation and/or other materials provided with the distribution.
 * 3.  Neither the name of Apple Computer, Inc. ("Apple") nor the names of
 *     its contributors may be used to endorse or promote products derived
 *     from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY APPLE AND ITS CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL APPLE OR ITS CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
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





// eslint-disable-next-line rulesdir/es_modules_import

// eslint-disable-next-line rulesdir/es_modules_import





var UIStrings = {
    /**
     *@description A context menu item in the Watch Expressions Sidebar Pane of the Sources panel and Network pane request.
     */ copyValue: 'Copy value',
    /**
     * @description Text in Request Payload View of the Network panel. This is a noun-phrase meaning the
     * payload of a network request.
     */ requestPayload: 'Request Payload',
    /**
     *@description Text in Request Payload View of the Network panel
     */ unableToDecodeValue: '(unable to decode value)',
    /**
     *@description Text in Request Payload View of the Network panel
     */ queryStringParameters: 'Query String Parameters',
    /**
     *@description Text in Request Payload View of the Network panel
     */ formData: 'Form Data',
    /**
     *@description Text to show more content
     */ showMore: 'Show more',
    /**
     *@description Text for toggling the view of payload data (e.g. query string parameters) from source to parsed in the payload tab
     */ viewParsed: 'View parsed',
    /**
     *@description Text to show an item is empty
     */ empty: '(empty)',
    /**
     *@description Text for toggling the view of payload data (e.g. query string parameters) from parsed to source in the payload tab
     */ viewSource: 'View source',
    /**
     * @description Text for toggling payload data (e.g. query string parameters) from decoded to
     * encoded in the payload tab or in the cookies preview. URL-encoded is a different data format for
     * the same data, which the user sees when they click this command.
     */ viewUrlEncoded: 'View URL-encoded',
    /**
     *@description Text for toggling payload data (e.g. query string parameters) from encoded to decoded in the payload tab or in the cookies preview
     */ viewDecoded: 'View decoded',
    /**
     *@description Text for toggling payload data (e.g. query string parameters) from decoded to
     * encoded in the payload tab or in the cookies preview. URL-encoded is a different data format for
     * the same data, which the user sees when they click this command.
     */ viewUrlEncodedL: 'view URL-encoded',
    /**
     *@description Text in Request Payload View of the Network panel
     */ viewDecodedL: 'view decoded',
    /**
     *@description Text in Request Payload View of the Network panel
     */ viewParsedL: 'view parsed',
    /**
     *@description Text in Request Payload View of the Network panel
     */ viewSourceL: 'view source'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/network/RequestPayloadView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
var RequestPayloadView = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(RequestPayloadView, _UI_Widget_VBox);
    var _super = _create_super(RequestPayloadView);
    function RequestPayloadView(request) {
        _class_call_check(this, RequestPayloadView);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "request", void 0);
        _define_property(_assert_this_initialized(_this), "decodeRequestParameters", void 0);
        _define_property(_assert_this_initialized(_this), "queryStringCategory", void 0);
        _define_property(_assert_this_initialized(_this), "formDataCategory", void 0);
        _define_property(_assert_this_initialized(_this), "requestPayloadCategory", void 0);
        _this.element.classList.add('request-payload-view');
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.pane('payload').track({
            resize: true
        })));
        _this.request = request;
        _this.decodeRequestParameters = true;
        var contentType = request.requestContentType();
        if (contentType) {
            _this.decodeRequestParameters = Boolean(contentType.match(/^application\/x-www-form-urlencoded\s*(;.*)?$/i));
        }
        var root = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.TreeOutline.TreeOutlineInShadow();
        root.registerCSSFiles([
            _ui_legacy_components_object_ui_objectValue_css_js__WEBPACK_IMPORTED_MODULE_6__["default"],
            _ui_legacy_components_object_ui_objectPropertiesSection_css_js__WEBPACK_IMPORTED_MODULE_5__["default"],
            _requestPayloadTree_css_js__WEBPACK_IMPORTED_MODULE_9__["default"]
        ]);
        root.element.classList.add('request-payload-tree');
        root.makeDense();
        _this.element.appendChild(root.element);
        _this.queryStringCategory = new Category(root, 'query-string');
        _this.formDataCategory = new Category(root, 'form-data');
        _this.requestPayloadCategory = new Category(root, 'request-payload', i18nString(UIStrings.requestPayload));
        return _this;
    }
    _create_class(RequestPayloadView, [
        {
            key: "wasShown",
            value: function wasShown() {
                this.registerCSSFiles([
                    _requestPayloadView_css_js__WEBPACK_IMPORTED_MODULE_10__["default"]
                ]);
                this.request.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkRequest.Events.RequestHeadersChanged, this.refreshFormData, this);
                this.refreshQueryString();
                void this.refreshFormData();
            // this._root.select(/* omitFocus */ true, /* selectedByUser */ false);
            }
        },
        {
            key: "willHide",
            value: function willHide() {
                this.request.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkRequest.Events.RequestHeadersChanged, this.refreshFormData, this);
            }
        },
        {
            key: "addEntryContextMenuHandler",
            value: function addEntryContextMenuHandler(treeElement, value) {
                treeElement.listItemElement.addEventListener('contextmenu', function(event) {
                    event.consume(true);
                    var contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ContextMenu.ContextMenu(event);
                    var decodedValue = decodeURIComponent(value);
                    var copyDecodedValueHandler = function() {
                        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.NetworkPanelCopyValue);
                        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(decodedValue);
                    };
                    contextMenu.clipboardSection().appendItem(i18nString(UIStrings.copyValue), copyDecodedValueHandler, {
                        jslogContext: 'copy-value'
                    });
                    void contextMenu.show();
                });
            }
        },
        {
            key: "refreshQueryString",
            value: function refreshQueryString() {
                var queryString = this.request.queryString();
                var queryParameters = this.request.queryParameters;
                this.queryStringCategory.hidden = !queryParameters;
                if (queryParameters) {
                    this.refreshParams(i18nString(UIStrings.queryStringParameters), queryParameters, queryString, this.queryStringCategory);
                }
            }
        },
        {
            key: "refreshFormData",
            value: function refreshFormData() {
                var _this = this;
                return _async_to_generator(function() {
                    var formData, formParameters, json;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.request.requestFormData()
                                ];
                            case 1:
                                formData = _state.sent();
                                if (!formData) {
                                    _this.formDataCategory.hidden = true;
                                    _this.requestPayloadCategory.hidden = true;
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    4,
                                    _this.request.formParameters()
                                ];
                            case 2:
                                formParameters = _state.sent();
                                if (formParameters) {
                                    _this.formDataCategory.hidden = false;
                                    _this.requestPayloadCategory.hidden = true;
                                    _this.refreshParams(i18nString(UIStrings.formData), formParameters, formData, _this.formDataCategory);
                                } else {
                                    _this.requestPayloadCategory.hidden = false;
                                    _this.formDataCategory.hidden = true;
                                    try {
                                        json = JSON.parse(formData);
                                        _this.refreshRequestJSONPayload(json, formData);
                                    } catch (e) {
                                        _this.populateTreeElementWithSourceText(_this.requestPayloadCategory, formData);
                                    }
                                }
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "populateTreeElementWithSourceText",
            value: function populateTreeElementWithSourceText(treeElement, sourceText) {
                var MAX_LENGTH = 3000;
                var text = (sourceText || '').trim();
                var trim = text.length > MAX_LENGTH;
                var sourceTextElement = document.createElement('span');
                sourceTextElement.classList.add('payload-value');
                sourceTextElement.classList.add('source-code');
                sourceTextElement.textContent = trim ? text.substr(0, MAX_LENGTH) : text;
                var sourceTreeElement = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.TreeOutline.TreeElement(sourceTextElement);
                treeElement.removeChildren();
                treeElement.appendChild(sourceTreeElement);
                if (!trim) {
                    return;
                }
                var showMoreButton = document.createElement('button');
                showMoreButton.classList.add('request-payload-show-more-button');
                showMoreButton.textContent = i18nString(UIStrings.showMore);
                showMoreButton.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.action('show-more').track({
                    click: true
                })));
                function showMore() {
                    showMoreButton.remove();
                    sourceTextElement.textContent = text;
                    sourceTreeElement.listItemElement.removeEventListener('contextmenu', onContextMenuShowMore);
                }
                showMoreButton.addEventListener('click', showMore);
                function onContextMenuShowMore(event) {
                    var contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ContextMenu.ContextMenu(event);
                    var section = contextMenu.newSection();
                    section.appendItem(i18nString(UIStrings.showMore), showMore, {
                        jslogContext: 'show-more'
                    });
                    void contextMenu.show();
                }
                sourceTreeElement.listItemElement.addEventListener('contextmenu', onContextMenuShowMore);
                sourceTextElement.appendChild(showMoreButton);
            }
        },
        {
            key: "refreshParams",
            value: function refreshParams(title, params, sourceText, paramsTreeElement) {
                paramsTreeElement.removeChildren();
                paramsTreeElement.listItemElement.removeChildren();
                paramsTreeElement.listItemElement.createChild('div', 'selection fill');
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.UIUtils.createTextChild(paramsTreeElement.listItemElement, title);
                var payloadCount = document.createElement('span');
                payloadCount.classList.add('payload-count');
                var numberOfParams = params ? params.length : 0;
                payloadCount.textContent = "\xa0(".concat(numberOfParams, ")");
                paramsTreeElement.listItemElement.appendChild(payloadCount);
                var shouldViewSource = viewSourceForItems.has(paramsTreeElement);
                if (shouldViewSource) {
                    this.appendParamsSource(title, params, sourceText, paramsTreeElement);
                } else {
                    this.appendParamsParsed(title, params, sourceText, paramsTreeElement);
                }
            }
        },
        {
            key: "appendParamsSource",
            value: function appendParamsSource(title, params, sourceText, paramsTreeElement) {
                var _this = this;
                this.populateTreeElementWithSourceText(paramsTreeElement, sourceText);
                var listItemElement = paramsTreeElement.listItemElement;
                var viewParsed = function viewParsed(event) {
                    listItemElement.removeEventListener('contextmenu', viewParsedContextMenu);
                    viewSourceForItems.delete(paramsTreeElement);
                    this.refreshParams(title, params, sourceText, paramsTreeElement);
                    event.consume();
                };
                var viewParsedContextMenu = function(event) {
                    if (!paramsTreeElement.expanded) {
                        return;
                    }
                    var contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ContextMenu.ContextMenu(event);
                    contextMenu.newSection().appendItem(i18nString(UIStrings.viewParsed), viewParsed.bind(_this, event), {
                        jslogContext: 'view-parsed'
                    });
                    void contextMenu.show();
                };
                var viewParsedButton = this.createViewSourceToggle(/* viewSource */ true, viewParsed.bind(this));
                listItemElement.appendChild(viewParsedButton);
                listItemElement.addEventListener('contextmenu', viewParsedContextMenu);
            }
        },
        {
            key: "appendParamsParsed",
            value: function appendParamsParsed(title, params, sourceText, paramsTreeElement) {
                var _this = this;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = (params || [])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var param = _step.value;
                        var paramNameValue = document.createDocumentFragment();
                        if (param.name !== '') {
                            var name = RequestPayloadView.formatParameter(param.name + ': ', 'payload-name', this.decodeRequestParameters);
                            var value = RequestPayloadView.formatParameter(param.value, 'payload-value source-code', this.decodeRequestParameters);
                            paramNameValue.appendChild(name);
                            paramNameValue.createChild('span', 'payload-separator');
                            paramNameValue.appendChild(value);
                        } else {
                            paramNameValue.appendChild(RequestPayloadView.formatParameter(i18nString(UIStrings.empty), 'empty-request-payload', this.decodeRequestParameters));
                        }
                        var paramTreeElement = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.TreeOutline.TreeElement(paramNameValue);
                        this.addEntryContextMenuHandler(paramTreeElement, param.value);
                        paramsTreeElement.appendChild(paramTreeElement);
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
                var listItemElement = paramsTreeElement.listItemElement;
                var viewSource = function viewSource(event) {
                    listItemElement.removeEventListener('contextmenu', viewSourceContextMenu);
                    viewSourceForItems.add(paramsTreeElement);
                    this.refreshParams(title, params, sourceText, paramsTreeElement);
                    event.consume();
                };
                var toggleURLDecoding = function toggleURLDecoding(event) {
                    listItemElement.removeEventListener('contextmenu', viewSourceContextMenu);
                    this.toggleURLDecoding(event);
                };
                var viewSourceContextMenu = function(event) {
                    if (!paramsTreeElement.expanded) {
                        return;
                    }
                    var contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ContextMenu.ContextMenu(event);
                    var section = contextMenu.newSection();
                    section.appendItem(i18nString(UIStrings.viewSource), viewSource.bind(_this, event), {
                        jslogContext: 'view-source'
                    });
                    var viewURLEncodedText = _this.decodeRequestParameters ? i18nString(UIStrings.viewUrlEncoded) : i18nString(UIStrings.viewDecoded);
                    section.appendItem(viewURLEncodedText, toggleURLDecoding.bind(_this, event), {
                        jslogContext: 'toggle-url-decoding'
                    });
                    void contextMenu.show();
                };
                var viewSourceButton = this.createViewSourceToggle(/* viewSource */ false, viewSource.bind(this));
                listItemElement.appendChild(viewSourceButton);
                var toggleTitle = this.decodeRequestParameters ? i18nString(UIStrings.viewUrlEncodedL) : i18nString(UIStrings.viewDecodedL);
                var toggleButton = this.createToggleButton(toggleTitle);
                toggleButton.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.toggle('decode-encode').track({
                    click: true
                })));
                toggleButton.addEventListener('click', toggleURLDecoding.bind(this), false);
                listItemElement.appendChild(toggleButton);
                listItemElement.addEventListener('contextmenu', viewSourceContextMenu);
            }
        },
        {
            // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            key: "refreshRequestJSONPayload",
            value: function refreshRequestJSONPayload(parsedObject, sourceText) {
                var rootListItem = this.requestPayloadCategory;
                rootListItem.removeChildren();
                var rootListItemElement = rootListItem.listItemElement;
                rootListItemElement.removeChildren();
                rootListItemElement.createChild('div', 'selection fill');
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.UIUtils.createTextChild(rootListItemElement, this.requestPayloadCategory.title.toString());
                if (viewSourceForItems.has(rootListItem)) {
                    this.appendJSONPayloadSource(rootListItem, parsedObject, sourceText);
                } else {
                    this.appendJSONPayloadParsed(rootListItem, parsedObject, sourceText);
                }
            }
        },
        {
            // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            key: "appendJSONPayloadSource",
            value: function appendJSONPayloadSource(rootListItem, parsedObject, sourceText) {
                var _this = this;
                var rootListItemElement = rootListItem.listItemElement;
                this.populateTreeElementWithSourceText(rootListItem, sourceText);
                var viewParsed = function viewParsed(event) {
                    rootListItemElement.removeEventListener('contextmenu', viewParsedContextMenu);
                    viewSourceForItems.delete(rootListItem);
                    this.refreshRequestJSONPayload(parsedObject, sourceText);
                    event.consume();
                };
                var viewParsedButton = this.createViewSourceToggle(/* viewSource */ true, viewParsed.bind(this));
                rootListItemElement.appendChild(viewParsedButton);
                var viewParsedContextMenu = function(event) {
                    if (!rootListItem.expanded) {
                        return;
                    }
                    var contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ContextMenu.ContextMenu(event);
                    contextMenu.newSection().appendItem(i18nString(UIStrings.viewParsed), viewParsed.bind(_this, event), {
                        jslogContext: 'view-parsed'
                    });
                    void contextMenu.show();
                };
                rootListItemElement.addEventListener('contextmenu', viewParsedContextMenu);
            }
        },
        {
            // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            key: "appendJSONPayloadParsed",
            value: function appendJSONPayloadParsed(rootListItem, parsedObject, sourceText) {
                var _this = this;
                var object = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.RemoteObject.RemoteObject.fromLocalObject(parsedObject);
                var section = new _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_4__.ObjectPropertiesSection.RootElement(object);
                section.title = object.description;
                section.expand();
                // `editable` is not a valid property for `ObjectUI.ObjectPropertiesSection.RootElement`. Only for
                // `ObjectUI.ObjectPropertiesSection.ObjectPropertiesSection`. We do not know if this assignment is
                // safe to delete.
                // @ts-ignore
                section.editable = false;
                rootListItem.childrenListElement.classList.add('source-code', 'object-properties-section');
                rootListItem.appendChild(section);
                var rootListItemElement = rootListItem.listItemElement;
                var viewSource = function viewSource(event) {
                    rootListItemElement.removeEventListener('contextmenu', viewSourceContextMenu);
                    viewSourceForItems.add(rootListItem);
                    this.refreshRequestJSONPayload(parsedObject, sourceText);
                    event.consume();
                };
                var viewSourceContextMenu = function(event) {
                    if (!rootListItem.expanded) {
                        return;
                    }
                    var contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ContextMenu.ContextMenu(event);
                    contextMenu.newSection().appendItem(i18nString(UIStrings.viewSource), viewSource.bind(_this, event), {
                        jslogContext: 'view-source'
                    });
                    void contextMenu.show();
                };
                var viewSourceButton = this.createViewSourceToggle(/* viewSource */ false, viewSource.bind(this));
                rootListItemElement.appendChild(viewSourceButton);
                rootListItemElement.addEventListener('contextmenu', viewSourceContextMenu);
            }
        },
        {
            key: "createViewSourceToggle",
            value: function createViewSourceToggle(viewSource, handler) {
                var viewSourceToggleTitle = viewSource ? i18nString(UIStrings.viewParsedL) : i18nString(UIStrings.viewSourceL);
                var viewSourceToggleButton = this.createToggleButton(viewSourceToggleTitle);
                viewSourceToggleButton.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.toggle('source-parse').track({
                    click: true
                })));
                viewSourceToggleButton.addEventListener('click', handler, false);
                return viewSourceToggleButton;
            }
        },
        {
            key: "toggleURLDecoding",
            value: function toggleURLDecoding(event) {
                this.decodeRequestParameters = !this.decodeRequestParameters;
                this.refreshQueryString();
                void this.refreshFormData();
                event.consume();
            }
        },
        {
            key: "createToggleButton",
            value: function createToggleButton(title) {
                var button = document.createElement('button');
                button.classList.add('payload-toggle');
                button.tabIndex = 0;
                button.textContent = title;
                return button;
            }
        }
    ], [
        {
            key: "formatParameter",
            value: function formatParameter(value, className, decodeParameters) {
                var errorDecoding = false;
                if (decodeParameters) {
                    value = value.replace(/\+/g, ' ');
                    if (value.indexOf('%') >= 0) {
                        try {
                            value = decodeURIComponent(value);
                        } catch (e) {
                            errorDecoding = true;
                        }
                    }
                }
                var div = document.createElement('div');
                if (className) {
                    div.className = className;
                }
                if (value === '') {
                    div.classList.add('empty-value');
                }
                if (errorDecoding) {
                    div.createChild('span', 'payload-decode-error').textContent = i18nString(UIStrings.unableToDecodeValue);
                } else {
                    div.textContent = value;
                }
                return div;
            }
        }
    ]);
    return RequestPayloadView;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Widget.VBox);
var viewSourceForItems = new WeakSet();
var Category = /*#__PURE__*/ function(_UI_TreeOutline_TreeElement) {
    "use strict";
    _inherits(Category, _UI_TreeOutline_TreeElement);
    var _super = _create_super(Category);
    function Category(root, name, title) {
        _class_call_check(this, Category);
        var _this;
        _this = _super.call(this, title || '', true);
        _define_property(_assert_this_initialized(_this), "toggleOnClick", void 0);
        _define_property(_assert_this_initialized(_this), "expandedSetting", void 0);
        _define_property(_assert_this_initialized(_this), "expanded", void 0);
        _this.toggleOnClick = true;
        _this.hidden = true;
        _this.expandedSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('request-info-' + name + '-category-expanded', true);
        _this.expanded = _this.expandedSetting.get();
        _this.listItemElement.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.section().context(name)));
        root.appendChild(_assert_this_initialized(_this));
        return _this;
    }
    _create_class(Category, [
        {
            key: "createLeaf",
            value: function createLeaf() {
                var leaf = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.TreeOutline.TreeElement();
                this.appendChild(leaf);
                return leaf;
            }
        },
        {
            key: "onexpand",
            value: function onexpand() {
                this.expandedSetting.set(true);
            }
        },
        {
            key: "oncollapse",
            value: function oncollapse() {
                this.expandedSetting.set(false);
            }
        }
    ]);
    return Category;
} //# sourceMappingURL=RequestPayloadView.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.TreeOutline.TreeElement);


}),
"./panels/network/requestPayloadTree.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2016 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.tree-outline {\n  padding-left: 0;\n}\n\n.tree-outline > ol {\n  padding-bottom: 5px;\n  border-bottom: solid 1px var(--sys-color-divider);\n}\n\n.tree-outline > .parent {\n  user-select: none;\n  font-weight: bold;\n  color: var(--sys-color-on-surface);\n  margin-top: -1px;\n  display: flex;\n  align-items: center;\n  height: 26px;\n}\n\n.tree-outline li {\n  padding-left: 5px;\n  line-height: 20px;\n}\n\n.tree-outline li:not(.parent) {\n  margin-left: 10px;\n  display: block;\n}\n\n.tree-outline li:not(.parent)::before {\n  display: none;\n}\n\n.tree-outline li.expanded .payload-count {\n  display: none;\n}\n\n.tree-outline li .payload-toggle {\n  display: none;\n}\n\n.tree-outline li.expanded .payload-toggle {\n  display: inline;\n  margin-left: 30px;\n  font-weight: normal;\n  color: var(--sys-color-on-surface);\n  background: none;\n  border: none;\n}\n\n.tree-outline li.expanded .payload-toggle:focus-visible {\n  border: 2px solid var(--sys-color-state-focus-ring);\n  border-radius: 5px;\n}\n\n.tree-outline li .header-toggle:hover {\n  color: var(--sys-color-token-subtle);\n}\n\n.tree-outline .payload-name {\n  color: var(--sys-color-token-subtle);\n  display: inline-flex;\n  margin-right: 0.25em;\n  font-weight: bold;\n  vertical-align: top;\n  white-space: pre-wrap;\n}\n\n.tree-outline .payload-separator {\n  user-select: none;\n}\n\n.tree-outline .payload-value {\n  display: inline;\n  margin-right: 1em;\n  white-space: pre-wrap;\n  word-break: break-all;\n  margin-top: 1px;\n}\n\n.tree-outline .empty-request-payload {\n  color: var(--sys-color-state-disabled);\n}\n\n.request-payload-show-more-button {\n  border: none;\n  border-radius: 3px;\n  display: inline-block;\n  font-size: 12px;\n  font-family: sans-serif;\n  margin: 0 4px;\n  padding: 2px 4px;\n}\n\n@media (forced-colors: active) {\n  :host-context(.request-payload-tree) ol.tree-outline:not(.hide-selection-when-blurred) li.selected:focus {\n    background: Highlight;\n  }\n\n  :host-context(.request-payload-tree) ol.tree-outline:not(.hide-selection-when-blurred) li::before {\n    background-color: ButtonText;\n  }\n\n  :host-context(.request-payload-tree) ol.tree-outline:not(.hide-selection-when-blurred) li.selected.parent::before {\n    background-color: HighlightText;\n  }\n\n  :host-context(.request-payload-tree) ol.tree-outline:not(.hide-selection-when-blurred) li.selected *,\n  :host-context(.request-payload-tree) ol.tree-outline:not(.hide-selection-when-blurred) li.selected.parent,\n  :host-context(.request-payload-tree) ol.tree-outline:not(.hide-selection-when-blurred) li.selected.parent span {\n    color: HighlightText;\n  }\n}\n\n.payload-decode-error {\n  color: var(--sys-color-error);\n}\n\n/*# sourceURL=requestPayloadTree.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),
"./panels/network/requestPayloadView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright (c) 2014 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.request-payload-view {\n  user-select: text;\n  overflow: auto;\n}\n\n.request-payload-tree {\n  flex-grow: 1;\n  overflow-y: auto;\n  margin: 0;\n}\n\n/*# sourceURL=requestPayloadView.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);