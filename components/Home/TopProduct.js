import React from 'react';

function TopProduct() {
  return (
    <div className='topSell'>
      <div className='innerTop'>
        <p>Top Selling Product</p>
        <div className='cards'>
          <div className='lists'>
            <div className='cardsPic'>
              <img src='' alt='' />
              <div className='rating'>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-regular fa-heart'></i>
              </div>
            </div>
            <div className='details'>
              <p>name</p>
              <p>price</p>
            </div>
          </div>
          <div className='lists'>
            <div className='cardsPic'>
              <img
                src='https://picsum.photos/200/300'
                alt=''
                style={{ width: '100%', height: '100%' }}
              />
              <div className='rating'>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-regular fa-heart'></i>
              </div>
            </div>
            <div className='details'>
              <p>name</p>
              <p>price</p>
            </div>
          </div>
          <div className='lists'>
            <div className='cardsPic'>
              <img src='' alt='' />
              <div className='rating'>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-regular fa-heart'></i>
              </div>
            </div>
            <div className='details'>
              <p>name</p>
              <p>price</p>
            </div>
          </div>
          <div className='lists' style={{ marginRight: '0' }}>
            <div className='cardsPic'>
              <img src='' alt='' />
              <div className='rating'>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-regular fa-heart'></i>
              </div>
            </div>
            <div className='details'>
              <p>name</p>
              <p>price</p>
            </div>
          </div>
        </div>
        <div className='btns'>
          <button>View More</button>
        </div>
      </div>
    </div>
  );
}

export default TopProduct;
