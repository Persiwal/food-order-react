import MealItem from "./MealItem";
import DUMMY_MEALS from "./dummy-meals";

import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = (props) => {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => {
            return (
              <MealItem
                id={meal.id}
                key={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}
              />
            );
          })}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
