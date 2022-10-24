function Footer() {
  return (
    <>
      <section className="info_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h5>Fruits</h5>
              <ul>
                <li>randomised</li>
                <li>words which</li>
                <li>don't look even</li>
                <li>slightly</li>
                <li>believable. If you</li>
                <li>are going to use</li>
                <li>a passage of</li>
                <li>Lorem Ipsum,</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Services</h5>
              <ul>
                <li>randomised</li>
                <li>words which</li>
                <li>don't look even</li>
                <li>slightly</li>
                <li>believable. If you</li>
                <li>are going to use</li>
                <li>a passage of</li>
                <li>Lorem Ipsum,</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>List</h5>
              <ul>
                <li>randomised</li>
                <li>words which</li>
                <li>don't look even</li>
                <li>slightly</li>
                <li>believable. If you</li>
                <li>are going to use</li>
                <li>a passage of</li>
                <li>Lorem Ipsum,</li>
              </ul>
            </div>
            <div className="col-md-3">
              <div className="social_container">
                <h5>Follow Us</h5>
                <div className="social-box">
                  <a href="">
                    <img src={require('../img/fb.png')} alt="" />
                  </a>

                  <a href="">
                    <img src={require('../img/twitter.png')} alt="" />
                  </a>
                  <a href="">
                    <img src={require('../img/linkedin.png')} alt="" />
                  </a>
                  <a href="">
                    <img src={require('../img/instagram.png')} alt="" />
                  </a>
                </div>
              </div>
              <div className="subscribe_container">
                <h5>Subscribe Now</h5>
                <div className="form_container">
                  <form action="">
                    <input type="email" />
                    <button type="submit">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid footer_section">
        <p>
          Copyright &copy; 2019 All Rights Reserved By
          <a href="https://google.com/">Contact Us</a>
        </p>
      </section>
    </>
  );
}
export default Footer;
