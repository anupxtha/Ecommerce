import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import apiServices from '../../utils/apiServices';

function TopSellingProduct() {
  const [searchProduct, setSearchProduct] = useState('');
  const [productData, SetProductData] = useState([]);
  const [searchedProduct, setSearchedProduct] = useState([]);
  const [sliced, setSlice] = useState(8);
  const slice = searchedProduct.slice(0, sliced);
  console.log(productData);

  useEffect(() => {
    apiServices
      .getProduct()
      .then((response) => {
        SetProductData(response.data);
        setSearchedProduct(response.data);
      })
      .catch((err) => {
        dispatch({
          type: 'NOTIFY',
          payload: { error: err.message },
        });
      });
  }, []);
  useEffect(() => {
    if (searchProduct) {
      const searched = productData.filter((newData) => {
        const { product_name, product_category, product_size } = newData;
        return (
          product_name
            .toLocaleLowerCase()
            .includes(searchProduct.toLocaleLowerCase()) ||
          product_category.category_name
            .toLocaleLowerCase()
            .includes(searchProduct.toLocaleLowerCase())
        );
      });
      setSearchedProduct(searched);
      // const searched = productData
      //   .toLocaleString()
      //   .includes(searchProduct.toLocaleString());
      console.log(searched);
    } else {
      setSearchedProduct(productData);
    }
  }, [searchProduct]);

  const loadmore = () => {
    setSlice(sliced + 8);
  };

  return (
    <div className="topSellingProducts">
      <div className="innerTop">
        <div className="head">
          <p className="productTitle">Top Selling Product</p>
          <div className="search">
            <input
              type="text"
              value={searchProduct}
              onChange={(e) => setSearchProduct(e.target.value)}
              placeholder="Search products"
            />

            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <select name="" id="">
            <option value="price">Price</option>
            <option value="availability">Availability</option>
            <option value="newest">Newest</option>
          </select>
        </div>
        <div className="cards">
          {slice ? (
            slice.map((items) => {
              return (
                <div className="lists">
                  <div className="cardsPic">
                    <div className="cardImage">
                      <img
                        src={
                          'http://127.0.0.1:8000' +
                          items.product_image[
                            Math.floor(
                              Math.random() * items.product_image.length
                            )
                          ].product_image
                        }
                        alt="Item"
                      />
                    </div>
                    <div className="descriptions">
                      <p>{items.product_name}</p>
                      <p>{items.product_category.category_name}</p>
                      <p>
                        <s>
                          ${items.product_price + items.get_discounted_price}{' '}
                        </s>
                        <span> ${items.product_price}</span>
                      </p>
                      {/* <p>real price</p> */}
                    </div>
                    <div className="saleCardBtn">
                      <Link
                        href={
                          '/product/' +
                          items.product_category.category_name.replace(
                            ' ',
                            '-'
                          ) +
                          '/' +
                          items.product_name.replace(' ', '-') +
                          '-' +
                          items.id
                        }
                      >
                        <button>View Details</button>
                      </Link>
                      <i className="fa-regular fa-heart"></i>
                    </div>
                    {/* <div className="rating">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-heart"></i>
              </div> */}
                  </div>
                  {/* <div className="details">
              <p>name</p>
              <p>price</p>
            </div> */}
                </div>
              );
            })
          ) : (
            <p
              style={{
                textAlign: 'center',
                marginTop: '20px',
                marginBottom: '20px',
                fontSize: '18px',
              }}
            >
              No products to display...
            </p>
          )}
        </div>
        <div className="btns">
          <button onClick={loadmore}>View More</button>
        </div>
      </div>
    </div>
  );
}

export default TopSellingProduct;
