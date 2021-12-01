import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./SellCard.css"
function SellCard() {

    return ( 
        <div class=" SellCardBG">
        <form class=" SellCard">
        <h1 class="mb-5 regheading">Register your item here :</h1>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label fw-bold">Product Name :</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div> 
        <div class="mb-3">
        <label for="inputState" class="mb-2 fw-bold">Category :</label>
        <select id="inputState" class="form-control">
            <option selected>Choose...</option>
            <option>Stationary</option>
            <option>Electronics</option>
            <option>Others</option>
        </select>
        </div>  
        <div class="form-group mb-3">
            <label class="form-label fw-bold" for="exampleInputPassword1">Expected price :</label>
            <input type="number" class="form-control" id="exampleInputPassword1" placeholder=" Rs"/>
        </div>
       
        <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="fw-bold ">Product Description :</label>
        <div id="emailHelp" class="form-text">Write up about the products condition .</div>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div class="mb-3">
        <label for="formFileMultiple" class="form-label fw-bold">Upload the pictures of your product here :</label>
        <input class="form-control" type="file" id="formFileMultiple" multiple />
        </div>
        <div class="sellcardsubmitdiv">
        <button type="submit" class="btn btn-outline-dark sellcardsubmitbtn"><h5>Submit</h5></button>
        </div>
        </form>
        </div>

        
    )

}
export default SellCard;