const express = require("express");

const app = express();
const PORT = 5000;
app.use("/", (req, res) => {
  res.send("Hello NaveenKumar");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
