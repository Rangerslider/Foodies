import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import './Contact.css';



function Contact() {
  return (
    <>
    <section className='contact mb'>
        <div className='container'>
          <form className='shadow'>
            <h4>Contact Us</h4> <br />
            <div>
              <input type='text' placeholder='Name' />
              <input type='text' placeholder='Email' />
            </div>
            
            <textarea cols='30' rows='10'></textarea>
            <button>Submit Request</button>
          </form>
        </div>
      </section>
    <Footer />


    </>
  );
}

export default Contact;



