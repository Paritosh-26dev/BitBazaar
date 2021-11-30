import React from "react";
import "../ContactUs.css";
function ContactCard(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={props.img} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">{props.branch}</p>
        <p className="info">{props.email}</p>
      
      <i class="social-icons fab fa-facebook-f"></i>
            <i class="social-icons fab fa-twitter"></i>
            <i class="social-icons fab fa-instagram"></i>
            <i class="social-icons fas fa-envelope"></i> 
      </div>
    </div>
  );
}

export default ContactCard;