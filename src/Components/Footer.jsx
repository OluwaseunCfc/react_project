import React from 'react'
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div>
        <footer>
      <div className="footer d-flex justify-content-around px-5 py-5" data-aos = "fade-up">
        <div className="footer-logo">
          <h2>Finpay</h2>
        </div>

        <div className="footer-solution">
          <h4>Solutions</h4>
          <p>Small businesses</p>
          <p>Freelancers</p>
          <p>Customers</p>
          <p>Taxes</p>
        </div>

        <div className="footer-company">
          <h4>Company</h4>
          <p>About us</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>

        <div className="footer-learn">
          <h4>Learn</h4>
          <p>Blog</p>
          <p>Ebooks</p>
          <p>Guides</p>
          <p>Template</p>
        </div>

        <div className="footer-social-links">
          <h4>Social Links</h4>
          <div className="footer-links d-flex justify-content-evenly">
          <p><FaFacebook /></p>
          <p><FaSquareXTwitter /></p>
          <p><FaLinkedin /></p>
          </div>
        </div>
        </div>

        {/* <hr /> */}

        <div className="footer-copyright">
          <p className='footer-p' data-aos = "fade-up">© 2024 Finpay. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer