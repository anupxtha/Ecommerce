import React from 'react';
import Slide from 'react-elastic-carousel';

function FooterSlider() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];

  return (
    <div className="mainSlideCat">
      <div className="sliderCategory">
        <p className="listTitle " style={{ margin: '40px 0 0 0' }}>
          Explore Categories
        </p>
        <Slide breakPoints={breakPoints}>
          {/* <Item> */}

          <div className="card">
            <div className="imageInfo">
              <img src="/images/model.png" alt="photo" />
            </div>
            <div className="desc">
              <h4>Title</h4>
              {/* <p>Address</p>
              <p>Price</p> */}
            </div>
          </div>
          <div className="card">
            <div className="imageInfo">
              <img src="/images/dress.png" alt="photo" />
            </div>
            <div className="desc">
              <h4>Title</h4>
            </div>
            <div className="userInfo"></div>
          </div>
          <div className="card">
            <div className="imageInfo">
              <img src="/images/model.png" alt="photo" />
            </div>
            <div className="desc">
              <h4>Title</h4>
            </div>
            <div className="userInfo"></div>
          </div>
          <div className="card">
            <div className="imageInfo">
              <img src="" alt="photo" />
            </div>
            <div className="desc">
              <h4>Title</h4>
            </div>
            <div className="userInfo"></div>
          </div>
          <div className="card">
            <div className="imageInfo">
              <img src="" alt="photo" />
            </div>
            <div className="desc">
              <h4>Title</h4>
            </div>
            <div className="userInfo"></div>
          </div>
          <div className="card">
            <div className="imageInfo">
              <img src="" alt="photo" />
            </div>
            <div className="desc">
              <h4>Title</h4>
            </div>
            <div className="userInfo"></div>
          </div>

          {/* </Item> */}
          {/* <Item>Two</Item>
                <Item>Three</Item>
                <Item>Four</Item>
                <Item>Five</Item>
                <Item>Six</Item>
                <Item>Seven</Item>
                <Item>Eight</Item> */}
        </Slide>
      </div>
    </div>
  );
}

export default FooterSlider;
