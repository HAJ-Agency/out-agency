/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*******************************************!*\
  !*** ./src/assets/js/column-block.ext.js ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const {
  addFilter
} = wp.hooks;
const {
  createHigherOrderComponent
} = wp.compose;
const {
  InspectorControls
} = wp.blockEditor;
const {
  PanelRow,
  PanelBody,
  ToggleControl,
  TextControl
} = wp.components;
const {
  Fragment
} = wp.element;
const {
  __
} = wp.i18n;

// Add extra attributes to the block
const addExtraAttributes = (settings, name) => {
  if (name === "core/column") {
    settings.attributes = {
      ...settings.attributes,
      isOrderResponsive: {
        type: "boolean",
        default: false
      },
      orderMobileIndex: {
        type: "string",
        default: "0"
      }
    };
  }
  return settings;
};
addFilter("blocks.registerBlockType", "extend-column-block/add-extra-attributes", addExtraAttributes);

// Add a input field to the block's Inspector Controls
const withExtraControls = createHigherOrderComponent(BlockEdit => {
  return props => {
    const {
      attributes,
      setAttributes,
      name
    } = props;
    if (name === "core/column") {
      const {
        isOrderResponsive,
        orderMobileIndex
      } = attributes;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BlockEdit, {
          ...props
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InspectorControls, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(PanelBody, {
            title: __("Responsiv Ordning", "tiburon"),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PanelRow, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "full-width-control",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ToggleControl, {
                  label: __("Använd Responsiv Ordning", "tiburon"),
                  checked: isOrderResponsive,
                  onChange: value => {
                    setAttributes({
                      isOrderResponsive: value
                    });
                  }
                })
              })
            }), isOrderResponsive && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PanelRow, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TextControl, {
                label: __("Index för kolumnens ordning på mobil", "tiburon"),
                type: "number",
                value: parseInt(orderMobileIndex),
                onChange: value => {
                  setAttributes({
                    orderMobileIndex: value.toString()
                  });
                }
              })
            })]
          })
        })]
      });
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BlockEdit, {
      ...props
    });
  };
}, "withExtraControls");
addFilter("editor.BlockEdit", "extend-core-column/with-extra-controls", withExtraControls);

// Modify the block save function
const addClassesToSave = (extraProps, blockType, attributes) => {
  const {
    isOrderResponsive
  } = attributes;
  if (blockType.name === "core/column" && isOrderResponsive) {
    // Add is-responsive-order class to the block if isOffset is true
    extraProps.className = `${extraProps.className} is-responsive-order`;
  }
  return extraProps;
};
addFilter("blocks.getSaveContent.extraProps", "extend-core-column/add-classes-to-save", addClassesToSave);

// Apply the styles
const applyStylesToSave = (extraProps, blockType, attributes) => {
  if (blockType.name === "core/column") {
    const {
      isOrderResponsive,
      orderMobileIndex
    } = attributes;
    if (isOrderResponsive) {
      extraProps.style = {
        ...extraProps.style,
        "--order-index": orderMobileIndex
      };
    }
  }
  return extraProps;
};
addFilter("blocks.getSaveContent.extraProps", "extend-core-column/apply-styles", applyStylesToSave);

// Apply in the editor
const addDataPropsInEditor = createHigherOrderComponent(BlockListBlock => {
  return props => {
    const {
      name,
      attributes
    } = props;
    if (name === "core/column") {
      const {
        isOrderResponsive,
        orderMobileIndex
      } = attributes;
      if (isOrderResponsive) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BlockListBlock, {
            ...props,
            wrapperProps: {
              style: {
                "--order-index": orderMobileIndex
              },
              "data-is-responsive-order": `true`
            }
          })
        });
      }
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BlockListBlock, {
      ...props
    });
  };
}, "addDataPropsInEditor");
addFilter("editor.BlockListBlock", "extend-core-column/apply-styles-editor", addDataPropsInEditor);
})();

/******/ })()
;
//# sourceMappingURL=column-block.ext.js.map