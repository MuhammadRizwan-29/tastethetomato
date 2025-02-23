import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./style.css";
import { StoreContext } from "../../context/StoreContext";

export default function FoodItem({ item, index }) {
  const [itemCount, setItemCount] = useState(0);
  const { cartItems, addToCart, removeToCart } = useContext(StoreContext);
  return (
    <div className="fd_item" key={index}>
      <div className="fi_img-container">
        <img src={item.image} alt={item.description} />
        {!cartItems[item._id] ? (
          <img
            src={assets.add_icon_white}
            className="add"
            onClick={() => addToCart(item._id)}
            alt=""
          />
        ) : (
          <div className="fi_counter">
            <img
              onClick={() => removeToCart(item._id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[item._id]}</p>
            <img
              onClick={() => addToCart(item._id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="fi_info">
        <div className="fi_name-rating">
          <p>{item.name}</p>
          <img src={assets.rating_starts} />
        </div>
        <p className="description">{item.description}</p>
        <span className="price">${item.price}</span>
      </div>
    </div>
  );
}
