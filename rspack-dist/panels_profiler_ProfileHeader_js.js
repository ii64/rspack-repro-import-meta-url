"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_profiler_ProfileHeader_js"], {
"./panels/profiler/ProfileHeader.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ProfileHeader: function() { return ProfileHeader; },
  ProfileType: function() { return ProfileType; },
  StatusUpdate: function() { return StatusUpdate; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
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

var ProfileHeader = /*#__PURE__*/ function(_Common_ObjectWrapper_ObjectWrapper) {
    "use strict";
    _inherits(ProfileHeader, _Common_ObjectWrapper_ObjectWrapper);
    var _super = _create_super(ProfileHeader);
    function ProfileHeader(profileType, title) {
        _class_call_check(this, ProfileHeader);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "profileTypeInternal", void 0);
        _define_property(_assert_this_initialized(_this), "title", void 0);
        _define_property(_assert_this_initialized(_this), "uid", void 0);
        _define_property(_assert_this_initialized(_this), "fromFileInternal", void 0);
        _define_property(_assert_this_initialized(_this), "tempFile", void 0);
        _this.profileTypeInternal = profileType;
        _this.title = title;
        _this.uid = profileType.incrementProfileUid();
        _this.fromFileInternal = false;
        _this.tempFile = null;
        return _this;
    }
    _create_class(ProfileHeader, [
        {
            key: "setTitle",
            value: function setTitle(title) {
                this.title = title;
                this.dispatchEventToListeners("ProfileTitleChanged" /* Events.ProfileTitleChanged */ , this);
            }
        },
        {
            key: "profileType",
            value: function profileType() {
                return this.profileTypeInternal;
            }
        },
        {
            key: "updateStatus",
            value: function updateStatus(subtitle, wait) {
                this.dispatchEventToListeners("UpdateStatus" /* Events.UpdateStatus */ , new StatusUpdate(subtitle, wait));
            }
        },
        {
            /**
     * Must be implemented by subclasses.
     */ key: "createSidebarTreeElement",
            value: function createSidebarTreeElement(_dataDisplayDelegate) {
                throw new Error('Not implemented.');
            }
        },
        {
            key: "createView",
            value: function createView(_dataDisplayDelegate) {
                throw new Error('Not implemented.');
            }
        },
        {
            key: "removeTempFile",
            value: function removeTempFile() {
                if (this.tempFile) {
                    this.tempFile.remove();
                }
            }
        },
        {
            key: "dispose",
            value: function dispose() {}
        },
        {
            key: "canSaveToFile",
            value: function canSaveToFile() {
                return false;
            }
        },
        {
            key: "saveToFile",
            value: function saveToFile() {
                throw new Error('Not implemented.');
            }
        },
        {
            key: "loadFromFile",
            value: function loadFromFile(_file) {
                throw new Error('Not implemented.');
            }
        },
        {
            key: "fromFile",
            value: function fromFile() {
                return this.fromFileInternal;
            }
        },
        {
            key: "setFromFile",
            value: function setFromFile() {
                this.fromFileInternal = true;
            }
        },
        {
            key: "setProfile",
            value: function setProfile(_profile) {}
        }
    ]);
    return ProfileHeader;
}(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper);
var StatusUpdate = function StatusUpdate(subtitle, wait) {
    "use strict";
    _class_call_check(this, StatusUpdate);
    _define_property(this, "subtitle", void 0);
    _define_property(this, "wait", void 0);
    this.subtitle = subtitle;
    this.wait = wait;
};
var ProfileType = /*#__PURE__*/ function(_Common_ObjectWrapper_ObjectWrapper) {
    "use strict";
    _inherits(ProfileType, _Common_ObjectWrapper_ObjectWrapper);
    var _super = _create_super(ProfileType);
    function ProfileType(id, name) {
        _class_call_check(this, ProfileType);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "idInternal", void 0);
        _define_property(_assert_this_initialized(_this), "nameInternal", void 0);
        _define_property(_assert_this_initialized(_this), "profiles", void 0);
        _define_property(_assert_this_initialized(_this), "profileBeingRecordedInternal", void 0);
        _define_property(_assert_this_initialized(_this), "nextProfileUidInternal", void 0);
        _this.idInternal = id;
        _this.nameInternal = name;
        _this.profiles = [];
        _this.profileBeingRecordedInternal = null;
        _this.nextProfileUidInternal = 1;
        if (!window.opener) {
            window.addEventListener('pagehide', _this.clearTempStorage.bind(_assert_this_initialized(_this)), false);
        }
        return _this;
    }
    _create_class(ProfileType, [
        {
            key: "typeName",
            value: function typeName() {
                return '';
            }
        },
        {
            key: "nextProfileUid",
            value: function nextProfileUid() {
                return this.nextProfileUidInternal;
            }
        },
        {
            key: "incrementProfileUid",
            value: function incrementProfileUid() {
                return this.nextProfileUidInternal++;
            }
        },
        {
            key: "hasTemporaryView",
            value: function hasTemporaryView() {
                return false;
            }
        },
        {
            key: "fileExtension",
            value: function fileExtension() {
                return null;
            }
        },
        {
            key: "buttonTooltip",
            get: function get() {
                return '';
            }
        },
        {
            key: "id",
            get: function get() {
                return this.idInternal;
            }
        },
        {
            key: "treeItemTitle",
            get: function get() {
                return this.nameInternal;
            }
        },
        {
            key: "name",
            get: function get() {
                return this.nameInternal;
            }
        },
        {
            key: "buttonClicked",
            value: function buttonClicked() {
                return false;
            }
        },
        {
            key: "description",
            get: function get() {
                return '';
            }
        },
        {
            key: "isInstantProfile",
            value: function isInstantProfile() {
                return false;
            }
        },
        {
            key: "isEnabled",
            value: function isEnabled() {
                return true;
            }
        },
        {
            key: "getProfiles",
            value: function getProfiles() {
                function isFinished(profile) {
                    return this.profileBeingRecordedInternal !== profile;
                }
                return this.profiles.filter(isFinished.bind(this));
            }
        },
        {
            key: "customContent",
            value: function customContent() {
                return null;
            }
        },
        {
            key: "setCustomContentEnabled",
            value: function setCustomContentEnabled(_enable) {}
        },
        {
            key: "getProfile",
            value: function getProfile(uid) {
                for(var i = 0; i < this.profiles.length; ++i){
                    if (this.profiles[i].uid === uid) {
                        return this.profiles[i];
                    }
                }
                return null;
            }
        },
        {
            key: "loadFromFile",
            value: function loadFromFile(file) {
                var name = file.name;
                var fileExtension = this.fileExtension();
                if (fileExtension && name.endsWith(fileExtension)) {
                    name = name.substr(0, name.length - fileExtension.length);
                }
                var profile = this.createProfileLoadedFromFile(name);
                profile.setFromFile();
                this.setProfileBeingRecorded(profile);
                this.addProfile(profile);
                return profile.loadFromFile(file);
            }
        },
        {
            key: "createProfileLoadedFromFile",
            value: function createProfileLoadedFromFile(_title) {
                throw new Error('Not implemented');
            }
        },
        {
            key: "addProfile",
            value: function addProfile(profile) {
                this.profiles.push(profile);
                this.dispatchEventToListeners("add-profile-header" /* ProfileEvents.AddProfileHeader */ , profile);
            }
        },
        {
            key: "removeProfile",
            value: function removeProfile(profile) {
                var index = this.profiles.indexOf(profile);
                if (index === -1) {
                    return;
                }
                this.profiles.splice(index, 1);
                this.disposeProfile(profile);
            }
        },
        {
            key: "clearTempStorage",
            value: function clearTempStorage() {
                for(var i = 0; i < this.profiles.length; ++i){
                    this.profiles[i].removeTempFile();
                }
            }
        },
        {
            key: "profileBeingRecorded",
            value: function profileBeingRecorded() {
                return this.profileBeingRecordedInternal;
            }
        },
        {
            key: "setProfileBeingRecorded",
            value: function setProfileBeingRecorded(profile) {
                this.profileBeingRecordedInternal = profile;
            }
        },
        {
            key: "profileBeingRecordedRemoved",
            value: function profileBeingRecordedRemoved() {}
        },
        {
            key: "reset",
            value: function reset() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.profiles.slice()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var profile = _step.value;
                        this.disposeProfile(profile);
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
                this.profiles = [];
                this.nextProfileUidInternal = 1;
            }
        },
        {
            key: "disposeProfile",
            value: function disposeProfile(profile) {
                this.dispatchEventToListeners("remove-profile-header" /* ProfileEvents.RemoveProfileHeader */ , profile);
                profile.dispose();
                if (this.profileBeingRecordedInternal === profile) {
                    this.profileBeingRecordedRemoved();
                    this.setProfileBeingRecorded(null);
                }
            }
        }
    ]);
    return ProfileType;
} //# sourceMappingURL=ProfileHeader.js.map
(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper);


}),

}]);