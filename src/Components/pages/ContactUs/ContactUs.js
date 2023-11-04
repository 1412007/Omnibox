import React from "react";
import ContactForm from "../../ContactForm/ContactForm";
import ContactAddress from "../../ContactAddress/ContactAddress";

const ContactUs = () => {
  return (
    <div className="contact">
      <div className="mx-auto max-w-screen-xl flex">
        <ContactForm />
        <ContactAddress />
      </div>
    </div>
  );
};

export default ContactUs;
