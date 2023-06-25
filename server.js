const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
const express = require("express");
// const { cronService } = require("./cron/cron");
const app = express();
// cronService();

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
