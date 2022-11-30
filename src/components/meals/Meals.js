import "./Meals.css";
import MealItem from "./MealItem";
import Card from "../UI/Card";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const Meals = () => {
  return (
    <>
      <section className="summary">
        <h2>Delicious food delivered to you</h2>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </section>

      <section className="meals">
        <Card>
          <ul>
            {DUMMY_MEALS.map((meal) => (
              <MealItem
                id={meal.id}
                key={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}
              />
            ))}
          </ul>
        </Card>
      </section>
    </>
  );
};

export default Meals;
