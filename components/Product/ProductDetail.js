import React from 'react';

function ProductDetail() {
  return (
    <div className='productDetails'>
      <div className='innerProductDetail'>
        <div className='productImage'>
          <div className='active'></div>
          <div className='nextImg'>
            <div className='innerNextImg' style={{ marginTop: '0%' }}></div>
            <div className='innerNextImg'></div>
            <div className='innerNextImg' style={{ marginBottom: '0%' }}></div>
          </div>
        </div>
        <div className='productDescription'>
          <p className='innerTitle'>
            Title
            <span>
              <i className='fa-solid fa-share-nodes'></i>
              <i className='fa-regular fa-heart'></i>
            </span>
          </p>
          <div className='innerDescription'>
            <p className='description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              volutpat ac quam a aliquam. Proin ultricies neque vel tellus
              feugiat, in egestas turpis molestie. Integer ut justo urna. Morbi
              ut nunc quis eros congue facilisis .
            </p>
            <p className='price'>Price</p>
            <p>ratings</p>
            <div className='filter'>
              <p>Color</p>
              <p>Size</p>
            </div>
          </div>
          <div className='buttons'>
            {/* <div>Quantity</div>  */}
            <div className='btns'>
              <button
                style={{ backgroundColor: '#787878', marginLeft: '7.5%' }}
              >
                Add to cart
              </button>
              <button style={{ marginLeft: '5%' }}>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
