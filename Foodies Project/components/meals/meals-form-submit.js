'use client';
import { useFormStatus } from "react-dom";
export default function MealSubmit() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending}>
      {pending ? "Submitting..." : "Submit Meal"}
    </button>
  );
}
