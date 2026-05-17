import React from 'react'

function Banner() {
  return (
    <div>
         <div className="hero-section  d-flex justify-content-between">
                <div className="hero-content" data-aos = "fade-right">
                  <h2>Get paid early</h2>
                  <h3>Save automatically all your pay.</h3>
                  <p>Supports small businesses with simple invoicing, powerful integrations, and cash flow management tools</p>
                  <form action="" method="post">
                    <input type="email" className="input-box" placeholder='Your business email' required/>
                  <button className='hero-btn' type='submit'>Get started</button>
                  </form>
        
                  <div className="sponsors d-flex text-start gap-5" data-aos = "fade-up">
                    <h4>Klarna.</h4>
                    <h4>Coinbase</h4>
                    <h4>Instacart</h4>
                  </div>
                </div>
        
                <div className="hero-image me-5" data-aos = "fade-up">
                  <img src={("/finpay.png")} alt="hero image" />
                </div>
              </div>
    </div>
  )
}

export default Banner