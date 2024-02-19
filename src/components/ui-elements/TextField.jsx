import React from "react";

function TextField({ id, label, type, placeholder, value, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <input
        className={"text-field text-field-primary"}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event, id)}
      />
    </div>
  );
}

export default TextField;
