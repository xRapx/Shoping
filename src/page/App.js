import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import FruitsPage from "./Fruits";
import ServicePage from "./Service";
import ContactPage from "./Contact";
import HomePage from "./Home";
import Footer from "./Footer";
import "../css/style.css";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <header className="header_section">
        <div className="container">
          <nav className="navbar navbar-expand-lg custom_nav-container pt-3">
            <div>
              <Link className="navbar-brand" to="/">
                <img src={require("../img/logo.png")} />
                <span>Tropiko</span>
              </Link>
            </div>
            {/* ----------------------------Link */}
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/fruits">
                      Fruits
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/service">
                      Serivce
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
                <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                  <button
                    className="btn  my-2 my-sm-0 nav_search-btn"
                    type="submit"
                  ></button>
                </form>
              </div>
              <div className="quote_btn-container ml-0 ml-lg-4 d-flex justify-content-center">
                <a href="">Get A quote</a>
              </div>
            </div>
          </nav>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/fruits" element={<FruitsPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </header>
      {/* end header session */}
      <Home />
      <Footer />
    </div>
  );
}

export default App;
