import axios from "axios";
import React, { useEffect, useState } from "react";
import AnswerBox from "./AnswerBox";
// const ans = "correct";
const url = "https://jservice.io/api/random";

const Qustions = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setData(res))
      .catch();
  }, []);

  var { answer, question } = data.data[0];
  // console.log(data.data[0].answer);

  return (
    <div className="Trivia_Questions">
      <h1 className="question">Q. {question} ?</h1>
      <AnswerBox ans={answer} />
    </div>
  );
};

export default Qustions;
