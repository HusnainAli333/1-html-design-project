function HeroSection() {
  return (
    <section className="section-hero">
      <div className="hero">
        <div className="hero-section-text">
          <h1 className="heading-primary">
            A healthy meal delivered to your door, every single day
          </h1>
          <p className="heading-des">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>
          <button className="btn  btn--full">Start eating well</button>
          <button className="btn btn--outline">Learn more &darr;</button>
          <div className="hero-meal">
            <div className="hero-imgs">
              <img src="./img/customers/customer-1.jpg" alt="cutomers" />
              <img src="./img/customers/customer-2.jpg" alt="cutomers" />
              <img src="./img/customers/customer-3.jpg" alt="cutomers" />
              <img src="./img/customers/customer-4.jpg" alt="cutomers" />
              <img src="./img/customers/customer-5.jpg" alt="cutomers" />
              <img src="./img/customers/customer-6.jpg" alt="cutomers" />
            </div>
            <p>
              <span>250,000+</span> meals delivered last year!
            </p>
          </div>
        </div>
        <div className="hero-section-image">
          <img
            src="./img/hero.png"
            alt="woman enjoying food"
            className="hero-img"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
