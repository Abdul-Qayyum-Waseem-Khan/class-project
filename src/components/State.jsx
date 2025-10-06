import React, { useState } from "react";
import Input from "../hooks/Input";
import Output from "../hooks/Output";

const State = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <Input inputValue={inputValue} setInputValue={setInputValue} />
      <Output inputValue={inputValue} />
      {/* <input
        type="text"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        value={inputValue}
      />
      <h2>The value you entered is{inputValue} </h2> */}
    </div>
  );
};

export default State;
