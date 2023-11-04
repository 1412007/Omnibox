import React from "react";

const ContactAddress = () => {
  return (
    <div className="address">
      <div className="item">
        <i className="fa-solid fa-location-dot"></i>
        Lorem ipsum dolor ngồi amet consectetuer
      </div>
      <div className="item">
        <i className="fa-solid fa-phone"></i>
        1900.93.93.93
      </div>
      <div className="item">
        <i className="fa-solid fa-envelope"></i>
        Lorem ipsum dolor
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.562185169636!2d106.68146361091655!3d10.768186059300737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f22762451c9%3A0x6c1750fad6fdcbd4!2sParis%20Baguette!5e0!3m2!1sen!2s!4v1699113840678!5m2!1sen!2s"
        width={600}
        height={450}
        style={{ border: 0, borderRadius: "10px" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default ContactAddress;
