"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_media_PlayerListView_js"], {
"./panels/media/PlayerListView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PlayerListView: function() { return PlayerListView; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _playerListView_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./playerListView.css.js */ "./panels/media/playerListView.css.js");
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
function _templateObject() {
    var data = _tagged_template_literal([
        '\n    <div class="player-entry-row hbox">\n    <div class="player-entry-status-icon vbox">\n    <div $="icon" class="player-entry-status-icon-centering"></div>\n    </div>\n    <div $="frame-title" class="player-entry-frame-title">FrameTitle</div>\n    <div $="player-title" class="player-entry-player-title">PlayerTitle</div>\n    </div>\n    '
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}





var UIStrings = {
    /**
     *@description A right-click context menu entry which when clicked causes the menu entry for that player to be removed.
     */ hidePlayer: 'Hide player',
    /**
     *@description A right-click context menu entry which should keep the element selected, while hiding all other entries.
     */ hideAllOthers: 'Hide all others',
    /**
     *@description Context menu entry which downloads the json dump when clicked
     */ savePlayerInfo: 'Save player info',
    /**
     *@description Side-panel entry title text for the players section.
     */ players: 'Players'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/media/PlayerListView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var PlayerListView = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(PlayerListView, _UI_Widget_VBox);
    var _super = _create_super(PlayerListView);
    function PlayerListView(mainContainer) {
        _class_call_check(this, PlayerListView);
        var _this;
        _this = _super.call(this, true);
        _define_property(_assert_this_initialized(_this), "playerEntryFragments", void 0);
        _define_property(_assert_this_initialized(_this), "playerEntriesWithHostnameFrameTitle", void 0);
        _define_property(_assert_this_initialized(_this), "mainContainer", void 0);
        _define_property(_assert_this_initialized(_this), "currentlySelectedEntry", void 0);
        _this.playerEntryFragments = new Map();
        _this.playerEntriesWithHostnameFrameTitle = new Set();
        // Container where new panels can be added based on clicks.
        _this.mainContainer = mainContainer;
        _this.currentlySelectedEntry = null;
        _this.contentElement.createChild('div', 'player-entry-header').textContent = i18nString(UIStrings.players);
        return _this;
    }
    _create_class(PlayerListView, [
        {
            key: "createPlayerListEntry",
            value: function createPlayerListEntry(playerID) {
                var entry = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Fragment.Fragment.build(_templateObject());
                var element = entry.element();
                element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.item('player').track({
                    click: true
                })));
                element.addEventListener('click', this.selectPlayer.bind(this, playerID, element));
                element.addEventListener('contextmenu', this.rightClickPlayer.bind(this, playerID));
                entry.$('icon').appendChild(_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.create('pause', 'media-player'));
                return entry;
            }
        },
        {
            key: "selectPlayer",
            value: function selectPlayer(playerID, element) {
                this.mainContainer.renderMainPanel(playerID);
                if (this.currentlySelectedEntry !== null) {
                    this.currentlySelectedEntry.classList.remove('selected');
                    this.currentlySelectedEntry.classList.remove('force-white-icons');
                }
                element.classList.add('selected');
                element.classList.add('force-white-icons');
                this.currentlySelectedEntry = element;
            }
        },
        {
            key: "rightClickPlayer",
            value: function rightClickPlayer(playerID, event) {
                var contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ContextMenu.ContextMenu(event);
                contextMenu.headerSection().appendItem(i18nString(UIStrings.hidePlayer), this.mainContainer.markPlayerForDeletion.bind(this.mainContainer, playerID), {
                    jslogContext: 'hide-player'
                });
                contextMenu.headerSection().appendItem(i18nString(UIStrings.hideAllOthers), this.mainContainer.markOtherPlayersForDeletion.bind(this.mainContainer, playerID), {
                    jslogContext: 'hide-all-others'
                });
                contextMenu.headerSection().appendItem(i18nString(UIStrings.savePlayerInfo), this.mainContainer.exportPlayerData.bind(this.mainContainer, playerID), {
                    jslogContext: 'save-player-info'
                });
                void contextMenu.show();
                return true;
            }
        },
        {
            key: "setMediaElementFrameTitle",
            value: function setMediaElementFrameTitle(playerID, frameTitle, isHostname) {
                // Only remove the title from the set if we arent setting a hostname title.
                // Otherwise, if it has a non-hostname title, and the requested new title is
                // a hostname, just drop it.
                if (this.playerEntriesWithHostnameFrameTitle.has(playerID)) {
                    if (!isHostname) {
                        this.playerEntriesWithHostnameFrameTitle.delete(playerID);
                    }
                } else if (isHostname) {
                    return;
                }
                if (!this.playerEntryFragments.has(playerID)) {
                    return;
                }
                var fragment = this.playerEntryFragments.get(playerID);
                if (fragment === undefined || fragment.element() === undefined) {
                    return;
                }
                fragment.$('frame-title').textContent = frameTitle;
            }
        },
        {
            key: "setMediaElementPlayerTitle",
            value: function setMediaElementPlayerTitle(playerID, playerTitle) {
                if (!this.playerEntryFragments.has(playerID)) {
                    return;
                }
                var fragment = this.playerEntryFragments.get(playerID);
                if (fragment === undefined) {
                    return;
                }
                fragment.$('player-title').textContent = playerTitle;
            }
        },
        {
            key: "setMediaElementPlayerIcon",
            value: function setMediaElementPlayerIcon(playerID, iconName) {
                if (!this.playerEntryFragments.has(playerID)) {
                    return;
                }
                var fragment = this.playerEntryFragments.get(playerID);
                if (fragment === undefined) {
                    return;
                }
                var icon = fragment.$('icon');
                if (icon === undefined) {
                    return;
                }
                icon.textContent = '';
                icon.appendChild(_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.create(iconName, 'media-player'));
            }
        },
        {
            key: "formatAndEvaluate",
            value: function formatAndEvaluate(playerID, func, candidate, min, max) {
                if (candidate.length <= min) {
                    return;
                }
                if (candidate.length >= max) {
                    candidate = candidate.substring(0, max - 3) + '...';
                }
                func.bind(this)(playerID, candidate);
            }
        },
        {
            key: "addMediaElementItem",
            value: function addMediaElementItem(playerID) {
                var sidebarEntry = this.createPlayerListEntry(playerID);
                this.contentElement.appendChild(sidebarEntry.element());
                this.playerEntryFragments.set(playerID, sidebarEntry);
                this.playerEntriesWithHostnameFrameTitle.add(playerID);
            }
        },
        {
            key: "deletePlayer",
            value: function deletePlayer(playerID) {
                if (!this.playerEntryFragments.has(playerID)) {
                    return;
                }
                var fragment = this.playerEntryFragments.get(playerID);
                if (fragment === undefined || fragment.element() === undefined) {
                    return;
                }
                this.contentElement.removeChild(fragment.element());
                this.playerEntryFragments.delete(playerID);
            }
        },
        {
            key: "onEvent",
            value: function onEvent(playerID, event) {
                var parsed = JSON.parse(event.value);
                var eventType = parsed.event;
                // Load events provide the actual underlying URL for the video, which makes
                // a great way to identify a specific video within a page that potentially
                // may have many videos. MSE videos have a special blob:http(s) protocol
                // that we'd like to keep mind of, so we do prepend blob:
                if (eventType === 'kLoad') {
                    var url = parsed.url;
                    var videoName = url.substring(url.lastIndexOf('/') + 1);
                    this.formatAndEvaluate(playerID, this.setMediaElementPlayerTitle, videoName, 1, 20);
                    return;
                }
                if (eventType === 'kPlay') {
                    this.setMediaElementPlayerIcon(playerID, 'play');
                    return;
                }
                if (eventType === 'kPause' || eventType === 'kEnded') {
                    this.setMediaElementPlayerIcon(playerID, 'pause');
                    return;
                }
                if (eventType === 'kWebMediaPlayerDestroyed') {
                    this.setMediaElementPlayerIcon(playerID, 'cross');
                    return;
                }
            }
        },
        {
            key: "onProperty",
            value: function onProperty(playerID, property) {
                // FrameUrl is always present, and we can generate a basic frame title from
                // it by grabbing the hostname. It's not possible to generate a "good" player
                // title from the FrameUrl though, since the page location itself might not
                // have any relevance to the video being played, and would be shared by all
                // videos on the page.
                if (property.name === "kFrameUrl" /* PlayerPropertyKeys.FrameUrl */ ) {
                    var frameTitle = new URL(property.value).hostname;
                    this.formatAndEvaluate(playerID, this.setMediaElementFrameTitle, frameTitle, 1, 20);
                    return;
                }
                // On the other hand, the page may set a title, which usually makes for a
                // better frame title than a hostname. Unfortunately, its only "usually",
                // since the site is free to set the title to _anything_, it might just be
                // junk, or it might be super long. If it's empty, or 1 character, It's
                // preferable to just drop it. Titles longer than 20 will have the first
                // 17 characters kept and an elipsis appended.
                if (property.name === "kFrameTitle" /* PlayerPropertyKeys.FrameTitle */  && property.value) {
                    this.formatAndEvaluate(playerID, this.setMediaElementFrameTitle, property.value, 1, 20);
                    return;
                }
            }
        },
        {
            key: "onError",
            value: function onError(_playerID, _error) {
            // TODO(tmathmeyer) show an error icon next to the player name
            }
        },
        {
            key: "onMessage",
            value: function onMessage(_playerID, _message) {
            // TODO(tmathmeyer) show a message count number next to the player name.
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(PlayerListView.prototype), "wasShown", this).call(this);
                this.registerCSSFiles([
                    _playerListView_css_js__WEBPACK_IMPORTED_MODULE_4__["default"]
                ]);
            }
        }
    ]);
    return PlayerListView;
} //# sourceMappingURL=PlayerListView.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Widget.VBox);


}),
"./panels/media/playerListView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2019 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.tree-outline {\n  padding-left: 0;\n  color: var(--sys-color-token-subtle);\n}\n\nli.storage-group-list-item {\n  padding: 10px 8px 6px;\n}\n\nli.storage-group-list-item:not(:first-child) {\n  border-top: 1px solid var(--sys-color-divider);\n}\n\nli.storage-group-list-item::before {\n  display: none;\n}\n\n.player-entry-row {\n  height: 26px;\n  min-height: 26px;\n  line-height: 26px;\n\n  &:nth-child(odd) {\n    background: var(--sys-color-surface1);\n  }\n\n  &:hover {\n    background: var(--sys-color-state-hover-on-subtle);\n  }\n\n  &.selected {\n    background: var(--sys-color-tonal-container);\n    color: var(--sys-color-on-tonal-container);\n  }\n}\n\n.player-entry-status-icon-centering {\n  margin: auto;\n  display: inherit;\n}\n\n.player-entry-status-icon {\n  width: 28px;\n  min-width: 28px;\n  height: 26px;\n  border-right: 1px solid var(--sys-color-divider);\n  overflow: hidden;\n}\n\n.player-entry-frame-title {\n  height: 26px;\n  width: 125px;\n  min-width: 125px;\n  text-overflow: elipsis;\n  padding: 0 10px;\n  border-right: 1px solid var(--sys-color-divider);\n  overflow: hidden;\n}\n\n.player-entry-player-title {\n  height: 26px;\n  padding-left: 10px;\n  overflow: hidden;\n}\n\n.player-entry-header {\n  height: 27px;\n  line-height: 27px;\n  min-height: 27px;\n  padding-left: 10px;\n  border-bottom: 1px solid var(--sys-color-divider);\n}\n\n/*# sourceURL=playerListView.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);