import React from "react";
import { FaShieldAlt } from "react-icons/fa";
import { RiBankLine } from "react-icons/ri";
import { TbTransfer } from "react-icons/tb";
import { MdArrowOutward } from "react-icons/md";

function Home() {
  return (
    <div>
      <div className="container">
            {/* Experience section */}
        <div className="experience">
          <h6 className="d-block" data-aos="fade-right">
            FUTURE PAYMENT
          </h6>
          <div className="experience-text d-flex justify-content-between mt-3">
            <h2 data-aos="fade-right">
              Experience that grows with your scale.
            </h2>
            <p data-aos="fade-right">
              Design a financial operating system that works for your business
              and streamlined cashflow management
            </p>
          </div>

          <div className="experience-icons mt-5 d-flex gap-5">
            <div className="experience-content">
              <div className="icons" data-aos="fade-up">
                <TbTransfer />
              </div>
              <h3 data-aos="fade-up">Free transfers</h3>
              <p data-aos="fade-up">
                Create a financial experience and automate repeate purchases by
                schedulling recurrring payments.
              </p>
            </div>

            <div className="experience-content">
              <div className="icons" data-aos="fade-up">
                <RiBankLine />
              </div>
              <h3 data-aos="fade-up">Multiple accounts</h3>
              <p data-aos="fade-up">
                Run your operation with cash from your account and generate
                yield on funds stored in your account.
              </p>
            </div>

            <div className="experience-content">
              <div className="icons" data-aos="fade-up">
                <FaShieldAlt />
              </div>
              <h3 data-aos="fade-up">Umatched security</h3>
              <p data-aos="fade-up">
                Securely manage your finances with organization-wide MFA, card
                locking and account-level controls.
              </p>
            </div>
          </div>
        </div>

        {/* prefer section */}
        <div className="prefer-section">
          <h6 data-aos="fade-up">WHY US</h6>
          <h2 data-aos="fade-up">Why they prefer Finpay</h2>

          <div className="prefer-content">
            <div className="content-flex d-flex gap-5 m-5">
              <div className="content p-5">
                <h2 data-aos="fade-right">3k+</h2>
                <h4 data-aos="fade-right">
                  Businesses already running on Finpay
                </h4>
              </div>

              <div className="content p-5" data-aos="fade-down">
                <h4 data-aos="fade-down">
                  Instant withdraw your funds at anytime
                </h4>
                <div
                  className="experience-icons d-flex gap-5 mt-5 mx-4"
                  data-aos="fade-down"
                >
                  <h2 className="ex-icon1">X</h2>
                  <TbTransfer size={75} className="ex-icon2" />
                  <RiBankLine size={75} className="ex-icon3" />
                </div>
              </div>
            </div>

            <div className="last-content p-5 d-flex justify-content-between">
              <div className="prefer-text p-5" data-aos="fade-up">
                <h4>No asset volatility</h4>
                <p>
                  Generate returns on your cash reserves without making any
                  investments.
                </p>
              </div>

              <div className="prefer-image d-flex justify-content-between">
                <div className="prefer-img-content">
                  <h6 className="text-start">Summary</h6>
                  <h2 data-aos="fade-up">$1,876,580</h2>
                  <img
                    src={"/prefer.jpg"}
                    alt="hero image"
                    data-aos="fade-up"
                  />
                </div>

                <details>
                  <summary>6 months</summary>
                  <p>1 year</p>
                  <p>2 years</p>
                </details>
              </div>
            </div>
          </div>
        </div>

        {/* maximize section */}

        <div className="maximize-section">
          <h6 className="text-start">STEP</h6>
          <h2 data-aos="fade-up">
            Maximize your return with a Reserve account that generates.
          </h2>

          <div className="maximize-cards d-flex justify-content-between mt-5 gap-5">
            <div className="maximize-card" data-aos="fade-right">
              <h2>1</h2>
              <h3>Open your account</h3>
              <p>
                Signup to Finpay and set up your account from the dashboard.
              </p>
            </div>

            <div className="maximize-card" data-aos="fade-right">
              <h2>2</h2>
              <h3>Transfer your money</h3>
              <p>
                Move money from to anonther account into and start to earning
                up.
              </p>
            </div>

            <div className="maximize-card" data-aos="fade-right">
              <h2>3</h2>
              <h3>Watch your balance grow</h3>
              <p>
                Accessed instantly and remain insulated from market volatility.
              </p>
            </div>
          </div>
        </div>

        {/* mission section */}

        <section className="mission mb-0">
          <h6>OUR MISSION</h6>
          <h2 data-aos="fade-up">
            We've helped <br /> innovative companies
          </h2>
          <p className="text-center" data-aos="fade-up">
            Hundreds of all sizes and across all industries <br /> have made a
            big improvement with us
          </p>

          <div className="mission-figures d-flex flex-wrap justify-content-evenly mt-5">
            <div className="figure" data-aos="fade-up">
              <h2>24%</h2>
              <p>Revenue business</p>
            </div>

            <div className="figure" data-aos="fade-up">
              <h2>180K</h2>
              <p>In annual revenue</p>
            </div>

            <div className="figure" data-aos="fade-up">
              <h2>10+</h2>
              <p>Months of runway</p>
            </div>
          </div>

          <h5 className="plan text-center mt-5">CHOOSE PLAN:</h5>
          <div className="amount-card d-flex flex-wrap justify-content-evenly mt-5">
            <div className="card-1 px-5 py-3" data-aos="fade-up">
              <h2 data-aos="fade-up">Plus</h2>
              <div
                className="amount d-flex justify-content-between"
                data-aos="fade-up"
              >
                $2.99/month <MdArrowOutward />
              </div>
            </div>

            <div className="card-2 px-5 py-3" data-aos="fade-up">
              <h2 data-aos="fade-up">Premium</h2>
              <div
                className="amount mt-5 text-white d-flex justify-content-between"
                data-aos="fade-up"
              >
                $2.99/month <MdArrowOutward />
              </div>
            </div>
          </div>

          {/* tri it section */}

          <div className="try-it py-5 px-5 mx-3">
            <h6 className="try-it-heading text-start">TRY IT NOW</h6>
            <div className="try-it-content d-flex justify-content-between">
              <div className="try-it-text text-white">
                <h2 data-aos="fade-up">Ready to level up your</h2>
                <h2 data-aos="fade-up">payment process?</h2>
                <p data-aos="fade-up">
                  Supports small businesses with invoicing, powerful
                  integration, and cashflow management tools.
                </p>
              </div>

              <div className="try-it-btn mt-5" data-aos="fade-right">
                <button className="btn-1">Get Started Now</button>
                <button className="btn-2">
                  Learn More <MdArrowOutward />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
