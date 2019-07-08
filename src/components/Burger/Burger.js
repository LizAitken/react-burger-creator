// THis will be the burger rendered to screen
import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient.js';

const burger = (props) => {
    // Transforming states 'ingredients' to an array, b/c one cannot map() over an object
    // keys() method will extract the keys of a given method and return that into an array- returns array of keys
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            // transform string value into an array 
            return [...Array(props.ingredients[igKey])].map((_, index) => {
                return <BurgerIngredient key={igKey + index} type={igKey}/>
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients</p>;
        console.log(transformedIngredients);
    }        

    return (
        <div className="burger">
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;