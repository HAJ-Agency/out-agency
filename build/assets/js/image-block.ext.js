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
  !*** ./src/assets/js/image-block.ext.js ***!
  \******************************************/
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
  InspectorControls,
  useBlockProps
} = wp.blockEditor;
const {
  PanelRow,
  PanelBody,
  ToggleControl,
  CustomSelectControl,
  RadioControl,
  TextControl,
  RangeControl
} = wp.components;
const {
  Fragment,
  useRef
} = wp.element;
const {
  __
} = wp.i18n;

// Add extra attributes to the block
const addExtraAttributes = (settings, name) => {
  if (name === "core/image") {
    settings.attributes = {
      ...settings.attributes,
      watermark: {
        type: "boolean",
        default: false
      },
      watermarkPosition: {
        type: "object",
        default: {
          x: "0",
          y: "0"
        }
      },
      watermarkOpacity: {
        type: "number",
        default: 1
      },
      isHideOnMobile: {
        type: "boolean",
        default: false
      },
      isHideOnDesktop: {
        type: "boolean",
        default: false
      }
    };
  }
  return settings;
};
addFilter("blocks.registerBlockType", "extend-cover-block/add-extra-attributes", addExtraAttributes);

// Add a input field to the block's Inspector Controls
const withExtraControls = createHigherOrderComponent(BlockEdit => {
  return props => {
    const {
      attributes,
      setAttributes,
      name
    } = props;
    if (name === "core/image") {
      const {
        watermark,
        watermarkPosition,
        watermarkOpacity,
        isHideOnMobile,
        isHideOnDesktop
      } = attributes;
      const WatermarkPositionPicker = ({
        value,
        onChange
      }) => {
        const pickerRef = useRef(null);
        const handleClick = event => {
          const boundingRect = pickerRef.current.getBoundingClientRect();
          const offsetX = event.clientX - boundingRect.left;
          const offsetY = event.clientY - boundingRect.top;
          const x = Math.round(offsetX / boundingRect.width * 200 - 100);
          const y = Math.round(offsetY / boundingRect.height * 200 - 100);
          onChange({
            x: Math.max(-100, Math.min(100, x)),
            y: Math.max(-100, Math.min(100, y))
          });
        };
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          ref: pickerRef,
          style: {
            position: "relative",
            width: "100%",
            height: "150px",
            background: "#f0f0f0",
            border: "1px solid #ccc",
            borderRadius: "4px",
            cursor: "crosshair",
            userSelect: "none",
            boxSizing: "border-box"
          },
          onClick: handleClick,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            style: {
              position: "absolute",
              top: `${75 + value.y * 75 / 100}px`,
              // Adjust for rectangle height
              left: `${50 + value.x * 50 / 100}%`,
              // Adjust for full width
              width: "10px",
              height: "10px",
              background: "#D6EBFF",
              border: "1px solid #002A3A",
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none"
            }
          })
        });
      };
      const updateWatermarkPosition = newPosition => {
        setAttributes({
          watermarkPosition: newPosition
        });
      };
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BlockEdit, {
          ...props
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InspectorControls, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(PanelBody, {
            title: __("Vattenstämpel", "trelleborg"),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PanelRow, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "full-width-control",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ToggleControl, {
                  label: __("Använd som vattenstämpel", "trelleborg"),
                  checked: watermark,
                  onChange: value => {
                    setAttributes({
                      watermark: value
                    });
                  }
                })
              })
            }), watermark && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PanelRow, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(WatermarkPositionPicker, {
                  value: watermarkPosition,
                  onChange: updateWatermarkPosition
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PanelRow, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                  className: "full-width-control",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RangeControl, {
                    label: __("Opacitet", "trelleborg"),
                    value: watermarkOpacity,
                    onChange: value => setAttributes({
                      watermarkOpacity: value
                    }),
                    min: 0,
                    max: 1,
                    step: 0.005
                  })
                })
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(PanelBody, {
            title: __("Dölj på olika skärmstorlekar", "trelleborg"),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PanelRow, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "full-width-control",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ToggleControl, {
                  label: __("Dölj på Mobil", "trelleborg"),
                  checked: isHideOnMobile,
                  onChange: value => {
                    setAttributes({
                      isHideOnMobile: value
                    });
                  }
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PanelRow, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "full-width-control",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ToggleControl, {
                  label: __("Dölj på Desktop", "trelleborg"),
                  checked: isHideOnDesktop,
                  onChange: value => {
                    setAttributes({
                      isHideOnDesktop: value
                    });
                  }
                })
              })
            })]
          })]
        })]
      });
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BlockEdit, {
      ...props
    });
  };
}, "withExtraControls");
addFilter("editor.BlockEdit", "extend-core-image/with-extra-controls", withExtraControls);

// Frontend
const addPropsToFrontend = (extraProps, blockType, attributes) => {
  if (blockType.name === "core/image") {
    const {
      watermark,
      watermarkPosition,
      watermarkOpacity,
      isHideOnMobile,
      isHideOnDesktop
    } = attributes;
    if (watermark) {
      extraProps.style = {
        ...extraProps.style,
        "--watermark-position-x": `${watermarkPosition.x}`,
        "--watermark-position-y": `${watermarkPosition.y}`,
        "--watermark-opacity": watermarkOpacity !== undefined ? `${watermarkOpacity}` : 1
      };
      extraProps.className = [extraProps.className || "", "image-is-watermark"].filter(Boolean) // Remove empty strings
      .join(" ");
    }
    if (isHideOnMobile) {
      extraProps.className = [extraProps.className || "", "is-mobile-hidden"].filter(Boolean) // Remove empty strings
      .join(" ");
    }
    if (isHideOnDesktop) {
      extraProps.className = [extraProps.className || "", "is-desktop-hidden"].filter(Boolean) // Remove empty strings
      .join(" ");
    }
  }
  return extraProps;
};
wp.hooks.addFilter("blocks.getSaveContent.extraProps", "extend-core-image/apply-styles", addPropsToFrontend);

// Editor
const addPropsToEditor = createHigherOrderComponent(BlockListBlock => {
  return props => {
    const {
      name,
      attributes
    } = props;
    if (name === "core/image") {
      const {
        watermark,
        watermarkPosition,
        watermarkOpacity,
        isHideOnMobile,
        isHideOnDesktop
      } = attributes;
      let wrapperProps = {};
      if (watermark) {
        wrapperProps["data-is-watermark"] = `true`;
        wrapperProps.style = {
          ...wrapperProps.style,
          "--watermark-position-x": `${watermarkPosition.x}`,
          "--watermark-position-y": `${watermarkPosition.y}`,
          "--watermark-opacity": watermarkOpacity !== undefined ? `${watermarkOpacity}` : 1
        };
      }
      if (isHideOnMobile) {
        wrapperProps.className = [wrapperProps.className || "", "is-mobile-hidden"].filter(Boolean) // Remove empty strings
        .join(" ");
      }
      if (isHideOnDesktop) {
        wrapperProps.className = [wrapperProps.className || "", "is-desktop-hidden"].filter(Boolean) // Remove empty strings
        .join(" ");
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
wp.hooks.addFilter("editor.BlockListBlock", "extend-core-image/apply-styles-editor", addPropsToEditor);
})();

/******/ })()
;
//# sourceMappingURL=image-block.ext.js.map