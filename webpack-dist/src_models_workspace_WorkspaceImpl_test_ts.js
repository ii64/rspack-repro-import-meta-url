"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_models_workspace_WorkspaceImpl_test_ts"],{

/***/ "./src/models/workspace/WorkspaceImpl.test.ts":
/*!****************************************************!*\
  !*** ./src/models/workspace/WorkspaceImpl.test.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bindings/bindings.js */ "./src/models/bindings/bindings.ts");
/* harmony import */ var _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../workspace/workspace.js */ "./src/models/workspace/workspace.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


describe('WorkspaceImpl', () => {
    it('can remove the current instance', () => {
        const sutBefore = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.WorkspaceImpl.instance({ forceNew: true });
        _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.WorkspaceImpl.removeInstance();
        const sutAfter = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.WorkspaceImpl.instance();
        assert.notStrictEqual(sutBefore, sutAfter);
    });
    it('can retrieve UI source code with project Id and URL', () => {
        const sut = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.WorkspaceImpl.instance({ forceNew: true });
        const projectStub = sinon.createStubInstance(_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_0__.ContentProviderBasedProject.ContentProviderBasedProject);
        const exampleProjectID = 'exampleProjectID';
        const exampleUrl = 'https://example.com/';
        projectStub.id.returns(exampleProjectID);
        const uiSourceCodeStub = sinon.createStubInstance(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.UISourceCode.UISourceCode);
        projectStub.uiSourceCodeForURL.withArgs(exampleUrl).returns(uiSourceCodeStub);
        sut.addProject(projectStub);
        const result = sut.uiSourceCode(exampleProjectID, exampleUrl);
        assert.strictEqual(result, uiSourceCodeStub);
    });
    it('can return the UI source code from a URL', async () => {
        const sut = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.WorkspaceImpl.instance({ forceNew: true });
        const exampleUrl = 'https://example.com/';
        const projectStub = sinon.createStubInstance(_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_0__.ContentProviderBasedProject.ContentProviderBasedProject);
        sut.addProject(projectStub);
        sut.uiSourceCodeForURL(exampleUrl);
        assert.isTrue(projectStub.uiSourceCodeForURL.calledOnceWith(exampleUrl));
    });
    it('can return the UI source code from project type', async () => {
        const sut = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.WorkspaceImpl.instance({ forceNew: true });
        const uiSourceCodeStub = sinon.createStubInstance(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.UISourceCode.UISourceCode);
        const projectStub = sinon.createStubInstance(_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_0__.ContentProviderBasedProject.ContentProviderBasedProject);
        projectStub.type.returns(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.projectTypes.Debugger);
        projectStub.uiSourceCodes.returns([uiSourceCodeStub]);
        sut.addProject(projectStub);
        const result = sut.uiSourceCodesForProjectType(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.projectTypes.Debugger);
        assert.deepStrictEqual(result, [uiSourceCodeStub]);
    });
    it('can remove a project', () => {
        const sut = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.WorkspaceImpl.instance({ forceNew: true });
        const projectStub = sinon.createStubInstance(_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_0__.ContentProviderBasedProject.ContentProviderBasedProject);
        sut.addProject(projectStub);
        sut.removeProject(projectStub);
        assert.deepStrictEqual(sut.projects(), []);
    });
    it('can retrieve a project by ID', () => {
        const sut = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.WorkspaceImpl.instance({ forceNew: true });
        const projectStub = sinon.createStubInstance(_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_0__.ContentProviderBasedProject.ContentProviderBasedProject);
        const exampleProjectID = 'exampleProjectID';
        projectStub.id.returns(exampleProjectID);
        sut.addProject(projectStub);
        const result = sut.project(exampleProjectID);
        assert.deepStrictEqual(result, projectStub);
    });
    it('can retrieve all projects', () => {
        const sut = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.WorkspaceImpl.instance({ forceNew: true });
        const projectStub0 = sinon.createStubInstance(_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_0__.ContentProviderBasedProject.ContentProviderBasedProject);
        const projectStub1 = sinon.createStubInstance(_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_0__.ContentProviderBasedProject.ContentProviderBasedProject);
        projectStub0.id.returns('ID_0');
        projectStub1.id.returns('ID_1');
        sut.addProject(projectStub0);
        sut.addProject(projectStub1);
        const result = sut.projects();
        assert.deepStrictEqual(result, [projectStub0, projectStub1]);
    });
    it('can retrieve all projects for a certain type', () => {
        const sut = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.WorkspaceImpl.instance({ forceNew: true });
        const projectStub0 = sinon.createStubInstance(_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_0__.ContentProviderBasedProject.ContentProviderBasedProject);
        const projectStub1 = sinon.createStubInstance(_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_0__.ContentProviderBasedProject.ContentProviderBasedProject);
        projectStub0.id.returns('ID_0');
        projectStub1.id.returns('ID_1');
        projectStub0.type.returns(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.projectTypes.Debugger);
        projectStub1.type.returns(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.projectTypes.Formatter);
        sut.addProject(projectStub0);
        sut.addProject(projectStub1);
        const result = sut.projectsForType(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.projectTypes.Debugger);
        assert.deepStrictEqual(result, [projectStub0]);
    });
    it('can return the UI source code from project type', async () => {
        const sut = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.WorkspaceImpl.instance({ forceNew: true });
        const uiSourceCodeStub = sinon.createStubInstance(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.UISourceCode.UISourceCode);
        const projectStub = sinon.createStubInstance(_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_0__.ContentProviderBasedProject.ContentProviderBasedProject);
        projectStub.uiSourceCodes.returns([uiSourceCodeStub]);
        sut.addProject(projectStub);
        const result = sut.uiSourceCodes();
        assert.deepStrictEqual(result, [uiSourceCodeStub]);
    });
    it('can check if there are tracking extensions', async () => {
        const sut = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.WorkspaceImpl.instance({ forceNew: true });
        const result = sut.hasResourceContentTrackingExtensions();
        assert.isFalse(result);
    });
    it('can set tracking extensions', async () => {
        const sut = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.WorkspaceImpl.instance({ forceNew: true });
        sut.setHasResourceContentTrackingExtensions(true);
        assert.isTrue(sut.hasResourceContentTrackingExtensions());
    });
});
describe('ProjectStore', () => {
    it('allows renaming for file names with special characters when there is no parent URL', () => {
        const workspaceStub = sinon.createStubInstance(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.WorkspaceImpl);
        const originalUrlExample = 'https://example.com/';
        const nameWithSpecialChars = 'equals=question?percent%space dollar$semi;hash#amper&';
        const uiSourceCodeStub = sinon.createStubInstance(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.UISourceCode.UISourceCode);
        uiSourceCodeStub.url.returns(originalUrlExample);
        const projectInstance = new _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_0__.ContentProviderBasedProject.ContentProviderBasedProject(workspaceStub, 'exampleProjectID', _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.projectTypes.Debugger, 'exampleDisplayName', false);
        projectInstance.addUISourceCode(uiSourceCodeStub);
        projectInstance.renameUISourceCode(uiSourceCodeStub, nameWithSpecialChars);
        assert.isNull(projectInstance.uiSourceCodeForURL(originalUrlExample));
        assert.isNotNull(projectInstance.uiSourceCodeForURL('equals=question%3Fpercent%25space%20dollar$semi%3Bhash%23amper&'));
    });
    it('allows renaming for file names with special characters when there is a parent URL', () => {
        const workspaceStub = sinon.createStubInstance(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.WorkspaceImpl);
        const originalUrlExample = 'https://example.com/';
        const parentUrlExample = 'https://parent.example.com';
        const nameWithSpecialChars = 'equals=question?percent%space dollar$semi;hash#amper&';
        const uiSourceCodeStub = sinon.createStubInstance(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.UISourceCode.UISourceCode);
        uiSourceCodeStub.url.returns(originalUrlExample);
        uiSourceCodeStub.parentURL.returns(parentUrlExample);
        const projectInstance = new _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_0__.ContentProviderBasedProject.ContentProviderBasedProject(workspaceStub, 'exampleProjectID', _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.projectTypes.Debugger, 'exampleDisplayName', false);
        projectInstance.addUISourceCode(uiSourceCodeStub);
        projectInstance.renameUISourceCode(uiSourceCodeStub, nameWithSpecialChars);
        assert.isNull(projectInstance.uiSourceCodeForURL(originalUrlExample));
        assert.isNotNull(projectInstance.uiSourceCodeForURL('https://parent.example.com/equals=question%3Fpercent%25space%20dollar$semi%3Bhash%23amper&'));
    });
});


/***/ })

}]);