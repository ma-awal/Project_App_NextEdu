import React from 'react';
import './c-form.css';
const ContactForm = () => {
  return (
    <div className="c-form">
      <div className="heading mb-3 d-flex justify-content-between align-items-center">
        <h4 className="display-6 fw-semibold">Get In Touch</h4>
        <span className="   "></span>
      </div>
      <form action="" className=" ">
        <div className="input_div d-flex flex-column flex-md-row gap-3 justify-content-between mb-4">
          <div className="w-100">
            <input
              type="name"
              id="name"
              name="name"
              className="w-100 form-control   "
              placeholder="Your Name"
            />
          </div>
          <div className="w-100">
            <input
              type="email'"
              id="email"
              name="email"
              className="w-100 form-control  "
              placeholder="Your Email"
            />
          </div>
        </div>
        <div className="input_div d-flex flex-column flex-md-row gap-3 justify-content-between mb-4">
          <div className="w-100">
            <input
              type="number"
              id="number"
              name="number"
              className="w-100 form-control   "
              placeholder="Your Number"
            />
          </div>
          <div className="w-100">
            <input
              type="subject'"
              id="subject"
              name="subject"
              className="w-100 form-control  "
              placeholder="Your Subject"
            />
          </div>
        </div>
        <div className="textarea ">
          <textarea
            name=""
            id=""
            className="form-control text_area"
            placeholder="Your Message"
            cols="30"
            rows="6"
          ></textarea>
        </div>
        <div className=" mt-3  text-center">
          <button type="sumit" className=" rounded-0    btn   ">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
