import "./style.css";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

export default function PlaceOrder() {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <section>
      <form className="place-order">
        <div className="po_left">
          <h5>Delievery Information</h5>
          <div className="po_multi-field">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
          </div>
          <input type="email" placeholder="Email address" />
          <input type="text" placeholder="Street" />
          <div className="po_multi-field">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
          </div>
          <div className="po_multi-field">
            <input type="text" placeholder="Zip Code" />
            <input type="text" placeholder="Country" />
          </div>
          <input type="text" placeholder="Phone" />
        </div>
        <div className="po_right">
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
        </div>
      </form>
    </section>
  );
}
