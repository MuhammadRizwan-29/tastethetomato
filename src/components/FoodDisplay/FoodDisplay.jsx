import { useContext } from "react";
import "./style.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

export default function FoodDisplay({ category }) {
  const { food_list } = useContext(StoreContext);
  return (
    <section className="food_display-sec" id="food-display">
      <div className="wrapper">
        <h2>Top dishes near you</h2>
        <div className="fd_list">
          {food_list.map((item, index) => {
            if (category === "all" || category === item.category) {
              return <FoodItem key={index} item={item} />;
            }
          })}
        </div>
      </div>
    </section>
  );
}
