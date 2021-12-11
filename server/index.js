require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');

//Middleware setup
app.use(cors());
app.use(express.json());

//connecting to mongodb atlas->BitBazaar database
const mongodb_uri = process.env.MONGODB_URI;
mongoose.connect(mongodb_uri);

//Routes module
app.use("/", require("./routes/itemRoute"));
app.use("/", require("./routes/marketplaceRoute"));
app.use("/" , require("./routes/userRoute")) ;
app.use("/" , require("./routes/findUserRoute")) ;

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server is running on ${PORT}`)
})

