"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_sources_EditingLocationHistoryManager_js"], {
"./panels/sources/EditingLocationHistoryManager.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  EditingLocationHistoryManager: function() { return EditingLocationHistoryManager; },
  HistoryDepth: function() { return HistoryDepth; }
});
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./ui/legacy/components/source_frame/source_frame.js");
/*
 * Copyright (C) 2014 Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ function _class_call_check(instance, Constructor) {
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


var HistoryDepth = 20;
var EditingLocationHistoryManager = /*#__PURE__*/ function() {
    "use strict";
    function EditingLocationHistoryManager(sourcesView) {
        _class_call_check(this, EditingLocationHistoryManager);
        _define_property(this, "sourcesView", void 0);
        _define_property(this, "entries", []);
        _define_property(this, "current", -1);
        _define_property(this, "revealing", false);
        this.sourcesView = sourcesView;
    }
    _create_class(EditingLocationHistoryManager, [
        {
            key: "trackSourceFrameCursorJumps",
            value: function trackSourceFrameCursorJumps(sourceFrame) {
                var _this = this;
                sourceFrame.addEventListener("EditorUpdate" /* SourceFrame.SourceFrame.Events.EditorUpdate */ , function(event) {
                    return _this.onEditorUpdate(event.data, sourceFrame);
                });
            }
        },
        {
            key: "onEditorUpdate",
            value: function onEditorUpdate(update, sourceFrame) {
                if (update.docChanged) {
                    this.mapEntriesFor(sourceFrame.uiSourceCode(), update.changes);
                }
                var prevPos = update.startState.selection.main;
                var newPos = update.state.selection.main;
                var isJump = !this.revealing && prevPos.anchor !== newPos.anchor && update.transactions.some(function(tr) {
                    return Boolean(tr.isUserEvent('select.pointer') || tr.isUserEvent('select.reveal') || tr.isUserEvent('select.search'));
                });
                if (isJump) {
                    this.updateCurrentState(sourceFrame.uiSourceCode(), prevPos.head);
                    if (this.entries.length > this.current + 1) {
                        this.entries.length = this.current + 1;
                    }
                    this.entries.push(new EditingLocationHistoryEntry(sourceFrame.uiSourceCode(), newPos.head));
                    this.current++;
                    if (this.entries.length > HistoryDepth) {
                        this.entries.shift();
                        this.current--;
                    }
                }
            }
        },
        {
            key: "updateCurrentState",
            value: function updateCurrentState(uiSourceCode, position) {
                if (!this.revealing) {
                    var top = this.current >= 0 ? this.entries[this.current] : null;
                    if (top === null || top === void 0 ? void 0 : top.matches(uiSourceCode)) {
                        top.position = position;
                    }
                }
            }
        },
        {
            key: "mapEntriesFor",
            value: function mapEntriesFor(uiSourceCode, change) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var entry = _step.value;
                        if (entry.matches(uiSourceCode)) {
                            entry.position = change.mapPos(entry.position);
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
            key: "reveal",
            value: function reveal(entry) {
                var uiSourceCode = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_0__.Workspace.WorkspaceImpl.instance().uiSourceCode(entry.projectId, entry.url);
                if (uiSourceCode) {
                    this.revealing = true;
                    this.sourcesView.showSourceLocation(uiSourceCode, entry.position, false, true);
                    this.revealing = false;
                }
            }
        },
        {
            key: "rollback",
            value: function rollback() {
                if (this.current > 0) {
                    this.current--;
                    this.reveal(this.entries[this.current]);
                }
            }
        },
        {
            key: "rollover",
            value: function rollover() {
                if (this.current < this.entries.length - 1) {
                    this.current++;
                    this.reveal(this.entries[this.current]);
                }
            }
        },
        {
            key: "removeHistoryForSourceCode",
            value: function removeHistoryForSourceCode(uiSourceCode) {
                for(var i = this.entries.length - 1; i >= 0; i--){
                    if (this.entries[i].matches(uiSourceCode)) {
                        this.entries.splice(i, 1);
                        if (this.current >= i) {
                            this.current--;
                        }
                    }
                }
            }
        }
    ]);
    return EditingLocationHistoryManager;
}();
var EditingLocationHistoryEntry = /*#__PURE__*/ function() {
    "use strict";
    function EditingLocationHistoryEntry(uiSourceCode, position) {
        _class_call_check(this, EditingLocationHistoryEntry);
        _define_property(this, "projectId", void 0);
        _define_property(this, "url", void 0);
        _define_property(this, "position", void 0);
        this.projectId = uiSourceCode.project().id();
        this.url = uiSourceCode.url();
        this.position = position;
    }
    _create_class(EditingLocationHistoryEntry, [
        {
            key: "matches",
            value: function matches(uiSourceCode) {
                return this.url === uiSourceCode.url() && this.projectId === uiSourceCode.project().id();
            }
        }
    ]);
    return EditingLocationHistoryEntry;
} //# sourceMappingURL=EditingLocationHistoryManager.js.map
();


}),

}]);