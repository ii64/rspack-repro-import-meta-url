"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_media_PlayerListView_js"],{

/***/ "./panels/media/PlayerListView.js":
/*!****************************************!*\
  !*** ./panels/media/PlayerListView.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlayerListView: () => (/* binding */ PlayerListView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _playerListView_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./playerListView.css.js */ "./panels/media/playerListView.css.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





const UIStrings = {
    /**
     *@description A right-click context menu entry which when clicked causes the menu entry for that player to be removed.
     */
    hidePlayer: 'Hide player',
    /**
     *@description A right-click context menu entry which should keep the element selected, while hiding all other entries.
     */
    hideAllOthers: 'Hide all others',
    /**
     *@description Context menu entry which downloads the json dump when clicked
     */
    savePlayerInfo: 'Save player info',
    /**
     *@description Side-panel entry title text for the players section.
     */
    players: 'Players',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/media/PlayerListView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class PlayerListView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Widget.VBox {
    playerEntryFragments;
    playerEntriesWithHostnameFrameTitle;
    mainContainer;
    currentlySelectedEntry;
    constructor(mainContainer) {
        super(true);
        this.playerEntryFragments = new Map();
        this.playerEntriesWithHostnameFrameTitle = new Set();
        // Container where new panels can be added based on clicks.
        this.mainContainer = mainContainer;
        this.currentlySelectedEntry = null;
        this.contentElement.createChild('div', 'player-entry-header').textContent = i18nString(UIStrings.players);
    }
    createPlayerListEntry(playerID) {
        const entry = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Fragment.Fragment.build `
    <div class="player-entry-row hbox">
    <div class="player-entry-status-icon vbox">
    <div $="icon" class="player-entry-status-icon-centering"></div>
    </div>
    <div $="frame-title" class="player-entry-frame-title">FrameTitle</div>
    <div $="player-title" class="player-entry-player-title">PlayerTitle</div>
    </div>
    `;
        const element = entry.element();
        element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.item('player').track({ click: true })}`);
        element.addEventListener('click', this.selectPlayer.bind(this, playerID, element));
        element.addEventListener('contextmenu', this.rightClickPlayer.bind(this, playerID));
        entry.$('icon').appendChild(_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.create('pause', 'media-player'));
        return entry;
    }
    selectPlayer(playerID, element) {
        this.mainContainer.renderMainPanel(playerID);
        if (this.currentlySelectedEntry !== null) {
            this.currentlySelectedEntry.classList.remove('selected');
            this.currentlySelectedEntry.classList.remove('force-white-icons');
        }
        element.classList.add('selected');
        element.classList.add('force-white-icons');
        this.currentlySelectedEntry = element;
    }
    rightClickPlayer(playerID, event) {
        const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ContextMenu.ContextMenu(event);
        contextMenu.headerSection().appendItem(i18nString(UIStrings.hidePlayer), this.mainContainer.markPlayerForDeletion.bind(this.mainContainer, playerID), { jslogContext: 'hide-player' });
        contextMenu.headerSection().appendItem(i18nString(UIStrings.hideAllOthers), this.mainContainer.markOtherPlayersForDeletion.bind(this.mainContainer, playerID), { jslogContext: 'hide-all-others' });
        contextMenu.headerSection().appendItem(i18nString(UIStrings.savePlayerInfo), this.mainContainer.exportPlayerData.bind(this.mainContainer, playerID), { jslogContext: 'save-player-info' });
        void contextMenu.show();
        return true;
    }
    setMediaElementFrameTitle(playerID, frameTitle, isHostname) {
        // Only remove the title from the set if we arent setting a hostname title.
        // Otherwise, if it has a non-hostname title, and the requested new title is
        // a hostname, just drop it.
        if (this.playerEntriesWithHostnameFrameTitle.has(playerID)) {
            if (!isHostname) {
                this.playerEntriesWithHostnameFrameTitle.delete(playerID);
            }
        }
        else if (isHostname) {
            return;
        }
        if (!this.playerEntryFragments.has(playerID)) {
            return;
        }
        const fragment = this.playerEntryFragments.get(playerID);
        if (fragment === undefined || fragment.element() === undefined) {
            return;
        }
        fragment.$('frame-title').textContent = frameTitle;
    }
    setMediaElementPlayerTitle(playerID, playerTitle) {
        if (!this.playerEntryFragments.has(playerID)) {
            return;
        }
        const fragment = this.playerEntryFragments.get(playerID);
        if (fragment === undefined) {
            return;
        }
        fragment.$('player-title').textContent = playerTitle;
    }
    setMediaElementPlayerIcon(playerID, iconName) {
        if (!this.playerEntryFragments.has(playerID)) {
            return;
        }
        const fragment = this.playerEntryFragments.get(playerID);
        if (fragment === undefined) {
            return;
        }
        const icon = fragment.$('icon');
        if (icon === undefined) {
            return;
        }
        icon.textContent = '';
        icon.appendChild(_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.create(iconName, 'media-player'));
    }
    formatAndEvaluate(playerID, func, candidate, min, max) {
        if (candidate.length <= min) {
            return;
        }
        if (candidate.length >= max) {
            candidate = candidate.substring(0, max - 3) + '...';
        }
        func.bind(this)(playerID, candidate);
    }
    addMediaElementItem(playerID) {
        const sidebarEntry = this.createPlayerListEntry(playerID);
        this.contentElement.appendChild(sidebarEntry.element());
        this.playerEntryFragments.set(playerID, sidebarEntry);
        this.playerEntriesWithHostnameFrameTitle.add(playerID);
    }
    deletePlayer(playerID) {
        if (!this.playerEntryFragments.has(playerID)) {
            return;
        }
        const fragment = this.playerEntryFragments.get(playerID);
        if (fragment === undefined || fragment.element() === undefined) {
            return;
        }
        this.contentElement.removeChild(fragment.element());
        this.playerEntryFragments.delete(playerID);
    }
    onEvent(playerID, event) {
        const parsed = JSON.parse(event.value);
        const eventType = parsed.event;
        // Load events provide the actual underlying URL for the video, which makes
        // a great way to identify a specific video within a page that potentially
        // may have many videos. MSE videos have a special blob:http(s) protocol
        // that we'd like to keep mind of, so we do prepend blob:
        if (eventType === 'kLoad') {
            const url = parsed.url;
            const videoName = url.substring(url.lastIndexOf('/') + 1);
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
    onProperty(playerID, property) {
        // FrameUrl is always present, and we can generate a basic frame title from
        // it by grabbing the hostname. It's not possible to generate a "good" player
        // title from the FrameUrl though, since the page location itself might not
        // have any relevance to the video being played, and would be shared by all
        // videos on the page.
        if (property.name === "kFrameUrl" /* PlayerPropertyKeys.FrameUrl */) {
            const frameTitle = new URL(property.value).hostname;
            this.formatAndEvaluate(playerID, this.setMediaElementFrameTitle, frameTitle, 1, 20);
            return;
        }
        // On the other hand, the page may set a title, which usually makes for a
        // better frame title than a hostname. Unfortunately, its only "usually",
        // since the site is free to set the title to _anything_, it might just be
        // junk, or it might be super long. If it's empty, or 1 character, It's
        // preferable to just drop it. Titles longer than 20 will have the first
        // 17 characters kept and an elipsis appended.
        if (property.name === "kFrameTitle" /* PlayerPropertyKeys.FrameTitle */ && property.value) {
            this.formatAndEvaluate(playerID, this.setMediaElementFrameTitle, property.value, 1, 20);
            return;
        }
    }
    onError(_playerID, _error) {
        // TODO(tmathmeyer) show an error icon next to the player name
    }
    onMessage(_playerID, _message) {
        // TODO(tmathmeyer) show a message count number next to the player name.
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([_playerListView_css_js__WEBPACK_IMPORTED_MODULE_4__["default"]]);
    }
}
//# sourceMappingURL=PlayerListView.js.map

/***/ }),

/***/ "./panels/media/playerListView.css.js":
/*!********************************************!*\
  !*** ./panels/media/playerListView.css.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2019 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.tree-outline {
  padding-left: 0;
  color: var(--sys-color-token-subtle);
}

li.storage-group-list-item {
  padding: 10px 8px 6px;
}

li.storage-group-list-item:not(:first-child) {
  border-top: 1px solid var(--sys-color-divider);
}

li.storage-group-list-item::before {
  display: none;
}

.player-entry-row {
  height: 26px;
  min-height: 26px;
  line-height: 26px;

  &:nth-child(odd) {
    background: var(--sys-color-surface1);
  }

  &:hover {
    background: var(--sys-color-state-hover-on-subtle);
  }

  &.selected {
    background: var(--sys-color-tonal-container);
    color: var(--sys-color-on-tonal-container);
  }
}

.player-entry-status-icon-centering {
  margin: auto;
  display: inherit;
}

.player-entry-status-icon {
  width: 28px;
  min-width: 28px;
  height: 26px;
  border-right: 1px solid var(--sys-color-divider);
  overflow: hidden;
}

.player-entry-frame-title {
  height: 26px;
  width: 125px;
  min-width: 125px;
  text-overflow: elipsis;
  padding: 0 10px;
  border-right: 1px solid var(--sys-color-divider);
  overflow: hidden;
}

.player-entry-player-title {
  height: 26px;
  padding-left: 10px;
  overflow: hidden;
}

.player-entry-header {
  height: 27px;
  line-height: 27px;
  min-height: 27px;
  padding-left: 10px;
  border-bottom: 1px solid var(--sys-color-divider);
}

/*# sourceURL=playerListView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);