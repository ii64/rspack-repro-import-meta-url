"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_elements_components_ElementsBreadcrumbs_js"],{

/***/ "./panels/elements/components/ElementsBreadcrumbs.js":
/*!***********************************************************!*\
  !*** ./panels/elements/components/ElementsBreadcrumbs.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ElementsBreadcrumbs: () => (/* binding */ ElementsBreadcrumbs),
/* harmony export */   NodeSelectedEvent: () => (/* binding */ NodeSelectedEvent)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/helpers/helpers.js */ "./ui/components/helpers/helpers.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_components_node_text_node_text_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/node_text/node_text.js */ "./ui/components/node_text/node_text.js");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _elementsBreadcrumbs_css_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./elementsBreadcrumbs.css.js */ "./panels/elements/components/elementsBreadcrumbs.css.js");
/* harmony import */ var _ElementsBreadcrumbsUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ElementsBreadcrumbsUtils.js */ "./panels/elements/components/ElementsBreadcrumbsUtils.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.









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
    static eventName = 'breadcrumbsnodeselected';
    legacyDomNode;
    constructor(node) {
        super(NodeSelectedEvent.eventName, {});
        this.legacyDomNode = node.legacyDomNode;
    }
}
const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_4__.RenderCoordinator.RenderCoordinator.instance();
class ElementsBreadcrumbs extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.literal `devtools-elements-breadcrumbs`;
    #shadow = this.attachShadow({ mode: 'open' });
    #resizeObserver = new ResizeObserver(() => this.#checkForOverflowOnResize());
    #renderBound = this.#render.bind(this);
    #crumbsData = [];
    #selectedDOMNode = null;
    #overflowing = false;
    #userScrollPosition = 'start';
    #isObservingResize = false;
    #userHasManuallyScrolled = false;
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_elementsBreadcrumbs_css_js__WEBPACK_IMPORTED_MODULE_7__["default"]];
    }
    set data(data) {
        this.#selectedDOMNode = data.selectedNode;
        this.#crumbsData = data.crumbs;
        this.#userHasManuallyScrolled = false;
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__.ScheduledRender.scheduleRender(this, this.#renderBound);
    }
    disconnectedCallback() {
        this.#isObservingResize = false;
        this.#resizeObserver.disconnect();
    }
    #onCrumbClick(node) {
        return (event) => {
            event.preventDefault();
            this.dispatchEvent(new NodeSelectedEvent(node));
        };
    }
    /*
     * When the window is resized, we need to check if we either:
     * 1) overflowing, and now the window is big enough that we don't need to
     * 2) not overflowing, and now the window is small and we do need to
     *
     * If either of these are true, we toggle the overflowing state accordingly and trigger a re-render.
     */
    async #checkForOverflowOnResize() {
        const crumbScrollContainer = this.#shadow.querySelector('.crumbs-scroll-container');
        const crumbWindow = this.#shadow.querySelector('.crumbs-window');
        if (!crumbScrollContainer || !crumbWindow) {
            return;
        }
        const crumbWindowWidth = await coordinator.read(() => {
            return crumbWindow.clientWidth;
        });
        const scrollContainerWidth = await coordinator.read(() => {
            return crumbScrollContainer.clientWidth;
        });
        if (this.#overflowing) {
            // We currently have overflow buttons.
            // If the content while displaying buttons still fits, then we can
            // rerender without overflow.
            if (scrollContainerWidth < crumbWindowWidth) {
                this.#overflowing = false;
            }
        }
        else {
            // We currently do not have overflow buttons.
            // If the content won't fit anymore, then rerender with overflow.
            if (scrollContainerWidth > crumbWindowWidth) {
                this.#overflowing = true;
            }
        }
        void this.#ensureSelectedNodeIsVisible();
        void this.#updateScrollState(crumbWindow);
    }
    #onCrumbMouseMove(node) {
        return () => node.highlightNode();
    }
    #onCrumbMouseLeave(node) {
        return () => node.clearHighlight();
    }
    #onCrumbFocus(node) {
        return () => node.highlightNode();
    }
    #onCrumbBlur(node) {
        return () => node.clearHighlight();
    }
    #engageResizeObserver() {
        if (!this.#resizeObserver || this.#isObservingResize === true) {
            return;
        }
        const crumbs = this.#shadow.querySelector('.crumbs');
        if (!crumbs) {
            return;
        }
        this.#resizeObserver.observe(crumbs);
        this.#isObservingResize = true;
    }
    /**
     * This method runs after render or resize and checks if the crumbs are too large
     * for their container and therefore we need to render the overflow buttons at
     * either end which the user can use to scroll back and forward through the crumbs.
     * If it finds that we are overflowing, it sets the instance variable and
     * triggers a re-render. If we are not overflowing, this method returns and
     * does nothing.
     */
    async #checkForOverflow() {
        const crumbScrollContainer = this.#shadow.querySelector('.crumbs-scroll-container');
        const crumbWindow = this.#shadow.querySelector('.crumbs-window');
        if (!crumbScrollContainer || !crumbWindow) {
            return;
        }
        const crumbWindowWidth = await coordinator.read(() => {
            return crumbWindow.clientWidth;
        });
        const scrollContainerWidth = await coordinator.read(() => {
            return crumbScrollContainer.clientWidth;
        });
        if (this.#overflowing) {
            // We currently have overflow buttons.
            // If the content while displaying buttons still fits, then we can
            // rerender without overflow.
            if (scrollContainerWidth < crumbWindowWidth) {
                this.#overflowing = false;
                void this.#render();
            }
        }
        else {
            // We currently do not have overflow buttons.
            // If the content won't fit anymore, then rerender with overflow.
            if (scrollContainerWidth > crumbWindowWidth) {
                this.#overflowing = true;
                void this.#render();
            }
        }
    }
    #onCrumbsWindowScroll(event) {
        if (!event.target) {
            return;
        }
        /* not all Events are DOM Events so the TS Event def doesn't have
         * .target typed as an Element but in this case we're getting this
         * from a DOM event so we're confident of having .target and it
         * being an element
         */
        const scrollWindow = event.target;
        this.#updateScrollState(scrollWindow);
    }
    #updateScrollState(scrollWindow) {
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
            this.#userScrollPosition = 'start';
        }
        else if (currentScroll >= maxScrollLeft - scrollBeginningAndEndPadding) {
            this.#userScrollPosition = 'end';
        }
        else {
            this.#userScrollPosition = 'middle';
        }
        void this.#render();
    }
    #onOverflowClick(direction) {
        return () => {
            this.#userHasManuallyScrolled = true;
            const scrollWindow = this.#shadow.querySelector('.crumbs-window');
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
    }
    #renderOverflowButton(direction, disabled) {
        const buttonStyles = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.Directives.classMap({
            overflow: true,
            [direction]: true,
            hidden: !this.#overflowing,
        });
        const tooltipString = direction === 'left' ? i18nString(UIStrings.scrollLeft) : i18nString(UIStrings.scrollRight);
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html `
      <button
        class=${buttonStyles}
        @click=${this.#onOverflowClick(direction)}
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
    }
    #render() {
        const crumbs = (0,_ElementsBreadcrumbsUtils_js__WEBPACK_IMPORTED_MODULE_8__.crumbsToRender)(this.#crumbsData, this.#selectedDOMNode);
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html `
      <nav class="crumbs" aria-label=${i18nString(UIStrings.breadcrumbs)} jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.elementsBreadcrumbs()}>
        ${this.#renderOverflowButton('left', this.#userScrollPosition === 'start')}

        <div class="crumbs-window" @scroll=${this.#onCrumbsWindowScroll}>
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
                    @click=${this.#onCrumbClick(crumb.node)}
                    @mousemove=${this.#onCrumbMouseMove(crumb.node)}
                    @mouseleave=${this.#onCrumbMouseLeave(crumb.node)}
                    @focus=${this.#onCrumbFocus(crumb.node)}
                    @blur=${this.#onCrumbBlur(crumb.node)}
                  ><${_ui_components_node_text_node_text_js__WEBPACK_IMPORTED_MODULE_3__.NodeText.NodeText.litTagName} data-node-title=${crumb.title.main} .data=${{
                nodeTitle: crumb.title.main,
                nodeId: crumb.title.extras.id,
                nodeClasses: crumb.title.extras.classes,
            }}></${_ui_components_node_text_node_text_js__WEBPACK_IMPORTED_MODULE_3__.NodeText.NodeText.litTagName}></a>
                </li>`;
        })}
          </ul>
        </div>
        ${this.#renderOverflowButton('right', this.#userScrollPosition === 'end')}
      </nav>
    `, this.#shadow, { host: this });
        // clang-format on
        void this.#checkForOverflow();
        this.#engageResizeObserver();
        void this.#ensureSelectedNodeIsVisible();
    }
    async #ensureSelectedNodeIsVisible() {
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
        if (!this.#selectedDOMNode || !this.#shadow || !this.#overflowing || this.#userHasManuallyScrolled) {
            return;
        }
        const activeCrumbId = this.#selectedDOMNode.id;
        const activeCrumb = this.#shadow.querySelector(`.crumb[data-node-id="${activeCrumbId}"]`);
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
    }
}
customElements.define('devtools-elements-breadcrumbs', ElementsBreadcrumbs);
//# sourceMappingURL=ElementsBreadcrumbs.js.map

/***/ }),

/***/ "./panels/elements/components/ElementsBreadcrumbsUtils.js":
/*!****************************************************************!*\
  !*** ./panels/elements/components/ElementsBreadcrumbsUtils.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   crumbsToRender: () => (/* binding */ crumbsToRender),
/* harmony export */   determineElementTitle: () => (/* binding */ determineElementTitle)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
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
//# sourceMappingURL=ElementsBreadcrumbsUtils.js.map

/***/ }),

