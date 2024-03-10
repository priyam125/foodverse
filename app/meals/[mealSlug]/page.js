const MealItem = ({ params }) => {
  console.log(params);
  return <div>{params.mealSlug}</div>;
};

export default MealItem;
