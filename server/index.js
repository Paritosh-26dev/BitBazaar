const express=require('express');
const app=express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");

app.set("view engine", "ejs") ;
app.use(bodyParser.urlencoded({ extended : true}));
app.use(express.static("public")) ;

//connecting to mongodb atlas->BitBazaar database
mongoose.connect("mongodb+srv://bitbazaar:@cluster0.hh4t5.mongodb.net/BitBazaar");

const PORT=process.env.PORT || 5000;

const productSchema = {
            name: String,
            image: String,
            desc: String,
            price: String,
            seller: String,
            date: String,
};
const Products = mongoose.model('item', productSchema);

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}` )
})
app.get('/products', function (req, res) {
  Products.find(function(err, foundList){
    if(err) console.log(err) ;
    else 
    {
        console.log(foundList);
    }
    res.send(foundList)
})
})

// POST method route
app.post('/products', function (req, res) {
  res.send('POST request to the homepage')
})
