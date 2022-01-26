import React from "react";

import "./footer.css";

import Logo from "../../assets/image/logo.png";
import * as Icon from "react-bootstrap-icons";
import Reach from "../../assets/image/footer";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="col-12 row d-flex justify-content-between">
            <div className="col-md-3 col-12 mb-4 footer__about">
              <img src={Logo} alt="" />
              <p className="my-4">Your friend for personal mental health</p>
              <div className="social__media d-flex justify-contenct-between">
                <Link to="#">
                  <div className="social__media-cont">
                    <Icon.Instagram color="#805AB1"></Icon.Instagram>
                  </div>
                </Link>
                <Link to="#">
                  <div className="social__media-cont">
                    <Icon.Twitter color="#805AB1"></Icon.Twitter>
                  </div>
                </Link>
                <Link to="#">
                  <div className="social__media-cont">
                    <Icon.Youtube color="#805AB1"></Icon.Youtube>
                  </div>
                </Link>
                <Link to="#">
                  <div className="social__media-cont">
                    <Icon.Facebook color="#805AB1"></Icon.Facebook>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-12 row">
              <div className="col-md-6 col-12 footer__links">
                <h3 className="footer__section--title mb-4">Quick Links</h3>
                <div className="footer__links--content">
                  <Link to="#">
                    <p>Webinar</p>
                  </Link>
                  <Link to="#">
                    <p>Blogs</p>
                  </Link>
                  <Link to="#">
                    <p>About</p>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-12 footer__reach">
                <h3 className="footer__section--title mb-4">Reach us</h3>
                <div className="footer__reach-links">
                  <div className=" d-flex mb-3">
                    <div className="imgcont me-3 col-1 text-center">
                      <img src={Reach.Message} alt="" />
                    </div>
                    <span>hello@celina.com</span>
                  </div>

                  <div className=" d-flex mb-3">
                    <div className="imgcont me-3 col-1 text-center">
                      <img src={Reach.Mobile} alt="" />
                    </div>
                    <span>+62 813 8724 8583</span>
                  </div>

                  <div className=" d-flex mb-3">
                    <div className="imgcont me-3 col-1 text-center">
                      <img src={Reach.Location} alt="" />
                    </div>
                    <span>772 Lyonwood Ave Walnut, CA 91789</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="subFooter d-flex flex-wrap justify-content-md-between justify-content-center align-items-center">
          <p className="col-lg-6 col-12">
            © <span>Celina Konsultasi</span> | Indonesia 2020. All Rights
            Reserved.
          </p>
          <p className="col-lg-6 col-12 text-lg-end text-start">
            <Link to="#">Terms & Conditions</Link> |{" "}
            <Link to="#">Privacy Policy </Link>| <Link to="#"> Help </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
