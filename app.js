const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.post("/process-text", (req, res) => {
  const s = req.body.text || "";

  if (s.trim() !== "") {
    const l = s.split("");
    const lst = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      " ",
    ];

    let n = 0;
    let result = "";

    function sendResult(data) {
      res.write(`${JSON.stringify(data)}\n`);
    }

    while (n < l.length) {
      for (const i of lst) {
        if (l[n] === i) {
          result += i;
          sendResult(result);
          break;
        } else {
          sendResult(result + i);
        }
      }
      n++;
    }

    sendResult({ result });
    res.end();
  } else {
    res.status(400).json({ error: "Text parameter is empty" });
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
