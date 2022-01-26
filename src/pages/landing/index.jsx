import React, { useEffect } from "react";

import Navbar from "../../components/Navbar";
import Dashed from "../../components/Dashed";
import Footer from "../../components/Footer";

import { Link } from "react-router-dom";

import WelcomeVector from "../../assets/image/Frame.png";
import SaranImg from "../../assets/image/saran";
import AlasanImg from "../../assets/image/reasonIcon";
import PsikologIMG from "../../assets/image/ourPsikolog";
import ClientIMG from "../../assets/image/testimonial/Picture.png";
import Recomended from "../../assets/image/recomendedReading";
import CTA from "../../assets/image/CTA/Group.png";
import Quote from "../../assets/image/testimonial/quote.svg";
import Dots from "../../assets/image/dots";

import Vector from "../../assets/svg/welcome";
import Vektor1 from "../../assets/svg/welcome/Vector.svg";

import "./landing.css";

function Landing() {
  useEffect(() => {
    document.title = "Celina | Homepage";
  }, []);

  return (
    <>
      <Navbar />

      {/* WELCOME SECTION */}
      <section className="welcome">
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="col-6 d-md-block d-none">
              <img src={WelcomeVector} alt="" className="welcome-image" />
            </div>
            <div className="col-md-5 col-sm-12 d-flex justify-content-center flex-column">
              <span className="welcome-to">WELCOME TO CELINA</span>
              <h1 className="welcome-title">
                Your friend for personal mental health
              </h1>
              <p className="welcome-desc d-sm-block d-lg-block d-md-none">
                <b>Celina</b> merupakan layanan informasi dan konsultasi online
                untuk kesehatan mental bersama psikolog yang sudah
                berpengalaman.
              </p>
              <Link to="#">
                <button className="welcome-button">Discover More</button>
              </Link>
            </div>
          </div>
        </div>

        <img src={Vektor1} alt="" className="vector1" id="hmm" />
      </section>

      {/* SARAN SECTION */}
      <section className="saran">
        <div className="container">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <Dashed />
            <h2 className="saran-solusi mt-3 mb-4">
              Dapatkan saran dan solusi untuk menjaga kesehatan mentalmu
            </h2>
          </div>
          <div className="row d-flex justify-content-md-center justify-content-lg-between">
            <div className="col-lg-4 col-md-10 p-3 saran-card">
              <div className="saran-card__content p-4">
                <div className="image-containter">
                  <img src={SaranImg.First} alt="" />
                </div>
                <h3 className="my-4">Psikolog Berpengalaman</h3>
                <p>
                  Psikolog Celina sudah mendapatkan sertifikat resmi dari
                  Himpunan psikologi Indonesia.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-10 p-3 saran-card">
              <div className="saran-card__content p-4">
                <div className="image-containter">
                  <img src={SaranImg.Second} alt="" />
                </div>
                <h3 className="my-4">Mudah dan Cepat</h3>
                <p>
                  Kemudahan konsultasi dengan respon yang cepat dari psikolog
                  celina.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-10 p-3 saran-card">
              <div className="saran-card__content p-4">
                <div className="image-containter">
                  <img src={SaranImg.Third} alt="" />
                </div>
                <h3 className="my-4">Ramah</h3>
                <p>
                  Nikmati kenyamanan berkonsultasi dengan psikolog yang ramah.
                </p>
              </div>
            </div>
          </div>
        </div>

        <img src={Vector.alasan1} alt="" className="vectorAlasan1" />

        <img src={Dots.five} alt="" className="saran-dots" />
      </section>
      {/* ALASAN SECTION */}
      <section className="alasan">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 d-flex justify-content-center">
              <div className="alasan-kiri">
                <div className="dashed">
                  <div className="div"></div>
                  <div className="div"></div>
                  <div className="div"></div>
                </div>
                <h2 className="my-3">Kenapa ke Psikolog?</h2>
                <p className="my-4">
                  Membantu anda dalam menghadapi dan mencari solusi dari
                  permasalahan yang dihadapi.
                </p>
                <div className="d-sm-none d-none d-lg-block">
                  <Link to="#">
                    <button className="welcome-button appoinment-button px-5">
                      Buat Janji
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 co-md-12 mb-3 d-flex justify-content-center">
              <div className="alasan-kanan mb row d-flex flex-lg-column flex-md-row justify-content-between col-sm-10 col-lg-12 col-md-10">
                <div className="alasan-items col-lg-12 col-md-6">
                  <img src={AlasanImg.Megaphone} alt="" />
                  <span>Pendengar yang Baik</span>
                </div>
                <div className="alasan-items col-lg-12 col-md-6">
                  <img src={AlasanImg.Crown} alt="" />
                  <span>Anda menjadi prioritas</span>
                </div>
                <div className="alasan-items col-lg-12 col-md-6">
                  <img src={AlasanImg.Smiley} alt="" />
                  <span>Ramah</span>
                </div>
                <div className="alasan-items col-lg-12 col-md-6">
                  <img src={AlasanImg.Users} alt="" />
                  <span>Teman Curhat</span>
                </div>
              </div>
            </div>
            <div className="d-md-block d-lg-none text-center">
              <Link to="#">
                <button className="welcome-button appoinment-button px-5">
                  Buat Janji
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PSIKOLOG SECTION */}
      <section className="psikolog">
        <div className="container">
          <div className="d-flex psikolog__heading flex-column align-items-center justify-content-center">
            <Dashed />
            <h2 className="psikolog__heading--title my-3">Psikolog kami</h2>
            <p className="psikolog__heading--desc text-center">
              Lorem ipsum dolor sit amet constretreus.
            </p>
          </div>

          <div className="psikolog__list">
            <div className="psikolog__list--container row d-md-flex justify-content-center">
              <div className="col-lg-4 col-md-6 text-center">
                <img src={PsikologIMG.a} alt="" />
                <h3 className="psikolog-name">
                  Mustika Permatahati, S.Psi, M.Psi
                </h3>
                <h4 className="psikolog-title">PSIKOLOG</h4>
              </div>

              <div className="col-lg-4 col-md-6 text-center">
                <img src={PsikologIMG.b} alt="" />
                <h3 className="psikolog-name">
                  Eduardus Saptono Pambudi S.Psi, M.Psi
                </h3>
                <h4 className="psikolog-title">PSIKOLOG</h4>
              </div>

              <div className="col-lg-4 col-md-6 text-center">
                <img src={PsikologIMG.c} alt="" />
                <h3 className="psikolog-name">
                  Fransiscus Febrianto, S.Psi, M.Psi
                </h3>
                <h4 className="psikolog-title">PSIKOLOG</h4>
              </div>
            </div>
          </div>

          <div className="dotted mt-5">
            <div></div>
            <div className="mx-2"></div>
            <div></div>
          </div>
        </div>

        <img src={Dots.treefour} alt="" className="psikolog-dots4" />

        <img src={Dots.treefive} alt="" className="psikolog-dots5" />
      </section>

      <section className="testi">
        <div className="row col-12">
          <div className="col-md-6 col-sm-12 testi__left d-flex justify-content-md-end justify-content-center">
            <div className="col-10 testi__left--card">
              <div className="d-flex justify-content-end">
                <img src={Quote} alt="" className="text-right quote-hide" />
              </div>
              <Dashed />
              <h2 className="mt-4">What our customers are saying</h2>
              <p>
                Feedback from these happy customers helps us in reaching the
                heights.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-sm-12 testi__right d-flex justify-content-md-start justify-content-center">
            <div className="col-10 testi__right--card">
              <div className="d-flex justify-content-end">
                <img src={Quote} alt="" className="text-right quote-right" />
              </div>

              <div className="testi__right--customer d-flex align-items-center">
                <img src={ClientIMG} className="customer__image me-3" alt="" />
                <div className="customer__details">
                  <div className="customer__details--name">Jenny Wilson</div>
                  <div className="customer__details--title">Vice President</div>
                </div>
              </div>
              <p className="my-4">
                We had an incredible experience working with Landify and were
                impressed they made such a big difference in only three weeks.
                Our team is so grateful for the wonderful improvements they made
                and their ability to get familiar with the product concept so
                quickly. It acted as a catalyst to take our design to the next
                level and get more eyes on our product.
              </p>
              <div className="testi__right__arrow--cont mt-4 d-flex justify-content-end">
                <span className="testi__right--arrow px-2 mx-2">&lt;</span>
                <span className="testi__right--arrow px-2 mx-2">&gt;</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="recomended">
        <div className="container">
          <div className="recomended__heading d-flex flex-column align-items-center">
            <Dashed />
            <h2 className="my-3">Recommended reading</h2>
          </div>

          <div className="recomended__articles flex-wrap d-flex d-md-flex justify-content-center col-12">
            <div className="recomended__articles--article col-lg-4 col-md-6 p-3">
              <img src={Recomended.a} alt="" />
              <div className="article__details px-4 py-3">
                <div className="tema mb-2">Keluarga</div>
                <div className="judul">
                  Disease detection, check up in the laboratory
                </div>
                <p>
                  In this case, the role of the health laboratory is very
                  important to do a disease detection...
                </p>
                <Link to="#" className="readMore">
                  Read More ...
                </Link>
              </div>
            </div>

            <div className="recomended__articles--article col-lg-4 col-md-6 p-3">
              <img src={Recomended.b} alt="" />
              <div className="article__details px-4 py-3">
                <div className="tema mb-2">Kepribadian</div>
                <div className="judul">
                  Herbal medicines that are safe for consumption
                </div>
                <p>
                  Herbal medicine is very widely used at this time because of
                  its very good for your health...
                </p>
                <Link to="#" className="readMore">
                  Read More ...
                </Link>
              </div>
            </div>

            <div className="recomended__articles--article col-lg-4 col-md-6 p-3">
              <img src={Recomended.c} alt="" />
              <div className="article__details px-4 py-3">
                <div className="tema mb-2">Kepribadian</div>
                <div className="judul">
                  Natural care for healthy facial skin
                </div>
                <p>
                  A healthy lifestyle should start from now and also for your
                  skin health. There are some...
                </p>
                <Link to="#" className="readMore">
                  Read More ...
                </Link>
              </div>
            </div>
          </div>
        </div>

        <img src={Vector.rekomendasi} alt="" className="vectorRekomended1" />

        <img src={Dots.five} alt="" className="recomended-dots" />
      </section>

      <section className="kesehatan">
        <div className="container">
          <div className="kesehatan__cont d-flex px-5 align-items-center">
            <img src={CTA} alt="" className="mt-5 px-4 d-lg-block d-none" />
            <div className="p-lg-5 py-5">
              <h2>Jangan menunda untuk kesehatan mental kamu</h2>
              <p>Buat janji sekarang dan dapatkan solusi atas masalah kamu</p>
              <Link to="#">
                <button className="button appoinment-button px-5">
                  Buat Janji
                </button>
              </Link>
            </div>
          </div>

          <img src={Vector.cta1} alt="" className="cta1" />
          <img src={Vector.cta2} alt="" className="cta2" />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Landing;
