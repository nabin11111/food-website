import React from 'react';

const ContactUs = () => {
  return (

<section className="conntacts" id="contacts">

<h1 className="heading">
        <span> Contacts Us</span>
      </h1>
<div className="container">
      <div className="map-container">
     
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54954.54695054054!2d85.4546754!3d27.5654351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb195b5057254d%3A0x5754a554aabb85ad!2sNepalgunj%2C%20Nepal!5e0!3m2!1sen!2snp!4v1665435486585!5m2!1sen!2snp"
          width="450"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
        />
      </div>
      <div className="form-container">
  <h2 className="form-heading">Get In Touch</h2>
  <form>
    <div className="input-group"> {/* Wrap each input in a group for styling */}
      <i className="fas fa-user"></i> {/* Icon for username/name */}
      <input
        type="text"
        placeholder="Username/Name"
        className="form-input"
        required
      />
    </div>
    <div className="input-group">
      <i className="fas fa-envelope"></i> {/* Icon for email */}
      <input
        type="email"
        placeholder="Email Address"
        className="form-input"
        required
      />
    </div>
    <div className="input-group">
      <i className="fas fa-phone"></i> {/* Icon for phone number */}
      <input
        type="tel"
        placeholder="Contact Number"
        className="form-input"
        required
      />
    </div>
    <button type="submit" className="submit-btn">Contact Us</button>
  </form>
</div>




    </div>


</section>

    
 
  );
};

export default ContactUs;
