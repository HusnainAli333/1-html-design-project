export default function HowItWorks() {
  return (
    <section className="section-how">
      <div className="container">
        <span className="sub-heading">How it works</span>
        <h2 className="heading-secondary">
          Your daily dose of health in 3 simple steps
        </h2>
      </div>
      <div className="how-it-works">
        <div className="container grid grid--col2">
          <div className="how-it-work-text">
            <p className="step-number">01</p>
            <h3 className="heading-ter">
              Tell us what you like (and what not)
            </h3>
            <p className="step-des">
              Never again waste time thinking about what to eat! Omnifood AI
              will create a 100% personalized weekly meal plan just for you. It
              makes sure you get all the nutrients and vitamins you need, no
              matter what diet you follow!
            </p>
          </div>
          <div className="how-to-work-img">
            <img
              src="./img/app/app-screen-1.png"
              alt="omni food app"
              className="section-how-img"
            />
          </div>

          <div className="how-to-work-img">
            <img
              src="./img/app/app-screen-2.png"
              alt="omni food app"
              className="section-how-img"
            />
          </div>
          <div className="how-it-work-text">
            <p className="step-number">2</p>
            <h3 className="heading-ter">Approve your weekly meal plan</h3>
            <p className="step-des">
              Once per week, approve the meal plan generated for you by Omnifood
              AI. You can change ingredients, swap entire meals, or even add
              your own recipes.
            </p>
          </div>

          <div className="how-it-work-text">
            <p className="step-number">3</p>
            <h3 className="heading-ter">Receive meals at convenient time</h3>
            <p className="step-des">
              Best chefs in town will cook your selected meal every day, and we
              will deliver it to your door whenever works best for you. You can
              change delivery schedule and address daily!
            </p>
          </div>
          <div className="how-to-work-img">
            <img
              src="./img/app/app-screen-3.png"
              alt="omni food app"
              className="section-how-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
