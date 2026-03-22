// require("./modules/http");
// require("./modules/express");

const dotenv = require("dotenv");
dotenv.config();

require("./src/api");

const connectToDatabase = require("./src/database/connect");
connectToDatabase();
