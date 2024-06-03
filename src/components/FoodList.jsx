import React from "react";
import FootItem from "./FootItem";

function FoodList({ foodData, setFoodId }) {
  return (
    <div>
      <FootItem foodData={foodData}  setFoodId={setFoodId}/>
    </div>
  );
}

export default FoodList;
