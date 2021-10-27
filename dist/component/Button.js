"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Button = _ref => {
  let {
    buttonText,
    buttonWidth,
    buttonHeight,
    buttonRadius,
    gradientType,
    gradientDirection,
    gradientColorOne,
    gradientColorTwo,
    disabled,
    onClick
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "".concat(buttonWidth, "%"),
      height: "".concat(buttonHeight, "px"),
      borderRadius: "".concat(buttonRadius, "px"),
      backgroundImage: gradientType ? "".concat(gradientType, "(to ").concat(gradientDirection, ", ").concat(gradientColorOne, ", ").concat(gradientColorTwo, ")") : "linear-gradient(to right, rgba(0, 224, 255, 1), rgba(0, 133, 255, 1))",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/_react.default.createElement("button", {
    style: {
      width: "100%",
      height: "".concat(buttonHeight, "px"),
      backgroundColor: "transparent",
      padding: "3px",
      transition: "all .5s",
      border: "none",
      outline: "none",
      boxSizing: "border-box",
      fontSize: "medium"
    },
    disabled: disabled,
    onClick: onClick,
    id: "gradient__button"
  }, buttonText));
};

var _default = Button;
exports.default = _default;