import Link from "next/link";

const meals = () => {
  return (
    <main>
      <Link href="/meals/meal-1">
        <h1>meals 1</h1>
      </Link>
      <Link href="/meals/meal-2">
        <h1>meals 2</h1>
      </Link>
    </main>
  );
};

export default meals;
