export default function Footer() {
  return (
    <>
      <section class="section-cta">
        <div class="container">
          <div class="cta">
            <div class="cta-text-box">
              <h2 class="heading-secondary">Get your first meal for free!</h2>
              <p class="cta-text">
                Healthy, tasty and hassle-free meals are waiting for you. Start
                eating well today. You can cancel or pause anytime. And the
                first meal is on us!
              </p>

              <form class="cta-form" action="#">
                <div>
                  <label for="full-name">Full Name</label>
                  <input
                    id="full-name"
                    type="text"
                    placeholder="John Smith"
                    required
                  />
                </div>

                <div>
                  <label for="email">Email address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="me@example.com"
                    required
                  />
                </div>

                <div>
                  <label for="select-where">Where did you hear from us?</label>
                  <select id="select-where" required>
                    <option value="">Please choose one option:</option>
                    <option value="friends">Friends and family</option>
                    <option value="youtube">YouTube video</option>
                    <option value="podcast">Podcast</option>
                    <option value="ad">Facebook ad</option>
                    <option value="others">Others</option>
                  </select>
                </div>

                <button class="btn btn--form">Sign up now</button>

                <input type="checkbox" />
                <input type="number" />
              </form>
            </div>
            <div
              class="cta-img-box"
              role="img"
              aria-label="Woman enjoying food"
            ></div>
          </div>
        </div>
      </section>{" "}
      <footer class="footer">
        <div class="container grid grid--footer">
          <div class="logo-col">
            <a href="#" class="footer-logo">
              <img
                class="logo"
                alt="Omnifood logo"
                src="img/omnifood-logo.png"
              />
            </a>

            <ul class="social-links">
              <li>
                <a class="footer-link" href="#">
                  <ion-icon
                    class="social-icon"
                    name="logo-instagram"
                  ></ion-icon>
                </a>
              </li>
              <li>
                <a class="footer-link" href="#">
                  <ion-icon class="social-icon" name="logo-facebook"></ion-icon>
                </a>
              </li>
              <li>
                <a class="footer-link" href="#">
                  <ion-icon class="social-icon" name="logo-twitter"></ion-icon>
                </a>
              </li>
            </ul>

            <p class="copyright">
              Copyright &copy; 2027 by Omnifood, Inc. All rights reserved.
            </p>
          </div>
          <div class="address-col">
            <p class="footer-heading">Contact us</p>
            <address class="contacts">
              <p class="address">
                623 Harrison St., 2nd Floor, San Francisco, CA 94107
              </p>
              <p>
                <a class="footer-link" href="tel:415-201-6370">
                  415-201-6370
                </a>
                <br />
                <a class="footer-link" href="mailto:hello@omnifood.com">
                  hello@omnifood.com
                </a>
              </p>
            </address>
          </div>
          <nav class="nav-col">
            <p class="footer-heading">Account</p>
            <ul class="footer-nav">
              <li>
                <a class="footer-link" href="#">
                  Create account
                </a>
              </li>
              <li>
                <a class="footer-link" href="#">
                  Sign in
                </a>
              </li>
              <li>
                <a class="footer-link" href="#">
                  iOS app
                </a>
              </li>
              <li>
                <a class="footer-link" href="#">
                  Android app
                </a>
              </li>
            </ul>
          </nav>

          <nav class="nav-col">
            <p class="footer-heading">Company</p>
            <ul class="footer-nav">
              <li>
                <a class="footer-link" href="#">
                  About Omnifood
                </a>
              </li>
              <li>
                <a class="footer-link" href="#">
                  For Business
                </a>
              </li>
              <li>
                <a class="footer-link" href="#">
                  Cooking partners
                </a>
              </li>
              <li>
                <a class="footer-link" href="#">
                  Careers
                </a>
              </li>
            </ul>
          </nav>

          <nav class="nav-col">
            <p class="footer-heading">Resources</p>
            <ul class="footer-nav">
              <li>
                <a class="footer-link" href="#">
                  Recipe directory{" "}
                </a>
              </li>
              <li>
                <a class="footer-link" href="#">
                  Help center
                </a>
              </li>
              <li>
                <a class="footer-link" href="#">
                  Privacy & terms
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
}
