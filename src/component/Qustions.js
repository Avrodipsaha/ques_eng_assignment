import axios from "axios";
import React, { useEffect, useState } from "react";
import AnswerBox from "./AnswerBox";
const ans = "correct";
const url = "https://jservice.io/api/random";
const Qustions = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setData(res))
      .catch();
  }, []);

  console.log(data);
  return (
    <div className="Trivia_Questions">
      <h1 className="question"> the quesiosn is what are you thinking </h1>
      <AnswerBox ans={ans} />
    </div>
  );
};

export default Qustions;
