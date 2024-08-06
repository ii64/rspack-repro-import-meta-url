"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["testing_SourceMapEncoder_js"], {
"./testing/SourceMapEncoder.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  GeneratedRangeBuilder: function() { return GeneratedRangeBuilder; },
  OriginalScopeBuilder: function() { return OriginalScopeBuilder; },
  encodeSourceMap: function() { return encodeSourceMap; },
  encodeVlq: function() { return encodeVlq; },
  encodeVlqList: function() { return encodeVlqList; }
});
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/sdk/sdk.js */ "./core/sdk/sdk.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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

var base64Digits = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
function encodeVlq(n) {
    // Set the sign bit as the least significant bit.
    n = n >= 0 ? 2 * n : 1 - 2 * n;
    // Encode into a base64 run.
    var result = '';
    while(true){
        // Extract the lowest 5 bits and remove them from the number.
        var digit = n & 0x1f;
        n >>= 5;
        // Is there anything more left to encode?
        if (n === 0) {
            // We are done encoding, finish the run.
            result += base64Digits[digit];
            break;
        } else {
            // There is still more encode, so add the digit and the continuation bit.
            result += base64Digits[0x20 + digit];
        }
    }
    return result;
}
function encodeVlqList(list) {
    return list.map(encodeVlq).join('');
}
// Encode array mappings of the form "compiledLine:compiledColumn => srcFile:srcLine:srcColumn@name"
// as a source map.
function encodeSourceMap(textMap, sourceRoot) {
    var mappings = '';
    var sources = [];
    var names = [];
    var sourcesContent;
    var state = {
        line: -1,
        column: 0,
        srcFile: 0,
        srcLine: 0,
        srcColumn: 0,
        srcName: 0
    };
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = textMap[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var mapping = _step.value;
            var match = mapping.match(/^(\d+):(\d+)(?:\s*=>\s*([^:]+):(\d+):(\d+)(?:@(\S+))?)?$/);
            if (!match) {
                match = mapping.match(/^([^:]+):\s*(.+)$/);
                if (!match) {
                    throw new Error('Cannot parse mapping "'.concat(mapping, '"'));
                }
                (sourcesContent = sourcesContent !== null && sourcesContent !== void 0 ? sourcesContent : [])[getOrAddString(sources, match[1])] = match[2];
                continue;
            }
            var lastState = Object.assign({}, state);
            state.line = Number(match[1]);
            state.column = Number(match[2]);
            var hasSource = match[3] !== undefined;
            var hasName = hasSource && match[6] !== undefined;
            if (hasSource) {
                state.srcFile = getOrAddString(sources, match[3]);
                state.srcLine = Number(match[4]);
                state.srcColumn = Number(match[5]);
                if (hasName) {
                    state.srcName = getOrAddString(names, match[6]);
                }
            }
            if (state.line < lastState.line) {
                throw 'Line numbers must be increasing';
            }
            var isNewLine = state.line !== lastState.line;
            if (isNewLine) {
                // Fixup for the first line mapping.
                if (lastState.line === -1) {
                    lastState.line = 0;
                }
                // Insert semicolons for all the new lines.
                mappings += ';'.repeat(state.line - lastState.line);
                // Reset the compiled code column counter.
                lastState.column = 0;
            } else {
                mappings += ',';
            }
            // Encode the mapping and add it to the list of mappings.
            var toEncode = [
                state.column - lastState.column
            ];
            if (hasSource) {
                toEncode.push(state.srcFile - lastState.srcFile, state.srcLine - lastState.srcLine, state.srcColumn - lastState.srcColumn);
                if (hasName) {
                    toEncode.push(state.srcName - lastState.srcName);
                }
            }
            mappings += encodeVlqList(toEncode);
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
    var sourceMapV3 = {
        version: 3,
        mappings: mappings,
        sources: sources,
        names: names
    };
    if (sourceRoot !== undefined) {
        sourceMapV3.sourceRoot = sourceRoot;
    }
    if (sourcesContent !== undefined) {
        for(var i = 0; i < sources.length; ++i){
            if (typeof sourcesContent[i] !== 'string') {
                sourcesContent[i] = null;
            }
        }
        sourceMapV3.sourcesContent = sourcesContent;
    }
    return sourceMapV3;
    function getOrAddString(array, s) {
        var index = array.indexOf(s);
        if (index >= 0) {
            return index;
        }
        array.push(s);
        return array.length - 1;
    }
}
var _encodedScope = /*#__PURE__*/ new WeakMap(), _lastLine = /*#__PURE__*/ new WeakMap(), _lastKind = /*#__PURE__*/ new WeakMap(), _names = /*#__PURE__*/ new WeakMap(), _encodeKind = /*#__PURE__*/ new WeakSet(), _nameIdx = /*#__PURE__*/ new WeakSet();
var OriginalScopeBuilder = /*#__PURE__*/ function() {
    "use strict";
    function OriginalScopeBuilder(names) {
        _class_call_check(this, OriginalScopeBuilder);
        _class_private_method_init(this, _encodeKind);
        _class_private_method_init(this, _nameIdx);
        _class_private_field_init(this, _encodedScope, {
            writable: true,
            value: ''
        });
        _class_private_field_init(this, _lastLine, {
            writable: true,
            value: 0
        });
        _class_private_field_init(this, _lastKind, {
            writable: true,
            value: 0
        });
        _class_private_field_init(this, _names, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _names, names);
    }
    _create_class(OriginalScopeBuilder, [
        {
            key: "start",
            value: function start(line, column, kind, name, variables) {
                var _this = this;
                if (_class_private_field_get(this, _encodedScope) !== '') {
                    _class_private_field_set(this, _encodedScope, _class_private_field_get(this, _encodedScope) + ',');
                }
                var lineDiff = line - _class_private_field_get(this, _lastLine);
                _class_private_field_set(this, _lastLine, line);
                var flags = name !== undefined ? 0x1 : 0x0;
                _class_private_field_set(this, _encodedScope, _class_private_field_get(this, _encodedScope) + encodeVlqList([
                    lineDiff,
                    column,
                    _class_private_method_get(this, _encodeKind, encodeKind).call(this, kind),
                    flags
                ]));
                if (name !== undefined) {
                    _class_private_field_set(this, _encodedScope, _class_private_field_get(this, _encodedScope) + encodeVlq(_class_private_method_get(this, _nameIdx, nameIdx).call(this, name)));
                }
                if (variables !== undefined) {
                    _class_private_field_set(this, _encodedScope, _class_private_field_get(this, _encodedScope) + encodeVlqList(variables.map(function(variable) {
                        return _class_private_method_get(_this, _nameIdx, nameIdx).call(_this, variable);
                    })));
                }
                return this;
            }
        },
        {
            key: "end",
            value: function end(line, column) {
                if (_class_private_field_get(this, _encodedScope) !== '') {
                    _class_private_field_set(this, _encodedScope, _class_private_field_get(this, _encodedScope) + ',');
                }
                var lineDiff = line - _class_private_field_get(this, _lastLine);
                _class_private_field_set(this, _lastLine, line);
                _class_private_field_set(this, _encodedScope, _class_private_field_get(this, _encodedScope) + encodeVlqList([
                    lineDiff,
                    column
                ]));
                return this;
            }
        },
        {
            key: "build",
            value: function build() {
                var result = _class_private_field_get(this, _encodedScope);
                _class_private_field_set(this, _lastLine, 0);
                _class_private_field_set(this, _encodedScope, '');
                return result;
            }
        }
    ]);
    return OriginalScopeBuilder;
}();
function encodeKind(kind) {
    var kindIdx = _class_private_method_get(this, _nameIdx, nameIdx).call(this, kind);
    var encodedIdx = kindIdx - _class_private_field_get(this, _lastKind);
    _class_private_field_set(this, _lastKind, kindIdx);
    return encodedIdx;
}
function nameIdx(name) {
    var idx = _class_private_field_get(this, _names).indexOf(name);
    if (idx < 0) {
        idx = _class_private_field_get(this, _names).length;
        _class_private_field_get(this, _names).push(name);
    }
    return idx;
}
var _encodedRange = /*#__PURE__*/ new WeakMap(), _state = /*#__PURE__*/ new WeakMap(), _names1 = /*#__PURE__*/ new WeakMap(), _emitLineSeparator = /*#__PURE__*/ new WeakSet(), _emitItemSepratorIfRequired = /*#__PURE__*/ new WeakSet(), _nameIdx1 = /*#__PURE__*/ new WeakSet();
var GeneratedRangeBuilder = /*#__PURE__*/ function() {
    "use strict";
    function GeneratedRangeBuilder(names) {
        _class_call_check(this, GeneratedRangeBuilder);
        _class_private_method_init(this, _emitLineSeparator);
        _class_private_method_init(this, _emitItemSepratorIfRequired);
        _class_private_method_init(this, _nameIdx1);
        _class_private_field_init(this, _encodedRange, {
            writable: true,
            value: ''
        });
        _class_private_field_init(this, _state, {
            writable: true,
            value: {
                line: 0,
                column: 0,
                defSourceIdx: 0,
                defScopeIdx: 0,
                callsiteSourceIdx: 0,
                callsiteLine: 0,
                callsiteColumn: 0
            }
        });
        _class_private_field_init(this, _names1, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _names1, names);
    }
    _create_class(GeneratedRangeBuilder, [
        {
            key: "start",
            value: function start(line, column, options) {
                _class_private_method_get(this, _emitLineSeparator, emitLineSeparator).call(this, line);
                _class_private_method_get(this, _emitItemSepratorIfRequired, emitItemSepratorIfRequired).call(this);
                var emittedColumn = column - (_class_private_field_get(this, _state).line === line ? _class_private_field_get(this, _state).column : 0);
                _class_private_field_set(this, _encodedRange, _class_private_field_get(this, _encodedRange) + encodeVlq(emittedColumn));
                _class_private_field_get(this, _state).line = line;
                _class_private_field_get(this, _state).column = column;
                var flags = 0;
                if (options === null || options === void 0 ? void 0 : options.definition) {
                    flags |= 1 /* SDK.SourceMapScopes.EncodedGeneratedRangeFlag.HasDefinition */ ;
                }
                if (options === null || options === void 0 ? void 0 : options.callsite) {
                    flags |= 2 /* SDK.SourceMapScopes.EncodedGeneratedRangeFlag.HasCallsite */ ;
                }
                if (options === null || options === void 0 ? void 0 : options.isScope) {
                    flags |= 4 /* SDK.SourceMapScopes.EncodedGeneratedRangeFlag.IsScope */ ;
                }
                _class_private_field_set(this, _encodedRange, _class_private_field_get(this, _encodedRange) + encodeVlq(flags));
                if (options === null || options === void 0 ? void 0 : options.definition) {
                    var _options_definition = options.definition, sourceIdx = _options_definition.sourceIdx, scopeIdx = _options_definition.scopeIdx;
                    _class_private_field_set(this, _encodedRange, _class_private_field_get(this, _encodedRange) + encodeVlq(sourceIdx - _class_private_field_get(this, _state).defSourceIdx));
                    var emittedScopeIdx = scopeIdx - (_class_private_field_get(this, _state).defSourceIdx === sourceIdx ? _class_private_field_get(this, _state).defScopeIdx : 0);
                    _class_private_field_set(this, _encodedRange, _class_private_field_get(this, _encodedRange) + encodeVlq(emittedScopeIdx));
                    _class_private_field_get(this, _state).defSourceIdx = sourceIdx;
                    _class_private_field_get(this, _state).defScopeIdx = scopeIdx;
                }
                if (options === null || options === void 0 ? void 0 : options.callsite) {
                    var _options_callsite = options.callsite, sourceIdx1 = _options_callsite.sourceIdx, _$line = _options_callsite.line, _$column = _options_callsite.column;
                    _class_private_field_set(this, _encodedRange, _class_private_field_get(this, _encodedRange) + encodeVlq(sourceIdx1 - _class_private_field_get(this, _state).callsiteSourceIdx));
                    var emittedLine = _$line - (_class_private_field_get(this, _state).callsiteSourceIdx === sourceIdx1 ? _class_private_field_get(this, _state).callsiteLine : 0);
                    _class_private_field_set(this, _encodedRange, _class_private_field_get(this, _encodedRange) + encodeVlq(emittedLine));
                    var emittedColumn1 = _$column - (_class_private_field_get(this, _state).callsiteLine === _$line ? _class_private_field_get(this, _state).callsiteColumn : 0);
                    _class_private_field_set(this, _encodedRange, _class_private_field_get(this, _encodedRange) + encodeVlq(emittedColumn1));
                    _class_private_field_get(this, _state).callsiteSourceIdx = sourceIdx1;
                    _class_private_field_get(this, _state).callsiteLine = _$line;
                    _class_private_field_get(this, _state).callsiteColumn = _$column;
                }
                var _options_bindings;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = ((_options_bindings = options === null || options === void 0 ? void 0 : options.bindings) !== null && _options_bindings !== void 0 ? _options_bindings : [])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var bindings = _step.value;
                        if (bindings === undefined || typeof bindings === 'string') {
                            _class_private_field_set(this, _encodedRange, _class_private_field_get(this, _encodedRange) + encodeVlq(_class_private_method_get(this, _nameIdx1, nameIdx1).call(this, bindings)));
                            continue;
                        }
                        _class_private_field_set(this, _encodedRange, _class_private_field_get(this, _encodedRange) + encodeVlq(-bindings.length));
                        _class_private_field_set(this, _encodedRange, _class_private_field_get(this, _encodedRange) + encodeVlq(_class_private_method_get(this, _nameIdx1, nameIdx1).call(this, bindings[0].name)));
                        if (bindings[0].line !== line || bindings[0].column !== column) {
                            throw new Error('First binding line/column must match the range start line/column');
                        }
                        for(var i = 1; i < bindings.length; ++i){
                            var _bindings_i = bindings[i], _$line1 = _bindings_i.line, _$column1 = _bindings_i.column, name = _bindings_i.name;
                            var emittedLine1 = _$line1 - bindings[i - 1].line;
                            var emittedColumn2 = _$column1 - (_$line1 === bindings[i - 1].line ? bindings[i - 1].column : 0);
                            _class_private_field_set(this, _encodedRange, _class_private_field_get(this, _encodedRange) + encodeVlq(emittedLine1));
                            _class_private_field_set(this, _encodedRange, _class_private_field_get(this, _encodedRange) + encodeVlq(emittedColumn2));
                            _class_private_field_set(this, _encodedRange, _class_private_field_get(this, _encodedRange) + encodeVlq(_class_private_method_get(this, _nameIdx1, nameIdx1).call(this, name)));
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
                return this;
            }
        },
        {
            key: "end",
            value: function end(line, column) {
                _class_private_method_get(this, _emitLineSeparator, emitLineSeparator).call(this, line);
                _class_private_method_get(this, _emitItemSepratorIfRequired, emitItemSepratorIfRequired).call(this);
                var emittedColumn = column - (_class_private_field_get(this, _state).line === line ? _class_private_field_get(this, _state).column : 0);
                _class_private_field_set(this, _encodedRange, _class_private_field_get(this, _encodedRange) + encodeVlq(emittedColumn));
                _class_private_field_get(this, _state).line = line;
                _class_private_field_get(this, _state).column = column;
                return this;
            }
        },
        {
            key: "build",
            value: function build() {
                var result = _class_private_field_get(this, _encodedRange);
                _class_private_field_set(this, _state, {
                    line: 0,
                    column: 0,
                    defSourceIdx: 0,
                    defScopeIdx: 0,
                    callsiteSourceIdx: 0,
                    callsiteLine: 0,
                    callsiteColumn: 0
                });
                _class_private_field_set(this, _encodedRange, '');
                return result;
            }
        }
    ]);
    return GeneratedRangeBuilder;
} //# sourceMappingURL=SourceMapEncoder.js.map
();
function emitLineSeparator(line) {
    for(var i = _class_private_field_get(this, _state).line; i < line; ++i){
        _class_private_field_set(this, _encodedRange, _class_private_field_get(this, _encodedRange) + ';');
    }
}
function emitItemSepratorIfRequired() {
    if (_class_private_field_get(this, _encodedRange) !== '' && _class_private_field_get(this, _encodedRange)[_class_private_field_get(this, _encodedRange).length - 1] !== ';') {
        _class_private_field_set(this, _encodedRange, _class_private_field_get(this, _encodedRange) + ',');
    }
}
function nameIdx1(name) {
    if (name === undefined) {
        return -1;
    }
    var idx = _class_private_field_get(this, _names1).indexOf(name);
    if (idx < 0) {
        idx = _class_private_field_get(this, _names1).length;
        _class_private_field_get(this, _names1).push(name);
    }
    return idx;
}


}),

}]);