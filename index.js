const express = require("express");
const cors = require("cors");
const delphiRoutes = require("./routes/delphiRoutes")
const dotenv = require("dotenv");


dotenv.config({ path: "./config.env" });


const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.BASE_URL,
  })
);

app.use("/delphi", delphiRoutes);


const port = 3001;
app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
