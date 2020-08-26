import React from "react";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <div>
      <section className="site-blocks-cover overflow-hidden bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-6 align-self-center text-center text-md-left">
              <div className="intro-text">
                <h1>
                  We Care For <span className="d-md-block">Your Cat</span>
                </h1>
                <p className="mb-4">
                  We always try to provide your Cat the best
                  <span className="d-block"> services.</span>
                </p>
              </div>
            </div>
            <div className="col-md-6 align-self-end text-center text-md-right">
              <img
                src="/imgs/cat1.gif"
                alt="Image"
                className="img-fluid cover-img"
              />
            </div>
          </div>
        </div>
      </section>
      <br></br>
      <br></br>
      <div className="text-center">
        <i
          className="fa fa-paw"
          aria-hidden="true"
          style={{ padding: "5px", color: "#976C19" }}
        ></i>
        <i
          className="fa fa-paw"
          aria-hidden="true"
          style={{ padding: "5px", color: "#976C19" }}
        ></i>
        <i
          className="fa fa-paw"
          aria-hidden="true"
          style={{ padding: "5px", color: "#976C19" }}
        ></i>
      </div>
      <section className="site-section">
        <div className="container">
          <div className="row justify-content-center" data-aos="fade-up">
            <div className="col-lg-6 text-center heading-section mb-5">
              <div className="paws">
                <span className="icon-paw" />
              </div>
              <h2 className="text-black mb-2">Welcome to Catter Pet Care</h2>
              <p>
                At International Cat Care we believe in a world in which each
                cat’s life experience will be as good as it can be. We do this
                by providing cat owners, veterinary professionals and those that
                live and work with cats with the resources, support and advice
                they need to care better for their cats.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* About */}
      <section className="site-section" id="about-section">
        <div className="container">
          <div className="row justify-content-center" data-aos="fade-up">
            <div className="col-lg-5 align-self-center mr-auto text-left heading-section mb-5">
              <div className="paws ml-4">
                <span className="icon-paw" />
              </div>
              <h2 className="text-black mb-3">About Us</h2>
              <p className="lead">
                <i
                  className="fa fa-paw"
                  aria-hidden="true"
                  style={{ padding: "5px", color: "#976C19" }}
                ></i>
                We provide high-level, relevant advice and support for cat
                owners and cat carers. This information has been put together by
                our feline veterinary and behaviour specialists
              </p>
              <p className="lead">
                <i
                  className="fa fa-paw"
                  aria-hidden="true"
                  style={{ padding: "5px", color: "#976C19" }}
                ></i>
                Our veterinary division the International Society of Feline
                Medicine works with veterinary professionals across the world to
                provide cutting-edge information and care of cats.
              </p>

              <p className="lead">
                <i
                  className="fa fa-paw"
                  aria-hidden="true"
                  style={{ padding: "5px", color: "#976C19" }}
                ></i>
                We work to provide solutions and advice to improve the welfare
                of feral, aims to provide a cat health resource which can be
                trusted by cat owners and those working with cats.
              </p>
            </div>
            <div
              className="col-lg-6 text-left heading-section mb-5"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <a
                data-fancybox
                data-ratio="1.5"
                href="https://vimeo.com/317571768"
                className="video-img"
              >
                <span className="play">
                  <span className="icon-play" />
                </span>
                <img
                  src="/imgs/catAbout.PNG"
                  alt="Image"
                  className="img-fluid catImg"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
