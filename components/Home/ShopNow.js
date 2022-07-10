import React from 'react';

function ShopNow() {
  return (
    <div className="shopNow">
      <div className="innerShopNow">
        <div className="details">
          <p className="titleP">New Womens's Clothing</p>
          <p className="titleP">Witer Collection 2022</p>
          <p className="titleP2">Browse and find new winter outfits...</p>
          <button className="grayBtn">Shop Now</button>
        </div>
        <div className="shopNowImg">
          <img src="/images/model.png" alt="" className="model" />
          <img src="/images/dress.png" alt="" className="dress" />
        </div>
      </div>
    </div>
  );
}

export default ShopNow;
