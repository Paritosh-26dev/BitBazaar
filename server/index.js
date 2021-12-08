const express = require('express');
const app = express();
const mongoose = require("mongoose");
var cors = require('cors');

app.use(cors());
app.use(express.json());

//connecting to mongodb atlas->BitBazaar database
mongoose.connect("mongodb+srv://bitbazaar:klpd@cluster0.hh4t5.mongodb.net/testDB");

//below code is contributed by team lobham xd
app.use("/" , require("./routes/itemRoute")) ;

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})



