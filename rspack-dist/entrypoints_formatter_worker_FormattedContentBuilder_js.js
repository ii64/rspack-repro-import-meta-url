"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["entrypoints_formatter_worker_FormattedContentBuilder_js"], {
"./entrypoints/formatter_worker/FormattedContentBuilder.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  FormattedContentBuilder: function() { return FormattedContentBuilder; }
});
// Copyright 2016 The Chromium Authors. All rights reserved.
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
function _class_apply_descriptor_update(receiver, descriptor) {
    if (descriptor.set) {
        if (!descriptor.get) {
            throw new TypeError("attempted to read set only private field");
        }
        if (!("__destrWrapper" in descriptor)) {
            descriptor.__destrWrapper = {
                set value (v){
                    descriptor.set.call(receiver, v);
                },
                get value () {
                    return descriptor.get.call(receiver);
                }
            };
        }
        return descriptor.__destrWrapper;
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        return descriptor;
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
function _class_private_field_update(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "update");
    return _class_apply_descriptor_update(receiver, descriptor);
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
var _lastOriginalPosition = /*#__PURE__*/ new WeakMap(), _formattedContent = /*#__PURE__*/ new WeakMap(), _formattedContentLength = /*#__PURE__*/ new WeakMap(), _lastFormattedPosition = /*#__PURE__*/ new WeakMap(), _nestingLevel = /*#__PURE__*/ new WeakMap(), _newLines = /*#__PURE__*/ new WeakMap(), _enforceSpaceBetweenWords = /*#__PURE__*/ new WeakMap(), _softSpace = /*#__PURE__*/ new WeakMap(), _hardSpaces = /*#__PURE__*/ new WeakMap(), _cachedIndents = /*#__PURE__*/ new WeakMap(), _canBeIdentifierOrNumber = /*#__PURE__*/ new WeakMap(), _appendFormatting = /*#__PURE__*/ new WeakSet(), _indent = /*#__PURE__*/ new WeakSet(), _addText = /*#__PURE__*/ new WeakSet(), _addMappingIfNeeded = /*#__PURE__*/ new WeakSet();
var FormattedContentBuilder = /*#__PURE__*/ function() {
    "use strict";
    function FormattedContentBuilder(indentString) {
        _class_call_check(this, FormattedContentBuilder);
        _class_private_method_init(this, _appendFormatting);
        _class_private_method_init(this, _indent);
        _class_private_method_init(this, _addText);
        _class_private_method_init(this, _addMappingIfNeeded);
        _define_property(this, "indentString", void 0);
        _class_private_field_init(this, _lastOriginalPosition, {
            writable: true,
            value: 0
        });
        _class_private_field_init(this, _formattedContent, {
            writable: true,
            value: []
        });
        _class_private_field_init(this, _formattedContentLength, {
            writable: true,
            value: 0
        });
        _class_private_field_init(this, _lastFormattedPosition, {
            writable: true,
            value: 0
        });
        _class_private_field_init(this, _nestingLevel, {
            writable: true,
            value: 0
        });
        _class_private_field_init(this, _newLines, {
            writable: true,
            value: 0
        });
        _class_private_field_init(this, _enforceSpaceBetweenWords, {
            writable: true,
            value: true
        });
        _class_private_field_init(this, _softSpace, {
            writable: true,
            value: false
        });
        _class_private_field_init(this, _hardSpaces, {
            writable: true,
            value: 0
        });
        _class_private_field_init(this, _cachedIndents, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(this, _canBeIdentifierOrNumber, {
            writable: true,
            value: RegExp("[$\\u200C\\u200D\\p{ID_Continue}]", "u")
        });
        _define_property(this, "mapping", {
            original: [
                0
            ],
            formatted: [
                0
            ]
        });
        this.indentString = indentString;
    }
    _create_class(FormattedContentBuilder, [
        {
            key: "setEnforceSpaceBetweenWords",
            value: function setEnforceSpaceBetweenWords(value) {
                var oldValue = _class_private_field_get(this, _enforceSpaceBetweenWords);
                _class_private_field_set(this, _enforceSpaceBetweenWords, value);
                return oldValue;
            }
        },
        {
            key: "addToken",
            value: function addToken(token, offset) {
                // Skip the regex check if `addSoftSpace` will be a no-op.
                if (_class_private_field_get(this, _enforceSpaceBetweenWords) && !_class_private_field_get(this, _hardSpaces) && !_class_private_field_get(this, _softSpace)) {
                    var _class_private_field_get_at;
                    var _class_private_field_get_at_at;
                    var lastCharOfLastToken = (_class_private_field_get_at_at = (_class_private_field_get_at = _class_private_field_get(this, _formattedContent).at(-1)) === null || _class_private_field_get_at === void 0 ? void 0 : _class_private_field_get_at.at(-1)) !== null && _class_private_field_get_at_at !== void 0 ? _class_private_field_get_at_at : '';
                    if (_class_private_field_get(this, _canBeIdentifierOrNumber).test(lastCharOfLastToken) && _class_private_field_get(this, _canBeIdentifierOrNumber).test(token)) {
                        this.addSoftSpace();
                    }
                }
                _class_private_method_get(this, _appendFormatting, appendFormatting).call(this);
                // Insert token.
                _class_private_method_get(this, _addMappingIfNeeded, addMappingIfNeeded).call(this, offset);
                _class_private_method_get(this, _addText, addText).call(this, token);
            }
        },
        {
            key: "addSoftSpace",
            value: function addSoftSpace() {
                if (!_class_private_field_get(this, _hardSpaces)) {
                    _class_private_field_set(this, _softSpace, true);
                }
            }
        },
        {
            key: "addHardSpace",
            value: function addHardSpace() {
                _class_private_field_set(this, _softSpace, false);
                ++_class_private_field_update(this, _hardSpaces).value;
            }
        },
        {
            key: "addNewLine",
            value: function addNewLine(noSquash) {
                // Avoid leading newlines.
                if (!_class_private_field_get(this, _formattedContentLength)) {
                    return;
                }
                if (noSquash) {
                    ++_class_private_field_update(this, _newLines).value;
                } else {
                    _class_private_field_set(this, _newLines, _class_private_field_get(this, _newLines) || 1);
                }
            }
        },
        {
            key: "increaseNestingLevel",
            value: function increaseNestingLevel() {
                _class_private_field_set(this, _nestingLevel, _class_private_field_get(this, _nestingLevel) + 1);
            }
        },
        {
            key: "decreaseNestingLevel",
            value: function decreaseNestingLevel() {
                if (_class_private_field_get(this, _nestingLevel) > 0) {
                    _class_private_field_set(this, _nestingLevel, _class_private_field_get(this, _nestingLevel) - 1);
                }
            }
        },
        {
            key: "content",
            value: function content() {
                return _class_private_field_get(this, _formattedContent).join('') + (_class_private_field_get(this, _newLines) ? '\n' : '');
            }
        }
    ]);
    return FormattedContentBuilder;
} //# sourceMappingURL=FormattedContentBuilder.js.map
();
function appendFormatting() {
    if (_class_private_field_get(this, _newLines)) {
        for(var i = 0; i < _class_private_field_get(this, _newLines); ++i){
            _class_private_method_get(this, _addText, addText).call(this, '\n');
        }
        _class_private_method_get(this, _addText, addText).call(this, _class_private_method_get(this, _indent, indent).call(this));
    } else if (_class_private_field_get(this, _softSpace)) {
        _class_private_method_get(this, _addText, addText).call(this, ' ');
    }
    if (_class_private_field_get(this, _hardSpaces)) {
        for(var i1 = 0; i1 < _class_private_field_get(this, _hardSpaces); ++i1){
            _class_private_method_get(this, _addText, addText).call(this, ' ');
        }
    }
    _class_private_field_set(this, _newLines, 0);
    _class_private_field_set(this, _softSpace, false);
    _class_private_field_set(this, _hardSpaces, 0);
}
function indent() {
    var cachedValue = _class_private_field_get(this, _cachedIndents).get(_class_private_field_get(this, _nestingLevel));
    if (cachedValue) {
        return cachedValue;
    }
    var fullIndent = '';
    for(var i = 0; i < _class_private_field_get(this, _nestingLevel); ++i){
        fullIndent += this.indentString;
    }
    // Cache a maximum of 20 nesting level indents.
    if (_class_private_field_get(this, _nestingLevel) <= 20) {
        _class_private_field_get(this, _cachedIndents).set(_class_private_field_get(this, _nestingLevel), fullIndent);
    }
    return fullIndent;
}
function addText(text) {
    _class_private_field_get(this, _formattedContent).push(text);
    _class_private_field_set(this, _formattedContentLength, _class_private_field_get(this, _formattedContentLength) + text.length);
}
function addMappingIfNeeded(originalPosition) {
    if (originalPosition - _class_private_field_get(this, _lastOriginalPosition) === _class_private_field_get(this, _formattedContentLength) - _class_private_field_get(this, _lastFormattedPosition)) {
        return;
    }
    this.mapping.original.push(originalPosition);
    _class_private_field_set(this, _lastOriginalPosition, originalPosition);
    this.mapping.formatted.push(_class_private_field_get(this, _formattedContentLength));
    _class_private_field_set(this, _lastFormattedPosition, _class_private_field_get(this, _formattedContentLength));
}


}),

}]);