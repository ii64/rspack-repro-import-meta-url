"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_elements_components_ElementsBreadcrumbs_ts"],{

/***/ "./src/panels/elements/components/ElementsBreadcrumbs.ts":
/*!***************************************************************!*\
  !*** ./src/panels/elements/components/ElementsBreadcrumbs.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ElementsBreadcrumbs: () => (/* binding */ ElementsBreadcrumbs),
/* harmony export */   NodeSelectedEvent: () => (/* binding */ NodeSelectedEvent)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/helpers/helpers.js */ "./src/ui/components/helpers/helpers.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_components_node_text_node_text_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/node_text/node_text.js */ "./src/ui/components/node_text/node_text.ts");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./src/ui/components/render_coordinator/render_coordinator.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './elementsBreadcrumbs.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ElementsBreadcrumbsUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ElementsBreadcrumbsUtils.js */ "./src/panels/elements/components/ElementsBreadcrumbsUtils.ts");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _ElementsBreadcrumbs_instances, _ElementsBreadcrumbs_shadow, _ElementsBreadcrumbs_resizeObserver, _ElementsBreadcrumbs_renderBound, _ElementsBreadcrumbs_crumbsData, _ElementsBreadcrumbs_selectedDOMNode, _ElementsBreadcrumbs_overflowing, _ElementsBreadcrumbs_userScrollPosition, _ElementsBreadcrumbs_isObservingResize, _ElementsBreadcrumbs_userHasManuallyScrolled, _ElementsBreadcrumbs_onCrumbClick, _ElementsBreadcrumbs_checkForOverflowOnResize, _ElementsBreadcrumbs_onCrumbMouseMove, _ElementsBreadcrumbs_onCrumbMouseLeave, _ElementsBreadcrumbs_onCrumbFocus, _ElementsBreadcrumbs_onCrumbBlur, _ElementsBreadcrumbs_engageResizeObserver, _ElementsBreadcrumbs_checkForOverflow, _ElementsBreadcrumbs_onCrumbsWindowScroll, _ElementsBreadcrumbs_updateScrollState, _ElementsBreadcrumbs_onOverflowClick, _ElementsBreadcrumbs_renderOverflowButton, _ElementsBreadcrumbs_render, _ElementsBreadcrumbs_ensureSelectedNodeIsVisible;









