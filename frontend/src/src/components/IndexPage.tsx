import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

/**
 * IndexPage – direct migration of `src/main/webapp/index.jsp`
 * Preserves the original DOM hierarchy, text content, images and Bootstrap‑based
 * carousel while applying the modern design‑system class names.
 */
const IndexPage: React.FC = () => {
  return (
    <div className="modern-container">
      {/* Inline modern CSS overrides (mirrors original .my‑card style) */}
      <style>{`
        .modern-card {
          box-shadow: 0px 0px 10px 1px maroon;
        }
        .modern-carousel img {
          height: 500px;
          object-fit: cover;
        }
      `}</style>

      {/* Header / Navbar */}
      <Navbar />

      {/* -------------------------------------------------
          Carousel (Bootstrap markup – retained for functionality)
       ------------------------------------------------- */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide modern-carousel"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={3}
            aria-label="Slide 4"
          />
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="img/doctor_2.jpg"
              className="d-block w-100"
              alt="Doctor 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="img/doctor_1.jpg"
              className="d-block w-100"
              alt="Doctor 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="img/hospital4.jpg"
              className="d-block w-100"
              alt="Hospital 4"
            />
          </div>
          <div className="carousel-item">
            <img
              src="img/doctor_3.jpg"
              className="d-block w-100"
              alt="Doctor 3"
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* -------------------------------------------------
          First Content Section – Feature Cards
       ------------------------------------------------- */}
      <div className="container p-3">
        <p className="text-center mt-2 mb-5 fs-2 myP-color">
          Some key Features of our Doctor Patient Portal
        </p>
        <div className="row">
          {/* Left column – cards */}
          <div className="col-md-8 p-5">
            <div className="row">
              {/* Card 1 */}
              <div className="col-md-6">
                <div className="modern-card">
                  <div className="card-body">
                    <p className="fs-5 myP-color">11000+ Healing Hands</p>
                    <p>
                      Largest network of the world’s finest and brightest medical
                      experts who provide compassionate care using outstanding
                      expertise.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-md-6">
                <div className="modern-card">
                  <div className="card-body">
                    <p className="fs-5 myP-color">
                      Most Advance Healthcare Technology
                    </p>
                    <p>
                      E-Hospitals has been the pioneer in bringing
                      ground‑breaking health care technologies to Bangladesh.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-md-6 mt-2">
                <div className="modern-card">
                  <div className="card-body">
                    <p className="fs-5 myP-color">Best Clinical Outcomes</p>
                    <p>
                      Leveraging its vast medical expertise &amp; technological
                      advantage, E-Hospitals has consistently delivered best in
                      class clinical outcomes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="col-md-6 mt-2">
                <div className="modern-card">
                  <div className="card-body">
                    <p className="fs-5 myP-color">500+ Pharmacies</p>
                    <p>
                      E-Hospital Pharmacy is our first, largest and most trusted
                      branded pharmacy network, with over 50s0 plus outlets
                      covering the entire nation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column – image */}
          <div className="col-md-4 mt-2 mys-card">
            <img
              className="mt-3"
              src="img/doctor_1.jpg"
              alt="Doctor"
              height={440}
              width={470}
            />
          </div>
        </div>
      </div>

      <hr />

      {/* -------------------------------------------------
          Second Content Section – Team Members
       ------------------------------------------------- */}
      <div className="container p-2">
        <p className="text-center fs-2 myP-color">Our Team</p>
        <div className="row">
          {/* Team Member 1 */}
          <div className="col-md-3">
            <div className="modern-card">
              <div className="card-body text-center">
                <img
                  src="img/doc1.jpg"
                  alt="Dr. John"
                  height={300}
                  width={230}
                />
                <p className="fw-bold fs-5">Dr. John</p>
                <p className="fs-7">(CEO &amp; Chairman)</p>
              </div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="col-md-3">
            <div className="modern-card">
              <div className="card-body text-center">
                <img
                  src="img/doc2.jpg"
                  alt="Dr. Brad"
                  height={300}
                  width={230}
                />
                <p className="fw-bold fs-5">Dr. Brad</p>
                <p className="fs-7">(CTO &amp; Co‑Founder)</p>
              </div>
            </div>
          </div>

          {/* Additional team members would follow... */}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default IndexPage;