export default function Pricing() {
  return (
    <>
      <section className="section-price">
        <div className="container">
          <span className="sub-heading">Pricing</span>
          <h2 className="heading-secondary">
            Eating Well without breaking the bank
          </h2>
        </div>
        <div className="container grid plan">
          <div className="pricing-plan starter">
            <header className="plan-header">
              <p className="plan-name">Starter</p>
              <p className="plan-price">
                <span>$</span>399
              </p>
              <p className="plan-text">
                {" "}
                month that is just <span className="plan-r"> $13</span> a meal
              </p>
            </header>
            <ul className="list-price">
              <li>
                <ion-icon name="checkmark-circle-outline"></ion-icon> meal per
                day
              </li>
              <li>
                <ion-icon name="checkmark-circle-outline"></ion-icon>
                Order from 11am to 9pm
              </li>
              <li>
                <ion-icon name="checkmark-circle-outline"></ion-icon> Delivery
                is free
              </li>
              <li className="liii">
                <ion-icon name="close-circle-outline"></ion-icon>Get access to
                latest recipes
              </li>
              <button className="btn .btn--full">Start Eating Well</button>
            </ul>
          </div>
          <div className="pricing-plan complete">
            <header className="plan-header">
              <p className="plan-name">Complete</p>
              <p className="plan-price">
                <span>$</span>649
              </p>
              <p className="plan-text">
                month that is just <span className="plan-q"> $11</span> a meal
              </p>
            </header>
            <ul className="list-price">
              <li>
                <ion-icon name="checkmark-circle-outline"></ion-icon> 2 meals
                per day
              </li>
              <li>
                <ion-icon name="checkmark-circle-outline"></ion-icon>
                Order 24/7
              </li>
              <li>
                <ion-icon name="checkmark-circle-outline"></ion-icon> Delivery
                is free
              </li>
              <li>
                <ion-icon name="checkmark-circle-outline"></ion-icon> Get access
                to latest recipes
              </li>
              <button className="btn .btn--full">Start Eating Well</button>
            </ul>
          </div>
        </div>
      </section>
      <section className="feature ">
        <div className="container ">
          <p className="feature-title ">
            Prices include all taxes.You can cancel anytime Both plans include
            the following:
          </p>
        </div>
        <div className="container features">
          <div className="feature">
            <span className="iconn">
              <ion-icon name="infinite-outline"></ion-icon>
            </span>
            <span>Never Cook again</span>
            <p>
              Our subscriptions cover 365 days per year, even including major
              holidays
            </p>
          </div>
          <div className="feature">
            <ion-icon name="nutrition-outline"></ion-icon>
            <span>Local And Organic</span>
            <p>
              Our cooks only use local, fresh, and organic products to prepare
              your meals.
            </p>
          </div>
          <div className="feature">
            <ion-icon name="leaf-outline"></ion-icon>
            <span>No waste</span>
            <p>
              All our partners only use reusable containers to package all your
              meals.
            </p>
          </div>
          <div className="feature">
            <ion-icon name="pause-circle-outline"></ion-icon>
            <span>Pause at any time</span>
            <p>
              Going on vacation? Just pause your subscription, and we refund
              unused days.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
