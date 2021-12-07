import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import   "./BuyCard.css"

function BuyCard(item) {

    return ( 
        
            <div class="col">
                <div class="card h-100">
                    <img src={item.image} style={{maxHeight: 200 + "px" , overFlow: "auto"}} class="rounded mx-auto img-fluid" alt="..."></img>
                    <div class ="card-body">
                    <h5 class ="card-title formtitle mb-3">{item.name}</h5>
                    <p class ="card-text"><h6 class ="formfield" >Description :</h6>{item.desc}</p>
                    <p class="card-text"><h6 class ="formfield">Price expected :</h6>{item.price}</p>
                    <p class="card-text"><h6 class ="formfield">Seller name :</h6> {item.seller}</p>
                </div>
                <div class="card-footer mb-0 wrapper">
                <p class="text-muted text-small mb-0 pb-0">Date added :{item.date} <button class="btn fa-pull-right"><i class="far fa-bookmark fa-lg btn-outline-dark mb-0 pb-0"></i></button></p>
                </div>
                </div>
            </div>          
    )

}
export default BuyCard;