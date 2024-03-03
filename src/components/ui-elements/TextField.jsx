import React from "react";

function TextField({
  parentClassName,
  className,
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
  keyUp,
}) {
  const triggerKeyUpFunction = (event) => {
    if (typeof keyUp === "function") {
      keyUp(event);
    }
  };

  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(event) => onChange(event, id)}
      onKeyUp={(event) => {
        triggerKeyUpFunction(event);
      }}
    />
  );
}

export default TextField;
