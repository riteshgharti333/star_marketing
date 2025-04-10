import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-top">
        <div className="contact-top-left">
          <div className="contact-top-left-top">
            <h2>Want to discuss a project?</h2>
            <p>
              Tell us a little about your project and one of our team will be in
              touch with you as soon as possible.
            </p>
          </div>

          <div className="contact-top-left-items">
            <div className="contact-top-left-item">
              <p>General Enquries</p>
              <p>Hr@wingstarnarketing.com</p>
            </div>

            <div className="contact-top-left-item">
              <p>Support Enquries</p>
              <p>Hr@wingstarnarketing.com</p>
            </div>

            <div className="contact-top-left-item">
              <p>Intersting in joining team?</p>
              <p>Hr@wingstarnarketing.com</p>
            </div>
          </div>

          <div className="contact-social">
            <span>LinkedIn</span>
            <span>Instagram</span>
            <span>Facebook</span>
          </div>
        </div>
        <div className="contact-top-right">
          <form
            action="
            "
          >
            <div className="form-group">
              <label htmlFor="">Your Name *</label>
              <input type="text" name="" id="" />
            </div>

            <div className="form-group">
              <label htmlFor="">Business Name *</label>
              <input type="text" name="" id="" />
            </div>

            <div className="form-group">
              <label htmlFor="">Email Address *</label>
              <input
                type="email"
                name=""
                id=""
                placeholder="starmarketing@gmail.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="">Contact Number *</label>
              <input type="text" name="" id="" placeholder="0123456789" />
            </div>
            <div className="form-group">
              <label htmlFor="">Type of Project *</label>

              <select name="" id="">
                <option value="">Please Salect</option>
                <option value="">Web Application</option>
                <option value="">Software Application</option>
                <option value="">Full Stack Application</option>
                <option value="">App Application</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="">Tell us about your project*</label>
              <p className="tell-p">
                Please include any details you feel would be beneficial for us
                to know, including scope, timelines, budget, any integrations,
                etc.
              </p>
              <textarea
                name=""
                id=""
                placeholder="Please Detail your requirements here...."
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="">How much is your budget? *</label>
              <input type="text" name="" id=""/>
            </div>

            <div className="form-group">
              <label htmlFor="">
                How did you hear about us? <span className="optional">(Optional)</span>
              </label>

              <select name="" id="">
                <option value="">Please Select</option>
                <option value="">Please Select</option>
                <option value="">Please Select</option>
                <option value="">Please Select</option>
                <option value="">Please Select</option>
              </select>
            </div>

            <div className="privacy">
              <input type="checkbox" name="" id="" />

              <div className="privacy-top">
                <p>
                  In order to submit your details to us, please provide consent
                  to the terms of our <span>privacy policy</span>
                </p>
                <p>
                  This provides all the information regarding data protection
                  and Blue Frontier, and may be updated from time to time, so
                  please check this regularly for updates.
                </p>
              </div>
            </div>

            <button>Submit Details</button>
          </form>
        </div>
      </div>

      <div className="contact-bottom">
        <h2>Find Us</h2>
        <div className="contact-bottom-address">
          {/* <p>Delhi, West East, Sector 123, 1711101</p>

          <p>+91 1234567899</p> */}
        </div>

        <div className="contact-bottom-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3731.805801551631!2d70.98298267524812!3d20.71810908085459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDQzJzA1LjIiTiA3MMKwNTknMDguMCJF!5e0!3m2!1sen!2sin!4v1740658269472!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
