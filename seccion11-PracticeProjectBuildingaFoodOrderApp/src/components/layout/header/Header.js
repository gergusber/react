import { Fragment } from 'react';
import mealsImage from '../../../assets/meals.jpg'
import clases from './Header.module.css'

const Header = (props) => {
    return (
        <Fragment>
            <header className={clases.header}>
                <h1>
                    React Meals
                </h1>
            </header>
            <div className={clases['main-image']} >
                <img src={mealsImage} alt='something' />
            </div>
        </Fragment>
    )
}

export default Header;