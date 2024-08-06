"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_AppManifestView_js"], {
"./panels/application/AppManifestView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AppManifestView: function() { return AppManifestView; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/components/inline_editor/inline_editor.js */ "./ui/legacy/components/inline_editor/inline_editor.js");
/* harmony import */var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _appManifestView_css_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./appManifestView.css.js */ "./panels/application/appManifestView.css.js");
/* harmony import */var _components_components_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/components.js */ "./panels/application/components/components.js");
// Copyright (c) 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
     *@description Text in App Manifest View of the Application panel
     */ errorsAndWarnings: 'Errors and warnings',
    /**
     *@description Text in App Manifest View of the Application panel
     */ installability: 'Installability',
    /**
     *@description Text in App Manifest View of the Application panel
     */ identity: 'Identity',
    /**
     *@description Text in App Manifest View of the Application panel
     */ presentation: 'Presentation',
    /**
     *@description Text in App Manifest View of the Application panel
     */ protocolHandlers: 'Protocol Handlers',
    /**
     *@description Text in App Manifest View of the Application panel
     */ icons: 'Icons',
    /**
     *@description Text in App Manifest View of the Application panel
     */ windowControlsOverlay: 'Window Controls Overlay',
    /**
     *@description Label in the App Manifest View for the "name" property of web app or shortcut item
     */ name: 'Name',
    /**
     *@description Label in the App Manifest View for the "short_name" property of web app or shortcut item
     */ shortName: 'Short name',
    /**
     *@description Label in the App Manifest View for the "url" property of shortcut item
     */ url: 'URL',
    /**
     *@description Label in the App Manifest View for the Computed App Id
     */ computedAppId: 'Computed App ID',
    /**
     *@description Popup-text explaining what the App Id is used for.
     */ appIdExplainer: 'This is used by the browser to know whether the manifest should be updating an existing application, or whether it refers to a new web app that can be installed.',
    /**
     *@description Text which is a hyperlink to more documentation
     */ learnMore: 'Learn more',
    /**
     *@description Explanation why it is advisable to specify an 'id' field in the manifest.
     *@example {Note:} PH1
     *@example {id} PH2
     *@example {start_url} PH3
     *@example {id} PH4
     *@example {/index.html} PH5
     *@example {(button for copying suggested value into clipboard)} PH6
     */ appIdNote: '{PH1} {PH2} is not specified in the manifest, {PH3} is used instead. To specify an App ID that matches the current identity, set the {PH4} field to {PH5} {PH6}.',
    /**
     *@description Label for reminding the user of something important. Is shown in bold and followed by the actual note to show the user.
     */ note: 'Note:',
    /**
     *@description Tooltip text that appears when hovering over a button which copies the previous text to the clipboard.
     */ copyToClipboard: 'Copy suggested ID to clipboard',
    /**
     *@description Screen reader announcement string when the user clicks the copy to clipboard button.
     *@example {/index.html} PH1
     */ copiedToClipboard: 'Copied suggested ID {PH1} to clipboard',
    /**
     *@description Label in the App Manifest View for the "description" property of web app or shortcut item
     */ description: 'Description',
    /**
     *@description Text in App Manifest View of the Application panel
     */ startUrl: 'Start URL',
    /**
     *@description Text in App Manifest View of the Application panel
     */ themeColor: 'Theme color',
    /**
     *@description Text in App Manifest View of the Application panel
     */ backgroundColor: 'Background color',
    /**
     *@description Text for the orientation of something
     */ orientation: 'Orientation',
    /**
     *@description Title of the display attribute in App Manifest View of the Application panel
     * The display attribute defines the preferred display mode for the app such fullscreen or
     * standalone.
     * For more details see https://www.w3.org/TR/appmanifest/#display-member.
     */ display: 'Display',
    /**
     *@description Title of the new_note_url attribute in the Application panel
     */ newNoteUrl: 'New note URL',
    /**
     *@description Text in App Manifest View of the Application panel
     */ descriptionMayBeTruncated: 'Description may be truncated.',
    /**
     *@description Warning text about too many shortcuts
     */ shortcutsMayBeNotAvailable: 'The maximum number of shortcuts is platform dependent. Some shortcuts may be not available.',
    /**
     *@description Text in App Manifest View of the Application panel
     */ showOnlyTheMinimumSafeAreaFor: 'Show only the minimum safe area for maskable icons',
    /**
     *@description Link text for more information on maskable icons in App Manifest view of the Application panel
     */ documentationOnMaskableIcons: 'documentation on maskable icons',
    /**
     *@description Text wrapping a link pointing to more information on maskable icons in App Manifest view of the Application panel
     *@example {https://web.dev/maskable-icon/} PH1
     */ needHelpReadOurS: 'Need help? Read the {PH1}.',
    /**
     *@description Text in App Manifest View of the Application panel
     *@example {1} PH1
     */ shortcutS: 'Shortcut #{PH1}',
    /**
     *@description Text in App Manifest View of the Application panel
     *@example {1} PH1
     */ shortcutSShouldIncludeAXPixel: 'Shortcut #{PH1} should include a 96×96 pixel icon',
    /**
     *@description Text in App Manifest View of the Application panel
     *@example {1} PH1
     */ screenshotS: 'Screenshot #{PH1}',
    /**
     *@description Manifest installability error in the Application panel
     */ pageIsNotLoadedInTheMainFrame: 'Page is not loaded in the main frame',
    /**
     *@description Manifest installability error in the Application panel
     */ pageIsNotServedFromASecureOrigin: 'Page is not served from a secure origin',
    /**
     *@description Manifest installability error in the Application panel
     */ pageHasNoManifestLinkUrl: 'Page has no manifest <link> `URL`',
    /**
     *@description Manifest installability error in the Application panel
     */ manifestCouldNotBeFetchedIsEmpty: 'Manifest could not be fetched, is empty, or could not be parsed',
    /**
     *@description Manifest installability error in the Application panel
     */ manifestStartUrlIsNotValid: 'Manifest \'`start_url`\' is not valid',
    /**
     *@description Manifest installability error in the Application panel
     */ manifestDoesNotContainANameOr: 'Manifest does not contain a \'`name`\' or \'`short_name`\' field',
    /**
     *@description Manifest installability error in the Application panel
     */ manifestDisplayPropertyMustBeOne: 'Manifest \'`display`\' property must be one of \'`standalone`\', \'`fullscreen`\', or \'`minimal-ui`\'',
    /**
     *@description Manifest installability error in the Application panel
     *@example {100} PH1
     */ manifestDoesNotContainASuitable: 'Manifest does not contain a suitable icon—PNG, SVG, or WebP format of at least {PH1}px is required, the \'`sizes`\' attribute must be set, and the \'`purpose`\' attribute, if set, must include \'`any`\'.',
    /**
     *@description Manifest installability error in the Application panel
     */ avoidPurposeAnyAndMaskable: 'Declaring an icon with \'`purpose`\' of \'`any maskable`\' is discouraged. It is likely to look incorrect on some platforms due to too much or too little padding.',
    /**
     *@description Manifest installability error in the Application panel
     *@example {100} PH1
     */ noSuppliedIconIsAtLeastSpxSquare: 'No supplied icon is at least {PH1} pixels square in `PNG`, `SVG`, or `WebP` format, with the purpose attribute unset or set to \'`any`\'.',
    /**
     *@description Manifest installability error in the Application panel
     */ couldNotDownloadARequiredIcon: 'Could not download a required icon from the manifest',
    /**
     *@description Manifest installability error in the Application panel
     */ downloadedIconWasEmptyOr: 'Downloaded icon was empty or corrupted',
    /**
     *@description Manifest installability error in the Application panel
     */ theSpecifiedApplicationPlatform: 'The specified application platform is not supported on Android',
    /**
     *@description Manifest installability error in the Application panel
     */ noPlayStoreIdProvided: 'No Play store ID provided',
    /**
     *@description Manifest installability error in the Application panel
     */ thePlayStoreAppUrlAndPlayStoreId: 'The Play Store app URL and Play Store ID do not match',
    /**
     *@description Manifest installability error in the Application panel
     */ theAppIsAlreadyInstalled: 'The app is already installed',
    /**
     *@description Manifest installability error in the Application panel
     */ aUrlInTheManifestContainsA: 'A URL in the manifest contains a username, password, or port',
    /**
     *@description Manifest installability error in the Application panel
     */ pageIsLoadedInAnIncognitoWindow: 'Page is loaded in an incognito window',
    /**
     *@description Manifest installability error in the Application panel
     */ pageDoesNotWorkOffline: 'Page does not work offline',
    /**
     *@description Manifest installability error in the Application panel
     */ couldNotCheckServiceWorker: 'Could not check `service worker` without a \'`start_url`\' field in the manifest',
    /**
     *@description Manifest installability error in the Application panel
     */ manifestSpecifies: 'Manifest specifies \'`prefer_related_applications`: true\'',
    /**
     *@description Manifest installability error in the Application panel
     */ preferrelatedapplicationsIsOnly: '\'`prefer_related_applications`\' is only supported on `Chrome` Beta and Stable channels on `Android`.',
    /**
     *@description Manifest installability error in the Application panel
     */ manifestContainsDisplayoverride: 'Manifest contains \'`display_override`\' field, and the first supported display mode must be one of \'`standalone`\', \'`fullscreen`\', or \'`minimal-ui`\'',
    /**
     *@description Warning message for offline capability check
     *@example {https://developer.chrome.com/blog/improved-pwa-offline-detection} PH1
     */ pageDoesNotWorkOfflineThePage: 'Page does not work offline. Starting in Chrome 93, the installability criteria are changing, and this site will not be installable. See {PH1} for more information.',
    /**
     *@description Text to indicate the source of an image
     *@example {example.com} PH1
     */ imageFromS: 'Image from {PH1}',
    /**
     *@description Text for one or a group of screenshots
     */ screenshot: 'Screenshot',
    /**
     *@description Label in the App Manifest View for the "form_factor" property of screenshot
     */ formFactor: 'Form factor',
    /**
     *@description Label in the App Manifest View for the "label" property of screenshot
     */ label: 'Label',
    /**
     *@description Label in the App Manifest View for the "platform" property of screenshot
     */ platform: 'Platform',
    /**
     *@description Text in App Manifest View of the Application panel
     */ icon: 'Icon',
    /**
     * @description This is a warning message telling the user about a problem where the src attribute
     * of an image has not be entered/provided correctly. 'src' is part of the DOM API and should not
     * be translated.
     * @example {ImageName} PH1
     */ sSrcIsNotSet: '{PH1} \'`src`\' is not set',
    /**
     *@description Warning message for image resources from the manifest
     *@example {Screenshot} PH1
     *@example {https://example.com/image.png} PH2
     */ sUrlSFailedToParse: '{PH1} URL \'\'{PH2}\'\' failed to parse',
    /**
     *@description Warning message for image resources from the manifest
     *@example {Image} PH1
     *@example {https://example.com/image.png} PH2
     */ sSFailedToLoad: '{PH1} {PH2} failed to load',
    /**
     *@description Warning message for image resources from the manifest
     *@example {Image} PH1
     *@example {https://example.com/image.png} PH2
     */ sSDoesNotSpecifyItsSizeInThe: '{PH1} {PH2} does not specify its size in the manifest',
    /**
     *@description Warning message for image resources from the manifest
     *@example {Image} PH1
     *@example {https://example.com/image.png} PH2
     */ sSShouldSpecifyItsSizeAs: '{PH1} {PH2} should specify its size as `[width]x[height]`',
    /**
     *@description Warning message for image resources from the manifest
     */ sSShouldHaveSquareIcon: 'Most operating systems require square icons. Please include at least one square icon in the array.',
    /**
     *@description Warning message for image resources from the manifest
     *@example {100} PH1
     *@example {100} PH2
     *@example {Image} PH3
     *@example {https://example.com/image.png} PH4
     *@example {200} PH5
     *@example {200} PH6
     */ actualSizeSspxOfSSDoesNotMatch: 'Actual size ({PH1}×{PH2})px of {PH3} {PH4} does not match specified size ({PH5}×{PH6}px)',
    /**
     *@description Warning message for image resources from the manifest
     *@example {100} PH1
     *@example {Image} PH2
     *@example {https://example.com/image.png} PH3
     *@example {200} PH4
     */ actualWidthSpxOfSSDoesNotMatch: 'Actual width ({PH1}px) of {PH2} {PH3} does not match specified width ({PH4}px)',
    /**
     *@description Warning message for image resources from the manifest
     *@example {100} PH1
     *@example {Image} PH2
     *@example {https://example.com/image.png} PH3
     *@example {100} PH4
     */ actualHeightSpxOfSSDoesNotMatch: 'Actual height ({PH1}px) of {PH2} {PH3} does not match specified height ({PH4}px)',
    /**
     *@description Warning message for image resources from the manifest
     *@example {Image} PH1
     *@example {https://example.com/image.png} PH2
     */ sSSizeShouldBeAtLeast320: '{PH1} {PH2} size should be at least 320×320',
    /**
     *@description Warning message for image resources from the manifest
     *@example {Image} PH1
     *@example {https://example.com/image.png} PH2
     */ sSSizeShouldBeAtMost3840: '{PH1} {PH2} size should be at most 3840×3840',
    /**
     *@description Warning message for image resources from the manifest
     *@example {Image} PH1
     *@example {https://example.com/image.png} PH2
     */ sSWidthDoesNotComplyWithRatioRequirement: '{PH1} {PH2} width can\'t be more than 2.3 times as long as the height',
    /**
     *@description Warning message for image resources from the manifest
     *@example {Image} PH1
     *@example {https://example.com/image.png} PH2
     */ sSHeightDoesNotComplyWithRatioRequirement: '{PH1} {PH2} height can\'t be more than 2.3 times as long as the width',
    /**
     *@description Manifest installability error in the Application panel
     *@example {https://example.com/image.png} url
     */ screenshotPixelSize: 'Screenshot {url} should specify a pixel size `[width]x[height]` instead of `any` as first size.',
    /**
     *@description Warning text about screenshots for Richer PWA Install UI on desktop
     */ noScreenshotsForRicherPWAInstallOnDesktop: 'Richer PWA Install UI won’t be available on desktop. Please add at least one screenshot with the `form_factor` set to `wide`.',
    /**
     *@description Warning text about screenshots for Richer PWA Install UI on mobile
     */ noScreenshotsForRicherPWAInstallOnMobile: 'Richer PWA Install UI won’t be available on mobile. Please add at least one screenshot for which `form_factor` is not set or set to a value other than `wide`.',
    /**
     *@description Warning text about too many screenshots for desktop
     */ tooManyScreenshotsForDesktop: 'No more than 8 screenshots will be displayed on desktop. The rest will be ignored.',
    /**
     *@description Warning text about too many screenshots for mobile
     */ tooManyScreenshotsForMobile: 'No more than 5 screenshots will be displayed on mobile. The rest will be ignored.',
    /**
     *@description Warning text about not all screenshots matching the appropriate form factor have the same aspect ratio
     */ screenshotsMustHaveSameAspectRatio: 'All screenshots with the same `form_factor` must have the same aspect ratio as the first screenshot with that `form_factor`. Some screenshots will be ignored.',
    /**
     *@description Message for Window Controls Overlay value succsessfully found with links to documnetation
     *@example {window-controls-overlay} PH1
     *@example {https://developer.mozilla.org/en-US/docs/Web/Manifest/display_override} PH2
     *@example {https://developer.mozilla.org/en-US/docs/Web/Manifest} PH3
     */ wcoFound: 'Chrome has successfully found the {PH1} value for the {PH2} field in the {PH3}.',
    /**
     *@description Message for Windows Control Overlay value not found with link to documentation
     *@example {https://developer.mozilla.org/en-US/docs/Web/Manifest/display_override} PH1
     */ wcoNotFound: 'Define {PH1} in the manifest to use the Window Controls Overlay API and customize your app\'s title bar.',
    /**
     *@description Link text for more information on customizing Window Controls Overlay title bar in the Application panel
     */ customizePwaTitleBar: 'Customize the window controls overlay of your PWA\'s title bar',
    /**
     *@description Text wrapping link to documentation on how to customize WCO title bar
     *@example {https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/window-controls-overlay} PH1
     */ wcoNeedHelpReadMore: 'Need help? Read {PH1}.',
    /**
     *@description Text for emulation OS selection dropdown
     */ selectWindowControlsOverlayEmulationOs: 'Emulate the Window Controls Overlay on'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/application/AppManifestView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
