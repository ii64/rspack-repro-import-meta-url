"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_media_PlayerDetailView_js"], {
"./panels/media/PlayerDetailView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PlayerDetailView: function() { return PlayerDetailView; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _EventDisplayTable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventDisplayTable.js */ "./panels/media/EventDisplayTable.js");
/* harmony import */var _EventTimelineView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EventTimelineView.js */ "./panels/media/EventTimelineView.js");
/* harmony import */var _PlayerMessagesView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PlayerMessagesView.js */ "./panels/media/PlayerMessagesView.js");
/* harmony import */var _PlayerPropertiesView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PlayerPropertiesView.js */ "./panels/media/PlayerPropertiesView.js");
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






var UIStrings = {
    /**
     *@description Title of the 'Properties' tool in the sidebar of the elements tool
     */ properties: 'Properties',
    /**
     *@description Button text for viewing properties.
     */ playerProperties: 'Player properties',
    /**
     *@description Button text for viewing events.
     */ events: 'Events',
    /**
     *@description Hover text for the Events button.
     */ playerEvents: 'Player events',
    /**
     *@description Text in Network Item View of the Network panel
     */ messages: 'Messages',
    /**
     *@description Column header for messages view.
     */ playerMessages: 'Player messages',
    /**
     *@description Title for the timeline tab.
     */ timeline: 'Timeline',
    /**
     *@description Hovertext for Timeline tab.
     */ playerTimeline: 'Player timeline'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/media/PlayerDetailView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var PlayerDetailView = /*#__PURE__*/ function(_UI_TabbedPane_TabbedPane) {
    "use strict";
    _inherits(PlayerDetailView, _UI_TabbedPane_TabbedPane);
    var _super = _create_super(PlayerDetailView);
    function PlayerDetailView() {
        _class_call_check(this, PlayerDetailView);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "eventView", void 0);
        _define_property(_assert_this_initialized(_this), "propertyView", void 0);
        _define_property(_assert_this_initialized(_this), "messageView", void 0);
        _define_property(_assert_this_initialized(_this), "timelineView", void 0);
        _this.eventView = new _EventDisplayTable_js__WEBPACK_IMPORTED_MODULE_2__.PlayerEventsView();
        _this.propertyView = new _PlayerPropertiesView_js__WEBPACK_IMPORTED_MODULE_5__.PlayerPropertiesView();
        _this.messageView = new _PlayerMessagesView_js__WEBPACK_IMPORTED_MODULE_4__.PlayerMessagesView();
        _this.timelineView = new _EventTimelineView_js__WEBPACK_IMPORTED_MODULE_3__.PlayerEventsTimeline();
        _this.appendTab("properties" /* PlayerDetailViewTabs.Properties */ , i18nString(UIStrings.properties), _this.propertyView, i18nString(UIStrings.playerProperties));
        _this.appendTab("events" /* PlayerDetailViewTabs.Events */ , i18nString(UIStrings.events), _this.eventView, i18nString(UIStrings.playerEvents));
        _this.appendTab("messages" /* PlayerDetailViewTabs.Messages */ , i18nString(UIStrings.messages), _this.messageView, i18nString(UIStrings.playerMessages));
        _this.appendTab("timeline" /* PlayerDetailViewTabs.Timeline */ , i18nString(UIStrings.timeline), _this.timelineView, i18nString(UIStrings.playerTimeline));
        return _this;
    }
    _create_class(PlayerDetailView, [
        {
            key: "onProperty",
            value: function onProperty(property) {
                this.propertyView.onProperty(property);
            }
        },
        {
            key: "onError",
            value: function onError(error) {
                this.messageView.addError(error);
            }
        },
        {
            key: "onMessage",
            value: function onMessage(message) {
                this.messageView.addMessage(message);
            }
        },
        {
            key: "onEvent",
            value: function onEvent(event) {
                this.eventView.onEvent(event);
                this.timelineView.onEvent(event);
            }
        }
    ]);
    return PlayerDetailView;
} //# sourceMappingURL=PlayerDetailView.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.TabbedPane.TabbedPane);


}),

}]);