import "./Founder.scss";

const Founder = () => {
  return (
    <section class="founder-section">
      <div class="floating-shapes">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div class="grid-overlay"></div>

      <div class="particles" id="particles-js"></div>

      <div class="founder-content">
        <div className="founder-content-container">
          <div className="founder-content-left">
            <h2>Meet Our Founder</h2>
            <p>
              Visionary leader with a passion for innovation and excellence.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
              incidunt veritatis assumenda enim mollitia porro nobis adipisci
              sequi nesciunt deleniti ducimus unde voluptas voluptate beatae sed
              animi, autem repudiandae maxime.
            </p>
            <button>Connect With Us</button>
          </div>
          <div className="founder-content-right">
            <img
              src="https://www.bluefrontier.co.uk/images/services/development/mobile-app-development/mobile-application.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="custom-wave"></div>
    </section>
  );
};

export default Founder;
