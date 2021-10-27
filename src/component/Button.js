import React from "react";

const Button = ({
  buttonText,
  buttonWidth,
  buttonHeight,
  buttonRadius,
  gradientType,
  gradientDirection,
  gradientColorOne,
  gradientColorTwo,
}) => {
  return (
    <div
      style={{
        width: `${buttonWidth}%`,
        height: `${buttonHeight}px`,
        borderRadius: `${buttonRadius}px`,
        backgroundImage: gradientType
          ? `${gradientType}(to ${gradientDirection}, ${gradientColorOne}, ${gradientColorTwo})`
          : `linear-gradient(to right, rgba(0, 224, 255, 1), rgba(0, 133, 255, 1))`,
        display: "grid",
        placeItems: "center",
      }}
    >
      <button
        style={{
          width: "100%",
          height: `${buttonHeight}px`,
          backgroundColor: "transparent",
          padding: "3px",
          transition: "all .5s",
          border: "none",
          outline: "none",
          boxSizing: "border-box",
          fontSize: "medium",
        }}
        id={"gradient__button"}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Button;
