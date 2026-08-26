import React from 'react'

function Banner() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          {/* text column */}
          <div className="col-12 col-lg-6 hero-content" data-aos="fade-right">
            <h2>Get paid early</h2>
            <h3>Save automatically all your pay.</h3>
            <p>
              Supports small businesses with simple invoicing, powerful
              integrations, and cash flow management tools
            </p>

            {/* input + button now flow side by side and wrap on small screens
                instead of being absolutely positioned */}
            <form className="hero-form" onSubmit={(e) => e.preventDefault()}>
              <label className="visually-hidden" htmlFor="hero-email">Your business email</label>
              <input
                id="hero-email"
                type="email"
                className="input-box"
                placeholder="Your business email"
                required
              />
              <button className="hero-btn" type="submit">Get started</button>
            </form>

            <div className="sponsors" data-aos="fade-up">
              <h4>Klarna.</h4>
              <h4>Coinbase</h4>
              <h4>Instacart</h4>
            </div>
          </div>

          {/* image column */}
          <div className="col-12 col-lg-6 hero-image" data-aos="fade-up">
            <img src="/finpay.png" alt="Finpay dashboard preview" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
