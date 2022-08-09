import { DUMMY_MEALS } from '../../data/dummy-meal'
import Card from '../../UI/card/Card';
import classes from './AvailableMeals.module.css'
import MealItem from './components/MealItem';

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => <MealItem meal={meal} />);
    return <section className={classes.meals}>
        <Card>
            <ul>
                {mealsList}
            </ul>
        </Card>

    </section>
}

export default AvailableMeals;