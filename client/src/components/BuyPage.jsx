import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import BuyCard from "./BuyCard";
import   "./BuyCard.css"

function CreateBuyCard(item)
{
    return (
        <BuyCard 
            name= {item.name}
            image= {item.image}
            desc= {item.description}
            price= {item.price}
            seller= {item.seller}
            date= {item.date} 
        />
    );
}

function BuyPage() 
{
    const [list, setList] = React.useState(null);
    React.useEffect(() =>{
        fetch("http://localhost:5000/sell").then(res =>{
            if(res.ok){
                return res.json();
            }
        }).then(jsonRes => setList(jsonRes));
    });
    // console.log(list);
    if (!list) return null;

    return (
        <div class="row row-cols-1 row-cols-md-3 g-4 pb-5 pl-4 pr-4 pt-4 buycardBG">
        {list.map(CreateBuyCard)}
        </div>
        
    );
}
export default BuyPage;