"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_settings_emulation_utils_StructuredHeaders_js"], {
"./panels/settings/emulation/utils/StructuredHeaders.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  parseItem: function() { return parseItem; },
  parseList: function() { return parseList; },
  serializeItem: function() { return serializeItem; },
  serializeList: function() { return serializeList; }
});
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var CHAR_MINUS = '-'.charCodeAt(0);
var CHAR_0 = '0'.charCodeAt(0);
var CHAR_9 = '9'.charCodeAt(0);
var CHAR_A = 'A'.charCodeAt(0);
var CHAR_Z = 'Z'.charCodeAt(0);
var CHAR_LOWER_A = 'a'.charCodeAt(0);
var CHAR_LOWER_Z = 'z'.charCodeAt(0);
var CHAR_DQUOTE = '"'.charCodeAt(0);
var CHAR_COLON = ':'.charCodeAt(0);
var CHAR_QUESTION_MARK = '?'.charCodeAt(0);
var CHAR_STAR = '*'.charCodeAt(0);
var CHAR_UNDERSCORE = '_'.charCodeAt(0);
var CHAR_DOT = '.'.charCodeAt(0);
var CHAR_BACKSLASH = '\\'.charCodeAt(0);
var CHAR_SLASH = '/'.charCodeAt(0);
var CHAR_PLUS = '+'.charCodeAt(0);
var CHAR_EQUALS = '='.charCodeAt(0);
var CHAR_EXCLAMATION = '!'.charCodeAt(0);
var CHAR_HASH = '#'.charCodeAt(0);
var CHAR_DOLLAR = '$'.charCodeAt(0);
var CHAR_PERCENT = '%'.charCodeAt(0);
var CHAR_AND = '&'.charCodeAt(0);
var CHAR_SQUOTE = '\''.charCodeAt(0);
var CHAR_HAT = '^'.charCodeAt(0);
var CHAR_BACKTICK = '`'.charCodeAt(0);
var CHAR_PIPE = '|'.charCodeAt(0);
var CHAR_TILDE = '~'.charCodeAt(0);
// ASCII printable range.
var CHAR_MIN_ASCII_PRINTABLE = 0x20;
var CHAR_MAX_ASCII_PRINTABLE = 0x7e;
// Note: structured headers operates over ASCII, not unicode, so these are
// all indeed supposed to return false on things outside 32-127 range regardless
// of them being other kinds of digits or letters.
function isDigit(charCode) {
    // DIGIT = %x30-39 ; 0-9 (from RFC 5234)
    if (charCode === undefined) {
        return false;
    }
    return charCode >= CHAR_0 && charCode <= CHAR_9;
}
function isAlpha(charCode) {
    // ALPHA = %x41-5A / %x61-7A   ; A-Z / a-z (from RFC 5234)
    if (charCode === undefined) {
        return false;
    }
    return charCode >= CHAR_A && charCode <= CHAR_Z || charCode >= CHAR_LOWER_A && charCode <= CHAR_LOWER_Z;
}
function isLcAlpha(charCode) {
    // lcalpha = %x61-7A ; a-z
    if (charCode === undefined) {
        return false;
    }
    return charCode >= CHAR_LOWER_A && charCode <= CHAR_LOWER_Z;
}
function isTChar(charCode) {
    if (charCode === undefined) {
        return false;
    }
    // tchar = "!" / "#" / "$" / "%" / "&" / "'" / "*" / "+" / "-" / "." /
    // "^" / "_" / "`" / "|" / "~" / DIGIT / ALPHA (from RFC 7230)
    if (isDigit(charCode) || isAlpha(charCode)) {
        return true;
    }
    switch(charCode){
        case CHAR_EXCLAMATION:
        case CHAR_HASH:
        case CHAR_DOLLAR:
        case CHAR_PERCENT:
        case CHAR_AND:
        case CHAR_SQUOTE:
        case CHAR_STAR:
        case CHAR_PLUS:
        case CHAR_MINUS:
        case CHAR_DOT:
        case CHAR_HAT:
        case CHAR_UNDERSCORE:
        case CHAR_BACKTICK:
        case CHAR_PIPE:
        case CHAR_TILDE:
            return true;
        default:
            return false;
    }
}
var Input = /*#__PURE__*/ function() {
    "use strict";
    function Input(input) {
        _class_call_check(this, Input);
        _define_property(this, "data", void 0);
        _define_property(this, "pos", void 0);
        this.data = input;
        this.pos = 0;
        // 4.2 step 2 is to discard any leading SP characters.
        this.skipSP();
    }
    _create_class(Input, [
        {
            key: "peek",
            value: function peek() {
                return this.data[this.pos];
            }
        },
        {
            key: "peekCharCode",
            value: function peekCharCode() {
                return this.pos < this.data.length ? this.data.charCodeAt(this.pos) : undefined;
            }
        },
        {
            key: "eat",
            value: function eat() {
                ++this.pos;
            }
        },
        {
            // Matches SP*.
            // SP = %x20, from RFC 5234
            key: "skipSP",
            value: function skipSP() {
                while(this.data[this.pos] === ' '){
                    ++this.pos;
                }
            }
        },
        {
            // Matches OWS
            // OWS = *( SP / HTAB ) , from RFC 7230
            key: "skipOWS",
            value: function skipOWS() {
                while(this.data[this.pos] === ' ' || this.data[this.pos] === '\t'){
                    ++this.pos;
                }
            }
        },
        {
            key: "atEnd",
            value: function atEnd() {
                return this.pos === this.data.length;
            }
        },
        {
            // 4.2 steps 6,7 --- checks for trailing characters.
            key: "allParsed",
            value: function allParsed() {
                this.skipSP();
                return this.pos === this.data.length;
            }
        }
    ]);
    return Input;
}();
function makeError() {
    return {
        kind: 0 /* ResultKind.ERROR */ 
    };
}
// 4.2.1. Parsing a list
function parseListInternal(input) {
    var result = {
        kind: 11 /* ResultKind.LIST */ ,
        items: []
    };
    while(!input.atEnd()){
        var piece = parseItemOrInnerList(input);
        if (piece.kind === 0 /* ResultKind.ERROR */ ) {
            return piece;
        }
        result.items.push(piece);
        input.skipOWS();
        if (input.atEnd()) {
            return result;
        }
        if (input.peek() !== ',') {
            return makeError();
        }
        input.eat();
        input.skipOWS();
        // "If input_string is empty, there is a trailing comma; fail parsing."
        if (input.atEnd()) {
            return makeError();
        }
    }
    return result; // this case corresponds to an empty list.
}
// 4.2.1.1.  Parsing an Item or Inner List
function parseItemOrInnerList(input) {
    if (input.peek() === '(') {
        return parseInnerList(input);
    }
    return parseItemInternal(input);
}
// 4.2.1.2.  Parsing an Inner List
function parseInnerList(input) {
    if (input.peek() !== '(') {
        return makeError();
    }
    input.eat();
    var items = [];
    while(!input.atEnd()){
        input.skipSP();
        if (input.peek() === ')') {
            input.eat();
            var params = parseParameters(input);
            if (params.kind === 0 /* ResultKind.ERROR */ ) {
                return params;
            }
            return {
                kind: 12 /* ResultKind.INNER_LIST */ ,
                items: items,
                parameters: params
            };
        }
        var item = parseItemInternal(input);
        if (item.kind === 0 /* ResultKind.ERROR */ ) {
            return item;
        }
        items.push(item);
        if (input.peek() !== ' ' && input.peek() !== ')') {
            return makeError();
        }
    }
    // Didn't see ), so error.
    return makeError();
}
// 4.2.3.  Parsing an Item
function parseItemInternal(input) {
    var bareItem = parseBareItem(input);
    if (bareItem.kind === 0 /* ResultKind.ERROR */ ) {
        return bareItem;
    }
    var params = parseParameters(input);
    if (params.kind === 0 /* ResultKind.ERROR */ ) {
        return params;
    }
    return {
        kind: 4 /* ResultKind.ITEM */ ,
        value: bareItem,
        parameters: params
    };
}
// 4.2.3.1.  Parsing a Bare Item
function parseBareItem(input) {
    var upcoming = input.peekCharCode();
    if (upcoming === CHAR_MINUS || isDigit(upcoming)) {
        return parseIntegerOrDecimal(input);
    }
    if (upcoming === CHAR_DQUOTE) {
        return parseString(input);
    }
    if (upcoming === CHAR_COLON) {
        return parseByteSequence(input);
    }
    if (upcoming === CHAR_QUESTION_MARK) {
        return parseBoolean(input);
    }
    if (upcoming === CHAR_STAR || isAlpha(upcoming)) {
        return parseToken(input);
    }
    return makeError();
}
// 4.2.3.2.  Parsing Parameters
function parseParameters(input) {
    // The main noteworthy thing here is handling of duplicates and ordering:
    //
    // "Note that Parameters are ordered as serialized"
    //
    // "If parameters already contains a name param_name (comparing
    // character-for-character), overwrite its value."
    //
    // "Note that when duplicate Parameter keys are encountered, this has the
    // effect of ignoring all but the last instance."
    var items = new Map();
    while(!input.atEnd()){
        if (input.peek() !== ';') {
            break;
        }
        input.eat();
        input.skipSP();
        var paramName = parseKey(input);
        if (paramName.kind === 0 /* ResultKind.ERROR */ ) {
            return paramName;
        }
        var paramValue = {
            kind: 10 /* ResultKind.BOOLEAN */ ,
            value: true
        };
        if (input.peek() === '=') {
            input.eat();
            var parsedParamValue = parseBareItem(input);
            if (parsedParamValue.kind === 0 /* ResultKind.ERROR */ ) {
                return parsedParamValue;
            }
            paramValue = parsedParamValue;
        }
        // Delete any previous occurrence of duplicates to get the ordering right.
        if (items.has(paramName.value)) {
            items.delete(paramName.value);
        }
        items.set(paramName.value, {
            kind: 2 /* ResultKind.PARAMETER */ ,
            name: paramName,
            value: paramValue
        });
    }
    return {
        kind: 3 /* ResultKind.PARAMETERS */ ,
        items: _to_consumable_array(items.values())
    };
}
// 4.2.3.3.  Parsing a Key
function parseKey(input) {
    var outputString = '';
    var first = input.peekCharCode();
    if (first !== CHAR_STAR && !isLcAlpha(first)) {
        return makeError();
    }
    while(!input.atEnd()){
        var upcoming = input.peekCharCode();
        if (!isLcAlpha(upcoming) && !isDigit(upcoming) && upcoming !== CHAR_UNDERSCORE && upcoming !== CHAR_MINUS && upcoming !== CHAR_DOT && upcoming !== CHAR_STAR) {
            break;
        }
        outputString += input.peek();
        input.eat();
    }
    return {
        kind: 1 /* ResultKind.PARAM_NAME */ ,
        value: outputString
    };
}
// 4.2.4.  Parsing an Integer or Decimal
function parseIntegerOrDecimal(input) {
    var resultKind = 5 /* ResultKind.INTEGER */ ;
    var sign = 1;
    var inputNumber = '';
    if (input.peek() === '-') {
        input.eat();
        sign = -1;
    }
    // This case includes end of input.
    if (!isDigit(input.peekCharCode())) {
        return makeError();
    }
    while(!input.atEnd()){
        var char = input.peekCharCode();
        if (char !== undefined && isDigit(char)) {
            input.eat();
            inputNumber += String.fromCodePoint(char);
        } else if (char === CHAR_DOT && resultKind === 5 /* ResultKind.INTEGER */ ) {
            input.eat();
            if (inputNumber.length > 12) {
                return makeError();
            }
            inputNumber += '.';
            resultKind = 6 /* ResultKind.DECIMAL */ ;
        } else {
            break;
        }
        if (resultKind === 5 /* ResultKind.INTEGER */  && inputNumber.length > 15) {
            return makeError();
        }
        if (resultKind === 6 /* ResultKind.DECIMAL */  && inputNumber.length > 16) {
            return makeError();
        }
    }
    if (resultKind === 5 /* ResultKind.INTEGER */ ) {
        var num = sign * Number.parseInt(inputNumber, 10);
        if (num < -999999999999999 || num > 999999999999999) {
            return makeError();
        }
        return {
            kind: 5 /* ResultKind.INTEGER */ ,
            value: num
        };
    }
    var afterDot = inputNumber.length - 1 - inputNumber.indexOf('.');
    if (afterDot > 3 || afterDot === 0) {
        return makeError();
    }
    return {
        kind: 6 /* ResultKind.DECIMAL */ ,
        value: sign * Number.parseFloat(inputNumber)
    };
}
// 4.2.5.  Parsing a String
function parseString(input) {
    var outputString = '';
    if (input.peek() !== '"') {
        return makeError();
    }
    input.eat();
    while(!input.atEnd()){
        var char = input.peekCharCode();
        // can't happen due to atEnd(), but help the typechecker out.
        if (char === undefined) {
            return makeError();
        }
        input.eat();
        if (char === CHAR_BACKSLASH) {
            if (input.atEnd()) {
                return makeError();
            }
            var nextChar = input.peekCharCode();
            input.eat();
            if (nextChar !== CHAR_BACKSLASH && nextChar !== CHAR_DQUOTE) {
                return makeError();
            }
            outputString += String.fromCodePoint(nextChar);
        } else if (char === CHAR_DQUOTE) {
            return {
                kind: 7 /* ResultKind.STRING */ ,
                value: outputString
            };
        } else if (char < CHAR_MIN_ASCII_PRINTABLE || char > CHAR_MAX_ASCII_PRINTABLE) {
            return makeError();
        } else {
            outputString += String.fromCodePoint(char);
        }
    }
    // No closing quote.
    return makeError();
}
// 4.2.6.  Parsing a Token
function parseToken(input) {
    var first = input.peekCharCode();
    if (first !== CHAR_STAR && !isAlpha(first)) {
        return makeError();
    }
    var outputString = '';
    while(!input.atEnd()){
        var upcoming = input.peekCharCode();
        if (upcoming === undefined || !isTChar(upcoming) && upcoming !== CHAR_COLON && upcoming !== CHAR_SLASH) {
            break;
        }
        input.eat();
        outputString += String.fromCodePoint(upcoming);
    }
    return {
        kind: 8 /* ResultKind.TOKEN */ ,
        value: outputString
    };
}
// 4.2.7.  Parsing a Byte Sequence
function parseByteSequence(input) {
    var outputString = '';
    if (input.peek() !== ':') {
        return makeError();
    }
    input.eat();
    while(!input.atEnd()){
        var char = input.peekCharCode();
        // can't happen due to atEnd(), but help the typechecker out.
        if (char === undefined) {
            return makeError();
        }
        input.eat();
        if (char === CHAR_COLON) {
            return {
                kind: 9 /* ResultKind.BINARY */ ,
                value: outputString
            };
        }
        if (isDigit(char) || isAlpha(char) || char === CHAR_PLUS || char === CHAR_SLASH || char === CHAR_EQUALS) {
            outputString += String.fromCodePoint(char);
        } else {
            return makeError();
        }
    }
    // No closing :
    return makeError();
}
// 4.2.8.  Parsing a Boolean
function parseBoolean(input) {
    if (input.peek() !== '?') {
        return makeError();
    }
    input.eat();
    if (input.peek() === '0') {
        input.eat();
        return {
            kind: 10 /* ResultKind.BOOLEAN */ ,
            value: false
        };
    }
    if (input.peek() === '1') {
        input.eat();
        return {
            kind: 10 /* ResultKind.BOOLEAN */ ,
            value: true
        };
    }
    return makeError();
}
function parseItem(input) {
    var i = new Input(input);
    var result = parseItemInternal(i);
    if (!i.allParsed()) {
        return makeError();
    }
    return result;
}
function parseList(input) {
    // No need to look for trailing stuff here since parseListInternal does it already.
    return parseListInternal(new Input(input));
}
// 4.1.3.  Serializing an Item
function serializeItem(input) {
    var bareItemVal = serializeBareItem(input.value);
    if (bareItemVal.kind === 0 /* ResultKind.ERROR */ ) {
        return bareItemVal;
    }
    var paramVal = serializeParameters(input.parameters);
    if (paramVal.kind === 0 /* ResultKind.ERROR */ ) {
        return paramVal;
    }
    return {
        kind: 13 /* ResultKind.SERIALIZATION_RESULT */ ,
        value: bareItemVal.value + paramVal.value
    };
}
// 4.1.1.  Serializing a List
function serializeList(input) {
    var outputPieces = [];
    for(var i = 0; i < input.items.length; ++i){
        var item = input.items[i];
        if (item.kind === 12 /* ResultKind.INNER_LIST */ ) {
            var itemResult = serializeInnerList(item);
            if (itemResult.kind === 0 /* ResultKind.ERROR */ ) {
                return itemResult;
            }
            outputPieces.push(itemResult.value);
        } else {
            var itemResult1 = serializeItem(item);
            if (itemResult1.kind === 0 /* ResultKind.ERROR */ ) {
                return itemResult1;
            }
            outputPieces.push(itemResult1.value);
        }
    }
    var output = outputPieces.join(', ');
    return {
        kind: 13 /* ResultKind.SERIALIZATION_RESULT */ ,
        value: output
    };
}
// 4.1.1.1.  Serializing an Inner List
function serializeInnerList(input) {
    var outputPieces = [];
    for(var i = 0; i < input.items.length; ++i){
        var itemResult = serializeItem(input.items[i]);
        if (itemResult.kind === 0 /* ResultKind.ERROR */ ) {
            return itemResult;
        }
        outputPieces.push(itemResult.value);
    }
    var output = '(' + outputPieces.join(' ') + ')';
    var paramResult = serializeParameters(input.parameters);
    if (paramResult.kind === 0 /* ResultKind.ERROR */ ) {
        return paramResult;
    }
    output += paramResult.value;
    return {
        kind: 13 /* ResultKind.SERIALIZATION_RESULT */ ,
        value: output
    };
}
// 4.1.1.2.  Serializing Parameters
function serializeParameters(input) {
    var output = '';
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = input.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var item = _step.value;
            output += ';';
            var nameResult = serializeKey(item.name);
            if (nameResult.kind === 0 /* ResultKind.ERROR */ ) {
                return nameResult;
            }
            output += nameResult.value;
            var itemVal = item.value;
            if (itemVal.kind !== 10 /* ResultKind.BOOLEAN */  || !itemVal.value) {
                output += '=';
                var itemValResult = serializeBareItem(itemVal);
                if (itemValResult.kind === 0 /* ResultKind.ERROR */ ) {
                    return itemValResult;
                }
                output += itemValResult.value;
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
    return {
        kind: 13 /* ResultKind.SERIALIZATION_RESULT */ ,
        value: output
    };
}
// 4.1.1.3.  Serializing a Key
function serializeKey(input) {
    if (input.value.length === 0) {
        return makeError();
    }
    var firstChar = input.value.charCodeAt(0);
    if (!isLcAlpha(firstChar) && firstChar !== CHAR_STAR) {
        return makeError();
    }
    for(var i = 1; i < input.value.length; ++i){
        var char = input.value.charCodeAt(i);
        if (!isLcAlpha(char) && !isDigit(char) && char !== CHAR_UNDERSCORE && char !== CHAR_MINUS && char !== CHAR_DOT && char !== CHAR_STAR) {
            return makeError();
        }
    }
    return {
        kind: 13 /* ResultKind.SERIALIZATION_RESULT */ ,
        value: input.value
    };
}
// 4.1.3.1.  Serializing a Bare Item
function serializeBareItem(input) {
    if (input.kind === 5 /* ResultKind.INTEGER */ ) {
        return serializeInteger(input);
    }
    if (input.kind === 6 /* ResultKind.DECIMAL */ ) {
        return serializeDecimal(input);
    }
    if (input.kind === 7 /* ResultKind.STRING */ ) {
        return serializeString(input);
    }
    if (input.kind === 8 /* ResultKind.TOKEN */ ) {
        return serializeToken(input);
    }
    if (input.kind === 10 /* ResultKind.BOOLEAN */ ) {
        return serializeBoolean(input);
    }
    if (input.kind === 9 /* ResultKind.BINARY */ ) {
        return serializeByteSequence(input);
    }
    return makeError();
}
// 4.1.4.  Serializing an Integer
function serializeInteger(input) {
    if (input.value < -999999999999999 || input.value > 999999999999999 || !Number.isInteger(input.value)) {
        return makeError();
    }
    return {
        kind: 13 /* ResultKind.SERIALIZATION_RESULT */ ,
        value: input.value.toString(10)
    };
}
// 4.1.5.  Serializing a Decimal
function serializeDecimal(_input) {
    throw 'Unimplemented';
}
// 4.1.6.  Serializing a String
function serializeString(input) {
    // Only printable ASCII strings are supported by the spec.
    for(var i = 0; i < input.value.length; ++i){
        var char = input.value.charCodeAt(i);
        if (char < CHAR_MIN_ASCII_PRINTABLE || char > CHAR_MAX_ASCII_PRINTABLE) {
            return makeError();
        }
    }
    var output = '"';
    for(var i1 = 0; i1 < input.value.length; ++i1){
        var charStr = input.value[i1];
        if (charStr === '"' || charStr === '\\') {
            output += '\\';
        }
        output += charStr;
    }
    output += '"';
    return {
        kind: 13 /* ResultKind.SERIALIZATION_RESULT */ ,
        value: output
    };
}
// 4.1.7.  Serializing a Token
function serializeToken(input) {
    if (input.value.length === 0) {
        return makeError();
    }
    var firstChar = input.value.charCodeAt(0);
    if (!isAlpha(firstChar) && firstChar !== CHAR_STAR) {
        return makeError();
    }
    for(var i = 1; i < input.value.length; ++i){
        var char = input.value.charCodeAt(i);
        if (!isTChar(char) && char !== CHAR_COLON && char !== CHAR_SLASH) {
            return makeError();
        }
    }
    return {
        kind: 13 /* ResultKind.SERIALIZATION_RESULT */ ,
        value: input.value
    };
}
// 4.1.8.  Serializing a Byte Sequence
function serializeByteSequence(_input) {
    throw 'Unimplemented';
}
// 4.1.9.  Serializing a Boolean
function serializeBoolean(input) {
    return {
        kind: 13 /* ResultKind.SERIALIZATION_RESULT */ ,
        value: input.value ? '?1' : '?0'
    };
} //# sourceMappingURL=StructuredHeaders.js.map


}),

}]);