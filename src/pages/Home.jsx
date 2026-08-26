import React from "react";
import { FaShieldAlt } from "react-icons/fa";
import { RiBankLine } from "react-icons/ri";
import { TbTransfer } from "react-icons/tb";
import { MdArrowOutward } from "react-icons/md";

const features = [
  {
    icon: <TbTransfer />,
    title: "Free transfers",
    text: "Create a financial experience and automate repeat purchases by scheduling recurring payments.",
  },
  {
    icon: <RiBankLine />,
    title: "Multiple accounts",
    text: "Run your operation with cash from your account and generate yield on funds stored in your account.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Unmatched security",
    text: "Securely manage your finances with organization-wide MFA, card locking and account-level controls.",
  },
];

const steps = [
  {
    number: "1",
    title: "Open your account",
    text: "Signup to Finpay and set up your account from the dashboard.",
  },
  {
    number: "2",
    title: "Transfer your money",
    text: "Move money from another account into it and start earning.",
  },
  {
    number: "3",
    title: "Watch your balance grow",
    text: "Accessed instantly and remain insulated from market volatility.",
  },
];

const figures = [
  { value: "24%", label: "Revenue business" },
  { value: "180K", label: "In annual revenue" },
  { value: "10+", label: "Months of runway" },
];

/* Cards in a row reveal one after another. Kept short so the last card
   never feels like it is lagging behind on a fast scroll. */
const stagger = (i) => i * 100;

function Home() {
  return (
    <div className="container">
      {/* ---------- Experience section ---------- */}
      <section className="experience">
        <h6 className="eyebrow" data-aos="fade-up">
          Future payment
        </h6>

        <div className="row g-3 g-lg-4 align-items-end mt-2 experience-text">
          <div className="col-12 col-lg-6">
            <h2 data-aos="fade-up">Experience that grows with your scale.</h2>
          </div>
          <div className="col-12 col-lg-6">
            <p data-aos="fade-up" data-aos-delay="100">
              Design a financial operating system that works for your business
              and streamlined cashflow management
            </p>
          </div>
        </div>

        {/* 1 col on phones -> 2 on tablets -> 3 on desktop */}
        <div className="row g-4 mt-4 mt-lg-5">
          {features.map(({ icon, title, text }, i) => (
            <div className="col-12 col-sm-6 col-lg-4" key={title}>
              <div
                className="experience-content"
                data-aos="fade-up"
                data-aos-delay={stagger(i)}
              >
                <div className="icons">{icon}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Why us / prefer section ---------- */}
      <section className="prefer-section">
        <h6 className="eyebrow" data-aos="fade-up">
          Why us
        </h6>
        <h2 data-aos="fade-up" data-aos-delay="100">
          Why they prefer Finpay
        </h2>

        <div className="row g-4">
          <div className="col-12 col-lg-6">
            <div className="prefer-card" data-aos="fade-up">
              <h2>3k+</h2>
              <h4>Businesses already running on Finpay</h4>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="prefer-card" data-aos="fade-up" data-aos-delay="100">
              <h4>Instant withdraw your funds at anytime</h4>
              <div className="experience-icons mt-4">
                <h2 className="ex-icon1">X</h2>
                <TbTransfer className="ex-icon2" />
                <RiBankLine className="ex-icon3" />
              </div>
            </div>
          </div>
        </div>

        {/* wide card: text + summary panel, stacks under lg */}
        <div className="prefer-wide-card" data-aos="fade-up">
          <div className="row g-4 align-items-center">
            <div className="col-12 col-lg-5 prefer-text">
              <h4>No asset volatility</h4>
              <p>
                Generate returns on your cash reserves without making any
                investments.
              </p>
            </div>

            <div className="col-12 col-lg-7">
              <div className="prefer-image">
                <div className="d-flex justify-content-between align-items-start gap-3">
                  <div className="prefer-img-content">
                    <h6 className="eyebrow">Summary</h6>
                    <h2>$1,876,580</h2>
                  </div>

                  <details className="prefer-details">
                    <summary>6 months</summary>
                    <p>1 year</p>
                    <p>2 years</p>
                  </details>
                </div>

                <img src="/prefer.jpg" alt="Balance growth chart" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Maximize section ---------- */}
      <section className="maximize-section">
        <h6 className="eyebrow" data-aos="fade-up">
          Step
        </h6>
        <h2 data-aos="fade-up" data-aos-delay="100">
          Maximize your return with a Reserve account that generates.
        </h2>

        <div className="row g-4 mt-4 mt-lg-5">
          {steps.map(({ number, title, text }, i) => (
            <div className="col-12 col-md-6 col-lg-4" key={number}>
              <div
                className="maximize-card"
                data-aos="fade-up"
                data-aos-delay={stagger(i)}
              >
                <h2>{number}</h2>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Mission section ---------- */}
      <section className="mission">
        <h6 className="eyebrow" data-aos="fade-up">
          Our mission
        </h6>
        <h2 data-aos="fade-up" data-aos-delay="100">
          We&apos;ve helped <br className="d-none d-sm-inline" /> innovative
          companies
        </h2>
        <p className="text-center" data-aos="fade-up" data-aos-delay="200">
          Hundreds of all sizes and across all industries have made a big
          improvement with us
        </p>

        <div className="row g-4 mt-4 mt-lg-5 text-center">
          {figures.map(({ value, label }, i) => (
            <div
              className="col-12 col-sm-4 figure"
              key={label}
              data-aos="fade-up"
              data-aos-delay={stagger(i)}
            >
              <h2>{value}</h2>
              <p>{label}</p>
            </div>
          ))}
        </div>

        <h5 className="plan text-center mt-5" data-aos="fade-up">
          CHOOSE PLAN:
        </h5>

        <div className="row g-4 mt-3 amount-card justify-content-center">
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <div className="card-1" data-aos="fade-up">
              <h2>Plus</h2>
              <div className="amount">
                <span>$2.99/month</span> <MdArrowOutward />
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 d-flex justify-content-center">
            <div className="card-2" data-aos="fade-up" data-aos-delay="100">
              <h2>Premium</h2>
              <div className="amount">
                <span>$2.99/month</span> <MdArrowOutward />
              </div>
            </div>
          </div>
        </div>

        {/* ---------- Try it now ---------- */}
        <div className="try-it">
          <h6 className="eyebrow" data-aos="fade-up">
            Try it now
          </h6>

          <div className="row g-4 align-items-center mt-2">
            <div
              className="col-12 col-lg-7 try-it-text"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h2>Ready to level up your payment process?</h2>
              <p>
                Supports small businesses with invoicing, powerful integration,
                and cashflow management tools.
              </p>
            </div>

            <div className="col-12 col-lg-5">
              <div
                className="try-it-btn justify-content-lg-end"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <button className="btn-1" type="button">Get Started Now</button>
                <button className="btn-2" type="button">
                  Learn More <MdArrowOutward />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
