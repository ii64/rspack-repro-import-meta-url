"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_media_MainView_js"], {
"./panels/media/MainView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  MainView: function() { return MainView; },
  PlayerDataDownloadManager: function() { return PlayerDataDownloadManager; }
});
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _MediaModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MediaModel.js */ "./panels/media/MediaModel.js");
/* harmony import */var _PlayerDetailView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PlayerDetailView.js */ "./panels/media/PlayerDetailView.js");
/* harmony import */var _PlayerListView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PlayerListView.js */ "./panels/media/PlayerListView.js");
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





var PlayerDataCollection = /*#__PURE__*/ function() {
    "use strict";
    function PlayerDataCollection() {
        _class_call_check(this, PlayerDataCollection);
        _define_property(this, "properties", void 0);
        _define_property(this, "messages", void 0);
        _define_property(this, "events", void 0);
        _define_property(this, "errors", void 0);
        this.properties = new Map();
        this.messages = [];
        this.events = [];
        this.errors = [];
    }
    _create_class(PlayerDataCollection, [
        {
            key: "onProperty",
            value: function onProperty(property) {
                this.properties.set(property.name, property.value);
            }
        },
        {
            key: "onError",
            value: function onError(error) {
                this.errors.push(error);
            }
        },
        {
            key: "onMessage",
            value: function onMessage(message) {
                this.messages.push(message);
            }
        },
        {
            key: "onEvent",
            value: function onEvent(event) {
                this.events.push(event);
            }
        },
        {
            key: "export",
            value: function _export() {
                return {
                    'properties': this.properties,
                    'messages': this.messages,
                    'events': this.events,
                    'errors': this.errors
                };
            }
        }
    ]);
    return PlayerDataCollection;
}();
var PlayerDataDownloadManager = /*#__PURE__*/ function() {
    "use strict";
    function PlayerDataDownloadManager() {
        _class_call_check(this, PlayerDataDownloadManager);
        _define_property(this, "playerDataCollection", void 0);
        this.playerDataCollection = new Map();
    }
    _create_class(PlayerDataDownloadManager, [
        {
            key: "addPlayer",
            value: function addPlayer(playerID) {
                this.playerDataCollection.set(playerID, new PlayerDataCollection());
            }
        },
        {
            key: "onProperty",
            value: function onProperty(playerID, property) {
                var playerProperty = this.playerDataCollection.get(playerID);
                if (!playerProperty) {
                    return;
                }
                playerProperty.onProperty(property);
            }
        },
        {
            key: "onError",
            value: function onError(playerID, error) {
                var playerProperty = this.playerDataCollection.get(playerID);
                if (!playerProperty) {
                    return;
                }
                playerProperty.onError(error);
            }
        },
        {
            key: "onMessage",
            value: function onMessage(playerID, message) {
                var playerProperty = this.playerDataCollection.get(playerID);
                if (!playerProperty) {
                    return;
                }
                playerProperty.onMessage(message);
            }
        },
        {
            key: "onEvent",
            value: function onEvent(playerID, event) {
                var playerProperty = this.playerDataCollection.get(playerID);
                if (!playerProperty) {
                    return;
                }
                playerProperty.onEvent(event);
            }
        },
        {
            key: "exportPlayerData",
            value: function exportPlayerData(playerID) {
                var playerProperty = this.playerDataCollection.get(playerID);
                if (!playerProperty) {
                    throw new Error('Unable to find player');
                }
                return playerProperty.export();
            }
        },
        {
            key: "deletePlayer",
            value: function deletePlayer(playerID) {
                this.playerDataCollection.delete(playerID);
            }
        }
    ]);
    return PlayerDataDownloadManager;
}();
var MainView = /*#__PURE__*/ function(_UI_Panel_PanelWithSidebar) {
    "use strict";
    _inherits(MainView, _UI_Panel_PanelWithSidebar);
    var _super = _create_super(MainView);
    function MainView() {
        var downloadStore = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : new PlayerDataDownloadManager();
        _class_call_check(this, MainView);
        var _this;
        _this = _super.call(this, 'media');
        _define_property(_assert_this_initialized(_this), "detailPanels", void 0);
        _define_property(_assert_this_initialized(_this), "deletedPlayers", void 0);
        _define_property(_assert_this_initialized(_this), "downloadStore", void 0);
        _define_property(_assert_this_initialized(_this), "sidebar", void 0);
        _this.detailPanels = new Map();
        _this.deletedPlayers = new Set();
        _this.downloadStore = downloadStore;
        _this.sidebar = new _PlayerListView_js__WEBPACK_IMPORTED_MODULE_4__.PlayerListView(_assert_this_initialized(_this));
        _this.sidebar.show(_this.panelSidebarElement());
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().observeModels(_MediaModel_js__WEBPACK_IMPORTED_MODULE_2__.MediaModel, _assert_this_initialized(_this), {
            scoped: true
        });
        return _this;
    }
    _create_class(MainView, [
        {
            key: "renderMainPanel",
            value: function renderMainPanel(playerID) {
                var _this_detailPanels_get;
                if (!this.detailPanels.has(playerID)) {
                    return;
                }
                var mainWidget = this.splitWidget().mainWidget();
                if (mainWidget) {
                    mainWidget.detachChildWidgets();
                }
                (_this_detailPanels_get = this.detailPanels.get(playerID)) === null || _this_detailPanels_get === void 0 ? void 0 : _this_detailPanels_get.show(this.mainElement());
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(MainView.prototype), "wasShown", this).call(this);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().models(_MediaModel_js__WEBPACK_IMPORTED_MODULE_2__.MediaModel, {
                        scoped: true
                    })[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var model = _step.value;
                        this.addEventListeners(model);
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
            key: "willHide",
            value: function willHide() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().models(_MediaModel_js__WEBPACK_IMPORTED_MODULE_2__.MediaModel, {
                        scoped: true
                    })[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var model = _step.value;
                        this.removeEventListeners(model);
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
            key: "modelAdded",
            value: function modelAdded(model) {
                if (this.isShowing()) {
                    this.addEventListeners(model);
                }
            }
        },
        {
            key: "modelRemoved",
            value: function modelRemoved(model) {
                this.removeEventListeners(model);
            }
        },
        {
            key: "addEventListeners",
            value: function addEventListeners(mediaModel) {
                mediaModel.ensureEnabled();
                mediaModel.addEventListener("PlayerPropertiesChanged" /* Events.PlayerPropertiesChanged */ , this.propertiesChanged, this);
                mediaModel.addEventListener("PlayerEventsAdded" /* Events.PlayerEventsAdded */ , this.eventsAdded, this);
                mediaModel.addEventListener("PlayerMessagesLogged" /* Events.PlayerMessagesLogged */ , this.messagesLogged, this);
                mediaModel.addEventListener("PlayerErrorsRaised" /* Events.PlayerErrorsRaised */ , this.errorsRaised, this);
                mediaModel.addEventListener("PlayersCreated" /* Events.PlayersCreated */ , this.playersCreated, this);
            }
        },
        {
            key: "removeEventListeners",
            value: function removeEventListeners(mediaModel) {
                mediaModel.removeEventListener("PlayerPropertiesChanged" /* Events.PlayerPropertiesChanged */ , this.propertiesChanged, this);
                mediaModel.removeEventListener("PlayerEventsAdded" /* Events.PlayerEventsAdded */ , this.eventsAdded, this);
                mediaModel.removeEventListener("PlayerMessagesLogged" /* Events.PlayerMessagesLogged */ , this.messagesLogged, this);
                mediaModel.removeEventListener("PlayerErrorsRaised" /* Events.PlayerErrorsRaised */ , this.errorsRaised, this);
                mediaModel.removeEventListener("PlayersCreated" /* Events.PlayersCreated */ , this.playersCreated, this);
            }
        },
        {
            key: "onPlayerCreated",
            value: function onPlayerCreated(playerID) {
                this.sidebar.addMediaElementItem(playerID);
                this.detailPanels.set(playerID, new _PlayerDetailView_js__WEBPACK_IMPORTED_MODULE_3__.PlayerDetailView());
                this.downloadStore.addPlayer(playerID);
            }
        },
        {
            key: "propertiesChanged",
            value: function propertiesChanged(event) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = event.data.properties[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var property = _step.value;
                        this.onProperty(event.data.playerId, property);
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
            key: "eventsAdded",
            value: function eventsAdded(event) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = event.data.events[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var ev = _step.value;
                        // TODO(crbug.com/1228674): The conversion from Protocol.Media.PlayerEvent to PlayerEvent happens implicitly
                        // by augmenting the protocol type with some additional property in various places. This needs to be cleaned up
                        // in a conversion function that takes the protocol type and produces the PlayerEvent type.
                        this.onEvent(event.data.playerId, ev);
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
            key: "messagesLogged",
            value: function messagesLogged(event) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = event.data.messages[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var message = _step.value;
                        this.onMessage(event.data.playerId, message);
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
            key: "errorsRaised",
            value: function errorsRaised(event) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = event.data.errors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var error = _step.value;
                        this.onError(event.data.playerId, error);
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
            key: "shouldPropagate",
            value: function shouldPropagate(playerID) {
                return !this.deletedPlayers.has(playerID) && this.detailPanels.has(playerID);
            }
        },
        {
            key: "onProperty",
            value: function onProperty(playerID, property) {
                var _this_detailPanels_get;
                if (!this.shouldPropagate(playerID)) {
                    return;
                }
                this.sidebar.onProperty(playerID, property);
                this.downloadStore.onProperty(playerID, property);
                (_this_detailPanels_get = this.detailPanels.get(playerID)) === null || _this_detailPanels_get === void 0 ? void 0 : _this_detailPanels_get.onProperty(property);
            }
        },
        {
            key: "onError",
            value: function onError(playerID, error) {
                var _this_detailPanels_get;
                if (!this.shouldPropagate(playerID)) {
                    return;
                }
                this.sidebar.onError(playerID, error);
                this.downloadStore.onError(playerID, error);
                (_this_detailPanels_get = this.detailPanels.get(playerID)) === null || _this_detailPanels_get === void 0 ? void 0 : _this_detailPanels_get.onError(error);
            }
        },
        {
            key: "onMessage",
            value: function onMessage(playerID, message) {
                var _this_detailPanels_get;
                if (!this.shouldPropagate(playerID)) {
                    return;
                }
                this.sidebar.onMessage(playerID, message);
                this.downloadStore.onMessage(playerID, message);
                (_this_detailPanels_get = this.detailPanels.get(playerID)) === null || _this_detailPanels_get === void 0 ? void 0 : _this_detailPanels_get.onMessage(message);
            }
        },
        {
            key: "onEvent",
            value: function onEvent(playerID, event) {
                var _this_detailPanels_get;
                if (!this.shouldPropagate(playerID)) {
                    return;
                }
                this.sidebar.onEvent(playerID, event);
                this.downloadStore.onEvent(playerID, event);
                (_this_detailPanels_get = this.detailPanels.get(playerID)) === null || _this_detailPanels_get === void 0 ? void 0 : _this_detailPanels_get.onEvent(event);
            }
        },
        {
            key: "playersCreated",
            value: function playersCreated(event) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = event.data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var playerID = _step.value;
                        this.onPlayerCreated(playerID);
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
            key: "markPlayerForDeletion",
            value: function markPlayerForDeletion(playerID) {
                // TODO(tmathmeyer): send this to chromium to save the storage space there too.
                this.deletedPlayers.add(playerID);
                this.detailPanels.delete(playerID);
                this.sidebar.deletePlayer(playerID);
                this.downloadStore.deletePlayer(playerID);
            }
        },
        {
            key: "markOtherPlayersForDeletion",
            value: function markOtherPlayersForDeletion(playerID) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.detailPanels.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var keyID = _step.value;
                        if (keyID !== playerID) {
                            this.markPlayerForDeletion(keyID);
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
        },
        {
            key: "exportPlayerData",
            value: function exportPlayerData(playerID) {
                var dump = this.downloadStore.exportPlayerData(playerID);
                var uriContent = 'data:application/octet-stream,' + encodeURIComponent(JSON.stringify(dump, null, 2));
                var anchor = document.createElement('a');
                anchor.href = uriContent;
                anchor.download = playerID + '.json';
                anchor.click();
            }
        }
    ]);
    return MainView;
} //# sourceMappingURL=MainView.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Panel.PanelWithSidebar);


}),
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