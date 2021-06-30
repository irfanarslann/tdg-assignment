const express = require("express");
const path = require("path");
const app = express();

app.use("/api/data", require("./routes/wave"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("www/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "www", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server Connected"));
