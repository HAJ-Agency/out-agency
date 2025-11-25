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
/*!******************************************!*\
  !*** ./src/assets/js/group-block.ext.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const {
  addFilter
} = wp.hooks;
const {
  InspectorControls,
  BlockEdit,
  useSetting
} = wp.blockEditor;
const {
  PanelBody,
  ToggleControl,
  TextControl,
  ColorPalette,
  ColorPicker,
  RangeControl
} = wp.components;
const {
  createHigherOrderComponent
} = wp.compose;
const {
  Fragment
} = wp.element;
const {
  __
} = wp.i18n;

// Add new attributes for group link
const addExtraAttributes = (settings, name) => {
  if (name === "core/group") {
    settings.attributes = {
      ...settings.attributes,
      groupLink: {
        type: "string",
        default: ""
      },
      groupLinkOpenNewTab: {
        type: "boolean",
        default: false
      },
      backgroundColor1: {
        type: "string",
        default: ""
      },
      backgroundColor2: {
        type: "string",
        default: ""
      },
      backgroundSplit: {
        type: "number",
        default: 50
      }
    };
  }
  return settings;
};
addFilter("blocks.registerBlockType", "extend-core-group/extend-group-attributes", addExtraAttributes);

// Add controls to the Inspector panel for the group block
// For rendering - see filters.php
const withExtraControls = createHigherOrderComponent(BlockEdit => {
  return props => {
    const {
      attributes,
      setAttributes,
      name
    } = props;
    if (name === "core/group") {
      const {
        groupLink,
        groupLinkOpenNewTab,
        backgroundColor1,
        backgroundColor2,
        backgroundSplit
      } = attributes;
      const colors = useSetting("color.palette");
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InspectorControls, {
          group: "settings",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(PanelBody, {
            title: __("Bakgrundsfärger (Gradient)", "tiburon"),
            initialOpen: backgroundColor1 && backgroundColor2,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ColorPalette, {
              colors: colors,
              label: __("Färg 1", "tiburon"),
              value: backgroundColor1,
              disableCustomColors: true,
              onChange: value => setAttributes({
                backgroundColor1: value
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ColorPalette, {
              colors: colors,
              label: __("Färg 2", "tiburon"),
              value: backgroundColor2,
              disableCustomColors: true,
              onChange: value => setAttributes({
                backgroundColor2: value
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RangeControl, {
              label: __("Dela vid (%)", "tiburon"),
              value: backgroundSplit,
              onChange: value => setAttributes({
                backgroundSplit: value
              }),
              min: 0,
              max: 100,
              step: 1
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(PanelBody, {
            title: __("Länka Grupp-block", "tiburon"),
            initialOpen: groupLink !== "",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TextControl, {
              label: __("Länk/URL", "tiburon"),
              value: groupLink,
              onChange: value => setAttributes({
                groupLink: value
              }),
              placeholder: "https://example.com"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ToggleControl, {
              label: __("Öppna i ny flik", "tiburon"),
              checked: groupLinkOpenNewTab,
              onChange: () => setAttributes({
                groupLinkOpenNewTab: !groupLinkOpenNewTab
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BlockEdit, {
          ...props
        })]
      });
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BlockEdit, {
      ...props
    });
  };
}, "withExtraControls");
addFilter("editor.BlockEdit", "extend-core-group/with-hover-color-controls", withExtraControls);

// Frontend
const addPropsToFrontend = (extraProps, blockType, attributes) => {
  if (blockType.name === "core/group") {
    const {
      backgroundColor1,
      backgroundColor2,
      backgroundSplit
    } = attributes;
    if (backgroundColor1 && backgroundColor2) {
      extraProps.style = {
        ...extraProps.style,
        backgroundImage: `linear-gradient(90deg, ${backgroundColor1} ${backgroundSplit}%, ${backgroundColor2} ${backgroundSplit}%)`
      };
    }
  }
  return extraProps;
};
addFilter("blocks.getSaveContent.extraProps", "extend-core-group/apply-styles", addPropsToFrontend);

// Editor
const addPropsToEditor = createHigherOrderComponent(BlockListBlock => {
  return props => {
    const {
      name,
      attributes
    } = props;
    if (name === "core/group") {
      const {
        backgroundColor1,
        backgroundColor2,
        backgroundSplit
      } = attributes;
      let wrapperProps = {};
      if (backgroundColor1 && backgroundColor2) {
        wrapperProps.style = {
          ...wrapperProps.style,
          backgroundImage: `linear-gradient(90deg, ${backgroundColor1} ${backgroundSplit}%, ${backgroundColor2} ${backgroundSplit}%)`
        };
      }
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BlockListBlock, {
        ...props,
        wrapperProps: wrapperProps
      });
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BlockListBlock, {
      ...props
    });
  };
}, "addPropsToEditor");
addFilter("editor.BlockListBlock", "extend-core-group/apply-styles-editor", addPropsToEditor);
})();

/******/ })()
;
//# sourceMappingURL=group-block.ext.js.map