var AppManifestView = /*#__PURE__*/ function(_Common_ObjectWrapper_eventMixin) {
    "use strict";
    _inherits(AppManifestView, _Common_ObjectWrapper_eventMixin);
    var _super = _create_super(AppManifestView);
    function AppManifestView(emptyView, reportView, throttler) {
        _class_call_check(this, AppManifestView);
        var _this;
        _this = _super.call(this, true);
        _define_property(_assert_this_initialized(_this), "emptyView", void 0);
        _define_property(_assert_this_initialized(_this), "reportView", void 0);
        _define_property(_assert_this_initialized(_this), "errorsSection", void 0);
        _define_property(_assert_this_initialized(_this), "installabilitySection", void 0);
        _define_property(_assert_this_initialized(_this), "identitySection", void 0);
        _define_property(_assert_this_initialized(_this), "presentationSection", void 0);
        _define_property(_assert_this_initialized(_this), "iconsSection", void 0);
        _define_property(_assert_this_initialized(_this), "windowControlsSection", void 0);
        _define_property(_assert_this_initialized(_this), "protocolHandlersSection", void 0);
        _define_property(_assert_this_initialized(_this), "shortcutSections", void 0);
        _define_property(_assert_this_initialized(_this), "screenshotsSections", void 0);
        _define_property(_assert_this_initialized(_this), "nameField", void 0);
        _define_property(_assert_this_initialized(_this), "shortNameField", void 0);
        _define_property(_assert_this_initialized(_this), "descriptionField", void 0);
        _define_property(_assert_this_initialized(_this), "startURLField", void 0);
        _define_property(_assert_this_initialized(_this), "themeColorSwatch", void 0);
        _define_property(_assert_this_initialized(_this), "backgroundColorSwatch", void 0);
        _define_property(_assert_this_initialized(_this), "orientationField", void 0);
        _define_property(_assert_this_initialized(_this), "displayField", void 0);
        _define_property(_assert_this_initialized(_this), "newNoteUrlField", void 0);
        _define_property(_assert_this_initialized(_this), "throttler", void 0);
        _define_property(_assert_this_initialized(_this), "registeredListeners", void 0);
        _define_property(_assert_this_initialized(_this), "target", void 0);
        _define_property(_assert_this_initialized(_this), "resourceTreeModel", void 0);
        _define_property(_assert_this_initialized(_this), "serviceWorkerManager", void 0);
        _define_property(_assert_this_initialized(_this), "overlayModel", void 0);
        _define_property(_assert_this_initialized(_this), "protocolHandlersView", void 0);
        _this.contentElement.classList.add('manifest-container');
        _this.contentElement.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__.pane('manifest')));
        _this.emptyView = emptyView;
        _this.emptyView.appendLink('https://web.dev/add-manifest/');
        _this.emptyView.show(_this.contentElement);
        _this.emptyView.hideWidget();
        _this.reportView = reportView;
        _this.reportView.element.classList.add('manifest-view-header');
        _this.reportView.show(_this.contentElement);
        _this.reportView.hideWidget();
        _this.errorsSection = _this.reportView.appendSection(i18nString(UIStrings.errorsAndWarnings), undefined, 'errors-and-warnings');
        _this.installabilitySection = _this.reportView.appendSection(i18nString(UIStrings.installability), undefined, 'installability');
        _this.identitySection = _this.reportView.appendSection(i18nString(UIStrings.identity), 'undefined,identity');
        _this.presentationSection = _this.reportView.appendSection(i18nString(UIStrings.presentation), 'undefined,presentation');
        _this.protocolHandlersSection = _this.reportView.appendSection(i18nString(UIStrings.protocolHandlers), 'undefined,protocol-handlers');
        _this.protocolHandlersView = new _components_components_js__WEBPACK_IMPORTED_MODULE_11__.ProtocolHandlersView.ProtocolHandlersView();
        _this.protocolHandlersSection.appendFieldWithCustomView(_this.protocolHandlersView);
        _this.iconsSection = _this.reportView.appendSection(i18nString(UIStrings.icons), 'report-section-icons', 'icons');
        _this.windowControlsSection = _this.reportView.appendSection(UIStrings.windowControlsOverlay, undefined, 'window-controls-overlay');
        _this.shortcutSections = [];
        _this.screenshotsSections = [];
        _this.nameField = _this.identitySection.appendField(i18nString(UIStrings.name));
        _this.shortNameField = _this.identitySection.appendField(i18nString(UIStrings.shortName));
        _this.descriptionField = _this.identitySection.appendFlexedField(i18nString(UIStrings.description));
        _this.startURLField = _this.presentationSection.appendField(i18nString(UIStrings.startUrl));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.setLabel(_this.startURLField, i18nString(UIStrings.startUrl));
        var themeColorField = _this.presentationSection.appendField(i18nString(UIStrings.themeColor));
        _this.themeColorSwatch = new _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_6__.ColorSwatch.ColorSwatch();
        themeColorField.appendChild(_this.themeColorSwatch);
        var backgroundColorField = _this.presentationSection.appendField(i18nString(UIStrings.backgroundColor));
        _this.backgroundColorSwatch = new _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_6__.ColorSwatch.ColorSwatch();
        backgroundColorField.appendChild(_this.backgroundColorSwatch);
        _this.orientationField = _this.presentationSection.appendField(i18nString(UIStrings.orientation));
        _this.displayField = _this.presentationSection.appendField(i18nString(UIStrings.display));
        _this.newNoteUrlField = _this.presentationSection.appendField(i18nString(UIStrings.newNoteUrl));
        _this.throttler = throttler;
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().observeTargets(_assert_this_initialized(_this));
        _this.registeredListeners = [];
        return _this;
    }
    _create_class(AppManifestView, [
        {
            key: "getStaticSections",
            value: function getStaticSections() {
                return [
                    this.identitySection,
                    this.presentationSection,
                    this.protocolHandlersSection,
                    this.iconsSection,
                    this.windowControlsSection
                ];
            }
        },
        {
            key: "getManifestElement",
            value: function getManifestElement() {
                return this.reportView.getHeaderElement();
            }
        },
        {
            key: "targetAdded",
            value: function targetAdded(target) {
                var _this = this;
                if (target !== _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().primaryPageTarget()) {
                    return;
                }
                this.target = target;
                this.resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.ResourceTreeModel);
                this.serviceWorkerManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ServiceWorkerManager.ServiceWorkerManager);
                this.overlayModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.OverlayModel.OverlayModel);
                if (!this.resourceTreeModel || !this.serviceWorkerManager || !this.overlayModel) {
                    return;
                }
                void this.updateManifest(true);
                this.registeredListeners = [
                    this.resourceTreeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.Events.DOMContentLoaded, function() {
                        void _this.updateManifest(true);
                    }),
                    this.serviceWorkerManager.addEventListener("RegistrationUpdated" /* SDK.ServiceWorkerManager.Events.RegistrationUpdated */ , function() {
                        void _this.updateManifest(false);
                    })
                ];
            }
        },
        {
            key: "targetRemoved",
            value: function targetRemoved(target) {
                if (this.target !== target) {
                    return;
                }
                if (!this.resourceTreeModel || !this.serviceWorkerManager || !this.overlayModel) {
                    return;
                }
                delete this.resourceTreeModel;
                delete this.serviceWorkerManager;
                delete this.overlayModel;
                _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.EventTarget.removeEventListeners(this.registeredListeners);
            }
        },
        {
            key: "updateManifest",
            value: function updateManifest(immediately) {
                var _this = this;
                return _async_to_generator(function() {
                    var _ref, _ref_, url, data, errors, installabilityErrors, appId;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!_this.resourceTreeModel) {
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    4,
                                    Promise.all([
                                        _this.resourceTreeModel.fetchAppManifest(),
                                        _this.resourceTreeModel.getInstallabilityErrors(),
                                        _this.resourceTreeModel.getAppId()
                                    ])
                                ];
                            case 1:
                                _ref = _sliced_to_array.apply(void 0, [
                                    _state.sent(),
                                    3
                                ]), _ref_ = _ref[0], url = _ref_.url, data = _ref_.data, errors = _ref_.errors, installabilityErrors = _ref[1], appId = _ref[2];
                                void _this.throttler.schedule(function() {
                                    return _this.renderManifest(url, data, errors, installabilityErrors, appId);
                                }, immediately ? "AsSoonAsPossible" /* Common.Throttler.Scheduling.AsSoonAsPossible */  : "Default" /* Common.Throttler.Scheduling.Default */ );
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "renderManifest",
            value: function renderManifest(url, data, errors, installabilityErrors, appIdResponse) {
                var _this = this;
                return _async_to_generator(function() {
                    var _this_newNoteUrlField_parentElement, appId, recommendedId, link, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, error, icon, parsedManifest, warnings, description, startURL, appIdField, helpIcon, learnMoreLink, suggestedIdNote, noteSpan, idSpan, idSpan2, startUrlSpan, suggestedIdSpan, copyButton, completeURL, link1, themeColor, backgroundColor, displayType, noteTaking, newNoteUrl, hasNewNoteUrl, completeURL1, link2, protocolHandlers, icons, shortcuts, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, shortcutsSection, screenshots, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, screenshotSection, imageErrors, setIconMaskedCheckbox, documentationLink, squareSizedIconAvailable, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, icon1, _imageErrors, result, err, shortcutIndex, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, shortcut, shortcutSection, urlField, shortcutUrl, link3, shortcutIcons, hasShorcutIconLargeEnough, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, shortcutIcon, _imageErrors1, _ref, shortcutIconErrors, shortcutIconSize, err, err, screenshotIndex, formFactorScreenshotDimensions, haveScreenshotsDifferentAspectRatio, _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, screenshot, _imageErrors2, screenshotSection1, _ref1, screenshotErrors, width, height, formFactorFirstScreenshotDimensions, err, screenshotsForDesktop, screenshotsForMobile, errorMessages, _iteratorNormalCompletion7, _didIteratorError7, _iteratorError7, _iterator7, _step7, error1, icon2, _iteratorNormalCompletion8, _didIteratorError8, _iteratorError8, _iterator8, _step8, warning, icon3, _iteratorNormalCompletion9, _didIteratorError9, _iteratorError9, _iterator9, _step9, error2, icon4, displayOverride, hasWco, displayOverrideLink, displayOverrideText, wcoStatusMessage, checkmarkIcon, wco, infoIcon, wcoDocumentationLink;
                    function stringProperty(name) {
                        var value = parsedManifest[name];
                        if (typeof value !== 'string') {
                            return '';
                        }
                        return value;
                    }
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                appId = (appIdResponse === null || appIdResponse === void 0 ? void 0 : appIdResponse.appId) || null;
                                recommendedId = (appIdResponse === null || appIdResponse === void 0 ? void 0 : appIdResponse.recommendedId) || null;
                                if ((!data || data === '{}') && !errors.length) {
                                    _this.emptyView.showWidget();
                                    _this.reportView.hideWidget();
                                    _this.dispatchEventToListeners("ManifestDetected" /* Events.ManifestDetected */ , false);
                                    return [
                                        2
                                    ];
                                }
                                _this.emptyView.hideWidget();
                                _this.reportView.showWidget();
                                _this.dispatchEventToListeners("ManifestDetected" /* Events.ManifestDetected */ , true);
                                link = _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.Linkifier.Linkifier.linkifyURL(url);
                                link.tabIndex = 0;
                                _this.reportView.setURL(link);
                                _this.errorsSection.clearContent();
                                _this.errorsSection.element.classList.toggle('hidden', !errors.length);
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = errors[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        error = _step.value;
                                        icon = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.createIconLabel({
                                            title: error.message,
                                            iconName: error.critical ? 'cross-circle-filled' : 'warning-filled',
                                            color: error.critical ? 'var(--icon-error)' : 'var(--icon-warning)'
                                        });
                                        _this.errorsSection.appendRow().appendChild(icon);
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
                                if (!data) {
                                    return [
                                        2
                                    ];
                                }
                                if (data.charCodeAt(0) === 0xFEFF) {
                                    data = data.slice(1);
                                } // Trim the BOM as per https://tools.ietf.org/html/rfc7159#section-8.1.
                                parsedManifest = JSON.parse(data);
                                _this.nameField.textContent = stringProperty('name');
                                _this.shortNameField.textContent = stringProperty('short_name');
                                warnings = [];
                                description = stringProperty('description');
                                _this.descriptionField.textContent = description;
                                // See https://crbug.com/1354304 for details.
                                if (description.length > 300) {
                                    warnings.push(i18nString(UIStrings.descriptionMayBeTruncated));
                                }
                                startURL = stringProperty('start_url');
                                if (appId && recommendedId) {
                                    appIdField = _this.identitySection.appendField(i18nString(UIStrings.computedAppId));
                                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.setLabel(appIdField, 'App Id');
                                    appIdField.textContent = appId;
                                    helpIcon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.create('help', 'inline-icon');
                                    helpIcon.title = i18nString(UIStrings.appIdExplainer);
                                    helpIcon.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__.action('help').track({
                                        hover: true
                                    })));
                                    appIdField.appendChild(helpIcon);
                                    learnMoreLink = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.XLink.XLink.create('https://developer.chrome.com/blog/pwa-manifest-id/', i18nString(UIStrings.learnMore), undefined, undefined, 'learn-more');
                                    appIdField.appendChild(learnMoreLink);
                                    if (!stringProperty('id')) {
                                        suggestedIdNote = appIdField.createChild('div', 'multiline-value');
                                        noteSpan = document.createElement('b');
                                        noteSpan.textContent = i18nString(UIStrings.note);
                                        idSpan = document.createElement('code');
                                        idSpan.textContent = 'id';
                                        idSpan2 = document.createElement('code');
                                        idSpan2.textContent = 'id';
                                        startUrlSpan = document.createElement('code');
                                        startUrlSpan.textContent = 'start_url';
                                        suggestedIdSpan = document.createElement('code');
                                        suggestedIdSpan.textContent = recommendedId;
                                        copyButton = new _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button();
                                        copyButton.data = {
                                            variant: "icon" /* Buttons.Button.Variant.ICON */ ,
                                            iconName: 'copy',
                                            size: "SMALL" /* Buttons.Button.Size.SMALL */ ,
                                            jslogContext: 'manifest.copy-id',
                                            title: i18nString(UIStrings.copyToClipboard)
                                        };
                                        copyButton.className = 'inline-button';
                                        copyButton.addEventListener('click', function() {
                                            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.alert(i18nString(UIStrings.copiedToClipboard, {
                                                PH1: recommendedId
                                            }));
                                            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(recommendedId);
                                        });
                                        suggestedIdNote.appendChild(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getFormatLocalizedString(str_, UIStrings.appIdNote, {
                                            PH1: noteSpan,
                                            PH2: idSpan,
                                            PH3: startUrlSpan,
                                            PH4: idSpan2,
                                            PH5: suggestedIdSpan,
                                            PH6: copyButton
                                        }));
                                    }
                                } else {
                                    _this.identitySection.removeField(i18nString(UIStrings.computedAppId));
                                }
                                _this.startURLField.removeChildren();
                                if (startURL) {
                                    completeURL = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.completeURL(url, startURL);
                                    if (completeURL) {
                                        link1 = _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.Linkifier.Linkifier.linkifyURL(completeURL, {
                                            text: startURL
                                        });
                                        link1.tabIndex = 0;
                                        link1.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__.link('start-url').track({
                                            click: true
                                        })));
                                        _this.startURLField.appendChild(link1);
                                    }
                                }
                                _this.themeColorSwatch.classList.toggle('hidden', !stringProperty('theme_color'));
                                themeColor = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(stringProperty('theme_color') || 'white') || _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('white');
                                if (themeColor) {
                                    _this.themeColorSwatch.renderColor(themeColor);
                                }
                                _this.backgroundColorSwatch.classList.toggle('hidden', !stringProperty('background_color'));
                                backgroundColor = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(stringProperty('background_color') || 'white') || _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('white');
                                if (backgroundColor) {
                                    _this.backgroundColorSwatch.renderColor(backgroundColor);
                                }
                                _this.orientationField.textContent = stringProperty('orientation');
                                displayType = stringProperty('display');
                                _this.displayField.textContent = displayType;
                                noteTaking = parsedManifest['note_taking'] || {};
                                newNoteUrl = noteTaking['new_note_url'];
                                hasNewNoteUrl = typeof newNoteUrl === 'string';
                                (_this_newNoteUrlField_parentElement = _this.newNoteUrlField.parentElement) === null || _this_newNoteUrlField_parentElement === void 0 ? void 0 : _this_newNoteUrlField_parentElement.classList.toggle('hidden', !hasNewNoteUrl);
                                _this.newNoteUrlField.removeChildren();
                                if (hasNewNoteUrl) {
                                    completeURL1 = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.completeURL(url, newNoteUrl);
                                    link2 = _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.Linkifier.Linkifier.linkifyURL(completeURL1, {
                                        text: newNoteUrl
                                    });
                                    link2.tabIndex = 0;
                                    _this.newNoteUrlField.appendChild(link2);
                                }
                                protocolHandlers = parsedManifest['protocol_handlers'] || [];
                                _this.protocolHandlersView.data = {
                                    protocolHandlers: protocolHandlers,
                                    manifestLink: url
                                };
                                icons = parsedManifest['icons'] || [];
                                _this.iconsSection.clearContent();
                                shortcuts = parsedManifest['shortcuts'] || [];
                                _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                                try {
                                    for(_iterator1 = _this.shortcutSections[Symbol.iterator](); !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                        shortcutsSection = _step1.value;
                                        shortcutsSection.detach(/** overrideHideOnDetach= */ true);
                                    }
                                } catch (err) {
                                    _didIteratorError1 = true;
                                    _iteratorError1 = err;
                                } finally{
                                    try {
                                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                            _iterator1.return();
                                        }
                                    } finally{
                                        if (_didIteratorError1) {
                                            throw _iteratorError1;
                                        }
                                    }
                                }
                                screenshots = parsedManifest['screenshots'] || [];
                                _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                                try {
                                    for(_iterator2 = _this.screenshotsSections[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                                        screenshotSection = _step2.value;
                                        screenshotSection.detach(/** overrideHideOnDetach= */ true);
                                    }
                                } catch (err) {
                                    _didIteratorError2 = true;
                                    _iteratorError2 = err;
                                } finally{
                                    try {
                                        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                                            _iterator2.return();
                                        }
                                    } finally{
                                        if (_didIteratorError2) {
                                            throw _iteratorError2;
                                        }
                                    }
                                }
                                imageErrors = [];
                                setIconMaskedCheckbox = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.CheckboxLabel.create(i18nString(UIStrings.showOnlyTheMinimumSafeAreaFor));
                                setIconMaskedCheckbox.classList.add('mask-checkbox');
                                setIconMaskedCheckbox.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__.toggle('show-minimal-safe-area-for-maskable-icons').track({
                                    change: true
                                })));
                                setIconMaskedCheckbox.addEventListener('click', function() {
                                    _this.iconsSection.setIconMasked(setIconMaskedCheckbox.checkboxElement.checked);
                                });
                                _this.iconsSection.appendRow().appendChild(setIconMaskedCheckbox);
                                documentationLink = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.XLink.XLink.create('https://web.dev/maskable-icon/', i18nString(UIStrings.documentationOnMaskableIcons), undefined, undefined, 'learn-more');
                                _this.iconsSection.appendRow().appendChild(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getFormatLocalizedString(str_, UIStrings.needHelpReadOurS, {
                                    PH1: documentationLink
                                }));
                                squareSizedIconAvailable = false;
                                _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    6,
                                    7,
                                    8
                                ]);
                                _iterator3 = icons[Symbol.iterator]();
                                _state.label = 2;
                            case 2:
                                if (!!(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done)) return [
                                    3,
                                    5
                                ];
                                icon1 = _step3.value;
                                return [
                                    4,
                                    _this.appendImageResourceToSection(url, icon1, _this.iconsSection, /** isScreenshot= */ false)
                                ];
                            case 3:
                                result = _state.sent();
                                (_imageErrors = imageErrors).push.apply(_imageErrors, _to_consumable_array(result.imageResourceErrors));
                                squareSizedIconAvailable = result.squareSizedIconAvailable || squareSizedIconAvailable;
                                _state.label = 4;
                            case 4:
                                _iteratorNormalCompletion3 = true;
                                return [
                                    3,
                                    2
                                ];
                            case 5:
                                return [
                                    3,
                                    8
                                ];
                            case 6:
                                err = _state.sent();
                                _didIteratorError3 = true;
                                _iteratorError3 = err;
                                return [
                                    3,
                                    8
                                ];
                            case 7:
                                try {
                                    if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                                        _iterator3.return();
                                    }
                                } finally{
                                    if (_didIteratorError3) {
                                        throw _iteratorError3;
                                    }
                                }
                                return [
                                    7
                                ];
                            case 8:
                                if (!squareSizedIconAvailable) {
                                    imageErrors.push(i18nString(UIStrings.sSShouldHaveSquareIcon));
                                }
                                if (shortcuts.length > 4) {
                                    warnings.push(i18nString(UIStrings.shortcutsMayBeNotAvailable));
                                }
                                shortcutIndex = 1;
                                _iteratorNormalCompletion4 = true, _didIteratorError4 = false, _iteratorError4 = undefined;
                                _state.label = 9;
                            case 9:
                                _state.trys.push([
                                    9,
                                    21,
                                    22,
                                    23
                                ]);
                                _iterator4 = shortcuts[Symbol.iterator]();
                                _state.label = 10;
                            case 10:
                                if (!!(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done)) return [
                                    3,
                                    20
                                ];
                                shortcut = _step4.value;
                                shortcutSection = _this.reportView.appendSection(i18nString(UIStrings.shortcutS, {
                                    PH1: shortcutIndex
                                }));
                                shortcutSection.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__.section('shortcuts')));
                                _this.shortcutSections.push(shortcutSection);
                                shortcutSection.appendFlexedField(i18nString(UIStrings.name), shortcut.name);
                                if (shortcut.short_name) {
                                    shortcutSection.appendFlexedField(i18nString(UIStrings.shortName), shortcut.short_name);
                                }
                                if (shortcut.description) {
                                    shortcutSection.appendFlexedField(i18nString(UIStrings.description), shortcut.description);
                                }
                                urlField = shortcutSection.appendFlexedField(i18nString(UIStrings.url));
                                shortcutUrl = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.completeURL(url, shortcut.url);
                                link3 = _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.Linkifier.Linkifier.linkifyURL(shortcutUrl, {
                                    text: shortcut.url
                                });
                                link3.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__.link('shortcut').track({
                                    click: true
                                })));
                                link3.tabIndex = 0;
                                urlField.appendChild(link3);
                                shortcutIcons = shortcut.icons || [];
                                hasShorcutIconLargeEnough = false;
                                _iteratorNormalCompletion5 = true, _didIteratorError5 = false, _iteratorError5 = undefined;
                                _state.label = 11;
                            case 11:
                                _state.trys.push([
                                    11,
                                    16,
                                    17,
                                    18
                                ]);
                                _iterator5 = shortcutIcons[Symbol.iterator]();
                                _state.label = 12;
                            case 12:
                                if (!!(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done)) return [
                                    3,
                                    15
                                ];
                                shortcutIcon = _step5.value;
                                return [
                                    4,
                                    _this.appendImageResourceToSection(url, shortcutIcon, shortcutSection, /** isScreenshot= */ false)
                                ];
                            case 13:
                                _ref = _state.sent(), shortcutIconErrors = _ref.imageResourceErrors;
                                (_imageErrors1 = imageErrors).push.apply(_imageErrors1, _to_consumable_array(shortcutIconErrors));
                                if (!hasShorcutIconLargeEnough && shortcutIcon.sizes) {
                                    shortcutIconSize = shortcutIcon.sizes.match(/^(\d+)x(\d+)$/);
                                    if (shortcutIconSize && shortcutIconSize[1] >= 96 && shortcutIconSize[2] >= 96) {
                                        hasShorcutIconLargeEnough = true;
                                    }
                                }
                                _state.label = 14;
                            case 14:
                                _iteratorNormalCompletion5 = true;
                                return [
                                    3,
                                    12
                                ];
                            case 15:
                                return [
                                    3,
                                    18
                                ];
                            case 16:
                                err = _state.sent();
                                _didIteratorError5 = true;
                                _iteratorError5 = err;
                                return [
                                    3,
                                    18
                                ];
                            case 17:
                                try {
                                    if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                                        _iterator5.return();
                                    }
                                } finally{
                                    if (_didIteratorError5) {
                                        throw _iteratorError5;
                                    }
                                }
                                return [
                                    7
                                ];
                            case 18:
                                if (!hasShorcutIconLargeEnough) {
                                    imageErrors.push(i18nString(UIStrings.shortcutSShouldIncludeAXPixel, {
                                        PH1: shortcutIndex
                                    }));
                                }
                                shortcutIndex++;
                                _state.label = 19;
                            case 19:
                                _iteratorNormalCompletion4 = true;
                                return [
                                    3,
                                    10
                                ];
                            case 20:
                                return [
                                    3,
                                    23
                                ];
                            case 21:
                                err = _state.sent();
                                _didIteratorError4 = true;
                                _iteratorError4 = err;
                                return [
                                    3,
                                    23
                                ];
                            case 22:
                                try {
                                    if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                                        _iterator4.return();
                                    }
                                } finally{
                                    if (_didIteratorError4) {
                                        throw _iteratorError4;
                                    }
                                }
                                return [
                                    7
                                ];
                            case 23:
                                screenshotIndex = 1;
                                formFactorScreenshotDimensions = new Map();
                                haveScreenshotsDifferentAspectRatio = false;
                                _iteratorNormalCompletion6 = true, _didIteratorError6 = false, _iteratorError6 = undefined;
                                _state.label = 24;
                            case 24:
                                _state.trys.push([
                                    24,
                                    29,
                                    30,
                                    31
                                ]);
                                _iterator6 = screenshots[Symbol.iterator]();
                                _state.label = 25;
                            case 25:
                                if (!!(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done)) return [
                                    3,
                                    28
                                ];
                                screenshot = _step6.value;
                                screenshotSection1 = _this.reportView.appendSection(i18nString(UIStrings.screenshotS, {
                                    PH1: screenshotIndex
                                }));
                                _this.screenshotsSections.push(screenshotSection1);
                                if (screenshot.form_factor) {
                                    screenshotSection1.appendFlexedField(i18nString(UIStrings.formFactor), screenshot.form_factor);
                                }
                                if (screenshot.label) {
                                    screenshotSection1.appendFlexedField(i18nString(UIStrings.label), screenshot.label);
                                }
                                if (screenshot.platform) {
                                    screenshotSection1.appendFlexedField(i18nString(UIStrings.platform), screenshot.platform);
                                }
                                return [
                                    4,
                                    _this.appendImageResourceToSection(url, screenshot, screenshotSection1, /** isScreenshot= */ true)
                                ];
                            case 26:
                                _ref1 = _state.sent(), screenshotErrors = _ref1.imageResourceErrors, width = _ref1.naturalWidth, height = _ref1.naturalHeight;
                                (_imageErrors2 = imageErrors).push.apply(_imageErrors2, _to_consumable_array(screenshotErrors));
                                if (screenshot.form_factor && width && height) {
                                    formFactorScreenshotDimensions.has(screenshot.form_factor) || formFactorScreenshotDimensions.set(screenshot.form_factor, {
                                        width: width,
                                        height: height
                                    });
                                    formFactorFirstScreenshotDimensions = formFactorScreenshotDimensions.get(screenshot.form_factor);
                                    if (formFactorFirstScreenshotDimensions) {
                                        haveScreenshotsDifferentAspectRatio = haveScreenshotsDifferentAspectRatio || width * formFactorFirstScreenshotDimensions.height !== height * formFactorFirstScreenshotDimensions.width;
                                    }
                                }
                                screenshotIndex++;
                                _state.label = 27;
                            case 27:
                                _iteratorNormalCompletion6 = true;
                                return [
                                    3,
                                    25
                                ];
                            case 28:
                                return [
                                    3,
                                    31
                                ];
                            case 29:
                                err = _state.sent();
                                _didIteratorError6 = true;
                                _iteratorError6 = err;
                                return [
                                    3,
                                    31
                                ];
                            case 30:
                                try {
                                    if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
                                        _iterator6.return();
                                    }
                                } finally{
                                    if (_didIteratorError6) {
                                        throw _iteratorError6;
                                    }
                                }
                                return [
                                    7
                                ];
                            case 31:
                                if (haveScreenshotsDifferentAspectRatio) {
                                    warnings.push(i18nString(UIStrings.screenshotsMustHaveSameAspectRatio));
                                }
                                screenshotsForDesktop = screenshots.filter(function(screenshot) {
                                    return screenshot.form_factor === 'wide';
                                });
                                screenshotsForMobile = screenshots.filter(function(screenshot) {
                                    return screenshot.form_factor !== 'wide';
                                });
                                if (screenshotsForDesktop.length < 1) {
                                    warnings.push(i18nString(UIStrings.noScreenshotsForRicherPWAInstallOnDesktop));
                                }
                                if (screenshotsForMobile.length < 1) {
                                    warnings.push(i18nString(UIStrings.noScreenshotsForRicherPWAInstallOnMobile));
                                }
                                if (screenshotsForDesktop.length > 8) {
                                    warnings.push(i18nString(UIStrings.tooManyScreenshotsForDesktop));
                                }
                                if (screenshotsForMobile.length > 5) {
                                    warnings.push(i18nString(UIStrings.tooManyScreenshotsForMobile));
                                }
                                _this.installabilitySection.clearContent();
                                _this.installabilitySection.element.classList.toggle('hidden', !installabilityErrors.length);
                                errorMessages = _this.getInstallabilityErrorMessages(installabilityErrors);
                                _iteratorNormalCompletion7 = true, _didIteratorError7 = false, _iteratorError7 = undefined;
                                try {
                                    for(_iterator7 = errorMessages[Symbol.iterator](); !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true){
                                        error1 = _step7.value;
                                        icon2 = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.createIconLabel({
                                            title: error1,
                                            iconName: 'warning-filled',
                                            color: 'var(--icon-warning)'
                                        });
                                        _this.installabilitySection.appendRow().appendChild(icon2);
                                    }
                                } catch (err) {
                                    _didIteratorError7 = true;
                                    _iteratorError7 = err;
                                } finally{
                                    try {
                                        if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
                                            _iterator7.return();
                                        }
                                    } finally{
                                        if (_didIteratorError7) {
                                            throw _iteratorError7;
                                        }
                                    }
                                }
                                _this.errorsSection.element.classList.toggle('hidden', !errors.length && !imageErrors.length && !warnings.length);
                                _iteratorNormalCompletion8 = true, _didIteratorError8 = false, _iteratorError8 = undefined;
                                try {
                                    for(_iterator8 = warnings[Symbol.iterator](); !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true){
                                        warning = _step8.value;
                                        icon3 = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.createIconLabel({
                                            title: warning,
                                            iconName: 'warning-filled',
                                            color: 'var(--icon-warning)'
                                        });
                                        _this.errorsSection.appendRow().appendChild(icon3);
                                    }
                                } catch (err) {
                                    _didIteratorError8 = true;
                                    _iteratorError8 = err;
                                } finally{
                                    try {
                                        if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
                                            _iterator8.return();
                                        }
                                    } finally{
                                        if (_didIteratorError8) {
                                            throw _iteratorError8;
                                        }
                                    }
                                }
                                _iteratorNormalCompletion9 = true, _didIteratorError9 = false, _iteratorError9 = undefined;
                                try {
                                    for(_iterator9 = imageErrors[Symbol.iterator](); !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true){
                                        error2 = _step9.value;
                                        icon4 = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.createIconLabel({
                                            title: error2,
                                            iconName: 'warning-filled',
                                            color: 'var(--icon-warning)'
                                        });
                                        _this.errorsSection.appendRow().appendChild(icon4);
                                    }
                                } catch (err) {
                                    _didIteratorError9 = true;
                                    _iteratorError9 = err;
                                } finally{
                                    try {
                                        if (!_iteratorNormalCompletion9 && _iterator9.return != null) {
                                            _iterator9.return();
                                        }
                                    } finally{
                                        if (_didIteratorError9) {
                                            throw _iteratorError9;
                                        }
                                    }
                                }
                                _this.windowControlsSection.clearContent();
                                displayOverride = parsedManifest['display_override'] || [];
                                hasWco = displayOverride.includes('window-controls-overlay');
                                displayOverrideLink = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.XLink.XLink.create('https://developer.mozilla.org/en-US/docs/Web/Manifest/display_override', 'display-override', undefined, undefined, 'display-override');
                                displayOverrideText = document.createElement('code');
                                displayOverrideText.appendChild(displayOverrideLink);
                                wcoStatusMessage = _this.windowControlsSection.appendRow();
                                if (!hasWco) return [
                                    3,
                                    34
                                ];
                                checkmarkIcon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.create('check-circle', 'inline-icon');
                                wcoStatusMessage.appendChild(checkmarkIcon);
                                wco = document.createElement('code');
                                wco.classList.add('wco');
                                wco.textContent = 'window-controls-overlay';
                                wcoStatusMessage.appendChild(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getFormatLocalizedString(str_, UIStrings.wcoFound, {
                                    PH1: wco,
                                    PH2: displayOverrideText,
                                    PH3: link
                                }));
                                if (!_this.overlayModel) return [
                                    3,
                                    33
                                ];
                                return [
                                    4,
                                    _this.appendWindowControlsToSection(_this.overlayModel, url, stringProperty('theme_color'))
                                ];
                            case 32:
                                _state.sent();
                                _state.label = 33;
                            case 33:
                                return [
                                    3,
                                    35
                                ];
                            case 34:
                                infoIcon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.create('info', 'inline-icon');
                                wcoStatusMessage.appendChild(infoIcon);
                                wcoStatusMessage.appendChild(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getFormatLocalizedString(str_, UIStrings.wcoNotFound, {
                                    PH1: displayOverrideText
                                }));
                                _state.label = 35;
                            case 35:
                                wcoDocumentationLink = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.XLink.XLink.create('https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/window-controls-overlay', i18nString(UIStrings.customizePwaTitleBar), undefined, undefined, 'customize-pwa-tittle-bar');
                                _this.windowControlsSection.appendRow().appendChild(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getFormatLocalizedString(str_, UIStrings.wcoNeedHelpReadMore, {
                                    PH1: wcoDocumentationLink
                                }));
                                _this.dispatchEventToListeners("ManifestRendered" /* Events.ManifestRendered */ );
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getInstallabilityErrorMessages",
            value: function getInstallabilityErrorMessages(installabilityErrors) {
                var errorMessages = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = installabilityErrors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var installabilityError = _step.value;
                        var errorMessage = void 0;
                        switch(installabilityError.errorId){
                            case 'not-in-main-frame':
                                errorMessage = i18nString(UIStrings.pageIsNotLoadedInTheMainFrame);
                                break;
                            case 'not-from-secure-origin':
                                errorMessage = i18nString(UIStrings.pageIsNotServedFromASecureOrigin);
                                break;
                            case 'no-manifest':
                                errorMessage = i18nString(UIStrings.pageHasNoManifestLinkUrl);
                                break;
                            case 'manifest-empty':
                                errorMessage = i18nString(UIStrings.manifestCouldNotBeFetchedIsEmpty);
                                break;
                            case 'start-url-not-valid':
                                errorMessage = i18nString(UIStrings.manifestStartUrlIsNotValid);
                                break;
                            case 'manifest-missing-name-or-short-name':
                                errorMessage = i18nString(UIStrings.manifestDoesNotContainANameOr);
                                break;
                            case 'manifest-display-not-supported':
                                errorMessage = i18nString(UIStrings.manifestDisplayPropertyMustBeOne);
                                break;
                            case 'manifest-missing-suitable-icon':
                                if (installabilityError.errorArguments.length !== 1 || installabilityError.errorArguments[0].name !== 'minimum-icon-size-in-pixels') {
                                    console.error('Installability error does not have the correct errorArguments');
                                    break;
                                }
                                errorMessage = i18nString(UIStrings.manifestDoesNotContainASuitable, {
                                    PH1: installabilityError.errorArguments[0].value
                                });
                                break;
                            case 'no-acceptable-icon':
                                if (installabilityError.errorArguments.length !== 1 || installabilityError.errorArguments[0].name !== 'minimum-icon-size-in-pixels') {
                                    console.error('Installability error does not have the correct errorArguments');
                                    break;
                                }
                                errorMessage = i18nString(UIStrings.noSuppliedIconIsAtLeastSpxSquare, {
                                    PH1: installabilityError.errorArguments[0].value
                                });
                                break;
                            case 'cannot-download-icon':
                                errorMessage = i18nString(UIStrings.couldNotDownloadARequiredIcon);
                                break;
                            case 'no-icon-available':
                                errorMessage = i18nString(UIStrings.downloadedIconWasEmptyOr);
                                break;
                            case 'platform-not-supported-on-android':
                                errorMessage = i18nString(UIStrings.theSpecifiedApplicationPlatform);
                                break;
                            case 'no-id-specified':
                                errorMessage = i18nString(UIStrings.noPlayStoreIdProvided);
                                break;
                            case 'ids-do-not-match':
                                errorMessage = i18nString(UIStrings.thePlayStoreAppUrlAndPlayStoreId);
                                break;
                            case 'already-installed':
                                errorMessage = i18nString(UIStrings.theAppIsAlreadyInstalled);
                                break;
                            case 'url-not-supported-for-webapk':
                                errorMessage = i18nString(UIStrings.aUrlInTheManifestContainsA);
                                break;
                            case 'in-incognito':
                                errorMessage = i18nString(UIStrings.pageIsLoadedInAnIncognitoWindow);
                                break;
                            case 'not-offline-capable':
                                errorMessage = i18nString(UIStrings.pageDoesNotWorkOffline);
                                break;
                            case 'no-url-for-service-worker':
                                errorMessage = i18nString(UIStrings.couldNotCheckServiceWorker);
                                break;
                            case 'prefer-related-applications':
                                errorMessage = i18nString(UIStrings.manifestSpecifies);
                                break;
                            case 'prefer-related-applications-only-beta-stable':
                                errorMessage = i18nString(UIStrings.preferrelatedapplicationsIsOnly);
                                break;
                            case 'manifest-display-override-not-supported':
                                errorMessage = i18nString(UIStrings.manifestContainsDisplayoverride);
                                break;
                            case 'warn-not-offline-capable':
                                errorMessage = i18nString(UIStrings.pageDoesNotWorkOfflineThePage, {
                                    PH1: 'https://developer.chrome.com/blog/improved-pwa-offline-detection/'
                                });
                                break;
                            default:
                                console.error("Installability error id '".concat(installabilityError.errorId, "' is not recognized"));
                                break;
                        }
                        if (errorMessage) {
                            errorMessages.push(errorMessage);
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
                return errorMessages;
            }
        },
        {
            key: "loadImage",
            value: function loadImage(url) {
                return _async_to_generator(function() {
                    var wrapper, image, result, e;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                wrapper = document.createElement('div');
                                wrapper.classList.add('image-wrapper');
                                image = document.createElement('img');
                                result = new Promise(function(resolve, reject) {
                                    image.onload = resolve;
                                    image.onerror = reject;
                                });
                                image.src = url;
                                image.alt = i18nString(UIStrings.imageFromS, {
                                    PH1: url
                                });
                                wrapper.appendChild(image);
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    3,
                                    ,
                                    4
                                ]);
                                return [
                                    4,
                                    result
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    2,
                                    {
                                        wrapper: wrapper,
                                        image: image
                                    }
                                ];
                            case 3:
                                e = _state.sent();
                                return [
                                    3,
                                    4
                                ];
                            case 4:
                                return [
                                    2,
                                    null
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "parseSizes",
            value: function parseSizes(sizes, resourceName, imageUrl, imageResourceErrors) {
                var rawSizeArray = sizes ? sizes.split(/\s+/) : [];
                var parsedSizes = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = rawSizeArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var size = _step.value;
                        if (size === 'any') {
                            if (!parsedSizes.find(function(x) {
                                return 'any' in x;
                            })) {
                                parsedSizes.push({
                                    any: 'any',
                                    formatted: 'any'
                                });
                            }
                            continue;
                        }
                        var match = size.match(RegExp("^(?<width>\\d+)[xX](?<height>\\d+)$"));
                        if (match) {
                            var _match_groups, _match_groups1;
                            var width = parseInt(((_match_groups = match.groups) === null || _match_groups === void 0 ? void 0 : _match_groups.width) || '', 10);
                            var height = parseInt(((_match_groups1 = match.groups) === null || _match_groups1 === void 0 ? void 0 : _match_groups1.height) || '', 10);
                            var formatted = "".concat(width, "\xd7").concat(height, "px");
                            parsedSizes.push({
                                width: width,
                                height: height,
                                formatted: formatted
                            });
                        } else {
                            imageResourceErrors.push(i18nString(UIStrings.sSShouldSpecifyItsSizeAs, {
                                PH1: resourceName,
                                PH2: imageUrl
                            }));
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
                return parsedSizes;
            }
        },
        {
            key: "checkSizeProblem",
            value: function checkSizeProblem(size, type, image, resourceName, imageUrl) {
                if ('any' in size) {
                    return {
                        hasSquareSize: image.naturalWidth === image.naturalHeight
                    };
                }
                var hasSquareSize = size.width === size.height;
                if (image.naturalWidth !== size.width && image.naturalHeight !== size.height) {
                    return {
                        error: i18nString(UIStrings.actualSizeSspxOfSSDoesNotMatch, {
                            PH1: image.naturalWidth,
                            PH2: image.naturalHeight,
                            PH3: resourceName,
                            PH4: imageUrl,
                            PH5: size.width,
                            PH6: size.height
                        }),
                        hasSquareSize: hasSquareSize
                    };
                }
                if (image.naturalWidth !== size.width) {
                    return {
                        error: i18nString(UIStrings.actualWidthSpxOfSSDoesNotMatch, {
                            PH1: image.naturalWidth,
                            PH2: resourceName,
                            PH3: imageUrl,
                            PH4: size.width
                        }),
                        hasSquareSize: hasSquareSize
                    };
                }
                if (image.naturalHeight !== size.height) {
                    return {
                        error: i18nString(UIStrings.actualHeightSpxOfSSDoesNotMatch, {
                            PH1: image.naturalHeight,
                            PH2: resourceName,
                            PH3: imageUrl,
                            PH4: size.height
                        }),
                        hasSquareSize: hasSquareSize
                    };
                }
                return {
                    hasSquareSize: hasSquareSize
                };
            }
        },
        {
            key: "appendImageResourceToSection",
            value: function appendImageResourceToSection(// TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            baseUrl, imageResource, section, isScreenshot) {
                var _this = this;
                return _async_to_generator(function() {
                    var imageResourceErrors, resourceName, imageUrl, result, wrapper, image, naturalWidth, naturalHeight, sizes, title, field, squareSizedIconAvailable, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, size, _this_checkSizeProblem, error, hasSquareSize, width, height, purpose;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                imageResourceErrors = [];
                                resourceName = isScreenshot ? i18nString(UIStrings.screenshot) : i18nString(UIStrings.icon);
                                if (!imageResource.src) {
                                    imageResourceErrors.push(i18nString(UIStrings.sSrcIsNotSet, {
                                        PH1: resourceName
                                    }));
                                    return [
                                        2,
                                        {
                                            imageResourceErrors: imageResourceErrors
                                        }
                                    ];
                                }
                                imageUrl = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.completeURL(baseUrl, imageResource['src']);
                                if (!imageUrl) {
                                    imageResourceErrors.push(i18nString(UIStrings.sUrlSFailedToParse, {
                                        PH1: resourceName,
                                        PH2: imageResource['src']
                                    }));
                                    return [
                                        2,
                                        {
                                            imageResourceErrors: imageResourceErrors
                                        }
                                    ];
                                }
                                return [
                                    4,
                                    _this.loadImage(imageUrl)
                                ];
                            case 1:
                                result = _state.sent();
                                if (!result) {
                                    imageResourceErrors.push(i18nString(UIStrings.sSFailedToLoad, {
                                        PH1: resourceName,
                                        PH2: imageUrl
                                    }));
                                    return [
                                        2,
                                        {
                                            imageResourceErrors: imageResourceErrors
                                        }
                                    ];
                                }
                                wrapper = result.wrapper, image = result.image;
                                naturalWidth = image.naturalWidth, naturalHeight = image.naturalHeight;
                                sizes = _this.parseSizes(imageResource['sizes'], resourceName, imageUrl, imageResourceErrors);
                                title = sizes.map(function(x) {
                                    return x.formatted;
                                }).join(' ') + '\n' + (imageResource['type'] || '');
                                field = section.appendFlexedField(title);
                                squareSizedIconAvailable = false;
                                if (!imageResource.sizes) {
                                    imageResourceErrors.push(i18nString(UIStrings.sSDoesNotSpecifyItsSizeInThe, {
                                        PH1: resourceName,
                                        PH2: imageUrl
                                    }));
                                } else {
                                    if (isScreenshot && sizes.length > 0 && 'any' in sizes[0]) {
                                        imageResourceErrors.push(i18nString(UIStrings.screenshotPixelSize, {
                                            url: imageUrl
                                        }));
                                    }
                                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                    try {
                                        for(_iterator = sizes[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                            size = _step.value;
                                            _this_checkSizeProblem = _this.checkSizeProblem(size, imageResource['type'], image, resourceName, imageUrl), error = _this_checkSizeProblem.error, hasSquareSize = _this_checkSizeProblem.hasSquareSize;
                                            squareSizedIconAvailable = squareSizedIconAvailable || hasSquareSize;
                                            if (error) {
                                                imageResourceErrors.push(error);
                                            } else if (isScreenshot) {
                                                width = 'any' in size ? image.naturalWidth : size.width;
                                                height = 'any' in size ? image.naturalHeight : size.height;
                                                if (width < 320 || height < 320) {
                                                    imageResourceErrors.push(i18nString(UIStrings.sSSizeShouldBeAtLeast320, {
                                                        PH1: resourceName,
                                                        PH2: imageUrl
                                                    }));
                                                } else if (width > 3840 || height > 3840) {
                                                    imageResourceErrors.push(i18nString(UIStrings.sSSizeShouldBeAtMost3840, {
                                                        PH1: resourceName,
                                                        PH2: imageUrl
                                                    }));
                                                } else if (width > height * 2.3) {
                                                    imageResourceErrors.push(i18nString(UIStrings.sSWidthDoesNotComplyWithRatioRequirement, {
                                                        PH1: resourceName,
                                                        PH2: imageUrl
                                                    }));
                                                } else if (height > width * 2.3) {
                                                    imageResourceErrors.push(i18nString(UIStrings.sSHeightDoesNotComplyWithRatioRequirement, {
                                                        PH1: resourceName,
                                                        PH2: imageUrl
                                                    }));
                                                }
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
                                }
                                image.width = image.naturalWidth;
                                purpose = typeof imageResource['purpose'] === 'string' ? imageResource['purpose'].toLowerCase() : '';
                                if (purpose.includes('any') && purpose.includes('maskable')) {
                                    imageResourceErrors.push(i18nString(UIStrings.avoidPurposeAnyAndMaskable));
                                }
                                field.appendChild(wrapper);
                                return [
                                    2,
                                    {
                                        imageResourceErrors: imageResourceErrors,
                                        squareSizedIconAvailable: squareSizedIconAvailable,
                                        naturalWidth: naturalWidth,
                                        naturalHeight: naturalHeight
                                    }
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(AppManifestView.prototype), "wasShown", this).call(this);
                this.reportView.registerCSSFiles([
                    _appManifestView_css_js__WEBPACK_IMPORTED_MODULE_10__["default"]
                ]);
                this.registerCSSFiles([
                    _appManifestView_css_js__WEBPACK_IMPORTED_MODULE_10__["default"]
                ]);
            }
        },
        {
            key: "appendWindowControlsToSection",
            value: function appendWindowControlsToSection(overlayModel, url, themeColor) {
                var _this = this;
                return _async_to_generator(function() {
                    var wcoStyleSheetText, wcoOsCheckbox, osSelectElement, _this_overlayModel;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    overlayModel.hasStyleSheetText(url)
                                ];
                            case 1:
                                wcoStyleSheetText = _state.sent();
                                if (!wcoStyleSheetText) {
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    4,
                                    overlayModel.toggleWindowControlsToolbar(false)
                                ];
                            case 2:
                                _state.sent();
                                wcoOsCheckbox = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.CheckboxLabel.create(i18nString(UIStrings.selectWindowControlsOverlayEmulationOs), false);
                                wcoOsCheckbox.checkboxElement.addEventListener('click', /*#__PURE__*/ _async_to_generator(function() {
                                    var _this_overlayModel;
                                    return _ts_generator(this, function(_state) {
                                        switch(_state.label){
                                            case 0:
                                                return [
                                                    4,
                                                    (_this_overlayModel = _this.overlayModel) === null || _this_overlayModel === void 0 ? void 0 : _this_overlayModel.toggleWindowControlsToolbar(wcoOsCheckbox.checkboxElement.checked)
                                                ];
                                            case 1:
                                                _state.sent();
                                                return [
                                                    2
                                                ];
                                        }
                                    });
                                }));
                                osSelectElement = wcoOsCheckbox.createChild('select', 'chrome-select');
                                osSelectElement.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.createOption('Windows', "Windows" /* SDK.OverlayModel.EmulatedOSType.WindowsOS */ , 'windows'));
                                osSelectElement.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.createOption('macOS', "Mac" /* SDK.OverlayModel.EmulatedOSType.MacOS */ , 'macos'));
                                osSelectElement.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.createOption('Linux', "Linux" /* SDK.OverlayModel.EmulatedOSType.LinuxOS */ , 'linux'));
                                osSelectElement.selectedIndex = 0;
                                if (_this.overlayModel) {
                                    ;
                                    osSelectElement.value = (_this_overlayModel = _this.overlayModel) === null || _this_overlayModel === void 0 ? void 0 : _this_overlayModel.getWindowControlsConfig().selectedPlatform;
                                }
                                osSelectElement.addEventListener('change', /*#__PURE__*/ _async_to_generator(function() {
                                    var selectedOS;
                                    return _ts_generator(this, function(_state) {
                                        switch(_state.label){
                                            case 0:
                                                selectedOS = osSelectElement.options[osSelectElement.selectedIndex].value;
                                                if (!_this.overlayModel) return [
                                                    3,
                                                    2
                                                ];
                                                _this.overlayModel.setWindowControlsPlatform(selectedOS);
                                                return [
                                                    4,
                                                    _this.overlayModel.toggleWindowControlsToolbar(wcoOsCheckbox.checkboxElement.checked)
                                                ];
                                            case 1:
                                                _state.sent();
                                                _state.label = 2;
                                            case 2:
                                                return [
                                                    2
                                                ];
                                        }
                                    });
                                }));
                                _this.windowControlsSection.appendRow().appendChild(wcoOsCheckbox);
                                overlayModel.setWindowControlsThemeColor(themeColor);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return AppManifestView;
} //# sourceMappingURL=AppManifestView.js.map
(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Widget.VBox));


}),
"./panels/application/appManifestView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright 2016 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n.report-field-name {\n  flex-basis: 152px;\n}\n\n.manifest-view-header {\n  min-width: 600px;\n  flex-shrink: 0;\n  flex-grow: 0;\n}\n\n.manifest-container {\n  overflow: auto;\n}\n\n.inline-icon {\n  margin-inline: 4px;\n  width: 16px;\n  height: 16px;\n\n  &[name="check-circle"] {\n    color: var(--icon-checkmark-green);\n  }\n}\n\n.multiline-value {\n  white-space: normal;\n}\n\n.chrome-select {\n  margin: 4px;\n}\n\n.inline-button {\n  vertical-align: sub;\n}\n\n/*# sourceURL=appManifestView.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);