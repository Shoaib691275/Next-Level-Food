import React from 'react'
import classes from './mealsGrid.module.css'
import MealItem from './mealsItems'
export default function MealsGrid ({meals}) {
  
  return (
    <ul className={classes.meals}>
      {meals.map((meal)=>
      <li key={meal.id}>
        <MealItem {...meal}/>
      </li>
      )}
    </ul>
  )
}
