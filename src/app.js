/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  generateAndDisplayExcuse();

  function generateAndDisplayExcuse() {
    let whoList = ["The dog", "My neighbor", "His turtle", "My bird"];
    let actionList = ["ate", "peed", "crushed", "broke"];
    let whatList = ["my homework", "the keys", "the car"];
    let whenList = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];

    let randomWho = Math.floor(Math.random() * whoList.length);
    let randomAction = Math.floor(Math.random() * actionList.length);
    let randomWhat = Math.floor(Math.random() * whatList.length);
    let randomWhen = Math.floor(Math.random() * whenList.length);

    let randomExcuse =
      whoList[randomWho] +
      " " +
      actionList[randomAction] +
      " " +
      whatList[randomWhat] +
      " " +
      whenList[randomWhen];

    document.querySelector("#excuse").innerHTML = randomExcuse;

    return randomExcuse;
  }
};
