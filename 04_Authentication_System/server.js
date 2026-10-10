require("dotenv").config();
const app = require("./src/app.js");
const connectDB = require("./src/db/db.js");

connectDB();

app.listen(8000, () => {
  console.log("server is listening on port 8000");
});
