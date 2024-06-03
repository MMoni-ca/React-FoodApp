import React, { useEffect, useState } from "react";
import pizza from "../../assets/pizza.jpg";
import styles from "./fooddetails.module.css";

function FoodDetail({ foodId }) {
  const [food, setFoodDetails] = useState({});
  const [isLoding, setLoading] = useState(true);
  useEffect(() => {
    async function fetchFood() {
      const url = "http://localhost:3001/customers/view?userId";
      const res = await fetch(url + `=${foodId}`);
      const data = await res.json();
      console.log(data.result);
      setFoodDetails(data.result);
      setLoading(false);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName} >{food.firstName}</h1>
        <img src={pizza} alt="pizaa" className={styles.imgSize} />
        <div>
          <span>
            <strong>Food :{food.department}</strong>
          </span>
          <span>
            <strong>{food.emailAddress}</strong>
          </span>
          <span>
            <strong>Serves :{food.phonenumber}</strong>
          </span>
        </div>
        <h2>Instructions</h2>
        <div>
          <ol>
            {isLoding ? (
              <p>Loading ...</p>
            ) : (
              <>
                <li>chop pumpkin using a food processor until rice-like</li>
                <li>
                  saut pumpkin in a hot Ovile oil for 3 mininuts , set a side
                  and let cool down.
                </li>
                <li>Mix feta and spices mix well until wel blended.</li>
                <li>Evenly add pumpkin spoon and firmly. </li>
              </>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default FoodDetail;
