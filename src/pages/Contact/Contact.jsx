import React from 'react';
import ContactForm from '../../components/ContactFrom/ContactForm';
import PropCard from '../../components/PropCard/PropCard';
import './Contact.css';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
const Contact = () => {
  return (
    <main>
      <PropCard name={'Contact'} link={'Home'} />
      <section className="contact py-3 py-md-4  my-3my-md-4 my-lg-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-9 col-lg-8">
              <ContactForm />
            </div>
            <div className="col-12 col-md-3 col-lg-4">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
