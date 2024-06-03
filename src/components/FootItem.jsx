import React from "react";
import style from "./fooditem.module.css";
import pizza from "../../assets/pizza.jpg";

function FootItem({ foodData, setFoodId }) {
  return (
    <>
      {foodData.map((food) => (
        <>
          <div className={style.itemContainer} key={food._id}>
            <img src={pizza} alt="pizaa" className={style.imgSize} />
            <div className={style.itemContent}>
              <p className={style.itemName}> {food.firstName}</p>
            </div>
            <div className={style.btnContainer}>
              <button
                className={style.itemBtn}
                onClick={() => setFoodId(food._id)}
              >
                View Details
              </button>
            </div>
          </div>
        </>
      ))}
    </>
  );
}

export default FootItem;
