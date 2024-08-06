"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_lit-html_static_test_js"], {
"./ui/lit-html/static.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _third_party_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../third_party/i18n/i18n.js */ "./third_party/i18n/i18n.js");
/* harmony import */var _lit_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lit-html.js */ "./ui/lit-html/lit-html.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
var _this = undefined;
function _templateObject() {
    var data = _tagged_template_literal([
        "No update needed"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "Just ",
        " value"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "div"
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "<",
        ">Foo</",
        ">"
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        "div"
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _tagged_template_literal([
        "<",
        ">Hello, ",
        "!</",
        ">"
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = _tagged_template_literal([
        "div"
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = _tagged_template_literal([
        "<",
        " .data={{x: 1}}>Hello, ",
        "!</",
        ">"
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject8() {
    var data = _tagged_template_literal([
        "div"
    ]);
    _templateObject8 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject9() {
    var data = _tagged_template_literal([
        "<",
        ">",
        "",
        "",
        ", ",
        "! ",
        "!</",
        ">"
    ]);
    _templateObject9 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject10() {
    var data = _tagged_template_literal([
        "Hello, world ",
        "!"
    ]);
    _templateObject10 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject11() {
    var data = _tagged_template_literal([
        "div"
    ]);
    _templateObject11 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject12() {
    var data = _tagged_template_literal([
        "<",
        ">Hello, world!</",
        ">"
    ]);
    _templateObject12 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject13() {
    var data = _tagged_template_literal([
        "div"
    ]);
    _templateObject13 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject14() {
    var data = _tagged_template_literal([
        "<",
        " .data={{x: 1}}>",
        "",
        "",
        ", ",
        "! ",
        "!</",
        ">"
    ]);
    _templateObject14 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject15() {
    var data = _tagged_template_literal([
        "TEMPLATE"
    ]);
    _templateObject15 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject16() {
    var data = _tagged_template_literal([
        "TEMPLATE"
    ]);
    _templateObject16 = function _templateObject() {
        return data;
    };
    return data;
}



var templateArray = function(value) {
    // We assume here it's okay to lose the `raw` value from the TemplateStringsArray
    // for the purposes of testing.
    return value;
};
describe('Static', function() {
    describe('flattenTemplate', function() {
        it('does not flatten template strings with no statics or values', function() {
            var content = _lit_html_js__WEBPACK_IMPORTED_MODULE_2__.flattenTemplate(_templateObject());
            assert.deepStrictEqual(content.strings, templateArray([
                'No update needed'
            ]));
            assert.deepStrictEqual(content.valueMap, []);
        });
        it('does not flatten template strings with just values', function() {
            var content = _lit_html_js__WEBPACK_IMPORTED_MODULE_2__.flattenTemplate(_templateObject1(), 1);
            assert.deepStrictEqual(content.strings, templateArray([
                'Just ',
                ' value'
            ]));
            assert.deepStrictEqual(content.valueMap, [
                true
            ]);
        });
        it('does flatten template strings with statics', function() {
            var tag = _lit_html_js__WEBPACK_IMPORTED_MODULE_2__.literal(_templateObject2());
            var content = _lit_html_js__WEBPACK_IMPORTED_MODULE_2__.flattenTemplate(_templateObject3(), tag, tag);
            assert.deepStrictEqual(content.strings, templateArray([
                '<div>Foo</div>'
            ]));
            assert.deepStrictEqual(content.valueMap, [
                false,
                false
            ]);
        });
        it('does flatten template strings with statics but leaves values alone', function() {
            var tag = _lit_html_js__WEBPACK_IMPORTED_MODULE_2__.literal(_templateObject4());
            var name = 'Everyone!';
            var content = _lit_html_js__WEBPACK_IMPORTED_MODULE_2__.flattenTemplate(_templateObject5(), tag, name, tag);
            assert.deepStrictEqual(content.strings, templateArray([
                '<div>Hello, ',
                '!</div>'
            ]));
            assert.deepStrictEqual(content.valueMap, [
                false,
                true,
                false
            ]);
        });
        it('ignores data values', function() {
            var tag = _lit_html_js__WEBPACK_IMPORTED_MODULE_2__.literal(_templateObject6());
            var name = 'everyone!';
            var content = _lit_html_js__WEBPACK_IMPORTED_MODULE_2__.flattenTemplate(_templateObject7(), tag, name, tag);
            assert.deepStrictEqual(content.strings, templateArray([
                '<div .data={{x: 1}}>Hello, ',
                '!</div>'
            ]));
            assert.deepStrictEqual(content.valueMap, [
                false,
                true,
                false
            ]);
        });
        it('flattens multiple values', function() {
            var tag = _lit_html_js__WEBPACK_IMPORTED_MODULE_2__.literal(_templateObject8());
            var message = 'Hello, everyone!';
            var content = _lit_html_js__WEBPACK_IMPORTED_MODULE_2__.flattenTemplate(_templateObject9(), tag, 1, 2, 3, message, 'Static value', tag);
            assert.deepStrictEqual(content.strings, templateArray([
                '<div>',
                '',
                '',
                ', ',
                '! ',
                '!</div>'
            ]));
            assert.deepStrictEqual(content.valueMap, [
                false,
                true,
                true,
                true,
                true,
                true,
                false
            ]);
        });
    });
    describe('rendering', function() {
        it('renders non-statics', function() {
            var tmpl = _lit_html_js__WEBPACK_IMPORTED_MODULE_2__.html(_templateObject10(), 123);
            var target = document.createElement('div');
            _lit_html_js__WEBPACK_IMPORTED_MODULE_2__.render(tmpl, target, {
                host: _this
            });
            assert.strictEqual(target.innerText, 'Hello, world 123!');
        });
        it('renders static tags', function() {
            var tag = _lit_html_js__WEBPACK_IMPORTED_MODULE_2__.literal(_templateObject11());
            var tmpl = _lit_html_js__WEBPACK_IMPORTED_MODULE_2__.html(_templateObject12(), tag, tag);
            var target = document.createElement('section');
            _lit_html_js__WEBPACK_IMPORTED_MODULE_2__.render(tmpl, target, {
                host: _this
            });
            assert.strictEqual(target.innerText, 'Hello, world!');
            assert.isNotNull(target.querySelector('div'));
        });
        it('renders multiple', function() {
            var tag = _lit_html_js__WEBPACK_IMPORTED_MODULE_2__.literal(_templateObject13());
            var message = 'Hello, everyone!';
            var tmpl = _lit_html_js__WEBPACK_IMPORTED_MODULE_2__.html(_templateObject14(), tag, 1, 2, 3, message, 'Static value', tag);
            var target = document.createElement('div');
            _lit_html_js__WEBPACK_IMPORTED_MODULE_2__.render(tmpl, target, {
                host: _this
            });
            assert.strictEqual(target.innerText, '123, Hello, everyone!! Static value!');
            assert.isNotNull(target.querySelector('div'));
        });
    });
    describe('i18nTemplate', function() {
        var setLocale = function setLocale(locale) {
            _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsLocale.DevToolsLocale.instance({
                create: true,
                data: {
                    settingLanguage: locale,
                    navigatorLanguage: locale,
                    lookupClosestDevToolsLocale: function(l) {
                        return l;
                    }
                }
            });
        };
        var uiStrings = {
            placeholder: 'a message with a {string} and {template} placeholder'
        };
        var i18nInstance;
        beforeEach(function() {
            i18nInstance = new _third_party_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.I18n.I18n([
                'en-US'
            ], 'en-US');
            i18nInstance.registerLocaleData('en-US', {});
        });
        it('localizes lit templates', function() {
            var strings = i18nInstance.registerFileStrings('test.ts', uiStrings);
            setLocale('en-US');
            var result = _lit_html_js__WEBPACK_IMPORTED_MODULE_2__.i18nTemplate(strings, uiStrings.placeholder, {
                string: 'STRING',
                template: _lit_html_js__WEBPACK_IMPORTED_MODULE_2__.html(_templateObject15())
            });
            var element = _lit_html_js__WEBPACK_IMPORTED_MODULE_2__.render(result, document.createElement('div'), {
                host: _this
            });
            assert.deepStrictEqual(element.parentNode.innerText, 'a message with a STRING and TEMPLATE placeholder');
        });
        it('localizes lit templates with translations', function() {
            i18nInstance.registerLocaleData('de', {
                'test.ts | placeholder': {
                    message: 'a message with a {template} and {string} placeholder'
                }
            });
            var strings = i18nInstance.registerFileStrings('test.ts', uiStrings);
            setLocale('de');
            var result = _lit_html_js__WEBPACK_IMPORTED_MODULE_2__.i18nTemplate(strings, uiStrings.placeholder, {
                string: 'STRING',
                template: _lit_html_js__WEBPACK_IMPORTED_MODULE_2__.html(_templateObject16())
            });
            var element = _lit_html_js__WEBPACK_IMPORTED_MODULE_2__.render(result, document.createElement('div'), {
                host: _this
            });
            assert.deepStrictEqual(element.parentNode.innerText, 'a message with a TEMPLATE and STRING placeholder');
        });
    });
}); //# sourceMappingURL=static.test.js.map


}),

}]);