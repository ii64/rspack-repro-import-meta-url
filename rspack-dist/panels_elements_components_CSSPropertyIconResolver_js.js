"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_elements_components_CSSPropertyIconResolver_js"], {
"./panels/elements/components/CSSPropertyIconResolver.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  findFlexContainerIcon: function() { return findFlexContainerIcon; },
  findFlexItemIcon: function() { return findFlexItemIcon; },
  findGridContainerIcon: function() { return findGridContainerIcon; },
  findGridItemIcon: function() { return findGridItemIcon; },
  findIcon: function() { return findIcon; },
  getPhysicalDirections: function() { return getPhysicalDirections; },
  reverseDirection: function() { return reverseDirection; },
  roateFlexWrapIcon: function() { return roateFlexWrapIcon; },
  rotateAlignContentIcon: function() { return rotateAlignContentIcon; },
  rotateAlignItemsIcon: function() { return rotateAlignItemsIcon; },
  rotateFlexDirectionIcon: function() { return rotateFlexDirectionIcon; },
  rotateJustifyContentIcon: function() { return rotateJustifyContentIcon; },
  rotateJustifyItemsIcon: function() { return rotateJustifyItemsIcon; }
});
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
var writingModesAffectingFlexDirection = new Set([
    'tb',
    'tb-rl',
    'vertical-lr',
    'vertical-rl'
]);
function reverseDirection(direction) {
    if (direction === "left-to-right" /* PhysicalDirection.LEFT_TO_RIGHT */ ) {
        return "right-to-left" /* PhysicalDirection.RIGHT_TO_LEFT */ ;
    }
    if (direction === "right-to-left" /* PhysicalDirection.RIGHT_TO_LEFT */ ) {
        return "left-to-right" /* PhysicalDirection.LEFT_TO_RIGHT */ ;
    }
    if (direction === "top-to-bottom" /* PhysicalDirection.TOP_TO_BOTTOM */ ) {
        return "bottom-to-top" /* PhysicalDirection.BOTTOM_TO_TOP */ ;
    }
    if (direction === "bottom-to-top" /* PhysicalDirection.BOTTOM_TO_TOP */ ) {
        return "top-to-bottom" /* PhysicalDirection.TOP_TO_BOTTOM */ ;
    }
    throw new Error('Unknown PhysicalFlexDirection');
}
function extendWithReverseDirections(directions) {
    return _object_spread_props(_object_spread({}, directions), {
        'row-reverse': reverseDirection(directions.row),
        'column-reverse': reverseDirection(directions.column)
    });
}
/**
 * Returns absolute directions for rows, columns,
 * reverse rows and reverse column taking into account the direction and writing-mode attributes.
 */ function getPhysicalDirections(computedStyles) {
    var isRtl = computedStyles.get('direction') === 'rtl';
    var writingMode = computedStyles.get('writing-mode');
    var isVertical = writingMode && writingModesAffectingFlexDirection.has(writingMode);
    if (isVertical) {
        return extendWithReverseDirections({
            row: isRtl ? "bottom-to-top" /* PhysicalDirection.BOTTOM_TO_TOP */  : "top-to-bottom" /* PhysicalDirection.TOP_TO_BOTTOM */ ,
            column: writingMode === 'vertical-lr' ? "left-to-right" /* PhysicalDirection.LEFT_TO_RIGHT */  : "right-to-left" /* PhysicalDirection.RIGHT_TO_LEFT */ 
        });
    }
    return extendWithReverseDirections({
        row: isRtl ? "right-to-left" /* PhysicalDirection.RIGHT_TO_LEFT */  : "left-to-right" /* PhysicalDirection.LEFT_TO_RIGHT */ ,
        column: "top-to-bottom" /* PhysicalDirection.TOP_TO_BOTTOM */ 
    });
}
/**
 * Rotates the flex direction icon in such way that it indicates
 * the desired `direction` and the arrow in the icon is always at the bottom
 * or at the right.
 *
 * By default, the icon is pointing top-down with the arrow on the right-hand side.
 */ function rotateFlexDirectionIcon(direction) {
    // Default to LTR.
    var flipX = true;
    var flipY = false;
    var rotate = -90;
    if (direction === "right-to-left" /* PhysicalDirection.RIGHT_TO_LEFT */ ) {
        rotate = 90;
        flipY = false;
        flipX = false;
    } else if (direction === "top-to-bottom" /* PhysicalDirection.TOP_TO_BOTTOM */ ) {
        rotate = 0;
        flipX = false;
        flipY = false;
    } else if (direction === "bottom-to-top" /* PhysicalDirection.BOTTOM_TO_TOP */ ) {
        rotate = 0;
        flipX = false;
        flipY = true;
    }
    return {
        iconName: 'flex-direction',
        rotate: rotate,
        scaleX: flipX ? -1 : 1,
        scaleY: flipY ? -1 : 1
    };
}
function rotateAlignContentIcon(iconName, direction) {
    return {
        iconName: iconName,
        rotate: direction === "right-to-left" /* PhysicalDirection.RIGHT_TO_LEFT */  ? 90 : direction === "left-to-right" /* PhysicalDirection.LEFT_TO_RIGHT */  ? -90 : 0,
        scaleX: 1,
        scaleY: 1
    };
}
function rotateJustifyContentIcon(iconName, direction) {
    return {
        iconName: iconName,
        rotate: direction === "top-to-bottom" /* PhysicalDirection.TOP_TO_BOTTOM */  ? 90 : direction === "bottom-to-top" /* PhysicalDirection.BOTTOM_TO_TOP */  ? -90 : 0,
        scaleX: direction === "right-to-left" /* PhysicalDirection.RIGHT_TO_LEFT */  ? -1 : 1,
        scaleY: 1
    };
}
function rotateJustifyItemsIcon(iconName, direction) {
    return {
        iconName: iconName,
        rotate: direction === "top-to-bottom" /* PhysicalDirection.TOP_TO_BOTTOM */  ? 90 : direction === "bottom-to-top" /* PhysicalDirection.BOTTOM_TO_TOP */  ? -90 : 0,
        scaleX: direction === "right-to-left" /* PhysicalDirection.RIGHT_TO_LEFT */  ? -1 : 1,
        scaleY: 1
    };
}
function rotateAlignItemsIcon(iconName, direction) {
    return {
        iconName: iconName,
        rotate: direction === "right-to-left" /* PhysicalDirection.RIGHT_TO_LEFT */  ? 90 : direction === "left-to-right" /* PhysicalDirection.LEFT_TO_RIGHT */  ? -90 : 0,
        scaleX: 1,
        scaleY: 1
    };
}
function flexDirectionIcon(value) {
    function getIcon(computedStyles) {
        var directions = getPhysicalDirections(computedStyles);
        return rotateFlexDirectionIcon(directions[value]);
    }
    return getIcon;
}
function flexAlignContentIcon(iconName) {
    function getIcon(computedStyles) {
        var directions = getPhysicalDirections(computedStyles);
        var flexDirectionToPhysicalDirection = new Map([
            [
                'column',
                directions.row
            ],
            [
                'row',
                directions.column
            ],
            [
                'column-reverse',
                directions.row
            ],
            [
                'row-reverse',
                directions.column
            ]
        ]);
        var computedFlexDirection = computedStyles.get('flex-direction') || 'row';
        var iconDirection = flexDirectionToPhysicalDirection.get(computedFlexDirection);
        if (!iconDirection) {
            throw new Error('Unknown direction for flex-align icon');
        }
        return rotateAlignContentIcon(iconName, iconDirection);
    }
    return getIcon;
}
function gridAlignContentIcon(iconName) {
    function getIcon(computedStyles) {
        var directions = getPhysicalDirections(computedStyles);
        return rotateAlignContentIcon(iconName, directions.column);
    }
    return getIcon;
}
function flexJustifyContentIcon(iconName) {
    function getIcon(computedStyles) {
        var directions = getPhysicalDirections(computedStyles);
        return rotateJustifyContentIcon(iconName, directions[computedStyles.get('flex-direction') || 'row']);
    }
    return getIcon;
}
function gridJustifyContentIcon(iconName) {
    function getIcon(computedStyles) {
        var directions = getPhysicalDirections(computedStyles);
        return rotateJustifyContentIcon(iconName, directions.row);
    }
    return getIcon;
}
function gridJustifyItemsIcon(iconName) {
    function getIcon(computedStyles) {
        var directions = getPhysicalDirections(computedStyles);
        return rotateJustifyItemsIcon(iconName, directions.row);
    }
    return getIcon;
}
function flexAlignItemsIcon(iconName) {
    function getIcon(computedStyles) {
        var directions = getPhysicalDirections(computedStyles);
        var flexDirectionToPhysicalDirection = new Map([
            [
                'column',
                directions.row
            ],
            [
                'row',
                directions.column
            ],
            [
                'column-reverse',
                directions.row
            ],
            [
                'row-reverse',
                directions.column
            ]
        ]);
        var computedFlexDirection = computedStyles.get('flex-direction') || 'row';
        var iconDirection = flexDirectionToPhysicalDirection.get(computedFlexDirection);
        if (!iconDirection) {
            throw new Error('Unknown direction for flex-align icon');
        }
        return rotateAlignItemsIcon(iconName, iconDirection);
    }
    return getIcon;
}
function gridAlignItemsIcon(iconName) {
    function getIcon(computedStyles) {
        var directions = getPhysicalDirections(computedStyles);
        return rotateAlignItemsIcon(iconName, directions.column);
    }
    return getIcon;
}
/**
 * The baseline icon contains the letter A to indicate that we're aligning based on where the text baseline is.
 * Therefore we're not rotating this icon like the others, as this would become confusing. Plus baseline alignment
 * is likely only really useful in horizontal flow cases.
 */ function baselineIcon() {
    return {
        iconName: 'align-items-baseline',
        rotate: 0,
        scaleX: 1,
        scaleY: 1
    };
}
function flexAlignSelfIcon(iconName) {
    function getIcon(computedStyles, parentComputedStyles) {
        return flexAlignItemsIcon(iconName)(parentComputedStyles);
    }
    return getIcon;
}
function gridAlignSelfIcon(iconName) {
    function getIcon(computedStyles, parentComputedStyles) {
        return gridAlignItemsIcon(iconName)(parentComputedStyles);
    }
    return getIcon;
}
function roateFlexWrapIcon(iconName, direction) {
    return {
        iconName: iconName,
        rotate: direction === "bottom-to-top" /* PhysicalDirection.BOTTOM_TO_TOP */  || direction === "top-to-bottom" /* PhysicalDirection.TOP_TO_BOTTOM */  ? 90 : 0,
        scaleX: 1,
        scaleY: 1
    };
}
function flexWrapIcon(iconName) {
    function getIcon(computedStyles) {
        var directions = getPhysicalDirections(computedStyles);
        var computedFlexDirection = computedStyles.get('flex-direction') || 'row';
        return roateFlexWrapIcon(iconName, directions[computedFlexDirection]);
    }
    return getIcon;
}
var flexContainerIcons = new Map([
    [
        'flex-direction: row',
        flexDirectionIcon('row')
    ],
    [
        'flex-direction: column',
        flexDirectionIcon('column')
    ],
    [
        'flex-direction: column-reverse',
        flexDirectionIcon('column-reverse')
    ],
    [
        'flex-direction: row-reverse',
        flexDirectionIcon('row-reverse')
    ],
    [
        'flex-direction: initial',
        flexDirectionIcon('row')
    ],
    [
        'flex-direction: unset',
        flexDirectionIcon('row')
    ],
    [
        'flex-direction: revert',
        flexDirectionIcon('row')
    ],
    [
        'align-content: center',
        flexAlignContentIcon('align-content-center')
    ],
    [
        'align-content: space-around',
        flexAlignContentIcon('align-content-space-around')
    ],
    [
        'align-content: space-between',
        flexAlignContentIcon('align-content-space-between')
    ],
    [
        'align-content: stretch',
        flexAlignContentIcon('align-content-stretch')
    ],
    [
        'align-content: space-evenly',
        flexAlignContentIcon('align-content-space-evenly')
    ],
    [
        'align-content: flex-end',
        flexAlignContentIcon('align-content-end')
    ],
    [
        'align-content: flex-start',
        flexAlignContentIcon('align-content-start')
    ],
    [
        'align-content: start',
        flexAlignContentIcon('align-content-start')
    ],
    [
        'align-content: end',
        flexAlignContentIcon('align-content-end')
    ],
    [
        'align-content: normal',
        flexAlignContentIcon('align-content-stretch')
    ],
    [
        'align-content: revert',
        flexAlignContentIcon('align-content-stretch')
    ],
    [
        'align-content: unset',
        flexAlignContentIcon('align-content-stretch')
    ],
    [
        'align-content: initial',
        flexAlignContentIcon('align-content-stretch')
    ],
    [
        'justify-content: center',
        flexJustifyContentIcon('justify-content-center')
    ],
    [
        'justify-content: space-around',
        flexJustifyContentIcon('justify-content-space-around')
    ],
    [
        'justify-content: space-between',
        flexJustifyContentIcon('justify-content-space-between')
    ],
    [
        'justify-content: space-evenly',
        flexJustifyContentIcon('justify-content-space-evenly')
    ],
    [
        'justify-content: flex-end',
        flexJustifyContentIcon('justify-content-end')
    ],
    [
        'justify-content: flex-start',
        flexJustifyContentIcon('justify-content-start')
    ],
    [
        'align-items: stretch',
        flexAlignItemsIcon('align-items-stretch')
    ],
    [
        'align-items: flex-end',
        flexAlignItemsIcon('align-items-end')
    ],
    [
        'align-items: flex-start',
        flexAlignItemsIcon('align-items-start')
    ],
    [
        'align-items: center',
        flexAlignItemsIcon('align-items-center')
    ],
    [
        'align-items: baseline',
        baselineIcon
    ],
    [
        'align-content: baseline',
        baselineIcon
    ],
    [
        'flex-wrap: wrap',
        flexWrapIcon('flex-wrap')
    ],
    [
        'flex-wrap: nowrap',
        flexWrapIcon('flex-no-wrap')
    ]
]);
var flexItemIcons = new Map([
    [
        'align-self: baseline',
        baselineIcon
    ],
    [
        'align-self: center',
        flexAlignSelfIcon('align-self-center')
    ],
    [
        'align-self: flex-start',
        flexAlignSelfIcon('align-self-start')
    ],
    [
        'align-self: flex-end',
        flexAlignSelfIcon('align-self-end')
    ],
    [
        'align-self: stretch',
        flexAlignSelfIcon('align-self-stretch')
    ]
]);
var gridContainerIcons = new Map([
    [
        'align-content: center',
        gridAlignContentIcon('align-content-center')
    ],
    [
        'align-content: space-around',
        gridAlignContentIcon('align-content-space-around')
    ],
    [
        'align-content: space-between',
        gridAlignContentIcon('align-content-space-between')
    ],
    [
        'align-content: stretch',
        gridAlignContentIcon('align-content-stretch')
    ],
    [
        'align-content: space-evenly',
        gridAlignContentIcon('align-content-space-evenly')
    ],
    [
        'align-content: end',
        gridAlignContentIcon('align-content-end')
    ],
    [
        'align-content: start',
        gridAlignContentIcon('align-content-start')
    ],
    [
        'align-content: baseline',
        baselineIcon
    ],
    [
        'justify-content: center',
        gridJustifyContentIcon('justify-content-center')
    ],
    [
        'justify-content: space-around',
        gridJustifyContentIcon('justify-content-space-around')
    ],
    [
        'justify-content: space-between',
        gridJustifyContentIcon('justify-content-space-between')
    ],
    [
        'justify-content: space-evenly',
        gridJustifyContentIcon('justify-content-space-evenly')
    ],
    [
        'justify-content: end',
        gridJustifyContentIcon('justify-content-end')
    ],
    [
        'justify-content: start',
        gridJustifyContentIcon('justify-content-start')
    ],
    [
        'align-items: stretch',
        gridAlignItemsIcon('align-items-stretch')
    ],
    [
        'align-items: end',
        gridAlignItemsIcon('align-items-end')
    ],
    [
        'align-items: start',
        gridAlignItemsIcon('align-items-start')
    ],
    [
        'align-items: center',
        gridAlignItemsIcon('align-items-center')
    ],
    [
        'align-items: baseline',
        baselineIcon
    ],
    [
        'justify-items: center',
        gridJustifyItemsIcon('justify-items-center')
    ],
    [
        'justify-items: stretch',
        gridJustifyItemsIcon('justify-items-stretch')
    ],
    [
        'justify-items: end',
        gridJustifyItemsIcon('justify-items-end')
    ],
    [
        'justify-items: start',
        gridJustifyItemsIcon('justify-items-start')
    ],
    [
        'justify-items: baseline',
        baselineIcon
    ]
]);
var gridItemIcons = new Map([
    [
        'align-self: baseline',
        baselineIcon
    ],
    [
        'align-self: center',
        gridAlignSelfIcon('align-self-center')
    ],
    [
        'align-self: start',
        gridAlignSelfIcon('align-self-start')
    ],
    [
        'align-self: end',
        gridAlignSelfIcon('align-self-end')
    ],
    [
        'align-self: stretch',
        gridAlignSelfIcon('align-self-stretch')
    ]
]);
var isFlexContainer = function(computedStyles) {
    var display = computedStyles === null || computedStyles === void 0 ? void 0 : computedStyles.get('display');
    return display === 'flex' || display === 'inline-flex';
};
var isGridContainer = function(computedStyles) {
    var display = computedStyles === null || computedStyles === void 0 ? void 0 : computedStyles.get('display');
    return display === 'grid' || display === 'inline-grid';
};
function findIcon(text, computedStyles, parentComputedStyles) {
    if (isFlexContainer(computedStyles)) {
        var icon = findFlexContainerIcon(text, computedStyles);
        if (icon) {
            return icon;
        }
    }
    if (isFlexContainer(parentComputedStyles)) {
        var icon1 = findFlexItemIcon(text, computedStyles, parentComputedStyles);
        if (icon1) {
            return icon1;
        }
    }
    if (isGridContainer(computedStyles)) {
        var icon2 = findGridContainerIcon(text, computedStyles);
        if (icon2) {
            return icon2;
        }
    }
    if (isGridContainer(parentComputedStyles)) {
        var icon3 = findGridItemIcon(text, computedStyles, parentComputedStyles);
        if (icon3) {
            return icon3;
        }
    }
    return null;
}
function findFlexContainerIcon(text, computedStyles) {
    var resolver = flexContainerIcons.get(text);
    if (resolver) {
        return resolver(computedStyles || new Map());
    }
    return null;
}
function findFlexItemIcon(text, computedStyles, parentComputedStyles) {
    var resolver = flexItemIcons.get(text);
    if (resolver) {
        return resolver(computedStyles || new Map(), parentComputedStyles || new Map());
    }
    return null;
}
function findGridContainerIcon(text, computedStyles) {
    var resolver = gridContainerIcons.get(text);
    if (resolver) {
        return resolver(computedStyles || new Map());
    }
    return null;
}
function findGridItemIcon(text, computedStyles, parentComputedStyles) {
    var resolver = gridItemIcons.get(text);
    if (resolver) {
        return resolver(computedStyles || new Map(), parentComputedStyles || new Map());
    }
    return null;
} //# sourceMappingURL=CSSPropertyIconResolver.js.map


}),

}]);