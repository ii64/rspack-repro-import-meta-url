"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_timeline_components_SidebarAnnotationsTab_test_js"], {
"./panels/timeline/components/SidebarAnnotationsTab.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _components_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components.js */ "./panels/timeline/components/components.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
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





(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('SidebarAnnotationsTab', function() {
    var SidebarAnnotationsTab = _components_js__WEBPACK_IMPORTED_MODULE_4__.SidebarAnnotationsTab.SidebarAnnotationsTab;
    var coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_3__.RenderCoordinator.RenderCoordinator.instance();
    it('renders annotations tab in the sidebar', /*#__PURE__*/ _async_to_generator(function() {
        var component, annotationsWrapperElement;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    component = new SidebarAnnotationsTab();
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
                    return [
                        4,
                        coordinator.done()
                    ];
                case 1:
                    _state.sent();
                    assert.isNotNull(component.shadowRoot);
                    annotationsWrapperElement = component.shadowRoot.querySelector('.annotations');
                    assert.isNotNull(annotationsWrapperElement);
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders annotations list in the sidebar', /*#__PURE__*/ _async_to_generator(function() {
        var component, defaultTraceEvents, entryLabelAnnotation, entryLabelAnnotation2, annotationsWrapperElement, deleteButton, annotationEntryNameElements, annotationEntryLabelElements;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    component = new SidebarAnnotationsTab();
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.rawEvents(null, 'basic.json.gz')
                    ];
                case 1:
                    defaultTraceEvents = _state.sent();
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
                    // Create Entry Label annotations
                    entryLabelAnnotation = {
                        type: 'ENTRY_LABEL',
                        entry: defaultTraceEvents[0],
                        label: 'Entry Label 1'
                    };
                    entryLabelAnnotation2 = {
                        type: 'ENTRY_LABEL',
                        entry: defaultTraceEvents[1],
                        label: 'Entry Label 2'
                    };
                    component.annotations = [
                        entryLabelAnnotation,
                        entryLabelAnnotation2
                    ];
                    assert.isNotNull(component.shadowRoot);
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    annotationsWrapperElement = component.shadowRoot.querySelector('.annotations');
                    assert.isNotNull(annotationsWrapperElement);
                    deleteButton = component.shadowRoot.querySelector('.bin-icon');
                    assert.isNotNull(deleteButton);
                    // Ensure there are 2 labels and their entry names and labels and rendered
                    annotationEntryNameElements = component.shadowRoot.querySelectorAll('.entry-name');
                    assert.strictEqual(annotationEntryNameElements.length, 2);
                    annotationEntryLabelElements = component.shadowRoot.querySelectorAll('.label');
                    assert.strictEqual(annotationEntryNameElements.length, 2);
                    assert.strictEqual(annotationEntryLabelElements[0].innerText, 'Entry Label 1');
                    assert.strictEqual(annotationEntryLabelElements[1].innerText, 'Entry Label 2');
                    return [
                        2
                    ];
            }
        });
    }));
    it('dispatches RemoveAnnotation Events when delete annotation button is clicked', /*#__PURE__*/ _async_to_generator(function() {
        var component, defaultTraceEvents, removeAnnotationEventFired, entryLabelAnnotation, deleteButton;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    component = new SidebarAnnotationsTab();
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.rawEvents(null, 'basic.json.gz')
                    ];
                case 1:
                    defaultTraceEvents = _state.sent();
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
                    removeAnnotationEventFired = false;
                    component.addEventListener('removeannotation', function() {
                        removeAnnotationEventFired = true;
                    });
                    // Create Entry Label annotation
                    entryLabelAnnotation = {
                        type: 'ENTRY_LABEL',
                        entry: defaultTraceEvents[0],
                        label: 'Entry Label 1'
                    };
                    component.annotations = [
                        entryLabelAnnotation
                    ];
                    assert.isNotNull(component.shadowRoot);
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    deleteButton = component.shadowRoot.querySelector('.bin-icon');
                    assert.isNotNull(deleteButton);
                    // Make sure the remove annotation event is not fired before clicking the button
                    assert.isFalse(removeAnnotationEventFired);
                    deleteButton.dispatchEvent(new MouseEvent('click'));
                    assert.isTrue(removeAnnotationEventFired);
                    return [
                        2
                    ];
            }
        });
    }));
    it('updates annotations list in the sidebar when a new list is passed in', /*#__PURE__*/ _async_to_generator(function() {
        var component, defaultTraceEvents, entryLabelAnnotation, entryLabelAnnotation2, annotationsWrapperElement, annotationEntryNameElements, annotationEntryLabelElements;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    component = new SidebarAnnotationsTab();
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.rawEvents(null, 'basic.json.gz')
                    ];
                case 1:
                    defaultTraceEvents = _state.sent();
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
                    // Create Entry Label Annotation
                    entryLabelAnnotation = {
                        type: 'ENTRY_LABEL',
                        entry: defaultTraceEvents[0],
                        label: 'Entry Label 1'
                    };
                    entryLabelAnnotation2 = {
                        type: 'ENTRY_LABEL',
                        entry: defaultTraceEvents[1],
                        label: 'Entry Label 2'
                    };
                    component.annotations = [
                        entryLabelAnnotation,
                        entryLabelAnnotation2
                    ];
                    assert.isNotNull(component.shadowRoot);
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    annotationsWrapperElement = component.shadowRoot.querySelector('.annotations');
                    assert.isNotNull(annotationsWrapperElement);
                    // Ensure there are 2 labels and their entry names and labels and rendered
                    annotationEntryNameElements = component.shadowRoot.querySelectorAll('.entry-name');
                    assert.strictEqual(annotationEntryNameElements.length, 2);
                    annotationEntryLabelElements = component.shadowRoot.querySelectorAll('.label');
                    assert.strictEqual(annotationEntryNameElements.length, 2);
                    assert.strictEqual(annotationEntryLabelElements[0].innerText, 'Entry Label 1');
                    assert.strictEqual(annotationEntryLabelElements[1].innerText, 'Entry Label 2');
                    // Update the labels and pass the list again
                    entryLabelAnnotation.label = 'New Entry Label 1';
                    entryLabelAnnotation2.label = 'New Entry Label 2';
                    component.annotations = [
                        entryLabelAnnotation,
                        entryLabelAnnotation2
                    ];
                    return [
                        4,
                        coordinator.done()
                    ];
                case 3:
                    _state.sent();
                    // Ensure the labels changed to new ones
                    assert.strictEqual(annotationEntryLabelElements[0].innerText, 'New Entry Label 1');
                    assert.strictEqual(annotationEntryLabelElements[1].innerText, 'New Entry Label 2');
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=SidebarAnnotationsTab.test.js.map


}),

}]);