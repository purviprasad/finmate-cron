const express = require("express");
const cronRoute = express.Router();

const { cronService } = require("../cron/cron");

// const { protect } = require("../middlewares/authProtect");
//view
cronRoute.get("/cronService", cronService);
module.exports = cronRoute;