const UIStrings = {
    /**
     * @description Accessible name for DOM tree breadcrumb navigation.
     */
    breadcrumbs: 'DOM tree breadcrumbs',
    /**
     * @description A label/tooltip for a button that scrolls the breadcrumbs bar to the left to show more entries.
     */
    scrollLeft: 'Scroll left',
    /**
     * @description A label/tooltip for a button that scrolls the breadcrumbs bar to the right to show more entries.
     */
    scrollRight: 'Scroll right',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/elements/components/ElementsBreadcrumbs.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class NodeSelectedEvent extends Event {
    constructor(node) {
        super(NodeSelectedEvent.eventName, {});
        Object.defineProperty(this, "legacyDomNode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.legacyDomNode = node.legacyDomNode;
    }
}
Object.defineProperty(NodeSelectedEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'breadcrumbsnodeselected'
});
const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_4__.RenderCoordinator.RenderCoordinator.instance();
class ElementsBreadcrumbs extends HTMLElement {
    constructor() {
        super(...arguments);
        _ElementsBreadcrumbs_instances.add(this);
        _ElementsBreadcrumbs_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _ElementsBreadcrumbs_resizeObserver.set(this, new ResizeObserver(() => __classPrivateFieldGet(this, _ElementsBreadcrumbs_instances, "m", _ElementsBreadcrumbs_checkForOverflowOnResize).call(this)));
        _ElementsBreadcrumbs_renderBound.set(this, __classPrivateFieldGet(this, _ElementsBreadcrumbs_instances, "m", _ElementsBreadcrumbs_render).bind(this));
        _ElementsBreadcrumbs_crumbsData.set(this, []);
        _ElementsBreadcrumbs_selectedDOMNode.set(this, null);
        _ElementsBreadcrumbs_overflowing.set(this, false);
        _ElementsBreadcrumbs_userScrollPosition.set(this, 'start');
        _ElementsBreadcrumbs_isObservingResize.set(this, false);
        _ElementsBreadcrumbs_userHasManuallyScrolled.set(this, false);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ElementsBreadcrumbs_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './elementsBreadcrumbs.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
    set data(data) {
        __classPrivateFieldSet(this, _ElementsBreadcrumbs_selectedDOMNode, data.selectedNode, "f");
        __classPrivateFieldSet(this, _ElementsBreadcrumbs_crumbsData, data.crumbs, "f");
        __classPrivateFieldSet(this, _ElementsBreadcrumbs_userHasManuallyScrolled, false, "f");
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _ElementsBreadcrumbs_renderBound, "f"));
    }
    disconnectedCallback() {
        __classPrivateFieldSet(this, _ElementsBreadcrumbs_isObservingResize, false, "f");
        __classPrivateFieldGet(this, _ElementsBreadcrumbs_resizeObserver, "f").disconnect();
    }
}
_ElementsBreadcrumbs_shadow = new WeakMap(), _ElementsBreadcrumbs_resizeObserver = new WeakMap(), _ElementsBreadcrumbs_renderBound = new WeakMap(), _ElementsBreadcrumbs_crumbsData = new WeakMap(), _ElementsBreadcrumbs_selectedDOMNode = new WeakMap(), _ElementsBreadcrumbs_overflowing = new WeakMap(), _ElementsBreadcrumbs_userScrollPosition = new WeakMap(), _ElementsBreadcrumbs_isObservingResize = new WeakMap(), _ElementsBreadcrumbs_userHasManuallyScrolled = new WeakMap(), _ElementsBreadcrumbs_instances = new WeakSet(), _ElementsBreadcrumbs_onCrumbClick = function _ElementsBreadcrumbs_onCrumbClick(node) {
    return (event) => {
        event.preventDefault();
        this.dispatchEvent(new NodeSelectedEvent(node));
    };
}, _ElementsBreadcrumbs_checkForOverflowOnResize = 
/*
 * When the window is resized, we need to check if we either:
 * 1) overflowing, and now the window is big enough that we don't need to
 * 2) not overflowing, and now the window is small and we do need to
 *
 * If either of these are true, we toggle the overflowing state accordingly and trigger a re-render.
 */
