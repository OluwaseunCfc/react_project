import React from 'react'

function Banner() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          {/* text column - each element reveals in sequence rather than the
              whole column at once, which reads better on tall mobile layouts */}
          <div className="col-12 col-lg-6 hero-content">
            <h2 data-aos="fade-up">Get paid early</h2>
            <h3 data-aos="fade-up" data-aos-delay="100">
              Save automatically all your pay.
            </h3>
            <p data-aos="fade-up" data-aos-delay="200">
              Supports small businesses with simple invoicing, powerful
              integrations, and cash flow management tools
            </p>

            {/* input + button flow side by side and wrap on small screens
                instead of being absolutely positioned */}
            <form
              className="hero-form"
              onSubmit={(e) => e.preventDefault()}
              data-aos="fade-up"
              data-aos-delay="300"
            >
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

            <div className="sponsors" data-aos="fade-up" data-aos-delay="400">
              <h4>Klarna.</h4>
              <h4>Coinbase</h4>
              <h4>Instacart</h4>
            </div>
          </div>

          {/* image column */}
          <div
            className="col-12 col-lg-6 hero-image"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img src="/finpay.png" alt="Finpay dashboard preview" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
