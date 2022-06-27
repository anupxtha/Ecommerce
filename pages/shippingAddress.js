export default function shippingAddress() {
  return (
    <>
      <div className="mainShippingAddress">
        <div className="innerMainShipping">
          <div className="innerDetails">
            <p>Add Shipping Address</p>
            <div className="shippForm">
              <div className="innerShipForm">
                <label>Full Name</label>
                <br />
                <input type="text" name="fname" />
              </div>
              <div className="innerShipForm">
                <label>Region</label>
                <br />
                <select name="region" id="">
                  <option value="ss">ss</option>
                </select>
              </div>
              <div className="innerShipForm">
                <label>Phone Number</label>
                <br />
                <input type="text" name="number" />
              </div>
              <div className="innerShipForm">
                <label>City</label>
                <br />
                <select name="city" id="">
                  <option value="dd">dd</option>
                </select>
              </div>
              <div className="innerShipForm">
                <label>Building/ House No/ Floor/ Street</label>
                <br />
                <input type="text" name="building" />
              </div>
              <div className="innerShipForm">
                <label>Area</label>
                <br />
                <select name="area" id="">
                  <option value="dd">dd</option>
                </select>
              </div>
              <div className="innerShipForm">
                <label>Colony/ Suburb/ Locality/ Landmark</label>
                <br />
                <input type="text" name="colony" />
              </div>
              <div className="innerShipForm">
                <label>Address</label>
                <br />
                <input type="text" name="address" />
              </div>
            </div>
            <div className="shippBtn">
              <button className="btn btn-success"> Save</button>
              <button className="btn btn-danger">Cancel</button>
            </div>
          </div>
          <div className="summary">
            <div className="innerSummary">
              <p className="title">ORDER SUMMARY</p>
              <p>
                Item Subtotal <span>Price</span>
              </p>
              <p>
                Delivery <span>Free</span>
              </p>
              <div className="voucher">
                <input type="text" placeholder="Enter Voucher Code" />
                <button className="btn btn-success">Apply</button>
              </div>
              <div className="underline"></div>
              <p>Estimated Total</p>

              <div className="buttons">
                <button disabled>Proceed to payout</button>
              </div>
              <div className="buttons"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
