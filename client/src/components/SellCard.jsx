import React, { useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./SellCard.css";
import axios from "axios";


const baseURL = "http://localhost:5000/create";

function SellCard() {

    const [input, setInput] = useState({
        name: "",
        price: "",
        description: ""
    })

    function handleChange(event) {
        const { name, value } = event.target;
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }
    function handleClick(event) {
        event.preventDefault();
        const newItem = {
            name: input.name,
            price: input.price,
            description: input.description
        }

        axios.post(baseURL, newItem);
    }


    return (
        <div className=" SellCardBG">
            <form className="SellCard" >
                <h1 className="mb-5 regheading">Register your item here :</h1>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
                        Product Name :
                    </label>
                    <input
                        name="name"
                        onChange={handleChange}
                        value={input.name}
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputState" className="mb-2 fw-bold">
                        Category :
                    </label>
                    <select id="inputState" className="form-control">
                        <option selected>Choose...</option>
                        <option>Stationary</option>
                        <option>Electronics</option>
                        <option>Others</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label fw-bold" htmlFor="exampleInputPassword1">
                        Expected price :
                    </label>
                    <input
                        name="price"
                        onChange={handleChange}
                        value={input.price}
                        type="number"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder=" Rs"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="fw-bold ">
                        Product Description :
                    </label>
                    <div id="emailHelp" className="form-text">
                        Write up about the products condition .
                    </div>
                    <textarea
                        name="description"
                        onChange={handleChange}
                        value={input.description}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="formFileMultiple" className="form-label fw-bold">
                        Upload the pictures of your product here :
                    </label>
                    <input
                        // onChange={handleChange}
                        className="form-control"
                        type="file"
                        id="formFileMultiple"
                        multiple
                    />
                </div>
                <div className="sellcardsubmitdiv">
                    <button type="submit" onClick={handleClick} className="btn btn-outline-dark sellcardsubmitbtn">
                        <h5>Submit</h5>
                    </button>
                </div>
            </form>
        </div>
    );
}
export default SellCard;
