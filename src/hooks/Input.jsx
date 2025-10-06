import React from "react";

const Input = ({ inputValue, setInputValue }) => {
  return (
    <div>
      <h1>This is my input field</h1>
      <input
        type="text"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        value={inputValue}
      />
    </div>
  );
};

export default Input;
