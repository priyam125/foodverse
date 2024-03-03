const MealItem = ({ params }) => {
  console.log(params);
  return <div>{params.slug}</div>;
};

export default MealItem;
