import "./style.css";
import { useContext } from "react";
import { StoreContext } from "./../../context/StoreContext";
import { useNavigate } from "react-router";

export default function Cart() {
  const { cartItems, food_list, removeToCart, getTotalCartAmount } =
    useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <>
      <section className="cart">
        <div className="cart-items">
          <div className="title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div key={index}>
                  <div className="title cart-items-item">
                    <img src={item.image} alt={item.name} />
                    <h6>{item.name}</h6>
                    <p>${item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>${item.price * cartItems[item._id]}</p>
                    <p onClick={() => removeToCart(item._id)} className="cross">
                      X
                    </p>
                  </div>
                  <hr />
                </div>
              );
            }
          })}
        </div>
      </section>
      <section className="cart-button">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <h4>Subtotal</h4>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <h4>Delievery Fee</h4>
              <p>{getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <h4>Total</h4>
              <p>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </p>
            </div>
          </div>
          <button onClick={() => navigate("/place-order")}>
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Promo Code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
