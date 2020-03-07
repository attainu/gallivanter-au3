import React from "react";

function Contact() {
  return (
    <section className="ftco-section contact-section">
      <div className="container">
        <div className="row d-flex mb-5 contact-info">
          <div className="col-md-12 mb-4">
            <h2 className="h3">Contact Information</h2>
          </div>
          <div className="w-100"></div>
          <div className="col-md-3 text-secondary">
            <p>
              <span>Address:</span> 198 West 21th Street, Suite 721 New York NY
              10016
            </p>
          </div>
          <div className="col-md-3 text-secondary">
            <p>
              <span>Phone:</span> <a href="tel://1234567920">+ 9199 8855 98</a>
            </p>
          </div>
          <div className="col-md-3 text-secondary">
            <p>
              <span>Email:</span>{" "}
              <a href="/cdn-cgi/l/email-protection#3b52555d547b42544e4948524f5e15585456">
                <span
                  className="__cf_email__"
                  data-cfemail="84edeae2ebc4fdebf1f6f7edf0e1aae7ebe9"
                >
                  gallivanters@gmail.com
                </span>
              </a>
            </p>
          </div>
          <div className="col-md-3 text-secondary">
            <p>
              <span>Website</span> <a href="#">gallivanters.com</a>
            </p>
          </div>
        </div>
        <div className="row  no-gutters">
          <div className="col-lg-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14393.694109644704!2d85.0337382!3d25.5908391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1583423649590!5m2!1sen!2sin"
              width="600"
              height="600"
              frameborder="0"
              style={{ border: 0 }}
              allowfullscreen=""
              className="embed-responsive"
            ></iframe>
          </div>
          <div className="col-lg-6  d-flex">
            <form action="#" className="bg-light p-4 p-md-5 contact-form">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                />
              </div>
              <div className="form-group">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="7"
                  className="form-control"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Send Message"
                  className="btn py-3 px-5"
                />
              </div>
            </form>
          </div>
          <div className="col-lg-6 d-flex">
            <div id="map" className="bg-white"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
