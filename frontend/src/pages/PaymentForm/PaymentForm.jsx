import React, { useContext } from "react";
import "./PaymentForm.css";
import { StoreContext } from "../../context/StoreContext";


const PaymentForm = () => {

  const {getTotalCartAmount } = useContext(StoreContext)
  
  return (
    <div className="payment-container">
      <div className="payment-form">
        <h2>Payment Details</h2>
        <form>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              placeholder="1234 5678 9012 3456"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cardName">Cardholder's Name</label>
            <input
              type="text"
              id="cardName"
              name="cardName"
              placeholder="John Doe"
            />
          </div>
          <div className="form-row">
            <div className="form-group half-width">
              <label htmlFor="expiryDate">Expiry Date</label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                placeholder="MM/YY"
              />
            </div>
            <div className="form-group half-width">
              <label htmlFor="cvv">CVV</label>
              <input type="text" id="cvv" name="cvv" placeholder="123" />
            </div>
          </div>
          <button type="submit" className="submit-button">
            Submit Payment
          </button>
        </form>
      </div>
      <div className="payment-info">
        <h2>Order Summary</h2>
        <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>

            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />

            <div className="cart-total-details">
              <b>Total</b>
              <b>
                ₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>
        {/* Add more details about the order as needed */}
      </div>
    </div>
  );
};

export default PaymentForm;
