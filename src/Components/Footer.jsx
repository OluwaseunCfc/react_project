import React from 'react'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaLinkedin, FaFacebook } from 'react-icons/fa'

const columns = [
  { title: 'Solutions', items: ['Small businesses', 'Freelancers', 'Customers', 'Taxes'] },
  { title: 'Company', items: ['About us', 'Careers', 'Contact'] },
  { title: 'Learn', items: ['Blog', 'Ebooks', 'Guides', 'Template'] },
]

const socials = [
  { label: 'Facebook', icon: <FaFacebook /> },
  { label: 'X (Twitter)', icon: <FaSquareXTwitter /> },
  { label: 'LinkedIn', icon: <FaLinkedin /> },
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        {/* 2 cols on phones -> 4 on tablets -> 5 on desktop */}
        <div className="row g-4" data-aos="fade-up">
          <div className="col-12 col-lg-4 footer-logo">
            <h2>Finpay</h2>
          </div>

          {columns.map(({ title, items }) => (
            <div className="col-6 col-md-4 col-lg-2 footer-col" key={title}>
              <h4>{title}</h4>
              {items.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          ))}

          <div className="col-6 col-md-4 col-lg-2 footer-col">
            <h4>Social Links</h4>
            <div className="footer-socials">
              {socials.map(({ label, icon }) => (
                <a href="#" key={label} aria-label={label}>
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p data-aos="fade-up">&copy; 2024 Finpay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
