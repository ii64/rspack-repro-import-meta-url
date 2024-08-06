"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_media_PlayerPropertiesView_js"], {
"./panels/media/PlayerPropertiesView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AttributesView: function() { return AttributesView; },
  AudioTrackManager: function() { return AudioTrackManager; },
  DefaultPropertyRenderer: function() { return DefaultPropertyRenderer; },
  DimensionPropertyRenderer: function() { return DimensionPropertyRenderer; },
  FormattedPropertyRenderer: function() { return FormattedPropertyRenderer; },
  NestedPropertyRenderer: function() { return NestedPropertyRenderer; },
  PlayerPropertiesView: function() { return PlayerPropertiesView; },
  PropertyRenderer: function() { return PropertyRenderer; },
  TextTrackManager: function() { return TextTrackManager; },
  TrackManager: function() { return TrackManager; },
  VideoTrackManager: function() { return VideoTrackManager; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./ui/legacy/components/source_frame/source_frame.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _playerPropertiesView_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./playerPropertiesView.css.js */ "./panels/media/playerPropertiesView.css.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
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






var UIStrings = {
    /**
     *@description The type of media, for example - video, audio, or text. Capitalized.
     */ video: 'Video',
    /**
     *@description The type of media, for example - video, audio, or text. Capitalized.
     */ audio: 'Audio',
    /**
     *@description A video or audio stream - but capitalized.
     */ track: 'Track',
    /**
     *@description A device that converts media files into playable streams of audio or video.
     */ decoder: 'Decoder',
    /**
     *@description Title of the 'Properties' tool in the sidebar of the elements tool
     */ properties: 'Properties',
    /**
     *@description Menu label for text tracks, it is followed by a number, like 'Text Track #1'
     */ textTrack: 'Text track',
    /**
     * @description Placeholder text stating that there are no text tracks on this player. A text track
     * is all of the text that accompanies a particular video.
     */ noTextTracks: 'No text tracks',
    /**
     *@description Media property giving the width x height of the video
     */ resolution: 'Resolution',
    /**
     *@description Media property giving the file size of the media
     */ fileSize: 'File size',
    /**
     *@description Media property giving the media file bitrate
     */ bitrate: 'Bitrate',
    /**
     *@description Text for the duration of something
     */ duration: 'Duration',
    /**
     *@description The label for a timestamp when a video was started.
     */ startTime: 'Start time',
    /**
     *@description Media property signaling whether the media is streaming
     */ streaming: 'Streaming',
    /**
     *@description Media property describing where the media is playing from.
     */ playbackFrameUrl: 'Playback frame URL',
    /**
     *@description Media property giving the title of the frame where the media is embedded
     */ playbackFrameTitle: 'Playback frame title',
    /**
     *@description Media property describing whether the file is single or cross origin in nature
     */ singleoriginPlayback: 'Single-origin playback',
    /**
     *@description Media property describing support for range http headers
     */ rangeHeaderSupport: '`Range` header support',
    /**
     *@description Media property giving the media file frame rate
     */ frameRate: 'Frame rate',
    /**
     * @description Media property giving the distance of the playback quality from the ideal playback.
     * Roughness is the opposite to smoothness, i.e. whether each frame of the video was played at the
     * right time so that the video looks smooth when it plays.
     */ videoPlaybackRoughness: 'Video playback roughness',
    /**
     *@description A score describing how choppy the video playback is.
     */ videoFreezingScore: 'Video freezing score',
    /**
     *@description Media property giving the name of the renderer being used
     */ rendererName: 'Renderer name',
    /**
     *@description Media property giving the name of the decoder being used
     */ decoderName: 'Decoder name',
    /**
     *@description There is no decoder
     */ noDecoder: 'No decoder',
    /**
     *@description Media property signaling whether a hardware decoder is being used
     */ hardwareDecoder: 'Hardware decoder',
    /**
     *@description Media property signaling whether the content is encrypted. This is a noun phrase for
     *a demultiplexer that does decryption.
     */ decryptingDemuxer: 'Decrypting demuxer',
    /**
     *@description Media property giving the name of the video encoder being used.
     */ encoderName: 'Encoder name',
    /**
     *@description There is no encoder.
     */ noEncoder: 'No encoder',
    /**
     *@description Media property signaling whether the encoder is hardware accelerated.
     */ hardwareEncoder: 'Hardware encoder'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/media/PlayerPropertiesView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var i18nLazyString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLazilyComputedLocalizedString.bind(undefined, str_);
var PropertyRenderer = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(PropertyRenderer, _UI_Widget_VBox);
    var _super = _create_super(PropertyRenderer);
    function PropertyRenderer(title) {
        _class_call_check(this, PropertyRenderer);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "title", void 0);
        _define_property(_assert_this_initialized(_this), "contents", void 0);
        _define_property(_assert_this_initialized(_this), "value", void 0);
        _define_property(_assert_this_initialized(_this), "pseudoColorProtectionElement", void 0);
        _this.contentElement.classList.add('media-property-renderer');
        var titleElement = _this.contentElement.createChild('span', 'media-property-renderer-title');
        _this.contents = _this.contentElement.createChild('div', 'media-property-renderer-contents');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createTextChild(titleElement, title);
        _this.title = title;
        _this.value = null;
        _this.pseudoColorProtectionElement = null;
        _this.contentElement.classList.add('media-property-renderer-hidden');
        return _this;
    }
    _create_class(PropertyRenderer, [
        {
            key: "updateData",
            value: function updateData(propname, propvalue) {
                // convert all empty possibilities into nulls for easier handling.
                if (propvalue === '' || propvalue === null) {
                    return this.updateDataInternal(propname, null);
                }
                try {
                    propvalue = JSON.parse(propvalue);
                } catch (err) {
                // TODO(tmathmeyer) typecheck the type of propvalue against
                // something defined or sourced from the c++ definitions.
                // Do nothing, some strings just stay strings!
                }
                return this.updateDataInternal(propname, propvalue);
            }
        },
        {
            key: "updateDataInternal",
            value: function updateDataInternal(propname, propvalue) {
                if (propvalue === null) {
                    this.changeContents(null);
                } else if (this.value === propvalue) {
                    return; // Don't rebuild element!
                } else {
                    this.value = propvalue;
                    this.changeContents(propvalue);
                }
            }
        },
        {
            key: "unsetNestedContents",
            value: function unsetNestedContents() {
                this.contentElement.classList.add('media-property-renderer-hidden');
                if (this.pseudoColorProtectionElement === null) {
                    this.pseudoColorProtectionElement = document.createElement('div');
                    this.pseudoColorProtectionElement.classList.add('media-property-renderer');
                    this.pseudoColorProtectionElement.classList.add('media-property-renderer-hidden');
                    this.contentElement.parentNode.insertBefore(this.pseudoColorProtectionElement, this.contentElement);
                }
            }
        },
        {
            key: "changeNestedContents",
            value: function changeNestedContents(value) {
                if (value === null || Object.keys(value).length === 0) {
                    this.unsetNestedContents();
                } else {
                    if (this.pseudoColorProtectionElement !== null) {
                        this.pseudoColorProtectionElement.remove();
                        this.pseudoColorProtectionElement = null;
                    }
                    this.contentElement.classList.remove('media-property-renderer-hidden');
                    this.contents.removeChildren();
                    var jsonWrapperElement = new _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_2__.JSONView.JSONView(new _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_2__.JSONView.ParsedJSON(value, '', ''), true);
                    jsonWrapperElement.show(this.contents);
                }
            }
        },
        {
            key: "changeContents",
            value: function changeContents(value) {
                if (value === null) {
                    this.unsetNestedContents();
                } else {
                    if (this.pseudoColorProtectionElement !== null) {
                        this.pseudoColorProtectionElement.remove();
                        this.pseudoColorProtectionElement = null;
                    }
                    this.contentElement.classList.remove('media-property-renderer-hidden');
                    this.contents.removeChildren();
                    var spanElement = document.createElement('span');
                    spanElement.textContent = value;
                    this.contents.appendChild(spanElement);
                }
            }
        }
    ]);
    return PropertyRenderer;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Widget.VBox);
var FormattedPropertyRenderer = /*#__PURE__*/ function(PropertyRenderer) {
    "use strict";
    _inherits(FormattedPropertyRenderer, PropertyRenderer);
    var _super = _create_super(FormattedPropertyRenderer);
    function FormattedPropertyRenderer(title, formatfunction) {
        _class_call_check(this, FormattedPropertyRenderer);
        var _this;
        _this = _super.call(this, title);
        _define_property(_assert_this_initialized(_this), "formatfunction", void 0);
        _this.formatfunction = formatfunction;
        return _this;
    }
    _create_class(FormattedPropertyRenderer, [
        {
            key: "updateDataInternal",
            value: function updateDataInternal(propname, propvalue) {
                if (propvalue === null) {
                    this.changeContents(null);
                } else {
                    this.changeContents(this.formatfunction(propvalue));
                }
            }
        }
    ]);
    return FormattedPropertyRenderer;
}(PropertyRenderer);
var DefaultPropertyRenderer = /*#__PURE__*/ function(PropertyRenderer) {
    "use strict";
    _inherits(DefaultPropertyRenderer, PropertyRenderer);
    var _super = _create_super(DefaultPropertyRenderer);
    function DefaultPropertyRenderer(title, defaultText) {
        _class_call_check(this, DefaultPropertyRenderer);
        var _this;
        _this = _super.call(this, title);
        _this.changeContents(defaultText);
        return _this;
    }
    return DefaultPropertyRenderer;
}(PropertyRenderer);
var NestedPropertyRenderer = /*#__PURE__*/ function(PropertyRenderer) {
    "use strict";
    _inherits(NestedPropertyRenderer, PropertyRenderer);
    var _super = _create_super(NestedPropertyRenderer);
    function NestedPropertyRenderer(title, content) {
        _class_call_check(this, NestedPropertyRenderer);
        var _this;
        _this = _super.call(this, title);
        _this.changeNestedContents(content);
        return _this;
    }
    return NestedPropertyRenderer;
}(PropertyRenderer);
var DimensionPropertyRenderer = /*#__PURE__*/ function(PropertyRenderer) {
    "use strict";
    _inherits(DimensionPropertyRenderer, PropertyRenderer);
    var _super = _create_super(DimensionPropertyRenderer);
    function DimensionPropertyRenderer(title) {
        _class_call_check(this, DimensionPropertyRenderer);
        var _this;
        _this = _super.call(this, title);
        _define_property(_assert_this_initialized(_this), "width", void 0);
        _define_property(_assert_this_initialized(_this), "height", void 0);
        _this.width = 0;
        _this.height = 0;
        return _this;
    }
    _create_class(DimensionPropertyRenderer, [
        {
            key: "updateDataInternal",
            value: function updateDataInternal(propname, propvalue) {
                var needsUpdate = false;
                if (propname === 'width' && Number(propvalue) !== this.width) {
                    this.width = Number(propvalue);
                    needsUpdate = true;
                }
                if (propname === 'height' && Number(propvalue) !== this.height) {
                    this.height = Number(propvalue);
                    needsUpdate = true;
                }
                // If both properties arent set, don't bother updating, since
                // temporarily showing ie: 1920x0 is meaningless.
                if (this.width === 0 || this.height === 0) {
                    this.changeContents(null);
                } else if (needsUpdate) {
                    this.changeContents("".concat(this.width, "\xd7").concat(this.height));
                }
            }
        }
    ]);
    return DimensionPropertyRenderer;
}(PropertyRenderer);
var AttributesView = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(AttributesView, _UI_Widget_VBox);
    var _super = _create_super(AttributesView);
    function AttributesView(elements) {
        _class_call_check(this, AttributesView);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "contentHash", void 0);
        _this.contentHash = 0;
        _this.contentElement.classList.add('media-attributes-view');
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var element = _step.value;
                element.show(_this.contentElement);
                // We just need a really simple way to compare the topical equality
                // of the attributes views in order to avoid deleting and recreating
                // a node containing exactly the same data.
                var content = _this.contentElement.textContent;
                if (content !== null) {
                    _this.contentHash += _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.hashCode(content);
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
        return _this;
    }
    _create_class(AttributesView, [
        {
            key: "getContentHash",
            value: function getContentHash() {
                return this.contentHash;
            }
        }
    ]);
    return AttributesView;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Widget.VBox);
