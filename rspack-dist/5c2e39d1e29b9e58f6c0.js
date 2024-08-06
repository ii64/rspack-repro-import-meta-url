function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
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
        return function(v1) {
            return step([
                n,
                v1
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
!function() {
    "use strict";
    var e = function() {};
    var _e = /*#__PURE__*/ new WeakMap(), _t = /*#__PURE__*/ new WeakMap(), _n = /*#__PURE__*/ new WeakMap();
    var t = /*#__PURE__*/ function() {
        function t(t1) {
            _class_call_check(this, t);
            _class_private_field_init(this, _e, {
                writable: true,
                value: void 0
            });
            _class_private_field_init(this, _t, {
                writable: true,
                value: void 0
            });
            _class_private_field_init(this, _n, {
                writable: true,
                value: void 0
            });
            if ("silent" === t1) _class_private_field_set(this, _e, e), _class_private_field_set(this, _t, e), _class_private_field_set(this, _n, e);
            else _class_private_field_set(this, _e, console.log), _class_private_field_set(this, _t, console.time), _class_private_field_set(this, _n, console.timeEnd);
        }
        _create_class(t, [
            {
                key: "log",
                value: function log() {
                    for(var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++){
                        e[_key] = arguments[_key];
                    }
                    var _$_class_private_field_get;
                    (_$_class_private_field_get = _class_private_field_get(this, _e)).call.apply(_$_class_private_field_get, [
                        this
                    ].concat(_to_consumable_array(e)));
                }
            },
            {
                key: "timed",
                value: function timed(e, t) {
                    _class_private_field_get(this, _t).call(this, e);
                    var n = t();
                    return _class_private_field_get(this, _n).call(this, e), n;
                }
            }
        ]);
        return t;
    }();
    var _o = /*#__PURE__*/ new WeakMap(), _r = /*#__PURE__*/ new WeakMap();
    var n = function n() {
        var _this = this;
        _class_call_check(this, n);
        _class_private_field_init(this, _o, {
            writable: true,
            value: new WeakMap
        });
        _class_private_field_init(this, _r, {
            writable: true,
            value: 1
        });
        _define_property(this, "getOrInsert", function(e) {
            var t = _class_private_field_get(_this, _o).get(e);
            return void 0 !== t ? t : (_class_private_field_get(_this, _o).set(e, _class_private_field_get(_this, _r)), _class_private_field_update(_this, _r).value++, _class_private_field_get(_this, _r) - 1);
        });
    };
    var _i = /*#__PURE__*/ new WeakMap(), _s = /*#__PURE__*/ new WeakMap(), _c = /*#__PURE__*/ new WeakMap(), _l = /*#__PURE__*/ new WeakMap(), _a = /*#__PURE__*/ new WeakMap(), _d = /*#__PURE__*/ new WeakMap();
    var o = function o(e) {
        var _this = this;
        var _this1 = this;
        _class_call_check(this, o);
        _class_private_field_init(this, _i, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _s, {
            writable: true,
            value: function(e, t) {
                var n = [];
                var _$o = document;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = e[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var r = _step.value;
                        var _$e = _class_private_field_get(_this, _c).call(_this, _$o, r.name);
                        if (_$e) n.push(r.name), _$o = _$e;
                        else if (t && (_$e = _class_private_field_get(_this, _l).call(_this, _$o, r.role), _$e)) n.push('[role="'.concat(r.role, '"]')), _$o = _$e;
                        else {
                            if (_$e = _class_private_field_get(_this, _a).call(_this, _$o, r.name, r.role), !_$e) return;
                            n.push("".concat(r.name, '[role="').concat(r.role, '"]')), _$o = _$e;
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
                return n;
            }
        });
        _class_private_field_init(this, _c, {
            writable: true,
            value: function(e, t) {
                if (!t) return null;
                var n = _class_private_field_get(_this, _d).call(_this, e, t, void 0, 2);
                return 1 !== n.length ? null : n[0];
            }
        });
        _class_private_field_init(this, _l, {
            writable: true,
            value: function(e, t) {
                if (!t) return null;
                var n = _class_private_field_get(_this, _d).call(_this, e, void 0, t, 2);
                return 1 !== n.length ? null : n[0];
            }
        });
        _class_private_field_init(this, _a, {
            writable: true,
            value: function(e, t, n) {
                if (!n || !t) return null;
                var _$o = _class_private_field_get(_this, _d).call(_this, e, t, n, 2);
                return 1 !== _$o.length ? null : _$o[0];
            }
        });
        _class_private_field_init(this, _d, {
            writable: true,
            value: function(e, t, n) {
                var _$o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
                var r = [];
                if (!t && !n) throw new Error("Both role and name are empty");
                var i = Boolean(t), s = Boolean(n), c = function(e) {
                    var l = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT);
                    do {
                        var _$e = l.currentNode;
                        if (_$e.shadowRoot && c(_$e.shadowRoot), !_instanceof(_$e, ShadowRoot) && (!i || _class_private_field_get(_this1, _i).getAccessibleName(_$e) === t) && (!s || _class_private_field_get(_this1, _i).getAccessibleRole(_$e) === n) && (r.push(_$e), _$o && r.length >= _$o)) return;
                    }while (l.nextNode());
                };
                return c(_instanceof(e, Document) ? document.documentElement : e), r;
            }
        });
        _define_property(this, "compute", function(e) {
            var t, n = e;
            var _$o = [];
            for(; n;){
                var r = _class_private_field_get(_this, _i).getAccessibleRole(n), i = _class_private_field_get(_this, _i).getAccessibleName(n);
                if (r || i) {
                    if (_$o.unshift({
                        name: i,
                        role: r
                    }), t = _class_private_field_get(_this, _s).call(_this, _$o, n !== e), t) break;
                    n !== e && _$o.shift();
                } else if (n === e) break;
                n = n.parentNode, _instanceof(n, ShadowRoot) && (n = n.host);
            }
            return t;
        });
        _class_private_field_set(this, _i, e);
    };
    var r = /*#__PURE__*/ function() {
        function r(e, t) {
            _class_call_check(this, r);
            _define_property(this, "value", void 0);
            _define_property(this, "optimized", void 0);
            this.value = e, this.optimized = t || !1;
        }
        _create_class(r, [
            {
                key: "toString",
                value: function toString() {
                    return this.value;
                }
            }
        ]);
        return r;
    }();
    var i = function(e) {
        return "#".concat(CSS.escape(e));
    }, s = function(e, t) {
        return "[".concat(e, "='").concat(CSS.escape(t), "']");
    }, c = function(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
        if (!_instanceof(e, Element)) return;
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = t[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var n = _step.value;
                var t1 = e.getAttribute(n);
                if (t1) return new r(s(n, t1), !0);
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
        if (function(e) {
            return Boolean(e.id) && 1 === e.getRootNode().querySelectorAll(i(e.id)).length;
        }(e)) return new r(i(e.id), !0);
        var n1 = e.tagName.toLowerCase();
        switch(e.tagName){
            case "BODY":
            case "HEAD":
            case "HTML":
                return new r(n1, !0);
        }
        var o = e.parentNode;
        if (!o) return new r(n1, !0);
        var c = o.children;
        if (function(e, t) {
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = t[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var n = _step.value;
                    if (n !== e && n.tagName === e.tagName) return !1;
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
            return !0;
        }(e, c)) return new r(n1, !0);
        if (_instanceof(e, HTMLInputElement) && function(e, t) {
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = t[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var n = _step.value;
                    if (n !== e && _instanceof(n, HTMLInputElement) && n.type === e.type) return !1;
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
            return !0;
        }(e, c)) return new r(function(e, t) {
            return "".concat(e).concat(s("type", t));
        }(n1, e.type), !0);
        var l = function(e, t) {
            var n = new Set(e.classList);
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = t[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var o = _step.value;
                    if (o !== e) {
                        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                        try {
                            for(var _iterator1 = o.classList[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                var _$e = _step1.value;
                                n.delete(_$e);
                            }
                        } catch (err) {
                            _didIteratorError1 = true;
                            _iteratorError1 = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                    _iterator1.return();
                                }
                            } finally{
                                if (_didIteratorError1) {
                                    throw _iteratorError1;
                                }
                            }
                        }
                        if (0 === n.size) break;
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
            if (n.size > 0) return n.values().next().value;
        }(e, c);
        return void 0 !== l ? new r(function(e, t) {
            return "".concat(e, ".").concat(CSS.escape(t));
        }(n1, l), !0) : new r(function(e, t) {
            return "".concat(e, ":nth-of-type(").concat(t + 1, ")");
        }(n1, function(e, t) {
            var n = 0;
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = t[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var o = _step.value;
                    if (o === e) return n;
                    o.tagName === e.tagName && ++n;
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
            throw new Error("Node not found in children");
        }(e, c)), !1);
    }, l = function(param, n) {
        var _param = _sliced_to_array(param, 2), e = _param[0], t = _param[1];
        var _n;
        var _self;
        (_self = (_n = n).self) !== null && _self !== void 0 ? _self : _n.self = function(e) {
            return e;
        };
        var o, r, i = n.inc(e);
        do {
            for(o = n.valueOf(e), r = !0; i !== t;)if (e = n.self(i), i = n.inc(e), !n.gte(o, i)) {
                r = !1;
                break;
            }
        }while (!r);
        return o;
    };
    var _u = /*#__PURE__*/ new WeakMap(), _h = /*#__PURE__*/ new WeakMap(), _f = /*#__PURE__*/ new WeakMap();
    var a = /*#__PURE__*/ function() {
        function a() {
            var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
            _class_call_check(this, a);
            _class_private_field_init(this, _u, {
                writable: true,
                value: [
                    []
                ]
            });
            _class_private_field_init(this, _h, {
                writable: true,
                value: void 0
            });
            _class_private_field_init(this, _f, {
                writable: true,
                value: 0
            });
            _class_private_field_set(this, _h, e);
        }
        _create_class(a, [
            {
                key: "inc",
                value: function inc(e) {
                    var _e_parentNode;
                    return (_e_parentNode = e.parentNode) !== null && _e_parentNode !== void 0 ? _e_parentNode : e.getRootNode();
                }
            },
            {
                key: "valueOf",
                value: function valueOf(e) {
                    var t = c(e, _class_private_field_get(this, _h));
                    if (!t) throw new Error("Node is not an element");
                    return _class_private_field_get(this, _f) > 1 ? _class_private_field_get(this, _u).unshift([
                        t
                    ]) : _class_private_field_get(this, _u)[0].unshift(t), _class_private_field_set(this, _f, 0), _class_private_field_get(this, _u).map(function(e) {
                        return e.join(" > ");
                    }).join(" ");
                }
            },
            {
                key: "gte",
                value: function gte(e, t) {
                    return ++_class_private_field_update(this, _f).value, 1 === t.querySelectorAll(e).length;
                }
            }
        ]);
        return a;
    }();
    var d = function(e, t) {
        var n = [], o = function(e) {
            var r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT);
            do {
                var i = r.currentNode;
                i.shadowRoot && o(i.shadowRoot), _instanceof(i, ShadowRoot) || i !== e && i.matches(t) && n.push(i);
            }while (r.nextNode());
        };
        return _instanceof(e, Document) && (e = e.documentElement), o(e), n;
    };
    var _g = /*#__PURE__*/ new WeakMap(), _h1 = /*#__PURE__*/ new WeakMap(), _f1 = /*#__PURE__*/ new WeakMap();
    var u = /*#__PURE__*/ function() {
        function u() {
            var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
            _class_call_check(this, u);
            _class_private_field_init(this, _g, {
                writable: true,
                value: [
                    []
                ]
            });
            _class_private_field_init(this, _h1, {
                writable: true,
                value: void 0
            });
            _class_private_field_init(this, _f1, {
                writable: true,
                value: 0
            });
            _class_private_field_set(this, _h1, e);
        }
        _create_class(u, [
            {
                key: "inc",
                value: function inc(e) {
                    return e.getRootNode();
                }
            },
            {
                key: "self",
                value: function self(e) {
                    return _instanceof(e, ShadowRoot) ? e.host : e;
                }
            },
            {
                key: "valueOf",
                value: function valueOf(e) {
                    var t = l([
                        e,
                        e.getRootNode()
                    ], new a(_class_private_field_get(this, _h1)));
                    return _class_private_field_get(this, _f1) > 1 ? _class_private_field_get(this, _g).unshift([
                        t
                    ]) : _class_private_field_get(this, _g)[0].unshift(t), _class_private_field_set(this, _f1, 0), _class_private_field_get(this, _g);
                }
            },
            {
                key: "gte",
                value: function gte(e, t) {
                    return ++_class_private_field_update(this, _f1).value, 1 === d(t, e[0][0]).length;
                }
            }
        ]);
        return u;
    }();
    var h = new Set([
        "checkbox",
        "image",
        "radio"
    ]), f = new Set([
        "SCRIPT",
        "STYLE"
    ]), g = function(e) {
        var _document_head;
        return !f.has(e.nodeName) && !((_document_head = document.head) === null || _document_head === void 0 ? void 0 : _document_head.contains(e));
    }, p = new WeakMap, m = function(e) {
        for(; e;)p.delete(e), e = _instanceof(e, ShadowRoot) ? e.host : e.parentNode;
    }, w = new WeakSet, E = new MutationObserver(function(e) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = e[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var t = _step.value;
                m(t.target);
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
    }), T = function(e) {
        var t = p.get(e);
        if (t) return t;
        if (t = {
            full: "",
            immediate: []
        }, !g(e)) return t;
        var n = "";
        if (_instanceof(o1 = e, HTMLSelectElement) || _instanceof(o1, HTMLTextAreaElement) || _instanceof(o1, HTMLInputElement) && !h.has(o1.type)) t.full = e.value, t.immediate.push(e.value), e.addEventListener("input", function(e) {
            m(e.target);
        }, {
            once: !0,
            capture: !0
        });
        else {
            var _o_nodeValue, _o_nodeValue1;
            for(var o = e.firstChild; o; o = o.nextSibling)o.nodeType !== Node.TEXT_NODE ? (n && t.immediate.push(n), n = "", o.nodeType === Node.ELEMENT_NODE && (t.full += T(o).full)) : (t.full += (_o_nodeValue = o.nodeValue) !== null && _o_nodeValue !== void 0 ? _o_nodeValue : "", n += (_o_nodeValue1 = o.nodeValue) !== null && _o_nodeValue1 !== void 0 ? _o_nodeValue1 : "");
            n && t.immediate.push(n), _instanceof(e, Element) && e.shadowRoot && (t.full += T(e.shadowRoot).full), w.has(e) || (E.observe(e, {
                childList: !0,
                characterData: !0,
                subtree: !0
            }), w.add(e));
        }
        var o1;
        return p.set(e, t), t;
    }, S = function S1(e, t) {
        var n, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, o, _$e, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, _$t, err, err, _tmp;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    n = !1;
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        12,
                        13,
                        14
                    ]);
                    _iterator = e.childNodes[Symbol.iterator]();
                    _state.label = 2;
                case 2:
                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                        3,
                        11
                    ];
                    o = _step.value;
                    if (!(_instanceof(o, Element) && g(o))) return [
                        3,
                        10
                    ];
                    _$e = void 0;
                    _$e = o.shadowRoot ? S(o.shadowRoot, t) : S(o, t);
                    _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    _state.label = 3;
                case 3:
                    _state.trys.push([
                        3,
                        8,
                        9,
                        10
                    ]);
                    _iterator1 = _$e[Symbol.iterator]();
                    _state.label = 4;
                case 4:
                    if (!!(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done)) return [
                        3,
                        7
                    ];
                    _$t = _step1.value;
                    return [
                        4,
                        _$t
                    ];
                case 5:
                    _state.sent(), n = !0;
                    _state.label = 6;
                case 6:
                    _iteratorNormalCompletion1 = true;
                    return [
                        3,
                        4
                    ];
                case 7:
                    return [
                        3,
                        10
                    ];
                case 8:
                    err = _state.sent();
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                    return [
                        3,
                        10
                    ];
                case 9:
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                            _iterator1.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                    return [
                        7
                    ];
                case 10:
                    _iteratorNormalCompletion = true;
                    return [
                        3,
                        2
                    ];
                case 11:
                    return [
                        3,
                        14
                    ];
                case 12:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        14
                    ];
                case 13:
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                    return [
                        7
                    ];
                case 14:
                    if (!(!n && _instanceof(e, Element) && g(e))) return [
                        3,
                        17
                    ];
                    _tmp = T(e).full.includes(t);
                    if (!_tmp) return [
                        3,
                        16
                    ];
                    return [
                        4,
                        e
                    ];
                case 15:
                    _tmp = _state.sent();
                    _state.label = 16;
                case 16:
                    _tmp;
                    _state.label = 17;
                case 17:
                    return [
                        2
                    ];
            }
        });
    }, y = function(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1 / 0;
        var n = [];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = e[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var o = _step.value;
                if (t <= 0) break;
                n.push(o), --t;
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
        return n;
    }, N = function(e, t) {
        return "//*[@".concat(e, "=").concat(JSON.stringify(t), "]");
    }, v1 = function(e, t) {
        var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
        var o;
        switch(e.nodeType){
            case Node.ELEMENT_NODE:
                if (!_instanceof(e, Element)) return;
                if (t) {
                    var _e_getAttribute;
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = n[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var _$t = _step.value;
                            if (o = (_e_getAttribute = e.getAttribute(_$t)) !== null && _e_getAttribute !== void 0 ? _e_getAttribute : "", o) return new r(N(_$t, o), !0);
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
                if (e.id) return new r(N("id", e.id), !0);
                o = e.localName;
                break;
            case Node.ATTRIBUTE_NODE:
                o = "@" + e.nodeName;
                break;
            case Node.TEXT_NODE:
            case Node.CDATA_SECTION_NODE:
                o = "text()";
                break;
            case Node.PROCESSING_INSTRUCTION_NODE:
                o = "processing-instruction()";
                break;
            case Node.COMMENT_NODE:
                o = "comment()";
                break;
            case Node.DOCUMENT_NODE:
            default:
                o = "";
        }
        var i = b(e);
        return i > 0 && (o += "[".concat(i, "]")), new r(o, e.nodeType === Node.DOCUMENT_NODE);
    }, b = function(e) {
        var t = function t(e, t) {
            if (e === t) return !0;
            if (_instanceof(e, Element) && _instanceof(t, Element)) return e.localName === t.localName;
            if (e.nodeType === t.nodeType) return !0;
            return (e.nodeType === Node.CDATA_SECTION_NODE ? Node.TEXT_NODE : e.nodeType) === (t.nodeType === Node.CDATA_SECTION_NODE ? Node.TEXT_NODE : t.nodeType);
        };
        var n = e.parentNode ? e.parentNode.children : null;
        if (!n) return 0;
        var o;
        for(var r = 0; r < n.length; ++r)if (t(e, n[r]) && n[r] !== e) {
            o = !0;
            break;
        }
        if (!o) return 0;
        var r1 = 1;
        for(var o1 = 0; o1 < n.length; ++o1)if (t(e, n[o1])) {
            if (n[o1] === e) return r1;
            ++r1;
        }
        throw new Error("This is impossible; a child must be the child of the parent");
    }, k = function(e, t) {
        if (void 0 !== e) return "string" == typeof e ? "".concat(t, "/").concat(e) : e.map(function(e) {
            return "".concat(t, "/").concat(e);
        });
    };
    var _p = /*#__PURE__*/ new WeakMap(), _i1 = /*#__PURE__*/ new WeakMap(), _m = /*#__PURE__*/ new WeakMap(), _w = /*#__PURE__*/ new WeakMap(), _E = /*#__PURE__*/ new WeakMap();
    var C = /*#__PURE__*/ function() {
        function C(e, t) {
            var _this = this;
            var n1 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "", o = arguments.length > 3 ? arguments[3] : void 0;
            _class_call_check(this, C);
            _class_private_field_init(this, _p, {
                writable: true,
                value: [
                    "data-testid",
                    "data-test",
                    "data-qa",
                    "data-cy",
                    "data-test-id",
                    "data-qa-id",
                    "data-testing"
                ]
            });
            _class_private_field_init(this, _i1, {
                writable: true,
                value: void 0
            });
            _class_private_field_init(this, _m, {
                writable: true,
                value: void 0
            });
            _class_private_field_init(this, _w, {
                writable: true,
                value: new n
            });
            _class_private_field_init(this, _E, {
                writable: true,
                value: void 0
            });
            _class_private_field_set(this, _i1, e), _class_private_field_set(this, _m, t);
            var r = [
                "aria",
                "css",
                "xpath",
                "pierce",
                "text"
            ];
            n1 && (_class_private_field_get(this, _p).unshift(n1), r = [
                "css",
                "xpath",
                "pierce",
                "aria",
                "text"
            ]), _class_private_field_set(this, _E, r.filter(function(e) {
                return !o || o.includes(e);
            }).map(function(e) {
                switch(e){
                    case "css":
                        return _this.getCSSSelector.bind(_this);
                    case "xpath":
                        return _this.getXPathSelector.bind(_this);
                    case "pierce":
                        return _this.getPierceSelector.bind(_this);
                    case "aria":
                        return _this.getARIASelector.bind(_this);
                    case "text":
                        return _this.getTextSelector.bind(_this);
                    default:
                        throw new Error("Unknown selector type: " + e);
                }
            }));
        }
        _create_class(C, [
            {
                key: "getSelectors",
                value: function getSelectors(e) {
                    var t = [];
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = _class_private_field_get(this, _E)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var n = _step.value;
                            var o = n(e);
                            o && t.push(o);
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
                    return t;
                }
            },
            {
                key: "getCSSSelector",
                value: function getCSSSelector(e) {
                    var _this = this;
                    return _class_private_field_get(this, _m).timed("getCSSSelector: ".concat(_class_private_field_get(this, _w).getOrInsert(e), " ").concat(e.nodeName), function() {
                        return function(e, t) {
                            var n = [];
                            try {
                                var o;
                                for(; _instanceof(e, Element);)o = e.getRootNode(), n.unshift(l([
                                    e,
                                    o
                                ], new a(t))), e = _instanceof(o, ShadowRoot) ? o.host : o;
                            } catch (e) {
                                return;
                            }
                            return n;
                        }(e, _class_private_field_get(_this, _p));
                    });
                }
            },
            {
                key: "getTextSelector",
                value: function getTextSelector(e) {
                    return _class_private_field_get(this, _m).timed("getTextSelector: ".concat(_class_private_field_get(this, _w).getOrInsert(e), " ").concat(e.nodeName), function() {
                        return k(function(e) {
                            var t = T(e).full.trim();
                            if (!t) return;
                            if (t.length <= 12) {
                                var n = y(S(document, t), 2);
                                if (1 !== n.length || n[0] !== e) return;
                                return [
                                    t
                                ];
                            }
                            if (t.length > 64) return;
                            var n1 = 12, o = t.length;
                            for(; n1 <= o;){
                                var r = n1 + (o - n1 >> 2), i = y(S(document, t.slice(0, r)), 2);
                                1 !== i.length || i[0] !== e ? n1 = r + 1 : o = r - 1;
                            }
                            if (o === t.length) return;
                            var r1 = o + 1, i1 = t.slice(r1, r1 + 64);
                            return [
                                t.slice(0, r1 + i1.search(/ |$/))
                            ];
                        }(e), "text");
                    });
                }
            },
            {
                key: "getXPathSelector",
                value: function getXPathSelector(e) {
                    var _this = this;
                    return _class_private_field_get(this, _m).timed("getXPathSelector: ".concat(_class_private_field_get(this, _w).getOrInsert(e), " ").concat(e.nodeName), function() {
                        return k(function(e, t, n) {
                            if (e.nodeType === Node.DOCUMENT_NODE) return "/";
                            var o = [], r = [];
                            var i = e;
                            for(; i !== document && i;){
                                var _$e = v1(i, t, n);
                                if (!_$e) return;
                                r.unshift(_$e), i = _$e.optimized ? i.getRootNode() : i.parentNode, _instanceof(i, ShadowRoot) && (o.unshift((r[0].optimized ? "" : "/") + r.join("/")), r.splice(0, r.length), i = i.host);
                            }
                            return r.length && o.unshift((r[0].optimized ? "" : "/") + r.join("/")), !o.length || o.length > 1 ? void 0 : o;
                        }(e, !0, _class_private_field_get(_this, _p)), "xpath");
                    });
                }
            },
            {
                key: "getPierceSelector",
                value: function getPierceSelector(e) {
                    var _this = this;
                    return _class_private_field_get(this, _m).timed("getPierceSelector: ".concat(_class_private_field_get(this, _w).getOrInsert(e), " ").concat(e.nodeName), function() {
                        return k(function(e, t) {
                            try {
                                var n = new u(t);
                                return l([
                                    e,
                                    document
                                ], n).flat();
                            } catch (e) {
                                return;
                            }
                        }(e, _class_private_field_get(_this, _p)), "pierce");
                    });
                }
            },
            {
                key: "getARIASelector",
                value: function getARIASelector(e) {
                    var _this = this;
                    return _class_private_field_get(this, _m).timed("getARIASelector: ".concat(_class_private_field_get(this, _w).getOrInsert(e), " ").concat(e.nodeName), function() {
                        return k(function(e, t) {
                            return new o(t).compute(e);
                        }(e, _class_private_field_get(_this, _i1)), "aria");
                    });
                }
            }
        ]);
        return C;
    }();
    var I = function(e) {
        e.preventDefault(), e.stopImmediatePropagation();
    }, O = function(e, t) {
        var n = t.getBoundingClientRect();
        return {
            offsetX: e.clientX - n.x,
            offsetY: e.clientY - n.y
        };
    }, A = function(e) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = e.composedPath()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var t = _step.value;
                if (!_instanceof(t, Element)) continue;
                var _$e = t.getBoundingClientRect();
                if (0 !== _$e.width && 0 !== _$e.height) return t;
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
        throw new Error("No target is found in event of type ".concat(e.type));
    }, R = function(e) {
        return Object.values(e).filter(function(e) {
            return Boolean(e);
        }).length.toString();
    };
    var _T = /*#__PURE__*/ new WeakMap(), _S = /*#__PURE__*/ new WeakMap(), _y = /*#__PURE__*/ new WeakMap(), _m1 = /*#__PURE__*/ new WeakMap(), _A = /*#__PURE__*/ new WeakMap(), _R = /*#__PURE__*/ new WeakMap(), _D = /*#__PURE__*/ new WeakMap(), _N = /*#__PURE__*/ new WeakMap(), _v = /*#__PURE__*/ new WeakMap(), _b = /*#__PURE__*/ new WeakMap(), _k = /*#__PURE__*/ new WeakMap(), _P = /*#__PURE__*/ new WeakMap(), _x = /*#__PURE__*/ new WeakMap(), _$ = /*#__PURE__*/ new WeakMap(), _C = /*#__PURE__*/ new WeakMap(), _I = /*#__PURE__*/ new WeakMap(), _O = /*#__PURE__*/ new WeakMap(), _L = /*#__PURE__*/ new WeakMap();
    var D = function D(e) {
        var _this = this;
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : D.defaultSetupOptions;
        _class_call_check(this, D);
        _class_private_field_init(this, _T, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _S, {
            writable: true,
            value: function(e) {
                return e.isTrusted;
            }
        });
        _class_private_field_init(this, _y, {
            writable: true,
            value: []
        });
        _class_private_field_init(this, _m1, {
            writable: true,
            value: void 0
        });
        _define_property(this, "start", function() {
            _class_private_field_get(_this, _m1).log("Setting up recording listeners"), window.addEventListener("keydown", _class_private_field_get(_this, _N), !0), window.addEventListener("beforeinput", _class_private_field_get(_this, _v), !0), window.addEventListener("input", _class_private_field_get(_this, _b), !0), window.addEventListener("keyup", _class_private_field_get(_this, _k), !0), window.addEventListener("pointerdown", _class_private_field_get(_this, _C), !0), window.addEventListener("click", _class_private_field_get(_this, _I), !0), window.addEventListener("auxclick", _class_private_field_get(_this, _I), !0), window.addEventListener("beforeunload", _class_private_field_get(_this, _O), !0);
        });
        _define_property(this, "stop", function() {
            _class_private_field_get(_this, _m1).log("Tearing down client listeners"), window.removeEventListener("keydown", _class_private_field_get(_this, _N), !0), window.removeEventListener("beforeinput", _class_private_field_get(_this, _v), !0), window.removeEventListener("input", _class_private_field_get(_this, _b), !0), window.removeEventListener("keyup", _class_private_field_get(_this, _k), !0), window.removeEventListener("pointerdown", _class_private_field_get(_this, _C), !0), window.removeEventListener("click", _class_private_field_get(_this, _I), !0), window.removeEventListener("auxclick", _class_private_field_get(_this, _I), !0), window.removeEventListener("beforeunload", _class_private_field_get(_this, _O), !0);
        });
        _define_property(this, "getSelectors", function(e) {
            return _class_private_field_get(_this, _T).getSelectors(e);
        });
        _define_property(this, "getCSSSelector", function(e) {
            return _class_private_field_get(_this, _T).getCSSSelector(e);
        });
        _define_property(this, "getTextSelector", function(e) {
            return _class_private_field_get(_this, _T).getTextSelector(e);
        });
        _define_property(this, "queryCSSSelectorAllForTesting", function(e) {
            return function(e) {
                if ("string" == typeof e) e = [
                    e
                ];
                else if (0 === e.length) return [];
                var t = [
                    [
                        document.documentElement
                    ]
                ];
                do {
                    var n = e.shift(), o = [];
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined, _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    try {
                        for(var _iterator = t[Symbol.iterator](), _step; !(_iteratorNormalCompletion1 = (_step = _iterator.next()).done); _iteratorNormalCompletion1 = true){
                            var _$e = _step.value;
                            try {
                                for(var _iterator1 = _$e[Symbol.iterator](), _step1; !(_iteratorNormalCompletion = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion = true){
                                    var t1 = _step1.value;
                                    var _t_shadowRoot;
                                    var _$e1 = ((_t_shadowRoot = t1.shadowRoot) !== null && _t_shadowRoot !== void 0 ? _t_shadowRoot : t1).querySelectorAll(n);
                                    _$e1.length > 0 && o.push(_$e1);
                                }
                            } catch (err) {
                                _didIteratorError = true;
                                _iteratorError = err;
                            } finally{
                                try {
                                    if (!_iteratorNormalCompletion && _iterator1.return != null) {
                                        _iterator1.return();
                                    }
                                } finally{
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                            }
                        }
                    } catch (err) {
                        _didIteratorError1 = true;
                        _iteratorError1 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion1 && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError1) {
                                throw _iteratorError1;
                            }
                        }
                    }
                    t = o;
                }while (e.length > 0 && t.length > 0);
                return t.flatMap(function(e) {
                    return _to_consumable_array(e);
                });
            }(e);
        });
        _class_private_field_init(this, _A, {
            writable: true,
            value: function(e) {
                var _$_class_private_field_get;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = ((_$_class_private_field_get = _class_private_field_get(_this, _y)) !== null && _$_class_private_field_get !== void 0 ? _$_class_private_field_get : [])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var t = _step.value;
                        if (e.shiftKey === t.shift && e.ctrlKey === t.ctrl && e.metaKey === t.meta && e.keyCode === t.keyCode) return _this.stop(), I(e), window.stopShortcut(R(t)), !0;
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
                return !1;
            }
        });
        _class_private_field_init(this, _R, {
            writable: true,
            value: {
                element: document.documentElement,
                selectors: []
            }
        });
        _class_private_field_init(this, _D, {
            writable: true,
            value: function(e) {
                var t = e.composedPath()[0];
                !function(e) {
                    if (!e) throw new Error("Assertion failed!");
                }(_instanceof(t, Element)), _class_private_field_get(_this, _R).element !== t && _class_private_field_set(_this, _R, {
                    element: t,
                    selectors: _this.getSelectors(t)
                });
            }
        });
        _class_private_field_init(this, _N, {
            writable: true,
            value: function(e) {
                _class_private_field_get(_this, _S).call(_this, e) && (_class_private_field_get(_this, _A).call(_this, e) || (_class_private_field_get(_this, _D).call(_this, e), _class_private_field_get(_this, _L).call(_this, {
                    type: "keyDown",
                    key: e.key
                })));
            }
        });
        _class_private_field_init(this, _v, {
            writable: true,
            value: function(e) {
                _class_private_field_get(_this, _S).call(_this, e) && _class_private_field_get(_this, _D).call(_this, e);
            }
        });
        _class_private_field_init(this, _b, {
            writable: true,
            value: function(e) {
                if (!_class_private_field_get(_this, _S).call(_this, e)) return;
                if (_class_private_field_get(_this, _D).call(_this, e), function(e) {
                    if (_instanceof(e, HTMLInputElement)) switch(e.type){
                        case "checkbox":
                        case "radio":
                            return !0;
                    }
                    return !1;
                }(_class_private_field_get(_this, _R).element)) return;
                var _$_class_private_field_get = _class_private_field_get(_this, _R), t = _$_class_private_field_get.element, n = _$_class_private_field_get.selectors;
                _class_private_field_get(_this, _L).call(_this, {
                    type: "change",
                    selectors: n,
                    value: "value" in t ? t.value : t.textContent
                });
            }
        });
        _class_private_field_init(this, _k, {
            writable: true,
            value: function(e) {
                _class_private_field_get(_this, _S).call(_this, e) && _class_private_field_get(_this, _L).call(_this, {
                    type: "keyUp",
                    key: e.key
                });
            }
        });
        _class_private_field_init(this, _P, {
            writable: true,
            value: {
                element: document.documentElement,
                selectors: []
            }
        });
        _class_private_field_init(this, _x, {
            writable: true,
            value: function(e) {
                var t = A(e);
                _class_private_field_get(_this, _P).element !== t && _class_private_field_set(_this, _P, {
                    element: t,
                    selectors: _class_private_field_get(_this, _T).getSelectors(t)
                });
            }
        });
        _class_private_field_init(this, _$, {
            writable: true,
            value: 0
        });
        _class_private_field_init(this, _C, {
            writable: true,
            value: function(e) {
                _class_private_field_get(_this, _S).call(_this, e) && (_class_private_field_set(_this, _$, e.timeStamp), _class_private_field_get(_this, _x).call(_this, e));
            }
        });
        _class_private_field_init(this, _I, {
            writable: true,
            value: function(e) {
                if (!_class_private_field_get(_this, _S).call(_this, e)) return;
                _class_private_field_get(_this, _x).call(_this, e);
                var t = function(e, t) {
                    var n;
                    if (_instanceof(e, PointerEvent)) switch(e.pointerType){
                        case "mouse":
                            break;
                        case "pen":
                        case "touch":
                            n = e.pointerType;
                            break;
                        default:
                            return;
                    }
                    var _O = O(e, t), o = _O.offsetX, r = _O.offsetY;
                    if (!(o < 0 || r < 0)) return {
                        button: [
                            "auxiliary",
                            "secondary",
                            "back",
                            "forward"
                        ][e.button - 1],
                        deviceType: n,
                        offsetX: o,
                        offsetY: r
                    };
                }(e, _class_private_field_get(_this, _P).element);
                if (!t) return;
                var n = e.timeStamp - _class_private_field_get(_this, _$);
                _class_private_field_get(_this, _L).call(_this, _object_spread({
                    type: 2 === e.detail ? "doubleClick" : "click",
                    selectors: _class_private_field_get(_this, _P).selectors,
                    duration: n > 350 ? n : void 0
                }, t));
            }
        });
        _class_private_field_init(this, _O, {
            writable: true,
            value: function(e) {
                _class_private_field_get(_this, _m1).log("Unloading..."), _class_private_field_get(_this, _S).call(_this, e) && _class_private_field_get(_this, _L).call(_this, {
                    type: "beforeUnload"
                });
            }
        });
        _class_private_field_init(this, _L, {
            writable: true,
            value: function(e) {
                var t = JSON.stringify(e);
                _class_private_field_get(_this, _m1).log("Adding step: ".concat(t)), window.addStep(t);
            }
        });
        var _n_stopShortcuts;
        _class_private_field_set(this, _m1, new t(n.debug ? "debug" : "silent")), _class_private_field_get(this, _m1).log("creating a RecordingClient"), _class_private_field_set(this, _T, new C(e, _class_private_field_get(this, _m1), n.selectorAttribute, n.selectorTypesToRecord)), n.allowUntrustedEvents && _class_private_field_set(this, _S, function() {
            return !0;
        }), _class_private_field_set(this, _y, (_n_stopShortcuts = n.stopShortcuts) !== null && _n_stopShortcuts !== void 0 ? _n_stopShortcuts : []);
    };
    _define_property(D, "defaultSetupOptions", Object.freeze({
        debug: !1,
        allowUntrustedEvents: !1,
        selectorTypesToRecord: [
            "aria",
            "css",
            "text",
            "xpath",
            "pierce"
        ]
    }));
    var _m2 = /*#__PURE__*/ new WeakMap(), _T1 = /*#__PURE__*/ new WeakMap(), _B = /*#__PURE__*/ new WeakMap();
    var L = function L(e) {
        var _this = this;
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
        _class_call_check(this, L);
        _class_private_field_init(this, _m2, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _T1, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _B, {
            writable: true,
            value: function(e) {
                I(e);
                var t = A(e);
                window.captureSelectors(JSON.stringify(_object_spread({
                    selectors: _class_private_field_get(_this, _T1).getSelectors(t)
                }, O(e, t))));
            }
        });
        _define_property(this, "start", function() {
            _class_private_field_get(_this, _m2).log("Setting up selector listeners"), window.addEventListener("click", _class_private_field_get(_this, _B), !0), window.addEventListener("mousedown", I, !0), window.addEventListener("mouseup", I, !0);
        });
        _define_property(this, "stop", function() {
            _class_private_field_get(_this, _m2).log("Tearing down selector listeners"), window.removeEventListener("click", _class_private_field_get(_this, _B), !0), window.removeEventListener("mousedown", I, !0), window.removeEventListener("mouseup", I, !0);
        });
        _class_private_field_set(this, _m2, new t(o ? "debug" : "silent")), _class_private_field_get(this, _m2).log("Creating a SelectorPicker"), _class_private_field_set(this, _T1, new C(e, _class_private_field_get(this, _m2), n));
    };
    var __ = /*#__PURE__*/ new WeakMap(), _M = /*#__PURE__*/ new WeakMap();
    var P = /*#__PURE__*/ function() {
        function P() {
            _class_call_check(this, P);
            _class_private_field_init(this, __, {
                writable: true,
                value: void 0
            });
            _class_private_field_init(this, _M, {
                writable: true,
                value: void 0
            });
        }
        _create_class(P, [
            {
                key: "startRecording",
                value: function startRecording(e, t) {
                    if (_class_private_field_get(this, __)) throw new Error("Recording client already started.");
                    if (_class_private_field_get(this, _M)) throw new Error("Selector picker is active.");
                    _class_private_field_set(this, __, new D(e, t)), _class_private_field_get(this, __).start();
                }
            },
            {
                key: "stopRecording",
                value: function stopRecording() {
                    if (!_class_private_field_get(this, __)) throw new Error("Recording client was not started.");
                    _class_private_field_get(this, __).stop(), _class_private_field_set(this, __, void 0);
                }
            },
            {
                key: "recordingClientForTesting",
                get: function get() {
                    if (!_class_private_field_get(this, __)) throw new Error("Recording client was not started.");
                    return _class_private_field_get(this, __);
                }
            },
            {
                key: "startSelectorPicker",
                value: function startSelectorPicker(e, t, n) {
                    if (_class_private_field_get(this, _M)) throw new Error("Selector picker already started.");
                    _class_private_field_get(this, __) && _class_private_field_get(this, __).stop(), _class_private_field_set(this, _M, new L(e, t, n)), _class_private_field_get(this, _M).start();
                }
            },
            {
                key: "stopSelectorPicker",
                value: function stopSelectorPicker() {
                    if (!_class_private_field_get(this, _M)) throw new Error("Selector picker was not started.");
                    _class_private_field_get(this, _M).stop(), _class_private_field_set(this, _M, void 0), _class_private_field_get(this, __) && _class_private_field_get(this, __).start();
                }
            }
        ]);
        return P;
    }();
    window.DevToolsRecorder || (window.DevToolsRecorder = new P);
}();