async function _ElementsBreadcrumbs_checkForOverflowOnResize() {
    const crumbScrollContainer = __classPrivateFieldGet(this, _ElementsBreadcrumbs_shadow, "f").querySelector('.crumbs-scroll-container');
    const crumbWindow = __classPrivateFieldGet(this, _ElementsBreadcrumbs_shadow, "f").querySelector('.crumbs-window');
    if (!crumbScrollContainer || !crumbWindow) {
        return;
    }
    const crumbWindowWidth = await coordinator.read(() => {
        return crumbWindow.clientWidth;
    });
    const scrollContainerWidth = await coordinator.read(() => {
        return crumbScrollContainer.clientWidth;
    });
    if (__classPrivateFieldGet(this, _ElementsBreadcrumbs_overflowing, "f")) {
        // We currently have overflow buttons.
        // If the content while displaying buttons still fits, then we can
        // rerender without overflow.
        if (scrollContainerWidth < crumbWindowWidth) {
            __classPrivateFieldSet(this, _ElementsBreadcrumbs_overflowing, false, "f");
        }
    }
    else {
        // We currently do not have overflow buttons.
        // If the content won't fit anymore, then rerender with overflow.
        if (scrollContainerWidth > crumbWindowWidth) {
            __classPrivateFieldSet(this, _ElementsBreadcrumbs_overflowing, true, "f");
        }
    }
    void __classPrivateFieldGet(this, _ElementsBreadcrumbs_instances, "m", _ElementsBreadcrumbs_ensureSelectedNodeIsVisible).call(this);
    void __classPrivateFieldGet(this, _ElementsBreadcrumbs_instances, "m", _ElementsBreadcrumbs_updateScrollState).call(this, crumbWindow);
}, _ElementsBreadcrumbs_onCrumbMouseMove = function _ElementsBreadcrumbs_onCrumbMouseMove(node) {
    return () => node.highlightNode();
}, _ElementsBreadcrumbs_onCrumbMouseLeave = function _ElementsBreadcrumbs_onCrumbMouseLeave(node) {
    return () => node.clearHighlight();
}, _ElementsBreadcrumbs_onCrumbFocus = function _ElementsBreadcrumbs_onCrumbFocus(node) {
    return () => node.highlightNode();
}, _ElementsBreadcrumbs_onCrumbBlur = function _ElementsBreadcrumbs_onCrumbBlur(node) {
    return () => node.clearHighlight();
}, _ElementsBreadcrumbs_engageResizeObserver = function _ElementsBreadcrumbs_engageResizeObserver() {
    if (!__classPrivateFieldGet(this, _ElementsBreadcrumbs_resizeObserver, "f") || __classPrivateFieldGet(this, _ElementsBreadcrumbs_isObservingResize, "f") === true) {
        return;
    }
    const crumbs = __classPrivateFieldGet(this, _ElementsBreadcrumbs_shadow, "f").querySelector('.crumbs');
    if (!crumbs) {
        return;
    }
    __classPrivateFieldGet(this, _ElementsBreadcrumbs_resizeObserver, "f").observe(crumbs);
    __classPrivateFieldSet(this, _ElementsBreadcrumbs_isObservingResize, true, "f");
}, _ElementsBreadcrumbs_checkForOverflow = 
/**
 * This method runs after render or resize and checks if the crumbs are too large
 * for their container and therefore we need to render the overflow buttons at
 * either end which the user can use to scroll back and forward through the crumbs.
 * If it finds that we are overflowing, it sets the instance variable and
 * triggers a re-render. If we are not overflowing, this method returns and
 * does nothing.
 */
