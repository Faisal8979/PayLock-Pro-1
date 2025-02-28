require("dotenv").config();
const express = require("express");
const cors  = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000;
require("colors");
const deviceRoutes = require("./routes/deviceRoutes");


const app = express();

app.use(cors());
app.use(bodyParser.json());
// ✅ Device Routes को Use करो
app.use("/device", deviceRoutes);


app.get("/", (req, res) =>{
    res.send("<h1>PayLOck Pro Is Running....</h1>")
});


app.listen(port, () =>{
    console.log(`Server Run Port Number ${port}`.bgMagenta);
});


