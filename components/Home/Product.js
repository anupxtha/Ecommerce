import React from 'react';
import BestProduct from './BestProduct';
import EmailNotification from './EmailNotification';
import FooterSlider from './FooterSlider';
import RecomProduct from './RecomProduct';
import ShopNow from './ShopNow';
import TopProduct from './topProduct';

function Product() {
  return (
    <div className='products'>
      <TopProduct />
      <BestProduct />
      {/* <RecomProduct /> */}
      <FooterSlider />
      <ShopNow />
      <EmailNotification />
    </div>
  );
}

export default Product;
