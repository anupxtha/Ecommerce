import { useState } from 'react';
export default function payment() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="khaltiPay">
        <div className="innerPayment">
          <div className="paymentDetails" onClick={() => setShow(true)}>
            <h3>Payment Method</h3>
            <div className="paymentLogo">
              <img src="/images/khalti-logo.svg" alt="Khalti Logo" />
              <p>Khalti Mobile Wallet</p>
            </div>
          </div>
          <div className="summary">
            <div className="innerSummary">
              <p className="title">ORDER SUMMARY</p>
              <p>
                Subtotal <span>Price</span>
              </p>
              <p>{/* Delivery <span>Free</span> */}</p>
              <div className="underline"></div>
              <p>Estimated Total</p>
            </div>
          </div>
        </div>
      </div>
      {show && (
        <div className="paymentPopup">
          <div className="innerPopup">
            <p>
              You will be redirected to your khalti account to complete your
              payment:
            </p>
            <ul>
              <li>
                Login to your khalti account using your khalti ID and your
                Password
              </li>
              <li>
                Ensure your khalti account is active and has sufficient balance
              </li>
            </ul>
            <img src="/images/khalti-logo.svg" alt="" />
            <div className="closePopup">
              <button className="btn btn-success">Paynow</button>
              <button className="btn btn-danger" onClick={() => setShow(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
