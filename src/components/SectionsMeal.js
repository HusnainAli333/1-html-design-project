export default function SectionsMeal() {
  return (
    <section className="section-meal ">
      <div className="container text-align ">
        <span className="sub-heading ">Sample Meals</span>
        <h2 className="heading-secondary ">
          Omnifood AI chooses from 5,000+ recipes
        </h2>
      </div>
      <div className="meals-card container grid">
        <div className="meal-1">
          <img src="./img/meals/meal-1.jpg" alt="" className="meal-img" />

          <span className="meal-tag">Vegan</span>
          <div className="meal-content">
            <p className="meal-title">Japanese Gyozas</p>
            <ul className="meal-atr">
              <li className="meal-atrs">
                <ion-icon name="flame-outline" className="meal-icon"></ion-icon>
                <span>
                  Calories <strong>650</strong>
                </span>
              </li>
              <li className="meal-atrs">
                <ion-icon
                  name="restaurant-outline"
                  className="meal-icon"
                ></ion-icon>
                <span>
                  NutriScore &reg; <strong>74</strong>
                </span>
              </li>
              <li className="meal-atrs">
                <ion-icon name="star-outline" className="meal-icon"></ion-icon>
                <span>
                  <strong>4.9</strong> rating (537)
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="meal-1">
          <img src="./img/meals/meal-1.jpg" alt="" className="meal-img" />

          <span className="meal-tag">Vegan</span>
          <span className="meal-tag-2">Paleo</span>
          <div className="meal-content">
            <p className="meal-title">Avocado Salad</p>
            <ul className="meal-atr">
              <li className="meal-atrs">
                <ion-icon name="flame-outline" className="meal-icon"></ion-icon>
                <span>
                  Calories <strong>400</strong>
                </span>
              </li>
              <li className="meal-atrs">
                <ion-icon
                  name="restaurant-outline"
                  className="meal-icon"
                ></ion-icon>
                <span>
                  NutriScore &reg; <strong>92</strong>
                </span>
              </li>
              <li className="meal-atrs">
                <ion-icon name="star-outline" className="meal-icon"></ion-icon>
                <span>
                  <strong>4.8</strong> rating (441)
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="diets">
          <h3 className="heading-ter">Works with any diet :</h3>
          <ul className="list">
            <li>
              <ion-icon name="checkmark-circle-outline"></ion-icon>
              <span>Vegetarian</span>{" "}
            </li>
            <li>
              <ion-icon name="checkmark-circle-outline"></ion-icon>
              <span>Vegan</span>
            </li>
            <li>
              <ion-icon name="checkmark-circle-outline"></ion-icon>
              <span>Pescatarian</span>
            </li>
            <li>
              <ion-icon name="checkmark-circle-outline"></ion-icon>
              <span>Gluten-free</span>
            </li>
            <li>
              <ion-icon name="checkmark-circle-outline"></ion-icon>
              <span>Lactose-free</span>
            </li>
            <li>
              <ion-icon name="checkmark-circle-outline"></ion-icon>
              <span>Keto</span>
            </li>
            <li>
              <ion-icon name="checkmark-circle-outline"></ion-icon>
              <span>Paleo</span>
            </li>
            <li>
              <ion-icon name="checkmark-circle-outline"></ion-icon>
              <span>Low FODMAP</span>
            </li>
            <li>
              <ion-icon name="checkmark-circle-outline"></ion-icon>
              <span>Kid-friendly</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
