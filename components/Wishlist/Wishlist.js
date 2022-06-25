import React from 'react';

function Wishlist() {
  return (
    <div className="mainWishlist">
      <div className="innerWishlist">
        <p className="title">
          <i className="fa-regular fa-heart"></i>
        </p>
        <p className="title">My Wishlist</p>
        <table class="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Product Name</th>
              <th scope="col">Unit price</th>
              <th scope="col">Stuck status</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <i class="fa-solid fa-trash-can"></i>
              </th>
              <td>
                {/* <span className="wishImage"> */}
                <img src="/images/i.jpg" alt="ss" />
                {/* </span>{' '} */}
                Mark
              </td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>
                <p>Added on: December 2022</p>
                <button className="wishListBtn">Add to cart</button>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <i class="fa-solid fa-trash-can"></i>
              </th>
              <td>
                {/* <span className="wishImage"> */}
                <img src="/images/i.jpg" alt="ss" />
                {/* </span>{' '} */}
                Mark
              </td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>
                <p>Added on: December 2022</p>
                <button className="wishListBtn">Add to cart</button>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <i class="fa-solid fa-trash-can"></i>
              </th>
              <td>
                {/* <span className="wishImage"> */}
                <img src="/images/i.jpg" alt="ss" />
                {/* </span>{' '} */}
                Mark
              </td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>
                <p>Added on: December 2022</p>
                <button className="wishListBtn">Add to cart</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Wishlist;
