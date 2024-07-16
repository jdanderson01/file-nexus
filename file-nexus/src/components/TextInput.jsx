import React from "react";

const TextInput = ({ label, type = "text", value, onChange }) => {
  return (
    <div className="text-input">
      <label>
        {label}
        <input type={type} value={value} onChange={onChange} />
      </label>
    </div>
  );
};

export default TextInput;