var TrackManager = /*#__PURE__*/ function() {
    "use strict";
    function TrackManager(propertiesView, type) {
        _class_call_check(this, TrackManager);
        _define_property(this, "type", void 0);
        _define_property(this, "view", void 0);
        this.type = type;
        this.view = propertiesView;
    }
    _create_class(TrackManager, [
        {
            key: "updateData",
            value: function updateData(_name, value) {
                var tabs = this.view.getTabs(this.type);
                var newTabs = JSON.parse(value);
                var enumerate = 1;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = newTabs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var tabData = _step.value;
                        this.addNewTab(tabs, tabData, enumerate);
                        enumerate++;
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
        },
        {
            key: "addNewTab",
            value: function addNewTab(tabs, tabData, tabNumber) {
                var tabElements = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = Object.entries(tabData)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _step_value = _sliced_to_array(_step.value, 2), name = _step_value[0], data = _step_value[1];
                        if ((typeof data === "undefined" ? "undefined" : _type_of(data)) === 'object') {
                            tabElements.push(new NestedPropertyRenderer(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedString(name), data));
                        } else {
                            tabElements.push(new DefaultPropertyRenderer(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedString(name), data));
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
                var newTab = new AttributesView(tabElements);
                tabs.addNewTab(tabNumber, newTab);
            }
        }
    ]);
    return TrackManager;
}();
var VideoTrackManager = /*#__PURE__*/ function(TrackManager) {
    "use strict";
    _inherits(VideoTrackManager, TrackManager);
    var _super = _create_super(VideoTrackManager);
    function VideoTrackManager(propertiesView) {
        _class_call_check(this, VideoTrackManager);
        return _super.call(this, propertiesView, 'video');
    }
    return VideoTrackManager;
}(TrackManager);
var TextTrackManager = /*#__PURE__*/ function(TrackManager) {
    "use strict";
    _inherits(TextTrackManager, TrackManager);
    var _super = _create_super(TextTrackManager);
    function TextTrackManager(propertiesView) {
        _class_call_check(this, TextTrackManager);
        return _super.call(this, propertiesView, 'text');
    }
    return TextTrackManager;
}(TrackManager);
var AudioTrackManager = /*#__PURE__*/ function(TrackManager) {
    "use strict";
    _inherits(AudioTrackManager, TrackManager);
    var _super = _create_super(AudioTrackManager);
    function AudioTrackManager(propertiesView) {
        _class_call_check(this, AudioTrackManager);
        return _super.call(this, propertiesView, 'audio');
    }
    return AudioTrackManager;
}(TrackManager);
var TrackTypeLocalized = {
    Video: i18nLazyString(UIStrings.video),
    Audio: i18nLazyString(UIStrings.audio)
};
var GenericTrackMenu = /*#__PURE__*/ function(_UI_TabbedPane_TabbedPane) {
    "use strict";
    _inherits(GenericTrackMenu, _UI_TabbedPane_TabbedPane);
    var _super = _create_super(GenericTrackMenu);
    function GenericTrackMenu(decoderName) {
        var trackName = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : i18nString(UIStrings.track);
        _class_call_check(this, GenericTrackMenu);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "decoderName", void 0);
        _define_property(_assert_this_initialized(_this), "trackName", void 0);
        _this.decoderName = decoderName;
        _this.trackName = trackName;
        return _this;
    }
    _create_class(GenericTrackMenu, [
        {
            key: "addNewTab",
            value: function addNewTab(trackNumber, element) {
                var localizedTrackLower = i18nString(UIStrings.track);
                var tabId = "track-".concat(trackNumber);
                if (this.hasTab(tabId)) {
                    var tabElement = this.tabView(tabId);
                    if (tabElement === null) {
                        return;
                    }
                    if (tabElement.getContentHash() === element.getContentHash()) {
                        return;
                    }
                    this.closeTab(tabId, /* userGesture=*/ false);
                }
                this.appendTab(tabId, "".concat(this.trackName, " #").concat(trackNumber), element, "".concat(this.decoderName, " ").concat(localizedTrackLower, " #").concat(trackNumber));
            }
        }
    ]);
    return GenericTrackMenu;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.TabbedPane.TabbedPane);
var DecoderTrackMenu = /*#__PURE__*/ function(GenericTrackMenu) {
    "use strict";
    _inherits(DecoderTrackMenu, GenericTrackMenu);
    var _super = _create_super(DecoderTrackMenu);
    function DecoderTrackMenu(decoderName, informationalElement) {
        _class_call_check(this, DecoderTrackMenu);
        var _this;
        _this = _super.call(this, decoderName);
        var decoderLocalized = i18nString(UIStrings.decoder);
        var title = "".concat(decoderName, " ").concat(decoderLocalized);
        var propertiesLocalized = i18nString(UIStrings.properties);
        var hoverText = "".concat(title, " ").concat(propertiesLocalized);
        _this.appendTab('decoder-properties', title, informationalElement, hoverText);
        return _this;
    }
    return DecoderTrackMenu;
}(GenericTrackMenu);
var NoTracksPlaceholderMenu = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(NoTracksPlaceholderMenu, _UI_Widget_VBox);
    var _super = _create_super(NoTracksPlaceholderMenu);
    function NoTracksPlaceholderMenu(wrapping, placeholderText) {
        _class_call_check(this, NoTracksPlaceholderMenu);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "isPlaceholder", void 0);
        _define_property(_assert_this_initialized(_this), "wrapping", void 0);
        _this.isPlaceholder = true;
        _this.wrapping = wrapping;
        _this.wrapping.appendTab('_placeholder', placeholderText, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Widget.VBox(), placeholderText);
        _this.wrapping.show(_this.contentElement);
        return _this;
    }
    _create_class(NoTracksPlaceholderMenu, [
        {
            key: "addNewTab",
            value: function addNewTab(trackNumber, element) {
                if (this.isPlaceholder) {
                    this.wrapping.closeTab('_placeholder');
                    this.isPlaceholder = false;
                }
                this.wrapping.addNewTab(trackNumber, element);
            }
        }
    ]);
    return NoTracksPlaceholderMenu;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Widget.VBox);
