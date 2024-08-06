"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_workspace_WorkspaceImpl_test_js"], {
"./models/workspace/WorkspaceImpl.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../workspace/workspace.js */ "./models/workspace/workspace.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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


describe('WorkspaceImpl', function() {
    it('can remove the current instance', function() {
        var sutBefore = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.WorkspaceImpl.instance({
            forceNew: true
        });
        _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.WorkspaceImpl.removeInstance();
        var sutAfter = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.WorkspaceImpl.instance();
        assert.notStrictEqual(sutBefore, sutAfter);
    });
    it('can retrieve UI source code with project Id and URL', function() {
        var sut = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.WorkspaceImpl.instance({
            forceNew: true
        });
        var projectStub = sinon.createStubInstance(_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_0__.ContentProviderBasedProject.ContentProviderBasedProject);
        var exampleProjectID = 'exampleProjectID';
        var exampleUrl = 'https://example.com/';
        projectStub.id.returns(exampleProjectID);
        var uiSourceCodeStub = sinon.createStubInstance(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.UISourceCode.UISourceCode);
        projectStub.uiSourceCodeForURL.withArgs(exampleUrl).returns(uiSourceCodeStub);
        sut.addProject(projectStub);
        var result = sut.uiSourceCode(exampleProjectID, exampleUrl);
        assert.strictEqual(result, uiSourceCodeStub);
    });
    it('can return the UI source code from a URL', /*#__PURE__*/ _async_to_generator(function() {
        var sut, exampleUrl, projectStub;
        return _ts_generator(this, function(_state) {
            sut = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.WorkspaceImpl.instance({
                forceNew: true
            });
            exampleUrl = 'https://example.com/';
            projectStub = sinon.createStubInstance(_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_0__.ContentProviderBasedProject.ContentProviderBasedProject);
            sut.addProject(projectStub);
            sut.uiSourceCodeForURL(exampleUrl);
            assert.isTrue(projectStub.uiSourceCodeForURL.calledOnceWith(exampleUrl));
            return [
                2
            ];
        });
    }));
    it('can return the UI source code from project type', /*#__PURE__*/ _async_to_generator(function() {
        var sut, uiSourceCodeStub, projectStub, result;
        return _ts_generator(this, function(_state) {
            sut = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.WorkspaceImpl.instance({
                forceNew: true
            });
            uiSourceCodeStub = sinon.createStubInstance(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.UISourceCode.UISourceCode);
            projectStub = sinon.createStubInstance(_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_0__.ContentProviderBasedProject.ContentProviderBasedProject);
            projectStub.type.returns(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.projectTypes.Debugger);
            projectStub.uiSourceCodes.returns([
                uiSourceCodeStub
            ]);
            sut.addProject(projectStub);
            result = sut.uiSourceCodesForProjectType(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.projectTypes.Debugger);
            assert.deepStrictEqual(result, [
                uiSourceCodeStub
            ]);
            return [
                2
            ];
        });
    }));
    it('can remove a project', function() {
        var sut = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.WorkspaceImpl.instance({
            forceNew: true
        });
        var projectStub = sinon.createStubInstance(_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_0__.ContentProviderBasedProject.ContentProviderBasedProject);
        sut.addProject(projectStub);
        sut.removeProject(projectStub);
        assert.deepStrictEqual(sut.projects(), []);
    });
    it('can retrieve a project by ID', function() {
        var sut = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.WorkspaceImpl.instance({
            forceNew: true
        });
        var projectStub = sinon.createStubInstance(_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_0__.ContentProviderBasedProject.ContentProviderBasedProject);
        var exampleProjectID = 'exampleProjectID';
        projectStub.id.returns(exampleProjectID);
        sut.addProject(projectStub);
        var result = sut.project(exampleProjectID);
        assert.deepStrictEqual(result, projectStub);
    });
    it('can retrieve all projects', function() {
        var sut = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.WorkspaceImpl.instance({
            forceNew: true
        });
        var projectStub0 = sinon.createStubInstance(_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_0__.ContentProviderBasedProject.ContentProviderBasedProject);
        var projectStub1 = sinon.createStubInstance(_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_0__.ContentProviderBasedProject.ContentProviderBasedProject);
        projectStub0.id.returns('ID_0');
        projectStub1.id.returns('ID_1');
        sut.addProject(projectStub0);
        sut.addProject(projectStub1);
        var result = sut.projects();
        assert.deepStrictEqual(result, [
            projectStub0,
            projectStub1
        ]);
    });
    it('can retrieve all projects for a certain type', function() {
        var sut = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.WorkspaceImpl.instance({
            forceNew: true
        });
        var projectStub0 = sinon.createStubInstance(_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_0__.ContentProviderBasedProject.ContentProviderBasedProject);
        var projectStub1 = sinon.createStubInstance(_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_0__.ContentProviderBasedProject.ContentProviderBasedProject);
        projectStub0.id.returns('ID_0');
        projectStub1.id.returns('ID_1');
        projectStub0.type.returns(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.projectTypes.Debugger);
        projectStub1.type.returns(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.projectTypes.Formatter);
        sut.addProject(projectStub0);
        sut.addProject(projectStub1);
        var result = sut.projectsForType(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.projectTypes.Debugger);
        assert.deepStrictEqual(result, [
            projectStub0
        ]);
    });
    it('can return the UI source code from project type', /*#__PURE__*/ _async_to_generator(function() {
        var sut, uiSourceCodeStub, projectStub, result;
        return _ts_generator(this, function(_state) {
            sut = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.WorkspaceImpl.instance({
                forceNew: true
            });
            uiSourceCodeStub = sinon.createStubInstance(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.UISourceCode.UISourceCode);
            projectStub = sinon.createStubInstance(_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_0__.ContentProviderBasedProject.ContentProviderBasedProject);
            projectStub.uiSourceCodes.returns([
                uiSourceCodeStub
            ]);
            sut.addProject(projectStub);
            result = sut.uiSourceCodes();
            assert.deepStrictEqual(result, [
                uiSourceCodeStub
            ]);
            return [
                2
            ];
        });
    }));
    it('can check if there are tracking extensions', /*#__PURE__*/ _async_to_generator(function() {
        var sut, result;
        return _ts_generator(this, function(_state) {
            sut = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.WorkspaceImpl.instance({
                forceNew: true
            });
            result = sut.hasResourceContentTrackingExtensions();
            assert.isFalse(result);
            return [
                2
            ];
        });
    }));
    it('can set tracking extensions', /*#__PURE__*/ _async_to_generator(function() {
        var sut;
        return _ts_generator(this, function(_state) {
            sut = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.WorkspaceImpl.instance({
                forceNew: true
            });
            sut.setHasResourceContentTrackingExtensions(true);
            assert.isTrue(sut.hasResourceContentTrackingExtensions());
            return [
                2
            ];
        });
    }));
});
describe('ProjectStore', function() {
    it('allows renaming for file names with special characters when there is no parent URL', function() {
        var workspaceStub = sinon.createStubInstance(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.WorkspaceImpl);
        var originalUrlExample = 'https://example.com/';
        var nameWithSpecialChars = 'equals=question?percent%space dollar$semi;hash#amper&';
        var uiSourceCodeStub = sinon.createStubInstance(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.UISourceCode.UISourceCode);
        uiSourceCodeStub.url.returns(originalUrlExample);
        var projectInstance = new _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_0__.ContentProviderBasedProject.ContentProviderBasedProject(workspaceStub, 'exampleProjectID', _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.projectTypes.Debugger, 'exampleDisplayName', false);
        projectInstance.addUISourceCode(uiSourceCodeStub);
        projectInstance.renameUISourceCode(uiSourceCodeStub, nameWithSpecialChars);
        assert.isNull(projectInstance.uiSourceCodeForURL(originalUrlExample));
        assert.isNotNull(projectInstance.uiSourceCodeForURL('equals=question%3Fpercent%25space%20dollar$semi%3Bhash%23amper&'));
    });
    it('allows renaming for file names with special characters when there is a parent URL', function() {
        var workspaceStub = sinon.createStubInstance(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.WorkspaceImpl);
        var originalUrlExample = 'https://example.com/';
        var parentUrlExample = 'https://parent.example.com';
        var nameWithSpecialChars = 'equals=question?percent%space dollar$semi;hash#amper&';
        var uiSourceCodeStub = sinon.createStubInstance(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.UISourceCode.UISourceCode);
        uiSourceCodeStub.url.returns(originalUrlExample);
        uiSourceCodeStub.parentURL.returns(parentUrlExample);
        var projectInstance = new _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_0__.ContentProviderBasedProject.ContentProviderBasedProject(workspaceStub, 'exampleProjectID', _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.projectTypes.Debugger, 'exampleDisplayName', false);
        projectInstance.addUISourceCode(uiSourceCodeStub);
        projectInstance.renameUISourceCode(uiSourceCodeStub, nameWithSpecialChars);
        assert.isNull(projectInstance.uiSourceCodeForURL(originalUrlExample));
        assert.isNotNull(projectInstance.uiSourceCodeForURL('https://parent.example.com/equals=question%3Fpercent%25space%20dollar$semi%3Bhash%23amper&'));
    });
}); //# sourceMappingURL=WorkspaceImpl.test.js.map


}),

}]);