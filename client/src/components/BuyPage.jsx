import React, { useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import BuyCard from "./BuyCard";
import "./BuyCard.css";
import axios from "axios";

const baseURL = "http://localhost:5000/sell";

var selectedCategory = "";
var selectedPrice = "" ;

function handleChangeCategory(event) {
  selectedCategory = event.target.value;
}
function handleChangePrice(event) {
  selectedPrice = event.target.value;
} 


function categoryfilter(item) {
  if (selectedCategory === item.category) {
    if(selectedPrice > item.price) {  
      return CreateBuyCard(item);
    }
    else if(selectedPrice === "") {
      return CreateBuyCard(item) ;
    }
  } else if (selectedCategory === "") {
    if(selectedPrice > item.price) {  
      return CreateBuyCard(item);
    }
    else if(selectedPrice === "") {
      return CreateBuyCard(item) ;
    }
  }
}
function CreateBuyCard(item) {
  return (
    <BuyCard
      name={item.name}
      image={item.image}
      desc={item.description}
      price={item.price}
      seller={item.seller}
      category={item.category}
      date={item.date}
    />
  );
}

function BuyPage() {
  const [list, setList] = React.useState(null);
  React.useEffect(() => {
    fetch("http://localhost:5000/sell")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setList(jsonRes));
  });
  // console.log(list);
  if (!list) return null;

  return (
    <div className=" buycardBG">
      <div className="row row-cols-1 row-cols-md-3 g-4 pb-5 pl-4 pr-4 pt-4">
        <div className="mb-3">
          <label htmlFor="inputState" className="mb-2 fw-bold">
            Category :
          </label>
          <select
            onChange={handleChangeCategory}
            id="inputState"
            className="form-control"
          >
            <option value="">Choose...</option>
            <option value="Stationary">Stationary</option>
            <option value="Electronics">Electronics</option>
            <option value="Others">Others</option>
          </select>
        </div>
      
        <div className="mb-3">
          <label htmlFor="inputState" className="mb-2 fw-bold">
            Price :
          </label>
          <select
            onChange={handleChangePrice}
            id="inputState"
            className="form-control"
          >
            <option value="">Choose...</option>
            <option value="500">Less than 500</option>
            <option value="1000">Less than 1000</option>
            <option value="5000">Less than 5000</option>
            <option value="50000000">More than 5000</option>
          </select>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4 pb-5 pl-4 pr-4 pt-4">
        {list.map(categoryfilter)}
      </div>
    </div>
  );
}
export default BuyPage;
