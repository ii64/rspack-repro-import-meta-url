"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_components_StorageMetadataView_js"], {
"./panels/application/components/StorageMetadataView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  StorageMetadataView: function() { return StorageMetadataView; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/components/report_view/report_view.js */ "./ui/components/report_view/report_view.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
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
function _class_private_method_get(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
}
function _class_private_method_init(obj, privateSet) {
    _check_private_redeclaration(obj, privateSet);
    privateSet.add(obj);
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
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
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
function _templateObject() {
    var data = _tagged_template_literal([
        "\n        <",
        " .data=",
        ">\n          ",
        "\n        </",
        ">"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "<",
        ">",
        "</",
        ">"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "<",
        ">",
        "</",
        ">"
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        '<div class="text-ellipsis" title=',
        ">",
        "</div>"
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        "",
        "",
        ""
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _tagged_template_literal([
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        ""
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = _tagged_template_literal([
        "devtools-storage-metadata-view"
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = _tagged_template_literal([
        "\n      ",
        "\n      ",
        "\n      ",
        "\n      ",
        "\n      ",
        "\n      ",
        "\n      ",
        "\n      ",
        "\n      ",
        "\n      ",
        ""
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject8() {
    var data = _tagged_template_literal([
        "\n      <",
        ">\n        <",
        "\n          aria-label=",
        "\n          .variant=",
        "\n          @click=",
        ">\n          ",
        "\n        </",
        ">\n      </",
        ">"
    ]);
    _templateObject8 = function _templateObject() {
        return data;
    };
    return data;
}









var UIStrings = {
    /**
     *@description The origin of a URL (https://web.dev/same-site-same-origin/#origin).
     *(for a lot of languages this does not need to be translated, please translate only where necessary)
     */ origin: 'Origin',
    /**
     *@description Site (https://web.dev/same-site-same-origin/#site) for the URL the user sees in the omnibox.
     */ topLevelSite: 'Top-level site',
    /**
     *@description Text to show in the top-level site row, in case the value is opaque (https://html.spec.whatwg.org/#concept-origin-opaque).
     */ opaque: '(opaque)',
    /**
     *@description Whether the storage corresponds to an opaque key (similar to https://html.spec.whatwg.org/#concept-origin-opaque).
     */ isOpaque: 'Is opaque',
    /**
     *@description Whether the storage corresponds to a third-party origin (https://web.dev/learn/privacy/third-parties/).
     */ isThirdParty: 'Is third-party',
    /**
     *@description Text indicating that the condition holds.
     */ yes: 'Yes',
    /**
     *@description Text indicating that the condition does not hold.
     */ no: 'No',
    /**
     *@description Text indicating that the storage corresponds to a third-party origin because top-level site is opaque.
     */ yesBecauseTopLevelIsOpaque: 'Yes, because the top-level site is opaque',
    /**
     *@description Text indicating that the storage corresponds to a third-party origin because the storage key is opaque.
     */ yesBecauseKeyIsOpaque: 'Yes, because the storage key is opaque',
    /**
     *@description Text indicating that the storage corresponds to a third-party origin because the origin doesn't match the top-level site.
     */ yesBecauseOriginNotInTopLevelSite: 'Yes, because the origin is outside of the top-level site',
    /**
     *@description Text indicating that the storage corresponds to a third-party origin because the was a third-party origin in the ancestry chain.
     */ yesBecauseAncestorChainHasCrossSite: 'Yes, because the ancestry chain contains a third-party origin',
    /**
     *@description Text when something is loading.
     */ loading: 'Loading…',
    /**
     *@description The storage bucket name (https://wicg.github.io/storage-buckets/explainer#bucket-names)
     */ bucketName: 'Bucket name',
    /**
     *@description The name of the default bucket (https://wicg.github.io/storage-buckets/explainer#the-default-bucket)
     *(This should not be a valid bucket name (https://wicg.github.io/storage-buckets/explainer#bucket-names))
     */ defaultBucket: 'Default bucket',
    /**
     *@description Text indicating that the storage is persistent (https://wicg.github.io/storage-buckets/explainer#storage-policy-persistence)
     */ persistent: 'Is persistent',
    /**
     *@description The storage durability policy (https://wicg.github.io/storage-buckets/explainer#storage-policy-durability)
     */ durability: 'Durability',
    /**
     *@description The storage quota (https://wicg.github.io/storage-buckets/explainer#storage-policy-quota)
     */ quota: 'Quota',
    /**
     *@description The storage expiration (https://wicg.github.io/storage-buckets/explainer#storage-policy-expiration)
     */ expiration: 'Expiration',
    /**
     *@description Text indicating that no value is set
     */ none: 'None',
    /**
     * @description Label of the button that triggers the Storage Bucket to be deleted.
     */ deleteBucket: 'Delete bucket',
    /**
     *@description Text shown in the confirmation dialogue that displays before deleting the bucket.
     *@example {bucket} PH1
     */ confirmBucketDeletion: 'Delete the "{PH1}" bucket?'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/application/components/StorageMetadataView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_5__.RenderCoordinator.RenderCoordinator.instance();
var _LegacyWrapper_LegacyWrapper_WrappableComponent, _shadow = /*#__PURE__*/ new WeakMap(), _storageBucketsModel = /*#__PURE__*/ new WeakMap(), _storageKey = /*#__PURE__*/ new WeakMap(), _storageBucket = /*#__PURE__*/ new WeakMap(), _renderStorageBucketInfo = /*#__PURE__*/ new WeakSet(), _getExpirationString = /*#__PURE__*/ new WeakSet(), _renderBucketControls = /*#__PURE__*/ new WeakSet(), _deleteBucket = /*#__PURE__*/ new WeakSet();
var StorageMetadataView = /*#__PURE__*/ function(_superClass) {
    "use strict";
    _inherits(StorageMetadataView, _superClass);
    var _super = _create_super(StorageMetadataView);
    function StorageMetadataView() {
        _class_call_check(this, StorageMetadataView);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _renderStorageBucketInfo);
        _class_private_method_init(_assert_this_initialized(_this), _getExpirationString);
        _class_private_method_init(_assert_this_initialized(_this), _renderBucketControls);
        _class_private_method_init(_assert_this_initialized(_this), _deleteBucket);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _storageBucketsModel, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _storageKey, {
            writable: true,
            value: null
        });
        _class_private_field_init(_assert_this_initialized(_this), _storageBucket, {
            writable: true,
            value: null
        });
        return _this;
    }
    _create_class(StorageMetadataView, [
        {
            key: "getShadow",
            value: function getShadow() {
                return _class_private_field_get(this, _shadow);
            }
        },
        {
            key: "setStorageKey",
            value: function setStorageKey(storageKey) {
                _class_private_field_set(this, _storageKey, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.StorageKeyManager.parseStorageKey(storageKey));
                void this.render();
            }
        },
        {
            key: "setStorageBucket",
            value: function setStorageBucket(storageBucket) {
                _class_private_field_set(this, _storageBucket, storageBucket);
                this.setStorageKey(storageBucket.bucket.storageKey);
            }
        },
        {
            key: "enableStorageBucketControls",
            value: function enableStorageBucketControls(model) {
                _class_private_field_set(this, _storageBucketsModel, model);
                if (_class_private_field_get(this, _storageKey)) {
                    void this.render();
                }
            }
        },
        {
            key: "render",
            value: function render() {
                var _this = this;
                return coordinator.write('StorageMetadataView render', /*#__PURE__*/ _async_to_generator(function() {
                    var _this_getTitle, _, _1, _tmp;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                // Disabled until https://crbug.com/1079231 is fixed.
                                // clang-format off
                                _ = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.render;
                                _1 = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html;
                                _tmp = [
                                    _templateObject(),
                                    _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.Report.litTagName,
                                    {
                                        reportTitle: (_this_getTitle = _this.getTitle()) !== null && _this_getTitle !== void 0 ? _this_getTitle : i18nString(UIStrings.loading)
                                    }
                                ];
                                return [
                                    4,
                                    _this.renderReportContent()
                                ];
                            case 1:
                                _.apply(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__, [
                                    _1.apply(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__, _tmp.concat([
                                        _state.sent(),
                                        _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.Report.litTagName
                                    ])),
                                    _class_private_field_get(_this, _shadow),
                                    {
                                        host: _this
                                    }
                                ]);
                                return [
                                    2
                                ];
                        }
                    });
                // clang-format on
                }));
            }
        },
        {
            key: "getTitle",
            value: function getTitle() {
                var _$_class_private_field_get;
                if (!_class_private_field_get(this, _storageKey)) {
                    return;
                }
                var origin = _class_private_field_get(this, _storageKey).origin;
                var bucketName = ((_$_class_private_field_get = _class_private_field_get(this, _storageBucket)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.bucket.name) || i18nString(UIStrings.defaultBucket);
                return _class_private_field_get(this, _storageBucketsModel) ? "".concat(bucketName, " - ").concat(origin) : origin;
            }
        },
        {
            key: "key",
            value: function key(content) {
                return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html(_templateObject1(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportKey.litTagName, content, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportKey.litTagName);
            }
        },
        {
            key: "value",
            value: function value(content) {
                return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html(_templateObject2(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportValue.litTagName, content, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportValue.litTagName);
            }
        },
        {
            key: "renderReportContent",
            value: function renderReportContent() {
                var _this = this;
                return _async_to_generator(function() {
                    var origin, ancestorChainHasCrossSite, hasNonce, topLevelSiteIsOpaque, topLevelSite, thirdPartyReason;
                    return _ts_generator(this, function(_state) {
                        if (!_class_private_field_get(_this, _storageKey)) {
                            return [
                                2,
                                _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing
                            ];
                        }
                        origin = _class_private_field_get(_this, _storageKey).origin;
                        ancestorChainHasCrossSite = Boolean(_class_private_field_get(_this, _storageKey).components.get("3" /* SDK.StorageKeyManager.StorageKeyComponent.ANCESTOR_CHAIN_BIT */ ));
                        hasNonce = Boolean(_class_private_field_get(_this, _storageKey).components.get("1" /* SDK.StorageKeyManager.StorageKeyComponent.NONCE_HIGH */ ));
                        topLevelSiteIsOpaque = Boolean(_class_private_field_get(_this, _storageKey).components.get("4" /* SDK.StorageKeyManager.StorageKeyComponent.TOP_LEVEL_SITE_OPAQUE_NONCE_HIGH */ ));
                        topLevelSite = _class_private_field_get(_this, _storageKey).components.get("0" /* SDK.StorageKeyManager.StorageKeyComponent.TOP_LEVEL_SITE */ );
                        thirdPartyReason = ancestorChainHasCrossSite ? i18nString(UIStrings.yesBecauseAncestorChainHasCrossSite) : hasNonce ? i18nString(UIStrings.yesBecauseKeyIsOpaque) : topLevelSiteIsOpaque ? i18nString(UIStrings.yesBecauseTopLevelIsOpaque) : topLevelSite && origin !== topLevelSite ? i18nString(UIStrings.yesBecauseOriginNotInTopLevelSite) : null;
                        // Disabled until https://crbug.com/1079231 is fixed.
                        // clang-format off
                        return [
                            2,
                            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html(_templateObject5(), _this.key(i18nString(UIStrings.origin)), _this.value(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html(_templateObject3(), origin, origin)), topLevelSite || topLevelSiteIsOpaque ? _this.key(i18nString(UIStrings.topLevelSite)) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing, topLevelSite ? _this.value(topLevelSite) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing, topLevelSiteIsOpaque ? _this.value(i18nString(UIStrings.opaque)) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing, thirdPartyReason ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html(_templateObject4(), _this.key(i18nString(UIStrings.isThirdParty)), _this.value(thirdPartyReason)) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing, hasNonce || topLevelSiteIsOpaque ? _this.key(i18nString(UIStrings.isOpaque)) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing, hasNonce ? _this.value(i18nString(UIStrings.yes)) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing, topLevelSiteIsOpaque ? _this.value(i18nString(UIStrings.yesBecauseTopLevelIsOpaque)) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing, _class_private_field_get(_this, _storageBucket) ? _class_private_method_get(_this, _renderStorageBucketInfo, renderStorageBucketInfo).call(_this) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing, _class_private_field_get(_this, _storageBucketsModel) ? _class_private_method_get(_this, _renderBucketControls, renderBucketControls).call(_this) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing)
                        ];
                    });
                // clang-format on
                })();
            }
        }
    ]);
    return StorageMetadataView;
}(_LegacyWrapper_LegacyWrapper_WrappableComponent = _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_4__.LegacyWrapper.WrappableComponent);
_define_property(StorageMetadataView, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.literal(_templateObject6()));
function renderStorageBucketInfo() {
    if (!_class_private_field_get(this, _storageBucket)) {
        throw new Error('Should not call #renderStorageBucketInfo if #bucket is null.');
    }
    var _$_class_private_field_get = _class_private_field_get(this, _storageBucket), name = _$_class_private_field_get.bucket.name, persistent = _$_class_private_field_get.persistent, durability = _$_class_private_field_get.durability, quota = _$_class_private_field_get.quota;
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html(_templateObject7(), this.key(i18nString(UIStrings.bucketName)), this.value(name || 'default'), this.key(i18nString(UIStrings.persistent)), this.value(persistent ? i18nString(UIStrings.yes) : i18nString(UIStrings.no)), this.key(i18nString(UIStrings.durability)), this.value(durability), this.key(i18nString(UIStrings.quota)), this.value(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.NumberUtilities.bytesToString(quota)), this.key(i18nString(UIStrings.expiration)), this.value(_class_private_method_get(this, _getExpirationString, getExpirationString).call(this)));
}
function getExpirationString() {
    if (!_class_private_field_get(this, _storageBucket)) {
        throw new Error('Should not call #getExpirationString if #bucket is null.');
    }
    var expiration = _class_private_field_get(this, _storageBucket).expiration;
    if (expiration === 0) {
        return i18nString(UIStrings.none);
    }
    return new Date(expiration * 1000).toLocaleString();
}
function renderBucketControls() {
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html(_templateObject8(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSection.litTagName, _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_3__.Button.Button.litTagName, i18nString(UIStrings.deleteBucket), "primary" /* Buttons.Button.Variant.PRIMARY */ , _class_private_method_get(this, _deleteBucket, deleteBucket), i18nString(UIStrings.deleteBucket), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_3__.Button.Button.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSection.litTagName);
// clang-format on
}
function deleteBucket() {
    return _deleteBucket1.apply(this, arguments);
}
function _deleteBucket1() {
    _deleteBucket1 = _async_to_generator(function() {
        var ok;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!_class_private_field_get(this, _storageBucketsModel) || !_class_private_field_get(this, _storageBucket)) {
                        throw new Error('Should not call #deleteBucket if #storageBucketsModel or #storageBucket is null.');
                    }
                    return [
                        4,
                        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.UIUtils.ConfirmDialog.show(i18nString(UIStrings.confirmBucketDeletion, {
                            PH1: _class_private_field_get(this, _storageBucket).bucket.name || ''
                        }), this, {
                            jslogContext: 'delete-bucket-confirmation'
                        })
                    ];
                case 1:
                    ok = _state.sent();
                    if (ok) {
                        _class_private_field_get(this, _storageBucketsModel).deleteBucket(_class_private_field_get(this, _storageBucket).bucket);
                    }
                    return [
                        2
                    ];
            }
        });
    });
    return _deleteBucket1.apply(this, arguments);
}
customElements.define('devtools-storage-metadata-view', StorageMetadataView); //# sourceMappingURL=StorageMetadataView.js.map


}),
"./ui/components/report_view/report_view.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ReportView: function() { return /* reexport module object */ _ReportView_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _ReportView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportView.js */ "./ui/components/report_view/ReportView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 //# sourceMappingURL=report_view.js.map


}),

}]);