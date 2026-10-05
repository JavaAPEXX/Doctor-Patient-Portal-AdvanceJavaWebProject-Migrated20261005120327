import React from 'react';
import './Footer.css'; // Optional: define .modern-footer, .modern-container, etc.

const Footer: React.FC = () => (
  <footer className="modern-footer text-center text-white mt-5">
    {/* Container */}
    <div className="modern-container p-4 pb-0">
      {/* Social media links */}
      <section className="mb-4">
        <a
          className="btn btn-primary btn-floating m-1"
          href="#!"
          role="button"
          aria-label="Facebook"
        >
          <i className="fab fa-facebook-f"></i>
        </a>

        <a
          className="btn btn-primary btn-floating m-1"
          href="#!"
          role="button"
          aria-label="Twitter"
        >
          <i className="fab fa-twitter"></i>
        </a>

        <a
          className="btn btn-primary btn-floating m-1"
          href="#!"
          role="button"
          aria-label="Google"
        >
          <i className="fab fa-google"></i>
        </a>

        <a
          className="btn btn-primary btn-floating m-1"
          href="#!"
          role="button"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram"></i>
        </a>

        <a
          className="btn btn-primary btn-floating m-1"
          href="#!"
          role="button"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>

        <a
          className="btn btn-primary btn-floating m-1"
          href="#!"
          role="button"
          aria-label="GitHub"
        >
          <i className="fab fa-github"></i>
        </a>
      </section>
    </div>

    {/* Copyright */}
    <div
      className="text-center p-3"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
    >
      © 2022 Copyright:{' '}
      <a className="text-white" href="https://github.com/mdtalalwasim">
        Md.Talal Wasim
      </a>{' '}
      (Developer)
    </div>
  </footer>
);

export default Footer;