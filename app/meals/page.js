import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getAllMeals } from "@/query/meals";

export default async function MealsPage() {
  const meals = await getAllMeals();

  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious melas, created
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipie and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite recipie</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
