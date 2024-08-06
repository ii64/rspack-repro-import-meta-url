"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_profiler_ProfileSidebarTreeElement_js"], {
"./panels/profiler/ProfileSidebarTreeElement.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ProfileSidebarTreeElement: function() { return ProfileSidebarTreeElement; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
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
     *@description Tooltip for the 3-dots menu in the Memory panel profiles list.
     */ profileOptions: 'Profile options'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/profiler/ProfileSidebarTreeElement.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var ProfileSidebarTreeElement = /*#__PURE__*/ function(_UI_TreeOutline_TreeElement) {
    "use strict";
    _inherits(ProfileSidebarTreeElement, _UI_TreeOutline_TreeElement);
    var _super = _create_super(ProfileSidebarTreeElement);
    function ProfileSidebarTreeElement(dataDisplayDelegate, profile, className) {
        _class_call_check(this, ProfileSidebarTreeElement);
        var _this;
        _this = _super.call(this, '', false);
        _define_property(_assert_this_initialized(_this), "iconElement", void 0);
        _define_property(_assert_this_initialized(_this), "titlesElement", void 0);
        _define_property(_assert_this_initialized(_this), "menuElement", void 0);
        _define_property(_assert_this_initialized(_this), "titleContainer", void 0);
        _define_property(_assert_this_initialized(_this), "titleElement", void 0);
        _define_property(_assert_this_initialized(_this), "subtitleElement", void 0);
        _define_property(_assert_this_initialized(_this), "className", void 0);
        _define_property(_assert_this_initialized(_this), "small", void 0);
        _define_property(_assert_this_initialized(_this), "dataDisplayDelegate", void 0);
        _define_property(_assert_this_initialized(_this), "profile", void 0);
        _define_property(_assert_this_initialized(_this), "saveLinkElement", void 0);
        _define_property(_assert_this_initialized(_this), "editing", void 0);
        _this.iconElement = document.createElement('div');
        _this.iconElement.classList.add('icon');
        _this.titlesElement = document.createElement('div');
        _this.titlesElement.classList.add('titles');
        _this.titlesElement.classList.add('no-subtitle');
        _this.titlesElement.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.value('title').track({
            dblclick: true,
            change: true
        })));
        _this.titleContainer = _this.titlesElement.createChild('span', 'title-container');
        _this.titleElement = _this.titleContainer.createChild('span', 'title');
        _this.subtitleElement = _this.titlesElement.createChild('span', 'subtitle');
        _this.menuElement = new _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
        _this.menuElement.data = {
            variant: "icon" /* Buttons.Button.Variant.ICON */ ,
            iconName: 'dots-vertical',
            title: i18nString(UIStrings.profileOptions)
        };
        _this.menuElement.tabIndex = -1;
        _this.menuElement.addEventListener('click', _this.handleContextMenuEvent.bind(_assert_this_initialized(_this)));
        _this.menuElement.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.dropDown('profile-options').track({
            click: true
        })));
        _this.titleElement.textContent = profile.title;
        _this.className = className;
        _this.small = false;
        _this.dataDisplayDelegate = dataDisplayDelegate;
        _this.profile = profile;
        profile.addEventListener("UpdateStatus" /* ProfileHeaderEvents.UpdateStatus */ , _this.updateStatus, _assert_this_initialized(_this));
        return _this;
    }
    _create_class(ProfileSidebarTreeElement, [
        {
            key: "updateStatus",
            value: function updateStatus(event) {
                var statusUpdate = event.data;
                if (statusUpdate.subtitle !== null) {
                    this.subtitleElement.textContent = statusUpdate.subtitle.length > 0 ? "(".concat(statusUpdate.subtitle, ")") : '';
                    this.titlesElement.classList.toggle('no-subtitle', !statusUpdate.subtitle);
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.setLabel(this.listItemElement, "".concat(this.profile.title, ", ").concat(statusUpdate.subtitle));
                }
                if (typeof statusUpdate.wait === 'boolean' && this.listItemElement) {
                    this.iconElement.classList.toggle('spinner', statusUpdate.wait);
                    this.listItemElement.classList.toggle('wait', statusUpdate.wait);
                }
            }
        },
        {
            key: "ondblclick",
            value: function ondblclick(event) {
                if (!this.editing) {
                    this.startEditing(event.target);
                }
                return false;
            }
        },
        {
            key: "startEditing",
            value: function startEditing(eventTarget) {
                var container = eventTarget.enclosingNodeOrSelfWithClass('title');
                if (!container) {
                    return;
                }
                var config = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.InplaceEditor.Config(this.editingCommitted.bind(this), this.editingCancelled.bind(this));
                this.editing = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.InplaceEditor.InplaceEditor.startEditing(container, config);
            }
        },
        {
            key: "editingCommitted",
            value: function editingCommitted(container, newTitle) {
                delete this.editing;
                this.profile.setTitle(newTitle);
            }
        },
        {
            key: "editingCancelled",
            value: function editingCancelled() {
                delete this.editing;
            }
        },
        {
            key: "dispose",
            value: function dispose() {
                this.profile.removeEventListener("UpdateStatus" /* ProfileHeaderEvents.UpdateStatus */ , this.updateStatus, this);
            }
        },
        {
            key: "onselect",
            value: function onselect() {
                this.dataDisplayDelegate.showProfile(this.profile);
                return true;
            }
        },
        {
            key: "ondelete",
            value: function ondelete() {
                this.profile.profileType().removeProfile(this.profile);
                return true;
            }
        },
        {
            key: "onattach",
            value: function onattach() {
                if (this.className) {
                    this.listItemElement.classList.add(this.className);
                }
                if (this.small) {
                    this.listItemElement.classList.add('small');
                }
                this.listItemElement.append(this.iconElement, this.titlesElement, this.menuElement);
                this.listItemElement.addEventListener('contextmenu', this.handleContextMenuEvent.bind(this), true);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.setDescription(this.listItemElement, this.profile.profileType().name);
            }
        },
        {
            key: "handleContextMenuEvent",
            value: function handleContextMenuEvent(event) {
                var contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ContextMenu.ContextMenu(event);
                contextMenu.appendItemsAtLocation('profilerMenu');
                void contextMenu.show();
            }
        },
        {
            key: "setSmall",
            value: function setSmall(small) {
                this.small = small;
                if (this.listItemElement) {
                    this.listItemElement.classList.toggle('small', this.small);
                }
            }
        },
        {
            key: "setMainTitle",
            value: function setMainTitle(title) {
                this.titleElement.textContent = title;
            }
        }
    ]);
    return ProfileSidebarTreeElement;
} //# sourceMappingURL=ProfileSidebarTreeElement.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.TreeOutline.TreeElement);


}),

}]);