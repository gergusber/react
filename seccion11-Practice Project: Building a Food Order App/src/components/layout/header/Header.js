import { Fragment } from 'react';
import mealsImage from '../../../assets/meals.jpg'


const Header = (props) => {
    return (
        <>
            <header>
                <h1>
                    React Meals
                </h1>
            </header>
            <div>
                <img src={mealsImage} />
            </div>
        </>
    )
}

export default Header;