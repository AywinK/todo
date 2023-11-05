const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/helloworld", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(PORT, () => console.log(`app listening on localhost:${PORT}`));

//  res.send("<h1 style=\"color:red;font-size:72px;rotate: 180deg;\">🐧</h1>");
