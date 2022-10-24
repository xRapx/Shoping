import "../css/style.css"
import "../css/bootstrap.css"
import "../css/responsive.css"
import Service from "./Service";
import Fruits from "./Fruits";
import Location from "./Location";
import Contact from "./Contact";

function Home (){
    return(
    // Logo
<>
        {/* Content Sline Show */}

    <section class=" slider_section position-relative">
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="slider_item-box">
              <div class="slider_item-container">
                <div class="container">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="slider_item-detail">
                        <div>
                          <h1>
                            Welcome to <br />
                            Our Fruits Shop
                          </h1>
                          <p>
                            There are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered
                            alteration in some form, by injected humour, or
                            randomised words which don't look even slightly
                            believable.
                          </p>
                          <div class="d-flex">
                            <a href="" class="text-uppercase custom_orange-btn mr-3">
                              Shop Now
                            </a>
                            <a href="" class="text-uppercase custom_dark-btn">
                              Contact Us
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="slider_img-box">
                        <div>
                          <img src={require('../img/slide-img.png')} alt="" class="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="slider_item-box">
              <div class="slider_item-container">
                <div class="container">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="slider_item-detail">
                        <div>
                          <h1>
                            Welcome to <br />
                            Our Fruits Shop
                          </h1>
                          <p>
                            There are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered
                            alteration in some form, by injected humour, or
                            randomised words which don't look even slightly
                            believable.
                          </p>
                          <div class="d-flex">
                            <a href="" class="text-uppercase custom_orange-btn mr-3">
                              Shop Now
                            </a>
                            <a href="" class="text-uppercase custom_dark-btn">
                              Contact Us
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="slider_img-box">
                        <div>
                          <img src={require('../img/slide-img.png')} alt="" class="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="slider_item-box">
              <div class="slider_item-container">
                <div class="container">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="slider_item-detail">
                        <div>
                          <h1>
                            Welcome to <br />
                            Our Fruits Shop
                          </h1>
                          <p>
                            There are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered
                            alteration in some form, by injected humour, or
                            randomised words which don't look even slightly
                            believable.
                          </p>
                          <div class="d-flex">
                            <a href="" class="text-uppercase custom_orange-btn mr-3">
                              Shop Now
                            </a>
                            <a href="" class="text-uppercase custom_dark-btn">
                              Contact Us
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="slider_img-box">
                        <div>
                          <img src={require('../img/slide-img.png')} alt="" class="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="custom_carousel-control">
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
{/* end slider show */}

<Service/>
<Fruits />
<Location />
  {/* <!-- tasty section --> */}
  <section className="tasty_section">
    <div className="container_fluid">
      <h2>
        Very tasty fruits
      </h2>
    </div>
  </section>
  {/* <!-- end tasty section --> */}

  {/* <!-- client section --> */}

<section className="client_section layout_padding">
  <div className="container">
    <h2 className="custom_heading">Testimonial</h2>
    <p className="custom_heading-text">
      There are many variations of passages of Lorem Ipsum available, but
      the majority have
    </p>
    <div>
      <div id="carouselExampleControls-2" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="client_container layout_padding2">
              <div className="client_img-box">
                <img src="images/client.png" alt="" />
              </div>
              <div className="client_detail">
                <h3>
                  Johnhex
                </h3>
                <p className="custom_heading-text">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in
                  some form, by injected humour, or randomised words which
                  don't look even slightly believable. If you are <br />
                  going to use a passage of Lorem Ipsum, you need to be sure
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="client_container layout_padding2">
              <div className="client_img-box">
                <img src={require('../img/slide-img.png')} alt="" />
              </div>
              <div className="client_detail">
                <h3>
                  Johnhex
                </h3>
                <p className="custom_heading-text">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in
                  some form, by injected humour, or randomised words which
                  don't look even slightly believable. If you are <br />
                  going to use a passage of Lorem Ipsum, you need to be sure
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="client_container layout_padding2">
              <div className="client_img-box">
                <img src={require('../img/slide-img.png')} alt="" />
              </div>
              <div className="client_detail">
                <h3>
                  Johnhex
                </h3>
                <p className="custom_heading-text">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in
                  some form, by injected humour, or randomised words which
                  don't look even slightly believable. If you are <br />
                  going to use a passage of Lorem Ipsum, you need to be sure
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="custom_carousel-control">
          <a className="carousel-control-prev" href="#carouselExampleControls-2" role="button" data-slide="prev">
            <span className="" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls-2" role="button" data-slide="next">
            <span className="" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

      </div>
    </div>
  </div>
</section>

{/* <!-- end client section --> */}
<Contact />
</>)
}
export default Home;