async function _ElementsBreadcrumbs_checkForOverflow() {
    const crumbScrollContainer = __classPrivateFieldGet(this, _ElementsBreadcrumbs_shadow, "f").querySelector('.crumbs-scroll-container');
    const crumbWindow = __classPrivateFieldGet(this, _ElementsBreadcrumbs_shadow, "f").querySelector('.crumbs-window');
    if (!crumbScrollContainer || !crumbWindow) {
        return;
    }
    const crumbWindowWidth = await coordinator.read(() => {
        return crumbWindow.clientWidth;
    });
    const scrollContainerWidth = await coordinator.read(() => {
        return crumbScrollContainer.clientWidth;
    });
    if (__classPrivateFieldGet(this, _ElementsBreadcrumbs_overflowing, "f")) {
        // We currently have overflow buttons.
        // If the content while displaying buttons still fits, then we can
        // rerender without overflow.
        if (scrollContainerWidth < crumbWindowWidth) {
            __classPrivateFieldSet(this, _ElementsBreadcrumbs_overflowing, false, "f");
            void __classPrivateFieldGet(this, _ElementsBreadcrumbs_instances, "m", _ElementsBreadcrumbs_render).call(this);
        }
    }
    else {
        // We currently do not have overflow buttons.
        // If the content won't fit anymore, then rerender with overflow.
        if (scrollContainerWidth > crumbWindowWidth) {
            __classPrivateFieldSet(this, _ElementsBreadcrumbs_overflowing, true, "f");
            void __classPrivateFieldGet(this, _ElementsBreadcrumbs_instances, "m", _ElementsBreadcrumbs_render).call(this);
        }
    }
}, _ElementsBreadcrumbs_onCrumbsWindowScroll = function _ElementsBreadcrumbs_onCrumbsWindowScroll(event) {
    if (!event.target) {
        return;
    }
    /* not all Events are DOM Events so the TS Event def doesn't have
     * .target typed as an Element but in this case we're getting this
     * from a DOM event so we're confident of having .target and it
     * being an element
     */
    const scrollWindow = event.target;
    __classPrivateFieldGet(this, _ElementsBreadcrumbs_instances, "m", _ElementsBreadcrumbs_updateScrollState).call(this, scrollWindow);
}, _ElementsBreadcrumbs_updateScrollState = function _ElementsBreadcrumbs_updateScrollState(scrollWindow) {
    const maxScrollLeft = scrollWindow.scrollWidth - scrollWindow.clientWidth;
    const currentScroll = scrollWindow.scrollLeft;
    /**
     * When we check if the user is at the beginning or end of the crumbs (such
     * that we disable the relevant button - you can't keep scrolling right if
     * you're at the last breadcrumb) we want to not check exact numbers but
     * give a bit of padding. This means if the user has scrolled to nearly the
     * end but not quite (e.g. there are 2 more pixels they could scroll) we'll
     * mark it as them being at the end. This variable controls how much padding
     * we apply. So if a user has scrolled to within 10px of the end, we count
     * them as being at the end and disable the button.
     */
    const scrollBeginningAndEndPadding = 10;
    if (currentScroll < scrollBeginningAndEndPadding) {
        __classPrivateFieldSet(this, _ElementsBreadcrumbs_userScrollPosition, 'start', "f");
    }
    else if (currentScroll >= maxScrollLeft - scrollBeginningAndEndPadding) {
        __classPrivateFieldSet(this, _ElementsBreadcrumbs_userScrollPosition, 'end', "f");
    }
    else {
        __classPrivateFieldSet(this, _ElementsBreadcrumbs_userScrollPosition, 'middle', "f");
    }
    void __classPrivateFieldGet(this, _ElementsBreadcrumbs_instances, "m", _ElementsBreadcrumbs_render).call(this);
}, _ElementsBreadcrumbs_onOverflowClick = function _ElementsBreadcrumbs_onOverflowClick(direction) {
    return () => {
        __classPrivateFieldSet(this, _ElementsBreadcrumbs_userHasManuallyScrolled, true, "f");
        const scrollWindow = __classPrivateFieldGet(this, _ElementsBreadcrumbs_shadow, "f").querySelector('.crumbs-window');
        if (!scrollWindow) {
            return;
        }
        const amountToScrollOnClick = scrollWindow.clientWidth / 2;
        const newScrollAmount = direction === 'left' ?
            Math.max(Math.floor(scrollWindow.scrollLeft - amountToScrollOnClick), 0) :
            scrollWindow.scrollLeft + amountToScrollOnClick;
        scrollWindow.scrollTo({
            behavior: 'smooth',
            left: newScrollAmount,
        });
    };
}, _ElementsBreadcrumbs_renderOverflowButton = function _ElementsBreadcrumbs_renderOverflowButton(direction, disabled) {
    const buttonStyles = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.Directives.classMap({
        overflow: true,
        [direction]: true,
        hidden: !__classPrivateFieldGet(this, _ElementsBreadcrumbs_overflowing, "f"),
    });
    const tooltipString = direction === 'left' ? i18nString(UIStrings.scrollLeft) : i18nString(UIStrings.scrollRight);
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html `
      <button
        class=${buttonStyles}
        @click=${__classPrivateFieldGet(this, _ElementsBreadcrumbs_instances, "m", _ElementsBreadcrumbs_onOverflowClick).call(this, direction)}
        ?disabled=${disabled}
        aria-label=${tooltipString}
        title=${tooltipString}>
        <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon.litTagName} .data=${{
        iconName: 'triangle-' + direction,
        color: 'var(--sys-color-on-surface)',
        width: '12px',
        height: '10px',
    }}>
        </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon.litTagName}>
      </button>
      `;
    // clang-format on
}, _ElementsBreadcrumbs_render = function _ElementsBreadcrumbs_render() {
    const crumbs = (0,_ElementsBreadcrumbsUtils_js__WEBPACK_IMPORTED_MODULE_8__.crumbsToRender)(__classPrivateFieldGet(this, _ElementsBreadcrumbs_crumbsData, "f"), __classPrivateFieldGet(this, _ElementsBreadcrumbs_selectedDOMNode, "f"));
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html `
      <nav class="crumbs" aria-label=${i18nString(UIStrings.breadcrumbs)} jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.elementsBreadcrumbs()}>
        ${__classPrivateFieldGet(this, _ElementsBreadcrumbs_instances, "m", _ElementsBreadcrumbs_renderOverflowButton).call(this, 'left', __classPrivateFieldGet(this, _ElementsBreadcrumbs_userScrollPosition, "f") === 'start')}

        <div class="crumbs-window" @scroll=${__classPrivateFieldGet(this, _ElementsBreadcrumbs_instances, "m", _ElementsBreadcrumbs_onCrumbsWindowScroll)}>
          <ul class="crumbs-scroll-container">
            ${crumbs.map(crumb => {
        const crumbClasses = {
            crumb: true,
            selected: crumb.selected,
        };
        // eslint-disable-next-line rulesdir/ban_a_tags_in_lit_html
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html `
                <li class=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.Directives.classMap(crumbClasses)}
                  data-node-id=${crumb.node.id}
                  data-crumb="true"
                >
                  <a href="#"
                    draggable=false
                    class="crumb-link"
                    jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.item().track({ click: true })}
                    @click=${__classPrivateFieldGet(this, _ElementsBreadcrumbs_instances, "m", _ElementsBreadcrumbs_onCrumbClick).call(this, crumb.node)}
                    @mousemove=${__classPrivateFieldGet(this, _ElementsBreadcrumbs_instances, "m", _ElementsBreadcrumbs_onCrumbMouseMove).call(this, crumb.node)}
                    @mouseleave=${__classPrivateFieldGet(this, _ElementsBreadcrumbs_instances, "m", _ElementsBreadcrumbs_onCrumbMouseLeave).call(this, crumb.node)}
                    @focus=${__classPrivateFieldGet(this, _ElementsBreadcrumbs_instances, "m", _ElementsBreadcrumbs_onCrumbFocus).call(this, crumb.node)}
                    @blur=${__classPrivateFieldGet(this, _ElementsBreadcrumbs_instances, "m", _ElementsBreadcrumbs_onCrumbBlur).call(this, crumb.node)}
                  ><${_ui_components_node_text_node_text_js__WEBPACK_IMPORTED_MODULE_3__.NodeText.NodeText.litTagName} data-node-title=${crumb.title.main} .data=${{
            nodeTitle: crumb.title.main,
            nodeId: crumb.title.extras.id,
            nodeClasses: crumb.title.extras.classes,
        }}></${_ui_components_node_text_node_text_js__WEBPACK_IMPORTED_MODULE_3__.NodeText.NodeText.litTagName}></a>
                </li>`;
    })}
          </ul>
        </div>
        ${__classPrivateFieldGet(this, _ElementsBreadcrumbs_instances, "m", _ElementsBreadcrumbs_renderOverflowButton).call(this, 'right', __classPrivateFieldGet(this, _ElementsBreadcrumbs_userScrollPosition, "f") === 'end')}
      </nav>
    `, __classPrivateFieldGet(this, _ElementsBreadcrumbs_shadow, "f"), { host: this });
    // clang-format on
    void __classPrivateFieldGet(this, _ElementsBreadcrumbs_instances, "m", _ElementsBreadcrumbs_checkForOverflow).call(this);
    __classPrivateFieldGet(this, _ElementsBreadcrumbs_instances, "m", _ElementsBreadcrumbs_engageResizeObserver).call(this);
    void __classPrivateFieldGet(this, _ElementsBreadcrumbs_instances, "m", _ElementsBreadcrumbs_ensureSelectedNodeIsVisible).call(this);
}, _ElementsBreadcrumbs_ensureSelectedNodeIsVisible = async function _ElementsBreadcrumbs_ensureSelectedNodeIsVisible() {
    /*
     * If the user has manually scrolled the crumbs in either direction, we
     * effectively hand control over the scrolling down to them. This is to
     * prevent the user manually scrolling to the end, and then us scrolling
     * them back to the selected node. The moment they click either scroll
     * button we set userHasManuallyScrolled, and we reset it when we get new
     * data in. This means if the user clicks on a different element in the
     * tree, we will auto-scroll that element into view, because we'll get new
     * data and hence the flag will be reset.
     */
    if (!__classPrivateFieldGet(this, _ElementsBreadcrumbs_selectedDOMNode, "f") || !__classPrivateFieldGet(this, _ElementsBreadcrumbs_shadow, "f") || !__classPrivateFieldGet(this, _ElementsBreadcrumbs_overflowing, "f") || __classPrivateFieldGet(this, _ElementsBreadcrumbs_userHasManuallyScrolled, "f")) {
        return;
    }
    const activeCrumbId = __classPrivateFieldGet(this, _ElementsBreadcrumbs_selectedDOMNode, "f").id;
    const activeCrumb = __classPrivateFieldGet(this, _ElementsBreadcrumbs_shadow, "f").querySelector(`.crumb[data-node-id="${activeCrumbId}"]`);
    if (activeCrumb) {
        await coordinator.scroll(() => {
            activeCrumb.scrollIntoView({
                // We only want to scroll smoothly when the user is clicking the
                // buttons manually. If we are automatically scrolling, we could be
                // scrolling a long distance, so just jump there right away. This
                // most commonly occurs when the user first opens DevTools on a
                // deeply nested element, and the slow scrolling of the breadcrumbs
                // is just a distraction and not useful.
                behavior: 'auto',
            });
        });
    }
};
Object.defineProperty(ElementsBreadcrumbs, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.literal `devtools-elements-breadcrumbs`
});
customElements.define('devtools-elements-breadcrumbs', ElementsBreadcrumbs);


