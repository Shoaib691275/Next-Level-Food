import React, { Suspense } from "react";
import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/mealsGrid";
import { getMeals } from "@/lib/meals";



export async function MealsData(){
  const meals=await getMeals()
  return <MealsGrid meals={meals}/>
}

export default function Meals() {


  
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delecious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p className={classes.hero}>Choose your favorite recipe and cook for UrSelf!.</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fetching Meals...</p>}>

        <MealsData />
        </Suspense>
      </main>
    </>
  );
}
