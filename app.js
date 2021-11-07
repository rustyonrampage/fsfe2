const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello all"));
app.get("/funny", (req, res) => {
  res.set("x-funny", "Hahahaha").status(418).send("Hahah so funny");
});

app.listen(port, () => console.log(`App runnin on port ${port}`));