/***/ "./panels/elements/components/elementsBreadcrumbs.css.js":
/*!***************************************************************!*\
  !*** ./panels/elements/components/elementsBreadcrumbs.css.js ***!
  \***************************************************************/
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
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  --override-node-text-label-color: var(--sys-color-token-tag);
  --override-node-text-class-color: var(--sys-color-token-attribute);
  --override-node-text-id-color: var(--sys-color-token-attribute);
  --override-node-text-multiple-descriptors-id: var(--sys-color-on-surface);
  --override-node-text-multiple-descriptors-class: var(--sys-color-token-property);
}

.crumbs {
  display: inline-flex;
  align-items: stretch;
  width: 100%;
  overflow: hidden;
  pointer-events: auto;
  cursor: default;
  white-space: nowrap;
  position: relative;
  background: var(--sys-color-cdt-base-container);
  font-size: inherit;
  font-family: inherit;
}

.crumbs-window {
  flex-grow: 2;
  overflow: hidden;
}

.crumbs-scroll-container {
  display: inline-flex;
  margin: 0;
  padding: 0;
}

.crumb {
  display: block;
  padding: 0 7px;
  line-height: 23px;
  white-space: nowrap;
}

.overflow {
  padding: 0 5px;
  font-weight: bold;
  display: block;
  border: none;
  flex-grow: 0;
  flex-shrink: 0;
  text-align: center;
  background-color: var(--sys-color-cdt-base-container);
  color: var(--sys-color-token-subtle);
  margin: 1px;
  outline: 1px solid var(--sys-color-neutral-outline);
}

.overflow.hidden {
  display: none;
}

.overflow:disabled {
  opacity: 50%;
}

.overflow:focus {
  outline-color: var(--sys-color-primary);
}

.overflow:not(:disabled):hover {
  background-color: var(--sys-color-state-hover-on-subtle);
  color: var(--sys-color-on-surface);
}

.crumb-link {
  text-decoration: none;
  color: inherit;
}

.crumb:hover {
  background: var(--sys-color-state-hover-on-subtle);
}

.crumb.selected {
  background: var(--sys-color-tonal-container);
}

.crumb:focus {
  outline: var(--sys-color-primary) auto 1px;
}

/*# sourceURL=elementsBreadcrumbs.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);