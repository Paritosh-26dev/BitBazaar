import React from "react";
import ContactCard from "./ContactCard";
import contacts from "../contacts";

function CreateEnty(entry) {
  return (
    <ContactCard
      key={entry.id}
      name={entry.name}
      branch={entry.branch}
      email={entry.email}
      img= {entry.imgURL}
    />
    
  );
}

function ContactUs() {
  return (
    <div className="contactus row">
      <h1 className="heading">Contact Us</h1>
      <dl className="col-lg-6" >{contacts.map(CreateEnty)}</dl>
    </div>
  );
}
export default ContactUs;