var PlayerPropertiesView = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(PlayerPropertiesView, _UI_Widget_VBox);
    var _super = _create_super(PlayerPropertiesView);
    function PlayerPropertiesView() {
        _class_call_check(this, PlayerPropertiesView);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "mediaElements", void 0);
        _define_property(_assert_this_initialized(_this), "videoDecoderElements", void 0);
        _define_property(_assert_this_initialized(_this), "audioDecoderElements", void 0);
        _define_property(_assert_this_initialized(_this), "textTrackElements", void 0);
        _define_property(_assert_this_initialized(_this), "attributeMap", void 0);
        _define_property(_assert_this_initialized(_this), "videoProperties", void 0);
        _define_property(_assert_this_initialized(_this), "videoDecoderProperties", void 0);
        _define_property(_assert_this_initialized(_this), "audioDecoderProperties", void 0);
        _define_property(_assert_this_initialized(_this), "videoDecoderTabs", void 0);
        _define_property(_assert_this_initialized(_this), "audioDecoderTabs", void 0);
        _define_property(_assert_this_initialized(_this), "textTracksTabs", void 0);
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.pane('properties')));
        _this.contentElement.classList.add('media-properties-frame');
        _this.mediaElements = [];
        _this.videoDecoderElements = [];
        _this.audioDecoderElements = [];
        _this.textTrackElements = [];
        _this.attributeMap = new Map();
        _this.populateAttributesAndElements();
        _this.videoProperties = new AttributesView(_this.mediaElements);
        _this.videoDecoderProperties = new AttributesView(_this.videoDecoderElements);
        _this.audioDecoderProperties = new AttributesView(_this.audioDecoderElements);
        _this.videoProperties.show(_this.contentElement);
        _this.videoDecoderTabs = new DecoderTrackMenu(TrackTypeLocalized.Video(), _this.videoDecoderProperties);
        _this.videoDecoderTabs.show(_this.contentElement);
        _this.audioDecoderTabs = new DecoderTrackMenu(TrackTypeLocalized.Audio(), _this.audioDecoderProperties);
        _this.audioDecoderTabs.show(_this.contentElement);
        _this.textTracksTabs = null;
        return _this;
    }
    _create_class(PlayerPropertiesView, [
        {
            key: "lazyCreateTrackTabs",
            value: function lazyCreateTrackTabs() {
                var textTracksTabs = this.textTracksTabs;
                if (textTracksTabs === null) {
                    var textTracks = new GenericTrackMenu(i18nString(UIStrings.textTrack));
                    textTracksTabs = new NoTracksPlaceholderMenu(textTracks, i18nString(UIStrings.noTextTracks));
                    textTracksTabs.show(this.contentElement);
                    this.textTracksTabs = textTracksTabs;
                }
                return textTracksTabs;
            }
        },
        {
            key: "getTabs",
            value: function getTabs(type) {
                if (type === 'audio') {
                    return this.audioDecoderTabs;
                }
                if (type === 'video') {
                    return this.videoDecoderTabs;
                }
                if (type === 'text') {
                    return this.lazyCreateTrackTabs();
                }
                // There should be no other type allowed.
                throw new Error('Unreachable');
            }
        },
        {
            key: "onProperty",
            value: function onProperty(property) {
                var renderer = this.attributeMap.get(property.name);
                if (!renderer) {
                    throw new Error('Player property "'.concat(property.name, '" not supported.'));
                }
                renderer.updateData(property.name, property.value);
            }
        },
        {
            key: "formatKbps",
            value: function formatKbps(bitsPerSecond) {
                if (bitsPerSecond === '') {
                    return '0 kbps';
                }
                var kbps = Math.floor(Number(bitsPerSecond) / 1000);
                return "".concat(kbps, " kbps");
            }
        },
        {
            key: "formatTime",
            value: function formatTime(seconds) {
                if (seconds === '') {
                    return '0:00';
                }
                var date = new Date();
                date.setSeconds(Number(seconds));
                return date.toISOString().substr(11, 8);
            }
        },
        {
            key: "formatFileSize",
            value: function formatFileSize(bytes) {
                if (bytes === '') {
                    return '0 bytes';
                }
                var actualBytes = Number(bytes);
                if (actualBytes < 1000) {
                    return "".concat(bytes, " bytes");
                }
                var power = Math.floor(Math.log10(actualBytes) / 3);
                var suffix = [
                    'bytes',
                    'kB',
                    'MB',
                    'GB',
                    'TB'
                ][power];
                var bytesDecimal = (actualBytes / Math.pow(1000, power)).toFixed(2);
                return "".concat(bytesDecimal, " ").concat(suffix);
            }
        },
        {
            key: "populateAttributesAndElements",
            value: function populateAttributesAndElements() {
                /* Media properties */ var resolution = new PropertyRenderer(i18nString(UIStrings.resolution));
                this.mediaElements.push(resolution);
                this.attributeMap.set("kResolution" /* PlayerPropertyKeys.Resolution */ , resolution);
                var fileSize = new FormattedPropertyRenderer(i18nString(UIStrings.fileSize), this.formatFileSize);
                this.mediaElements.push(fileSize);
                this.attributeMap.set("kTotalBytes" /* PlayerPropertyKeys.TotalBytes */ , fileSize);
                var bitrate = new FormattedPropertyRenderer(i18nString(UIStrings.bitrate), this.formatKbps);
                this.mediaElements.push(bitrate);
                this.attributeMap.set("kBitrate" /* PlayerPropertyKeys.Bitrate */ , bitrate);
                var duration = new FormattedPropertyRenderer(i18nString(UIStrings.duration), this.formatTime);
                this.mediaElements.push(duration);
                this.attributeMap.set("kMaxDuration" /* PlayerPropertyKeys.MaxDuration */ , duration);
                var startTime = new PropertyRenderer(i18nString(UIStrings.startTime));
                this.mediaElements.push(startTime);
                this.attributeMap.set("kStartTime" /* PlayerPropertyKeys.StartTime */ , startTime);
                var streaming = new PropertyRenderer(i18nString(UIStrings.streaming));
                this.mediaElements.push(streaming);
                this.attributeMap.set("kIsStreaming" /* PlayerPropertyKeys.IsStreaming */ , streaming);
                var frameUrl = new PropertyRenderer(i18nString(UIStrings.playbackFrameUrl));
                this.mediaElements.push(frameUrl);
                this.attributeMap.set("kFrameUrl" /* PlayerPropertyKeys.FrameUrl */ , frameUrl);
                var frameTitle = new PropertyRenderer(i18nString(UIStrings.playbackFrameTitle));
                this.mediaElements.push(frameTitle);
                this.attributeMap.set("kFrameTitle" /* PlayerPropertyKeys.FrameTitle */ , frameTitle);
                var singleOrigin = new PropertyRenderer(i18nString(UIStrings.singleoriginPlayback));
                this.mediaElements.push(singleOrigin);
                this.attributeMap.set("kIsSingleOrigin" /* PlayerPropertyKeys.IsSingleOrigin */ , singleOrigin);
                var rangeHeaders = new PropertyRenderer(i18nString(UIStrings.rangeHeaderSupport));
                this.mediaElements.push(rangeHeaders);
                this.attributeMap.set("kIsRangeHeaderSupported" /* PlayerPropertyKeys.IsRangeHeaderSupported */ , rangeHeaders);
                var frameRate = new PropertyRenderer(i18nString(UIStrings.frameRate));
                this.mediaElements.push(frameRate);
                this.attributeMap.set("kFramerate" /* PlayerPropertyKeys.Framerate */ , frameRate);
                var roughness = new PropertyRenderer(i18nString(UIStrings.videoPlaybackRoughness));
                this.mediaElements.push(roughness);
                this.attributeMap.set("kVideoPlaybackRoughness" /* PlayerPropertyKeys.VideoPlaybackRoughness */ , roughness);
                var freezingScore = new PropertyRenderer(i18nString(UIStrings.videoFreezingScore));
                this.mediaElements.push(freezingScore);
                this.attributeMap.set("kVideoPlaybackFreezing" /* PlayerPropertyKeys.VideoPlaybackFreezing */ , freezingScore);
                var rendererName = new PropertyRenderer(i18nString(UIStrings.rendererName));
                this.mediaElements.push(rendererName);
                this.attributeMap.set("kRendererName" /* PlayerPropertyKeys.RendererName */ , rendererName);
                /* Video Decoder Properties */ var decoderName = new DefaultPropertyRenderer(i18nString(UIStrings.decoderName), i18nString(UIStrings.noDecoder));
                this.videoDecoderElements.push(decoderName);
                this.attributeMap.set("kVideoDecoderName" /* PlayerPropertyKeys.VideoDecoderName */ , decoderName);
                var videoPlatformDecoder = new PropertyRenderer(i18nString(UIStrings.hardwareDecoder));
                this.videoDecoderElements.push(videoPlatformDecoder);
                this.attributeMap.set("kIsPlatformVideoDecoder" /* PlayerPropertyKeys.IsPlatformVideoDecoder */ , videoPlatformDecoder);
                var encoderName = new DefaultPropertyRenderer(i18nString(UIStrings.encoderName), i18nString(UIStrings.noEncoder));
                this.videoDecoderElements.push(encoderName);
                this.attributeMap.set("kVideoEncoderName" /* PlayerPropertyKeys.VideoEncoderName */ , encoderName);
                var videoPlatformEncoder = new PropertyRenderer(i18nString(UIStrings.hardwareEncoder));
                this.videoDecoderElements.push(videoPlatformEncoder);
                this.attributeMap.set("kIsPlatformVideoEncoder" /* PlayerPropertyKeys.IsPlatformVideoEncoder */ , videoPlatformEncoder);
                var videoDDS = new PropertyRenderer(i18nString(UIStrings.decryptingDemuxer));
                this.videoDecoderElements.push(videoDDS);
                this.attributeMap.set("kIsVideoDecryptingDemuxerStream" /* PlayerPropertyKeys.IsVideoDecryptingDemuxerStream */ , videoDDS);
                var videoTrackManager = new VideoTrackManager(this);
                this.attributeMap.set("kVideoTracks" /* PlayerPropertyKeys.VideoTracks */ , videoTrackManager);
                /* Audio Decoder Properties */ var audioDecoder = new DefaultPropertyRenderer(i18nString(UIStrings.decoderName), i18nString(UIStrings.noDecoder));
                this.audioDecoderElements.push(audioDecoder);
                this.attributeMap.set("kAudioDecoderName" /* PlayerPropertyKeys.AudioDecoderName */ , audioDecoder);
                var audioPlatformDecoder = new PropertyRenderer(i18nString(UIStrings.hardwareDecoder));
                this.audioDecoderElements.push(audioPlatformDecoder);
                this.attributeMap.set("kIsPlatformAudioDecoder" /* PlayerPropertyKeys.IsPlatformAudioDecoder */ , audioPlatformDecoder);
                var audioDDS = new PropertyRenderer(i18nString(UIStrings.decryptingDemuxer));
                this.audioDecoderElements.push(audioDDS);
                this.attributeMap.set("kIsAudioDecryptingDemuxerStream" /* PlayerPropertyKeys.IsAudioDecryptingDemuxerStream */ , audioDDS);
                var audioTrackManager = new AudioTrackManager(this);
                this.attributeMap.set("kAudioTracks" /* PlayerPropertyKeys.AudioTracks */ , audioTrackManager);
                var textTrackManager = new TextTrackManager(this);
                this.attributeMap.set("kTextTracks" /* PlayerPropertyKeys.TextTracks */ , textTrackManager);
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(PlayerPropertiesView.prototype), "wasShown", this).call(this);
                this.registerCSSFiles([
                    _playerPropertiesView_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]
                ]);
            }
        }
    ]);
    return PlayerPropertiesView;
} //# sourceMappingURL=PlayerPropertiesView.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Widget.VBox);


}),
"./panels/media/playerPropertiesView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2019 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.media-attributes-view {\n  border-bottom: 1px solid var(--sys-color-divider);\n}\n\n.media-property-renderer {\n  line-height: 20px;\n  min-height: 28px;\n  padding: 4px 10px;\n  display: block;\n  overflow: hidden;\n\n  &:hover {\n    background: var(--sys-color-state-hover-on-subtle);\n  }\n}\n\n.media-property-renderer:nth-child(even):not(:hover) {\n  background: var(--sys-color-surface1);\n}\n\n.media-property-renderer:has(.json-view) {\n  padding-bottom: 0;\n}\n\n.media-property-renderer:has(.json-view > .expanded) {\n  padding-bottom: 4px;\n}\n\n.media-property-renderer-hidden {\n  display: none;\n}\n\n.media-property-renderer-title {\n  font-size: 12px;\n  float: left;\n  width: 150px;\n}\n\n.media-property-renderer-title::first-letter {\n  text-transform: uppercase;\n}\n\n.media-property-renderer-contents {\n  position: relative;\n\n  & > .json-view {\n    overflow: hidden;\n    padding: 0;\n  }\n}\n\n.media-properties-frame {\n  display: block;\n  overflow-x: hidden;\n}\n\n/*# sourceURL=playerPropertiesView.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);