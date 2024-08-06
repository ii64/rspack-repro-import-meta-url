"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_components_source_frame_ResourceSourceFrame_test_js"], {
"./ui/legacy/components/source_frame/ResourceSourceFrame.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _source_frame_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./source_frame.js */ "./ui/legacy/components/source_frame/source_frame.js");
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




var _contentURL = /*#__PURE__*/ new WeakMap(), _contentType = /*#__PURE__*/ new WeakMap(), _content = /*#__PURE__*/ new WeakMap();
var MockStreamingContentProvider = /*#__PURE__*/ function() {
    "use strict";
    function MockStreamingContentProvider(contentURL, contentType, initialContent) {
        _class_call_check(this, MockStreamingContentProvider);
        _class_private_field_init(this, _contentURL, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _contentType, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _content, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _contentURL, contentURL);
        _class_private_field_set(this, _contentType, contentType);
        _class_private_field_set(this, _content, _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_1__.StreamingContentData.StreamingContentData.from(initialContent));
    }
    _create_class(MockStreamingContentProvider, [
        {
            key: "requestStreamingContent",
            value: function requestStreamingContent() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            _class_private_field_get(_this, _content)
                        ];
                    });
                })();
            }
        },
        {
            key: "requestContentData",
            value: function requestContentData() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            _class_private_field_get(_this, _content).content()
                        ];
                    });
                })();
            }
        },
        {
            key: "contentURL",
            value: function contentURL() {
                return _class_private_field_get(this, _contentURL);
            }
        },
        {
            key: "contentType",
            value: function contentType() {
                return _class_private_field_get(this, _contentType);
            }
        },
        {
            key: "requestContent",
            value: function requestContent() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            _class_private_field_get(_this, _content).content().asDeferedContent()
                        ];
                    });
                })();
            }
        },
        {
            key: "addChunk",
            value: function addChunk(chunk) {
                _class_private_field_get(this, _content).addChunk(chunk);
            }
        },
        {
            key: "searchInContent",
            value: function searchInContent(_query, _caseSensitive, _isRegex) {
                throw new Error('Method not implemented.');
            }
        }
    ]);
    return MockStreamingContentProvider;
}();
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.describeWithEnvironment)('ResourceSourceFrame', function() {
    it('updates the editor when a StreamingContentProvider changes', /*#__PURE__*/ _async_to_generator(function() {
        var contentProvider, resourceSourceFrame, initialState, updatedState;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    contentProvider = new MockStreamingContentProvider('https://example.com/sse', _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Fetch, new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_1__.ContentData.ContentData('', true, 'text/event-stream'));
                    resourceSourceFrame = new _source_frame_js__WEBPACK_IMPORTED_MODULE_3__.ResourceSourceFrame.ResourceSourceFrame(contentProvider, 'text/event-stream');
                    resourceSourceFrame.markAsRoot();
                    resourceSourceFrame.show(document.body);
                    return [
                        4,
                        new Promise(function(resolve) {
                            return sinon.stub(resourceSourceFrame.textEditor, 'state').set(resolve);
                        })
                    ];
                case 1:
                    initialState = _state.sent();
                    assert.strictEqual(initialState.doc.toString(), '');
                    contentProvider.addChunk('Zm9v');
                    return [
                        4,
                        new Promise(function(resolve) {
                            return sinon.stub(resourceSourceFrame.textEditor, 'state').set(resolve);
                        })
                    ];
                case 2:
                    updatedState = _state.sent();
                    assert.strictEqual(updatedState.doc.toString(), 'foo');
                    resourceSourceFrame.detach();
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=ResourceSourceFrame.test.js.map


}),

}]);