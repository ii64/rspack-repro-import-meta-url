"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_search_SearchView_js"], {
"./panels/search/SearchView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SearchView: function() { return SearchView; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _SearchResultsPane_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SearchResultsPane.js */ "./panels/search/SearchResultsPane.js");
/* harmony import */var _searchView_css_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./searchView.css.js */ "./panels/search/searchView.css.js");
// Copyright 2014 The Chromium Authors. All rights reserved.
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










var UIStrings = {
    /**
     *@description Placeholder text of a search bar
     */ find: 'Find',
    /**
     *@description Tooltip text on a toggle to enable search by matching case of the input
     */ enableCaseSensitive: 'Enable case sensitive search',
    /**
     *@description Tooltip text on a toggle to disable search by matching case of the input
     */ disableCaseSensitive: 'Disable case sensitive search',
    /**
     *@description Tooltip text on a toggle to enable searching with regular expression
     */ enableRegularExpression: 'Enable regular expressions',
    /**
     *@description Tooltip text on a toggle to disable searching with regular expression
     */ disableRegularExpression: 'Disable regular expressions',
    /**
     *@description Text to refresh the page
     */ refresh: 'Refresh',
    /**
     *@description Tooltip text to clear the search input field
     */ clearInput: 'Clear',
    /**
     *@description Text to clear content
     */ clear: 'Clear search',
    /**
     *@description Search message element text content in Search View of the Search tab
     */ indexing: 'Indexing…',
    /**
     *@description Text to indicate the searching is in progress
     */ searching: 'Searching…',
    /**
     *@description Text in Search View of the Search tab
     */ indexingInterrupted: 'Indexing interrupted.',
    /**
     *@description Search results message element text content in Search View of the Search tab
     */ foundMatchingLineInFile: 'Found 1 matching line in 1 file.',
    /**
     *@description Search results message element text content in Search View of the Search tab
     *@example {2} PH1
     */ foundDMatchingLinesInFile: 'Found {PH1} matching lines in 1 file.',
    /**
     *@description Search results message element text content in Search View of the Search tab
     *@example {2} PH1
     *@example {2} PH2
     */ foundDMatchingLinesInDFiles: 'Found {PH1} matching lines in {PH2} files.',
    /**
     *@description Search results message element text content in Search View of the Search tab
     */ noMatchesFound: 'No matches found.',
    /**
     *@description Text in Search View of the Search tab
     */ searchFinished: 'Search finished.',
    /**
     *@description Text in Search View of the Search tab
     */ searchInterrupted: 'Search interrupted.'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/search/SearchView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
function createSearchToggleButton(iconName, jslogContext) {
    var button = new _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button();
    button.data = {
        variant: "icon_toggle" /* Buttons.Button.Variant.ICON_TOGGLE */ ,
        size: "SMALL" /* Buttons.Button.Size.SMALL */ ,
        iconName: iconName,
        toggledIconName: iconName,
        toggleType: "primary-toggle" /* Buttons.Button.ToggleType.PRIMARY */ ,
        toggled: false,
        jslogContext: jslogContext
    };
    return button;
}
var // We throttle adding search results, otherwise we trigger DOM layout for each
// result added.
_throttler = /*#__PURE__*/ new WeakMap(), _pendingSearchResults = /*#__PURE__*/ new WeakMap(), _addPendingSearchResults = /*#__PURE__*/ new WeakSet();
var SearchView = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(SearchView, _UI_Widget_VBox);
    var _super = _create_super(SearchView);
    function SearchView(settingKey, throttler) {
        _class_call_check(this, SearchView);
        var _this;
        _this = _super.call(this, true);
        _class_private_method_init(_assert_this_initialized(_this), _addPendingSearchResults);
        _define_property(_assert_this_initialized(_this), "focusOnShow", void 0);
        _define_property(_assert_this_initialized(_this), "isIndexing", void 0);
        _define_property(_assert_this_initialized(_this), "searchId", void 0);
        _define_property(_assert_this_initialized(_this), "searchMatchesCount", void 0);
        _define_property(_assert_this_initialized(_this), "searchResultsCount", void 0);
        _define_property(_assert_this_initialized(_this), "nonEmptySearchResultsCount", void 0);
        _define_property(_assert_this_initialized(_this), "searchingView", void 0);
        _define_property(_assert_this_initialized(_this), "notFoundView", void 0);
        _define_property(_assert_this_initialized(_this), "searchConfig", void 0);
        _define_property(_assert_this_initialized(_this), "pendingSearchConfig", void 0);
        _define_property(_assert_this_initialized(_this), "searchResultsPane", void 0);
        _define_property(_assert_this_initialized(_this), "progressIndicator", void 0);
        _define_property(_assert_this_initialized(_this), "visiblePane", void 0);
        _define_property(_assert_this_initialized(_this), "searchPanelElement", void 0);
        _define_property(_assert_this_initialized(_this), "searchResultsElement", void 0);
        _define_property(_assert_this_initialized(_this), "search", void 0);
        _define_property(_assert_this_initialized(_this), "matchCaseButton", void 0);
        _define_property(_assert_this_initialized(_this), "regexButton", void 0);
        _define_property(_assert_this_initialized(_this), "searchMessageElement", void 0);
        _define_property(_assert_this_initialized(_this), "searchProgressPlaceholderElement", void 0);
        _define_property(_assert_this_initialized(_this), "searchResultsMessageElement", void 0);
        _define_property(_assert_this_initialized(_this), "advancedSearchConfig", void 0);
        _define_property(_assert_this_initialized(_this), "searchScope", void 0);
        _class_private_field_init(_assert_this_initialized(_this), _throttler, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _pendingSearchResults, {
            writable: true,
            value: []
        });
        _this.setMinimumSize(0, 40);
        _this.focusOnShow = false;
        _this.isIndexing = false;
        _this.searchId = 1;
        _this.searchMatchesCount = 0;
        _this.searchResultsCount = 0;
        _this.nonEmptySearchResultsCount = 0;
        _this.searchingView = null;
        _this.notFoundView = null;
        _this.searchConfig = null;
        _this.pendingSearchConfig = null;
        _this.searchResultsPane = null;
        _this.progressIndicator = null;
        _this.visiblePane = null;
        _class_private_field_set(_assert_this_initialized(_this), _throttler, throttler);
        _this.contentElement.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.panel('search').track({
            resize: true
        })));
        _this.contentElement.classList.add('search-view');
        _this.contentElement.addEventListener('keydown', function(event) {
            _this.onKeyDownOnPanel(event);
        });
        _this.searchPanelElement = _this.contentElement.createChild('div', 'search-drawer-header');
        _this.searchResultsElement = _this.contentElement.createChild('div');
        _this.searchResultsElement.className = 'search-results';
        var searchContainer = document.createElement('div');
        searchContainer.classList.add('search-container');
        var searchElements = searchContainer.createChild('div', 'toolbar-item-search');
        var searchIcon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.create('search');
        searchElements.appendChild(searchIcon);
        _this.search = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.HistoryInput.HistoryInput.create();
        _this.search.addEventListener('keydown', function(event) {
            _this.onKeyDown(event);
        });
        _this.search.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.textField().track({
            change: true,
            keydown: 'ArrowUp|ArrowDown|Enter'
        })));
        searchElements.appendChild(_this.search);
        _this.search.placeholder = i18nString(UIStrings.find);
        _this.search.setAttribute('type', 'search');
        _this.search.setAttribute('results', '0');
        _this.search.setAttribute('size', '100');
        _this.search.classList.add('search-toolbar-input');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.setLabel(_this.search, _this.search.placeholder);
        var clearInputFieldButton = new _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button();
        clearInputFieldButton.data = {
            variant: "icon" /* Buttons.Button.Variant.ICON */ ,
            size: "SMALL" /* Buttons.Button.Size.SMALL */ ,
            iconName: 'cross-circle-filled',
            jslogContext: 'clear-input',
            title: i18nString(UIStrings.clearInput)
        };
        clearInputFieldButton.classList.add('clear-button');
        clearInputFieldButton.addEventListener('click', function() {
            _this.onSearchInputClear();
        });
        clearInputFieldButton.tabIndex = -1;
        searchElements.appendChild(clearInputFieldButton);
        var regexIconName = 'regular-expression';
        _this.regexButton = createSearchToggleButton(regexIconName, regexIconName);
        _this.regexButton.addEventListener('click', function() {
            return _this.regexButtonToggled();
        });
        searchElements.appendChild(_this.regexButton);
        var matchCaseIconName = 'match-case';
        _this.matchCaseButton = createSearchToggleButton(matchCaseIconName, matchCaseIconName);
        _this.matchCaseButton.addEventListener('click', function() {
            return _this.matchCaseButtonToggled();
        });
        searchElements.appendChild(_this.matchCaseButton);
        _this.searchPanelElement.appendChild(searchContainer);
        var toolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.Toolbar('search-toolbar', _this.searchPanelElement);
        toolbar.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.toolbar()));
        var refreshButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarButton(i18nString(UIStrings.refresh), 'refresh', undefined, 'search.refresh');
        var clearButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarButton(i18nString(UIStrings.clear), 'clear', undefined, 'search.clear');
        toolbar.appendToolbarItem(refreshButton);
        toolbar.appendToolbarItem(clearButton);
        refreshButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , function() {
            return _this.onAction();
        });
        clearButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , function() {
            _this.resetSearch();
            _this.onSearchInputClear();
        });
        var searchStatusBarElement = _this.contentElement.createChild('div', 'search-toolbar-summary');
        _this.searchMessageElement = searchStatusBarElement.createChild('div', 'search-message');
        _this.searchProgressPlaceholderElement = searchStatusBarElement.createChild('div', 'flex-centered');
        _this.searchResultsMessageElement = searchStatusBarElement.createChild('div', 'search-message');
        _this.advancedSearchConfig = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createLocalSetting(settingKey + '-search-config', new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__.SearchConfig.SearchConfig('', true, false).toPlainObject());
        _this.load();
        _this.searchScope = null;
        return _this;
    }
    _create_class(SearchView, [
        {
            key: "regexButtonToggled",
            value: function regexButtonToggled() {
                this.regexButton.title = this.regexButton.toggled ? i18nString(UIStrings.disableRegularExpression) : i18nString(UIStrings.enableRegularExpression);
            }
        },
        {
            key: "matchCaseButtonToggled",
            value: function matchCaseButtonToggled() {
                this.matchCaseButton.title = this.matchCaseButton.toggled ? i18nString(UIStrings.disableCaseSensitive) : i18nString(UIStrings.enableCaseSensitive);
            }
        },
        {
            key: "buildSearchConfig",
            value: function buildSearchConfig() {
                return new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__.SearchConfig.SearchConfig(this.search.value, !this.matchCaseButton.toggled, this.regexButton.toggled);
            }
        },
        {
            key: "toggle",
            value: function toggle(queryCandidate, searchImmediately) {
                this.search.value = queryCandidate;
                if (this.isShowing()) {
                    this.focus();
                } else {
                    this.focusOnShow = true;
                }
                this.initScope();
                if (searchImmediately) {
                    this.onAction();
                } else {
                    this.startIndexing();
                }
            }
        },
        {
            key: "createScope",
            value: function createScope() {
                throw new Error('Not implemented');
            }
        },
        {
            key: "initScope",
            value: function initScope() {
                this.searchScope = this.createScope();
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                if (this.focusOnShow) {
                    this.focus();
                    this.focusOnShow = false;
                }
                this.registerCSSFiles([
                    _searchView_css_js__WEBPACK_IMPORTED_MODULE_9__["default"]
                ]);
            }
        },
        {
            key: "onIndexingFinished",
            value: function onIndexingFinished() {
                if (!this.progressIndicator) {
                    return;
                }
                var finished = !this.progressIndicator.isCanceled();
                this.progressIndicator.done();
                this.progressIndicator = null;
                this.isIndexing = false;
                this.searchMessageElement.textContent = finished ? '' : i18nString(UIStrings.indexingInterrupted);
                if (!finished) {
                    this.pendingSearchConfig = null;
                }
                if (!this.pendingSearchConfig) {
                    return;
                }
                var searchConfig = this.pendingSearchConfig;
                this.pendingSearchConfig = null;
                this.innerStartSearch(searchConfig);
            }
        },
        {
            key: "startIndexing",
            value: function startIndexing() {
                this.isIndexing = true;
                if (this.progressIndicator) {
                    this.progressIndicator.done();
                }
                this.progressIndicator = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ProgressIndicator.ProgressIndicator();
                this.searchMessageElement.textContent = i18nString(UIStrings.indexing);
                this.progressIndicator.show(this.searchProgressPlaceholderElement);
                if (this.searchScope) {
                    this.searchScope.performIndexing(new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Progress.ProgressProxy(this.progressIndicator, this.onIndexingFinished.bind(this)));
                }
            }
        },
        {
            key: "onSearchInputClear",
            value: function onSearchInputClear() {
                this.search.value = '';
                this.save();
                this.focus();
            }
        },
        {
            key: "onSearchResult",
            value: function onSearchResult(searchId, searchResult) {
                if (searchId !== this.searchId || !this.progressIndicator) {
                    return;
                }
                if (this.progressIndicator && this.progressIndicator.isCanceled()) {
                    this.onIndexingFinished();
                    return;
                }
                if (!this.searchResultsPane) {
                    this.searchResultsPane = new _SearchResultsPane_js__WEBPACK_IMPORTED_MODULE_8__.SearchResultsPane(this.searchConfig);
                    this.showPane(this.searchResultsPane);
                }
                _class_private_field_get(this, _pendingSearchResults).push(searchResult);
                var _this = this;
                void _class_private_field_get(this, _throttler).schedule(/*#__PURE__*/ _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            _class_private_method_get(_this, _addPendingSearchResults, addPendingSearchResults).call(_this)
                        ];
                    });
                }));
            }
        },
        {
            key: "onSearchFinished",
            value: function onSearchFinished(searchId, finished) {
                if (searchId !== this.searchId || !this.progressIndicator) {
                    return;
                }
                if (!this.searchResultsPane) {
                    this.nothingFound();
                }
                this.searchFinished(finished);
                this.searchConfig = null;
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.alert(this.searchMessageElement.textContent + ' ' + this.searchResultsMessageElement.textContent);
            }
        },
        {
            key: "innerStartSearch",
            value: function innerStartSearch(searchConfig) {
                this.searchConfig = searchConfig;
                if (this.progressIndicator) {
                    this.progressIndicator.done();
                }
                this.progressIndicator = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ProgressIndicator.ProgressIndicator();
                this.searchStarted(this.progressIndicator);
                if (this.searchScope) {
                    void this.searchScope.performSearch(searchConfig, this.progressIndicator, this.onSearchResult.bind(this, this.searchId), this.onSearchFinished.bind(this, this.searchId));
                }
            }
        },
        {
            key: "resetSearch",
            value: function resetSearch() {
                this.stopSearch();
                this.showPane(null);
                this.searchResultsPane = null;
                this.searchMessageElement.textContent = '';
                this.searchResultsMessageElement.textContent = '';
            }
        },
        {
            key: "stopSearch",
            value: function stopSearch() {
                if (this.progressIndicator && !this.isIndexing) {
                    this.progressIndicator.cancel();
                }
                if (this.searchScope) {
                    this.searchScope.stopSearch();
                }
                this.searchConfig = null;
            }
        },
        {
            key: "searchStarted",
            value: function searchStarted(progressIndicator) {
                this.searchMatchesCount = 0;
                this.searchResultsCount = 0;
                this.nonEmptySearchResultsCount = 0;
                if (!this.searchingView) {
                    this.searchingView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.EmptyWidget.EmptyWidget(i18nString(UIStrings.searching));
                }
                this.showPane(this.searchingView);
                this.searchMessageElement.textContent = i18nString(UIStrings.searching);
                progressIndicator.show(this.searchProgressPlaceholderElement);
                this.updateSearchResultsMessage();
            }
        },
        {
            key: "updateSearchResultsMessage",
            value: function updateSearchResultsMessage() {
                if (this.searchMatchesCount && this.searchResultsCount) {
                    if (this.searchMatchesCount === 1 && this.nonEmptySearchResultsCount === 1) {
                        this.searchResultsMessageElement.textContent = i18nString(UIStrings.foundMatchingLineInFile);
                    } else if (this.searchMatchesCount > 1 && this.nonEmptySearchResultsCount === 1) {
                        this.searchResultsMessageElement.textContent = i18nString(UIStrings.foundDMatchingLinesInFile, {
                            PH1: this.searchMatchesCount
                        });
                    } else {
                        this.searchResultsMessageElement.textContent = i18nString(UIStrings.foundDMatchingLinesInDFiles, {
                            PH1: this.searchMatchesCount,
                            PH2: this.nonEmptySearchResultsCount
                        });
                    }
                } else {
                    this.searchResultsMessageElement.textContent = '';
                }
            }
        },
        {
            key: "showPane",
            value: function showPane(panel) {
                if (this.visiblePane) {
                    this.visiblePane.detach();
                }
                if (panel) {
                    panel.show(this.searchResultsElement);
                }
                this.visiblePane = panel;
            }
        },
        {
            key: "nothingFound",
            value: function nothingFound() {
                if (!this.notFoundView) {
                    this.notFoundView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.EmptyWidget.EmptyWidget(i18nString(UIStrings.noMatchesFound));
                }
                this.showPane(this.notFoundView);
                this.searchResultsMessageElement.textContent = i18nString(UIStrings.noMatchesFound);
            }
        },
        {
            key: "addSearchResult",
            value: function addSearchResult(searchResult) {
                var matchesCount = searchResult.matchesCount();
                this.searchMatchesCount += matchesCount;
                this.searchResultsCount++;
                if (matchesCount) {
                    this.nonEmptySearchResultsCount++;
                }
                this.updateSearchResultsMessage();
            }
        },
        {
            key: "searchFinished",
            value: function searchFinished(finished) {
                this.searchMessageElement.textContent = finished ? i18nString(UIStrings.searchFinished) : i18nString(UIStrings.searchInterrupted);
            }
        },
        {
            key: "focus",
            value: function focus() {
                this.search.focus();
                this.search.select();
            }
        },
        {
            key: "willHide",
            value: function willHide() {
                this.stopSearch();
            }
        },
        {
            key: "onKeyDown",
            value: function onKeyDown(event) {
                this.save();
                switch(event.keyCode){
                    case _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.KeyboardShortcut.Keys.Enter.code:
                        this.onAction();
                        break;
                }
            }
        },
        {
            /**
     * Handles keydown event on panel itself for handling expand/collapse all shortcut
     *
     * We use `event.code` instead of `event.key` here to check whether the shortcut is triggered.
     * The reason is, `event.key` is dependent on the modification keys, locale and keyboard layout.
     * Usually it is useful when we care about the character that needs to be printed.
     *
     * However, our aim in here is to assign a shortcut to the physical key combination on the keyboard
     * not on the character that the key combination prints.
     *
     * For example, `Cmd + [` shortcut in global shortcuts map to focusing on previous panel.
     * In Turkish - Q keyboard layout, the key combination that triggers the shortcut prints `ğ`
     * character. Whereas in Turkish - Q Legacy keyboard layout, the shortcut that triggers focusing
     * on previous panel prints `[` character. So, if we use `event.key` and check
     * whether it is `[`, we break the shortcut in Turkish - Q keyboard layout.
     *
     * @param event KeyboardEvent
     */ key: "onKeyDownOnPanel",
            value: function onKeyDownOnPanel(event) {
                var isMac = _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.Platform.isMac();
                // "Command + Alt + ]" for Mac
                var shouldShowAllForMac = isMac && event.metaKey && !event.ctrlKey && event.altKey && event.code === 'BracketRight';
                // "Ctrl + Shift + }" for other platforms
                var shouldShowAllForOtherPlatforms = !isMac && event.ctrlKey && !event.metaKey && event.shiftKey && event.code === 'BracketRight';
                // "Command + Alt + [" for Mac
                var shouldCollapseAllForMac = isMac && event.metaKey && !event.ctrlKey && event.altKey && event.code === 'BracketLeft';
                // "Command + Alt + {" for other platforms
                var shouldCollapseAllForOtherPlatforms = !isMac && event.ctrlKey && !event.metaKey && event.shiftKey && event.code === 'BracketLeft';
                if (shouldShowAllForMac || shouldShowAllForOtherPlatforms) {
                    var _this_searchResultsPane;
                    (_this_searchResultsPane = this.searchResultsPane) === null || _this_searchResultsPane === void 0 ? void 0 : _this_searchResultsPane.showAllMatches();
                    void _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.logKeyDown(event.currentTarget, event, 'show-all-matches');
                } else if (shouldCollapseAllForMac || shouldCollapseAllForOtherPlatforms) {
                    var _this_searchResultsPane1;
                    (_this_searchResultsPane1 = this.searchResultsPane) === null || _this_searchResultsPane1 === void 0 ? void 0 : _this_searchResultsPane1.collapseAllResults();
                    void _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.logKeyDown(event.currentTarget, event, 'collapse-all-results');
                }
            }
        },
        {
            key: "save",
            value: function save() {
                this.advancedSearchConfig.set(this.buildSearchConfig().toPlainObject());
            }
        },
        {
            key: "load",
            value: function load() {
                var searchConfig = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__.SearchConfig.SearchConfig.fromPlainObject(this.advancedSearchConfig.get());
                this.search.value = searchConfig.query();
                this.matchCaseButton.toggled = !searchConfig.ignoreCase();
                this.matchCaseButtonToggled();
                this.regexButton.toggled = searchConfig.isRegex();
                this.regexButtonToggled();
            }
        },
        {
            key: "onAction",
            value: function onAction() {
                var searchConfig = this.buildSearchConfig();
                if (!searchConfig.query() || !searchConfig.query().length) {
                    return;
                }
                this.resetSearch();
                ++this.searchId;
                this.initScope();
                if (!this.isIndexing) {
                    this.startIndexing();
                }
                this.pendingSearchConfig = searchConfig;
            }
        },
        {
            key: "throttlerForTest",
            get: function get() {
                return _class_private_field_get(this, _throttler);
            }
        }
    ]);
    return SearchView;
} //# sourceMappingURL=SearchView.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Widget.VBox);
function addPendingSearchResults() {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = _class_private_field_get(this, _pendingSearchResults)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var searchResult = _step.value;
            this.addSearchResult(searchResult);
            if (searchResult.matchesCount()) {
                var _this_searchResultsPane;
                (_this_searchResultsPane = this.searchResultsPane) === null || _this_searchResultsPane === void 0 ? void 0 : _this_searchResultsPane.addSearchResult(searchResult);
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
    _class_private_field_set(this, _pendingSearchResults, []);
}


}),
"./panels/search/searchView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright 2014 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.search-drawer-header {\n  align-items: center;\n  flex-shrink: 0;\n  overflow: hidden;\n  display: inline-flex;\n  min-width: 150px;\n\n  .search-container {\n    border-bottom: 1px solid var(--sys-color-divider);\n    display: flex;\n    height: 100%;\n    align-items: center;\n    flex-grow: 1;\n  }\n\n  .toolbar-item-search {\n    flex-grow: 1;\n    box-shadow: inset 0 0 0 2px transparent;\n    box-sizing: border-box;\n    height: var(--sys-size-9);\n    margin-left: var(--sys-size-3);\n    padding: 0 var(--sys-size-2) 0 var(--sys-size-5);\n    border-radius: 100px;\n    position: relative;\n    display: flex;\n    align-items: center;\n    background-color: var(--sys-color-cdt-base);\n\n    &:has(input:focus) {\n      box-shadow: inset 0 0 0 2px var(--sys-color-state-focus-ring);\n    }\n\n    &:has(input:hover)::before {\n      content: "";\n      box-sizing: inherit;\n      height: 100%;\n      width: 100%;\n      position: absolute;\n      border-radius: 100px;\n      left: 0;\n      background-color: var(--sys-color-state-hover-on-subtle);\n    }\n\n    & > devtools-icon {\n      color: var(--sys-color-on-surface-subtle);\n      width: var(--sys-size-8);\n      height: var(--sys-size-8);\n      margin-right: var(--sys-size-3);\n    }\n  }\n\n  .search-toolbar-input {\n    appearance: none;\n    color: var(--sys-color-on-surface);\n    background-color: transparent;\n    border: 0;\n    z-index: 1;\n    flex: 1;\n\n    &::placeholder {\n      color: var(--sys-color-on-surface-subtle);\n    }\n\n    &:placeholder-shown + .clear-button {\n      display: none;\n    }\n\n    &::-webkit-search-cancel-button {\n      display: none;\n    }\n  }\n}\n\n.search-toolbar {\n  background-color: var(--sys-color-cdt-base-container);\n  border-bottom: 1px solid var(--sys-color-divider);\n}\n\n.search-toolbar-summary {\n  background-color: var(--sys-color-cdt-base-container);\n  border-top: 1px solid var(--sys-color-divider);\n  padding-left: 5px;\n  flex: 0 0 19px;\n  display: flex;\n  padding-right: 5px;\n}\n\n.search-toolbar-summary .search-message {\n  padding-top: 2px;\n  padding-left: 1ex;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.search-view .search-results {\n  overflow-y: auto;\n  display: flex;\n  flex: auto;\n}\n\n.search-view .search-results > div {\n  flex: auto;\n}\n\n/*# sourceURL=searchView.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);