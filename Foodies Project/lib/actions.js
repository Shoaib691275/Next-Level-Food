"use server";
import { redirect } from "next/navigation";

import { saveMeals } from "./meals";
import { revalidatePath } from "next/cache";

export default async function handleSubmit(prevState,formdata){
  function isTextValid(text){
    return !text || text.trim()==''
  }
    const meal={
      title:formdata.get("title"),
      summary:formdata.get("summary"),
      instructions: formdata.get("instructions"),
      image:formdata.get("image"),
      creator:formdata.get("name"),
      creator_email:formdata.get("email"),

    }

    if(isTextValid(meal.title)||isTextValid(meal.summary)||isTextValid(meal.instructions)||isTextValid(meal.creator)||isTextValid(meal.creator_email)||!meal.image||meal.image.size==0){
      return {message:'Invalid input'}
    }
    await saveMeals(meal)
    revalidatePath('/meals')
    redirect('/meals')
  }