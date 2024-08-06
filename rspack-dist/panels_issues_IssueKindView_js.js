"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_issues_IssueKindView_js"], {
"./panels/issues/IssueKindView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  IssueKindView: function() { return IssueKindView; },
  getClassNameFromKind: function() { return getClassNameFromKind; },
  getGroupIssuesByKindSetting: function() { return getGroupIssuesByKindSetting; },
  issueKindViewSortPriority: function() { return issueKindViewSortPriority; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/issues_manager/issues_manager.js */ "./models/issues_manager/issues_manager.js");
/* harmony import */var _ui_components_adorners_adorners_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/adorners/adorners.js */ "./ui/components/adorners/adorners.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_components_issue_counter_issue_counter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/components/issue_counter/issue_counter.js */ "./ui/components/issue_counter/issue_counter.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _components_components_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/components.js */ "./panels/issues/components/components.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
     * @description Menu entry for hiding all current Page Errors.
     */ hideAllCurrentPageErrors: 'Hide all current Page Errors',
    /**
     * @description Menu entry for hiding all current Breaking Changes.
     */ hideAllCurrentBreakingChanges: 'Hide all current Breaking Changes',
    /**
     * @description Menu entry for hiding all current Page Errors.
     */ hideAllCurrentImprovements: 'Hide all current Improvements'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/issues/IssueKindView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
function getGroupIssuesByKindSetting() {
    return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('group-issues-by-kind', false);
}
function issueKindViewSortPriority(a, b) {
    if (a.getKind() === b.getKind()) {
        return 0;
    }
    if (a.getKind() === "PageError" /* IssuesManager.Issue.IssueKind.PageError */ ) {
        return -1;
    }
    if (a.getKind() === "BreakingChange" /* IssuesManager.Issue.IssueKind.BreakingChange */  && b.getKind() === "Improvement" /* IssuesManager.Issue.IssueKind.Improvement */ ) {
        return -1;
    }
    return 1;
}
function getClassNameFromKind(kind) {
    switch(kind){
        case "BreakingChange" /* IssuesManager.Issue.IssueKind.BreakingChange */ :
            return 'breaking-changes';
        case "Improvement" /* IssuesManager.Issue.IssueKind.Improvement */ :
            return 'improvements';
        case "PageError" /* IssuesManager.Issue.IssueKind.PageError */ :
            return 'page-errors';
    }
}
var _kind = /*#__PURE__*/ new WeakMap(), _issueCount = /*#__PURE__*/ new WeakMap(), _appendHeader = /*#__PURE__*/ new WeakSet();
var IssueKindView = /*#__PURE__*/ function(_UI_TreeOutline_TreeElement) {
    "use strict";
    _inherits(IssueKindView, _UI_TreeOutline_TreeElement);
    var _super = _create_super(IssueKindView);
    function IssueKindView(kind) {
        _class_call_check(this, IssueKindView);
        var _this;
        _this = _super.call(this, undefined, true);
        _class_private_method_init(_assert_this_initialized(_this), _appendHeader);
        _class_private_field_init(_assert_this_initialized(_this), _kind, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _issueCount, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(_assert_this_initialized(_this), _kind, kind);
        _class_private_field_set(_assert_this_initialized(_this), _issueCount, document.createElement('span'));
        _this.toggleOnClick = true;
        _this.listItemElement.classList.add('issue-kind');
        _this.listItemElement.classList.add(getClassNameFromKind(kind));
        _this.childrenListElement.classList.add('issue-kind-body');
        return _this;
    }
    _create_class(IssueKindView, [
        {
            key: "getKind",
            value: function getKind() {
                return _class_private_field_get(this, _kind);
            }
        },
        {
            key: "getHideAllCurrentKindString",
            value: function getHideAllCurrentKindString() {
                switch(_class_private_field_get(this, _kind)){
                    case "PageError" /* IssuesManager.Issue.IssueKind.PageError */ :
                        return i18nString(UIStrings.hideAllCurrentPageErrors);
                    case "Improvement" /* IssuesManager.Issue.IssueKind.Improvement */ :
                        return i18nString(UIStrings.hideAllCurrentImprovements);
                    case "BreakingChange" /* IssuesManager.Issue.IssueKind.BreakingChange */ :
                        return i18nString(UIStrings.hideAllCurrentBreakingChanges);
                }
            }
        },
        {
            key: "onattach",
            value: function onattach() {
                _class_private_method_get(this, _appendHeader, appendHeader).call(this);
                this.expand();
            }
        },
        {
            key: "update",
            value: function update(count) {
                _class_private_field_get(this, _issueCount).textContent = "".concat(count);
            }
        }
    ]);
    return IssueKindView;
} //# sourceMappingURL=IssueKindView.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.TreeOutline.TreeElement);
function appendHeader() {
    var _this = this;
    var header = document.createElement('div');
    header.classList.add('header');
    var issueKindIcon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon();
    issueKindIcon.data = _ui_components_issue_counter_issue_counter_js__WEBPACK_IMPORTED_MODULE_5__.IssueCounter.getIssueKindIconData(_class_private_field_get(this, _kind));
    issueKindIcon.classList.add('leading-issue-icon');
    var countAdorner = new _ui_components_adorners_adorners_js__WEBPACK_IMPORTED_MODULE_3__.Adorner.Adorner();
    countAdorner.data = {
        name: 'countWrapper',
        content: _class_private_field_get(this, _issueCount)
    };
    countAdorner.classList.add('aggregated-issues-count');
    _class_private_field_get(this, _issueCount).textContent = '0';
    var title = document.createElement('div');
    title.classList.add('title');
    title.textContent = _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.Issue.getIssueKindName(_class_private_field_get(this, _kind));
    var hideAvailableIssuesBtn = new _components_components_js__WEBPACK_IMPORTED_MODULE_7__.HideIssuesMenu.HideIssuesMenu();
    hideAvailableIssuesBtn.classList.add('hide-available-issues');
    hideAvailableIssuesBtn.data = {
        menuItemLabel: this.getHideAllCurrentKindString(),
        menuItemAction: function() {
            var setting = _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.getHideIssueByCodeSetting();
            var values = setting.get();
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.IssuesManager.instance().issues()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var issue = _step.value;
                    if (issue.getKind() === _class_private_field_get(_this, _kind)) {
                        values[issue.code()] = "Hidden" /* IssuesManager.IssuesManager.IssueStatus.Hidden */ ;
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
            setting.set(values);
        }
    };
    header.appendChild(issueKindIcon);
    header.appendChild(countAdorner);
    header.appendChild(title);
    header.appendChild(hideAvailableIssuesBtn);
    this.listItemElement.appendChild(header);
}


}),

}]);