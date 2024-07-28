import React from "react";
import classes from "./page.module.css";
import getMeal from "@/lib/meals";
import Image from "next/image";
import { notFound } from "next/navigation";


export async function generateMetadata({params}){
  const meals = await getMeal(params.mealslug);
  if(!meals){
  notFound()
  }
  return {
    title:meals.title,
    description:meals.summary
  }
}
export default async function MealDetails ({ params })  {
  const meals = await getMeal(params.mealslug);
  meals.instructions=meals.instructions.replace(/\n/g,"<br />")

  if(!meals){
    notFound()
  }
  return (
    <>
    
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meals.image} alt={meals.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meals.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meals.creator_email}`}></a>
            {meals.creator}
          </p>
          <p className={classes.summary}>{meals.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
             __html: meals.instructions
             }}
        ></p>
      </main>
    </>
  );
};