/***/ }),

/***/ "./src/panels/elements/components/ElementsBreadcrumbsUtils.ts":
/*!********************************************************************!*\
  !*** ./src/panels/elements/components/ElementsBreadcrumbsUtils.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   crumbsToRender: () => (/* binding */ crumbsToRender),
/* harmony export */   determineElementTitle: () => (/* binding */ determineElementTitle)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const UIStrings = {
    /**
     * @description Text in Elements Breadcrumbs of the Elements panel. Indicates that a HTML element
     * is a text node, meaning it contains text only and no other HTML elements. Should be translatd.
     */
    text: '(text)',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/elements/components/ElementsBreadcrumbsUtils.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
const crumbsToRender = (crumbs, selectedNode) => {
    if (!selectedNode) {
        return [];
    }
    return crumbs
        .filter(crumb => {
        return crumb.nodeType !== Node.DOCUMENT_NODE;
    })
        .map(crumb => {
        return {
            title: determineElementTitle(crumb),
            selected: crumb.id === selectedNode.id,
            node: crumb,
            originalNode: crumb.legacyDomNode,
        };
    })
        .reverse();
};
const makeCrumbTitle = (main, extras = {}) => {
    return {
        main,
        extras,
    };
};
const determineElementTitle = (domNode) => {
    switch (domNode.nodeType) {
        case Node.ELEMENT_NODE: {
            if (domNode.pseudoType) {
                return makeCrumbTitle('::' + domNode.pseudoType);
            }
            const crumbTitle = makeCrumbTitle(domNode.nodeNameNicelyCased);
            const id = domNode.getAttribute('id');
            if (id) {
                crumbTitle.extras.id = id;
            }
            const classAttribute = domNode.getAttribute('class');
            if (classAttribute) {
                const classes = new Set(classAttribute.split(/\s+/));
                crumbTitle.extras.classes = Array.from(classes);
            }
            return crumbTitle;
        }
        case Node.TEXT_NODE:
            return makeCrumbTitle(i18nString(UIStrings.text));
        case Node.COMMENT_NODE:
            return makeCrumbTitle('<!-->');
        case Node.DOCUMENT_TYPE_NODE:
            return makeCrumbTitle('<!doctype>');
        case Node.DOCUMENT_FRAGMENT_NODE:
            return makeCrumbTitle(domNode.shadowRootType ? '#shadow-root' : domNode.nodeNameNicelyCased);
        default:
            return makeCrumbTitle(domNode.nodeNameNicelyCased);
    }
};


/***/ })

}]);