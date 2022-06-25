import React, { useState } from "react";

const AnswerBox = (props) => {
  const [userInput, setUserInput] = useState("");
  const [display, setDisplay] = useState();

  const handelSubmit = (event) => {
    event.preventDefault();
    setUserInput("");
    if (userInput === props.ans) {
      setDisplay("correct");
    } else {
      setDisplay("incorrect");
    }
  };

  const handelOnchange = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <label className="label">
          <input
            type="text"
            className="Input"
            placeholder="write your answer"
            onChange={handelOnchange}
            value={userInput}
          />
          <button>submit</button>
        </label>
      </form>
      <div
        className="answer"
        style={{ color: display === "correct" ? "green" : "red" }}
      >
        {display}
      </div>
    </div>
  );
};

export default AnswerBox;
